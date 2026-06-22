import { C } from "./theme";

export const INTERNSHIP_DOMAINS = [
  { icon: "globe", title: "Web Development", tech: "HTML · CSS · JavaScript · React", duration: "1 / 3 Month", seats: "Open", color: C.primary },
  { icon: "smartphone", title: "Android Development", tech: "Java · Kotlin · React Native", duration: "1 / 3 Month", seats: "Open", color: "#06b6d4" },
];

export const SERVICES = [
  { icon: "monitor", title: "Web Development", desc: "Modern, responsive & SEO-friendly websites that grow your business online.", color: C.primary },
  { icon: "smartphone", title: "App Development", desc: "Custom Android & iOS apps with seamless user experiences.", color: C.accent },
  { icon: "cpu", title: "AI Solutions", desc: "Smart automation and AI integrations to accelerate your operations.", color: "#0891b2" },
  { icon: "megaphone", title: "Digital Marketing", desc: "SEO, social media & paid campaigns that bring real, measurable results.", color: C.yellow },
  { icon: "graduation-cap", title: "Training & Courses", desc: "Industry-oriented courses designed by working professionals.", color: C.green },
  { icon: "briefcase", title: "IT Consulting", desc: "Strategic technology guidance tailored to your business goals.", color: C.red },
];

export const COURSES = [
  { title: "Full Stack Web Development", lessons: 48, duration: "3 months", level: "Beginner → Pro", badge: "Bestseller", badgeColor: C.yellow },
  { title: "Android App", lessons: 40, duration: "2 months", level: "Beginner → Pro", badge: null, badgeColor: null },
];

export const STATS = [
  { num: "15,000+", label: "Interns Trained" },
  { num: "500+", label: "Projects Delivered" },
  { num: "50+", label: "Courses Available" },
  { num: "98%", label: "Satisfaction Rate" },
];

export const TESTIMONIALS = [
  { name: "Rahul Sharma", college: "GTU, Ahmedabad", domain: "Web Development", text: "Crix Technology gave me real project experience that no classroom could. The certificate helped me land my first job!", avatar: "RS", color: C.primary },
  { name: "Priya Mehta", college: "PDPU, Gandhinagar", domain: "AI/ML Intern", text: "The task-based learning was incredible. I built 3 production-level projects in just one month!", avatar: "PM", color: C.accent },
  { name: "Arjun Patel", college: "SVIT, Vasad", domain: "Android Dev", text: "Supportive mentors, clear tasks, and a certificate recognized by top recruiters. Highly recommended!", avatar: "AP", color: C.green },
  { name: "Sneha Joshi", college: "CHARUSAT", domain: "Data Science", text: "I went from zero Python knowledge to building ML models. The curriculum is perfectly structured.", avatar: "SJ", color: C.yellow },
];

export const TEAM = [
  { name: "Raj Patel", role: "Founder & CEO", avatar: "RP", color: C.primary },
  { name: "Nisha Shah", role: "Head of Internships", avatar: "NS", color: C.accent },
  { name: "Dev Mehta", role: "Lead Instructor", avatar: "DM", color: C.green },
  { name: "Pooja Joshi", role: "Marketing Lead", avatar: "PJ", color: C.yellow },
  { name: "Kiran Dave", role: "Tech Lead", avatar: "KD", color: "#06b6d4" },
  { name: "Anil Rao", role: "Student Success", avatar: "AR", color: C.red },
];

export const STEPS = [
  { n: "01", title: "Choose Your Domain", desc: "Pick from Web Dev, Android, AI/ML, Data Science, Cybersecurity, or Cloud Computing." },
  { n: "02", title: "Register for Free", desc: "Fill in your details — no interview, no fees. Selection is open to all eligible students." },
  { n: "03", title: "Complete Tasks", desc: "Receive project tasks via email. Build real applications with mentor guidance." },
  { n: "04", title: "Get Certified", desc: "Submit your work and receive a verified digital certificate + Letter of Recommendation." },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Internships", path: "/internships" },
  { label: "Services", path: "/services" },
  { label: "Courses", path: "/courses" },
  { label: "Contact", path: "/contact" },
];
