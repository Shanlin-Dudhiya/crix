import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { C, APPLY_LINK, shadow } from "../theme";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <>
      {/* Announcement bar */}
      <div style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`, padding: "9px 0", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#fff" }}>
        🎓 June 2026 Internship Batch is OPEN — Limited Seats!&nbsp;&nbsp;
        <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.5)", borderRadius: 20, padding: "2px 14px", color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>Apply Now →</a>
      </div>

      <nav style={{
        position: "sticky", top: 0, zIndex: 200,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        borderBottom: `1px solid ${scrolled ? C.border : C.border}`,
        boxShadow: scrolled ? shadow.md : shadow.sm,
        backdropFilter: "blur(16px)",
        padding: "0 2.5rem", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 66, transition: "all 0.3s",
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 19 }}>C</div>
          <div>
            <span style={{ fontWeight: 800, fontSize: 18, color: C.dark, letterSpacing: "-0.5px" }}>CRIX</span>
            <span style={{ fontWeight: 500, fontSize: 13, color: C.primary, marginLeft: 6, letterSpacing: "0.5px" }}>TECHNOLOGY</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(({ label, path }) => {
            const active = location.pathname === path;
            return (
              <Link key={label} to={path} style={{
                textDecoration: "none", padding: "6px 14px", borderRadius: 8,
                color: active ? C.primary : C.textSub,
                fontWeight: active ? 700 : 500, fontSize: 14,
                background: active ? C.primaryLight : "transparent",
                transition: "all 0.18s",
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = C.bg; e.currentTarget.style.color = C.text; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.textSub; } }}
              >{label}</Link>
            );
          })}
          <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{
            marginLeft: 8,
            background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
            color: "#fff", borderRadius: 9,
            padding: "9px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer",
            boxShadow: `0 2px 12px ${C.primary}40`, textDecoration: "none",
            transition: "opacity 0.2s", display: "inline-block",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Apply Now</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(o => !o)} className="hamburger" style={{ display: "none", background: "none", border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 20, cursor: "pointer", padding: "6px 10px" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 107, left: 0, right: 0, background: "#fff", zIndex: 199, padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: 4, borderBottom: `1px solid ${C.border}`, boxShadow: shadow.lg }}>
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={label} to={path} style={{ textDecoration: "none", color: C.text, fontSize: 15, fontWeight: 600, padding: "10px 12px", borderRadius: 8, background: location.pathname === path ? C.primaryLight : "transparent" }}>{label}</Link>
          ))}
          <a href={APPLY_LINK} target="_blank" rel="noreferrer" style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", borderRadius: 9, padding: "13px", fontWeight: 700, fontSize: 15, cursor: "pointer", marginTop: 10, textAlign: "center", textDecoration: "none" }}>Apply for Internship →</a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
