"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useLanguage } from "@/context/LanguageContext";

const AUTO_PLAY_DURATION = 5000;

export default function Services() {
  const { lang, isRtl } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Filter only featured services and map placeholder images for them
  const featuredServices = services.filter(s => s.featured).map((service, index) => ({
    ...service,
    numId: `0${index + 1}`,
    image: [
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1790072346/dev_htsqpv.png",
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1790072345/3d_ystg2u.png",
      "https://res.cloudinary.com/dzbsayerm/image/upload/v1790072345/branding_fezukc.png"
    ][index % 3]
  }));

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % featuredServices.length);
  }, [featuredServices.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + featuredServices.length) % featuredServices.length);
  }, [featuredServices.length]);

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

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5 bg-[#0a0a0f]/30">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {isRtl
                ? "خدماتنا"
                : "WHAT WE DO"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isRtl
                ? "خمس خدمات أساسية. كل واحدة مبنية من الصفر لعملك تحديداً. بدون باقات جاهزة وبدون اختصارات."
                : "Five core services. Each one built from scratch for your specific business. No packages, no shortcuts."}
            </p>
          </div>

          <Link href="/services" className="shrink-0 hidden md:block">
            <InteractiveHoverButton text={isRtl ? "عرض الكل" : "View All"} />
          </Link>
        </div>

        {/* Vertical Tabs Gallery area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-start order-2 lg:order-1 pt-4">
            <div className="flex flex-col space-y-0 justify-start h-[420px] md:h-[480px] lg:h-[500px]">
              {featuredServices.map((service, index) => {
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

                            {/* Learn More Button */}
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
                      src={featuredServices[activeIndex].image}
                      alt={featuredServices[activeIndex].title[lang]}
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

        {/* Mobile View All Button */}
        <div className="mt-16 flex justify-center md:hidden">
          <Link href="/services" className="w-full flex justify-center">
            <InteractiveHoverButton text={isRtl ? "عرض جميع الخدمات" : "View All Services"} className="w-full max-w-sm" />
          </Link>
        </div>

      </div>
    </section>
  );
}
