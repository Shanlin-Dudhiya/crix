import { C } from "../theme";
import RevealBox from "../components/RevealBox";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `When you apply for an internship, enroll in a course, or contact us, we collect:
• Full name, email address, phone number
• College/university name and year of study
• Internship domain preference
• Any messages or project submissions you send us

We do not collect payment information for internship registrations as the 15-day internship program is free.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information you provide to:
• Process your internship or course application
• Send you tasks, updates, and certificates via email
• Respond to your queries and support requests
• Improve our programs and website experience
• Send relevant announcements about new batches or courses (you may opt out anytime)`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share information only in these limited circumstances:
• With service providers who assist in operating our website (e.g., email delivery services)
• If required by law or to protect the rights and safety of Crix Technology or its users
• With your explicit consent`,
  },
  {
    title: "4. Data Storage & Security",
    content: `Your data is stored securely and we take reasonable technical and organizational measures to protect it from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure. We retain your data only as long as necessary to fulfill the purposes described in this policy.`,
  },
  {
    title: "5. Cookies",
    content: `Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect some features of the website.`,
  },
  {
    title: "6. Your Rights",
    content: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your data (subject to legal obligations)
• Withdraw consent for communications at any time

To exercise any of these rights, contact us at crixtechnology@gmail.com.`,
  },
  {
    title: "7. Children's Privacy",
    content: `Our services are intended for students who are 16 years of age or older. We do not knowingly collect personal information from children under 16. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy, please reach out to us:\n\nEmail: crixtechnology@gmail.com\nPhone: 9723223588\nLocation: Ahmedabad, Gujarat, India`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #f0f9ff, #ede9fe)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.primaryLight, color: C.primaryDark, borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>LEGAL</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>Privacy Policy</h1>
          <p style={{ color: C.textSub, fontSize: 16, margin: 0 }}>Effective date: June 2026 · Last updated: June 2026</p>
        </RevealBox>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <RevealBox>
            <p style={{ color: C.textSub, fontSize: 16, lineHeight: 1.9, marginBottom: "3rem", padding: "1.5rem", background: C.primaryLight, borderRadius: 12, borderLeft: `4px solid ${C.primary}` }}>
              At Crix Technology, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website, internship programs, and courses.
            </p>
          </RevealBox>

          {SECTIONS.map(({ title, content }, i) => (
            <RevealBox key={title} delay={i * 0.04}>
              <div style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: C.dark, margin: "0 0 0.75rem", letterSpacing: "-0.3px" }}>{title}</h2>
                <p style={{ color: C.textSub, fontSize: 15, lineHeight: 1.9, margin: 0, whiteSpace: "pre-line" }}>{content}</p>
              </div>
              {i < SECTIONS.length - 1 && <hr style={{ border: "none", borderTop: `1px solid ${C.border}`, marginBottom: "2.5rem" }} />}
            </RevealBox>
          ))}
        </div>
      </section>

    </div>
  );
}
