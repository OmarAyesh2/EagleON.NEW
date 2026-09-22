(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/CTABand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTABand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CTABand() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-24 md:py-32 overflow-hidden border-t border-white/5 bg-white/[0.02]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.6
                },
                className: "max-w-3xl mx-auto text-center flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6",
                        children: content.heading[lang]
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CTABand.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-brand-gray2 text-lg leading-relaxed mb-10",
                        children: content.subtitle[lang]
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CTABand.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "w-full sm:w-auto px-8 py-3 rounded-full bg-brand-primary text-black font-semibold text-center transition-all hover:bg-brand-primary/90 hover:shadow-[0_0_20px_rgba(123,193,255,0.3)]",
                                children: content.primaryBtn[lang]
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/CTABand.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "w-full sm:w-auto px-8 py-3 rounded-full bg-transparent text-white font-medium text-center border border-white/20 transition-all hover:border-white/50 hover:bg-white/5",
                                children: content.secondaryBtn[lang]
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/CTABand.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/CTABand.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/CTABand.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/CTABand.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/CTABand.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(CTABand, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = CTABand;
var _c;
__turbopack_context__.k.register(_c, "CTABand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/qa/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QAPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$CTABand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/CTABand.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const QA_DATA = [
    {
        id: 1,
        q: {
            en: "How long does it take to design and develop a website in Jordan?",
            ar: "كم يستغرق تصميم وبرمجة موقع إلكتروني في الأردن؟"
        },
        a: {
            en: "A corporate showcase website typically takes 2 to 4 weeks, while custom e-commerce stores and web applications require 4 to 8 weeks. The exact timeline depends on project scope, content readiness, and custom technical requirements.",
            ar: "يستغرق الموقع التعريفي للشركات ما بين أسبوعين إلى 4 أسابيع، بينما تتطلب المتاجر الإلكترونية والأنظمة المخصصة من 4 إلى 8 أسابيع. يعتمد الوقت بدقة على حجم المشروع، جاهزية المحتوى، وعدد الخصائص التقنية المطلوبة."
        }
    },
    {
        id: 2,
        q: {
            en: "What is the difference between custom web development and ready-made platforms like WordPress or Shopify?",
            ar: "ما الفرق بين البرمجة المخصصة والمنصات الجاهزة مثل ووردبريس أو شوبيفاي؟"
        },
        a: {
            en: "Custom development delivers superior speed, enterprise-grade security, and complete freedom to craft a unique brand experience without platform limitations or recurring plugin fees. Ready-made platforms offer a quick start for simple setups, but often create scalability limits and performance bottlenecks.",
            ar: "تمنحك البرمجة المخصصة سرعة تحميل فائقة، وأماناً أعلى، وحرية كاملة في بناء تجربة مخصصة لعلامتك التجارية دون قيود برمجية أو رسوم اشتراك شهرية. بينما توفر المنصات الجاهزة حلاً سريعاً لإطلاق المشاريع البسيطة، لكنها تفرض قيوداً على التوسع وتعتمد على إضافات تبطئ الموقع."
        }
    },
    {
        id: 3,
        q: {
            en: "Are EagleOn websites mobile-responsive and optimized for speed?",
            ar: "هل تصاميم المواقع لدى إيجل أون متوافقة مع الهواتف الذكية وسريعة التحميل؟"
        },
        a: {
            en: "Yes. All websites are built mobile-first with clean code and rigorous technical optimization to ensure fast load times and seamless responsiveness across all screen sizes, meeting Google's Core Web Vitals standards.",
            ar: "نعم، تُبنى جميع المواقع بنهج \"الموبايل أولاً\" (Mobile-First)، مع كود نظيف وتجهيز تقني دقيق يضمن سرعة تحميل فائقة وتجربة تصفح سلسة على كافة الشاشات، بالتوافق مع معايير Core Web Vitals من جوجل."
        }
    },
    {
        id: 4,
        q: {
            en: "How are local Jordanian payment gateways (CliQ, Zain Cash, credit cards) integrated?",
            ar: "كيف يتم ربط بوابات الدفع الإلكتروني المحلية في الأردن (CliQ، Zain Cash، البطاقات البنكية)؟"
        },
        a: {
            en: "We integrate directly with authorized local and international payment gateways, alongside seamless routing for CliQ payments and mobile digital wallets to facilitate smooth checkouts within Jordan.",
            ar: "نقوم بالربط البرمجي المباشر مع مزودي خدمات الدفع وبوابات الدفع الإلكتروني المعتمدة محلياً ودولياً، بالإضافة إلى دعم التحويلات عبر نظام كليك (CliQ) ومحافظ الدفع الإلكتروني لتسهيل عمليات الشراء داخل الأردن."
        }
    },
    {
        id: 5,
        q: {
            en: "Can I manage and update my website content without technical expertise?",
            ar: "هل يمكنني إدارة وتعديل محتوى موقعي بنفسي دون خبرة تقنية؟"
        },
        a: {
            en: "Yes. We deliver an intuitive, bilingual (Arabic/English) content management dashboard accompanied by a practical onboarding session, allowing you to update copy, media, products, and incoming inquiries independently.",
            ar: "نعم، يتم تسليم لوحة تحكم مخصصة وسهلة الاستخدام باللغتين العربية والإنجليزية، مع جلسة تدريب عملية تمكنك من تعديل النصوص، الصور، والمنتجات، ومتابعة الطلبات والرسائل بكل سهولة."
        }
    },
    {
        id: 6,
        q: {
            en: "How does EagleOn determine the pricing for website and store development?",
            ar: "كيف يتم تحديد تكلفة تصميم وبرمجة الموقع أو المتجر في إيجل أون؟"
        },
        a: {
            en: "We do not offer rigid pricing packages; every project is quoted individually based on brand positioning, functional requirements, technical architecture (custom vs. CMS), and the specific integrations needed.",
            ar: "لا نعتمد أسعاراً ثابتة مسبقة؛ كل مشروع يُسعّر بشكل مخصص وفق متطلبات علامتك التجارية، عدد الصفحات، نوع البرمجة (مخصصة أو منصات إدارة محتوى)، ومستوى الخصائص والربط البرمجي المطلوب."
        }
    },
    {
        id: 7,
        q: {
            en: "How is the budget for digital marketing campaigns and ad management determined?",
            ar: "كيف تُحدد ميزانية الحملات التسويقية وإدارة الإعلانات في الأردن؟"
        },
        a: {
            en: "Management fees are scoped around your growth targets, the number of active marketing channels, and required content deliverables, while paid ad spend is determined by market competition and audience size.",
            ar: "تُحدد أتعاب الإدارة وفق الأهداف التسويقية، وعدد القنوات الإعلانية المستهدفة، وحجم المحتوى المطلوب إنتاجه، مع تحديد ميزانية الصرف الإعلاني بناءً على حجم المنافسة وطبيعة الجمهور المستهدف."
        }
    },
    {
        id: 8,
        q: {
            en: "Are there any hidden fees after signing or project delivery?",
            ar: "هل توجد أي تكاليف خفية بعد توقيع العقد أو استلام المشروع؟"
        },
        a: {
            en: "No. We operate with full financial transparency. Every milestone and deliverable is clearly detailed in the initial scope, and ongoing operational costs (such as domain and cloud hosting renewals) are mapped out in advance.",
            ar: "لا، نحرص على الشفافية الكاملة. يتضمن عرض العمل تفصيلاً دقيقاً لكل مرحلة ومهمة، وتكون التكاليف الدورية المستقبلية مقتصرة على تجديدات النطاق والاستضافة السحابية وفق ما هو موضح مسبقاً."
        }
    },
    {
        id: 9,
        q: {
            en: "How can I get a customized quote for my project?",
            ar: "كيف أحصل على عرض سعر مخصص لمشروعي؟"
        },
        a: {
            en: "You can book an initial discovery session where we discuss your business objectives and review your technical and marketing requirements, after which we deliver a detailed proposal with scope and investment details.",
            ar: "يمكنك التواصل معنا لحجز جلسة استشارية أولية، نستمع خلالها لأهدافك ونراجع متطلباتك الفنية والتسويقية، ثم نرسل لك عرض عمل تفصيلي يوضح خطة التنفيذ والتكلفة الدقيقة."
        }
    },
    {
        id: 10,
        q: {
            en: "What are EagleOn's payment terms and project milestones?",
            ar: "ما هي آلية وشروط الدفع المعتمدة لدى إيجل أون؟"
        },
        a: {
            en: "We work on milestone-based disbursements directly tied to tangible project progress: split between project kickoff, staging and design approvals, and final handover upon official launch.",
            ar: "نعتمد نظام الدفعات المرحلية المرتبط بالإنجاز والتسليم الفعلي، وتوزع الدفعات بين مرحلة البدء، ومرحلة اعتماد التصاميم وبيئة الاختبار، والدفعة الختامية بعد الفحص والإطلاق الرسمي."
        }
    },
    {
        id: 11,
        q: {
            en: "How can my website rank on the first page of Google in Jordan?",
            ar: "كيف أضمن ظهور موقعي في الصفحة الأولى على جوجل في الأردن؟"
        },
        a: {
            en: "Ranking on page one requires a comprehensive SEO roadmap: technical optimization for instant indexing, targeting high-intent local commercial keywords, producing search-driven content, and building authoritative backlinks.",
            ar: "يتطلب التصدر خطة سيو شاملة تتضمن: تهيئة السيو التقني لسرعة الفهرسة، استهداف الكلمات البحثية التجارية التي يبحث عنها العملاء محلياً، إنتاج محتوى قيم يجيب عن أسئلة الجمهور، وبناء روابط خلفية موثوقة."
        }
    },
    {
        id: 12,
        q: {
            en: "How long does SEO take to produce measurable business results?",
            ar: "كم يستغرق السيو (SEO) لإظهار نتائج ونمو حقيقي للموقع؟"
        },
        a: {
            en: "Organic SEO typically yields noticeable ranking improvements and qualified traffic within 3 to 6 months, depending on keyword competition and domain history. Unlike paid ads, organic SEO compounds in value over time.",
            ar: "يتطلب السيو العضوي عادةً من 3 إلى 6 أشهر لإظهار قفزات واضحة في الترتيب وحركة الزوار، وذلك حسب حجم المنافسة في مجالك وعمر النطاق. السيو استثمار تراكمي مستدام بخلاف الحملات المدفوعة."
        }
    },
    {
        id: 13,
        q: {
            en: "What is the difference between Google Ads and organic SEO?",
            ar: "ما الفرق بين إعلانات جوجل الممولة (Google Ads) والظهور العضوي (SEO)؟"
        },
        a: {
            en: "Google Ads provides immediate top-page visibility that lasts only as long as you fund the campaign. SEO builds an enduring digital asset that generates consistent traffic and long-term authority without paying for each click.",
            ar: "تمنحك إعلانات جوجل ظهوراً فورياً في أعلى النتائج طالما استمر الصرف المالي، وتتوقف فور نفاد الميزانية. أما السيو فهو بناء أصل رقمي مستدام يجلب لك زيارات مستمرة وثقة أعلى على المدى الطويل بدون دفع مقابل كل نقرة."
        }
    },
    {
        id: 14,
        q: {
            en: "Do you provide Local SEO services for businesses targeting Amman?",
            ar: "هل تقدمون خدمات السيو المحلي (Local SEO) للأعمال التي تستهدف عمان؟"
        },
        a: {
            en: "Yes. We optimize your Google Business Profile, ensure local directory citation consistency (NAP), and capture localized search queries targeting specific areas across Amman.",
            ar: "نعم، نعمل على تهيئة وإدارة الملف التجاري على خرائط جوجل (Google Business Profile)، وتوحيد بيانات النشاط (الاسم والعنوان ورقم الهاتف)، وتحسين الكلمات المفتاحية الجغرافية المرتبطة بمناطق عمان المختلفة."
        }
    },
    {
        id: 15,
        q: {
            en: "Is technical SEO built into the website prior to launch?",
            ar: "هل يتم تهيئة الموقع لمعايير السيو التقني قبل إطلاقه؟"
        },
        a: {
            en: "Yes. Every site is delivered fully primed for search engines: dynamic XML sitemaps, robots.txt protocols, structured Schema markup, optimized URL structures, and active SSL encryption.",
            ar: "نعم، نسلم جميع المواقع وهي مهيأة تقنياً بالكامل: خريطة موقع برمجية (sitemap.xml)، ملف robots.txt، هيكلة البيانات المنظمة (Schema Markup)، روابط نظيفة، وشهادات الأمان والتشفير."
        }
    },
    {
        id: 16,
        q: {
            en: "What are the best advertising platforms to target the Jordanian market?",
            ar: "ما هي أفضل المنصات الإعلانية المناسبة لاستهداف السوق الأردني؟"
        },
        a: {
            en: "It depends on your industry; Meta (Instagram/Facebook) and TikTok dominate B2C, retail, and direct consumer engagement. For professional services, high-value consulting, and B2B contracts, Google Search Ads and LinkedIn provide the strongest lead quality.",
            ar: "يعتمد ذلك على نشاطك؛ منصات ميتا (Instagram وFacebook) وتيك توك هي الأكثر فاعلية للمتاجر والمطاعم والخدمات الموجهة للأفراد (B2C). بينما تعد منصات Google Search وLinkedIn الأفضل لخدمات الشركات والصفقات التجارية (B2B)."
        }
    },
    {
        id: 17,
        q: {
            en: "How does EagleOn track Return on Investment (ROI) for campaigns?",
            ar: "كيف تقيس إيجل أون عائد الاستثمار (ROI) للحملات الإعلانية؟"
        },
        a: {
            en: "We evaluate performance using tangible business metrics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and conversion rates, all documented via transparent periodic reporting.",
            ar: "نركز على المؤشرات المالية الحقيقية: تكلفة الاستحواذ على العميل (CAC)، العائد على الإنفاق الإعلاني (ROAS)، ونسبة التحويل إلى مبيعات فعلية أو مكالمات واستفسارات، ونوثقها عبر تقارير دورية واضحة."
        }
    },
    {
        id: 18,
        q: {
            en: "Do your marketing services include content creation, graphic design, and video production?",
            ar: "هل تشمل خدماتكم التسويقية صناعة المحتوى والتصميم وإنتاج الفيديو؟"
        },
        a: {
            en: "Yes. Our marketing services cover conversion-focused copywriting, professional brand and social media designs, and short-form video production engineered for engagement and sales.",
            ar: "نعم، نقدم حلولاً متكاملة تشمل كتابة النصوص الإعلانية (Copywriting)، وتصميم الهويات والمنشورات الاحترافية، ومونتاج وإنتاج الفيديوهات القصيرة (Reels) المصممة لزيادة التفاعل والتحويل."
        }
    },
    {
        id: 19,
        q: {
            en: "What is the difference between B2B and B2C marketing strategies?",
            ar: "ما الفرق بين استراتيجيات التسويق لقطاع الشركات (B2B) وقطاع الأفراد (B2C)؟"
        },
        a: {
            en: "B2C marketing focuses on emotional triggers, visual storytelling, and swift buying decisions. B2B marketing centers on establishing industry authority, detailed case studies, and precision targeting of decision-makers.",
            ar: "يركز تسويق B2C على التأثير البصري المباشر، العروض الترويجية، وسرعة اتخاذ قرار الشراء. بينما يعتمد تسويق B2B على بناء المصداقية المهنية، دراسات الحالة، واستهداف صناع القرار بدقة عبر قنوات متخصصة."
        }
    },
    {
        id: 20,
        q: {
            en: "How is ad spend managed for Meta and Google platforms?",
            ar: "كيف يتم التعامل مع ميزانيات الإعلانات المدفوعة لمنصات ميتا وجوجل؟"
        },
        a: {
            en: "Clients fund their ad spend directly to advertising platforms using their own billing profiles. EagleOn charges a separate management fee, ensuring total financial transparency and control.",
            ar: "يدفع العميل ميزانية الإعلانات مباشرة للمنصات عبر حسابه الإعلاني وبطاقته البنكية، وتتقاضى إيجل أون أتعاب الإدارة والاستراتيجية بشكل منفصل لضمان الشفافية وإبقاء التحكم المالي بيد العميل."
        }
    },
    {
        id: 21,
        q: {
            en: "Why choose EagleOn instead of hiring a freelancer?",
            ar: "لماذا أختار إيجل أون بدلاً من توظيف فريلانسر؟"
        },
        a: {
            en: "EagleOn provides a complete multi-disciplinary team covering design, engineering, SEO, and ad operations under one roof, backed by formal service agreements, clear milestones, and dedicated ongoing support.",
            ar: "توفر إيجل أون فريقاً متعدد التخصصات يغطي التصميم، البرمجة، السيو، وإدارة الحملات تحت سقف واحد، مع التزام مهني بعقود رسمية، ومواعيد تسليم محددة، ودعم فني مستمر لتفادي انقطاع العمل."
        }
    },
    {
        id: 22,
        q: {
            en: "What is the process for onboarding and launching a project with EagleOn?",
            ar: "ما هي الخطوات المتبعة لبدء تنفيذ أي مشروع معكم؟"
        },
        a: {
            en: "The process begins with a discovery and requirements session, followed by a formal scope proposal. Upon contract signing, we move to UI/UX design, development, quality assurance testing, and official deployment.",
            ar: "تبدأ العملية بجلسة تحليل ودراسة للمشروع، يليها إعداد نطاق العمل وعرض السعر، ثم توقيع الاتفاقية والبدء بتصميم تجربة المستخدم (UI/UX)، وصولاً إلى مرحلة البرمجة، الفحص الشامل، والتدشين النهائي."
        }
    },
    {
        id: 23,
        q: {
            en: "Do I own the full source code and design assets after project completion?",
            ar: "هل أمتلك حقوق الكود المصدري والتصاميم بالكامل بعد التسليم؟"
        },
        a: {
            en: "Yes. Upon final project settlement, full intellectual property rights, source code, visual assets, and database access are transferred entirely to your ownership without proprietary restrictions.",
            ar: "نعم، فور استكمال المشروع وسداد الدفعة النهائية، تنتقل كامل حقوق الملكية الفكرية، والتصاميم، والكود المصدري، وقواعد البيانات إليك دون أي شروط تقييدية."
        }
    },
    {
        id: 24,
        q: {
            en: "What technical support and maintenance services are provided post-launch?",
            ar: "ما هي خدمات الدعم الفني والصيانة المقدمة بعد إطلاق الموقع؟"
        },
        a: {
            en: "We provide a dedicated post-launch support and warranty period to resolve any technical issues, alongside optional ongoing maintenance retainers covering security monitoring, backups, and framework updates.",
            ar: "نوفر فترة ضمان ودعم فني بعد التسليم لمعالجة أي ملاحظات برمجية، إلى جانب خطط صيانة دورية اختيارية تشمل النسخ الاحتياطي، المراقبة الأمنية، وتحديثات النظام المستمرة."
        }
    },
    {
        id: 25,
        q: {
            en: "Does EagleOn provide services to clients outside Jordan?",
            ar: "هل تقدم إيجل أون خدماتها لشركات خارج الأردن؟"
        },
        a: {
            en: "Yes. We deliver design, custom software engineering, and digital marketing solutions to businesses across the GCC and international markets through streamlined remote collaboration and project management systems.",
            ar: "نعم، نقدم خدمات التصميم، التطوير البرمجي، والتسويق الرقمي لشركات ومشاريع في دول الخليج العربي والأسواق الإقليمية والدولية، مع إدارة تواصل ومشاريع رقمية منظمة وفعالة."
        }
    }
];
function QAPage() {
    _s();
    const { lang, isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (id)=>setOpenId(openId === id ? null : id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[100dvh] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-40 pb-24 px-4 md:px-8 max-w-4xl mx-auto text-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-brand-primary font-mono text-sm uppercase tracking-widest mb-4",
                                children: lang === "ar" ? "الأسئلة الشائعة" : "FAQ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6 leading-none",
                                children: lang === "ar" ? "أسئلة وأجوبة" : "QUESTIONS & ANSWERS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-brand-gray2 text-lg mb-16 max-w-2xl",
                                children: lang === "ar" ? "كل ما تحتاج لمعرفته حول طريقة عملنا، مراحل التنفيذ، وما يمكنك توقعه." : "Everything you need to know about how we work, our process, and what to expect."
                            }, void 0, false, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: QA_DATA.map((item, index)=>{
                            const isOpen = openId === item.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: index * 0.1
                                },
                                className: "border-b border-white/10 py-6 first:border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggle(item.id),
                                        className: "flex w-full items-center justify-between text-start gap-4 focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg md:text-xl font-medium transition-colors", isOpen ? "text-brand-primary" : "text-white hover:text-brand-primary"),
                                                children: item.q[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this),
                                            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                className: "text-brand-primary shrink-0 w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "text-white/50 shrink-0 w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                height: "auto",
                                                opacity: 1
                                            },
                                            exit: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            },
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-gray2 pt-4 leading-relaxed",
                                                children: item.a[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/qa/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/qa/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$CTABand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/qa/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/qa/page.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(QAPage, "TdxF5lpEO43+g5sCe7bc9VDGhZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = QAPage;
var _c;
__turbopack_context__.k.register(_c, "QAPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dff85c7e._.js.map