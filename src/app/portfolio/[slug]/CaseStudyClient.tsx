"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";
const CTABand = dynamic(() => import("@/components/sections/CTABand"));
const Lightbox = dynamic(() => import("@/components/ui/lightbox"));

export default function CaseStudyClient() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  const isVideo = (url: string) => /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(url);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoRatio, setVideoRatio] = useState<string>("16/9");

  const projectIndex = portfolio.findIndex((p) => p.slug === slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolio[projectIndex];
  
  const relatedProjects = portfolio
    .filter((p) => p.categorySlug === project.categorySlug && p.id !== project.id)
    .slice(0, 3);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  // 1. Hero Section
  const sectionHero = (
    <section className="pt-36 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <Link 
        href="/portfolio"
        className="inline-flex items-center gap-2 text-brand-gray2 hover:text-brand-primary transition-colors mb-12 group text-sm font-medium uppercase tracking-wider"
      >
        {isRTL ? (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        ) : (
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        )}
        <span>{isRTL ? "العودة للأعمال" : "Back to Portfolio"}</span>
      </Link>
      
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-4"
        >
          {project.title[lang]}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-brand-gray2 flex justify-start gap-2 text-start"
        >
          {isRTL ? "العميل:" : "Client:"} <span className="text-white font-medium">{project.client[lang]}</span>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/10 text-start"
      >
        <div className="space-y-3">
          <h3 className="text-sm text-brand-gray2 uppercase tracking-widest">{isRTL ? "الفئة" : "Category"}</h3>
          <div className="inline-block px-4 py-2 rtl:pt-2.5 rtl:pb-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
            {project.category[lang]}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm text-brand-gray2 uppercase tracking-widest">{isRTL ? "المدة" : "Duration"}</h3>
          <div className="text-lg font-medium">{project.duration[lang]}</div>
        </div>
        <div className="space-y-3 lg:col-span-2">
          <h3 className="text-sm text-brand-gray2 uppercase tracking-widest">{isRTL ? "التقنيات" : "Tools"}</h3>
          <div className="flex flex-wrap justify-start gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="px-3 py-1 rtl:pt-1.5 rtl:pb-0.5 bg-white/5 border border-white/10 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3 lg:col-span-4 mt-4 border-t border-white/5 pt-8">
          <h3 className="text-sm text-brand-gray2 uppercase tracking-widest mb-4">{isRTL ? "المخرجات" : "Deliverables"}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start text-start">
            {project.deliverables.map((del, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <span className="text-brand-primary mt-0.5">•</span>
                <span className="text-white">{del[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );

  // 2. Challenge & Solution
  const sectionChallengeSolution = (
    <section className="px-4 md:px-8 py-16 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-brand-primary font-mono text-sm uppercase tracking-widest">
            {isRTL ? "التحدي" : "THE CHALLENGE"}
          </h2>
          <p className="text-lg md:text-xl text-brand-gray2 leading-relaxed">
            {project.challenge[lang]}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-brand-primary font-mono text-sm uppercase tracking-widest">
            {isRTL ? "الحل" : "THE SOLUTION"}
          </h2>
          <p className="text-lg md:text-xl text-brand-gray2 leading-relaxed">
            {project.solution[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );

  // 3. Category-Specific Blocks
  const sectionWebSpecific = project.categorySlug === "web" && project.liveUrl && (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-12"
      >
        <Link 
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-brand-primary/90 transition-all hover:shadow-[0_0_30px_rgba(123,193,255,0.4)]"
        >
          <span>{isRTL ? "زيارة الموقع المباشر" : "Visit Live Site"}</span>
          {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />}
        </Link>
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
           <Image src={project.thumbnail || project.image} alt={project.title[lang]} fill className="object-cover" />
        </div>
      </motion.div>
    </section>
  );

  const sectionBrandingSpecific = project.categorySlug === "branding" && (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 text-center"
      >
        <h3 className="text-2xl font-bold uppercase tracking-widest">{isRTL ? "عناصر الهوية البصرية" : "Brand Identity Elements"}</h3>
        
        {project.colors && (
          <div className="space-y-6">
            <h4 className="text-sm text-brand-gray2 uppercase tracking-widest">{isRTL ? "لوحة الألوان" : "Color Palette"}</h4>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {project.colors.map(color => (
                <div key={color} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg border border-white/10" style={{ backgroundColor: color }} />
                  <span className="font-mono text-sm text-brand-gray2">{color}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {project.typography && (
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h4 className="text-sm text-brand-gray2 uppercase tracking-widest">{isRTL ? "الخطوط المستخدمة" : "Typography"}</h4>
            <div className="flex flex-wrap justify-center gap-8">
              {project.typography.map((font, idx) => (
                <div key={idx} className="text-xl md:text-3xl font-serif">Aa - {font[lang]}</div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );

  const sectionCgiSpecific = (project.categorySlug === "cgi" || project.categorySlug === "production") && project.videoUrl && (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="space-y-8 text-center"
      >
        <h3 className="text-2xl font-bold uppercase tracking-widest">{isRTL ? "الفيديو الرئيسي" : "Featured Reel"}</h3>
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-black max-h-[80vh]" style={{ aspectRatio: videoRatio }}>
          <video
            src={project.videoUrl}
            controls
            playsInline
            preload="metadata"
            poster={project.image}
            className="w-full h-full object-contain"
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              setVideoRatio(`${video.videoWidth}/${video.videoHeight}`);
            }}
          />
        </div>
      </motion.div>
    </section>
  );

  const sectionSocialSpecific = project.categorySlug === "social" && project.platforms && (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-8"
      >
        <h3 className="text-2xl font-bold uppercase tracking-widest">{isRTL ? "المنصات" : "Platforms"}</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {project.platforms.map(platform => (
            <div key={platform} className="px-8 py-4 bg-white/5 border border-brand-primary/20 rounded-full text-xl font-medium text-brand-primary hover:bg-brand-primary/10 transition-colors">
              {platform}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  // 4. Results & Impact
  const sectionResults = project.results.length > 0 && (
    <section className="px-4 md:px-8 py-20 bg-brand-primary text-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold uppercase text-center mb-16 tracking-wide"
        >
          {isRTL ? "النتائج والتأثير" : "Results & Impact"}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {project.results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-3 p-6"
            >
              <div className="text-6xl md:text-8xl font-bold font-mono tracking-tighter">
                {result.metric}
              </div>
              <div className="text-lg md:text-xl font-bold uppercase tracking-widest opacity-80">
                {result.label[lang]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // 5. Project Gallery
  const sectionGallery = project.gallery.length > 0 && (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold uppercase text-center mb-16 tracking-widest"
      >
        {isRTL ? "معرض المشروع" : "Project Gallery"}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.gallery.map((imgUrl, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group border border-white/10 shadow-lg"
            onClick={() => handleOpenLightbox(idx)}
          >
            {isVideo(imgUrl) ? (
              <video
                src={imgUrl}
                muted
                playsInline
                preload="none"
                poster={imgUrl.includes("/video/upload/") ? imgUrl.replace("/video/upload/", "/video/upload/so_0/").replace(/\.(mp4|webm|mov|ogg)(\?.*)?$/i, ".jpg") : undefined}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Image
                src={imgUrl}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            {isVideo(imgUrl) && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="px-6 py-3 bg-black/60 backdrop-blur-sm text-white font-medium rounded-full border border-white/10">
                {isRTL ? "تكبير الصورة" : "View Fullscreen"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  // 6. Client Testimonial
  const sectionTestimonial = project.testimonial && (
    <section className="px-4 md:px-8 py-24 bg-white/[0.02] border-y border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <Quote className="w-16 h-16 mx-auto text-brand-primary/30 mb-8" />
        <p className="text-2xl md:text-4xl text-brand-white font-medium italic leading-relaxed mb-10">
          "{project.testimonial.quote[lang]}"
        </p>
        <div>
          <div className="text-xl font-bold text-brand-primary">{project.testimonial.author}</div>
          <div className="text-brand-gray2 mt-1">{project.testimonial.role[lang]} — {project.client[lang]}</div>
        </div>
      </motion.div>
    </section>
  );

  // 7. Related Projects
  const sectionRelated = relatedProjects.length > 0 && (
    <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white/50">
          {isRTL ? "مشاريع مشابهة" : "Related Projects"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedProjects.map((relProject) => (
          <Link href={`/portfolio/${relProject.slug}`} key={relProject.id} className="group block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-6 shadow-lg">
              <Image src={relProject.thumbnail || relProject.image} alt={relProject.title[lang]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{relProject.title[lang]}</h3>
            <p className="text-brand-gray2 mt-2 font-medium uppercase text-sm tracking-wider">{relProject.category[lang]}</p>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-[100dvh] bg-[#0a0a0f] text-white text-start">
      {project.categorySlug === "cgi" || project.categorySlug === "production" ? (
        <>
          {sectionHero}
          {sectionGallery}
          {sectionCgiSpecific}
          {sectionChallengeSolution}
          {sectionResults}
          {sectionTestimonial}
          {sectionRelated}
        </>
      ) : project.categorySlug === "web" ? (
        <>
          {sectionHero}
          {sectionWebSpecific}
          {sectionGallery}
          {sectionChallengeSolution}
          {sectionResults}
          {sectionTestimonial}
          {sectionRelated}
        </>
      ) : project.categorySlug === "branding" ? (
        <>
          {sectionHero}
          {sectionGallery}
          {sectionBrandingSpecific}
          {sectionChallengeSolution}
          {sectionResults}
          {sectionTestimonial}
          {sectionRelated}
        </>
      ) : project.categorySlug === "social" ? (
        <>
          {sectionHero}
          {sectionGallery}
          {sectionSocialSpecific}
          {sectionChallengeSolution}
          {sectionResults}
          {sectionTestimonial}
          {sectionRelated}
        </>
      ) : (
        <>
          {sectionHero}
          {sectionChallengeSolution}
          {sectionResults}
          {sectionGallery}
          {sectionTestimonial}
          {sectionRelated}
        </>
      )}

      {/* 8. Final CTA */}
      <CTABand />

      {/* Lightbox Component */}
      <Lightbox 
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </div>
  );
}
