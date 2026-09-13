import { Project } from "../portfolio";

const project: Project = {
  id: "project-4",
  slug: "pulse-social-media",
  title: { ar: "إدارة حسابات نادي بالص", en: "Pulse Club Social Media" },
  category: { ar: "سوشيال ميديا", en: "Social Media" },
  categorySlug: "social",
  description: { ar: "استراتيجية شاملة وإدارة محتوى لزيادة التفاعل المجتمعي وتحقيق نمو بنسبة 200% في المتابعين.", en: "Comprehensive strategy and content management to increase community engagement, achieving 200% follower growth." },
  image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
  tags: ["Strategy", "Content Creation", "Ads"],
  featured: false,
  href: "/portfolio/pulse-social-media",
  year: "2025",
  client: { ar: "نادي بالص الرياضي", en: "Pulse Sports Club" },
  duration: { ar: "مستمر (6 أشهر)", en: "Ongoing (6 Months)" },
  tools: ["Hootsuite", "Meta Business Suite", "Adobe Creative Cloud", "CapCut"],
  deliverables: [
    { ar: "استراتيجية وسائل التواصل", en: "Social Media Strategy" },
    { ar: "إنشاء المحتوى وتصميمه", en: "Content Creation & Design" },
    { ar: "إدارة الحملات الإعلانية", en: "Ad Campaign Management" },
    { ar: "تقارير أداء شهرية", en: "Monthly Performance Reports" }
  ],
  challenge: { ar: "نادي رياضي يعاني من ضعف التفاعل على منصات التواصل الاجتماعي ويحتاج استراتيجية شاملة لزيادة المتابعين وتحويلهم إلى أعضاء فعليين.", en: "A sports club struggling with low social media engagement needed a comprehensive strategy to grow followers and convert them into actual members." },
  solution: { ar: "وضعنا استراتيجية محتوى متكاملة مع تقويم نشر مخصص وتصاميم احترافية وإدارة حملات إعلانية مستهدفة على Instagram و TikTok.", en: "We developed an integrated content strategy with a custom publishing calendar, professional designs, and targeted ad campaigns on Instagram and TikTok." },
  results: [
    { metric: "+200%", label: { ar: "نمو المتابعين", en: "Follower Growth" } },
    { metric: "+150%", label: { ar: "زيادة التفاعل", en: "Engagement Increase" } },
    { metric: "+45%", label: { ar: "تحويل لعضويات", en: "Membership Conversions" } },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&auto=format"
  ],
  platforms: ["Instagram", "TikTok", "Facebook"]
};

export default project;
