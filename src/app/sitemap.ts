import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { portfolio } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eagleon.digital";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/qa`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];

  // Dynamic routes
  const dynamicServices: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  const dynamicPortfolio: MetadataRoute.Sitemap = portfolio.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicServices, ...dynamicPortfolio];
}
