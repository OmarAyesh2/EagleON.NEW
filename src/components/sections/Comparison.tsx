"use client";

import { motion } from "framer-motion";
import { Check, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Comparison() {
  const { lang } = useLanguage();

  const content = {
    heading: {
      ar: "لماذا لا نستخدم القوالب الجاهزة؟",
      en: "THE ANTI TEMPLATE APPROACH"
    },
    subtitle: {
      ar: "لماذا الحلول الجاهزة تفشل في تحقيق نتائج استراتيجية حقيقية.",
      en: "Why generic solutions fail to deliver strategic results in the modern B2B landscape."
    },
    trap: {
      title: { ar: "فخ القوالب الجاهزة", en: "The Template Trap" },
      items: [
        { ar: "حماية ضعيفة من إضافات رخيصة وجاهزة", en: "Weak security from cheap, premade plugins" },
        { ar: "سرعة تحميل بطيئة تخسرك عملاءك", en: "Slow loading speeds that lose you customers" },
        { ar: "تصاميم جامدة يصعب تعديلها أو توسيعها لاحقاً", en: "Rigid layouts that are hard to change or expand later" },
        { ar: "تصاميم مكررة ومملة تشبه أي موقع آخر", en: "Boring, copy paste designs that look like everyone else" }
      ],
      footer: { ar: "الحالة: تم اكتشاف عنق الزجاجة", en: "Status: Bottleneck Detected" }
    },
    custom: {
      title: { ar: "بناء EagleOn المخصص", en: "EagleOn Custom Build" },
      items: [
        { ar: "حماية متينة مبنية من الصفر خصيصاً لك", en: "Solid, custom built security from scratch" },
        { ar: "مرونة 100% لإضافة أي ميزة في أي وقت", en: "100% flexible to add any new feature anytime" },
        { ar: "تصميم فريد مصمم ليكسبك عملاء جدد", en: "Unique, custom design built to win you clients" },
        { ar: "أداء خارق وسرعة تحميل فورية", en: "Lightning fast performance and instant loading" }
      ],
      footer: { ar: "الأداء: 100%", en: "Performance: 100%" }
    }
  };

  return (
    <section className="relative w-full py-10 lg:py-20 px-4 md:px-10 overflow-hidden">
      <div className="relative w-full bg-[#0a0a0f] rounded-3xl md:rounded-[3rem] py-16 md:py-32 overflow-hidden border border-white/5 shadow-2xl">
        
        {/* Diagonal Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-brand-primary/10 pointer-events-none" />
        
        {/* Radial Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)' }} />

        {/* Animated Grid on Right Half */}
        <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none" style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}>
          <div className="w-[200%] h-full animate-grid-scroll opacity-20" style={{ backgroundImage: 'linear-gradient(to right, rgba(123, 193, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(123, 193, 255, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Noise Texture on Left Half */}
        <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-20 mix-blend-overlay" style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)', backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase">
              {content.heading[lang]}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {content.subtitle[lang]}
            </p>
          </motion.div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
            
            {/* LEFT CARD: The Template Trap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl p-1 bg-gradient-to-b from-red-900/20 to-transparent"
            >
              <div className="relative flex flex-col h-full bg-black/40 backdrop-blur-sm rounded-[22px] border border-red-500/10 p-6 md:p-12 overflow-hidden">
                {/* TV Static Overlay */}
                <div 
                  className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" 
                  style={{ 
                    backgroundImage: 'url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'color-dodge'
                  }} 
                />
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-mono font-bold text-2xl text-white mb-4">
                    {content.trap.title[lang]}
                  </h3>
                  <div className="h-0.5 w-12 bg-red-900/50 mb-10" />
                  
                  <ul className="space-y-6 flex-1">
                    {content.trap.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="shrink-0 mt-1 text-red-900 font-bold font-mono text-sm leading-relaxed">[ERR]</span>
                        <span className="text-brand-gray2 font-mono text-sm leading-relaxed">{item[lang]}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="mt-12 pt-6 border-t border-red-900/20">
                    <span className="text-red-800 text-xs font-mono uppercase tracking-widest">
                      {content.trap.footer[lang]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD: EagleOn Custom Build */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-blue-600 to-brand-primary rounded-3xl blur opacity-30 pointer-events-none" />
              
              <div className="relative flex flex-col h-full bg-[#0a0a0f] rounded-3xl border border-white/10 p-6 md:p-12">
                <div className="mb-8 w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(123,193,255,0.15)] text-brand-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                
                <h3 className="font-bold text-3xl text-white mb-4">
                  {content.custom.title[lang]}
                </h3>
                <div className="h-1 w-20 bg-brand-primary mb-10 shadow-[0_0_10px_rgba(123,193,255,0.5)]" />
                
                <ul className="space-y-6 flex-1">
                  {content.custom.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20">
                        <Check className="w-4 h-4 text-black" strokeWidth={3} />
                      </div>
                      <span className="text-white font-medium text-lg leading-relaxed">{item[lang]}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-brand-primary text-xs font-mono uppercase tracking-widest">
                    {content.custom.footer[lang]}
                  </span>
                  <div className="flex gap-1.5 items-end h-4">
                    <div className="w-1 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)]" />
                    <div className="w-1 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)]" />
                    <div className="w-1 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)]" />
                    <div className="w-1 h-3.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)] animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
