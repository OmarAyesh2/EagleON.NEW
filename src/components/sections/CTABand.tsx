"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTABand() {
  const { lang } = useLanguage();

  const content = {
    heading: {
      ar: "احصل على عرض سعر مجاني",
      en: "Request a Free Quote"
    },
    subtitle: {
      ar: "كل مشروع يتم تحديد نطاقه حسب احتياجك الفعلي. أخبرنا بأهدافك وسنرسل لك عرض سعر مفصل ومحدد خلال 48 ساعة — بدون رسوم مفاجئة، بدون باقات جاهزة.",
      en: "Every engagement is scoped to what you actually need. Tell us your goals and we'll send a fixed, itemized quote within 48 hours — no surprise fees, no generic packages."
    },
    primaryBtn: {
      ar: "احصل على عرض سعر",
      en: "Request a Free Quote"
    },
    secondaryBtn: {
      ar: "تصفح الأسعار",
      en: "See Pricing"
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden border-t border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6">
            {content.heading[lang]}
          </h2>
          
          <p className="text-brand-gray2 text-lg leading-relaxed mb-10">
            {content.subtitle[lang]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-primary text-black font-semibold text-center transition-all hover:bg-brand-primary/90 hover:shadow-[0_0_20px_rgba(123,193,255,0.3)]"
            >
              {content.primaryBtn[lang]}
            </Link>
            
            <Link 
              href="/pricing" 
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-transparent text-white font-medium text-center border border-white/20 transition-all hover:border-white/50 hover:bg-white/5"
            >
              {content.secondaryBtn[lang]}
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
