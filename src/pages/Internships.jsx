import { C, APPLY_LINK, shadow } from "../theme";
import { INTERNSHIP_DOMAINS, STEPS } from "../data";
import RevealBox from "../components/RevealBox";
import Icon from "../components/Icons";

const BENEFITS = [
  { icon: "gift", label: "Free 15-Day Internship", desc: "No registration fee, no hidden charges for the internship program." },
  { icon: "award", label: "Verified Certificate", desc: "Industry-recognized digital certificate on completion." },
  { icon: "home", label: "Work from Home", desc: "Fully virtual — work from anywhere in India." },
  { icon: "file-text", label: "Letter of Recommendation", desc: "Official LOR from Crix Technology." },
  { icon: "linkedin", label: "LinkedIn Recognition", desc: "Official LinkedIn recommendation added to your profile." },
  { icon: "briefcase", label: "Resume Boost", desc: "Real project experience to impress top recruiters." },
  { icon: "user-check", label: "Mentor Support", desc: "Dedicated mentor guidance throughout the program." },
  { icon: "clipboard", label: "Real Tasks", desc: "Industry-level project tasks — not just theory." },
];

export default function Internships() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #f0f9ff, #ede9fe)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.primaryLight, color: C.primaryDark, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>VIRTUAL INTERNSHIP PROGRAM</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>Free Virtual Internships</h1>
          <p style={{ color: C.textSub, fontSize: 18, maxWidth: 600, margin: "0 auto 2rem", lineHeight: 1.75 }}>15-day virtual internship. No interview. No fees. Real experience. Choose your domain and join now.</p>
          <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", borderRadius: 12, padding: "14px 36px", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: `0 4px 24px ${C.primary}40` }}>Join Now — It's Free</a>
        </RevealBox>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{ display: "inline-block", background: C.accentLight, color: C.accent, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>HOW IT WORKS</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>4 Simple Steps to Get Started</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="steps-grid">
            {STEPS.map(({ n, title, desc }, i) => (
              <RevealBox key={n} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", fontWeight: 800, fontSize: 15, color: "#fff", boxShadow: `0 4px 16px ${C.primary}40` }}>{n}</div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, color: C.dark, margin: "0 0 8px" }}>{title}</h4>
                  <p style={{ fontSize: 13, color: C.textSub, lineHeight: 1.75, margin: 0 }}>{desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAIN CARDS ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.primaryLight, color: C.primaryDark, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>CHOOSE YOUR DOMAIN</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}> Internship Domains</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {INTERNSHIP_DOMAINS.map(({ icon, title, tech, duration, seats, color }, i) => (
              <RevealBox key={title} delay={i * 0.07}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 18, padding: "2rem", boxShadow: shadow.sm, transition: "all 0.25s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 16px 48px ${color}18`; e.currentTarget.style.transform = "translateY(-5px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = shadow.sm; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                    <div style={{ width: 58, height: 58, borderRadius: 16, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", color }}>
                      <Icon name={icon} size={26} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 50, background: seats === "Limited" ? C.yellowLight : C.greenLight, color: seats === "Limited" ? "#92400e" : "#065f46" }}>{seats === "Limited" ? "Limited Seats" : "Open"}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 18, color: C.dark, margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontSize: 13, color: C.muted, margin: "0 0 6px" }}><strong>Tech Stack:</strong> {tech}</p>
                  <p style={{ fontSize: 13, color: C.muted, margin: "0 0 20px" }}>Duration: {duration}</p>
                  <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${color}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 10, padding: "10px 24px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Join Now →</a>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.greenLight, color: "#065f46", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>WHAT YOU GET</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>Benefits of Joining Crix</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {BENEFITS.map(({ icon, label, desc }, i) => (
              <RevealBox key={label} delay={i * 0.06}>
                <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.5rem", display: "flex", gap: 14, alignItems: "flex-start", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.background = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.bg; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.primary }}>
                    <Icon name={icon} size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: C.dark, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 13, color: C.textSub, lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})` }}>
        <RevealBox>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem" }}>Don't Miss the June 2026 Batch</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>Limited seats are filling up fast. Apply today for our free 15-day internship — no interview required.</p>
            <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#fff", color: C.primary, borderRadius: 12, padding: "14px 40px", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>Apply for Free Now</a>
          </div>
        </RevealBox>
      </section>

      <style>{`
        @media (max-width: 768px) { .steps-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
