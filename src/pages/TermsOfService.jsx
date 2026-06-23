import { C } from "../theme";
import RevealBox from "../components/RevealBox";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Crix Technology's website, internship programs, or courses, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.`,
  },
  {
    title: "2. Eligibility",
    content: `Our internship programs are open to:
• Students currently enrolled in a college or university
• Recent graduates (within 1 year of graduation)
• Individuals who are at least 16 years of age

By applying, you confirm that you meet the eligibility criteria.`,
  },
  {
    title: "3. Internship Program",
    content: `Crix Technology offers a free 15-day virtual internship program. By enrolling you agree to:
• Complete assigned tasks honestly and on time
• Submit original work — plagiarism will result in immediate disqualification
• Maintain professional conduct in all communications
• Not share confidential task materials with third parties

Certificates and Letters of Recommendation are issued only upon satisfactory completion of all assigned tasks.`,
  },
  {
    title: "4. Courses",
    content: `Course content provided by Crix Technology is for personal, non-commercial educational use only. You may not:
• Reproduce, redistribute, or resell any course material
• Share login credentials or access links with others
• Record or screen-capture video lectures without written permission`,
  },
  {
    title: "5. User Conduct",
    content: `When using our website or services, you agree not to:
• Provide false or misleading information during registration
• Engage in any activity that disrupts or interferes with our services
• Attempt to gain unauthorized access to our systems
• Use our platform for any unlawful or harmful purpose`,
  },
  {
    title: "6. Intellectual Property",
    content: `All content on this website — including text, graphics, logos, icons, and course material — is the property of Crix Technology and is protected by applicable intellectual property laws. You may not use, copy, or distribute any content without our prior written consent.`,
  },
  {
    title: "7. Certificates & Credentials",
    content: `Certificates issued by Crix Technology are based on task completion and are not equivalent to formal academic degrees or government-recognized certifications. Misrepresenting the nature of a Crix Technology certificate (e.g., claiming it is a government-issued credential) is strictly prohibited and may result in certificate revocation.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `Crix Technology provides its services "as is" without warranties of any kind. We are not liable for:
• Any indirect, incidental, or consequential damages arising from use of our services
• Loss of data or opportunities resulting from technical issues
• Actions taken by third-party platforms we integrate with (e.g., email providers)

Our total liability in any matter shall not exceed the amount you paid for our services (which is zero for the free 15-day internship program).`,
  },
  {
    title: "9. Termination",
    content: `We reserve the right to terminate or suspend access to our services at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use our services immediately ceases.`,
  },
  {
    title: "10. Changes to Terms",
    content: `We may revise these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the revised terms.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.`,
  },
  {
    title: "12. Contact Us",
    content: `For any questions regarding these Terms of Service, please contact us:\n\nEmail: crixtechnology@gmail.com\nPhone: 9723223588\nLocation: Ahmedabad, Gujarat, India`,
  },
];

export default function TermsOfService() {
  return (
    <div style={{ background: C.bg }}>

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #f0fdf4, #f0f9ff)`, padding: "5rem 2.5rem 4rem", textAlign: "center" }}>
        <RevealBox>
          <span style={{ display: "inline-block", background: C.greenLight, color: "#065f46", borderRadius: 50, padding: "4px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "1px", marginBottom: 18 }}>LEGAL</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: C.dark, margin: "0 0 1rem", letterSpacing: "-1.5px" }}>Terms of Service</h1>
          <p style={{ color: C.textSub, fontSize: 16, margin: 0 }}>Effective date: June 2026 · Last updated: June 2026</p>
        </RevealBox>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <RevealBox>
            <p style={{ color: C.textSub, fontSize: 16, lineHeight: 1.9, marginBottom: "3rem", padding: "1.5rem", background: C.greenLight, borderRadius: 12, borderLeft: `4px solid ${C.green}` }}>
              Please read these Terms of Service carefully before using Crix Technology's website or enrolling in any of our programs. These terms constitute a legally binding agreement between you and Crix Technology.
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
