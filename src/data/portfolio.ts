export interface Project {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  categorySlug: string;
  description: { ar: string; en: string };
  image: string;
  thumbnail?: string;                    // Optional: separate card thumbnail, falls back to image
  tags: string[];
  featured: boolean;
  href: string;
  year: string;
  client: { ar: string; en: string };
  duration: { ar: string; en: string };
  tools: string[];
  deliverables: { ar: string; en: string }[];
  challenge: { ar: string; en: string };
  solution: { ar: string; en: string };
  results: { metric: string; label: { ar: string; en: string } }[];
  testimonial?: { quote: { ar: string; en: string }; author: string; role: { ar: string; en: string } };
  gallery: string[];
  liveUrl?: string;
  colors?: string[];
  typography?: { ar: string; en: string }[];
  videoUrl?: string;
  platforms?: string[];
}

// Import all projects
import nexusTech from "./projects/nexus-tech-website";
import auroraBrand from "./projects/aurora-brand-identity";
import cyberCity from "./projects/cyber-city-cgi";
import pulseSocial from "./projects/pulse-social-media";
import horizonFilm from "./projects/horizon-film-production";

// Add new projects here:
export const portfolio: Project[] = [
  nexusTech,
  auroraBrand,
  cyberCity,
  pulseSocial,
  horizonFilm,
];
