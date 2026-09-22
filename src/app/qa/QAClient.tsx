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
    q: { en: "How long does it take to design and develop a website in Jordan?", ar: "كم يستغرق تصميم وبرمجة موقع إلكتروني في الأردن؟" },
    a: { en: "A corporate showcase website typically takes 2 to 4 weeks, while custom e-commerce stores and web applications require 4 to 8 weeks. The exact timeline depends on project scope, content readiness, and custom technical requirements.", ar: "يستغرق الموقع التعريفي للشركات ما بين أسبوعين إلى 4 أسابيع، بينما تتطلب المتاجر الإلكترونية والأنظمة المخصصة من 4 إلى 8 أسابيع. يعتمد الوقت بدقة على حجم المشروع، جاهزية المحتوى، وعدد الخصائص التقنية المطلوبة." }
  },
  {
    id: 2,
    q: { en: "What is the difference between custom web development and ready-made platforms like WordPress or Shopify?", ar: "ما الفرق بين البرمجة المخصصة والمنصات الجاهزة مثل ووردبريس أو شوبيفاي؟" },
    a: { en: "Custom development delivers superior speed, enterprise-grade security, and complete freedom to craft a unique brand experience without platform limitations or recurring plugin fees. Ready-made platforms offer a quick start for simple setups, but often create scalability limits and performance bottlenecks.", ar: "تمنحك البرمجة المخصصة سرعة تحميل فائقة، وأماناً أعلى، وحرية كاملة في بناء تجربة مخصصة لعلامتك التجارية دون قيود برمجية أو رسوم اشتراك شهرية. بينما توفر المنصات الجاهزة حلاً سريعاً لإطلاق المشاريع البسيطة، لكنها تفرض قيوداً على التوسع وتعتمد على إضافات تبطئ الموقع." }
  },
  {
    id: 3,
    q: { en: "Are EagleOn websites mobile-responsive and optimized for speed?", ar: "هل تصاميم المواقع لدى إيجل أون متوافقة مع الهواتف الذكية وسريعة التحميل؟" },
    a: { en: "Yes. All websites are built mobile-first with clean code and rigorous technical optimization to ensure fast load times and seamless responsiveness across all screen sizes, meeting Google's Core Web Vitals standards.", ar: "نعم، تُبنى جميع المواقع بنهج \"الموبايل أولاً\" (Mobile-First)، مع كود نظيف وتجهيز تقني دقيق يضمن سرعة تحميل فائقة وتجربة تصفح سلسة على كافة الشاشات، بالتوافق مع معايير Core Web Vitals من جوجل." }
  },
  {
    id: 4,
    q: { en: "How are local Jordanian payment gateways (CliQ, Zain Cash, credit cards) integrated?", ar: "كيف يتم ربط بوابات الدفع الإلكتروني المحلية في الأردن (CliQ، Zain Cash، البطاقات البنكية)؟" },
    a: { en: "We integrate directly with authorized local and international payment gateways, alongside seamless routing for CliQ payments and mobile digital wallets to facilitate smooth checkouts within Jordan.", ar: "نقوم بالربط البرمجي المباشر مع مزودي خدمات الدفع وبوابات الدفع الإلكتروني المعتمدة محلياً ودولياً، بالإضافة إلى دعم التحويلات عبر نظام كليك (CliQ) ومحافظ الدفع الإلكتروني لتسهيل عمليات الشراء داخل الأردن." }
  },
  {
    id: 5,
    q: { en: "Can I manage and update my website content without technical expertise?", ar: "هل يمكنني إدارة وتعديل محتوى موقعي بنفسي دون خبرة تقنية؟" },
    a: { en: "Yes. We deliver an intuitive, bilingual (Arabic/English) content management dashboard accompanied by a practical onboarding session, allowing you to update copy, media, products, and incoming inquiries independently.", ar: "نعم، يتم تسليم لوحة تحكم مخصصة وسهلة الاستخدام باللغتين العربية والإنجليزية، مع جلسة تدريب عملية تمكنك من تعديل النصوص، الصور، والمنتجات، ومتابعة الطلبات والرسائل بكل سهولة." }
  },
  {
    id: 6,
    q: { en: "How does EagleOn determine the pricing for website and store development?", ar: "كيف يتم تحديد تكلفة تصميم وبرمجة الموقع أو المتجر في إيجل أون؟" },
    a: { en: "We do not offer rigid pricing packages; every project is quoted individually based on brand positioning, functional requirements, technical architecture (custom vs. CMS), and the specific integrations needed.", ar: "لا نعتمد أسعاراً ثابتة مسبقة؛ كل مشروع يُسعّر بشكل مخصص وفق متطلبات علامتك التجارية، عدد الصفحات، نوع البرمجة (مخصصة أو منصات إدارة محتوى)، ومستوى الخصائص والربط البرمجي المطلوب." }
  },
  {
    id: 7,
    q: { en: "How is the budget for digital marketing campaigns and ad management determined?", ar: "كيف تُحدد ميزانية الحملات التسويقية وإدارة الإعلانات في الأردن؟" },
    a: { en: "Management fees are scoped around your growth targets, the number of active marketing channels, and required content deliverables, while paid ad spend is determined by market competition and audience size.", ar: "تُحدد أتعاب الإدارة وفق الأهداف التسويقية، وعدد القنوات الإعلانية المستهدفة، وحجم المحتوى المطلوب إنتاجه، مع تحديد ميزانية الصرف الإعلاني بناءً على حجم المنافسة وطبيعة الجمهور المستهدف." }
  },
  {
    id: 8,
    q: { en: "Are there any hidden fees after signing or project delivery?", ar: "هل توجد أي تكاليف خفية بعد توقيع العقد أو استلام المشروع؟" },
    a: { en: "No. We operate with full financial transparency. Every milestone and deliverable is clearly detailed in the initial scope, and ongoing operational costs (such as domain and cloud hosting renewals) are mapped out in advance.", ar: "لا، نحرص على الشفافية الكاملة. يتضمن عرض العمل تفصيلاً دقيقاً لكل مرحلة ومهمة، وتكون التكاليف الدورية المستقبلية مقتصرة على تجديدات النطاق والاستضافة السحابية وفق ما هو موضح مسبقاً." }
  },
  {
    id: 9,
    q: { en: "How can I get a customized quote for my project?", ar: "كيف أحصل على عرض سعر مخصص لمشروعي؟" },
    a: { en: "You can book an initial discovery session where we discuss your business objectives and review your technical and marketing requirements, after which we deliver a detailed proposal with scope and investment details.", ar: "يمكنك التواصل معنا لحجز جلسة استشارية أولية، نستمع خلالها لأهدافك ونراجع متطلباتك الفنية والتسويقية، ثم نرسل لك عرض عمل تفصيلي يوضح خطة التنفيذ والتكلفة الدقيقة." }
  },
  {
    id: 10,
    q: { en: "What are EagleOn's payment terms and project milestones?", ar: "ما هي آلية وشروط الدفع المعتمدة لدى إيجل أون؟" },
    a: { en: "We work on milestone-based disbursements directly tied to tangible project progress: split between project kickoff, staging and design approvals, and final handover upon official launch.", ar: "نعتمد نظام الدفعات المرحلية المرتبط بالإنجاز والتسليم الفعلي، وتوزع الدفعات بين مرحلة البدء، ومرحلة اعتماد التصاميم وبيئة الاختبار، والدفعة الختامية بعد الفحص والإطلاق الرسمي." }
  },
  {
    id: 11,
    q: { en: "How can my website rank on the first page of Google in Jordan?", ar: "كيف أضمن ظهور موقعي في الصفحة الأولى على جوجل في الأردن؟" },
    a: { en: "Ranking on page one requires a comprehensive SEO roadmap: technical optimization for instant indexing, targeting high-intent local commercial keywords, producing search-driven content, and building authoritative backlinks.", ar: "يتطلب التصدر خطة سيو شاملة تتضمن: تهيئة السيو التقني لسرعة الفهرسة، استهداف الكلمات البحثية التجارية التي يبحث عنها العملاء محلياً، إنتاج محتوى قيم يجيب عن أسئلة الجمهور، وبناء روابط خلفية موثوقة." }
  },
  {
    id: 12,
    q: { en: "How long does SEO take to produce measurable business results?", ar: "كم يستغرق السيو (SEO) لإظهار نتائج ونمو حقيقي للموقع؟" },
    a: { en: "Organic SEO typically yields noticeable ranking improvements and qualified traffic within 3 to 6 months, depending on keyword competition and domain history. Unlike paid ads, organic SEO compounds in value over time.", ar: "يتطلب السيو العضوي عادةً من 3 إلى 6 أشهر لإظهار قفزات واضحة في الترتيب وحركة الزوار، وذلك حسب حجم المنافسة في مجالك وعمر النطاق. السيو استثمار تراكمي مستدام بخلاف الحملات المدفوعة." }
  },
  {
    id: 13,
    q: { en: "What is the difference between Google Ads and organic SEO?", ar: "ما الفرق بين إعلانات جوجل الممولة (Google Ads) والظهور العضوي (SEO)؟" },
    a: { en: "Google Ads provides immediate top-page visibility that lasts only as long as you fund the campaign. SEO builds an enduring digital asset that generates consistent traffic and long-term authority without paying for each click.", ar: "تمنحك إعلانات جوجل ظهوراً فورياً في أعلى النتائج طالما استمر الصرف المالي، وتتوقف فور نفاد الميزانية. أما السيو فهو بناء أصل رقمي مستدام يجلب لك زيارات مستمرة وثقة أعلى على المدى الطويل بدون دفع مقابل كل نقرة." }
  },
  {
    id: 14,
    q: { en: "Do you provide Local SEO services for businesses targeting Amman?", ar: "هل تقدمون خدمات السيو المحلي (Local SEO) للأعمال التي تستهدف عمان؟" },
    a: { en: "Yes. We optimize your Google Business Profile, ensure local directory citation consistency (NAP), and capture localized search queries targeting specific areas across Amman.", ar: "نعم، نعمل على تهيئة وإدارة الملف التجاري على خرائط جوجل (Google Business Profile)، وتوحيد بيانات النشاط (الاسم والعنوان ورقم الهاتف)، وتحسين الكلمات المفتاحية الجغرافية المرتبطة بمناطق عمان المختلفة." }
  },
  {
    id: 15,
    q: { en: "Is technical SEO built into the website prior to launch?", ar: "هل يتم تهيئة الموقع لمعايير السيو التقني قبل إطلاقه؟" },
    a: { en: "Yes. Every site is delivered fully primed for search engines: dynamic XML sitemaps, robots.txt protocols, structured Schema markup, optimized URL structures, and active SSL encryption.", ar: "نعم، نسلم جميع المواقع وهي مهيأة تقنياً بالكامل: خريطة موقع برمجية (sitemap.xml)، ملف robots.txt، هيكلة البيانات المنظمة (Schema Markup)، روابط نظيفة، وشهادات الأمان والتشفير." }
  },
  {
    id: 16,
    q: { en: "What are the best advertising platforms to target the Jordanian market?", ar: "ما هي أفضل المنصات الإعلانية المناسبة لاستهداف السوق الأردني؟" },
    a: { en: "It depends on your industry; Meta (Instagram/Facebook) and TikTok dominate B2C, retail, and direct consumer engagement. For professional services, high-value consulting, and B2B contracts, Google Search Ads and LinkedIn provide the strongest lead quality.", ar: "يعتمد ذلك على نشاطك؛ منصات ميتا (Instagram وFacebook) وتيك توك هي الأكثر فاعلية للمتاجر والمطاعم والخدمات الموجهة للأفراد (B2C). بينما تعد منصات Google Search وLinkedIn الأفضل لخدمات الشركات والصفقات التجارية (B2B)." }
  },
  {
    id: 17,
    q: { en: "How does EagleOn track Return on Investment (ROI) for campaigns?", ar: "كيف تقيس إيجل أون عائد الاستثمار (ROI) للحملات الإعلانية؟" },
    a: { en: "We evaluate performance using tangible business metrics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and conversion rates, all documented via transparent periodic reporting.", ar: "نركز على المؤشرات المالية الحقيقية: تكلفة الاستحواذ على العميل (CAC)، العائد على الإنفاق الإعلاني (ROAS)، ونسبة التحويل إلى مبيعات فعلية أو مكالمات واستفسارات، ونوثقها عبر تقارير دورية واضحة." }
  },
  {
    id: 18,
    q: { en: "Do your marketing services include content creation, graphic design, and video production?", ar: "هل تشمل خدماتكم التسويقية صناعة المحتوى والتصميم وإنتاج الفيديو؟" },
    a: { en: "Yes. Our marketing services cover conversion-focused copywriting, professional brand and social media designs, and short-form video production engineered for engagement and sales.", ar: "نعم، نقدم حلولاً متكاملة تشمل كتابة النصوص الإعلانية (Copywriting)، وتصميم الهويات والمنشورات الاحترافية، ومونتاج وإنتاج الفيديوهات القصيرة (Reels) المصممة لزيادة التفاعل والتحويل." }
  },
  {
    id: 19,
    q: { en: "What is the difference between B2B and B2C marketing strategies?", ar: "ما الفرق بين استراتيجيات التسويق لقطاع الشركات (B2B) وقطاع الأفراد (B2C)؟" },
    a: { en: "B2C marketing focuses on emotional triggers, visual storytelling, and swift buying decisions. B2B marketing centers on establishing industry authority, detailed case studies, and precision targeting of decision-makers.", ar: "يركز تسويق B2C على التأثير البصري المباشر، العروض الترويجية، وسرعة اتخاذ قرار الشراء. بينما يعتمد تسويق B2B على بناء المصداقية المهنية، دراسات الحالة، واستهداف صناع القرار بدقة عبر قنوات متخصصة." }
  },
  {
    id: 20,
    q: { en: "How is ad spend managed for Meta and Google platforms?", ar: "كيف يتم التعامل مع ميزانيات الإعلانات المدفوعة لمنصات ميتا وجوجل؟" },
    a: { en: "Clients fund their ad spend directly to advertising platforms using their own billing profiles. EagleOn charges a separate management fee, ensuring total financial transparency and control.", ar: "يدفع العميل ميزانية الإعلانات مباشرة للمنصات عبر حسابه الإعلاني وبطاقته البنكية، وتتقاضى إيجل أون أتعاب الإدارة والاستراتيجية بشكل منفصل لضمان الشفافية وإبقاء التحكم المالي بيد العميل." }
  },
  {
    id: 21,
    q: { en: "Why choose EagleOn instead of hiring a freelancer?", ar: "لماذا أختار إيجل أون بدلاً من توظيف فريلانسر؟" },
    a: { en: "EagleOn provides a complete multi-disciplinary team covering design, engineering, SEO, and ad operations under one roof, backed by formal service agreements, clear milestones, and dedicated ongoing support.", ar: "توفر إيجل أون فريقاً متعدد التخصصات يغطي التصميم، البرمجة، السيو، وإدارة الحملات تحت سقف واحد، مع التزام مهني بعقود رسمية، ومواعيد تسليم محددة، ودعم فني مستمر لتفادي انقطاع العمل." }
  },
  {
    id: 22,
    q: { en: "What is the process for onboarding and launching a project with EagleOn?", ar: "ما هي الخطوات المتبعة لبدء تنفيذ أي مشروع معكم؟" },
    a: { en: "The process begins with a discovery and requirements session, followed by a formal scope proposal. Upon contract signing, we move to UI/UX design, development, quality assurance testing, and official deployment.", ar: "تبدأ العملية بجلسة تحليل ودراسة للمشروع، يليها إعداد نطاق العمل وعرض السعر، ثم توقيع الاتفاقية والبدء بتصميم تجربة المستخدم (UI/UX)، وصولاً إلى مرحلة البرمجة، الفحص الشامل، والتدشين النهائي." }
  },
  {
    id: 23,
    q: { en: "Do I own the full source code and design assets after project completion?", ar: "هل أمتلك حقوق الكود المصدري والتصاميم بالكامل بعد التسليم؟" },
    a: { en: "Yes. Upon final project settlement, full intellectual property rights, source code, visual assets, and database access are transferred entirely to your ownership without proprietary restrictions.", ar: "نعم، فور استكمال المشروع وسداد الدفعة النهائية، تنتقل كامل حقوق الملكية الفكرية، والتصاميم، والكود المصدري، وقواعد البيانات إليك دون أي شروط تقييدية." }
  },
  {
    id: 24,
    q: { en: "What technical support and maintenance services are provided post-launch?", ar: "ما هي خدمات الدعم الفني والصيانة المقدمة بعد إطلاق الموقع؟" },
    a: { en: "We provide a dedicated post-launch support and warranty period to resolve any technical issues, alongside optional ongoing maintenance retainers covering security monitoring, backups, and framework updates.", ar: "نوفر فترة ضمان ودعم فني بعد التسليم لمعالجة أي ملاحظات برمجية، إلى جانب خطط صيانة دورية اختيارية تشمل النسخ الاحتياطي، المراقبة الأمنية، وتحديثات النظام المستمرة." }
  },
  {
    id: 25,
    q: { en: "Does EagleOn provide services to clients outside Jordan?", ar: "هل تقدم إيجل أون خدماتها لشركات خارج الأردن؟" },
    a: { en: "Yes. We deliver design, custom software engineering, and digital marketing solutions to businesses across the GCC and international markets through streamlined remote collaboration and project management systems.", ar: "نعم، نقدم خدمات التصميم، التطوير البرمجي، والتسويق الرقمي لشركات ومشاريع في دول الخليج العربي والأسواق الإقليمية والدولية، مع إدارة تواصل ومشاريع رقمية منظمة وفعالة." }
  }
];

export default function QAClient() {
  const { lang, isRtl } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="min-h-[100dvh] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: QA_DATA.map((item) => ({
              "@type": "Question",
              name: item.q.en,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a.en,
              },
            })),
          }),
        }}
      />
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
