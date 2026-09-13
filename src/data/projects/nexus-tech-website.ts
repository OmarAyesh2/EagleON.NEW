import { Project } from "../portfolio";

const project: Project = {
  id: "project-1",
  slug: "nexus-tech-website",
  title: { ar: "موقع شركة نيكسوس للتكنولوجيا", en: "Nexus Tech Website" },
  category: { ar: "تطوير مواقع", en: "Web Development" },
  categorySlug: "web",
  description: { ar: "بناء منصة رقمية متكاملة للشركة مع تجربة مستخدم سلسة وأداء فائق السرعة، مما زاد من معدل التحويل بنسبة 40%.", en: "Built a comprehensive digital platform with a seamless UX and ultra-fast performance, increasing conversion rates by 40%." },
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  featured: true,
  href: "/portfolio/nexus-tech-website",
  year: "2026",
  client: { ar: "شركة نيكسوس للتكنولوجيا", en: "Nexus Tech Solutions" },
  duration: { ar: "8 أسابيع", en: "8 Weeks" },
  tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  deliverables: [
    { ar: "تصميم واجهة المستخدم وتجربة المستخدم (UI/UX)", en: "UI/UX Design" },
    { ar: "تطوير الواجهة الأمامية والخلفية", en: "Full-Stack Development" },
    { ar: "نظام إدارة المحتوى المخصص", en: "Custom CMS" },
    { ar: "تحسين محركات البحث (SEO)", en: "SEO Optimization" }
  ],
  challenge: { ar: "كانت الشركة تعتمد على موقع قديم بطيء التحميل وغير متجاوب مع الأجهزة المحمولة، مما أدى لخسارة عملاء محتملين وانخفاض معدل التحويل بشكل ملحوظ.", en: "The company relied on an outdated, slow-loading website that wasn't mobile-responsive, causing them to lose potential clients and experience a significant drop in conversion rates." },
  solution: { ar: "بنينا منصة رقمية متكاملة من الصفر باستخدام Next.js و Tailwind CSS مع تجربة مستخدم سلسة وأداء فائق السرعة. شملت لوحة تحكم مخصصة وتكامل مع أنظمة الدفع.", en: "We built a comprehensive digital platform from scratch using Next.js and Tailwind CSS with a seamless UX and ultra-fast performance. It included a custom admin dashboard and payment system integration." },
  results: [
    { metric: "+40%", label: { ar: "زيادة معدل التحويل", en: "Conversion Rate Increase" } },
    { metric: "0.8s", label: { ar: "سرعة تحميل الصفحة", en: "Page Load Time" } },
    { metric: "+65%", label: { ar: "زيادة الزيارات العضوية", en: "Organic Traffic Growth" } },
  ],
  testimonial: {
    quote: { ar: "إيجل أون تجاوزوا كل التوقعات. الموقع الجديد لا يبدو رائعًا فحسب، بل حقق نتائج تجارية حقيقية في الشهر الأول.", en: "EagleOn exceeded all expectations. The new site doesn't just look great; it drove real business results in the first month." },
    author: "Ahmed Al-Farsi",
    role: { ar: "المدير التنفيذي", en: "CEO" }
  },
  gallery: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format"
  ],
  liveUrl: "https://example.com"
};

export default project;
