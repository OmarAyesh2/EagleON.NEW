"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Globe, Cuboid, Palette, Share2, Video, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { FeatureShowcase } from "@/components/feature-showcase";

const iconMap: Record<string, React.ElementType> = {
  Globe: Globe,
  Cuboid: Cuboid,
  Palette: Palette,
  Share2: Share2,
  Video: Video,
};

export default function ServiceDetailPage() {
  const { lang, isRtl } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];

  return (
    <div className="min-h-[100dvh] pb-20">
      {/* SECTION 1: Hero */}
      <section className="relative w-full pt-40 pb-16 px-4 md:px-10 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-brand-gray2 hover:text-white transition-colors mb-8"
          >
            {isRtl ? (
              <ArrowRight className="w-4 h-4" />
            ) : (
              <ArrowLeft className="w-4 h-4" />
            )}
            {lang === "ar" ? "العودة للخدمات" : "Back to Services"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary mb-2 shadow-[0_0_30px_rgba(123,193,255,0.1)]">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase max-w-3xl leading-tight">
                {service.title[lang]}
              </h1>
              <p className="text-lg md:text-xl text-brand-gray2 max-w-2xl mt-2 leading-relaxed">
                {service.tagline[lang]}
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-30" />
      </section>

      {/* SECTION 2: Overview (Feature Showcase) */}
      <FeatureShowcase
        className="border-t border-white/5"
        eyebrow={lang === "ar" ? "نظرة عامة" : "OVERVIEW"}
        title={service.title[lang]}
        description={service.overview[lang]}
        ctaLabels={{
          primary: lang === "ar" ? "ابدأ مشروعك" : "Get started",
          secondary: lang === "ar" ? "تصفح أعمالنا" : "Browse examples",
        }}
        stats={[]}
        steps={service.features.map((f, i) => ({
          id: `step-${i}`,
          title: f.title[lang],
          text: f.description[lang],
        }))}
        tabs={[
          {
            value: "tab-1",
            label: lang === "ar" ? "تصميم" : "Design",
            src: "https://cdn.21st.dev/assets/mirror/e1/e10c7175dec8e12ea3daa7204fd1cfba161d61aa3fda5387a022e7e258e3171f.png",
          },
          {
            value: "tab-2",
            label: lang === "ar" ? "أداء" : "Performance",
            src: "https://cdn.21st.dev/assets/mirror/61/6138ba1bccd2ae7cc89a81c656e36febe6fb4a3166232accf821861e8f8d86a1.jpg",
          },
        ]}
      />

      {/* SECTION 3: Features */}
      <section className="relative w-full py-24 px-4 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              {lang === "ar" ? "ماذا ستحصل عليه" : "WHAT YOU GET"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-8 transition-all hover:border-brand-primary/20 hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title[lang]}
                </h3>
                <p className="text-brand-gray2 text-sm leading-relaxed">
                  {feature.description[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Process */}
      <section className="relative w-full py-24 px-4 md:px-10 border-t border-white/5 bg-[#0a0a0f]/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              {lang === "ar" ? "كيف ننفذ هذه الخدمة" : "HOW WE DELIVER"}
            </h2>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative flex flex-col lg:flex-row justify-between gap-10 lg:gap-6">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
            
            {/* Vertical Line for Mobile */}
            <div className={cn(
              "block lg:hidden absolute top-4 bottom-4 w-[1px] bg-white/10 z-0",
              isRtl ? "right-[27px]" : "left-[27px]"
            )} />
            
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-row lg:flex-col items-start lg:items-center text-start lg:text-center flex-1 gap-6 lg:gap-0"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#0a0a0f] border border-brand-primary/30 flex items-center justify-center text-brand-primary font-mono font-bold text-lg lg:mb-6 shadow-[0_0_15px_rgba(123,193,255,0.1)]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 lg:mb-3">
                    {step.title[lang]}
                  </h3>
                  <p className="text-brand-gray2 text-sm leading-relaxed max-w-[250px] lg:mx-auto">
                    {step.description[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="relative w-full py-24 px-4 md:px-10 border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 bg-gradient-to-br from-white/[0.05] to-transparent p-10 md:p-16 rounded-3xl border border-white/10"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {lang === "ar" ? "جاهز لبدء مشروعك؟" : "Ready to Start Your Project?"}
            </h2>
            <p className="text-brand-gray2 text-lg">
              {lang === "ar" 
                ? "تواصل معنا اليوم واحصل على عرض سعر مجاني خلال 48 ساعة" 
                : "Contact us today and get a free quote within 48 hours"}
            </p>
            <Link
              href="/contact"
              className="mt-4 px-8 py-4 rounded-full bg-brand-primary text-black font-semibold tracking-wide hover:bg-white transition-colors duration-300"
            >
              {lang === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
