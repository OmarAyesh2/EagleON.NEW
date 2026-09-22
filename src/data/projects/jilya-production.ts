import { Project } from "../portfolio";

const project: Project = {
  // ── BASIC INFO ──────────────────────────────────
  id: "jilya-production",
  slug: "jilya-reels-production",         // URL: /portfolio/your-project-slug
  year: "2025",
  featured: false,                     // Show on homepage?

  // ── TITLES & DESCRIPTIONS ──────────────────────
  title: {
    ar: "إنتاج ومونتاج ريلز — مطعم جيليا (الرياض)",
    en: "Reels Production & Editing — Jilya Restaurant",
  },
  category: {
    ar: "إنتاج فيديو ومونتاج (Production)",
    en: "Video Production & Editing",
  },
  categorySlug: "production",                // Options: "web" | "branding" | "cgi" | "social" | "production"
  description: {
    ar: "مونتاج ومعالجة بصرية لسلسلة فيديوهات ريلز قصيرة لمطعم جيليا في الرياض، تركز على إبراز تفاصيل تحضير الأطباق التراثية برتم سريع وتلوين سينمائي يرفع تفاعل ومشاركات الإنستغرام وتيك توك.",
    en: "Video editing and post-production for a series of promotional short-form Reels for Jilya Restaurant in Riyadh, designed with dynamic pacing, sound design, and appetizing color grading to maximize viral reach.",
  },
  client: {
    ar: "مطعم جيليا (الرياض)",
    en: "Jilya Restaurant (Riyadh)",
  },
  duration: {
    ar: "أسبوعان",
    en: "Two Weeks",
  },

  // ── MEDIA ───────────────────────────────────────
  image: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-03_dqk1cf.png",       // Main cover image (case study hero)
  thumbnail: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-03_dqk1cf.png",   // Card thumbnail (portfolio grid) — if not set, falls back to image
  gallery: [
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790077836/%D8%AC%D9%84%D9%8A%D8%A7_1_emoatr.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790077835/%D8%AC%D9%84%D9%8A%D8%A7_5_syutbd.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790077831/%D8%AC%D9%84%D9%8A%D8%A7_4_pjkppv.mp4",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1790077823/%D8%AC%D9%84%D9%8A%D8%A7_3_sswjeu.mp4"
    // Videos work too:
    // "https://res.cloudinary.com/your-cloud/video/upload/example.mp4",
  ],

  // ── TAGS & TOOLS ────────────────────────────────
  tags: ["Video Editing", "Reels", "Food Production", "Color Grading"],      // Shown on portfolio card
  tools: ["DaVinci Resolve", "Adobe Premiere Pro"],                      // Shown on case study page

  // ── DELIVERABLES ────────────────────────────────
  deliverables: [
    { ar: "مونتاج ريلز وإعلانات فيديو قصيرة (Reels / TikTok)", en: "Short-Form Reels & TikTok Editing" },
    { ar: "تلوين وتصحيح ألوان سينمائي للأطعمة (Color Grading)", en: "Food Cinematography & Color Grading" },
    { ar: "تصميم وهندسة مؤثرات صوتية (Sound Design & SFX)", en: "Sound Design & Audio Mixing" },
    { ar: "إضافة نصوص متحركة وخطافات بصرية (Motion Hooks)", en: "Motion Graphics & Visual Hooks" },
  ],

  // ── CASE STUDY STORY ────────────────────────────
  challenge: {
    ar: "تعتمد خوارزميات ريلز وتيك توك في قطاع المطاعم بالرياض على شد انتباه المشاهد في أول ثانيتين، وكان التحدي تحويل لقطات تحضير المأكولات التراثية إلى محتوى ديناميكي سريع يمنع التخطي (Scroll-stopping) ويبرز تفاصيل الأكل وقرمشته بأسلوب يثير الشهية فوراً.",
    en: "Short-form video algorithms in Riyadh demand immediate attention within the first two seconds. The challenge was turning traditional food prep footage into fast-paced, scroll-stopping Reels with high appetite appeal, avoiding monotonous pacing.",
  },
  solution: {
    ar: "اعتمدنا أسلوب تقطيع حركي سريع مع مؤثرات صوتية دقيقة ومسموعة لتفاصيل الأكل (ASMR & Sound Design)، وتصحيح ألوان ركز على تشبع ودفء المكونات الطازجة، مع إضافة خطافات بصرية ونصوص حركية تشجع المشاهد على استكمال الفيديو ومشاركته.",
    en: "We applied rapid-cut editing paired with tactile food sound design (ASMR), warm color grading to emphasize fresh ingredient textures, and kinetic text hooks that maximized video completion and shareability across Instagram and TikTok.",
  },

  // ── RESULTS ─────────────────────────────────────
  results: [
    { metric: "+80%", label: { ar: "معدل استكمال المشاهدة (Watch Completion)", en: "Video Completion Rate" } },
    { metric: "+250%", label: { ar: "نمو المشاهدات والوصول الطبيعي (Organic Views)", en: "Organic Views & Reach Growth" } },
    { metric: "+120%", label: { ar: "زيادة الحفظ والمشاركات (Shares & Saves)", en: "Shares & Saves Increase" } },
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
  href: "/portfolio/jilya-reels-production",
};

export default project;
