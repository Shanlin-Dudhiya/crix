import { Link } from "react-router-dom";
import { C, APPLY_LINK, shadow } from "../theme";
import { STATS, TEAM } from "../data";
import RevealBox from "../components/RevealBox";

const VALUES = [
  { icon: "🎯", title: "Mission-Driven", desc: "We exist to bridge the gap between education and industry — giving every student a real shot at a tech career." },
  { icon: "🆓", title: "Always Free", desc: "Every internship we offer is 100% free. We believe access to opportunity shouldn't depend on your wallet." },
  { icon: "🏆", title: "Quality First", desc: "Real projects, industry mentors, and recognized certificates — not hollow experiences." },
  { icon: "🤝", title: "Community", desc: "15,000+ alumni who support each other, share opportunities, and grow together." },
];

export default function About() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #f0f9ff, #ede9fe)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.primaryLight, color: C.primaryDark, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>WHO WE ARE</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>About Crix Technology</h1>
          <p style={{ color: C.textSub, fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>Building India's next generation of tech professionals — one intern at a time.</p>
        </RevealBox>
      </section>

      {/* ── STORY ───────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col">
          <RevealBox>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: "0 0 1.25rem", letterSpacing: "-1px", lineHeight: 1.2 }}>Our Story</h2>
            <p style={{ color: C.textSub, fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              Crix Technology was founded with a simple but powerful belief: every student in India deserves access to real-world tech experience — regardless of their college, city, or financial background.
            </p>
            <p style={{ color: C.textSub, fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              We started as a small IT services company in Ahmedabad, Gujarat. As we grew, we noticed something troubling — thousands of talented students graduating without practical skills that employers actually needed.
            </p>
            <p style={{ color: C.textSub, fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>
              So we built our internship program — completely free, fully virtual, and designed around real tasks that mirror actual industry work. Today, we've trained over 15,000 students from 200+ colleges across India.
            </p>
            <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: `0 4px 16px ${C.primary}35` }}>Join Our Program →</a>
          </RevealBox>

          <RevealBox delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "🎓", ...STATS[0], color: C.primary, bg: C.primaryLight },
                { icon: "🏢", ...STATS[1], color: C.accent, bg: C.accentLight },
                { icon: "📚", ...STATS[2], color: C.green, bg: C.greenLight },
                { icon: "⭐", ...STATS[3], color: C.yellow, bg: C.yellowLight },
              ].map(({ icon, num, label, color, bg }) => (
                <div key={label} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "1.75rem", textAlign: "center", boxShadow: shadow.sm, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = shadow.sm; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                  <div style={{ fontSize: 24, fontWeight: 900, color, letterSpacing: "-0.5px" }}>{num}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </RevealBox>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.accentLight, color: C.accent, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>OUR VALUES</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>What We Stand For</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {VALUES.map(({ icon, title, desc }, i) => (
              <RevealBox key={title} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "2rem", boxShadow: shadow.sm, height: "100%" }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: C.dark, margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ color: C.textSub, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", background: C.greenLight, color: "#065f46", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14 }}>THE TEAM</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: C.dark, margin: 0, letterSpacing: "-1px" }}>The People Behind Crix</h2>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {TEAM.slice(0, 4).map(({ name, role, avatar, color }, i) => (
              <RevealBox key={name} delay={i * 0.08}>
                <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 18, padding: "2rem 1.5rem", textAlign: "center", boxShadow: shadow.sm, transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = shadow.sm; }}
                >
                  <div style={{ width: 68, height: 68, borderRadius: "50%", background: `linear-gradient(135deg, ${color}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: "#fff", margin: "0 auto 16px" }}>{avatar}</div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: C.dark, marginBottom: 4 }}>{name}</div>
                  <div style={{ fontSize: 13, color: C.muted }}>{role}</div>
                </div>
              </RevealBox>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/team" style={{ display: "inline-block", background: "#fff", color: C.primary, border: `1.5px solid ${C.primary}`, borderRadius: 10, padding: "11px 28px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Meet the Full Team →</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </div>
  );
}
