import { useState, useEffect } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const INTERNSHIP_DOMAINS = [
  { icon: "🌐", title: "Web Development", tech: "HTML · CSS · JS · React", duration: "1 / 3 Month", seats: "Open" },
  { icon: "📱", title: "Android Development", tech: "Java · Kotlin · React Native", duration: "1 / 3 Month", seats: "Open" },
  { icon: "🤖", title: "AI / Machine Learning", tech: "Python · TensorFlow · Scikit-learn", duration: "1 / 3 Month", seats: "Limited" },
  { icon: "🛡️", title: "Cybersecurity", tech: "Ethical Hacking · Networks · Tools", duration: "1 / 3 Month", seats: "Open" },
  { icon: "📊", title: "Data Science", tech: "Python · Pandas · Power BI", duration: "1 / 3 Month", seats: "Open" },
  { icon: "☁️", title: "Cloud Computing", tech: "AWS · Azure · GCP", duration: "1 / 3 Month", seats: "Limited" },
];

const SERVICES = [
  { icon: "💻", title: "Web Development", desc: "Modern, responsive & SEO-friendly websites that grow your business online.", color: "#2563eb" },
  { icon: "📱", title: "App Development", desc: "Custom Android & iOS apps with seamless user experiences.", color: "#7c3aed" },
  { icon: "🧠", title: "AI Solutions", desc: "Smart automation and AI integrations to accelerate your operations.", color: "#0891b2" },
  { icon: "📣", title: "Digital Marketing", desc: "SEO, social media & paid campaigns that bring real, measurable results.", color: "#d97706" },
  { icon: "🎓", title: "Training & Courses", desc: "Industry-oriented courses designed by working professionals.", color: "#059669" },
  { icon: "🔐", title: "IT Consulting", desc: "Strategic technology guidance tailored to your business goals.", color: "#dc2626" },
];

const STATS = [
  { num: "15,000+", label: "Interns Trained" },
  { num: "500+", label: "Projects Delivered" },
  { num: "50+", label: "Courses Available" },
  { num: "98%", label: "Satisfaction Rate" },
];

const COURSES = [
  { title: "Full Stack Web Development", lessons: 48, duration: "3 months", level: "Beginner → Pro", badge: "Bestseller", badgeColor: "#f59e0b" },
  { title: "Python & Data Science", lessons: 36, duration: "2 months", level: "Beginner → Mid", badge: "New", badgeColor: "#10b981" },
  { title: "React.js Masterclass", lessons: 30, duration: "6 weeks", level: "Intermediate", badge: "Popular", badgeColor: "#6366f1" },
  { title: "Android with Kotlin", lessons: 40, duration: "2 months", level: "Beginner → Pro", badge: null, badgeColor: null },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", college: "GTU, Ahmedabad", domain: "Web Development Intern", text: "Crix Technology gave me real project experience that no classroom could. The certificate helped me land my first job!", avatar: "RS" },
  { name: "Priya Mehta", college: "PDPU, Gandhinagar", domain: "AI/ML Intern", text: "The task-based learning was incredible. I built 3 production-level projects in just one month!", avatar: "PM" },
  { name: "Arjun Patel", college: "SVIT, Vasad", domain: "Android Dev Intern", text: "Supportive mentors, clear tasks, and a certificate recognized by top recruiters. Highly recommended!", avatar: "AP" },
  { name: "Sneha Joshi", college: "CHARUSAT", domain: "Data Science Intern", text: "I went from zero Python knowledge to building ML models. The curriculum is perfectly structured.", avatar: "SJ" },
];

const STEPS = [
  { n: "01", title: "Choose Your Domain", desc: "Pick from Web Dev, Android, AI/ML, Data Science, Cybersecurity, or Cloud Computing." },
  { n: "02", title: "Register for Free", desc: "Fill in your details — no interview, no fees. Selection is open to all eligible students." },
  { n: "03", title: "Complete Tasks", desc: "Receive project tasks via email. Build real applications with mentor guidance." },
  { n: "04", title: "Get Certified", desc: "Submit your work and receive a verified digital certificate + Letter of Recommendation." },
];

const NAV_LINKS = ["Home", "Internships", "Services", "Courses", "Contact"];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function CrixTechnology() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", college: "", domain: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", college: "", domain: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  // Color tokens
  const C = {
    primary: "#0ea5e9",    // sky blue
    primaryDark: "#0284c7",
    primaryDarker: "#0369a1",
    accent: "#6366f1",     // indigo
    dark: "#0f172a",
    darkCard: "#1e293b",
    darkBorder: "#334155",
    muted: "#94a3b8",
    text: "#f1f5f9",
    textSub: "#cbd5e1",
    green: "#10b981",
    yellow: "#f59e0b",
  };

  const inp = {
    width: "100%", padding: "12px 16px",
    background: "#1e293b", border: "1px solid #334155",
    borderRadius: 10, color: C.text, fontSize: 15,
    outline: "none", boxSizing: "border-box", fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", background: C.dark, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── ANNOUNCEMENT BAR ──────────────────────────────────────── */}
      <div style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, padding: "8px 0", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#fff" }}>
        🎓 June 2026 Internship Batch is OPEN — Limited Seats!&nbsp;&nbsp;
        <button onClick={() => scrollTo("Internships")} style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 20, padding: "2px 14px", color: "#fff", cursor: "pointer", fontSize: 12, fontWeight: 700 }}>Apply Now →</button>
      </div>

      {/* ── NAVBAR ────────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 200,
        background: scrolled ? "rgba(15,23,42,0.97)" : "rgba(15,23,42,0.85)",
        borderBottom: `1px solid ${scrolled ? C.darkBorder : "transparent"}`,
        backdropFilter: "blur(16px)", transition: "all 0.3s",
        padding: "0 2.5rem", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 64,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("Home")}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, color: "#fff", fontSize: 18, letterSpacing: -1,
          }}>C</div>
          <div>
            <span style={{ fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.5px" }}>CRIX</span>
            <span style={{ fontWeight: 400, fontSize: 14, color: C.primary, marginLeft: 6, letterSpacing: "1px" }}>TECHNOLOGY</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
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
            padding: "9px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer",
            boxShadow: `0 0 20px ${C.primary}40`, transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >Apply for Internship</button>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section id="home" style={{
        minHeight: "92vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        padding: "4rem 2.5rem",
        background: "linear-gradient(160deg, #0f172a 0%, #0c1a30 60%, #0f172a 100%)",
      }}>
        {/* Grid bg */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: `linear-gradient(${C.primary} 1px, transparent 1px), linear-gradient(90deg, ${C.primary} 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />
        {/* Glow blobs */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 480, height: 480, borderRadius: "50%", background: `radial-gradient(circle, ${C.primary}18 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${C.accent}14 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.primary}15`, border: `1px solid ${C.primary}40`, borderRadius: 50, padding: "5px 18px", marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, display: "inline-block", boxShadow: `0 0 6px ${C.green}` }} />
              <span style={{ fontSize: 13, color: C.primary, fontWeight: 600, letterSpacing: "0.3px" }}>Virtual Internships Now Open · June 2026 Batch</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 1.25rem", letterSpacing: "-1.5px", color: "#fff" }}>
              Innovate. Build.{" "}
              <span style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Grow.</span>
            </h1>

            <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.8, margin: "0 0 1rem", maxWidth: 520 }}>
              Your one-stop destination for <strong style={{ color: C.primary }}>AI Solutions</strong>, Digital Services & <strong style={{ color: "#a5b4fc" }}>Future-Ready Internships</strong> that launch careers.
            </p>
            <p style={{ fontSize: 14, color: C.muted, marginBottom: 36, fontStyle: "italic" }}>Your Vision, Our Technology</p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Internships")} style={{
                background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                color: "#fff", border: "none", borderRadius: 10,
                padding: "14px 32px", fontWeight: 700, fontSize: 16, cursor: "pointer",
                boxShadow: `0 4px 28px ${C.primary}40`, transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >🎓 Apply for Internship</button>
              <button onClick={() => scrollTo("Services")} style={{
                background: "transparent", color: C.textSub,
                border: `1px solid ${C.darkBorder}`, borderRadius: 10,
                padding: "14px 32px", fontWeight: 600, fontSize: 16, cursor: "pointer", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.color = C.textSub; }}
              >Our Services →</button>
            </div>

            {/* Trust indicators */}
            <div style={{ display: "flex", gap: "2rem", marginTop: 44, paddingTop: 36, borderTop: `1px solid ${C.darkBorder}` }}>
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: C.primary, letterSpacing: "-0.5px" }}>{num}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature card stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "🎓", label: "Virtual Internships", sub: "Web Dev · AI · Android · Cloud · more", color: C.primary },
              { icon: "💻", label: "IT Services & Solutions", sub: "Web · App · AI · Digital Marketing", color: C.accent },
              { icon: "📚", label: "Online Courses", sub: "Industry-oriented · Certificate included", color: C.green },
              { icon: "🏆", label: "Career Support", sub: "LOR · Certificate · LinkedIn Recommendation", color: C.yellow },
            ].map(({ icon, label, sub, color }) => (
              <div key={label} style={{
                background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                borderRadius: 14, padding: "1.1rem 1.4rem",
                display: "flex", alignItems: "center", gap: 14,
                transition: "all 0.2s", cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = `${color}0a`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.background = C.darkCard; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>{label}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{sub}</div>
                </div>
                <div style={{ marginLeft: "auto", color: color, fontSize: 18 }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNSHIPS SECTION ───────────────────────────────────── */}
      <section id="internships" style={{ padding: "6rem 2.5rem", background: "#0a1628" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ display: "inline-block", background: `${C.primary}20`, color: C.primary, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14, border: `1px solid ${C.primary}30` }}>VIRTUAL INTERNSHIP PROGRAM</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, margin: "0 0 1rem", letterSpacing: "-1px", color: "#fff" }}>
              Launch Your Tech Career
            </h2>
            <p style={{ color: C.muted, fontSize: 17, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Task-based, mentor-guided internships. No interview, no fees. Earn a verified certificate recognized by top recruiters.
            </p>
          </div>

          {/* How It Works — horizontal timeline */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", marginBottom: "4rem", position: "relative" }}>
            <div style={{ position: "absolute", top: 22, left: "12.5%", right: "12.5%", height: 1, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, opacity: 0.3 }} />
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={n} style={{ textAlign: "center", padding: "0 1.5rem", position: "relative" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem", fontWeight: 800, fontSize: 14, color: "#fff",
                  boxShadow: `0 0 20px ${C.primary}50`,
                }}>{n}</div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "#fff", margin: "0 0 8px" }}>{title}</h4>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Domain Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
            {INTERNSHIP_DOMAINS.map(({ icon, title, tech, duration, seats }) => (
              <div key={title} style={{
                background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                borderRadius: 16, padding: "1.75rem", transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${C.primary}20`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${C.primary}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, border: `1px solid ${C.primary}25` }}>{icon}</div>
                  <span style={{
                    fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50,
                    background: seats === "Limited" ? `${C.yellow}20` : `${C.green}20`,
                    color: seats === "Limited" ? C.yellow : C.green,
                    border: `1px solid ${seats === "Limited" ? C.yellow + "40" : C.green + "40"}`,
                  }}>{seats === "Limited" ? "⚠ Limited" : "✓ Open"}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: "#fff", margin: "0 0 6px" }}>{title}</h3>
                <p style={{ fontSize: 13, color: C.muted, margin: "0 0 14px" }}>{tech}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: C.muted }}>⏱ {duration}</span>
                  <button onClick={() => scrollTo("Contact")} style={{
                    background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                    color: "#fff", border: "none", borderRadius: 8,
                    padding: "7px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer",
                  }}>Apply</button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits bar */}
          <div style={{ background: `linear-gradient(135deg, ${C.primary}15, ${C.accent}15)`, border: `1px solid ${C.primary}25`, borderRadius: 16, padding: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", textAlign: "center" }}>
            {[
              { icon: "🆓", label: "100% Free" },
              { icon: "📜", label: "Verified Certificate" },
              { icon: "🏠", label: "Work from Home" },
              { icon: "🧑‍💼", label: "Letter of Recommendation" },
              { icon: "🔗", label: "LinkedIn Recognition" },
              { icon: "💼", label: "Resume Boost" },
            ].map(({ icon, label }) => (
              <div key={label}>
                <div style={{ fontSize: 26, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.textSub }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ──────────────────────────────────────── */}
      <section id="services" style={{ padding: "6rem 2.5rem", background: C.dark }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ display: "inline-block", background: `${C.accent}20`, color: "#a5b4fc", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14, border: `1px solid ${C.accent}30` }}>IT SERVICES</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, margin: "0 0 1rem", letterSpacing: "-1px", color: "#fff" }}>Smart Solutions, Real Results</h2>
            <p style={{ color: C.muted, fontSize: 17, maxWidth: 520, margin: "0 auto" }}>Trusted by startups and enterprises across India for technology services that drive actual growth.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
            {SERVICES.map(({ icon, title, desc, color }) => (
              <div key={title} style={{
                background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                borderRadius: 16, padding: "2rem",
                transition: "all 0.25s", cursor: "default", position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + "80"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: 54, height: 54, borderRadius: 14, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16, border: `1px solid ${color}30` }}>{icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: "#fff", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{desc}</p>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${color}, transparent)`, opacity: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ───────────────────────────────────────────────── */}
      <section id="courses" style={{ padding: "6rem 2.5rem", background: "#0a1628" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: 16 }}>
            <div>
              <span style={{ display: "inline-block", background: `${C.green}20`, color: C.green, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14, border: `1px solid ${C.green}30` }}>ONLINE COURSES</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, margin: 0, letterSpacing: "-1px", color: "#fff" }}>Learn In-Demand Skills</h2>
            </div>
            <button onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: C.primary, border: `1px solid ${C.primary}40`, borderRadius: 8, padding: "10px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>View All Courses →</button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {COURSES.map(({ title, lessons, duration, level, badge, badgeColor }) => (
              <div key={title} style={{
                background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                borderRadius: 16, padding: 0, overflow: "hidden",
                transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px #0003`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Course color banner */}
                <div style={{ height: 6, background: `linear-gradient(90deg, ${C.primary}, ${C.accent})` }} />
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", margin: 0, lineHeight: 1.4, flex: 1 }}>{title}</h3>
                    {badge && <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 50, background: `${badgeColor}25`, color: badgeColor, border: `1px solid ${badgeColor}40`, marginLeft: 8, flexShrink: 0 }}>{badge}</span>}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: C.muted }}>📖 {lessons} Lessons</div>
                    <div style={{ fontSize: 13, color: C.muted }}>⏱ {duration}</div>
                    <div style={{ fontSize: 13, color: C.muted }}>📶 {level}</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: 18, fontWeight: 900, color: C.primary }}>FREE</span>
                      <span style={{ fontSize: 12, color: C.muted, marginLeft: 6 }}>with Internship</span>
                    </div>
                    <button onClick={() => scrollTo("Contact")} style={{
                      background: `${C.primary}20`, color: C.primary,
                      border: `1px solid ${C.primary}40`, borderRadius: 8,
                      padding: "7px 16px", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s",
                    }}
                      onMouseEnter={e => { e.target.style.background = C.primary; e.target.style.color = "#fff"; }}
                      onMouseLeave={e => { e.target.style.background = `${C.primary}20`; e.target.style.color = C.primary; }}
                    >Enroll</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section style={{ padding: "6rem 2.5rem", background: C.dark }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ display: "inline-block", background: `${C.yellow}20`, color: C.yellow, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 14, border: `1px solid ${C.yellow}30` }}>INTERN STORIES</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, margin: 0, letterSpacing: "-1px", color: "#fff" }}>What Our Interns Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {TESTIMONIALS.map(({ name, college, domain, text, avatar }) => (
              <div key={name} style={{
                background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                borderRadius: 16, padding: "1.75rem", transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primary + "50"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ color: C.primary, fontSize: 28, lineHeight: 1, marginBottom: 14, fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.8, margin: "0 0 1.25rem", fontStyle: "italic" }}>{text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff", flexShrink: 0 }}>{avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>{name}</div>
                    <div style={{ fontSize: 12, color: C.muted }}>{college}</div>
                    <div style={{ fontSize: 11, color: C.primary, marginTop: 2 }}>{domain}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "6rem 2.5rem", background: "#0a1628" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }}>
          {/* Left info */}
          <div>
            <span style={{ display: "inline-block", background: `${C.primary}20`, color: C.primary, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 20, border: `1px solid ${C.primary}30` }}>GET IN TOUCH</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, margin: "0 0 1rem", letterSpacing: "-1px", color: "#fff" }}>
              Let's Build Your Future Together!
            </h2>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Whether you want to apply for an internship, enroll in a course, or need IT services — we're here to help. Let's turn your ideas into reality!
            </p>

            {[
              { icon: "📞", label: "Call / WhatsApp", value: "9723223588", href: "tel:9723223588" },
              { icon: "✉️", label: "Email Us", value: "services.crix@gmail.com", href: "mailto:services.crix@gmail.com" },
              { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat, India", href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.primary}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, border: `1px solid ${C.primary}25` }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 2 }}>{label}</div>
                  {href ? <a href={href} style={{ color: C.primary, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>{value}</a> : <div style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{value}</div>}
                </div>
              </div>
            ))}

            {/* CTA box */}
            <div style={{ marginTop: "2rem", background: `linear-gradient(135deg, ${C.primary}15, ${C.accent}15)`, border: `1px solid ${C.primary}25`, borderRadius: 14, padding: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: 6 }}>📋 One-Stop Solution</div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7 }}>For your business & career growth — IT services, internships, and courses all under one roof.</div>
            </div>
          </div>

          {/* Right form */}
          <div style={{ background: C.darkCard, border: `1px solid ${C.darkBorder}`, borderRadius: 20, padding: "2.5rem" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <div style={{ fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 8 }}>Application Received!</div>
                <div style={{ color: C.muted, fontSize: 15, lineHeight: 1.7 }}>We'll send your internship details to your email within 24 hours. Welcome to Crix Technology!</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem", fontWeight: 800, fontSize: 20, color: "#fff" }}>Apply / Get a Quote</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
                  {[
                    { k: "name", ph: "Full Name" },
                    { k: "college", ph: "College / Company" },
                  ].map(({ k, ph }) => (
                    <div key={k}>
                      <input value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} required style={inp}
                        onFocus={e => e.target.style.borderColor = C.primary}
                        onBlur={e => e.target.style.borderColor = "#334155"} />
                    </div>
                  ))}
                </div>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Email Address" required style={inp}
                  onFocus={e => e.target.style.borderColor = C.primary}
                  onBlur={e => e.target.style.borderColor = "#334155"} />
                <select value={form.domain} onChange={e => setForm(f => ({ ...f, domain: e.target.value }))} required
                  style={{ ...inp, color: form.domain ? C.text : C.muted }}>
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
                <button type="submit" style={{
                  background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                  color: "#fff", border: "none", borderRadius: 10,
                  padding: "14px 0", fontWeight: 800, fontSize: 16, cursor: "pointer",
                  boxShadow: `0 4px 24px ${C.primary}35`, transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.target.style.opacity = "0.9"}
                  onMouseLeave={e => e.target.style.opacity = "1"}
                >Submit Application →</button>
                <p style={{ textAlign: "center", fontSize: 12, color: C.muted, margin: 0 }}>📞 Quick contact: <a href="tel:9723223588" style={{ color: C.primary, fontWeight: 700 }}>9723223588</a> · WhatsApp anytime</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{ background: "#060e1e", borderTop: `1px solid ${C.darkBorder}`, padding: "3rem 2.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 17 }}>C</div>
                <div>
                  <span style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>CRIX</span>
                  <span style={{ fontWeight: 400, fontSize: 12, color: C.primary, marginLeft: 6 }}>TECHNOLOGY</span>
                </div>
              </div>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.8, maxWidth: 300 }}>Your one-stop solution for IT services, virtual internships, and future-ready skills training.</p>
              <p style={{ fontSize: 14, marginTop: 12 }}><a href="tel:9723223588" style={{ color: C.primary, fontWeight: 700, textDecoration: "none" }}>📞 9723223588</a></p>
            </div>
            {[
              { heading: "Internships", links: ["Web Development", "Android Dev", "AI / ML", "Data Science", "Cloud Computing", "Cybersecurity"] },
              { heading: "Services", links: ["Web Development", "App Development", "AI Solutions", "Digital Marketing", "Courses", "IT Consulting"] },
              { heading: "Company", links: ["About Us", "Our Team", "Certificates", "Blog", "Careers", "Contact"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h4 style={{ fontWeight: 700, fontSize: 14, color: "#fff", margin: "0 0 1rem", letterSpacing: "0.3px" }}>{heading}</h4>
                {links.map(l => (
                  <div key={l} style={{ color: C.muted, fontSize: 13, marginBottom: 8, cursor: "pointer", transition: "color 0.2s" }}
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
                <span key={l} style={{ color: "#334155", fontSize: 12, cursor: "pointer" }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}