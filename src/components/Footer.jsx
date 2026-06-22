import { Link } from "react-router-dom";
import { C, APPLY_LINK } from "../theme";

export default function Footer() {
  return (
    <footer style={{ background: C.dark, color: "#fff", padding: "4rem 2.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
          <div>
            <div style={{ marginBottom: 18 }}>
              <img src="/crix-logo.png" alt="Crix Technology" style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
            </div>
            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.85, maxWidth: 300, marginBottom: 18 }}>
              Your one-stop solution for IT services, virtual internships, and future-ready skills training. Based in Ahmedabad, serving all of India.
            </p>
            <a href="tel:9723223588" style={{ color: C.primary, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>9723223588</a><br />
            <a href="mailto:crixtechnology@gmail.com" style={{ color: C.primary, fontWeight: 600, textDecoration: "none", fontSize: 14, marginTop: 6, display: "inline-block" }}>crixtechnology@gmail.com</a>
          </div>

          {[
            { heading: "Internships", links: [["Web Development", "/internships"], ["Android Development", "/internships"]] },
            { heading: "Company", links: [["About Us", "/about"], ["Services", "/services"], ["Courses", "/courses"], ["Contact", "/contact"]] },
            { heading: "Quick Links", links: [["Apply for Internship", APPLY_LINK], ["Get a Quote", "/contact"], ["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"]] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{ fontWeight: 700, fontSize: 14, color: "#fff", margin: "0 0 1.1rem", letterSpacing: "0.3px" }}>{heading}</h4>
              {links.map(([label, href]) => {
                const isExternal = href.startsWith("http");
                return isExternal ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer" style={{ display: "block", color: "#94a3b8", fontSize: 13, marginBottom: 9, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = C.primary}
                    onMouseLeave={e => e.target.style.color = "#94a3b8"}
                  >{label}</a>
                ) : (
                  <Link key={label} to={href} style={{ display: "block", color: "#94a3b8", fontSize: 13, marginBottom: 9, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = C.primary}
                    onMouseLeave={e => e.target.style.color = "#94a3b8"}
                  >{label}</Link>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #1e293b", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>© {new Date().getFullYear()} Crix Technology. All rights reserved. · Ahmedabad, Gujarat, India</p>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>Built for India's next tech generation</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
