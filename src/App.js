import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Internships from "./pages/Internships";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Payment from "./pages/Payment";
import { C } from "./theme";

function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: C.bg, textAlign: "center", padding: "4rem" }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔍</div>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 900, color: C.dark, margin: "0 0 12px" }}>404 — Page Not Found</h1>
      <p style={{ color: C.textSub, fontSize: 16, marginBottom: 28 }}>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.accent})`, color: "#fff", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>Go Home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
