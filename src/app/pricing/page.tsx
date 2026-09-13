"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function PricingPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-[100dvh] flex flex-col text-white">
      <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center w-full"
        >
          <span className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-6 block">
            {lang === "ar" ? "الأسعار" : "PRICING"}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-8">
            {lang === "ar" ? "لا نقدم أسعاراً ثابتة." : "WE DON'T DO FIXED PRICES."}
          </h1>
          
          <p className="text-brand-gray2 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            {lang === "ar"
              ? "كل مشروع هو أصل رقمي فريد يُبنى لحل مشاكل عمل محددة. نحن لا نبيع قوالب جاهزة، وليس لدينا قائمة أسعار ثابتة. إذا كنت تبحث عن وكالة رخيصة تعتمد على النسخ واللصق بأسعار ثابتة، فهذا ليس المكان المناسب."
              : "Every project is a unique digital asset built to solve specific business problems. We don't sell templates, and we don't have a fixed menu. If you are looking for a cheap, copy-paste agency with a flat-rate price tag, you are in the wrong place."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link 
              href="/contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 rtl:pt-2.5 rtl:pb-1.5 bg-brand-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-brand-primary/90 transition-all hover:shadow-[0_0_30px_rgba(123,193,255,0.4)] w-full sm:w-auto"
            >
              <span>{lang === "ar" ? "اطلب تسعيرة مخصصة" : "Request a Custom Quote"}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>

            <a 
              href={lang === 'ar' ? 'https://www.google.com/search?q=شركات+تسويق+رخيصة' : 'https://www.google.com/search?q=cheap+marketing+agencies'}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rtl:pt-2.5 rtl:pb-1.5 bg-transparent border border-white/20 text-brand-gray2 font-bold uppercase tracking-wider rounded-full hover:bg-white/5 hover:text-white hover:border-white/40 transition-all w-full sm:w-auto"
            >
              <Search className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span>{lang === "ar" ? "ابحث عن وكالة رخيصة" : "Search for a cheap agency"}</span>
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
