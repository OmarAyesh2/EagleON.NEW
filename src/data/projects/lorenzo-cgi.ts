import { Project } from "../portfolio";

const project: Project = {
  // ── BASIC INFO ──────────────────────────────────
  id: "lorenzo-cgi",
  slug: "lorenzo-cgi-commercials",         // URL: /portfolio/your-project-slug
  year: "2025",
  featured: true,                     // Show on homepage?

  // ── TITLES & DESCRIPTIONS ──────────────────────
  title: {
    ar: "إعلانات CGI تجارية — لورينزو الرياض",
    en: "Lorenzo Riyadh CGI Commercials",
  },
  category: {
    ar: "رسوم ثلاثية الأبعاد (CGI)",
    en: "CGI & 3D Animation",
  },
  categorySlug: "cgi",                // Options: "web" | "branding" | "cgi" | "social" | "production"
  description: {
    ar: "إنتاج فيديوين إعلانيين بتقنية 3D CGI لصالح سلسلة لورينزو في الرياض، لإبراز تفاصيل وجودة وجباتهم بأسلوب إخراجي شهي وديناميكي يخطف الأنظار على منصات التواصل.",
    en: "Production of two high-end 3D CGI commercial videos for Lorenzo in Riyadh, delivering dynamic visual appetite appeal and driving massive engagement across social platforms.",
  },
  client: {
    ar: "لورينزو (الرياض)",
    en: "Lorenzo (Riyadh)",
  },
  duration: {
    ar: "أسبوع",
    en: "One Weeks",
  },

  // ── MEDIA ───────────────────────────────────────
  image: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036555/Lorenzo_um0xuj.png",       // Main cover image (case study hero)
  thumbnail: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034411/dfg-01_s9pojk.png",   // Card thumbnail (portfolio grid) — if not set, falls back to image
  gallery: [
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033301/CGI_1_dvfmi7.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033292/CGI_2_qkdqor.mp4",
    // Videos work too:
    // "https://res.cloudinary.com/your-cloud/video/upload/example.mp4",
  ],

  // ── TAGS & TOOLS ────────────────────────────────
  tags: ["CGI", "3D Animation", "Coffee House"],      // Shown on portfolio card
  tools: ["Blender 3D", "DaVinci Resolve"],          // Shown on case study page

  // ── DELIVERABLES ────────────────────────────────
  deliverables: [
    { ar: "نمذجة وتصميم كرتونة البيتزا ثلاثية الأبعاد", en: "3D Packaging & Box Modeling" },
    { ar: "إخراج وتحريك سينمائي للمنتج (CGI Animation)", en: "Cinematic CGI Product Animation" },
    { ar: "فيديو إعلاني تجاري (عدد ٢)", en: "2 Commercial Video Spots" },
    { ar: "مونتاج، إضاءة ومعالجة ألوان متقدمة", en: "Lighting, Compositing & Color Grading" },
  ],

  // ── CASE STUDY STORY ────────────────────────────
  challenge: {
    ar: "أرادت سلسلة لورينزو في الرياض إطلاق حملة بصرية مبتكرة تركز على تصميم علبة البيتزا الخاصة بهم وتبرز هوية البراند بطابع فخم ومميز، بعيداً عن أسلوب تصوير المنتجات النمطي، بهدف لفت الأنظار في سوق مطاعم شديد المنافسة وزيادة طلبات التوصيل.",
    en: "Lorenzo in Riyadh needed an innovative visual campaign centered around their custom pizza box design to showcase their brand identity with a premium aesthetic, standing out in a highly competitive market and boosting delivery orders.",
  },
  solution: {
    ar: "قمنا بعمل نمذجة ثلاثية الأبعاد دقيقة لعلبة البيتزا بكامل تفاصيل الخامات والملمس والطباعة، مع بناء إضاءة سينمائية وحركات كاميرا ديناميكية تُظهر العلبة كمنتج أيقوني فاخر، مما نتج عنه فيديوين إعلانيين بأعلى معايير الـ CGI جذبا تفاعلاً واسعاً.",
    en: "We crafted an accurate 3D model of the pizza packaging detailing realistic textures, folds, and brand print. Paired with cinematic lighting and dynamic camera work, we produced two high-impact CGI commercial spots that highlighted the packaging as an iconic brand asset.",
  },

  // ── RESULTS ─────────────────────────────────────
  results: [
    { metric: "+50%", label: { ar: "زيادة في طلبات الأونلاين والتوصيل", en: "Increase in Online Orders" } },
    { metric: "+140%", label: { ar: "نمو التفاعل والمشاركات على السوشال ميديا", en: "Social Media Engagement Growth" } },
    { metric: "+75%", label: { ar: "معدل استكمال مشاهدة الإعلان", en: "Video Completion Rate" } },
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
  href: "/portfolio/lorenzo-cgi-commercials",
};

export default project;
