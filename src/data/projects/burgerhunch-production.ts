import { Project } from "../portfolio";

const project: Project = {
  // ── BASIC INFO ──────────────────────────────────
  id: "burgerhunch-production",
  slug: "burger-hunch-reels-production",         // URL: /portfolio/your-project-slug
  year: "2025",
  featured: true,                     // Show on homepage?

  // ── TITLES & DESCRIPTIONS ──────────────────────
  title: {
    ar: "إنتاج ومونتاج ريلز — برجر هنش (الرياض)",
    en: "Reels Production & Editing — Burger Hunch",
  },
  category: {
    ar: "إنتاج فيديو ومونتاج (Production)",
    en: "Video Production & Editing",
  },
  categorySlug: "production",                // Options: "web" | "branding" | "cgi" | "social" | "production"
  description: {
    ar: "إنتاج ومونتاج سلسلة فيديوهات ريلز ترويجية لبراند برجر هنش في الرياض، تركز على هوية الشواء على الحطب وتصاعد الدخان وصوت تفاصيل القرمشة والتغميس، بإيقاع سريع وتلوين سينمائي يرفع تفاعل السوشال ميديا والمبيعات.",
    en: "Video editing and post-production for promotional Reels for Burger Hunch in Riyadh, highlighting their signature wood-fired grilling, smoky texture, and crispy bites through fast cuts, kinetic pacing, and cinematic food grading.",
  },
  client: {
    ar: "برجر هنش (الرياض)",
    en: "Burger Hunch (Riyadh)",
  },
  duration: {
    ar: "أسبوعان",
    en: "Two Weeks",
  },

  // ── MEDIA ───────────────────────────────────────
  image: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034411/dfg-04_gbq5ax.png",       // Main cover image (case study hero)
  thumbnail: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034411/dfg-04_gbq5ax.png",   // Card thumbnail (portfolio grid) — if not set, falls back to image
  gallery: [
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790078835/IMG_1087_pd3flv.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790078843/IMG_1088_xwaghb.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790078843/IMG_1280_mqmrt2.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790078855/IMG_1267_eemaqo.mp4"
    // Videos work too:
    // "https://res.cloudinary.com/your-cloud/video/upload/example.mp4",
  ],

  // ── TAGS & TOOLS ────────────────────────────────
  tags: ["Video Editing", "Reels", "Food Production", "Color Grading"],      // Shown on portfolio card
  tools: ["DaVinci Resolve", "Adobe Premiere Pro"],                      // Shown on case study page

  // ── DELIVERABLES ────────────────────────────────
  deliverables: [
    { ar: "مونتاج ريلز وإعلانات فيديو سريعة (Fast-paced Reels)", en: "High-Paced Reels & Short Ads" },
    { ar: "تلوين سينمائي يبرز نضارة وشواء اللحم (Color Grading)", en: "Appetizing Food Color Grading" },
    { ar: "تصميم صوتي لتفاصيل الشوي والقرمشة (Food ASMR & SFX)", en: "Sizzle & Grill Sound Design (SFX)" },
    { ar: "خطافات بصرية وعناوين نصية ترويجية (Hook & CTA)", en: "Visual Hooks & Promotional Typography" },
  ],

  // ── CASE STUDY STORY ────────────────────────────
  challenge: {
    ar: "يشهد سوق مطاعم البرجر في الرياض منافسة شرسة ومحتوى بصري متكرر، وكان التحدي نقل النكهة الفريدة لشواء الحطب والتدخين عبر شاشة الهاتف في أول ثانيتين، مع تفادي أسلوب المونتاج البطيء الذي يؤدي لتخطي الفيديو سريعاً.",
    en: "The Riyadh burger scene is intensely competitive with oversaturated visual content. The challenge was translating the unique aroma and texture of wood-fired grilling through mobile screens within the first two seconds, eliminating slow pacing to prevent viewer drop-off.",
  },
  solution: {
    ar: "صممنا إيقاع مونتاج سريع وديناميكي يركز على تفاصيل الشوي وتصاعد الدخان (Sizzle & Smoke) مع هندسة صوتية واقعية (ASMR) لأصوات القرمشة والصلصات، بالإضافة إلى تلوين سينمائي يُبرز لمعة الخبز وتكرمل اللحم لجعل المحتوى قابلاً للمشاركة وزيادة الرغبة في الطلب المباشر.",
    en: "We engineered a high-velocity editing rhythm focusing on smoke and flame contact, paired with tactile ASMR sound design for crunches and sauce dips. Warm cinematic grading brought out the juicy textures and charred caramelization, creating a viral and craving-inducing viewing experience.",
  },

  // ── RESULTS ─────────────────────────────────────
  results: [
    { metric: "+85%", label: { ar: "معدل استكمال المشاهدة (Watch Time)", en: "Video Completion Rate" } },
    { metric: "+190%", label: { ar: "نمو المشاركات والحفظ على إنستغرام وتيك توك", en: "Shares & Saves Increase" } },
    { metric: "+45%", label: { ar: "زيادة في طلبات التوصيل وزيارات الفروع", en: "Delivery Orders & Foot Traffic" } },
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
  platforms: ["Instagram", "Facebook", "TikTok", "SnapChat"],

  // ── AUTO-GENERATED (don't change) ───────────────
  href: "/portfolio/burger-hunch-reels-production",
};

export default project;
