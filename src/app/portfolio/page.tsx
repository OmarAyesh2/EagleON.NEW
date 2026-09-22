"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolio } from "@/data/portfolio";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const CTABand = dynamic(() => import("@/components/sections/CTABand"));
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: { ar: "الكل", en: "All" } },
  { id: "web", label: { ar: "تطوير مواقع", en: "Web" } },
  { id: "branding", label: { ar: "هوية بصرية", en: "Branding" } },
  { id: "cgi", label: { ar: "تصميم ثلاثي الأبعاد", en: "CGI" } },
  { id: "social", label: { ar: "سوشيال ميديا", en: "Social Media" } },
  { id: "production", label: { ar: "إنتاج إبداعي", en: "Production" } },
];

export default function PortfolioPage() {
  const { lang, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? portfolio
    : portfolio.filter(p => p.categorySlug === activeFilter);

  const featuredProject = filteredProjects.length > 0 ? filteredProjects[0] : null;
  const remainingProjects = filteredProjects.length > 1 ? filteredProjects.slice(1) : [];

  return (
    <div className="min-h-[100dvh] text-white">
      {/* SECTION 1: HERO */}
      <section className="pt-40 pb-8 px-4 md:px-8 max-w-7xl mx-auto text-start">
        <div className="mb-4">
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest rtl:pt-1.5 rtl:pb-0.5">
            {lang === "ar" ? "أعمالنا" : "Our Work"}
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-none"
        >
          {lang === "ar" ? "مشاريع صنعت الفارق" : "PROJECTS THAT MADE AN IMPACT"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-brand-gray2 text-lg max-w-xl leading-relaxed"
        >
          {lang === "ar"
            ? "استكشف مجموعة من أبرز أعمالنا التي ساهمت في تحويل رؤى عملائنا إلى نجاحات رقمية رائدة."
            : "Explore a selection of our top projects that transformed our clients' visions into market-leading digital successes."}
        </motion.p>
      </section>

      {/* SECTION 2: FILTER BAR */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-12 text-start">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-6 py-2 rtl:pt-2.5 rtl:pb-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border",
                activeFilter === filter.id
                  ? "bg-brand-primary text-black border-brand-primary"
                  : "bg-transparent text-brand-gray2 border-white/10 hover:text-white hover:border-white/30 hover:bg-white/5"
              )}
            >
              {filter.label[lang]}
            </button>
          ))}
        </div>
      </section>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-brand-gray2 text-lg">
            {lang === "ar" ? "لا توجد مشاريع مطابقة لهذا التصنيف حالياً." : "No projects found for this category."}
          </p>
        </div>
      ) : (
        <>
          {/* SECTION 3: FEATURED PROJECT */}
          {featuredProject && (
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-8 text-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href={`/portfolio/${featuredProject.slug}`}
                  className="group relative block rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] md:aspect-[16/9]"
                >
                  <img 
                    src={featuredProject.thumbnail || featuredProject.image} 
                    alt={featuredProject.title[lang]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 pointer-events-none">
                    <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs px-3 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded-full font-medium mb-3">
                      {featuredProject.category[lang]}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-brand-primary transition-colors mb-2">
                      {featuredProject.title[lang]}
                    </h3>
                    {featuredProject.description && (
                      <p className="text-brand-gray2 text-sm md:text-base max-w-xl leading-relaxed hidden md:block">
                        {featuredProject.description[lang]}
                      </p>
                    )}
                    {featuredProject.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {featuredProject.tags.slice(0, 4).map((tech: string, i: number) => (
                          <span key={i} className="bg-white/10 backdrop-blur-md text-white/90 text-[11px] px-2.5 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                        {featuredProject.tags.length > 4 && (
                          <span className="bg-white/10 backdrop-blur-md text-white/90 text-[11px] px-2.5 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded">
                            +{featuredProject.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            </section>
          )}

          {/* SECTION 4: REMAINING PROJECTS */}
          {remainingProjects.length > 0 && (
            <section className="px-4 md:px-8 max-w-7xl mx-auto pb-24 text-start">
              <AnimatePresence mode="popLayout">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {remainingProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                    >
                      <Link 
                        href={`/portfolio/${project.slug}`}
                        className="group block relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]"
                      >
                        <img 
                          src={project.thumbnail || project.image} 
                          alt={project.title[lang]} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
                          <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs px-3 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded-full font-medium">
                            {project.category[lang]}
                          </span>
                          <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-brand-primary transition-colors mt-2">
                            {project.title[lang]}
                          </h3>
                          {project.tags && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.tags.slice(0, 3).map((tech: string, i: number) => (
                                <span key={i} className="bg-white/10 backdrop-blur-md text-white/90 text-[11px] px-2.5 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded">
                                  {tech}
                                </span>
                              ))}
                              {project.tags.length > 3 && (
                                <span className="bg-white/10 backdrop-blur-md text-white/90 text-[11px] px-2.5 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded">
                                  +{project.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </section>
          )}
        </>
      )}

      {/* SECTION 5: CTA */}
      <CTABand />
    </div>
  );
}
