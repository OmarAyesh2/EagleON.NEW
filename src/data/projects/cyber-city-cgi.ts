import { Project } from "../portfolio";

const project: Project = {
  id: "project-3",
  slug: "cyber-city-cgi",
  title: { ar: "حملة إعلانية: مدينة المستقبل", en: "Future City Campaign" },
  category: { ar: "تصميم ثلاثي الأبعاد", en: "3D & CGI" },
  categorySlug: "cgi",
  description: { ar: "إنتاج مقاطع فيديو إعلانية باستخدام تقنيات CGI المتطورة لإطلاق منتج تقني جديد، مما أحدث ضجة هائلة.", en: "Produced advertising videos using advanced CGI for a new tech product launch, generating massive hype." },
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  tags: ["CGI", "Blender", "VFX"],
  featured: true,
  href: "/portfolio/cyber-city-cgi",
  year: "2026",
  client: { ar: "شركة تقنية ناشئة", en: "Tech Startup" },
  duration: { ar: "6 أسابيع", en: "6 Weeks" },
  tools: ["Blender", "Unreal Engine", "After Effects", "Nuke"],
  deliverables: [
    { ar: "إعلان فيديو رئيسي", en: "Main Hero Video" },
    { ar: "مقاطع قصيرة للسوشيال ميديا", en: "Social Media Shorts" },
    { ar: "صور ثلاثية الأبعاد عالية الدقة", en: "High-Res 3D Stills" }
  ],
  challenge: { ar: "شركة تقنية تطلق منتجاً جديداً وتحتاج حملة إعلانية مبتكرة باستخدام تقنيات CGI متطورة لإحداث ضجة في السوق وجذب المستثمرين.", en: "A tech company launching a new product needed an innovative advertising campaign using advanced CGI techniques to generate market buzz and attract investors." },
  solution: { ar: "أنتجنا مقاطع فيديو إعلانية سينمائية باستخدام Blender و VFX متقدمة، مع تصاميم ثلاثية الأبعاد واقعية لمنتجهم التقني في بيئة مدينة مستقبلية.", en: "We produced cinematic advertising videos using Blender and advanced VFX, with photorealistic 3D renders of their tech product in a futuristic city environment." },
  results: [
    { metric: "2M+", label: { ar: "مشاهدة", en: "Views" } },
    { metric: "+300%", label: { ar: "تفاعل على السوشيال", en: "Social Engagement" } },
    { metric: "10x", label: { ar: "عائد الاستثمار الإعلاني", en: "Ad ROI" } },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1633519842602-0e9e4367ef87?w=1200&auto=format",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format",
    "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033301/CGI_1_dvfmi7.mp4",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&auto=format"
  ],
  videoUrl: "https://res.cloudinary.com/dzbsayerm/video/upload/v1786033301/CGI_1_dvfmi7.mp4"
};

export default project;
