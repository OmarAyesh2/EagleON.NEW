import { Project } from "../portfolio";

const project: Project = {
  // ── BASIC INFO ──────────────────────────────────
  id: "project-X",
  slug: "your-project-slug",         // URL: /portfolio/your-project-slug
  year: "2026",
  featured: true,                     // Show on homepage?

  // ── TITLES & DESCRIPTIONS ──────────────────────
  title: {
    ar: "العنوان بالعربي",
    en: "English Title",
  },
  category: {
    ar: "الفئة",
    en: "Category",
  },
  categorySlug: "web",                // Options: "web" | "branding" | "cgi" | "social" | "production"
  description: {
    ar: "وصف قصير بالعربي",
    en: "Short English description",
  },
  client: {
    ar: "اسم العميل",
    en: "Client Name",
  },
  duration: {
    ar: "4 أسابيع",
    en: "4 Weeks",
  },

  // ── MEDIA ───────────────────────────────────────
  image: "/images/portfolio/your-project/cover.jpg",       // Main cover image (case study hero)
  thumbnail: "/images/portfolio/your-project/thumb.jpg",   // Card thumbnail (portfolio grid) — if not set, falls back to image
  gallery: [
    "/images/portfolio/your-project/1.jpg",
    "/images/portfolio/your-project/2.jpg",
    // Videos work too:
    // "https://res.cloudinary.com/your-cloud/video/upload/example.mp4",
  ],

  // ── TAGS & TOOLS ────────────────────────────────
  tags: ["Next.js", "Tailwind"],      // Shown on portfolio card
  tools: ["Figma", "React"],          // Shown on case study page

  // ── DELIVERABLES ────────────────────────────────
  deliverables: [
    { ar: "تصميم الواجهة", en: "UI Design" },
    { ar: "تطوير الموقع", en: "Development" },
  ],

  // ── CASE STUDY STORY ────────────────────────────
  challenge: {
    ar: "ما المشكلة التي واجهها العميل؟",
    en: "What problem did the client face?",
  },
  solution: {
    ar: "كيف حللنا المشكلة؟",
    en: "How did we solve it?",
  },

  // ── RESULTS ─────────────────────────────────────
  results: [
    { metric: "+40%", label: { ar: "معدل التحويل", en: "Conversion Rate" } },
    { metric: "0.8s", label: { ar: "سرعة التحميل", en: "Load Time" } },
  ],

  // ── TESTIMONIAL (optional) ──────────────────────
  testimonial: {
    quote: { ar: "شهادة العميل بالعربي", en: "Client testimonial in English" },
    author: "Client Name",
    role: { ar: "المنصب", en: "Job Title" },
  },

  // ── CATEGORY-SPECIFIC (use only what applies) ───
  // For "web":
  // liveUrl: "https://example.com",

  // For "branding":
  // colors: ["#1E232A", "#D4AF37", "#F8F5F0"],
  // typography: [
  //   { ar: "الخط العربي", en: "English Font" },
  // ],

  // For "cgi" or "production":
  // videoUrl: "https://res.cloudinary.com/.../video.mp4",

  // For "social":
  // platforms: ["Instagram", "TikTok"],

  // ── AUTO-GENERATED (don't change) ───────────────
  href: "/portfolio/your-project-slug",
};

export default project;
