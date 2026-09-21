"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";
import dynamic from "next/dynamic";
const CTABand = dynamic(() => import("@/components/sections/CTABand"));

const AUTO_PLAY_DURATION = 5000;

export default function ServicesPage() {
  const { lang, isRtl } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Map all services with images
  const allServices = services.map((service, index) => ({
    ...service,
    numId: `0${index + 1}`,
    image: [
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1789819963/Untitled_pao1la.png",
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1789915086/3d_xosoow.png",
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1789915851/Untitled2-01_ocistw.png",
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1790009566/Untitled4_kivnbl.png",
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1789921123/Untitled1_pibzyv.png"
    ][index % 5]
  }));

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % allServices.length);
  }, [allServices.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + allServices.length) % allServices.length);
  }, [allServices.length]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const heroContent = {
    eyebrow: {
      ar: "خدماتنا",
      en: "Services"
    },
    heading: {
      ar: "حلول رقمية شاملة",
      en: "CORE CAPABILITIES"
    },
    subtitle: {
      ar: "EagleOn Digital استوديو تقني وإبداعي مقره عمّان، الأردن. نبني مواقع وتطبيقات ويب مخصصة بالكامل بدون قوالب جاهزة، وأنظمة هوية بصرية متكاملة من الاستراتيجية حتى دليل الاستخدام، وتصاميم CGI و VFX سينمائية للحملات التي تتجاوز حدود التصوير التقليدي.",
      en: "EagleOn Digital is a technical and creative studio based in Amman, Jordan. We build fully custom websites and web applications with no template shortcuts, complete brand identity systems from strategy through usage guidelines, and cinema grade CGI and VFX for campaigns that go beyond what traditional photography can deliver."
    }
  };

  const processContent = {
    heading: {
      ar: "كيف نعمل",
      en: "OUR PROCESS"
    },
    steps: [
      {
        num: "01",
        title: { ar: "الاكتشاف", en: "Discovery" },
        desc: { ar: "نفهم أهدافك وجمهورك وتحدياتك", en: "We understand your goals, audience, and challenges" }
      },
      {
        num: "02",
        title: { ar: "الاستراتيجية", en: "Strategy" },
        desc: { ar: "نضع خطة تقنية وإبداعية محكمة", en: "We craft a precise technical and creative plan" }
      },
      {
        num: "03",
        title: { ar: "التصميم", en: "Design" },
        desc: { ar: "نصمم تجربة بصرية مميزة وعملية", en: "We design a distinctive and functional visual experience" }
      },
      {
        num: "04",
        title: { ar: "التطوير", en: "Development" },
        desc: { ar: "نبني بكود نظيف وأداء فائق", en: "We build with clean code and peak performance" }
      },
      {
        num: "05",
        title: { ar: "الإطلاق", en: "Launch" },
        desc: { ar: "نطلق مشروعك ونتابع النتائج", en: "We launch your project and monitor results" }
      }
    ]
  };

  return (
    <div className="min-h-[100dvh]">

      {/* SECTION 1: Hero Banner */}
      <section className="relative w-full pt-40 pb-20 px-4 md:px-10 overflow-hidden">
        <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-brand-primary font-mono text-sm uppercase tracking-widest mb-4">
              {heroContent.eyebrow[lang]}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-6">
              {heroContent.heading[lang]}
            </h1>
            <p className="text-brand-gray2 text-lg max-w-3xl mx-auto leading-relaxed">
              {heroContent.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Vertical Tabs Gallery */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5 bg-[#0a0a0f]/30">
        <div className="container mx-auto px-4 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Content */}
            <div className="lg:col-span-5 flex flex-col justify-start order-2 lg:order-1 pt-4">
              <div className="flex flex-col space-y-0 justify-start h-[520px] md:h-[580px] lg:h-[620px]">
                {allServices.map((service, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleTabClick(index)}
                      className={cn(
                        "group relative flex items-start gap-4 py-6 md:py-8 text-start transition-all duration-500 border-t border-white/10 first:border-0",
                        isActive
                          ? "text-white"
                          : "text-muted-foreground/60 hover:text-white"
                      )}
                    >
                      <div className={cn(
                        "absolute top-0 bottom-0 w-[2px] bg-white/10",
                        isRtl ? "right-[-16px] md:right-[-24px]" : "left-[-16px] md:left-[-24px]"
                      )}>
                        {isActive && (
                          <motion.div
                            key={`progress-${index}-${isPaused}`}
                            className={cn(
                              "absolute top-0 w-full bg-brand-primary origin-top",
                              isRtl ? "right-0" : "left-0"
                            )}
                            initial={{ height: "0%" }}
                            animate={
                              isPaused ? { height: "0%" } : { height: "100%" }
                            }
                            transition={{
                              duration: AUTO_PLAY_DURATION / 1000,
                              ease: "linear",
                            }}
                          />
                        )}
                      </div>

                      <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">
                        /{service.numId}
                      </span>

                      <div className="flex flex-col gap-2 flex-1">
                        <span
                          className={cn(
                            "text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500",
                            isActive ? "text-white" : ""
                          )}
                        >
                          {service.title[lang]}
                        </span>

                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.23, 1, 0.32, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-4">
                                {service.description[lang]}
                              </p>

                              <Link
                                href={service.href}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary transition-opacity hover:opacity-80"
                              >
                                {isRtl ? "اعرف المزيد" : "Learn More"}
                                {isRtl ? (
                                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                ) : (
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                )}
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Image Gallery */}
            <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
              <div
                className="relative group/gallery"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative aspect-video md:aspect-[4/3] lg:aspect-[16/11] rounded-3xl md:rounded-[2.5rem] overflow-hidden">
                  <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="popLayout"
                  >
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        y: { type: "spring", stiffness: 260, damping: 32 },
                        opacity: { duration: 0.4 },
                      }}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      onClick={handleNext}
                    >
                      <img
                        src={allServices[activeIndex].image}
                        alt={allServices[activeIndex].title[lang]}
                        className="w-full h-full object-contain md:object-cover transition-transform duration-700 hover:scale-105 !m-0 !p-0 block"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gallery Navigation Controls */}
                  <div className={cn(
                    "absolute bottom-6 md:bottom-8 flex gap-2 md:gap-3 z-20",
                    isRtl ? "left-6 md:left-8" : "right-6 md:right-8"
                  )}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90"
                      aria-label="Previous"
                    >
                      {isRtl ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90"
                      aria-label="Next"
                    >
                      {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Our Process */}
      <section className="relative w-full py-24 md:py-32 px-4 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              {processContent.heading[lang]}
            </h2>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-4 lg:gap-6">

            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

            {processContent.steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center flex-1"
              >
                <div className="w-14 h-14 rounded-full bg-[#0a0a0f] border border-white/10 flex items-center justify-center text-brand-primary font-mono font-bold text-lg mb-6 shadow-xl">
                  <span className="rtl:translate-y-[2px]">{step.num}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {step.title[lang]}
                </h3>
                <p className="text-brand-gray2 text-sm leading-relaxed max-w-[200px]">
                  {step.desc[lang]}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* SECTION 4: CTA Band */}
      <CTABand />

    </div>
  );
}
