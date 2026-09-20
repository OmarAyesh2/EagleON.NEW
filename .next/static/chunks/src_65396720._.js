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
"[project]/src/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        id: "web-development",
        slug: "web-development",
        title: {
            ar: "تطوير المواقع والتطبيقات",
            en: "Web Development"
        },
        description: {
            ar: "نبرمج مواقع وتطبيقات تفاعلية، سريعة ومحسنة لمحركات البحث لتعزيز تواجدك الرقمي وزيادة مبيعاتك.",
            en: "We build interactive, blazing fast, and SEO optimized websites and applications to boost your digital presence and sales."
        },
        icon: "Globe",
        featured: true,
        href: "/services/web-development",
        tagline: {
            ar: "مواقع وتطبيقات مبنية من الصفر بدون قوالب",
            en: "Custom built websites and apps — zero templates"
        },
        overview: {
            ar: "نبني مواقع ويب وتطبيقات مخصصة بالكامل باستخدام أحدث التقنيات. كل سطر كود مكتوب خصيصاً لمشروعك لضمان أعلى أداء وأمان وقابلية للتوسع.",
            en: "We build fully custom websites and web applications using modern technology. Every line of code is written specifically for your project to ensure peak performance, security, and scalability."
        },
        features: [
            {
                title: {
                    ar: "تطوير Full Stack مخصص",
                    en: "Custom Full Stack Development"
                },
                description: {
                    ar: "بناء كامل من الواجهة الأمامية للخلفية بتقنيات حديثة مثل Next.js و React.",
                    en: "Complete frontend to backend build with modern tech like Next.js and React."
                }
            },
            {
                title: {
                    ar: "تصميم UI/UX متجاوب",
                    en: "Responsive UI/UX Design"
                },
                description: {
                    ar: "تصاميم تعمل بسلاسة على جميع الأجهزة والشاشات.",
                    en: "Looks and works right on every screen size."
                }
            },
            {
                title: {
                    ar: "تحسين محركات البحث التقني",
                    en: "Technical SEO"
                },
                description: {
                    ar: "بنية تقنية محسنة لتصدر نتائج البحث وزيادة الزيارات العضوية.",
                    en: "Site structure built for Google from day one. Not bolted on after."
                }
            },
            {
                title: {
                    ar: "أداء فائق السرعة",
                    en: "Blazing Fast Performance"
                },
                description: {
                    ar: "مواقع تحمل في أقل من ثانية مع أعلى درجات Core Web Vitals.",
                    en: "Sites that load in under a second with top Core Web Vitals scores."
                }
            },
            {
                title: {
                    ar: "لوحة تحكم مخصصة",
                    en: "Custom Admin Dashboard"
                },
                description: {
                    ar: "واجهة إدارة سهلة الاستخدام للتحكم الكامل بمحتوى موقعك.",
                    en: "Admin interface you can actually use. Full control over your site content."
                }
            },
            {
                title: {
                    ar: "صيانة ودعم مستمر",
                    en: "Ongoing Maintenance & Support"
                },
                description: {
                    ar: "دعم تقني مستمر وتحديثات أمنية لضمان استمرارية موقعك.",
                    en: "We don't disappear after launch. Monthly updates, security patches, and priority support."
                }
            }
        ],
        process: [
            {
                title: {
                    ar: "تحليل المتطلبات",
                    en: "Requirements Analysis"
                },
                description: {
                    ar: "نفهم أهداف مشروعك ونحدد النطاق التقني",
                    en: "We understand your project goals and define the technical scope"
                }
            },
            {
                title: {
                    ar: "التصميم والنموذج الأولي",
                    en: "Design & Prototype"
                },
                description: {
                    ar: "نصمم واجهات المستخدم ونبني نموذج تفاعلي للموافقة",
                    en: "We design the UI and build an interactive prototype for approval"
                }
            },
            {
                title: {
                    ar: "التطوير والاختبار",
                    en: "Development & Testing"
                },
                description: {
                    ar: "نكتب الكود ونختبر كل وظيفة بدقة",
                    en: "We write the code and rigorously test every feature"
                }
            },
            {
                title: {
                    ar: "الإطلاق والمتابعة",
                    en: "Launch & Monitor"
                },
                description: {
                    ar: "ننشر المشروع ونراقب الأداء والنتائج",
                    en: "We deploy the project and monitor performance and results"
                }
            }
        ],
        relatedSlugs: [
            "nexus-tech-website"
        ]
    },
    {
        id: "3d-modeling-cgi",
        slug: "3d-modeling-cgi",
        title: {
            ar: "تصميم ثلاثي الأبعاد و CGI",
            en: "3D Modeling & CGI"
        },
        description: {
            ar: "نخلق عوالم بصرية مذهلة وتأثيرات سينمائية تأسر جمهورك وترفع من قيمة علامتك التجارية.",
            en: "We create stunning visual worlds and cinematic CGI effects that captivate your audience and raise your brand value."
        },
        icon: "Cuboid",
        featured: true,
        href: "/services/3d-modeling-cgi",
        tagline: {
            ar: "عوالم بصرية سينمائية تأسر الجمهور",
            en: "Cinema grade visuals that captivate audiences"
        },
        overview: {
            ar: "ننتج تصاميم ثلاثية الأبعاد وتأثيرات بصرية بجودة سينمائية للحملات الإعلانية والمنتجات. من النمذجة والتحريك إلى المونتاج النهائي.",
            en: "We produce cinema quality 3D designs and visual effects for advertising campaigns and products. From modeling and animation to final compositing."
        },
        features: [
            {
                title: {
                    ar: "نمذجة ثلاثية الأبعاد واقعية",
                    en: "Photorealistic 3D Modeling"
                },
                description: {
                    ar: "نماذج عالية الدقة للمنتجات والبيئات والشخصيات.",
                    en: "High fidelity models for products, environments, and characters."
                }
            },
            {
                title: {
                    ar: "تحريك وموشن ديزاين",
                    en: "Animation & Motion Design"
                },
                description: {
                    ar: "حركات سلسة وتأثيرات ديناميكية تضيف حياة لمشاريعك",
                    en: "Smooth motion and dynamic effects that bring your projects to life"
                }
            },
            {
                title: {
                    ar: "تأثيرات بصرية VFX",
                    en: "Visual Effects (VFX)"
                },
                description: {
                    ar: "مؤثرات سينمائية متقدمة للإعلانات والفيديوهات",
                    en: "Advanced cinematic effects for ads and videos"
                }
            },
            {
                title: {
                    ar: "محاكاة منتجات واقعية",
                    en: "Product Visualization"
                },
                description: {
                    ar: "عرض منتجاتك بشكل ثلاثي الأبعاد واقعي قبل التصنيع",
                    en: "Showcase your products in realistic 3D before manufacturing"
                }
            },
            {
                title: {
                    ar: "إنتاج فيديو إعلاني",
                    en: "Commercial Video Production"
                },
                description: {
                    ar: "فيديوهات إعلانية كاملة من المفهوم إلى التسليم النهائي",
                    en: "Complete ad videos from concept to final delivery"
                }
            }
        ],
        process: [
            {
                title: {
                    ar: "المفهوم والقصة",
                    en: "Concept & Storyboard"
                },
                description: {
                    ar: "نطور الفكرة الإبداعية ونرسم مخطط القصة",
                    en: "We develop the creative concept and storyboard"
                }
            },
            {
                title: {
                    ar: "النمذجة والتكوين",
                    en: "Modeling & Texturing"
                },
                description: {
                    ar: "نبني النماذج ثلاثية الأبعاد ونضيف المواد والإضاءة",
                    en: "We build 3D models and add materials and lighting"
                }
            },
            {
                title: {
                    ar: "التحريك والتصيير",
                    en: "Animation & Rendering"
                },
                description: {
                    ar: "نحرك المشهد ونصيره بأعلى جودة",
                    en: "We animate the scene and render at the highest quality"
                }
            },
            {
                title: {
                    ar: "المونتاج والتسليم",
                    en: "Compositing & Delivery"
                },
                description: {
                    ar: "نجمع كل العناصر ونسلم المنتج النهائي",
                    en: "We composite all elements and deliver the final product"
                }
            }
        ],
        relatedSlugs: [
            "cyber-city-cgi"
        ]
    },
    {
        id: "branding",
        slug: "branding",
        title: {
            ar: "الهوية البصرية والعلامة التجارية",
            en: "Brand Identity"
        },
        description: {
            ar: "نصمم هويات بصرية لا تُنسى تعكس شخصية علامتك التجارية وتترك انطباعاً قوياً لدى عملائك.",
            en: "We design unforgettable brand identities that reflect your brand's personality and leave a lasting impression on your customers."
        },
        icon: "Palette",
        featured: true,
        href: "/services/branding",
        tagline: {
            ar: "هوية بصرية لا تُنسى تعكس جوهر علامتك",
            en: "Unforgettable brand identity that reflects your essence"
        },
        overview: {
            ar: "نصمم أنظمة هوية بصرية متكاملة من الاستراتيجية والشعار إلى دليل الاستخدام الكامل. هويات مصممة لتترك انطباعاً دائماً وتميزك عن المنافسين.",
            en: "We design complete brand identity systems from strategy and logo to full usage guidelines. Identities built to leave a lasting impression and set you apart from competitors."
        },
        features: [
            {
                title: {
                    ar: "استراتيجية العلامة التجارية",
                    en: "Brand Strategy"
                },
                description: {
                    ar: "تحليل السوق والمنافسين وتحديد موقعك الفريد",
                    en: "Market and competitor analysis to define your unique positioning"
                }
            },
            {
                title: {
                    ar: "تصميم الشعار",
                    en: "Logo Design"
                },
                description: {
                    ar: "شعار فريد يعكس شخصية علامتك ويتميز بالبساطة والقوة",
                    en: "A unique logo that reflects your brand personality with simplicity and power"
                }
            },
            {
                title: {
                    ar: "نظام الألوان والخطوط",
                    en: "Color & Typography System"
                },
                description: {
                    ar: "لوحة ألوان وخطوط متناسقة تعزز هوية علامتك",
                    en: "A cohesive color palette and typography system that reinforces your identity"
                }
            },
            {
                title: {
                    ar: "دليل الهوية البصرية",
                    en: "Brand Guidelines Manual"
                },
                description: {
                    ar: "دليل شامل يضمن تطبيق هويتك بشكل متسق في كل مكان",
                    en: "A comprehensive guide ensuring consistent application of your identity everywhere"
                }
            },
            {
                title: {
                    ar: "تطبيقات الهوية",
                    en: "Brand Applications"
                },
                description: {
                    ar: "تصاميم بطاقات العمل والأوراق الرسمية والمطبوعات",
                    en: "Business cards, stationery, and print material designs"
                }
            }
        ],
        process: [
            {
                title: {
                    ar: "البحث والاكتشاف",
                    en: "Research & Discovery"
                },
                description: {
                    ar: "نفهم قيمك وجمهورك ورؤيتك",
                    en: "We understand your values, audience, and vision"
                }
            },
            {
                title: {
                    ar: "التطوير الإبداعي",
                    en: "Creative Development"
                },
                description: {
                    ar: "نطور مفاهيم بصرية متعددة للاختيار",
                    en: "We develop multiple visual concepts for selection"
                }
            },
            {
                title: {
                    ar: "التنقيح والإتقان",
                    en: "Refinement & Perfection"
                },
                description: {
                    ar: "نصقل التصميم المختار حتى يصل للكمال",
                    en: "We refine the chosen design until it reaches perfection"
                }
            },
            {
                title: {
                    ar: "التسليم والإرشاد",
                    en: "Delivery & Guidance"
                },
                description: {
                    ar: "نسلم جميع الملفات مع دليل الاستخدام الكامل",
                    en: "We deliver all files with the complete usage guide"
                }
            }
        ],
        relatedSlugs: [
            "aurora-brand-identity"
        ]
    },
    {
        id: "social-media-management",
        slug: "social-media-management",
        title: {
            ar: "إدارة السوشيال ميديا",
            en: "Social Media Management"
        },
        description: {
            ar: "ندير حساباتك بذكاء وإبداع لبناء مجتمع متفاعل وتحويل المتابعين إلى عملاء دائمين.",
            en: "We manage your accounts creatively and strategically to build an engaged community and turn followers into loyal customers."
        },
        icon: "Share2",
        featured: false,
        href: "/services/social-media-management",
        tagline: {
            ar: "إدارة ذكية تحول المتابعين إلى عملاء",
            en: "Smart management that turns followers into customers"
        },
        overview: {
            ar: "ندير حساباتك على السوشيال ميديا بإستراتيجية مدروسة ومحتوى إبداعي يبني مجتمعاً متفاعلاً ويحقق نتائج ملموسة.",
            en: "We manage your social media accounts with a calculated strategy and creative content that builds an engaged community and delivers tangible results."
        },
        features: [
            {
                title: {
                    ar: "استراتيجية المحتوى",
                    en: "Content Strategy"
                },
                description: {
                    ar: "خطة محتوى شهرية مدروسة تتماشى مع أهدافك التسويقية",
                    en: "A calculated monthly content plan aligned with your marketing goals"
                }
            },
            {
                title: {
                    ar: "تصميم المنشورات",
                    en: "Post Design & Creation"
                },
                description: {
                    ar: "تصاميم احترافية وكتابة محتوى يجذب التفاعل",
                    en: "Professional designs and copywriting that drive engagement"
                }
            },
            {
                title: {
                    ar: "إدارة الإعلانات المدفوعة",
                    en: "Paid Ads Management"
                },
                description: {
                    ar: "حملات إعلانية مستهدفة لزيادة الوصول والتحويلات",
                    en: "Targeted ad campaigns to increase reach and conversions"
                }
            },
            {
                title: {
                    ar: "التقارير والتحليلات",
                    en: "Reports & Analytics"
                },
                description: {
                    ar: "تقارير أداء شهرية مفصلة مع توصيات للتحسين",
                    en: "Detailed monthly performance reports with improvement recommendations"
                }
            }
        ],
        process: [
            {
                title: {
                    ar: "تحليل الحسابات",
                    en: "Account Audit"
                },
                description: {
                    ar: "نحلل وضعك الحالي ونحدد فرص النمو",
                    en: "We analyze your current state and identify growth opportunities"
                }
            },
            {
                title: {
                    ar: "بناء الاستراتيجية",
                    en: "Strategy Building"
                },
                description: {
                    ar: "نضع خطة محتوى وتقويم نشر مخصص",
                    en: "We create a content plan and custom publishing calendar"
                }
            },
            {
                title: {
                    ar: "التنفيذ والنشر",
                    en: "Execution & Publishing"
                },
                description: {
                    ar: "ننتج المحتوى وننشره في الأوقات المثالية",
                    en: "We produce content and publish at optimal times"
                }
            },
            {
                title: {
                    ar: "القياس والتحسين",
                    en: "Measure & Optimize"
                },
                description: {
                    ar: "نتابع النتائج ونعدل الاستراتيجية باستمرار",
                    en: "We track results and continuously refine the strategy"
                }
            }
        ],
        relatedSlugs: [
            "pulse-social-media"
        ]
    },
    {
        id: "production",
        slug: "production",
        title: {
            ar: "الإنتاج الإبداعي والمرئي",
            en: "Media Production"
        },
        description: {
            ar: "إنتاج احترافي للفيديوهات والصور ينبض بالحياة، ليروي قصة علامتك التجارية بأفضل صورة.",
            en: "Professional video and photo production that comes to life, telling your brand's story in the best possible way."
        },
        icon: "Video",
        featured: false,
        href: "/services/production",
        tagline: {
            ar: "إنتاج مرئي يروي قصة علامتك بأفضل صورة",
            en: "Visual production that tells your brand story at its best"
        },
        overview: {
            ar: "إنتاج احترافي للفيديوهات والصور بجودة سينمائية. من كتابة السيناريو والتصوير إلى المونتاج النهائي وتصحيح الألوان.",
            en: "Professional video and photo production at cinematic quality. From scriptwriting and filming to final editing and color grading."
        },
        features: [
            {
                title: {
                    ar: "كتابة السيناريو",
                    en: "Scriptwriting"
                },
                description: {
                    ar: "نكتب قصصاً مؤثرة تنقل رسالة علامتك بوضوح",
                    en: "We write compelling stories that convey your brand message clearly"
                }
            },
            {
                title: {
                    ar: "التصوير السينمائي",
                    en: "Cinematography"
                },
                description: {
                    ar: "تصوير احترافي بمعدات متقدمة وفريق متخصص",
                    en: "Professional filming with advanced equipment and a specialized crew"
                }
            },
            {
                title: {
                    ar: "المونتاج وتصحيح الألوان",
                    en: "Editing & Color Grading"
                },
                description: {
                    ar: "مونتاج سلس وتصحيح ألوان سينمائي يرفع جودة المحتوى",
                    en: "Smooth editing and cinematic color grading that elevates content quality"
                }
            },
            {
                title: {
                    ar: "التصوير الفوتوغرافي",
                    en: "Photography"
                },
                description: {
                    ar: "صور منتجات وبورتريهات احترافية لعلامتك التجارية",
                    en: "Product photography and professional portraits for your brand"
                }
            }
        ],
        process: [
            {
                title: {
                    ar: "ما قبل الإنتاج",
                    en: "Pre Production"
                },
                description: {
                    ar: "التخطيط والسيناريو واختيار المواقع والفريق",
                    en: "Planning, scripting, location scouting, and crew selection"
                }
            },
            {
                title: {
                    ar: "التصوير",
                    en: "Production"
                },
                description: {
                    ar: "تنفيذ التصوير بأعلى معايير الجودة",
                    en: "Executing the shoot with the highest quality standards"
                }
            },
            {
                title: {
                    ar: "ما بعد الإنتاج",
                    en: "Post Production"
                },
                description: {
                    ar: "المونتاج والمؤثرات وتصحيح الألوان والصوت",
                    en: "Editing, effects, color grading, and sound design"
                }
            },
            {
                title: {
                    ar: "التسليم",
                    en: "Delivery"
                },
                description: {
                    ar: "تسليم المنتج النهائي بجميع الصيغ المطلوبة",
                    en: "Delivering the final product in all required formats"
                }
            }
        ],
        relatedSlugs: [
            "horizon-film-production"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const CTABand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/sections/CTABand.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/sections/CTABand.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c = CTABand;
const AUTO_PLAY_DURATION = 5000;
function ServicesPage() {
    _s();
    const { lang, isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Map all services with images
    const allServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((service, index)=>({
            ...service,
            numId: "0".concat(index + 1),
            image: [
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789819963/Untitled_pao1la.png",
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789915086/3d_xosoow.png",
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789915851/Untitled2-01_ocistw.png",
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789921123/Untitled1_pibzyv.png",
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789921123/Untitled1_pibzyv.png"
            ][index % 5]
        }));
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServicesPage.useCallback[handleNext]": ()=>{
            setDirection(1);
            setActiveIndex({
                "ServicesPage.useCallback[handleNext]": (prev)=>(prev + 1) % allServices.length
            }["ServicesPage.useCallback[handleNext]"]);
        }
    }["ServicesPage.useCallback[handleNext]"], [
        allServices.length
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ServicesPage.useCallback[handlePrev]": ()=>{
            setDirection(-1);
            setActiveIndex({
                "ServicesPage.useCallback[handlePrev]": (prev)=>(prev - 1 + allServices.length) % allServices.length
            }["ServicesPage.useCallback[handlePrev]"]);
        }
    }["ServicesPage.useCallback[handlePrev]"], [
        allServices.length
    ]);
    const handleTabClick = (index)=>{
        if (index === activeIndex) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        setIsPaused(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesPage.useEffect": ()=>{
            if (isPaused) return;
            const interval = setInterval({
                "ServicesPage.useEffect.interval": ()=>{
                    handleNext();
                }
            }["ServicesPage.useEffect.interval"], AUTO_PLAY_DURATION);
            return ({
                "ServicesPage.useEffect": ()=>clearInterval(interval)
            })["ServicesPage.useEffect"];
        }
    }["ServicesPage.useEffect"], [
        activeIndex,
        isPaused,
        handleNext
    ]);
    const variants = {
        enter: (direction)=>({
                y: direction > 0 ? "-100%" : "100%",
                opacity: 0
            }),
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1
        },
        exit: (direction)=>({
                zIndex: 0,
                y: direction > 0 ? "100%" : "-100%",
                opacity: 0
            })
    };
    const heroContent = {
        eyebrow: {
            ar: "خدماتنا",
            en: "Services"
        },
        heading: {
            ar: "حلول رقمية شاملة",
            en: "CORE CAPABILITIES"
        },
        subtitle: {
            ar: "EagleOn Digital استوديو تقني وإبداعي مقره عمّان، الأردن. نبني مواقع وتطبيقات ويب مخصصة بالكامل بدون قوالب جاهزة، وأنظمة هوية بصرية متكاملة من الاستراتيجية حتى دليل الاستخدام، وتصاميم CGI و VFX سينمائية للحملات التي تتجاوز حدود التصوير التقليدي.",
            en: "EagleOn Digital is a technical and creative studio based in Amman, Jordan. We build fully custom websites and web applications with no template shortcuts, complete brand identity systems from strategy through usage guidelines, and cinema grade CGI and VFX for campaigns that go beyond what traditional photography can deliver."
        }
    };
    const processContent = {
        heading: {
            ar: "كيف نعمل",
            en: "OUR PROCESS"
        },
        steps: [
            {
                num: "01",
                title: {
                    ar: "الاكتشاف",
                    en: "Discovery"
                },
                desc: {
                    ar: "نفهم أهدافك وجمهورك وتحدياتك",
                    en: "We understand your goals, audience, and challenges"
                }
            },
            {
                num: "02",
                title: {
                    ar: "الاستراتيجية",
                    en: "Strategy"
                },
                desc: {
                    ar: "نضع خطة تقنية وإبداعية محكمة",
                    en: "We craft a precise technical and creative plan"
                }
            },
            {
                num: "03",
                title: {
                    ar: "التصميم",
                    en: "Design"
                },
                desc: {
                    ar: "نصمم تجربة بصرية مميزة وعملية",
                    en: "We design a distinctive and functional visual experience"
                }
            },
            {
                num: "04",
                title: {
                    ar: "التطوير",
                    en: "Development"
                },
                desc: {
                    ar: "نبني بكود نظيف وأداء فائق",
                    en: "We build with clean code and peak performance"
                }
            },
            {
                num: "05",
                title: {
                    ar: "الإطلاق",
                    en: "Launch"
                },
                desc: {
                    ar: "نطلق مشروعك ونتابع النتائج",
                    en: "We launch your project and monitor results"
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[100dvh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full pt-40 pb-20 px-4 md:px-10 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto relative z-10 text-center flex flex-col items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-brand-primary font-mono text-sm uppercase tracking-widest mb-4",
                                children: heroContent.eyebrow[lang]
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-6",
                                children: heroContent.heading[lang]
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-brand-gray2 text-lg max-w-3xl mx-auto leading-relaxed",
                                children: heroContent.subtitle[lang]
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5 bg-[#0a0a0f]/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 flex flex-col justify-start order-2 lg:order-1 pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-0 justify-start h-[520px] md:h-[580px] lg:h-[620px]",
                                    children: allServices.map((service, index)=>{
                                        const isActive = activeIndex === index;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabClick(index),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex items-start gap-4 py-6 md:py-8 text-start transition-all duration-500 border-t border-white/10 first:border-0", isActive ? "text-white" : "text-muted-foreground/60 hover:text-white"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 bottom-0 w-[2px] bg-white/10", isRtl ? "right-[-16px] md:right-[-24px]" : "left-[-16px] md:left-[-24px]"),
                                                    children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 w-full bg-brand-primary origin-top", isRtl ? "right-0" : "left-0"),
                                                        initial: {
                                                            height: "0%"
                                                        },
                                                        animate: isPaused ? {
                                                            height: "0%"
                                                        } : {
                                                            height: "100%"
                                                        },
                                                        transition: {
                                                            duration: AUTO_PLAY_DURATION / 1000,
                                                            ease: "linear"
                                                        }
                                                    }, "progress-".concat(index, "-").concat(isPaused), false, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50",
                                                    children: [
                                                        "/",
                                                        service.numId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-2 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500", isActive ? "text-white" : ""),
                                                            children: service.title[lang]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            mode: "wait",
                                                            children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    height: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    height: "auto"
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    height: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.3,
                                                                    ease: [
                                                                        0.23,
                                                                        1,
                                                                        0.32,
                                                                        1
                                                                    ]
                                                                },
                                                                className: "overflow-hidden",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-4",
                                                                        children: service.description[lang]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/page.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: service.href,
                                                                        onClick: (e)=>e.stopPropagation(),
                                                                        className: "inline-flex items-center gap-2 text-sm font-medium text-brand-primary transition-opacity hover:opacity-80",
                                                                        children: [
                                                                            isRtl ? "اعرف المزيد" : "Learn More",
                                                                            isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                                className: "w-4 h-4 transition-transform group-hover:-translate-x-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 35
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                className: "w-4 h-4 transition-transform group-hover:translate-x-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                                lineNumber: 236,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/services/page.tsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/services/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, service.id, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/gallery",
                                    onMouseEnter: ()=>setIsPaused(true),
                                    onMouseLeave: ()=>setIsPaused(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-square md:aspect-[4/3] lg:aspect-[16/11] rounded-3xl md:rounded-[2.5rem] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                initial: false,
                                                custom: direction,
                                                mode: "popLayout",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    custom: direction,
                                                    variants: variants,
                                                    initial: "enter",
                                                    animate: "center",
                                                    exit: "exit",
                                                    transition: {
                                                        y: {
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 32
                                                        },
                                                        opacity: {
                                                            duration: 0.4
                                                        }
                                                    },
                                                    className: "absolute inset-0 w-full h-full cursor-pointer",
                                                    onClick: handleNext,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: allServices[activeIndex].image,
                                                            alt: allServices[activeIndex].title[lang],
                                                            className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105 !m-0 !p-0 block",
                                                            loading: "lazy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, activeIndex, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-6 md:bottom-8 flex gap-2 md:gap-3 z-20", isRtl ? "left-6 md:left-8" : "right-6 md:right-8"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handlePrev();
                                                        },
                                                        className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90",
                                                        "aria-label": "Previous",
                                                        children: isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 32
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 69
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handleNext();
                                                        },
                                                        className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all active:scale-90",
                                                        "aria-label": "Next",
                                                        children: isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 32
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 68
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full py-24 md:py-32 px-4 md:px-10 border-t border-white/5 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-6xl relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                duration: 0.5
                            },
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-bold tracking-tight text-white uppercase",
                                children: processContent.heading[lang]
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col md:flex-row justify-between gap-10 md:gap-4 lg:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this),
                                processContent.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            duration: 0.5,
                                            delay: index * 0.1
                                        },
                                        className: "relative z-10 flex flex-col items-center text-center flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-full bg-[#0a0a0f] border border-white/10 flex items-center justify-center text-brand-primary font-mono font-bold text-lg mb-6 shadow-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rtl:translate-y-[2px]",
                                                    children: step.num
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-bold text-lg mb-3",
                                                children: step.title[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-brand-gray2 text-sm leading-relaxed max-w-[200px]",
                                                children: step.desc[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.num, true, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTABand, {}, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(ServicesPage, "bMb5nrySxwlh8gInVAhOsw8BeFM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = ServicesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTABand");
__turbopack_context__.k.register(_c1, "ServicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_65396720._.js.map