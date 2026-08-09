import { useEffect, useMemo, useRef, useState } from "react";
import { C, shadow } from "../theme";
import { CATALOG, PAYMENT_MODES, COMPANY } from "../data/billing";
import { buildReceiptPdf, downloadReceiptPdf } from "../utils/pdfReceipt";
import { round2 } from "../utils/money";

const DOC_TYPES = ["Receipt", "Tax Invoice", "Quotation"];

function genReceiptNo() {
  const d = new Date();
  const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `CRIX-${stamp}-${rand}`;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

let itemSeq = 0;
function newItem(overrides = {}) {
  itemSeq += 1;
  return { id: `item-${itemSeq}`, description: "", qty: 1, rate: 0, ...overrides };
}

const card = { background: C.bg2, borderRadius: 16, boxShadow: shadow.md, border: `1px solid ${C.border}`, padding: "1.5rem" };
const label = { fontSize: 12, fontWeight: 700, color: C.textSub, marginBottom: 6, display: "block", textTransform: "uppercase", letterSpacing: 0.4 };
const inputStyle = { width: "100%", padding: "10px 12px", background: "#fff", border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" };
const row = { display: "flex", gap: 12, flexWrap: "wrap" };
const col = { flex: "1 1 200px", minWidth: 0 };

function Field({ children, span }) {
  return <div style={{ ...col, flexBasis: span ? "100%" : undefined, marginBottom: 14 }}>{children}</div>;
}

export default function BillingReceipt() {
  const [docType, setDocType] = useState("Receipt");
  const [currency, setCurrency] = useState("INR");
  const [receiptNo, setReceiptNo] = useState(genReceiptNo);
  const [date, setDate] = useState(todayIso);
  const [dueDate, setDueDate] = useState("");
  const [billTo, setBillTo] = useState({ name: "", company: "", email: "", phone: "", address: "", gstin: "" });
  const [items, setItems] = useState([newItem()]);
  const [discountAmount, setDiscountAmount] = useState(0); // flat amount in the selected currency, not a percentage
  const [taxPercent, setTaxPercent] = useState(CATALOG.INR.defaultTaxPercent);
  const [amountPaid, setAmountPaid] = useState(0);
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [notes, setNotes] = useState(
    "Thank you for choosing Crix Technology. This is a system-generated document and does not require a physical signature.\nFor queries, contact support@crixtechnology.com or +91 97232 23588."
  );
  const [catalogPick, setCatalogPick] = useState({ service: "", tier: "" });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [generating, setGenerating] = useState(false);
  const previewUrlRef = useRef(null);

  const catalog = CATALOG[currency];
  const moneyLocale = currency === "INR" ? "en-IN" : "en-US";

  const totals = useMemo(() => {
    // Rounded at every step so "fully paid after discount" never leaves a
    // fractional balance due to float dust (matches the PDF's math exactly).
    const subtotal = round2(items.reduce((s, it) => s + (Number(it.qty) || 0) * (Number(it.rate) || 0), 0));
    const discountAmt = round2(Math.min(Math.max(Number(discountAmount) || 0, 0), subtotal));
    const taxable = round2(subtotal - discountAmt);
    const taxAmt = round2(taxable * (Number(taxPercent) || 0) / 100);
    const total = round2(taxable + taxAmt);
    const paid = round2(Math.min(Math.max(Number(amountPaid) || 0, 0), total));
    const balance = round2(Math.max(total - paid, 0));
    return { subtotal, discountAmt, taxAmt, total, paid, balance };
  }, [items, discountAmount, taxPercent, amountPaid]);

  const formPayload = useMemo(() => ({
    docType, currency, symbol: catalog.symbol, receiptNo, date, dueDate,
    billTo, items, discountAmount: Number(discountAmount) || 0,
    taxLabel: catalog.defaultTaxLabel, taxPercent: Number(taxPercent) || 0,
    amountPaid: Number(amountPaid) || 0, paymentMode, notes,
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [docType, currency, receiptNo, date, dueDate, billTo, items, discountAmount, taxPercent, amountPaid, paymentMode, notes]);

  // Regenerate the live PDF preview shortly after any field changes.
  useEffect(() => {
    let cancelled = false;
    setGenerating(true);
    const t = setTimeout(async () => {
      const doc = await buildReceiptPdf(formPayload);
      if (cancelled) return;
      const url = doc.output("bloburl");
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = url;
      setPreviewUrl(url);
      setGenerating(false);
    }, 500);
    return () => { cancelled = true; clearTimeout(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formPayload)]);

  useEffect(() => () => { if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current); }, []);

  const updateBillTo = (k, v) => setBillTo((b) => ({ ...b, [k]: v }));
  const updateItem = (id, k, v) => setItems((its) => its.map((it) => (it.id === id ? { ...it, [k]: v } : it)));
  const removeItem = (id) => setItems((its) => (its.length > 1 ? its.filter((it) => it.id !== id) : its));
  const addBlankItem = () => setItems((its) => [...its, newItem()]);

  const addCatalogItem = () => {
    const svc = catalog.services.find((s) => s.name === catalogPick.service);
    if (!svc) return;
    const tier = svc.tiers.find((t) => t.tier === catalogPick.tier) || svc.tiers[0];
    setItems((its) => [...its, newItem({ description: `${svc.name} — ${tier.tier} Package`, qty: 1, rate: tier.price })]);
  };

  const addAddon = (addon) => {
    setItems((its) => [...its, newItem({ description: addon.name, qty: 1, rate: addon.price })]);
  };

  const handleCurrencyChange = (cur) => {
    setCurrency(cur);
    setTaxPercent(CATALOG[cur].defaultTaxPercent);
    setCatalogPick({ service: "", tier: "" });
    setDiscountAmount(0); // a flat discount doesn't carry across currencies
  };

  const handleDownload = async () => {
    await downloadReceiptPdf(formPayload);
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", padding: "48px 16px 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span style={{ display: "inline-block", background: C.primaryLight, color: C.primary, borderRadius: 20, padding: "6px 18px", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, marginBottom: 14, textTransform: "uppercase" }}>
            Internal Tool
          </span>
          <h1 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 10px" }}>Billing Receipt Generator</h1>
          <p style={{ color: C.textSub, fontSize: 15, maxWidth: 620, margin: "0 auto" }}>
            Create a Crix Technology–branded receipt, invoice, or quotation as a PDF — pre-loaded with the official service price menu, letterhead and logo.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)", gap: 28, alignItems: "start" }} className="billing-grid">
          {/* ── FORM ─────────────────────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Document meta */}
            <div style={card}>
              <h3 style={{ margin: "0 0 16px", fontWeight: 800, fontSize: 16, color: C.dark }}>Document Details</h3>
              <div style={row}>
                <Field>
                  <label style={label}>Document Type</label>
                  <select style={inputStyle} value={docType} onChange={(e) => setDocType(e.target.value)}>
                    {DOC_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field>
                  <label style={label}>Currency</label>
                  <select style={inputStyle} value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
                    <option value="INR">₹ INR</option>
                    <option value="USD">$ USD</option>
                  </select>
                </Field>
              </div>
              <div style={row}>
                <Field>
                  <label style={label}>Document No.</label>
                  <input style={inputStyle} value={receiptNo} onChange={(e) => setReceiptNo(e.target.value)} />
                </Field>
                <Field>
                  <label style={label}>Date</label>
                  <input type="date" style={inputStyle} value={date} onChange={(e) => setDate(e.target.value)} />
                </Field>
                <Field>
                  <label style={label}>Due Date {docType === "Receipt" && "(optional)"}</label>
                  <input type="date" style={inputStyle} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </Field>
              </div>
            </div>

            {/* Bill to */}
            <div style={card}>
              <h3 style={{ margin: "0 0 16px", fontWeight: 800, fontSize: 16, color: C.dark }}>Billed To</h3>
              <div style={row}>
                <Field><label style={label}>Client Name</label><input style={inputStyle} value={billTo.name} onChange={(e) => updateBillTo("name", e.target.value)} placeholder="Full name" /></Field>
                <Field><label style={label}>Company (optional)</label><input style={inputStyle} value={billTo.company} onChange={(e) => updateBillTo("company", e.target.value)} placeholder="Client's company" /></Field>
              </div>
              <div style={row}>
                <Field><label style={label}>Email</label><input style={inputStyle} value={billTo.email} onChange={(e) => updateBillTo("email", e.target.value)} placeholder="client@email.com" /></Field>
                <Field><label style={label}>Phone</label><input style={inputStyle} value={billTo.phone} onChange={(e) => updateBillTo("phone", e.target.value)} placeholder="+91 …" /></Field>
              </div>
              <Field span>
                <label style={label}>Billing Address</label>
                <textarea style={{ ...inputStyle, resize: "vertical" }} rows={2} value={billTo.address} onChange={(e) => updateBillTo("address", e.target.value)} placeholder="City, State, Country" />
              </Field>
              {currency === "INR" && (
                <Field><label style={label}>GSTIN (optional)</label><input style={inputStyle} value={billTo.gstin} onChange={(e) => updateBillTo("gstin", e.target.value)} placeholder="Client GSTIN" /></Field>
              )}
            </div>

            {/* Add from catalog */}
            <div style={card}>
              <h3 style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 16, color: C.dark }}>Add from Service Price Menu</h3>
              <p style={{ margin: "0 0 14px", fontSize: 13, color: C.muted }}>Pulled straight from the official Crix Technology price menu ({currency}).</p>
              <div style={row}>
                <Field>
                  <label style={label}>Service</label>
                  <select style={inputStyle} value={catalogPick.service} onChange={(e) => setCatalogPick({ service: e.target.value, tier: "" })}>
                    <option value="">Select a service…</option>
                    {catalog.services.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                </Field>
                <Field>
                  <label style={label}>Tier</label>
                  <select style={inputStyle} value={catalogPick.tier} disabled={!catalogPick.service} onChange={(e) => setCatalogPick((p) => ({ ...p, tier: e.target.value }))}>
                    <option value="">Select tier…</option>
                    {catalog.services.find((s) => s.name === catalogPick.service)?.tiers.map((t) => (
                      <option key={t.tier} value={t.tier}>{t.tier} — {catalog.symbol}{t.price.toLocaleString(moneyLocale)}</option>
                    ))}
                  </select>
                </Field>
                <div style={{ display: "flex", alignItems: "flex-end", marginBottom: 14 }}>
                  <button type="button" onClick={addCatalogItem} disabled={!catalogPick.service || !catalogPick.tier} style={{ background: catalogPick.tier ? C.primary : C.border, color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontWeight: 700, fontSize: 13, cursor: catalogPick.tier ? "pointer" : "not-allowed", whiteSpace: "nowrap" }}>+ Add Line</button>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                {catalog.addons.map((a) => (
                  <button key={a.name} type="button" onClick={() => addAddon(a)} style={{ background: C.primaryLight, color: C.primary, border: `1px solid ${C.primary}30`, borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    + {a.name} ({catalog.symbol}{a.price.toLocaleString(moneyLocale)})
                  </button>
                ))}
              </div>
            </div>

            {/* Line items */}
            <div style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 800, fontSize: 16, color: C.dark }}>Line Items</h3>
                <button type="button" onClick={addBlankItem} style={{ background: "transparent", color: C.primary, border: `1px solid ${C.primary}40`, borderRadius: 8, padding: "7px 16px", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>+ Custom Line</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((it) => (
                  <div key={it.id} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <input style={{ ...inputStyle, flex: "3 1 200px" }} placeholder="Description" value={it.description} onChange={(e) => updateItem(it.id, "description", e.target.value)} />
                    <input style={{ ...inputStyle, flex: "1 1 60px", textAlign: "center" }} type="number" min="0" placeholder="Qty" value={it.qty} onChange={(e) => updateItem(it.id, "qty", e.target.value)} />
                    <input style={{ ...inputStyle, flex: "1 1 90px", textAlign: "right" }} type="number" min="0" step="0.01" placeholder="Rate" value={it.rate} onChange={(e) => updateItem(it.id, "rate", e.target.value)} />
                    <div style={{ flex: "1 1 90px", textAlign: "right", fontWeight: 700, fontSize: 13, color: C.dark }}>
                      {catalog.symbol}{((Number(it.qty) || 0) * (Number(it.rate) || 0)).toLocaleString(moneyLocale, { minimumFractionDigits: 2 })}
                    </div>
                    <button type="button" onClick={() => removeItem(it.id)} disabled={items.length === 1} style={{ background: "none", border: "none", color: items.length === 1 ? C.muted : C.red, cursor: items.length === 1 ? "not-allowed" : "pointer", fontSize: 18, padding: "0 4px" }} title="Remove line">✕</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals inputs */}
            <div style={card}>
              <h3 style={{ margin: "0 0 16px", fontWeight: 800, fontSize: 16, color: C.dark }}>Discount, Tax &amp; Payment</h3>
              <div style={row}>
                <Field><label style={label}>Discount ({catalog.symbol})</label><input type="number" min="0" step="0.01" max={totals.subtotal || undefined} style={inputStyle} value={discountAmount} onChange={(e) => setDiscountAmount(e.target.value)} placeholder="0.00" /></Field>
                <Field><label style={label}>{catalog.defaultTaxLabel.replace(/\s*\(.*\)/, "")} (%)</label><input type="number" min="0" max="100" style={inputStyle} value={taxPercent} onChange={(e) => setTaxPercent(e.target.value)} /></Field>
              </div>
              <div style={row}>
                <Field><label style={label}>Amount Paid</label><input type="number" min="0" step="0.01" style={inputStyle} value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)} /></Field>
                <Field>
                  <label style={label}>Payment Mode</label>
                  <select style={inputStyle} value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                    {PAYMENT_MODES.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </Field>
              </div>
              <Field span>
                <label style={label}>Notes / Terms</label>
                <textarea style={{ ...inputStyle, resize: "vertical" }} rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </Field>

              <div style={{ borderTop: `1px dashed ${C.border}`, marginTop: 6, paddingTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                <SummaryLine label="Subtotal" value={totals.subtotal} symbol={catalog.symbol} locale={moneyLocale} />
                {totals.discountAmt > 0 && <SummaryLine label="Discount" value={-totals.discountAmt} symbol={catalog.symbol} locale={moneyLocale} />}
                {taxPercent > 0 && <SummaryLine label={catalog.defaultTaxLabel} value={totals.taxAmt} symbol={catalog.symbol} locale={moneyLocale} />}
                <SummaryLine label="Total" value={totals.total} symbol={catalog.symbol} locale={moneyLocale} bold />
                <SummaryLine label="Amount Paid" value={totals.paid} symbol={catalog.symbol} locale={moneyLocale} />
                <SummaryLine label="Balance Due" value={totals.balance} symbol={catalog.symbol} locale={moneyLocale} bold color={totals.balance > 0 ? C.red : C.green} />
              </div>
            </div>
          </div>

          {/* ── PREVIEW ─────────────────────────────────────────────── */}
          <div style={{ position: "sticky", top: 20, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ ...card, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <h3 style={{ margin: 0, fontWeight: 800, fontSize: 15, color: C.dark }}>Live Preview {generating && <span style={{ fontWeight: 400, color: C.muted, fontSize: 12 }}>(updating…)</span>}</h3>
              </div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", background: "#525659", height: 560 }}>
                {previewUrl ? (
                  <iframe src={previewUrl} title="Receipt preview" style={{ width: "100%", height: "100%", border: "none" }} />
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#cbd5e1", fontSize: 13 }}>Generating preview…</div>
                )}
              </div>
              <button
                type="button"
                onClick={handleDownload}
                style={{ width: "100%", marginTop: 14, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 10, padding: "14px 0", fontWeight: 800, fontSize: 15, cursor: "pointer", boxShadow: `0 4px 24px ${C.primary}35` }}
              >
                ⬇ Download {docType} PDF
              </button>
            </div>

            <div style={{ background: C.primaryLight, borderRadius: 14, padding: "14px 18px", fontSize: 12.5, color: C.textSub, lineHeight: 1.7 }}>
              Letterhead uses the official Crix Technology logo, address, CIN <strong>{COMPANY.cin}</strong> and price menu — pulled from the company's own documents. Double-check client details and totals before sending.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .billing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function SummaryLine({ label: text, value, symbol, locale = "en-IN", bold, color }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: bold ? 15 : 13.5, fontWeight: bold ? 800 : 500, color: color || (bold ? C.dark : C.textSub) }}>
      <span>{text}</span>
      <span>{value < 0 ? "-" : ""}{symbol}{Math.abs(value).toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </div>
  );
}
