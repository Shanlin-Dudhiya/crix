import { useState } from "react";
import { C, APPLY_LINK, shadow } from "../theme";
import { INTERNSHIP_DOMAINS, SERVICES, COURSES } from "../data";
import RevealBox from "../components/RevealBox";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from "../components/Icons";

const CONTACT_INFO = [
  { Icon: PhoneIcon, label: "Call / WhatsApp", value: "9723223588", href: "tel:9723223588" },
  { Icon: MailIcon, label: "Email Us", value: "crixtechnology@gmail.com", href: "mailto:crixtechnology@gmail.com" },
  { Icon: MapPinIcon, label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
  { Icon: ClockIcon, label: "Working Hours", value: "Mon–Sat, 9am–6pm IST", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", college: "", domain: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inp = {
    width: "100%", padding: "13px 16px",
    background: "#fff", border: `1.5px solid ${C.border}`,
    borderRadius: 10, color: C.text, fontSize: 15,
    outline: "none", boxSizing: "border-box", fontFamily: "inherit",
    transition: "border-color 0.2s", boxShadow: shadow.sm,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/finoxtechno@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `Crix Technology Inquiry — ${form.domain}`,
          _replyto: form.email,
          _honeypot: "",
          Name: form.name,
          Email: form.email,
          "College / Company": form.college,
          Interest: form.domain,
          Message: form.message,
          _template: "table",
        }),
      });
      const result = await res.json();
      if (result.success === "true" || result.success === true) {
        setSent(true);
        setForm({ name: "", email: "", college: "", domain: "", message: "" });
        setTimeout(() => setSent(false), 6000);
      } else {
        setError("Something went wrong. Please email us directly at crixtechnology@gmail.com");
      }
    } catch {
      setError("Network error. Please email us at crixtechnology@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: C.bg }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #f0f9ff, #f0fdf4)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.primaryLight, color: C.primaryDark, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>GET IN TOUCH</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>Let's Build Your Future Together</h1>
          <p style={{ color: C.textSub, fontSize: 18, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>Whether it's an internship, a course, or IT services — we're here to help. Reach out anytime.</p>
        </RevealBox>
      </section>

      {/* ── CONTACT CONTENT ─────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="contact-grid">

          {/* Left info */}
          <RevealBox>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-0.5px" }}>Contact Information</h2>
            <p style={{ color: C.textSub, fontSize: 15, lineHeight: 1.85, marginBottom: "2rem" }}>We respond to all inquiries within 24 hours. Feel free to reach out via call, email, or WhatsApp.</p>

            {CONTACT_INFO.map(({ Icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 22 }}>
                <div style={{ width: 48, height: 48, borderRadius: 13, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.primary }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 2, fontWeight: 600, letterSpacing: "0.3px" }}>{label}</div>
                  {href ? <a href={href} style={{ color: C.primary, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>{value}</a> : <div style={{ color: C.dark, fontWeight: 600, fontSize: 15 }}>{value}</div>}
                </div>
              </div>
            ))}

            {/* Internship CTA box */}
            <div style={{ marginTop: "2rem", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, borderRadius: 16, padding: "1.75rem" }}>
              <div style={{ fontWeight: 800, color: "#fff", fontSize: 16, marginBottom: 8 }}>Apply for Internship</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 16 }}>Paid internship program, no interview. Click below to apply directly via our Google Form.</p>
              <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#fff", color: C.primary, borderRadius: 9, padding: "10px 22px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Apply Now →</a>
            </div>
          </RevealBox>

          {/* Right form */}
          <RevealBox delay={0.15}>
            <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 22, padding: "2.5rem", boxShadow: shadow.lg }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, color: C.green }}>
                    <CheckCircleIcon size={64} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 22, color: C.dark, marginBottom: 10 }}>Message Sent!</div>
                  <div style={{ color: C.textSub, fontSize: 15, lineHeight: 1.7 }}>We'll get back to you within 24 hours. Thank you for reaching out to Crix Technology!</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <h3 style={{ margin: "0 0 0.5rem", fontWeight: 800, fontSize: 21, color: C.dark }}>Send Us a Message</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    {[{ k: "name", ph: "Full Name" }, { k: "college", ph: "College / Company" }].map(({ k, ph }) => (
                      <input key={k} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} required style={inp}
                        onFocus={e => e.target.style.borderColor = C.primary}
                        onBlur={e => e.target.style.borderColor = C.border} />
                    ))}
                  </div>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Email Address" required style={inp}
                    onFocus={e => e.target.style.borderColor = C.primary}
                    onBlur={e => e.target.style.borderColor = C.border} />
                  <select value={form.domain} onChange={e => setForm(f => ({ ...f, domain: e.target.value }))} required style={{ ...inp, color: form.domain ? C.text : C.muted }}>
                    <option value="" disabled>Select Your Interest</option>
                    <optgroup label="Internship Domains">
                      {INTERNSHIP_DOMAINS.map(d => <option key={d.title} value={d.title}>{d.title} Internship</option>)}
                    </optgroup>
                    <optgroup label="IT Services">
                      {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </optgroup>
                    <optgroup label="Courses">
                      {COURSES.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                    </optgroup>
                  </select>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Tell us about yourself or your project requirements..." rows={4}
                    style={{ ...inp, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = C.primary}
                    onBlur={e => e.target.style.borderColor = C.border} />
                  {error && <p style={{ color: C.red, fontSize: 13, margin: 0 }}>{error}</p>}
                  <button type="submit" disabled={loading} style={{ background: loading ? C.muted : `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 11, padding: "14px 0", fontWeight: 800, fontSize: 16, cursor: loading ? "not-allowed" : "pointer", boxShadow: `0 4px 20px ${C.primary}35`, transition: "opacity 0.2s" }}
                    onMouseEnter={e => { if (!loading) e.target.style.opacity = "0.9"; }}
                    onMouseLeave={e => e.target.style.opacity = "1"}
                  >{loading ? "Sending..." : "Send Message →"}</button>
                  <p style={{ textAlign: "center", fontSize: 13, color: C.muted, margin: 0 }}>Or call us: <a href="tel:9723223588" style={{ color: C.primary, fontWeight: 700 }}>9723223588</a></p>
                </form>
              )}
            </div>
          </RevealBox>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </div>
  );
}
