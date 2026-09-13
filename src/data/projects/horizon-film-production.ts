import { Project } from "../portfolio";

const project: Project = {
  id: "project-5",
  slug: "horizon-film-production",
  title: { ar: "إنتاج مرئي لشركة هورايزون", en: "Horizon Video Production" },
  category: { ar: "إنتاج إبداعي", en: "Media Production" },
  categorySlug: "production",
  description: { ar: "تصوير وإنتاج فيديو ترويجي سينمائي يستعرض مرافق الشركة وخدماتها لتعزيز ثقة العملاء المستثمرين.", en: "Shot and produced a cinematic promotional video showcasing company facilities to boost investor confidence." },
  image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=2070&auto=format&fit=crop",
  tags: ["Cinematography", "Editing", "Color Grading"],
  featured: false,
  href: "/portfolio/horizon-film-production",
  year: "2025",
  client: { ar: "شركة هورايزون للاستثمار", en: "Horizon Investments" },
  duration: { ar: "3 أسابيع", en: "3 Weeks" },
  tools: ["RED Camera", "DaVinci Resolve", "Premiere Pro", "Pro Tools"],
  deliverables: [
    { ar: "تطوير الفكرة والسيناريو", en: "Concept & Scripting" },
    { ar: "التصوير الميداني", en: "On-Location Filming" },
    { ar: "المونتاج وتصحيح الألوان", en: "Editing & Color Grading" },
    { ar: "تصميم الصوت", en: "Sound Design" }
  ],
  challenge: { ar: "شركة استثمارية تحتاج فيديو ترويجي سينمائي يستعرض مرافقها وخدماتها بشكل احترافي لتعزيز ثقة العملاء والمستثمرين المحتملين.", en: "An investment firm needed a cinematic promotional video showcasing its facilities and services professionally to boost confidence among potential clients and investors." },
  solution: { ar: "صورنا وأنتجنا فيديو ترويجي سينمائي شامل مع تصحيح ألوان احترافي وموسيقى مخصصة وتعليق صوتي بالعربية والإنجليزية.", en: "We shot and produced a comprehensive cinematic promotional video with professional color grading, custom music, and voiceover in both Arabic and English." },
  results: [
    { metric: "500K+", label: { ar: "مشاهدة", en: "Views" } },
    { metric: "+80%", label: { ar: "زيادة ثقة المستثمرين", en: "Investor Confidence Boost" } },
    { metric: "4", label: { ar: "جوائز إنتاج", en: "Production Awards" } },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=1200&auto=format",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&auto=format",
    "https://images.unsplash.com/photo-1588698183186-b4ad74092497?w=1200&auto=format"
  ]
};

export default project;
