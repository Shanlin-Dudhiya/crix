import { Link } from "react-router-dom";
import { C, shadow } from "../theme";
import { SERVICES } from "../data";
import RevealBox from "../components/RevealBox";
import Icon from "../components/Icons";

const PROCESS = [
  { n: "01", title: "Discovery Call", desc: "We understand your business goals, requirements, and timeline." },
  { n: "02", title: "Proposal & Planning", desc: "We send a detailed proposal with timeline, scope, and pricing." },
  { n: "03", title: "Design & Development", desc: "Our team builds your solution with regular updates and demos." },
  { n: "04", title: "Delivery & Support", desc: "We deliver, deploy, and provide ongoing support and maintenance." },
];

export default function Services() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #ede9fe, #f0f9ff)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.accentLight, color: C.accent, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>IT SERVICES</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>Our IT Services</h1>
          <p style={{ color: C.textSub, fontSize: 18, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>End-to-end technology solutions for startups and enterprises across India. We build, we deliver, we support.</p>
        </RevealBox>
      </section>

      {/* ── SERVICE CARDS ───────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map(({ icon, title, desc, color }, i) => (
              <RevealBox key={title} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 18, padding: "2.25rem", boxShadow: shadow.sm, transition: "all 0.25s", height: "100%", position: "relative", overflow: "hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 16px 48px ${color}18`; e.currentTarget.style.transform = "translateY(-5px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = shadow.sm; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${color}, ${C.accent})` }} />
                  <div style={{ width: 58, height: 58, borderRadius: 16, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color }}>
                    <Icon name={icon} size={26} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 19, color: C.dark, margin: "0 0 10px" }}>{title}</h3>
                  <p style={{ color: C.textSub, fontSize: 15, lineHeight: 1.8, margin: "0 0 20px" }}>{desc}</p>
                  <Link to="/contact" style={{ display: "inline-block", color, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Get a Quote →</Link>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{ display: "inline-block", background: C.primaryLight, color: C.primaryDark, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>OUR PROCESS</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>How We Work</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="process-grid">
            {PROCESS.map(({ n, title, desc }, i) => (
              <RevealBox key={n} delay={i * 0.1}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "2rem 1.5rem", textAlign: "center", boxShadow: shadow.sm }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", fontWeight: 800, fontSize: 15, color: "#fff" }}>{n}</div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, color: C.dark, margin: "0 0 8px" }}>{title}</h4>
                  <p style={{ fontSize: 13, color: C.textSub, lineHeight: 1.75, margin: 0 }}>{desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: `linear-gradient(135deg, ${C.accent}, ${C.primary})` }}>
        <RevealBox>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem" }}>Ready to Build Something Great?</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>Tell us about your project and we'll get back to you within 24 hours.</p>
            <Link to="/contact" style={{ display: "inline-block", background: "#fff", color: C.accent, borderRadius: 12, padding: "14px 36px", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Get a Free Quote →</Link>
          </div>
        </RevealBox>
      </section>

      <style>{`
        @media (max-width: 768px) { .process-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
