import { C, APPLY_LINK, shadow } from "../theme";
import { COURSES } from "../data";
import RevealBox from "../components/RevealBox";

const FEATURES = [
  { icon: "🎥", label: "Video Lectures", desc: "HD recorded lectures accessible anytime, anywhere." },
  { icon: "📋", label: "Project-Based", desc: "Build real projects for your portfolio during the course." },
  { icon: "🧑‍🏫", label: "Expert Instructors", desc: "Taught by industry professionals with years of experience." },
  { icon: "📜", label: "Certificate", desc: "Receive a verified certificate upon course completion." },
];

export default function Courses() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #f0fdf4, #f0f9ff)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.greenLight, color: "#065f46", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>ONLINE COURSES</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>Learn In-Demand Skills</h1>
          <p style={{ color: C.textSub, fontSize: 18, maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>Industry-oriented courses designed to get you job-ready. All courses are FREE with your internship enrollment.</p>
        </RevealBox>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2.5rem", background: "#fff", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {FEATURES.map(({ icon, label, desc }, i) => (
            <RevealBox key={label} delay={i * 0.08}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.dark, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 13, color: C.textSub, lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            </RevealBox>
          ))}
        </div>
      </section>

      {/* ── COURSE CARDS ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>All Courses</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {COURSES.map(({ title, lessons, duration, level, badge, badgeColor }, i) => (
              <RevealBox key={title} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 18, overflow: "hidden", boxShadow: shadow.sm, transition: "all 0.25s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = shadow.lg; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = shadow.sm; }}
                >
                  <div style={{ height: 6, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})` }} />
                  <div style={{ padding: "1.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <h3 style={{ fontWeight: 700, fontSize: 17, color: C.dark, margin: 0, lineHeight: 1.35, flex: 1 }}>{title}</h3>
                      {badge && <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50, background: `${badgeColor}20`, color: badgeColor, border: `1px solid ${badgeColor}40`, marginLeft: 10, flexShrink: 0 }}>{badge}</span>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      <div style={{ fontSize: 13, color: C.textSub, display: "flex", alignItems: "center", gap: 8 }}><span>📖</span> {lessons} Lessons</div>
                      <div style={{ fontSize: 13, color: C.textSub, display: "flex", alignItems: "center", gap: 8 }}><span>⏱</span> {duration}</div>
                      <div style={{ fontSize: 13, color: C.textSub, display: "flex", alignItems: "center", gap: 8 }}><span>📶</span> {level}</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                      <div>
                        <span style={{ fontSize: 22, fontWeight: 900, color: C.primary }}>FREE</span>
                        <span style={{ fontSize: 12, color: C.muted, marginLeft: 6 }}>with Internship</span>
                      </div>
                      <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ background: `${C.primary}15`, color: C.primary, border: `1.5px solid ${C.primary}40`, borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, textDecoration: "none", transition: "all 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = `${C.primary}15`; e.currentTarget.style.color = C.primary; }}
                      >Enroll Free</a>
                    </div>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: `linear-gradient(135deg, ${C.green}, ${C.primary})` }}>
        <RevealBox>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem" }}>Start Learning Today — For Free</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>Apply for our internship and get access to all courses at zero cost.</p>
            <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#fff", color: C.green, borderRadius: 12, padding: "14px 36px", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>🎓 Apply Now & Get Free Courses</a>
          </div>
        </RevealBox>
      </section>
    </div>
  );
}
