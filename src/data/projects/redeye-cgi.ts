import { Project } from "../portfolio";

const project: Project = {
  // ── BASIC INFO ──────────────────────────────────
  id: "redeye-cgi",
  slug: "redeye-cgi-commercials",         // URL: /portfolio/your-project-slug
  year: "2024",
  featured: false,                     // Show on homepage?

  // ── TITLES & DESCRIPTIONS ──────────────────────
  title: {
    ar: "إعلانات CGI تجارية — Redeye",
    en: "Redeye CGI Commercials",
  },
  category: {
    ar: "رسوم ثلاثية الأبعاد (CGI)",
    en: "CGI & 3D Animation",
  },
  categorySlug: "cgi",                // Options: "web" | "branding" | "cgi" | "social" | "production"
  description: {
    ar: "إنتاج فيديوين إعلانيين بتقنية CGI ثلاثية الأبعاد لعلامة Redeye، مع التركيز على إبراز تفاصيل المنتج والإخراج البصري الإعلاني.",
    en: "Production of two high-impact 3D CGI commercial videos for Redeye, highlighting product detailing, dynamic lighting, and realistic simulation.",
  },
  client: {
    ar: "ريد أي",
    en: "RedEye",
  },
  duration: {
    ar: "أسبوع",
    en: "One Weeks",
  },

  // ── MEDIA ───────────────────────────────────────
  image: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036551/Redeye_mfzebs.png",       // Main cover image (case study hero)
  thumbnail: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-05_xmmyms.png",   // Card thumbnail (portfolio grid) — if not set, falls back to image
  gallery: [
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1742323487/8_vk6qrm.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1740245943/redeye_1_lsfhyo.mp4",
    // Videos work too:
    // "https://res.cloudinary.com/your-cloud/video/upload/example.mp4",
  ],

  // ── TAGS & TOOLS ────────────────────────────────
  tags: ["CGI", "3D Animation", "Coffee House"],      // Shown on portfolio card
  tools: ["Blender 3D", "DaVinci Resolve"],          // Shown on case study page

  // ── DELIVERABLES ────────────────────────────────
  deliverables: [
    { ar: "نمذجة ثلاثية الأبعاد للمنتج", en: "3D Product Modeling" },
    { ar: "إخراج وتحريك CGI", en: "CGI Direction & Animation" },
    { ar: "فيديو إعلاني تجاري (عدد ٢)", en: "2 Commercial Video Spots" },
    { ar: "معالجة بصرية ومونتاج ألوان", en: "Compositing & Color Grading" },
  ],

  // ── CASE STUDY STORY ────────────────────────────
  challenge: {
    ar: "احتاجت العلامة التجارية Redeye إلى طريقة مبتكرة وجذابة بصرياً لعرض تفاصيل منتجها بعيداً عن أساليب التصوير التقليدي المحدودة، مع خلق طابع بصري جريء يعكس هوية المنتج ويرفع التفاعل على منصات التواصل الاجتماعي.",
    en: "Redeye needed an eye-catching, visually striking way to showcase their product beyond the limitations of traditional live-action shoots, aiming for a bold visual identity that boosts engagement across digital platforms.",
  },
  solution: {
    ar: "قمنا ببناء نموذج ثلاثي الأبعاد عالي الدقة للمنتج، وتصميم إضاءة ديناميكية وتأثيرات بصرية متقدمة داخل بيئة ثلاثية الأبعاد كاملة، مما أتاح إنتاج فيديوين إعلانيين بدقة بصرية فائقة ومونتاج يعزز هوية العلامة التجارية.",
    en: "We developed a photorealistic 3D product model, designed dynamic studio lighting, and produced complete CGI environments. This delivered two high-energy commercial spots with premium color grading and seamless visual direction.",
  },

  // ── RESULTS ─────────────────────────────────────
  results: [
    { metric: "2", label: { ar: "إعلانات CGI تجارية", en: "CGI Commercial Spots" } },
    { metric: "+120%", label: { ar: "نمو التفاعل والمشاركات", en: "Engagement & Shares Growth" } },
    { metric: "+70%", label: { ar: "معدل المشاهدة الكاملة للفيديو", en: "Video Completion Rate" } },
  ],

  // ── TESTIMONIAL (optional) ──────────────────────
  // testimonial: {
  //   quote: { ar: "شهادة العميل بالعربي", en: "Client testimonial in English" },
  //  author: "Client Name",
  // role: { ar: "المنصب", en: "Job Title" },
  //},

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
  href: "/portfolio/redeye-cgi-commercials",
};

export default project;
