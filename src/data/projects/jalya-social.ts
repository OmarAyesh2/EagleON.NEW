import { Project } from "../portfolio";

const project: Project = {
  // ── BASIC INFO ──────────────────────────────────
  id: "jalya-social",
  slug: "jalya-social-media",         // URL: /portfolio/your-project-slug
  year: "2025",
  featured: false,                     // Show on homepage?

  // ── TITLES & DESCRIPTIONS ──────────────────────
  title: {
    ar: "تصاميم سوشال ميديا — مطعم جليا (الرياض)",
    en: "Jalya Restaurant Social Media Campaign",
  },
  category: {
    ar: "سوشال ميديا وتصميم إعلاني",
    en: "Social Media & Advertising",
  },
  categorySlug: "social",                // Options: "web" | "branding" | "cgi" | "social" | "production"
  description: {
    ar: "تصميم وإخراج بوستات إعلانية وتفاعلية لمطعم جليا في الرياض (حي الورود)، تركز على الأطباق الأردنية والفلسطينية الأصيلة والمعجنات بأسلوب بصري يجمع بين عبق التراث وشهية التقديم العصري لرفع تفاعل الصفحة.",
    en: "Social media post design and art direction for Jalya Restaurant in Riyadh, spotlighting authentic Jordanian and Palestinian cuisine, breakfast staples, and pastries with engaging visual appetite appeal.",
  },
  client: {
    ar: "مطعم جليا (الرياض)",
    en: "Jalya Restaurant (Riyadh)",
  },
  duration: {
    ar: "أسبوعان",
    en: "Two Weeks",
  },

  // ── MEDIA ───────────────────────────────────────
  image: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-03_dqk1cf.png",       // Main cover image (case study hero)
  thumbnail: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-03_dqk1cf.png",   // Card thumbnail (portfolio grid) — if not set, falls back to image
  gallery: [
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790074946/social-media-post1_kolre3.png",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790074947/social-media-post8_rbojup.png",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790074947/social-media-post3_i1a4k8.png",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790074948/social-media-post7_gpeqcw.png",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790074953/social-media-post5_aaxlm7.png",
    "https://res.cloudinary.com/dzbsayerm/image/upload/v1790075371/1111_a1ege8.png"
    // Videos work too:
    // "https://res.cloudinary.com/your-cloud/video/upload/example.mp4",
  ],

  // ── TAGS & TOOLS ────────────────────────────────
  tags: ["Social Media", "Food Design", "Branding", "Advertising"],      // Shown on portfolio card
  tools: ["Adobe Photoshop", "Adobe Illustrator"],                      // Shown on case study page

  // ── DELIVERABLES ────────────────────────────────
  deliverables: [
    { ar: "تصميم بوستات تفاعلية وترويجية للأطباق (Social Media Posts)", en: "Promotional & Engagement Posts" },
    { ar: "معالجة وتفريغ صور الأطعمة والمأكولات (Food Manipulation)", en: "Food Photo Manipulation & Retouching" },
    { ar: "صياغة عبارات إعلانية وتسويقية مخصصة (Ad Copywriting)", en: "Creative Ad Copy & Hooks" },
    { ar: "تثبيت الهوية البصرية وعناصر البراند في الرياض", en: "Brand & Location Consistency" },
  ],

  // ── CASE STUDY STORY ────────────────────────────
  challenge: {
    ar: "يقدم مطعم جليا مأكولات أردنية وفلسطينية أصيلة في سوق الرياض عالي التنافسية، وكان التحدي كسر جمود صور الأكل التقليدية، وصناعة محتوى تفاعلي يثير نوستالجيا الزبائن وشهيتهم ويدفعهم للتعليق وزيارة الفرع بحي الورود.",
    en: "Jalya serves authentic Jordanian and Palestinian cuisine in Riyadh's competitive dining market. The challenge was breaking away from static food photos and creating interactive, appetizing content that sparks nostalgia, drives comments, and boosts foot traffic to their branch.",
  },
  solution: {
    ar: "صممنا سلسلة منشورات تعتمد على التفاعل المباشر وعبارات دارجة ('مع شطة ولا بدون'، 'نكهة توخذك لأيام الطيبين')، مع معالجة بصرية تبرز تفاصيل الطبق واستخدام خامات ورقية وخشبية دافئة تعكس طابع المطبخ التراثي، مع إبراز موقع المطعم في كل منشور.",
    en: "We developed an engaging social post series leveraging conversational hooks and cultural references, paired with appetizing food retouching and warm textured backgrounds that highlight authentic culinary craft, while consistently driving location awareness in Riyadh.",
  },

  // ── RESULTS ─────────────────────────────────────
  results: [
    { metric: "+135%", label: { ar: "نمو التعليقات والمشاركات التفاعلية", en: "Comments & Shares Growth" } },
    { metric: "+40%", label: { ar: "زيادة في الزيارات والطلبات المباشرة", en: "Direct Orders & Dine-in Inquiries" } },
    { metric: "+85%", label: { ar: "توسع نطاق الوصول المحلي داخل الرياض", en: "Local Riyadh Reach" } },
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
  href: "/portfolio/jalya-social-media",
};

export default project;
