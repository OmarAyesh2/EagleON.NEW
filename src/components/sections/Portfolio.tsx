"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const { lang, isRtl } = useLanguage();

  const featuredProjects = portfolio.filter(project => project.featured);

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {isRtl
                ? "أعمالنا"
                : "OUR WORK"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isRtl
                ? "مشاريع حقيقية سلّمناها. صناعات مختلفة، نفس المعيار."
                : "Real projects we've shipped. Different industries, same standard."}
            </p>
          </div>

          <Link href="/portfolio" className="shrink-0 hidden md:block">
            <InteractiveHoverButton text={isRtl ? "عرض الكل" : "View All"} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#7BC1FF]/50 hover:shadow-[0_0_30px_rgba(123,193,255,0.15)]"
              >
                {/* Image Container */}
                <Link href={project.href} className="block w-full">
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Floating Category Badge */}
                    <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'}`}>
                      <span className="inline-flex items-center rounded-full px-3 py-1 rtl:pt-1.5 rtl:pb-0.5 text-xs font-semibold bg-black/50 backdrop-blur-md text-white border border-white/20">
                        {project.category[lang]}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 lg:p-8">
                  <Link href={project.href} className="block group/link">
                    <h3 className="text-2xl font-bold text-white mb-3 transition-colors group-hover/link:text-[#7BC1FF]">
                      {project.title[lang]}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description[lang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-white/70 bg-white/5 rounded-md px-2 py-1 rtl:pt-1.5 rtl:pb-0.5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#7BC1FF] transition-all duration-300 hover:text-white"
                  >
                    {isRtl ? "استعراض المشروع" : "View Case Study"}
                    {isRtl ? (
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/portfolio" className="w-full flex justify-center">
            <InteractiveHoverButton text={isRtl ? "عرض جميع المشاريع" : "View All Projects"} className="w-full max-w-sm" />
          </Link>
        </div>

      </div>
    </section>
  );
}
