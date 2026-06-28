import { useState, useEffect, useRef } from "react";

// ─── THEME ────────────────────────────────────────────────────────────────────
const C = {
  primary: "#0ea5e9",
  primaryDark: "#0284c7",
  accent: "#6366f1",
  accentLight: "#a5b4fc",
  dark: "#0f172a",
  darkCard: "#1e293b",
  darkCard2: "#162032",
  darkBorder: "#334155",
  muted: "#94a3b8",
  text: "#f1f5f9",
  textSub: "#cbd5e1",
  green: "#10b981",
  yellow: "#f59e0b",
  red: "#ef4444",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Home", "About", "Internships", "Services", "Courses", "Team", "Contact"];

const STATS = [
  { num: "15,000+", label: "Interns Trained" },
  { num: "500+", label: "Projects Delivered" },
  { num: "50+", label: "Courses Available" },
  { num: "98%", label: "Satisfaction Rate" },
];

const WHY_US = [
  { icon: "💰", title: "Paid Internship", desc: "Affordable fee, no interview. Open to all eligible students across India." },
  { icon: "🏠", title: "Work From Anywhere", desc: "Fully virtual program — complete tasks from the comfort of your home." },
  { icon: "📜", title: "Verified Certificate", desc: "Industry-recognized digital certificate + Letter of Recommendation." },
  { icon: "🧑‍💼", title: "Mentor Support", desc: "Dedicated mentors guide you through every task and project." },
  { icon: "💼", title: "Resume Boost", desc: "Real projects for your portfolio that impress top recruiters." },
  { icon: "🔗", title: "LinkedIn Recognition", desc: "Official LinkedIn recommendation from Crix Technology." },
];

const INTERNSHIP_DOMAINS = [
  { icon: "🌐", title: "Web Development", tech: "HTML · CSS · JS · React", duration: "1 / 3 Month", seats: "Open", color: C.primary },
  { icon: "📱", title: "Android Development", tech: "Java · Kotlin · React Native", duration: "1 / 3 Month", seats: "Open", color: "#22d3ee" },
  { icon: "🤖", title: "AI / Machine Learning", tech: "Python · TensorFlow · Scikit-learn", duration: "1 / 3 Month", seats: "Limited", color: C.accent },
  { icon: "🛡️", title: "Cybersecurity", tech: "Ethical Hacking · Networks · Tools", duration: "1 / 3 Month", seats: "Open", color: C.red },
  { icon: "📊", title: "Data Science", tech: "Python · Pandas · Power BI", duration: "1 / 3 Month", seats: "Open", color: C.yellow },
  { icon: "☁️", title: "Cloud Computing", tech: "AWS · Azure · GCP", duration: "1 / 3 Month", seats: "Limited", color: C.green },
];

const SERVICES = [
  { icon: "💻", title: "Web Development", desc: "Modern, responsive & SEO-friendly websites that grow your business online.", color: C.primary },
  { icon: "📱", title: "App Development", desc: "Custom Android & iOS apps with seamless user experiences.", color: C.accent },
  { icon: "🧠", title: "AI Solutions", desc: "Smart automation and AI integrations to accelerate your operations.", color: "#0891b2" },
  { icon: "📣", title: "Digital Marketing", desc: "SEO, social media & paid campaigns that bring real, measurable results.", color: C.yellow },
  { icon: "🎓", title: "Training & Courses", desc: "Industry-oriented courses designed by working professionals.", color: C.green },
  { icon: "🔐", title: "IT Consulting", desc: "Strategic technology guidance tailored to your business goals.", color: C.red },
];

const COURSES = [
  { title: "Full Stack Web Development", lessons: 48, duration: "3 months", level: "Beginner → Pro", badge: "Bestseller", badgeColor: C.yellow },
  { title: "Python & Data Science", lessons: 36, duration: "2 months", level: "Beginner → Mid", badge: "New", badgeColor: C.green },
  { title: "React.js Masterclass", lessons: 30, duration: "6 weeks", level: "Intermediate", badge: "Popular", badgeColor: C.accent },
  { title: "Android with Kotlin", lessons: 40, duration: "2 months", level: "Beginner → Pro", badge: null, badgeColor: null },
];

const STEPS = [
  { n: "01", title: "Choose Your Domain", desc: "Pick from Web Dev, Android, AI/ML, Data Science, Cybersecurity, or Cloud Computing." },
  { n: "02", title: "Register & Pay", desc: "Fill in your details and complete the payment. Selection is open to all eligible students." },
  { n: "03", title: "Complete Tasks", desc: "Receive project tasks via email. Build real applications with mentor guidance." },
  { n: "04", title: "Get Certified", desc: "Submit your work and receive a verified digital certificate + Letter of Recommendation." },
];

const TEAM = [
  { name: "Raj Patel", role: "Founder & CEO", avatar: "RP", color: C.primary },
  { name: "Nisha Shah", role: "Head of Internships", avatar: "NS", color: C.accent },
  { name: "Dev Mehta", role: "Lead Instructor", avatar: "DM", color: C.green },
  { name: "Pooja Joshi", role: "Marketing Lead", avatar: "PJ", color: C.yellow },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", college: "GTU, Ahmedabad", domain: "Web Development", text: "Crix Technology gave me real project experience that no classroom could. The certificate helped me land my first job!", avatar: "RS" },
  { name: "Priya Mehta", college: "PDPU, Gandhinagar", domain: "AI/ML Intern", text: "The task-based learning was incredible. I built 3 production-level projects in just one month!", avatar: "PM" },
  { name: "Arjun Patel", college: "SVIT, Vasad", domain: "Android Dev", text: "Supportive mentors, clear tasks, and a certificate recognized by top recruiters. Highly recommended!", avatar: "AP" },
  { name: "Sneha Joshi", college: "CHARUSAT", domain: "Data Science", text: "I went from zero Python knowledge to building ML models. The curriculum is perfectly structured.", avatar: "SJ" },
];

const PARTNERS = ["TCS", "Infosys", "Wipro", "HDFC Bank", "Reliance", "ISRO", "Google", "Microsoft"];

// ─── HOOK: scroll-reveal ───────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── SMALL COMPONENTS ─────────────────────────────────────────────────────────
function SectionBadge({ color, text }) {
  return (
    <span style={{ display: "inline-block", background: `${color}20`, color, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14, border: `1px solid ${color}30` }}>
      {text}
    </span>
  );
}

function SectionHeading({ title, sub, center = true }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "3.5rem" }}>
      <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 900, margin: "0 0 1rem", letterSpacing: "-1px", color: "#fff" }}>{title}</h2>
      {sub && <p style={{ color: C.muted, fontSize: 17, maxWidth: 560, margin: center ? "0 auto" : 0, lineHeight: 1.7 }}>{sub}</p>}
    </div>
  );
}

function RevealBox({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function CrixTechnology() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", college: "", domain: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", college: "", domain: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inp = {
    width: "100%", padding: "13px 16px",
    background: "#1e293b", border: "1px solid #334155",
    borderRadius: 10, color: C.text, fontSize: 15,
    outline: "none", boxSizing: "border-box", fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", background: C.dark, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── ANNOUNCEMENT BAR ──────────────────────────────────────────────── */}
      <div style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, padding: "9px 0", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#fff" }}>
        🎓 June 2026 Internship Batch is OPEN — Limited Seats!&nbsp;&nbsp;
        <button onClick={() => scrollTo("Internships")} style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 20, padding: "2px 14px", color: "#fff", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>Apply Now →</button>
      </div>

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 200,
        background: scrolled ? "rgba(15,23,42,0.97)" : "rgba(15,23,42,0.85)",
        borderBottom: `1px solid ${scrolled ? C.darkBorder : "transparent"}`,
        backdropFilter: "blur(18px)", transition: "all 0.3s",
        padding: "0 2.5rem", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 66,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("Home")}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 19, letterSpacing: -1 }}>C</div>
          <div>
            <span style={{ fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.5px" }}>CRIX</span>
            <span style={{ fontWeight: 400, fontSize: 13, color: C.primary, marginLeft: 6, letterSpacing: "1px" }}>TECHNOLOGY</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "1.6rem", alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: activeNav === l ? C.primary : C.muted,
              fontWeight: activeNav === l ? 700 : 400, fontSize: 14,
              borderBottom: activeNav === l ? `2px solid ${C.primary}` : "2px solid transparent",
              paddingBottom: 2, transition: "all 0.2s",
            }}>{l}</button>
          ))}
          <button onClick={() => scrollTo("Internships")} style={{
            background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
            color: "#fff", border: "none", borderRadius: 8,
            padding: "9px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer",
            boxShadow: `0 0 20px ${C.primary}40`, transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >Apply Now</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(o => !o)} style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer" }} className="hamburger">☰</button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 66, left: 0, right: 0, background: "rgba(15,23,42,0.98)", zIndex: 199, padding: "1.5rem", display: "flex", flexDirection: "column", gap: 12, borderBottom: `1px solid ${C.darkBorder}` }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", color: C.textSub, fontSize: 16, fontWeight: 600, textAlign: "left", cursor: "pointer", padding: "8px 0" }}>{l}</button>
          ))}
          <button onClick={() => scrollTo("Internships")} style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 8, padding: "12px", fontWeight: 700, fontSize: 15, cursor: "pointer", marginTop: 8 }}>Apply for Internship</button>
        </div>
      )}

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="home" style={{
        minHeight: "92vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", padding: "5rem 2.5rem",
        background: "linear-gradient(160deg, #0f172a 0%, #0c1a30 60%, #0f172a 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `linear-gradient(${C.primary} 1px, transparent 1px), linear-gradient(90deg, ${C.primary} 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle, ${C.primary}18 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "3%", width: 340, height: 340, borderRadius: "50%", background: `radial-gradient(circle, ${C.accent}14 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", left: "40%", width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${C.green}10 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: 780 }}>
            <RevealBox>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.primary}15`, border: `1px solid ${C.primary}40`, borderRadius: 50, padding: "6px 20px", marginBottom: 32 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, display: "inline-block", boxShadow: `0 0 8px ${C.green}` }} />
                <span style={{ fontSize: 13, color: C.primary, fontWeight: 600 }}>Virtual Internships Now Open · June 2026 Batch</span>
              </div>
            </RevealBox>

            <RevealBox delay={0.1}>
              <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)", fontWeight: 900, lineHeight: 1.08, margin: "0 0 1.5rem", letterSpacing: "-2px", color: "#fff" }}>
                Elevate Your Career<br />
                <span style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>with Crix Technology.</span>
              </h1>
            </RevealBox>

            <RevealBox delay={0.2}>
              <p style={{ fontSize: 19, color: C.textSub, lineHeight: 1.8, margin: "0 0 2.5rem", maxWidth: 600 }}>
                India's leading platform for <strong style={{ color: C.primary }}>paid virtual internships</strong>, cutting-edge IT services, and industry-ready courses — built to launch real careers.
              </p>
            </RevealBox>

            <RevealBox delay={0.3}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
                <button onClick={() => scrollTo("Internships")} style={{
                  background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                  color: "#fff", border: "none", borderRadius: 12,
                  padding: "15px 36px", fontWeight: 700, fontSize: 16, cursor: "pointer",
                  boxShadow: `0 4px 32px ${C.primary}40`, transition: "transform 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "none"}
                >🎓 Apply for Internship</button>
                <button onClick={() => scrollTo("Services")} style={{
                  background: "transparent", color: C.textSub,
                  border: `1px solid ${C.darkBorder}`, borderRadius: 12,
                  padding: "15px 36px", fontWeight: 600, fontSize: 16, cursor: "pointer", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.color = C.textSub; }}
                >Explore Services →</button>
              </div>
            </RevealBox>

            <RevealBox delay={0.4}>
              <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", paddingTop: 36, borderTop: `1px solid ${C.darkBorder}` }}>
                {STATS.map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: C.primary, letterSpacing: "-0.5px" }}>{num}</div>
                    <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{label}</div>
                  </div>
                ))}
              </div>
            </RevealBox>
          </div>
        </div>
      </section>

      {/* ── PARTNER STRIP ─────────────────────────────────────────────────── */}
      <div style={{ background: C.darkCard2, borderTop: `1px solid ${C.darkBorder}`, borderBottom: `1px solid ${C.darkBorder}`, padding: "1.25rem 2.5rem", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: "1px", whiteSpace: "nowrap" }}>TRUSTED BY STUDENTS FROM</span>
          {PARTNERS.map(p => (
            <span key={p} style={{ fontSize: 14, fontWeight: 700, color: "#475569", letterSpacing: "0.5px" }}>{p}</span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: "7rem 2.5rem", background: C.dark }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <RevealBox>
            <SectionBadge color={C.primary} text="WHO WE ARE" />
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 900, margin: "0 0 1.25rem", letterSpacing: "-1px", color: "#fff", lineHeight: 1.15 }}>
              Building India's Next Generation of Tech Professionals
            </h2>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.9, marginBottom: 24 }}>
              Crix Technology is an Ahmedabad-based IT company that combines real-world IT services with a mission-driven internship program. We've trained over 15,000 students from 200+ colleges across India.
            </p>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>
              Our belief: every student deserves access to industry-level experience — regardless of their background. That's why every internship we offer is affordable and accessible.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Internships")} style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Our Internship Program</button>
              <button onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: C.primary, border: `1px solid ${C.primary}50`, borderRadius: 10, padding: "12px 28px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Get in Touch</button>
            </div>
          </RevealBox>

          <RevealBox delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "🎓", num: "15,000+", label: "Students Trained", color: C.primary },
                { icon: "🏢", num: "500+", label: "Projects Delivered", color: C.accent },
                { icon: "📚", num: "50+", label: "Active Courses", color: C.green },
                { icon: "⭐", num: "98%", label: "Satisfaction Rate", color: C.yellow },
              ].map(({ icon, num, label, color }) => (
                <div key={label} style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 16, padding: "1.75rem", textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                  <div style={{ fontSize: 26, fontWeight: 900, color, letterSpacing: "-0.5px" }}>{num}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </RevealBox>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.darkCard2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <SectionBadge color={C.accent} text="WHY CRIX TECHNOLOGY" />
              <SectionHeading title="Everything You Need to Launch Your Career" sub="We've removed every barrier between you and your first real tech experience." />
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {WHY_US.map(({ icon, title, desc }, i) => (
              <RevealBox key={title} delay={i * 0.07}>
                <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 16, padding: "1.75rem", height: "100%", transition: "all 0.25s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary + "60"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${C.primary}15`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNSHIPS ───────────────────────────────────────────────────── */}
      <section id="internships" style={{ padding: "7rem 2.5rem", background: C.dark }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <SectionBadge color={C.primary} text="VIRTUAL INTERNSHIP PROGRAM" />
              <SectionHeading title="Launch Your Tech Career" sub="Task-based, mentor-guided internships. No interview, no fees. Earn a verified certificate recognized by top recruiters." />
            </div>
          </RevealBox>

          {/* Steps */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginBottom: "4.5rem", position: "relative" }}>
            <div style={{ position: "absolute", top: 22, left: "12.5%", right: "12.5%", height: 1, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, opacity: 0.3 }} />
            {STEPS.map(({ n, title, desc }, i) => (
              <RevealBox key={n} delay={i * 0.1}>
                <div style={{ textAlign: "center", padding: "0 1.5rem", position: "relative" }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontWeight: 800, fontSize: 14, color: "#fff", boxShadow: `0 0 24px ${C.primary}50` }}>{n}</div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, color: "#fff", margin: "0 0 8px" }}>{title}</h4>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </RevealBox>
            ))}
          </div>

          {/* Domain cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
            {INTERNSHIP_DOMAINS.map(({ icon, title, tech, duration, seats, color }, i) => (
              <RevealBox key={title} delay={i * 0.07}>
                <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 18, padding: "1.75rem", transition: "all 0.25s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ width: 54, height: 54, borderRadius: 14, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, border: `1px solid ${color}30` }}>{icon}</div>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 50, background: seats === "Limited" ? `${C.yellow}20` : `${C.green}20`, color: seats === "Limited" ? C.yellow : C.green, border: `1px solid ${seats === "Limited" ? C.yellow + "40" : C.green + "40"}` }}>{seats === "Limited" ? "⚠ Limited" : "✓ Open"}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 17, color: "#fff", margin: "0 0 6px" }}>{title}</h3>
                  <p style={{ fontSize: 13, color: C.muted, margin: "0 0 16px" }}>{tech}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: C.muted }}>⏱ {duration}</span>
                    <button onClick={() => scrollTo("Contact")} style={{ background: `linear-gradient(135deg, ${color}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 8, padding: "8px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Apply</button>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>

          {/* Benefits bar */}
          <RevealBox>
            <div style={{ background: `linear-gradient(135deg, ${C.primary}12, ${C.accent}12)`, border: `1px solid ${C.primary}22`, borderRadius: 18, padding: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", textAlign: "center" }}>
              {[
                { icon: "💳", label: "Paid Program" },
                { icon: "📜", label: "Verified Certificate" },
                { icon: "🏠", label: "Work from Home" },
                { icon: "🧑‍💼", label: "Letter of Recommendation" },
                { icon: "🔗", label: "LinkedIn Recognition" },
                { icon: "💼", label: "Resume Boost" },
              ].map(({ icon, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.textSub }}>{label}</div>
                </div>
              ))}
            </div>
          </RevealBox>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" style={{ padding: "7rem 2.5rem", background: C.darkCard2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <SectionBadge color={C.accent} text="IT SERVICES" />
              <SectionHeading title="Smart Solutions, Real Results" sub="Trusted by startups and enterprises across India for technology services that drive actual growth." />
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
            {SERVICES.map(({ icon, title, desc, color }, i) => (
              <RevealBox key={title} delay={i * 0.07}>
                <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 18, padding: "2rem", transition: "all 0.25s", cursor: "default", position: "relative", overflow: "hidden", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color + "70"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 18, border: `1px solid ${color}30` }}>{icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: 18, color: "#fff", margin: "0 0 10px" }}>{title}</h3>
                  <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{desc}</p>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, transparent)` }} />
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ───────────────────────────────────────────────────────── */}
      <section id="courses" style={{ padding: "7rem 2.5rem", background: C.dark }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: 16 }}>
              <div>
                <SectionBadge color={C.green} text="ONLINE COURSES" />
                <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", fontWeight: 900, margin: 0, letterSpacing: "-1px", color: "#fff" }}>Learn In-Demand Skills</h2>
              </div>
              <button onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: C.primary, border: `1px solid ${C.primary}40`, borderRadius: 8, padding: "10px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>View All Courses →</button>
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {COURSES.map(({ title, lessons, duration, level, badge, badgeColor }, i) => (
              <RevealBox key={title} delay={i * 0.08}>
                <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 18, overflow: "hidden", transition: "all 0.25s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 48px #0004`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ height: 5, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})` }} />
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                      <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", margin: 0, lineHeight: 1.4, flex: 1 }}>{title}</h3>
                      {badge && <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 50, background: `${badgeColor}25`, color: badgeColor, border: `1px solid ${badgeColor}40`, marginLeft: 8, flexShrink: 0 }}>{badge}</span>}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
                      <div style={{ fontSize: 13, color: C.muted }}>📖 {lessons} Lessons</div>
                      <div style={{ fontSize: 13, color: C.muted }}>⏱ {duration}</div>
                      <div style={{ fontSize: 13, color: C.muted }}>📶 {level}</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: 20, fontWeight: 900, color: C.primary }}>PAID</span>
                        <span style={{ fontSize: 12, color: C.muted, marginLeft: 6 }}>with Internship</span>
                      </div>
                      <button onClick={() => scrollTo("Contact")} style={{ background: `${C.primary}20`, color: C.primary, border: `1px solid ${C.primary}40`, borderRadius: 8, padding: "7px 16px", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s" }}
                        onMouseEnter={e => { e.target.style.background = C.primary; e.target.style.color = "#fff"; }}
                        onMouseLeave={e => { e.target.style.background = `${C.primary}20`; e.target.style.color = C.primary; }}
                      >Enroll</button>
                    </div>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section style={{ padding: "7rem 2.5rem", background: C.darkCard2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <SectionBadge color={C.yellow} text="INTERN STORIES" />
              <SectionHeading title="What Our Interns Say" />
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {TESTIMONIALS.map(({ name, college, domain, text, avatar }, i) => (
              <RevealBox key={name} delay={i * 0.08}>
                <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 18, padding: "1.75rem", transition: "all 0.25s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary + "50"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: C.yellow, fontSize: 14 }}>★</span>)}
                  </div>
                  <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.85, margin: "0 0 1.5rem", fontStyle: "italic" }}>"{text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff", flexShrink: 0 }}>{avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>{name}</div>
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

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section id="team" style={{ padding: "7rem 2.5rem", background: C.dark }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealBox>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <SectionBadge color={C.green} text="OUR TEAM" />
              <SectionHeading title="The People Behind Crix" sub="Passionate technologists and educators dedicated to your growth." />
            </div>
          </RevealBox>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
            {TEAM.map(({ name, role, avatar, color }, i) => (
              <RevealBox key={name} delay={i * 0.08}>
                <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 20, padding: "2rem 1.5rem", textAlign: "center", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg, ${color}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22, color: "#fff", margin: "0 auto 16px", boxShadow: `0 0 24px ${color}40` }}>{avatar}</div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: "#fff", marginBottom: 4 }}>{name}</div>
                  <div style={{ fontSize: 13, color: C.muted }}>{role}</div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: `linear-gradient(135deg, ${C.primary}18, ${C.accent}18)`, borderTop: `1px solid ${C.primary}20`, borderBottom: `1px solid ${C.primary}20` }}>
        <RevealBox>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem", letterSpacing: "-1px" }}>Ready to Start Your Journey?</h2>
            <p style={{ color: C.textSub, fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>Join 15,000+ students who have already transformed their careers with Crix Technology. Apply today and start your journey.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Internships")} style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 12, padding: "15px 36px", fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: `0 4px 32px ${C.primary}40` }}>🎓 Apply Now</button>
              <button onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, padding: "15px 36px", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Contact Us</button>
            </div>
          </div>
        </RevealBox>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "7rem 2.5rem", background: C.dark }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start" }}>
          <RevealBox>
            <SectionBadge color={C.primary} text="GET IN TOUCH" />
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 900, margin: "0 0 1rem", letterSpacing: "-1px", color: "#fff" }}>
              Let's Build Your Future Together
            </h2>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Whether you want to apply for an internship, enroll in a course, or need IT services — we're here to help. Let's turn your ideas into reality.
            </p>

            {[
              { icon: "📞", label: "Call / WhatsApp", value: "9723223588", href: "tel:9723223588" },
              { icon: "✉️", label: "Email Us", value: "services.crix@gmail.com", href: "mailto:services.crix@gmail.com" },
              { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 22 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: `${C.primary}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, border: `1px solid ${C.primary}25` }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 2 }}>{label}</div>
                  {href ? <a href={href} style={{ color: C.primary, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>{value}</a> : <div style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{value}</div>}
                </div>
              </div>
            ))}

            <div style={{ marginTop: "2rem", background: `linear-gradient(135deg, ${C.primary}12, ${C.accent}12)`, border: `1px solid ${C.primary}22`, borderRadius: 16, padding: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: 6 }}>📋 One-Stop Solution</div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>IT services, internships, and courses — all under one roof, all for your growth.</div>
            </div>
          </RevealBox>

          <RevealBox delay={0.15}>
            <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 22, padding: "2.5rem" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ fontSize: 60, marginBottom: 18 }}>🎉</div>
                  <div style={{ fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 10 }}>Application Received!</div>
                  <div style={{ color: C.muted, fontSize: 15, lineHeight: 1.7 }}>We'll send your internship details to your email within 24 hours. Welcome to Crix Technology!</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <h3 style={{ margin: "0 0 0.5rem", fontWeight: 800, fontSize: 20, color: "#fff" }}>Apply / Get a Quote</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
                    {[{ k: "name", ph: "Full Name" }, { k: "college", ph: "College / Company" }].map(({ k, ph }) => (
                      <input key={k} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} required style={inp}
                        onFocus={e => e.target.style.borderColor = C.primary}
                        onBlur={e => e.target.style.borderColor = "#334155"} />
                    ))}
                  </div>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Email Address" required style={inp}
                    onFocus={e => e.target.style.borderColor = C.primary}
                    onBlur={e => e.target.style.borderColor = "#334155"} />
                  <select value={form.domain} onChange={e => setForm(f => ({ ...f, domain: e.target.value }))} required style={{ ...inp, color: form.domain ? C.text : C.muted }}>
                    <option value="" disabled>Select Interest</option>
                    <optgroup label="Internship Domains">
                      {INTERNSHIP_DOMAINS.map(d => <option key={d.title} value={d.title}>{d.icon} {d.title} Internship</option>)}
                    </optgroup>
                    <optgroup label="IT Services">
                      {SERVICES.map(s => <option key={s.title} value={s.title}>{s.icon} {s.title}</option>)}
                    </optgroup>
                  </select>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Tell us about yourself or your project requirements..." rows={4}
                    style={{ ...inp, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = C.primary}
                    onBlur={e => e.target.style.borderColor = "#334155"} />
                  <button type="submit" style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", border: "none", borderRadius: 10, padding: "14px 0", fontWeight: 800, fontSize: 16, cursor: "pointer", boxShadow: `0 4px 24px ${C.primary}35`, transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.target.style.opacity = "0.9"}
                    onMouseLeave={e => e.target.style.opacity = "1"}
                  >Submit Application →</button>
                  <p style={{ textAlign: "center", fontSize: 12, color: C.muted, margin: 0 }}>📞 Quick contact: <a href="tel:9723223588" style={{ color: C.primary, fontWeight: 700 }}>9723223588</a> · WhatsApp anytime</p>
                </form>
              )}
            </div>
          </RevealBox>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ background: "#060e1e", borderTop: `1px solid ${C.darkBorder}`, padding: "4rem 2.5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 18 }}>C</div>
                <div>
                  <span style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>CRIX</span>
                  <span style={{ fontWeight: 400, fontSize: 12, color: C.primary, marginLeft: 6 }}>TECHNOLOGY</span>
                </div>
              </div>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.85, maxWidth: 300, marginBottom: 16 }}>Your one-stop solution for IT services, virtual internships, and future-ready skills training. Based in Ahmedabad, serving all of India.</p>
              <a href="tel:9723223588" style={{ color: C.primary, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>📞 9723223588</a>
            </div>
            {[
              { heading: "Internships", links: ["Web Development", "Android Dev", "AI / ML", "Data Science", "Cloud Computing", "Cybersecurity"] },
              { heading: "Services", links: ["Web Development", "App Development", "AI Solutions", "Digital Marketing", "Courses", "IT Consulting"] },
              { heading: "Company", links: ["About Us", "Our Team", "Certificates", "Blog", "Careers", "Contact"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h4 style={{ fontWeight: 700, fontSize: 14, color: "#fff", margin: "0 0 1.1rem", letterSpacing: "0.3px" }}>{heading}</h4>
                {links.map(l => (
                  <div key={l} style={{ color: C.muted, fontSize: 13, marginBottom: 9, cursor: "pointer", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = C.primary}
                    onMouseLeave={e => e.target.style.color = C.muted}
                  >{l}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${C.darkBorder}`, paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>© {new Date().getFullYear()} Crix Technology. All rights reserved. · Ahmedabad, Gujarat, India</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(l => (
                <span key={l} style={{ color: "#334155", fontSize: 12, cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = C.primary}
                  onMouseLeave={e => e.target.style.color = "#334155"}
                >{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING CTA ──────────────────────────────────────────────────── */}
      {scrolled && (
        <button onClick={() => scrollTo("Contact")} style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 300,
          background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
          color: "#fff", border: "none", borderRadius: 50,
          padding: "14px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer",
          boxShadow: `0 8px 32px ${C.primary}50`, transition: "transform 0.2s",
          display: "flex", alignItems: "center", gap: 8,
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px) scale(1.04)"}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}
        >🎓 Apply Now</button>
      )}

      {/* ── RESPONSIVE STYLES ─────────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          section > div[style*="grid-template-columns: 1fr 1fr"],
          section > div > div[style*="grid-template-columns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
          div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
