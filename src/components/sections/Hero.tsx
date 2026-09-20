"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, MoveLeft } from "lucide-react";
import Link from "next/link";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Rotating words — the services we offer
  const titles = useMemo(
    () => ({
      en: ["Websites", "Brands", "Social Media", "Productions", "CGI"],
      ar: ["مواقع إلكترونية", "علامات تجارية", "سوشيال ميديا", "إنتاج إبداعي", "تصميم ثلاثي الأبعاد"],
    }),
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) =>
        prev === titles.en.length - 1 ? 0 : prev + 1
      );
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const { lang } = useLanguage();

  const currentTitles = titles[lang];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative isolate w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F5F7A]/20 via-[#01080F] to-[#01080F] z-0 pointer-events-none" />

      {/* 2. 3D Perspective Floor Grid */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none opacity-40">
        <div 
          className="w-[200vw] h-[200vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] origin-top bg-[linear-gradient(rgba(123,193,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(123,193,255,0.35)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-scroll"
          style={{ 
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        />
      </div>

      {/* 3. Ceiling Grid (Mirrored) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none opacity-20">
         <div 
          className="w-[200vw] h-[200vh] absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[40%] origin-bottom bg-[linear-gradient(rgba(123,193,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(123,193,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-scroll-reverse"
          style={{ 
            transform: 'perspective(500px) rotateX(-60deg) translateY(100px) translateZ(-200px)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        />
      </div>

      {/* 4. Interactive Mouse Spotlight */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(123, 193, 255, 0.1), transparent 40%)`
        }}
      />

      {/* 5. Central Cyber Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 animate-spin-slow pointer-events-none opacity-30">
        <div className="absolute inset-0 border-t border-r border-[#7BC1FF]/30 rounded-full" />
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#7BC1FF] rounded-full shadow-[0_0_10px_#7BC1FF]" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#7BC1FF] rounded-full shadow-[0_0_10px_#7BC1FF]" />
      </div>

      {/* 6. Scanline Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[size:100%_4px] opacity-10" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#7BC1FF]/5 to-transparent h-[100px] w-full animate-scanline opacity-20" />
      
      {/* 7. Decorative corner elements */}
      <div className="absolute top-24 left-6 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* Headline with rotating words */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-8xl max-w-5xl tracking-tighter text-center font-black leading-tight md:leading-[1.1] px-4 md:px-0">
              <span>
                {lang === "ar" ? "نبني تجارب رقمية تصنع" : "We Build Digital Experiences That Drive"}
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[1.5em] items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${lang}-${titleNumber}`}
                    className="font-medium text-brand-primary"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    {currentTitles[titleNumber]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center mx-auto px-4 md:px-0">
              {lang === "ar"
                ? "مواقع مخصصة، هوية بصرية متكاملة، إدارة سوشيال ميديا، و CGI سينمائي — كلها تحت سقف واحد في عمّان."
                : "Custom websites, full brand identity, social media management, and cinema grade CGI — all under one roof in Amman."}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-row gap-3">
            <Link href="/contact">
              <LiquidMetalButton 
                label={
                  <div className="flex items-center gap-3">
                    {lang === "ar" ? "ابدأ مشروعك" : "Start Your Project"}
                    {lang === "ar" ? <MoveLeft className="w-4 h-4" /> : <MoveRight className="w-4 h-4" />}
                  </div>
                }
              />
            </Link>
            <Link href="/portfolio">
              <LiquidButton size="lg" className="h-11 gap-3 text-white rounded-full px-8">
                {lang === "ar" ? "شاهد أعمالنا" : "View Our Work"}
              </LiquidButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
