import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { COMPANY, BRAND } from "../data/billing";
import { amountToWords } from "./numberToWords";
import loadImageDataUrl from "./loadImageDataUrl";

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 15;
const CONTENT_W = PAGE_W - MARGIN * 2;

// jsPDF's built-in Helvetica font has no glyph for ₹ (U+20B9) — it silently
// renders as a mangled superscript character. Use an ASCII-safe prefix in
// the PDF itself; the on-screen React UI can still show the real ₹ symbol.
const PDF_SYMBOL = { INR: "Rs. ", USD: "$" };

function fmtMoney(n, symbol, locale = "en-IN") {
  const v = Number(n) || 0;
  return `${symbol}${v.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

const STATUS_COLORS = {
  Paid: [16, 150, 90],
  "Partially Paid": [217, 119, 6],
  Unpaid: [220, 38, 38],
};

/**
 * Builds the Crix Technology billing receipt / invoice PDF and returns the
 * jsPDF document (caller decides whether to .save(), .output(), or preview).
 */
export async function buildReceiptPdf(form) {
  const {
    docType = "Receipt", // "Receipt" | "Tax Invoice" | "Quotation"
    currency = "INR",
    symbol = "₹",
    receiptNo,
    date,
    dueDate,
    billTo = {},
    items = [],
    discountPercent = 0,
    taxLabel = "GST (18%)",
    taxPercent = 0,
    amountPaid = 0,
    paymentMode = "UPI",
    notes = "",
  } = form;

  const pdfSymbol = PDF_SYMBOL[currency] || symbol;
  const moneyLocale = currency === "INR" ? "en-IN" : "en-US";
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  // Drop fully-empty rows (e.g. the default blank line item left untouched).
  const lineItems = items.filter((it) => (it.description || "").trim() || (Number(it.qty) || 0) * (Number(it.rate) || 0) !== 0);

  // ── Totals ────────────────────────────────────────────────────────────
  const subtotal = items.reduce((sum, it) => sum + (Number(it.qty) || 0) * (Number(it.rate) || 0), 0);
  const discountAmt = subtotal * (Number(discountPercent) || 0) / 100;
  const taxable = subtotal - discountAmt;
  const taxAmt = taxable * (Number(taxPercent) || 0) / 100;
  const total = taxable + taxAmt;
  const paid = Math.min(Number(amountPaid) || 0, total);
  const balance = Math.max(total - paid, 0);
  const status = balance <= 0 && total > 0 ? "Paid" : paid > 0 ? "Partially Paid" : "Unpaid";

  // ── Assets ───────────────────────────────────────────────────────────
  const [logoData, qrData] = await Promise.all([
    loadImageDataUrl(COMPANY.logo),
    balance > 0 && currency === "INR" ? loadImageDataUrl(COMPANY.qr) : Promise.resolve(null),
  ]);

  const addFooter = () => {
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setDrawColor(...hexToRgb(BRAND.border));
      doc.setLineWidth(0.2);
      doc.line(MARGIN, PAGE_H - 16, PAGE_W - MARGIN, PAGE_H - 16);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...hexToRgb(BRAND.muted));
      doc.text(
        `${COMPANY.website}  •  ${COMPANY.email}  •  ${COMPANY.phone}`,
        PAGE_W / 2, PAGE_H - 11, { align: "center" }
      );
      doc.text(
        `${COMPANY.legalName}  •  CIN: ${COMPANY.cin}`,
        PAGE_W / 2, PAGE_H - 7, { align: "center" }
      );
      doc.text(`Page ${i} of ${pageCount}`, PAGE_W - MARGIN, PAGE_H - 7, { align: "right" });
    }
  };

  // ── Header ───────────────────────────────────────────────────────────
  let y = MARGIN;
  if (logoData) {
    try {
      const props = doc.getImageProperties(logoData);
      const w = 58;
      const h = (props.height / props.width) * w;
      doc.addImage(logoData, "PNG", MARGIN, y - 3, w, h);
    } catch {
      // ignore malformed image, header still works without it
    }
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...hexToRgb(BRAND.navy));
  doc.text(docType.toUpperCase(), PAGE_W - MARGIN, y + 3, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...hexToRgb(BRAND.text));
  let metaY = y + 10;
  doc.text(`No: ${receiptNo}`, PAGE_W - MARGIN, metaY, { align: "right" });
  metaY += 5;
  doc.text(`Date: ${fmtDate(date)}`, PAGE_W - MARGIN, metaY, { align: "right" });
  if (dueDate) {
    metaY += 5;
    doc.text(`Due: ${fmtDate(dueDate)}`, PAGE_W - MARGIN, metaY, { align: "right" });
  }

  y = 38;
  doc.setDrawColor(...hexToRgb(BRAND.teal));
  doc.setLineWidth(1);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);

  // ── Billed By / Billed To ────────────────────────────────────────────
  y += 9;
  const colGap = CONTENT_W / 2 + 5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...hexToRgb(BRAND.teal));
  doc.text("BILLED BY", MARGIN, y);
  doc.text("BILLED TO", MARGIN + colGap, y);

  const leftLines = [
    COMPANY.legalName,
    ...COMPANY.addressLines,
    `Email: ${COMPANY.email}`,
    `Phone: ${COMPANY.phone}`,
    `CIN: ${COMPANY.cin}`,
  ];
  const rightLines = [
    billTo.company ? `${billTo.name || "—"} (${billTo.company})` : (billTo.name || "—"),
    ...(billTo.address ? billTo.address.split("\n").filter(Boolean) : []),
    billTo.email ? `Email: ${billTo.email}` : null,
    billTo.phone ? `Phone: ${billTo.phone}` : null,
    billTo.gstin ? `GSTIN: ${billTo.gstin}` : null,
  ].filter(Boolean);

  // Wrap each logical line to the column width and advance y per wrapped
  // sub-line, so long addresses never overlap the line below them.
  const drawWrappedBlock = (lines, x, startY, maxWidth) => {
    let cy = startY;
    lines.forEach((line, i) => {
      doc.setFont("helvetica", i === 0 ? "bold" : "normal");
      doc.setTextColor(...hexToRgb(i === 0 ? BRAND.navy : BRAND.text));
      const wrapped = doc.splitTextToSize(line, maxWidth);
      doc.text(wrapped, x, cy);
      cy += wrapped.length * 4.6;
    });
    return cy;
  };

  const blockY0 = y + 5;
  doc.setFontSize(9.5);
  const ly = drawWrappedBlock(leftLines, MARGIN, blockY0, colGap - 8);
  const ry = drawWrappedBlock(rightLines, MARGIN + colGap, blockY0, CONTENT_W - colGap);

  y = Math.max(ly, ry) + 3;

  // ── Status / payment mode strip ──────────────────────────────────────
  const badgeColor = STATUS_COLORS[status];
  doc.setFillColor(...badgeColor);
  doc.roundedRect(MARGIN, y, 30, 7, 1.5, 1.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text(status.toUpperCase(), MARGIN + 15, y + 4.7, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...hexToRgb(BRAND.text));
  doc.text(`Payment Mode: ${paymentMode}`, MARGIN + 36, y + 4.8);
  doc.text(`Currency: ${currency}`, PAGE_W - MARGIN, y + 4.8, { align: "right" });

  y += 12;

  // ── Items table ──────────────────────────────────────────────────────
  const body = lineItems.map((it, i) => [
    String(i + 1),
    it.description || "",
    String(it.qty ?? 1),
    fmtMoney(it.rate, pdfSymbol, moneyLocale),
    fmtMoney((Number(it.qty) || 0) * (Number(it.rate) || 0), pdfSymbol, moneyLocale),
  ]);

  autoTable(doc, {
    startY: y,
    margin: { left: MARGIN, right: MARGIN },
    head: [["#", "Description", "Qty", "Rate", "Amount"]],
    body: body.length ? body : [["", "No items added", "", "", ""]],
    theme: "plain",
    styles: { font: "helvetica", fontSize: 9.5, cellPadding: { top: 3, bottom: 3, left: 3, right: 3 }, textColor: hexToRgb(BRAND.text), lineColor: hexToRgb(BRAND.border), lineWidth: 0.1 },
    headStyles: { fillColor: hexToRgb(BRAND.navy), textColor: [255, 255, 255], fontStyle: "bold", halign: "left" },
    alternateRowStyles: { fillColor: hexToRgb(BRAND.rowAlt) },
    columnStyles: {
      0: { cellWidth: 10, halign: "center" },
      1: { cellWidth: "auto" },
      2: { cellWidth: 16, halign: "right" },
      3: { cellWidth: 28, halign: "right" },
      4: { cellWidth: 30, halign: "right" },
    },
    didDrawPage: () => { /* footer added once at the end, across all pages */ },
  });

  y = doc.lastAutoTable.finalY + 8;
  if (y > 250) { doc.addPage(); y = MARGIN; }

  // ── Totals block (right aligned) ────────────────────────────────────
  const totalsX0 = PAGE_W - MARGIN - 80;
  const totalsW = 80;
  const rows = [
    ["Subtotal", fmtMoney(subtotal, pdfSymbol, moneyLocale)],
    ...(discountPercent > 0 ? [[`Discount (${discountPercent}%)`, `- ${fmtMoney(discountAmt, pdfSymbol, moneyLocale)}`]] : []),
    ...(taxPercent > 0 ? [[taxLabel, fmtMoney(taxAmt, pdfSymbol, moneyLocale)]] : []),
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  rows.forEach(([label, val]) => {
    doc.setTextColor(...hexToRgb(BRAND.text));
    doc.text(label, totalsX0, y);
    doc.text(val, PAGE_W - MARGIN, y, { align: "right" });
    y += 6;
  });

  doc.setFillColor(...hexToRgb(BRAND.navy));
  doc.rect(totalsX0 - 3, y - 2, totalsW + 3, 9, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text("Total", totalsX0, y + 4);
  doc.text(fmtMoney(total, pdfSymbol, moneyLocale), PAGE_W - MARGIN, y + 4, { align: "right" });
  y += 12;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...hexToRgb(BRAND.text));
  doc.text("Amount Paid", totalsX0, y);
  doc.text(fmtMoney(paid, pdfSymbol, moneyLocale), PAGE_W - MARGIN, y, { align: "right" });
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setTextColor(...hexToRgb(balance > 0 ? "#dc2626" : BRAND.teal));
  doc.text("Balance Due", totalsX0, y);
  doc.text(fmtMoney(balance, pdfSymbol, moneyLocale), PAGE_W - MARGIN, y, { align: "right" });
  y += 10;

  // ── Amount in words ──────────────────────────────────────────────────
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...hexToRgb(BRAND.muted));
  const words = doc.splitTextToSize(`Amount in words: ${amountToWords(total, currency)}`, CONTENT_W);
  doc.text(words, MARGIN, y);
  y += words.length * 4 + 6;

  if (y > 255) { doc.addPage(); y = MARGIN; }

  // ── QR code (only when a balance is outstanding, INR payments) ──────
  if (qrData) {
    try {
      const props = doc.getImageProperties(qrData);
      const qrSize = 26;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...hexToRgb(BRAND.navy));
      doc.text("Scan to Pay via UPI", MARGIN, y);
      doc.addImage(qrData, "JPEG", MARGIN, y + 3, qrSize, qrSize * (props.height / props.width));
    } catch {
      // ignore — QR is a nice-to-have, not required for a valid receipt
    }
  }

  // ── Notes / Terms ─────────────────────────────────────────────────────
  const notesX = qrData ? MARGIN + 40 : MARGIN;
  const notesW = qrData ? CONTENT_W - 40 : CONTENT_W;
  if (notes && notes.trim()) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...hexToRgb(BRAND.navy));
    doc.text("Notes", notesX, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...hexToRgb(BRAND.text));
    const lines = doc.splitTextToSize(notes, notesW);
    doc.text(lines, notesX, y + 5);
  }

  addFooter();
  return doc;
}

export async function downloadReceiptPdf(form) {
  const doc = await buildReceiptPdf(form);
  doc.save(`${form.docType || "Receipt"}-${form.receiptNo || "CRIX"}.pdf`.replace(/\s+/g, "-"));
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}
