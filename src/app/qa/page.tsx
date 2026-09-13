"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import CTABand from "@/components/sections/CTABand";

const QA_DATA = [
  {
    id: 1,
    q: { en: "Placeholder Question 1", ar: "سؤال تجريبي ١" },
    a: { en: "Placeholder answer goes here. You can replace this later.", ar: "هنا توضع الإجابة. يمكنك تعديل هذا النص لاحقاً." }
  },
  {
    id: 2,
    q: { en: "Placeholder Question 2", ar: "سؤال تجريبي ٢" },
    a: { en: "Placeholder answer goes here. You can replace this later.", ar: "هنا توضع الإجابة. يمكنك تعديل هذا النص لاحقاً." }
  },
  {
    id: 3,
    q: { en: "Placeholder Question 3", ar: "سؤال تجريبي ٣" },
    a: { en: "Placeholder answer goes here. You can replace this later.", ar: "هنا توضع الإجابة. يمكنك تعديل هذا النص لاحقاً." }
  },
];

export default function QAPage() {
  const { lang, isRtl } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="min-h-[100dvh] text-white">
      <div className="pt-40 pb-24 px-4 md:px-8 max-w-4xl mx-auto text-start">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-4">
            {lang === "ar" ? "الأسئلة الشائعة" : "FAQ"}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6 leading-none">
            {lang === "ar" ? "أسئلة وأجوبة" : "QUESTIONS & ANSWERS"}
          </h1>
          <p className="text-brand-gray2 text-lg mb-16 max-w-2xl">
            {lang === "ar"
              ? "كل ما تحتاج لمعرفته حول طريقة عملنا، مراحل التنفيذ، وما يمكنك توقعه."
              : "Everything you need to know about how we work, our process, and what to expect."}
          </p>
        </motion.div>

        {/* Accordion Section */}
        <div className="flex flex-col">
          {QA_DATA.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10 py-6 first:border-t"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between text-start gap-4 focus:outline-none"
                >
                  <span className={cn(
                    "text-lg md:text-xl font-medium transition-colors",
                    isOpen ? "text-brand-primary" : "text-white hover:text-brand-primary"
                  )}>
                    {item.q[lang]}
                  </span>
                  {isOpen ? (
                    <Minus className="text-brand-primary shrink-0 w-6 h-6" />
                  ) : (
                    <Plus className="text-white/50 shrink-0 w-6 h-6" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-brand-gray2 pt-4 leading-relaxed">
                        {item.a[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CTABand />
    </div>
  );
}
