import { C, APPLY_LINK, shadow } from "../theme";
import { TEAM, TESTIMONIALS } from "../data";
import RevealBox from "../components/RevealBox";

export default function Team() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #f0fdf4, #ede9fe)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.greenLight, color: "#065f46", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>OUR TEAM</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>The People Behind Crix</h1>
          <p style={{ color: C.textSub, fontSize: 18, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>Passionate technologists, educators, and mentors dedicated to your career growth.</p>
        </RevealBox>
      </section>

      {/* ── TEAM CARDS ──────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {TEAM.map(({ name, role, avatar, color }, i) => (
              <RevealBox key={name} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 20, padding: "2.5rem 2rem", textAlign: "center", boxShadow: shadow.sm, transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = shadow.sm; }}
                >
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${color}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 24, color: "#fff", margin: "0 auto 20px", boxShadow: `0 4px 20px ${color}30` }}>{avatar}</div>
                  <div style={{ fontWeight: 800, fontSize: 17, color: C.dark, marginBottom: 6 }}>{name}</div>
                  <div style={{ fontSize: 14, color: C.muted, marginBottom: 16 }}>{role}</div>
                  <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14 }}>in</div>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14 }}>✉</div>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.yellowLight, color: "#92400e", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>INTERN STORIES</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>Words from Our Interns</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {TESTIMONIALS.map(({ name, college, domain, text, avatar, color }, i) => (
              <RevealBox key={name} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "2rem", boxShadow: shadow.sm, height: "100%" }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: C.yellow, fontSize: 15 }}>★</span>)}
                  </div>
                  <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.85, margin: "0 0 1.5rem", fontStyle: "italic" }}>"{text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${color}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff", flexShrink: 0 }}>{avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: C.dark }}>{name}</div>
                      <div style={{ fontSize: 12, color: C.muted }}>{college}</div>
                      <div style={{ fontSize: 11, color: C.primary, marginTop: 2 }}>{domain}</div>
                    </div>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ─────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})` }}>
        <RevealBox>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem" }}>Want to Join Our Team?</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>We're always looking for passionate people who want to make a difference in tech education.</p>
            <a href="mailto:services.crix@gmail.com" style={{ display: "inline-block", background: "#fff", color: C.primary, borderRadius: 12, padding: "14px 36px", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Get In Touch →</a>
          </div>
        </RevealBox>
      </section>
    </div>
  );
}
