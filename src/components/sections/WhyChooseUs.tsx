"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { lang } = useLanguage();

  const content = {
    heading: {
      ar: "لماذا تختارنا؟",
      en: "WHY CHOOSE US?"
    },
    cards: [
      {
        num: "01",
        title: {
          ar: "تصميم بهدف واضح",
          en: "Design with a Purpose"
        },
        description: {
          ar: "ما نسوي تصاميم عشوائية بس عشان تطلع حلوة. كل عنصر من التخطيط والأزرار ومسار المستخدم مبني عشان يوجه زوارك بالضبط للمكان اللي تبيهم يوصلون له.",
          en: "We don't create visual gimmicks just to look pretty. Every layout, button, and user path is built to guide your visitors exactly where you want them to go."
        }
      },
      {
        num: "02",
        title: {
          ar: "جودة عالمية المستوى",
          en: "World-Class Quality"
        },
        description: {
          ar: "الكود المخصص والتصاميم ثلاثية الأبعاد عندنا بنفس مستوى أكبر بيوت الإنتاج العالمية. تحصل على تنفيذ احترافي بمعايير استوديو بدون أي تنازلات.",
          en: "Our custom code and 3D renders match the caliber of top-tier international production houses. You get elite, studio-grade execution without any compromises."
        }
      },
      {
        num: "03",
        title: {
          ar: "مبني ليكون منطقي",
          en: "Built to Make Sense"
        },
        description: {
          ar: "نشيل كل الزوائد السطحية اللي تبطئ المواقع. نركز بس على بناء أنظمة سريعة وآمنة ومستقرة تحمي بياناتك وتساعدك تتوسع.",
          en: "We get rid of the superficial fluff that slows websites down. We focus purely on building fast, secure, and stable systems that protect your data and help you scale."
        }
      },
      {
        num: "04",
        title: {
          ar: "هندسة صريحة وصادقة",
          en: "Blunt, Honest Engineering"
        },
        description: {
          ar: "ما نقبل الأوامر بشكل أعمى. إذا خطتك التقنية فيها خلل هيكلي راح ينكسر تحت الضغط لاحقاً، بنقولك مباشرة ونعطيك الحل الصحيح.",
          en: "We aren't blind order-takers. If your technical plan has a structural flaw that will break under pressure later, we will call it out immediately and give you the right fix."
        }
      }
    ]
  };

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
            {content.heading[lang]}
          </h2>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {content.cards.map((card, index) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/5 group"
            >
              <div className="text-brand-primary font-mono text-sm uppercase tracking-widest transition-colors duration-300">
                {card.num}
              </div>
              <h3 className="text-white font-bold text-xl md:text-2xl mt-3 transition-colors duration-300 group-hover:text-brand-primary">
                {card.title[lang]}
              </h3>
              <p className="text-brand-gray2 text-[14.5px] leading-relaxed mt-3">
                {card.description[lang]}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
