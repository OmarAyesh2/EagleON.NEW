import { Project } from "../portfolio";

const project: Project = {
  // ── BASIC INFO ──────────────────────────────────
  id: "redeye-social",
  slug: "redeye-social-media",         // URL: /portfolio/your-project-slug
  year: "2024",
  featured: true,                     // Show on homepage?

  // ── TITLES & DESCRIPTIONS ──────────────────────
  title: {
    ar: "تصاميم سوشال ميديا — Redeye",
    en: "Redeye Social Media Campaign",
  },
  category: {
    ar: "سوشال ميديا وتصميم إعلاني",
    en: "Social Media & Advertising",
  },
  categorySlug: "social",                // Options: "web" | "branding" | "cgi" | "social" | "production"
  description: {
    ar: "تصميم وإخراج سلسلة منشورات وبوستات إعلانية مبتكرة لمنصات التواصل الاجتماعي لعلامة Redeye، تركز على هوية بصرية قوية وتبرز المنتجات لجذب الجمهور وزيادة التفاعل والمبيعات.",
    en: "Design and visual art direction of engaging social media posts and ad campaigns for Redeye, crafted to reinforce brand identity, highlight products, and drive community engagement and conversions.",
  },
  client: {
    ar: "ريد أي",
    en: "RedEye",
  },
  duration: {
    ar: "أسبوعان",
    en: "Two Weeks",
  },

  // ── MEDIA ───────────────────────────────────────
  image: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036551/Redeye_mfzebs.png",       // Main cover image (case study hero)
  thumbnail: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-05_xmmyms.png",   // Card thumbnail (portfolio grid) — if not set, falls back to image
  gallery: [
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790034917/redeye_july-03_jaxjxa.jpg",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790034916/redeye_new_theme-02_vxgnyi.jpg",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790034917/redeye_new_theme-06_qlqlb7.jpg",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790073264/redeye_july-02_xgyigp.png",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790073265/redeye_july-04_ksimbi.png",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790073265/Untitled-1_vgguwu.png"
    // Videos work too:
    // "https://res.cloudinary.com/your-cloud/video/upload/example.mp4",
  ],

  // ── TAGS & TOOLS ────────────────────────────────
  tags: ["Social Media", "Post Design", "Branding", "Advertising"],      // Shown on portfolio card
  tools: ["Adobe Photoshop", "Adobe Illustrator"],                      // Shown on case study page

  // ── DELIVERABLES ────────────────────────────────
  deliverables: [
    { ar: "تصميم منشورات منصات التواصل الاجتماعي (Feed Posts)", en: "Social Media Feed Posts" },
    { ar: "تصاميم قصص تفاعلية وإعلانية (Stories)", en: "Interactive & Promotional Stories" },
    { ar: "توجيه فني ومعالجة بصرية للصور (Photo Manipulation)", en: "Art Direction & Photo Manipulation" },
    { ar: "قوالب وهوية بصرية للسوشال ميديا", en: "Social Media Templates & Visual Kit" },
  ],

  // ── CASE STUDY STORY ────────────────────────────
  challenge: {
    ar: "واجهت Redeye ضعفاً في ثبات الهوية البصرية وتفاعل الجمهور على منصات التواصل، مع حاجتها إلى أسلوب تصميم إعلاني عصري ومميز يبرز تفاصيل المنتجات ويزيد من رغبة الشراء بدلاً من التصاميم الروتينية المستهلكة.",
    en: "Redeye struggled with visual consistency and audience engagement across their social platforms, requiring a bold, modern ad design style to properly showcase product details and drive conversions instead of generic templates.",
  },
  solution: {
    ar: "ابتكرنا لغة بصرية متماسكة مع معالجة صور دقيقة وإخراج بوستات إعلانية بتدرجات إضاءة وتكوينات قوية، ركزت بشكل مباشر على إبراز المنتج وتقديم نصوص ترويجية واضحة تدفع المستخدم للتفاعل والطلب الفوري.",
    en: "We developed a cohesive visual identity with advanced photo manipulation and high-impact layouts, emphasizing the product with crisp lighting and strong typography that prompts immediate user interaction and purchasing decisions.",
  },

  // ── RESULTS ─────────────────────────────────────
  results: [
    { metric: "+110%", label: { ar: "ارتفاع معدل التفاعل والحفظ (Saves & Shares)", en: "Engagement & Saves Increase" } },
    { metric: "+35%", label: { ar: "نمو الرسائل والطلبات عبر المنصات", en: "Direct Inquiries & Sales Boost" } },
    { metric: "+60%", label: { ar: "زيادة نسبة الوصول للحساب (Account Reach)", en: "Overall Account Reach" } },
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
  platforms: ["Instagram", "Facebook"],

  // ── AUTO-GENERATED (don't change) ───────────────
  href: "/portfolio/redeye-social-media",
};

export default project;
