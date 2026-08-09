// ─── Crix Technology — company & billing reference data ───────────────────────
// Sourced from: Company Profile, Board Resolution letterhead, and the
// Service Price Menu (INR & USD) documents.

export const COMPANY = {
  legalName: "Crix Technology Private Limited",
  shortName: "CRIX TECHNOLOGY",
  cin: "U63122GJ2026PTC179737",
  addressLines: [
    "G-403, Jalaram Vatika, Nr. Sadguru Bunglows,",
    "New Maninagar, Ramol, Daskroi, Ahmedabad – 382449, Gujarat, India",
  ],
  email: "support@crixtechnology.com",
  altEmail: "crixtechnology@gmail.com",
  phone: "+91 97232 23588",
  website: "www.crixtechnology.in",
  directors: [
    { name: "Shanlin Dudhiya", din: "11792107" },
    { name: "Saurbh Ladva", din: "11792108" },
  ],
  logo: "/crix-logo.png",
  qr: "/payment-qr.jpg",
};

// Brand palette pulled from the letterhead documents (navy header + teal rule).
export const BRAND = {
  navy: "#0f1f3d",
  navyDark: "#0a1730",
  teal: "#0f9488",
  tealLight: "#e6f6f4",
  text: "#1e293b",
  muted: "#64748b",
  border: "#e2e8f0",
  rowAlt: "#f4f7fb",
};

// Service catalog — three tiers per service, priced in INR and USD, taken
// verbatim from the two Service Price Menu PDFs.
export const CATALOG = {
  INR: {
    symbol: "₹",
    services: [
      { name: "Static Website", tiers: [
        { tier: "Basic", price: 7999 }, { tier: "Standard", price: 14999 }, { tier: "Pro", price: 24999 },
      ] },
      { name: "Dynamic Website", tiers: [
        { tier: "Basic", price: 39999 }, { tier: "Standard", price: 79999 }, { tier: "Pro", price: 149999 },
      ] },
      { name: "Website Upgrade & Redesign", tiers: [
        { tier: "Basic", price: 11999 }, { tier: "Standard", price: 29999 }, { tier: "Pro", price: 64999 },
      ] },
      { name: "Mobile App Development", tiers: [
        { tier: "Basic", price: 149999 }, { tier: "Standard", price: 299999 }, { tier: "Pro", price: 599999 },
      ] },
      { name: "Digital Marketing (Monthly)", tiers: [
        { tier: "Basic", price: 7999 }, { tier: "Standard", price: 19999 }, { tier: "Pro", price: 39999 },
      ] },
      { name: "AI / ML Solutions", tiers: [
        { tier: "Basic", price: 99999 },
      ] },
    ],
    addons: [
      { name: "Extra revision round", price: 7499 },
      { name: "Rush delivery", price: 14999 },
      { name: "Hosting / deployment setup", price: 7999 },
      { name: "Post-launch support (monthly)", price: 9999 },
    ],
    defaultTaxLabel: "GST (18%)",
    defaultTaxPercent: 18,
  },
  USD: {
    symbol: "$",
    services: [
      { name: "Static Website", tiers: [
        { tier: "Basic", price: 129 }, { tier: "Standard", price: 289 }, { tier: "Pro", price: 629 },
      ] },
      { name: "Dynamic Website", tiers: [
        { tier: "Basic", price: 989 }, { tier: "Standard", price: 1499 }, { tier: "Pro", price: 8099 },
      ] },
      { name: "Website Upgrade & Redesign", tiers: [
        { tier: "Basic", price: 1599 }, { tier: "Standard", price: 3999 }, { tier: "Pro", price: 8599 },
      ] },
      { name: "Mobile App Development", tiers: [
        { tier: "Basic", price: 17999 }, { tier: "Standard", price: 57999 }, { tier: "Pro", price: 314999 },
      ] },
      { name: "AI / ML Solutions", tiers: [
        { tier: "Basic", price: 6599 },
      ] },
    ],
    addons: [
      { name: "Extra revision round", price: 149 },
      { name: "Rush delivery", price: 299 },
      { name: "Hosting / deployment setup", price: 199 },
      { name: "Post-launch support (monthly)", price: 299 },
    ],
    defaultTaxLabel: "Tax",
    defaultTaxPercent: 0,
  },
};

export const PAYMENT_MODES = ["UPI", "Bank Transfer", "Credit / Debit Card", "Cash", "Cheque", "PayPal"];
