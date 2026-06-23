import { Link } from "react-router-dom";
import { C, APPLY_LINK, shadow } from "../theme";
import { SERVICES, INTERNSHIP_DOMAINS, TESTIMONIALS } from "../data"; //STATS,
import RevealBox from "../components/RevealBox";
import Icon from "../components/Icons";

// function StatCard({ num, label }) {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <div style={{ fontSize: 28, fontWeight: 900, color: C.primary, letterSpacing: "-1px" }}>{num}</div>
//       <div style={{ fontSize: 13, color: C.textSub, marginTop: 4 }}>{label}</div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(150deg, #f0f9ff 0%, #ede9fe 50%, #f0fdf4 100%)`, padding: "6rem 2.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${C.primary}18, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${C.accent}14, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
          <div>
            <RevealBox>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: `1px solid ${C.border}`, borderRadius: 50, padding: "6px 18px", marginBottom: 28, boxShadow: shadow.sm }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, display: "inline-block" }} />
                <span style={{ fontSize: 13, color: C.textSub, fontWeight: 600 }}>June 2026 Batch — Now Open</span>
              </div>
            </RevealBox>

            <RevealBox delay={0.1}>
              <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 1.25rem", letterSpacing: "-2px", color: C.dark }}>
                Elevate Your Career<br />
                <span style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>with Crix Technology.</span>
              </h1>
            </RevealBox>

            <RevealBox delay={0.15}>
              <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.8, margin: "0 0 2rem", maxWidth: 520 }}>
                India's leading platform for <strong style={{ color: C.primary }}>free virtual internships</strong>, cutting-edge IT services, and industry-ready courses — built to launch real careers.
              </p>
            </RevealBox>

            <RevealBox delay={0.2}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
                <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{
                  background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                  color: "#fff", borderRadius: 12, padding: "14px 32px",
                  fontWeight: 700, fontSize: 16, textDecoration: "none",
                  boxShadow: `0 4px 24px ${C.primary}40`, display: "inline-block",
                }}>Join for Free</a>
                <Link to="/services" style={{ background: "#fff", color: C.text, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 32px", fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: shadow.sm }}>Our Services →</Link>
              </div>
            </RevealBox>

            {/* <RevealBox delay={0.25}>
              <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", paddingTop: 28, borderTop: `1px solid ${C.border}` }}>
                {STATS.map(s => <StatCard key={s.label} {...s} />)}
              </div>
            </RevealBox> */}
          </div>

          <RevealBox delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "graduation-cap", label: "Free Virtual Internships", sub: "Web · AI · Android · Cloud · more", color: C.primary, bg: C.primaryLight, to: "/internships" },
                { icon: "monitor", label: "IT Services & Solutions", sub: "Web · App · AI · Digital Marketing", color: C.accent, bg: C.accentLight, to: "/services" },
                { icon: "book-open", label: "Online Courses", sub: "Industry-oriented · Certificate included", color: C.green, bg: C.greenLight, to: "/courses" },
                { icon: "trending-up", label: "Career Support", sub: "LOR · Certificate · LinkedIn Recommendation", color: C.yellow, bg: C.yellowLight, to: "/contact" },
              ].map(({ icon, label, sub, color, bg, to }) => (
                <Link key={label} to={to} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 14, padding: "1.1rem 1.4rem", display: "flex", alignItems: "center", gap: 14, boxShadow: shadow.sm, transition: "all 0.2s", textDecoration: "none" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 8px 24px ${color}20`; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = shadow.sm; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color }}>
                    <Icon name={icon} size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: C.dark }}>{label}</div>
                    <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{sub}</div>
                  </div>
                  <div style={{ color, fontSize: 18, fontWeight: 300 }}>→</div>
                </Link>
              ))}
            </div>
          </RevealBox>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.accentLight, color: C.accent, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>IT SERVICES</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1px" }}>Smart Solutions, Real Results</h2>
              <p style={{ color: C.textSub, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>Trusted by startups and enterprises across India.</p>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {SERVICES.slice(0, 3).map(({ icon, title, desc, color }, i) => (
              <RevealBox key={title} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "2rem", boxShadow: shadow.sm, transition: "all 0.25s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 12px 32px ${color}18`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = shadow.sm; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color }}>
                    <Icon name={icon} size={24} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: C.dark, margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ color: C.textSub, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/services" style={{ display: "inline-block", background: "#fff", color: C.primary, border: `1.5px solid ${C.primary}`, borderRadius: 10, padding: "11px 28px", fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = C.primary; }}
            >View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── INTERNSHIP PREVIEW ──────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.primaryLight, color: C.primaryDark, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>VIRTUAL INTERNSHIPS</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1px" }}>Launch Your Tech Career</h2>
              <p style={{ color: C.textSub, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>No fees. No interview. 100% virtual. Choose your domain and get started today.</p>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {INTERNSHIP_DOMAINS.slice(0, 3).map(({ icon, title, tech, seats, color }, i) => (
              <RevealBox key={title} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "1.75rem", boxShadow: shadow.sm, transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 12px 32px ${color}20`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = shadow.sm; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", color }}>
                      <Icon name={icon} size={24} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50, background: seats === "Limited" ? C.yellowLight : C.greenLight, color: seats === "Limited" ? "#92400e" : "#065f46" }}>{seats === "Limited" ? "Limited Seats" : "Open"}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: C.dark, margin: "0 0 6px" }}>{title}</h3>
                  <p style={{ fontSize: 13, color: C.muted, margin: "0 0 16px" }}>{tech}</p>
                  <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${color}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 8, padding: "8px 20px", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Apply Free</a>
                </div>
              </RevealBox>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/internships" style={{ display: "inline-block", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", borderRadius: 10, padding: "12px 32px", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: `0 4px 16px ${C.primary}35` }}>View All Internship Domains →</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.yellowLight, color: "#92400e", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>INTERN STORIES</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>What Our Interns Say</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
            {TESTIMONIALS.map(({ name, college, domain, text, avatar, color }, i) => (
              <RevealBox key={name} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "1.75rem", boxShadow: shadow.sm, transition: "all 0.25s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = shadow.lg; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = shadow.sm; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: C.yellow, fontSize: 14 }}>★</span>)}
                  </div>
                  <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.85, margin: "0 0 1.25rem", fontStyle: "italic" }}>"{text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${color}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: "#fff", flexShrink: 0 }}>{avatar}</div>
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

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})` }}>
        <RevealBox>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem", letterSpacing: "-1px" }}>Ready to Start Your Journey?</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>Join 15,000+ students who've transformed their careers with Crix Technology. Apply today — it's 100% free.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ background: "#fff", color: C.primary, borderRadius: 12, padding: "14px 36px", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>Apply for Free</a>
              <Link to="/contact" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 12, padding: "14px 36px", fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Contact Us</Link>
            </div>
          </div>
        </RevealBox>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) {
          .hero-grid { gap: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
