import { Project } from "../portfolio";

const project: Project = {
  id: "project-2",
  slug: "aurora-brand-identity",
  title: { ar: "هوية بصرية لمقهى أورورا", en: "Aurora Brand Identity" },
  category: { ar: "هوية بصرية", en: "Brand Identity" },
  categorySlug: "branding",
  description: { ar: "تصميم هوية بصرية كاملة تنقل طابع الفخامة العصرية لتطبيق مقهى مختص متوسع في الشرق الأوسط.", en: "Designed a complete brand identity conveying modern luxury for an expanding specialty coffee shop in the Middle East." },
  image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop",
  tags: ["Branding", "UI/UX", "Typography"],
  featured: true,
  href: "/portfolio/aurora-brand-identity",
  year: "2025",
  client: { ar: "مقهى أورورا", en: "Aurora Coffee" },
  duration: { ar: "4 أسابيع", en: "4 Weeks" },
  tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  deliverables: [
    { ar: "تصميم الشعار", en: "Logo Design" },
    { ar: "دليل الهوية البصرية", en: "Brand Guidelines" },
    { ar: "تصاميم التغليف والمطبوعات", en: "Packaging & Print Design" },
    { ar: "قوالب السوشيال ميديا", en: "Social Media Templates" }
  ],
  challenge: { ar: "مقهى مختص يتوسع في الشرق الأوسط يحتاج هوية بصرية متكاملة تنقل طابع الفخامة العصرية وتميزه عن المنافسين في سوق مشبع.", en: "A specialty coffee shop expanding in the Middle East needed a complete brand identity that conveys modern luxury and differentiates it from competitors in a saturated market." },
  solution: { ar: "صممنا هوية بصرية كاملة تشمل الشعار ونظام الألوان والخطوط والتطبيقات المطبوعة ودليل استخدام شامل يضمن تطبيق الهوية بشكل متسق.", en: "We designed a complete brand identity including logo, color system, typography, print applications, and a comprehensive usage guide ensuring consistent brand application." },
  results: [
    { metric: "100%", label: { ar: "رضا العميل", en: "Client Satisfaction" } },
    { metric: "5x", label: { ar: "تعرف على العلامة", en: "Brand Recognition" } },
    { metric: "3", label: { ar: "فروع جديدة بالهوية", en: "New Branches Branded" } },
  ],
  testimonial: {
    quote: { ar: "الهوية الجديدة غيرت تماماً الطريقة التي ينظر بها عملاؤنا إلينا. أصبحت علامتنا التجارية تعكس جودة قهوتنا بشكل حقيقي.", en: "The new identity completely changed how our customers perceive us. Our brand finally reflects the true quality of our coffee." },
    author: "Sarah Othman",
    role: { ar: "مديرة التسويق", en: "Marketing Director" }
  },
  gallery: [
    "https://images.unsplash.com/photo-1558500201-98782a229a1e?w=1200&auto=format",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&auto=format",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format"
  ],
  colors: ["#1E232A", "#D4AF37", "#F8F5F0"],
  typography: [
    { ar: "رويال (عربي)", en: "Playfair Display (English)" },
    { ar: "عريض (عربي)", en: "Inter (English)" }
  ]
};

export default project;
