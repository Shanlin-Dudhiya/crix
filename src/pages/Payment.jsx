import { C, shadow } from "../theme";

const WA_NUMBERS = [
  { number: "918141810384", display: "+91 81418 10384" },
  { number: "919824779516", display: "+91 98247 79516" },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill={C.green} opacity="0.15" />
      <path d="M7 12.5l3.5 3.5 6-7" stroke={C.green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS = [
  "Scan the QR code using any UPI app (PhonePe, GPay, Paytm, etc.)",
  "Complete the payment and take a screenshot",
  "Click the WhatsApp button below to send your screenshot",
  "We'll confirm your enrollment within a few hours",
];

export default function Payment() {
  const waMessage = encodeURIComponent(
    "Hi! I have completed the payment for Crix Technology. Please find my payment screenshot attached."
  );

  return (
    <div style={{ background: C.bg, minHeight: "100vh", padding: "60px 16px 80px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{
          display: "inline-block", background: C.primaryLight, color: C.primary,
          borderRadius: 20, padding: "6px 18px", fontSize: 13, fontWeight: 700,
          letterSpacing: 0.5, marginBottom: 16, textTransform: "uppercase",
        }}>
          Secure Payment
        </span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: C.dark, margin: "0 0 12px" }}>
          Complete Your Payment
        </h1>
        <p style={{ color: C.textSub, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          Scan the QR code below using any UPI app and send us the screenshot on WhatsApp to confirm your enrollment.
        </p>
      </div>

      <div style={{
        maxWidth: 960, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 32, alignItems: "start",
      }}>
        {/* QR Card */}
        <div style={{
          background: C.bg2, borderRadius: 20, boxShadow: shadow.lg,
          padding: "40px 32px", textAlign: "center",
          border: `1px solid ${C.border}`,
        }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: C.dark, margin: "0 0 8px" }}>
            Scan &amp; Pay via UPI
          </h2>
          <p style={{ color: C.textSub, fontSize: 14, margin: "0 0 28px" }}>
            Works with PhonePe · GPay · Paytm · BHIM &amp; all UPI apps
          </p>

          {/* QR Image */}
          <div style={{
            display: "inline-block", padding: 12, background: "#fff",
            borderRadius: 16, boxShadow: shadow.md,
            border: `2px solid ${C.border}`, marginBottom: 24,
          }}>
            <img
              src="/payment-qr.jpg"
              alt="UPI Payment QR Code"
              style={{ width: 220, height: 220, display: "block", borderRadius: 8 }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback if image missing */}
            <div style={{
              display: "none", width: 220, height: 220, borderRadius: 8,
              background: C.bg, alignItems: "center", justifyContent: "center",
              flexDirection: "column", color: C.muted, fontSize: 13,
            }}>
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" style={{ marginBottom: 8 }}>
                <rect x="3" y="3" width="8" height="8" rx="1" stroke={C.muted} strokeWidth="1.5" />
                <rect x="13" y="3" width="8" height="8" rx="1" stroke={C.muted} strokeWidth="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1" stroke={C.muted} strokeWidth="1.5" />
                <rect x="13" y="13" width="8" height="8" rx="1" stroke={C.muted} strokeWidth="1.5" />
              </svg>
              QR Code
            </div>
          </div>

          {/* UPI badges */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {["PhonePe", "GPay", "Paytm", "BHIM"].map((app) => (
              <span key={app} style={{
                background: C.bg, border: `1px solid ${C.border}`,
                borderRadius: 20, padding: "4px 12px", fontSize: 12,
                color: C.textSub, fontWeight: 600,
              }}>{app}</span>
            ))}
          </div>

          <div style={{
            background: C.primaryLight, borderRadius: 12, padding: "12px 16px",
            color: C.primary, fontSize: 13, fontWeight: 600,
          }}>
            After payment, send your screenshot on WhatsApp ↓
          </div>
        </div>

        {/* Steps + WhatsApp Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Steps */}
          <div style={{
            background: C.bg2, borderRadius: 20, boxShadow: shadow.md,
            padding: "32px 28px", border: `1px solid ${C.border}`,
          }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: C.dark, margin: "0 0 20px" }}>
              How to Pay
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    minWidth: 28, height: 28, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`,
                    color: "#fff", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ color: C.text, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div style={{
            background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            borderRadius: 20, boxShadow: shadow.lg, padding: "32px 28px",
            textAlign: "center", color: "#fff",
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ display: "block", margin: "0 auto 12px" }}>
                <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.15)" />
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M24 10C16.268 10 10 16.268 10 24c0 2.49.666 4.825 1.828 6.838L10 38l7.394-1.8A13.94 13.94 0 0024 38c7.732 0 14-6.268 14-14S31.732 10 24 10zm0 25.6a11.56 11.56 0 01-5.89-1.606l-.422-.251-4.388 1.068 1.1-4.276-.277-.44A11.6 11.6 0 0112.4 24c0-6.4 5.2-11.6 11.6-11.6S35.6 17.6 35.6 24 30.4 35.6 24 35.6zm6.36-8.68c-.348-.175-2.062-1.017-2.382-1.133-.32-.116-.554-.175-.787.175-.233.349-.902 1.133-1.105 1.367-.203.233-.406.262-.754.087-.349-.175-1.473-.543-2.806-1.73-1.037-.924-1.737-2.065-1.94-2.413-.203-.35-.022-.538.153-.713.157-.157.349-.407.523-.612.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.087-.174-.787-1.895-1.078-2.594-.284-.682-.573-.59-.787-.6l-.67-.012c-.233 0-.612.087-.932.437-.32.349-1.222 1.194-1.222 2.913s1.251 3.38 1.426 3.614c.174.233 2.463 3.762 5.966 5.277.834.36 1.485.574 1.993.735.837.266 1.6.228 2.202.138.672-.1 2.062-.843 2.352-1.658.29-.814.29-1.512.204-1.658-.087-.145-.32-.233-.67-.408z"
                  fill="#fff" />
              </svg>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 8px" }}>
              Send Payment Screenshot
            </h3>
            <p style={{ fontSize: 14, opacity: 0.9, margin: "0 0 24px", lineHeight: 1.5 }}>
              After paying, tap a button below to open WhatsApp and send your payment screenshot to confirm your enrollment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
              {WA_NUMBERS.map(({ number, display }) => (
                <a
                  key={number}
                  href={`https://wa.me/${number}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#fff", color: "#128c7e",
                    borderRadius: 12, padding: "14px 28px",
                    fontWeight: 800, fontSize: 16, textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    width: "100%", maxWidth: 320, justifyContent: "center",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}
                >
                  <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M24 10C16.268 10 10 16.268 10 24c0 2.49.666 4.825 1.828 6.838L10 38l7.394-1.8A13.94 13.94 0 0024 38c7.732 0 14-6.268 14-14S31.732 10 24 10zm0 25.6a11.56 11.56 0 01-5.89-1.606l-.422-.251-4.388 1.068 1.1-4.276-.277-.44A11.6 11.6 0 0112.4 24c0-6.4 5.2-11.6 11.6-11.6S35.6 17.6 35.6 24 30.4 35.6 24 35.6zm6.36-8.68c-.348-.175-2.062-1.017-2.382-1.133-.32-.116-.554-.175-.787.175-.233.349-.902 1.133-1.105 1.367-.203.233-.406.262-.754.087-.349-.175-1.473-.543-2.806-1.73-1.037-.924-1.737-2.065-1.94-2.413-.203-.35-.022-.538.153-.713.157-.157.349-.407.523-.612.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.087-.174-.787-1.895-1.078-2.594-.284-.682-.573-.59-.787-.6l-.67-.012c-.233 0-.612.087-.932.437-.32.349-1.222 1.194-1.222 2.913s1.251 3.38 1.426 3.614c.174.233 2.463 3.762 5.966 5.277.834.36 1.485.574 1.993.735.837.266 1.6.228 2.202.138.672-.1 2.062-.843 2.352-1.658.29-.814.29-1.512.204-1.658-.087-.145-.32-.233-.67-.408z"
                      fill="#128c7e" />
                  </svg>
                  Send on WhatsApp · {display}
                </a>
              ))}
            </div>
          </div>

          {/* Assurance */}
          <div style={{
            background: C.bg2, borderRadius: 16, boxShadow: shadow.sm,
            padding: "20px 24px", border: `1px solid ${C.border}`,
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            {[
              "100% Secure UPI Payment",
              "Enrollment confirmed within a few hours",
              "Direct support via WhatsApp",
            ].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CheckIcon />
                <span style={{ color: C.text, fontSize: 14, fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
