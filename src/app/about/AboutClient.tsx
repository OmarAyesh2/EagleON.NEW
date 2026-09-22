"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import CTABand from "@/components/sections/CTABand";

export default function AboutClient() {
  const { lang, isRtl } = useLanguage();

  return (
    <div className="min-h-[100dvh] text-white overflow-hidden">
      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <div className="overflow-hidden py-2">
            <motion.h1 
              initial={{ x: isRtl ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-tight leading-tight"
            >
              {lang === "ar" ? "كفاءة تقنية." : "TECHNICAL PRECISION."}
            </motion.h1>
          </div>
          <div className="overflow-hidden py-2">
            <motion.h1 
              initial={{ x: isRtl ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-tight leading-tight"
            >
              {lang === "ar" ? "تميز بصري." : "VISUAL DOMINANCE."}
            </motion.h1>
          </div>
        </div>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="w-24 h-[2px] bg-brand-primary my-8 origin-left rtl:origin-right"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-brand-gray2 max-w-2xl text-start"
        >
          {lang === "ar" 
            ? "من عمّان، الأردن، نجمع بين البرمجة المخصصة والإنتاج الإبداعي الفائق لنبني مشاريع رقمية متكاملة تعمل بكفاءة مطلقة."
            : "Based in Amman, Jordan, we bring custom software development and elite visual production under one roof to build digital products that perform flawlessly."}
        </motion.p>
      </section>

      {/* SECTION 2: THE STORY (Mission & Approach) */}
      <section className="w-full py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Block 1 — Our Mission */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-3xl text-start"
          >
            <div className="absolute top-[-40px] rtl:right-0 ltr:left-0 text-[12rem] md:text-[16rem] font-bold text-white/[0.03] leading-none pointer-events-none select-none">
              01
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                {lang === "ar" ? "قصتنا" : "Our Mission"}
              </h2>
              <p className="text-base md:text-lg text-brand-gray2 leading-relaxed">
                {lang === "ar" ? (
                  <>
                    تأسست Eagleon لإنهاء عصر القوالب الجاهزة، الأكواد الضعيفة، والتصاميم المستهلكة. لقد سددنا الفجوة بين الهندسة البرمجية الدقيقة والإنتاج البصري الاحترافي. سواء كنا نكتب كوداً مخصصاً وقابلاً للتوسع أو نصنع أصولاً بصرية بجودة عالمية، نحن نبني منصات رقمية تمنح مشروعك <span className="text-brand-primary font-medium">الأفضلية الكاملة</span> في السوق.
                  </>
                ) : (
                  <>
                    Eagleon was started with a clear goal: to eliminate lazy templates, fragile code, and cookie cutter designs. We bridge the gap between heavy technical engineering and high end creative production. Whether we are writing clean, scalable code or rendering studio grade visuals, we build custom digital assets designed to give your business an <span className="text-brand-primary font-medium">undeniable edge</span>.
                  </>
                )}
              </p>
            </div>
          </motion.div>

          <div className="h-24 lg:h-32" />

          {/* Block 2 — Our Approach */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-3xl ltr:ml-auto rtl:mr-auto text-start"
          >
            <div className="absolute top-[-40px] rtl:left-0 ltr:right-0 text-[12rem] md:text-[16rem] font-bold text-white/[0.03] leading-none pointer-events-none select-none">
              02
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                {lang === "ar" ? "أسلوبنا" : "Our Approach"}
              </h2>
              <p className="text-base md:text-lg text-brand-gray2 leading-relaxed">
                {lang === "ar" ? (
                  <>
                    نؤمن بأن حضورك الرقمي يجب أن يظهر بشكل مذهل ويعمل بكفاءة فائقة في نفس الوقت. لا نعتمد على برمجيات ممتلئة بالملفات الزائدة أو حلول جاهزة مكررة، بل نركز تماماً على الأمان العالي، <span className="text-brand-primary font-medium">سرعة التحميل الفائقة</span>، والتنفيذ المخصص الذي يخدم أهداف عملك بشكل مباشر وعملي.
                  </>
                ) : (
                  <>
                    We believe your digital presence should look incredible and work flawlessly at the same time. No bloated code, no recycled design shortcuts, and no agency jargon. We focus strictly on absolute data security, <span className="text-brand-primary font-medium">sub second loading speeds</span>, and bespoke visual execution tailored directly to your business goals.
                  </>
                )}
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="w-full py-24 lg:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wider">
          {lang === "ar" ? "قيمنا الجوهرية" : "Core Values"}
        </h2>
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex gap-8 px-4 md:px-8 py-8 min-w-max mx-auto">
            {[
              {
                title: { ar: "الإبداع المحسوب", en: "Calculated Creativity" },
                desc: { ar: "أفكار تنطلق من تحليل دقيق.", en: "Ideas stemming from precise analysis." }
              },
              {
                title: { ar: "الدقة الهندسية", en: "Engineering Precision" },
                desc: { ar: "الدقة هي أساس التميز.", en: "Precision is the foundation of excellence." }
              },
              {
                title: { ar: "الشمولية في الرؤية", en: "Holistic Vision" },
                desc: { ar: "رؤية تربط كل العناصر الرقمية.", en: "Connecting all digital presence elements." }
              },
              {
                title: { ar: "الجرأة في التنفيذ", en: "Bold Execution" },
                desc: { ar: "نسبق السوق بخطوة.", en: "Staying ahead of the market." }
              },
              {
                title: { ar: "الموثوقية المطلقة", en: "Absolute Reliability" },
                desc: { ar: "معايير تشغيل ثابتة، ليست وعوداً.", en: "Fixed operational standards, not promises." }
              }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-[280px] md:w-[320px] ltr:border-l-2 rtl:border-r-2 ltr:border-brand-primary rtl:border-brand-primary ltr:pl-6 rtl:pr-6"
              >
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">{val.title[lang]}</h3>
                <p className="text-sm text-brand-gray2">{val.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE EAGLEON */}
      <section className="w-full py-24 lg:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 lg:mb-24 uppercase tracking-wider">
            {lang === "ar" ? "لماذا تختار EAGLEON؟" : "WHY CHOOSE EAGLEON?"}
          </h2>

          <div className="flex flex-col">
            {[
              {
                title: { ar: "تصميم يهدف للنتيجة", en: "Design with a Purpose" },
                desc: {
                  ar: "لا نصمم لمجرد المظهر الجمالي. كل صفحة وزر نضعه مبني بهدف واضح: توجيه زوارك للشراء أو التواصل معك مباشرة بدون تشتيت",
                  en: "We don't create visual gimmicks just to look pretty. Every layout, button, and user path is built to guide your visitors exactly where you want them to go."
                }
              },
              {
                title: { ar: "جودة بمستوى عالمي", en: "World Class Quality" },
                desc: {
                  ar: "برمجتنا المخصصة وتصاميم الـ CGI لدينا تضاهي أعمال أكبر الاستوديوهات العالمية. ستحصل على جودة تنفيذ احترافية تنافس على أي مستوى",
                  en: "Our custom code and 3D renders match the caliber of top tier international production houses. You get elite, studio grade execution without any compromises."
                }
              },
              {
                title: { ar: "أنظمة عملية ومستقرة", en: "Built to Make Sense" },
                desc: {
                  ar: "نتخلص من التعقيدات الزائدة التي تبطئ الأداء. نركز بالكامل على بناء أنظمة سريعة، آمنة، ومحمية تحمي بياناتك وتساعدك على التوسع الفعلي",
                  en: "We get rid of the superficial fluff that slows websites down. We focus purely on building fast, secure, and stable systems that protect your data and help you scale."
                }
              },
              {
                title: { ar: "شفافية تقنية مطلقة", en: "Blunt, Honest Engineering" },
                desc: {
                  ar: "لسنا مجرد منفذين للأوامر. إذا وجدنا أي مشكلة أو ثغرة في خطتك التقنية قد تعطل مشروعك مستقبلاً، سنخبرك بها فوراً ونعطيك الحل الصحيح مباشرة",
                  en: "We aren't blind order takers. If your technical plan has a structural flaw that will break under pressure later, we will call it out immediately and give you the right fix."
                }
              }
            ].map((item, idx) => {
              const isEven = idx % 2 === 1; // 0-based index, so index 1 is the 2nd item
              return (
                <div key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                  >
                    <div className={isEven ? "lg:order-2 text-start" : "text-start"}>
                      <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">{item.title[lang]}</h3>
                    </div>
                    <div className={isEven ? "lg:order-1 text-start" : "text-start"}>
                      <p className="text-base md:text-lg text-brand-gray2 leading-relaxed">
                        {item.desc[lang]}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Separator, except after the last item */}
                  {idx < 3 && (
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent my-12 lg:my-16" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <CTABand />
    </div>
  );
}
