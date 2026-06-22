import { Link } from "react-router-dom";
import { C, APPLY_LINK } from "../theme";

export default function Footer() {
  return (
    <footer style={{ background: C.dark, color: "#fff", padding: "4rem 2.5rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 18 }}>C</div>
              <div>
                <span style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>CRIX</span>
                <span style={{ fontWeight: 400, fontSize: 12, color: C.primary, marginLeft: 6, letterSpacing: "0.5px" }}>TECHNOLOGY</span>
              </div>
            </div>
            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.85, maxWidth: 300, marginBottom: 18 }}>
              Your one-stop solution for IT services, virtual internships, and future-ready skills training. Based in Ahmedabad, serving all of India.
            </p>
            <a href="tel:9723223588" style={{ color: C.primary, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>📞 9723223588</a><br />
            <a href="mailto:services.crix@gmail.com" style={{ color: C.primary, fontWeight: 600, textDecoration: "none", fontSize: 14 }}>✉️ services.crix@gmail.com</a>
          </div>

          {[
            { heading: "Internships", links: [["Web Development", "/internships"], ["Android Dev", "/internships"], ["AI / ML", "/internships"], ["Data Science", "/internships"], ["Cybersecurity", "/internships"]] },
            { heading: "Company", links: [["About Us", "/about"], ["Our Team", "/team"], ["Services", "/services"], ["Courses", "/courses"], ["Contact", "/contact"]] },
            { heading: "Quick Links", links: [["Apply for Internship", APPLY_LINK], ["Get a Quote", "/contact"], ["Privacy Policy", "/contact"], ["Terms of Service", "/contact"]] },
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
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>Built with ❤️ for India's next tech generation</p>
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
