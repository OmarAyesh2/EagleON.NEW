module.exports = [
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/liquid-glass-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "LiquidButton",
    ()=>LiquidButton,
    "MetalButton",
    ()=>MetalButton,
    "buttonVariants",
    ()=>buttonVariants,
    "liquidbuttonVariants",
    ()=>liquidbuttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-primary-foreground hover:bg-destructive/90",
            cool: "dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 text-primary-foreground dark:text-primary-foreground dark:border-t-0 dark:border-primary/50 dark:ring-white/5",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
        lineNumber: 49,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
const liquidbuttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-transparent hover:scale-105 duration-300 transition text-primary",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            xl: "h-12 rounded-md px-8 has-[>svg]:px-6",
            xxl: "h-14 rounded-md px-10 has-[>svg]:px-8",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "xxl"
    }
});
function LiquidButton({ className, variant, size, asChild = false, children, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", liquidbuttonVariants({
                variant,
                size,
                className
            })),
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 z-0 h-full w-full rounded-full  shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]  transition-all  dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-[inherit]",
                    style: {
                        backdropFilter: 'url("#container-glass")'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none z-10 flex h-full w-full items-center justify-center",
                    style: {
                        gap: 'inherit'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassFilter, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
function GlassFilter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: "container-glass",
                x: "0%",
                y: "0%",
                width: "100%",
                height: "100%",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                        type: "fractalNoise",
                        baseFrequency: "0.05 0.05",
                        numOctaves: "1",
                        seed: "1",
                        result: "turbulence"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                        in: "turbulence",
                        stdDeviation: "2",
                        result: "blurredNoise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                        in: "SourceGraphic",
                        in2: "blurredNoise",
                        scale: "70",
                        xChannelSelector: "R",
                        yChannelSelector: "B",
                        result: "displaced"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                        in: "displaced",
                        stdDeviation: "4",
                        result: "finalBlur"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                        in: "finalBlur",
                        in2: "finalBlur",
                        operator: "over"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
const colorVariants = {
    default: {
        outer: "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
        inner: "bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
        button: "bg-gradient-to-b from-[#B9B9B9] to-[#969696]",
        textColor: "text-white",
        textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]"
    },
    primary: {
        outer: "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
        inner: "bg-gradient-to-b from-primary via-secondary to-muted",
        button: "bg-gradient-to-b from-primary to-primary/40",
        textColor: "text-white",
        textShadow: "[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]"
    },
    success: {
        outer: "bg-gradient-to-b from-[#005A43] to-[#7CCB9B]",
        inner: "bg-gradient-to-b from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]",
        button: "bg-gradient-to-b from-[#9ADBC8] to-[#3E8F7C]",
        textColor: "text-[#FFF7F0]",
        textShadow: "[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]"
    },
    error: {
        outer: "bg-gradient-to-b from-[#5A0000] to-[#FFAEB0]",
        inner: "bg-gradient-to-b from-[#FFDEDE] via-[#680002] to-[#FFE9E9]",
        button: "bg-gradient-to-b from-[#F08D8F] to-[#A45253]",
        textColor: "text-[#FFF7F0]",
        textShadow: "[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]"
    },
    gold: {
        outer: "bg-gradient-to-b from-[#917100] to-[#EAD98F]",
        inner: "bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",
        button: "bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",
        textColor: "text-[#FFFDE5]",
        textShadow: "[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]"
    },
    bronze: {
        outer: "bg-gradient-to-b from-[#864813] to-[#E9B486]",
        inner: "bg-gradient-to-b from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]",
        button: "bg-gradient-to-b from-[#FFE3C9] to-[#A36F3D]",
        textColor: "text-[#FFF7F0]",
        textShadow: "[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]"
    }
};
const metalButtonVariants = (variant = "default", isPressed, isHovered, isTouchDevice)=>{
    const colors = colorVariants[variant];
    const transitionStyle = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";
    return {
        wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex transform-gpu rounded-md p-[1.25px] will-change-transform", colors.outer),
        wrapperStyle: {
            transform: isPressed ? "translateY(2.5px) scale(0.99)" : "translateY(0) scale(1)",
            boxShadow: isPressed ? "0 1px 2px rgba(0, 0, 0, 0.15)" : isHovered && !isTouchDevice ? "0 4px 12px rgba(0, 0, 0, 0.12)" : "0 3px 8px rgba(0, 0, 0, 0.08)",
            transition: transitionStyle,
            transformOrigin: "center center"
        },
        inner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-[1px] transform-gpu rounded-lg will-change-transform", colors.inner),
        innerStyle: {
            transition: transitionStyle,
            transformOrigin: "center center",
            filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.05)" : "none"
        },
        button: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-10 m-[1px] rounded-md inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-md px-6 py-2 text-sm leading-none font-semibold will-change-transform outline-none", colors.button, colors.textColor, colors.textShadow),
        buttonStyle: {
            transform: isPressed ? "scale(0.97)" : "scale(1)",
            transition: transitionStyle,
            transformOrigin: "center center",
            filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.02)" : "none"
        }
    };
};
const ShineEffect = ({ isPressed })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300", isPressed ? "opacity-20" : "opacity-0"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-neutral-100 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
            lineNumber: 306,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
        lineNumber: 300,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MetalButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ children, className, variant = "default", ...props }, ref)=>{
    const [isPressed, setIsPressed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isHovered, setIsHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isTouchDevice, setIsTouchDevice] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);
    const buttonText = children || "Button";
    const variants = metalButtonVariants(variant, isPressed, isHovered, isTouchDevice);
    const handleInternalMouseDown = ()=>{
        setIsPressed(true);
    };
    const handleInternalMouseUp = ()=>{
        setIsPressed(false);
    };
    const handleInternalMouseLeave = ()=>{
        setIsPressed(false);
        setIsHovered(false);
    };
    const handleInternalMouseEnter = ()=>{
        if (!isTouchDevice) {
            setIsHovered(true);
        }
    };
    const handleInternalTouchStart = ()=>{
        setIsPressed(true);
    };
    const handleInternalTouchEnd = ()=>{
        setIsPressed(false);
    };
    const handleInternalTouchCancel = ()=>{
        setIsPressed(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: variants.wrapper,
        style: variants.wrapperStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: variants.inner,
                style: variants.innerStyle
            }, void 0, false, {
                fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(variants.button, className),
                style: variants.buttonStyle,
                ...props,
                onMouseDown: handleInternalMouseDown,
                onMouseUp: handleInternalMouseUp,
                onMouseLeave: handleInternalMouseLeave,
                onMouseEnter: handleInternalMouseEnter,
                onTouchStart: handleInternalTouchStart,
                onTouchEnd: handleInternalTouchEnd,
                onTouchCancel: handleInternalTouchCancel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShineEffect, {
                        isPressed: isPressed
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    buttonText,
                    isHovered && !isPressed && !isTouchDevice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t rounded-lg from-transparent to-white/5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
MetalButton.displayName = "MetalButton";
}),
"[project]/src/components/ui/liquid-metal-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiquidMetalButton",
    ()=>LiquidMetalButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shaders/liquid-metal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
function LiquidMetalButton({ label = "Get Started", onClick, viewMode = "text", width = 180, height = 44, className = "" }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPressed, setIsPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ripples, setRipples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const shaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // biome-ignore lint/suspicious/noExplicitAny: External library without types
    const shaderMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rippleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (viewMode === "icon") {
            return {
                width: height,
                height: height,
                innerWidth: height - 4,
                innerHeight: height - 4,
                shaderWidth: height,
                shaderHeight: height
            };
        } else {
            return {
                width: width,
                height: height,
                innerWidth: width - 4,
                innerHeight: height - 4,
                shaderWidth: width,
                shaderHeight: height
            };
        }
    }, [
        viewMode,
        width,
        height
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const styleId = "shader-canvas-style-exploded";
        if (!document.getElementById(styleId)) {
            const style = document.createElement("style");
            style.id = styleId;
            style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 100px !important;
        }
        @keyframes ripple-animation {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `;
            document.head.appendChild(style);
        }
        const loadShader = async ()=>{
            try {
                if (shaderRef.current) {
                    if (shaderMount.current?.destroy) {
                        shaderMount.current.destroy();
                    }
                    shaderMount.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"](shaderRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liquidMetalFragmentShader"], {
                        u_repetition: 4,
                        u_softness: 0.5,
                        // Tweak these to tint towards blue
                        u_shiftRed: 0.1,
                        u_shiftBlue: 0.9,
                        u_distortion: 0.2,
                        u_contour: 0,
                        u_angle: 45,
                        u_scale: 8,
                        u_shape: 1,
                        u_offsetX: 0.1,
                        u_offsetY: -0.1
                    }, undefined, 0.6);
                }
            } catch (error) {
                console.error("[v0] Failed to load shader:", error);
            }
        };
        loadShader();
        return ()=>{
            if (shaderMount.current?.destroy) {
                shaderMount.current.destroy();
                shaderMount.current = null;
            }
        };
    }, []);
    const handleMouseEnter = ()=>{
        setIsHovered(true);
        shaderMount.current?.setSpeed?.(1);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
        setIsPressed(false);
        shaderMount.current?.setSpeed?.(0.6);
    };
    const handleClick = (e)=>{
        if (shaderMount.current?.setSpeed) {
            shaderMount.current.setSpeed(2.4);
            setTimeout(()=>{
                if (isHovered) {
                    shaderMount.current?.setSpeed?.(1);
                } else {
                    shaderMount.current?.setSpeed?.(0.6);
                }
            }, 300);
        }
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = {
                x,
                y,
                id: rippleId.current++
            };
            setRipples((prev)=>[
                    ...prev,
                    ripple
                ]);
            setTimeout(()=>{
                setRipples((prev)=>prev.filter((r)=>r.id !== ripple.id));
            }, 600);
        }
        onClick?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-block ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                perspective: "1000px",
                perspectiveOrigin: "50% 50%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: `${dimensions.width}px`,
                    height: `${dimensions.height}px`,
                    transformStyle: "preserve-3d",
                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
                    transform: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            transformStyle: "preserve-3d",
                            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, gap 0.4s ease",
                            transform: "translateZ(20px)",
                            zIndex: 30,
                            pointerEvents: "none"
                        },
                        children: [
                            viewMode === "icon" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 16,
                                style: {
                                    color: "#323b44ff",
                                    filter: "drop-shadow(0px 1px 2px rgba(255, 255, 255, 0.3))",
                                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    transform: "scale(1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            viewMode === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "14px",
                                    color: "#ffffffff",
                                    fontWeight: 600,
                                    textShadow: "0px 1px 2px rgba(255, 255, 255, 0.3)",
                                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    transform: "scale(1)",
                                    whiteSpace: "nowrap"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`,
                            transformStyle: "preserve-3d",
                            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
                            transform: `translateZ(10px) ${isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"}`,
                            zIndex: 20
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${dimensions.innerWidth}px`,
                                height: `${dimensions.innerHeight}px`,
                                margin: "2px",
                                borderRadius: "100px",
                                background: "linear-gradient(180deg, #050f2a 0%, #01080f 100%)",
                                boxShadow: isPressed ? "inset 0px 2px 4px rgba(0, 0, 0, 0.4), inset 0px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
                                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`,
                            transformStyle: "preserve-3d",
                            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
                            transform: `translateZ(0px) ${isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"}`,
                            zIndex: 10
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: `${dimensions.height}px`,
                                width: `${dimensions.width}px`,
                                borderRadius: "100px",
                                boxShadow: isPressed ? "0px 0px 0px 1px rgba(123, 193, 255, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)" : isHovered ? "0px 0px 0px 1px rgba(123, 193, 255, 0.4), 0px 12px 6px 0px rgba(123, 193, 255, 0.15), 0px 8px 5px 0px rgba(123, 193, 255, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)" : "0px 0px 0px 1px rgba(123, 193, 255, 0.3), 0px 36px 14px 0px rgba(123, 193, 255, 0.05), 0px 20px 12px 0px rgba(123, 193, 255, 0.08), 0px 9px 9px 0px rgba(123, 193, 255, 0.12), 0px 2px 5px 0px rgba(0, 0, 0, 0.15)",
                                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                background: "rgb(0 0 0 / 0)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: shaderRef,
                                className: "shader-container-exploded",
                                style: {
                                    borderRadius: "100px",
                                    overflow: "hidden",
                                    position: "relative",
                                    width: `${dimensions.shaderWidth}px`,
                                    maxWidth: `${dimensions.shaderWidth}px`,
                                    height: `${dimensions.shaderHeight}px`,
                                    transition: "width 0.4s ease, height 0.4s ease",
                                    mixBlendMode: "hard-light",
                                    opacity: 0.9
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                                lineNumber: 291,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: buttonRef,
                        onClick: handleClick,
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                        onMouseDown: ()=>setIsPressed(true),
                        onMouseUp: ()=>setIsPressed(false),
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`,
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            outline: "none",
                            zIndex: 40,
                            transformStyle: "preserve-3d",
                            transform: "translateZ(25px)",
                            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
                            overflow: "hidden",
                            borderRadius: "100px"
                        },
                        "aria-label": typeof label === "string" ? label : undefined,
                        children: ripples.map((ripple)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "absolute",
                                    left: `${ripple.x}px`,
                                    top: `${ripple.y}px`,
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)",
                                    pointerEvents: "none",
                                    animation: "ripple-animation 0.6s ease-out"
                                }
                            }, ripple.id, false, {
                                fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                                lineNumber: 337,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/liquid-metal-button.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/animated-gradient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PatternShapes = {
    Checks: 0,
    Stripes: 1,
    Edge: 2
};
const presets = {
    Prism: {
        color1: "#01080F",
        color2: "#7BC1FF",
        color3: "#DBDBDB",
        rotation: -50,
        proportion: 1,
        scale: 0.01,
        speed: 30,
        distortion: 0,
        swirl: 50,
        swirlIterations: 16,
        softness: 47,
        offset: -299,
        shape: "Checks",
        shapeSize: 45
    },
    Lava: {
        color1: "#FF9F21",
        color2: "#FF0303",
        color3: "#000000",
        rotation: 114,
        proportion: 100,
        scale: 0.52,
        speed: 30,
        distortion: 7,
        swirl: 18,
        swirlIterations: 20,
        softness: 100,
        offset: 717,
        shape: "Edge",
        shapeSize: 12
    },
    Plasma: {
        color1: "#B566FF",
        color2: "#000000",
        color3: "#000000",
        rotation: 0,
        proportion: 63,
        scale: 0.75,
        speed: 30,
        distortion: 5,
        swirl: 61,
        swirlIterations: 5,
        softness: 100,
        offset: -168,
        shape: "Checks",
        shapeSize: 28
    },
    Pulse: {
        color1: "#66FF85",
        color2: "#000000",
        color3: "#000000",
        rotation: -167,
        proportion: 92,
        scale: 0,
        speed: 20,
        distortion: 54,
        swirl: 75,
        swirlIterations: 3,
        softness: 28,
        offset: -813,
        shape: "Checks",
        shapeSize: 79
    },
    Vortex: {
        color1: "#000000",
        color2: "#FFFFFF",
        color3: "#000000",
        rotation: 50,
        proportion: 41,
        scale: 0.4,
        speed: 20,
        distortion: 0,
        swirl: 100,
        swirlIterations: 3,
        softness: 5,
        offset: -744,
        shape: "Stripes",
        shapeSize: 80
    },
    Mist: {
        color1: "#050505",
        color2: "#FF66B8",
        color3: "#050505",
        rotation: 0,
        proportion: 33,
        scale: 0.48,
        speed: 39,
        distortion: 4,
        swirl: 65,
        swirlIterations: 5,
        softness: 100,
        offset: -235,
        shape: "Edge",
        shapeSize: 48
    }
};
function AnimatedGradient({ config = {
    preset: "Prism"
}, noise, radius = "0px", style, className }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        return ()=>setIsMounted(false);
    }, []);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (config.preset === "custom") {
            return {
                color1: config.color1,
                color2: config.color2,
                color3: config.color3,
                rotation: config.rotation ?? 0,
                proportion: config.proportion ?? 35,
                scale: config.scale ?? 1,
                speed: config.speed ?? 25,
                distortion: config.distortion ?? 12,
                swirl: config.swirl ?? 80,
                swirlIterations: config.swirlIterations ?? 10,
                softness: config.softness ?? 100,
                offset: config.offset ?? 0,
                shape: config.shape ?? "Checks",
                shapeSize: config.shapeSize ?? 10
            };
        }
        const preset = presets[config.preset] || presets.Prism;
        return {
            ...preset,
            speed: config.speed ?? preset.speed
        };
    }, [
        config
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container || !isMounted) return;
        const gl = canvas.getContext("webgl2", {
            premultipliedAlpha: true,
            alpha: true,
            antialias: true
        });
        if (!gl) return;
        const vertexShaderSource = `#version 300 es
    in vec4 a_position;
    void main() {
      gl_Position = a_position;
    }`;
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, FRAGMENT_SHADER);
        gl.compileShader(fragmentShader);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1,
            1
        ]), gl.STATIC_DRAW);
        const positionLocation = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        const uniforms = {
            u_time: gl.getUniformLocation(program, "u_time"),
            u_resolution: gl.getUniformLocation(program, "u_resolution"),
            u_pixelRatio: gl.getUniformLocation(program, "u_pixelRatio"),
            u_scale: gl.getUniformLocation(program, "u_scale"),
            u_rotation: gl.getUniformLocation(program, "u_rotation"),
            u_color1: gl.getUniformLocation(program, "u_color1"),
            u_color2: gl.getUniformLocation(program, "u_color2"),
            u_color3: gl.getUniformLocation(program, "u_color3"),
            u_proportion: gl.getUniformLocation(program, "u_proportion"),
            u_softness: gl.getUniformLocation(program, "u_softness"),
            u_shape: gl.getUniformLocation(program, "u_shape"),
            u_shapeScale: gl.getUniformLocation(program, "u_shapeScale"),
            u_distortion: gl.getUniformLocation(program, "u_distortion"),
            u_swirl: gl.getUniformLocation(program, "u_swirl"),
            u_swirlIterations: gl.getUniformLocation(program, "u_swirlIterations")
        };
        const resize = ()=>{
            const width = container.clientWidth;
            const height = container.clientHeight;
            const pixelRatio = window.devicePixelRatio || 1;
            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resize();
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        startTimeRef.current = performance.now();
        const animate = (time)=>{
            const elapsed = (time - startTimeRef.current) / 1000;
            const speed = params.speed / 100 * 5;
            gl.uniform1f(uniforms.u_time, elapsed * speed + params.offset * 0.01);
            gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
            gl.uniform1f(uniforms.u_pixelRatio, window.devicePixelRatio || 1);
            gl.uniform1f(uniforms.u_scale, params.scale);
            gl.uniform1f(uniforms.u_rotation, params.rotation * Math.PI / 180);
            const c1 = hexToRgba(params.color1);
            const c2 = hexToRgba(params.color2);
            const c3 = hexToRgba(params.color3);
            gl.uniform4f(uniforms.u_color1, c1[0], c1[1], c1[2], c1[3]);
            gl.uniform4f(uniforms.u_color2, c2[0], c2[1], c2[2], c2[3]);
            gl.uniform4f(uniforms.u_color3, c3[0], c3[1], c3[2], c3[3]);
            gl.uniform1f(uniforms.u_proportion, params.proportion / 100);
            gl.uniform1f(uniforms.u_softness, params.softness / 100);
            gl.uniform1f(uniforms.u_shape, PatternShapes[params.shape]);
            gl.uniform1f(uniforms.u_shapeScale, params.shapeSize / 100);
            gl.uniform1f(uniforms.u_distortion, params.distortion / 50);
            gl.uniform1f(uniforms.u_swirl, params.swirl / 100);
            gl.uniform1f(uniforms.u_swirlIterations, params.swirl === 0 ? 0 : params.swirlIterations);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            frameIdRef.current = requestAnimationFrame(animate);
        };
        frameIdRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (frameIdRef.current !== undefined) {
                cancelAnimationFrame(frameIdRef.current);
            }
            resizeObserver.disconnect();
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.deleteBuffer(positionBuffer);
        };
    }, [
        isMounted,
        params
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className,
        style: {
            position: "absolute",
            inset: 0,
            zIndex: -1,
            borderRadius: radius,
            overflow: "hidden",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    display: "block",
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/animated-gradient.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            noise && noise.opacity > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCgkGBAVJOAVJAAAASklEQVQ4y2NgGAWjYBSMglEwCgY/YGRgZBQUYmJiZGQEkYwMjIyMgoKCjIyMIJKBgRFIMjIyAklGRkYGRkFBYEcwMDIyMjAOUQAA1I4HwVwZAkYAAAAASUVORK5CYII=")`,
                    backgroundSize: (noise.scale ?? 1) * 200,
                    backgroundRepeat: "repeat",
                    opacity: noise.opacity / 2,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/animated-gradient.tsx",
                lineNumber: 361,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/animated-gradient.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
function hexToRgba(hex) {
    let r = 0, g = 0, b = 0, a = 1;
    if (hex.startsWith("rgba(")) {
        const parts = hex.slice(5, -1).split(",");
        r = parseInt(parts[0]) / 255;
        g = parseInt(parts[1]) / 255;
        b = parseInt(parts[2]) / 255;
        a = parseFloat(parts[3]);
    } else if (hex.startsWith("rgb(")) {
        const parts = hex.slice(4, -1).split(",");
        r = parseInt(parts[0]) / 255;
        g = parseInt(parts[1]) / 255;
        b = parseInt(parts[2]) / 255;
    } else if (hex.startsWith("hsla(") || hex.startsWith("hsl(")) {
        const isHsla = hex.startsWith("hsla(");
        const parts = hex.slice(isHsla ? 5 : 4, -1).split(",");
        const h = parseFloat(parts[0]) / 360;
        const s = parseFloat(parts[1]) / 100;
        const l = parseFloat(parts[2]) / 100;
        a = isHsla ? parseFloat(parts[3]) : 1;
        [r, g, b] = hslToRgb(h, s, l);
    } else if (hex.startsWith("#")) {
        const c = hex.slice(1);
        if (c.length === 3) {
            r = parseInt(c[0] + c[0], 16) / 255;
            g = parseInt(c[1] + c[1], 16) / 255;
            b = parseInt(c[2] + c[2], 16) / 255;
        } else if (c.length >= 6) {
            r = parseInt(c.slice(0, 2), 16) / 255;
            g = parseInt(c.slice(2, 4), 16) / 255;
            b = parseInt(c.slice(4, 6), 16) / 255;
            if (c.length === 8) {
                a = parseInt(c.slice(6, 8), 16) / 255;
            }
        }
    }
    return [
        r,
        g,
        b,
        a
    ];
}
function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t)=>{
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [
        r,
        g,
        b
    ];
}
const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= iterations_number; i++) {
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`;
}),
"[project]/src/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-ssr] (ecmascript) <export default as MoveRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$glass$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/liquid-glass-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$metal$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/liquid-metal-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$gradient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/animated-gradient.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Hero() {
    const [titleNumber, setTitleNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Rotating words — the services we offer
    const titles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            en: [
                "Websites",
                "Brands",
                "Social Media",
                "Productions",
                "CGI"
            ],
            ar: [
                "مواقع إلكترونية",
                "علامات تجارية",
                "سوشيال ميديا",
                "إنتاج إبداعي",
                "تصميم ثلاثي الأبعاد"
            ]
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeoutId = setTimeout(()=>{
            setTitleNumber((prev)=>prev === titles.en.length - 1 ? 0 : prev + 1);
        }, 2500);
        return ()=>clearTimeout(timeoutId);
    }, [
        titleNumber,
        titles
    ]);
    // Detect language from html dir attribute
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ar");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkLang = ()=>{
            setLang(document.documentElement.lang === "en" ? "en" : "ar");
        };
        checkLang();
        const observer = new MutationObserver(checkLang);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "lang"
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    const currentTitles = titles[lang];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative isolate w-full min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$gradient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                config: {
                    preset: "custom",
                    color1: "#01080f",
                    color2: "#050f2a",
                    color3: "#7bbbff",
                    rotation: -50,
                    proportion: 35,
                    scale: 0.5,
                    speed: 20,
                    distortion: 3,
                    swirl: 50,
                    swirlIterations: 10,
                    softness: 80,
                    offset: -200,
                    shape: "Checks",
                    shapeSize: 30
                },
                noise: {
                    opacity: 0.15,
                    scale: 1
                },
                style: {
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 py-20 lg:py-40 items-center justify-center flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: lang === "ar" ? "نبني تجارب رقمية تصنع" : "We Build Digital Experiences That Drive"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[1.5em] items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    className: "font-semibold text-brand-primary",
                                                    initial: {
                                                        opacity: 0,
                                                        y: 50
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -50
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 100,
                                                        damping: 20
                                                    },
                                                    children: currentTitles[titleNumber]
                                                }, `${lang}-${titleNumber}`, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center mx-auto",
                                    children: lang === "ar" ? "مواقع مخصصة، هوية بصرية، إدارة سوشيال ميديا، و CGI سينمائي — مصممة للشركات الجاهزة للتميّز في سوقها." : "Custom websites, brand identity, social media, and cinema-grade CGI — engineered for businesses ready to dominate their market."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$metal$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidMetalButton"], {
                                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                lang === "ar" ? "ابدأ مشروعك" : "Start Your Project",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$glass$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidButton"], {
                                        size: "lg",
                                        className: "h-11 gap-3 text-white rounded-full px-8",
                                        children: lang === "ar" ? "شاهد أعمالنا" : "View Our Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/infinite-slider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteSlider",
    ()=>InfiniteSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-measure/dist/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function InfiniteSlider({ children, gap = 16, duration = 25, durationOnHover, direction = 'horizontal', reverse = false, className }) {
    const [currentDuration, setCurrentDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(duration);
    const [ref, { width, height }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let controls;
        const size = direction === 'horizontal' ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;
        if (isTransitioning) {
            controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(translation, [
                translation.get(),
                to
            ], {
                ease: 'linear',
                duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
                onComplete: ()=>{
                    setIsTransitioning(false);
                    setKey((prevKey)=>prevKey + 1);
                }
            });
        } else {
            controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(translation, [
                from,
                to
            ], {
                ease: 'linear',
                duration: currentDuration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: ()=>{
                    translation.set(from);
                }
            });
        }
        return controls?.stop;
    }, [
        key,
        translation,
        currentDuration,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse
    ]);
    const hoverProps = durationOnHover ? {
        onHoverStart: ()=>{
            setIsTransitioning(true);
            setCurrentDuration(durationOnHover);
        },
        onHoverEnd: ()=>{
            setIsTransitioning(true);
            setCurrentDuration(duration);
        }
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex w-max",
            style: {
                ...direction === 'horizontal' ? {
                    x: translation
                } : {
                    y: translation
                },
                gap: `${gap}px`,
                flexDirection: direction === 'horizontal' ? 'row' : 'column'
            },
            ref: ref,
            ...hoverProps,
            children: [
                children,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/infinite-slider.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/infinite-slider.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/progressive-blur.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GRADIENT_ANGLES",
    ()=>GRADIENT_ANGLES,
    "ProgressiveBlur",
    ()=>ProgressiveBlur
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
const GRADIENT_ANGLES = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270
};
function ProgressiveBlur({ direction = 'bottom', blurLayers = 8, className, blurIntensity = 0.25, ...props }) {
    const layers = Math.max(blurLayers, 2);
    const segmentSize = 1 / (blurLayers + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        children: Array.from({
            length: layers
        }).map((_, index)=>{
            const angle = GRADIENT_ANGLES[direction];
            const gradientStops = [
                index * segmentSize,
                (index + 1) * segmentSize,
                (index + 2) * segmentSize,
                (index + 3) * segmentSize
            ].map((pos, posIndex)=>`rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`);
            const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(', ')})`;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                style: {
                    maskImage: gradient,
                    WebkitMaskImage: gradient,
                    backdropFilter: `blur(${index * blurIntensity}px)`
                },
                ...props
            }, index, false, {
                fileName: "[project]/src/components/ui/progressive-blur.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progressive-blur.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/logo-cloud-4.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoCloud",
    ()=>LogoCloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$infinite$2d$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/infinite-slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progressive$2d$blur$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progressive-blur.tsx [app-ssr] (ecmascript)");
;
;
;
function LogoCloud({ logos }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto w-full py-6 md:border-x",
        dir: "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$infinite$2d$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfiniteSlider"], {
                gap: 64,
                duration: 60,
                durationOnHover: 20,
                children: logos.map((logo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: logo.alt,
                        className: "pointer-events-none h-12 select-none md:h-16",
                        height: "auto",
                        loading: "lazy",
                        src: logo.src,
                        width: "auto"
                    }, `logo-${logo.alt}`, false, {
                        fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progressive$2d$blur$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProgressiveBlur"], {
                blurIntensity: 1,
                className: "pointer-events-none absolute top-0 left-0 h-full w-[160px]",
                direction: "left"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progressive$2d$blur$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProgressiveBlur"], {
                blurIntensity: 1,
                className: "pointer-events-none absolute top-0 right-0 h-full w-[160px]",
                direction: "right"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/Logos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2d$cloud$2d$4$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/logo-cloud-4.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const logos = [
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036551/Redeye_mfzebs.png",
        alt: "RedEYE"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036554/Jilya_jsvpqn.png",
        alt: "Jilya"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036555/Lorenzo_um0xuj.png",
        alt: "Lorenzo"
    },
    {
        src: "https://placehold.co/200x80/transparent/FFFFFF/png?text=1%2F2+M",
        alt: "1/2 M"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036553/Brandaty_irbxbr.png",
        alt: "Brandaty"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036553/Burger_Hunch_t86psh.png",
        alt: "Burger Hunch"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036552/SkyLinks_vpq5ob.png",
        alt: "SkyLinks"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036552/Sugar_Dose_ewwne1.png",
        alt: "Sugar Dose"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786936001/Asset_2_kqafqk.png",
        alt: "Proton"
    },
    {
        src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786934046/Asset_4_qwvlxq.png",
        alt: "LeCiel Fragrance"
    }
];
function Logos() {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ar");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkLang = ()=>{
            setLang(document.documentElement.lang === "en" ? "en" : "ar");
        };
        checkLang();
        const observer = new MutationObserver(checkLang);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "lang"
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full py-12 border-t border-white/10 relative z-10 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-10 text-center text-xl md:text-2xl font-semibold tracking-widest text-muted-foreground uppercase",
                    children: lang === "ar" ? "يثق بنا الأفضل" : "Trusted by the Best"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Logos.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2d$cloud$2d$4$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoCloud"], {
                    logos: logos
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Logos.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Logos.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Logos.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
            en: "We build interactive, blazing-fast, and SEO-optimized websites and applications to boost your digital presence and sales."
        },
        icon: "Globe",
        featured: true,
        href: "/services/web-development"
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
            en: "We create stunning visual worlds and cinematic CGI effects that captivate your audience and elevate your brand value."
        },
        icon: "Cuboid",
        featured: true,
        href: "/services/3d-modeling-cgi"
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
        href: "/services/branding"
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
        href: "/services/social-media-management"
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
        href: "/services/production"
    }
];
}),
"[project]/src/components/sections/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cuboid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cuboid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cuboid.js [app-ssr] (ecmascript) <export default as Cuboid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$glass$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/liquid-glass-button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const iconMap = {
    "Globe": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    "Cuboid": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cuboid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cuboid$3e$__["Cuboid"],
    "Palette": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    "Share2": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
    "Video": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
};
function Services() {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ar");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkLang = ()=>{
            setLang(document.documentElement.lang === "en" ? "en" : "ar");
        };
        checkLang();
        const observer = new MutationObserver(checkLang);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: [
                "lang"
            ]
        });
        return ()=>observer.disconnect();
    }, []);
    const featuredServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].filter((service)=>service.featured);
    const isRtl = lang === "ar";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-8 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-brand-primary/10 text-brand-primary mb-4 border border-brand-primary/20",
                                    children: isRtl ? "خدماتنا" : "Our Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-bold tracking-tight text-white mb-4",
                                    children: isRtl ? "حلول رقمية متكاملة لنمو أعمالك" : "End-to-End Digital Solutions for Growth"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground",
                                    children: isRtl ? "نقدم مجموعة شاملة من الخدمات الرقمية والإبداعية المصممة خصيصاً لتلبية احتياجاتك وتحقيق أهدافك بفعالية واحترافية عالية." : "We offer a comprehensive suite of digital and creative services tailored to meet your needs and achieve your goals with high efficiency and professionalism."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            className: "shrink-0 hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$glass$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidButton"], {
                                className: "px-6 h-12 rounded-full text-white",
                                children: isRtl ? "عرض جميع الخدمات" : "View All Services"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Services.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: featuredServices.map((service, index)=>{
                        const Icon = iconMap[service.icon];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "group relative flex flex-col justify-between h-full rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-8 transition-all duration-300 hover:border-[#7BC1FF]/50 hover:shadow-[0_0_30px_rgba(123,193,255,0.15)] overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-brand-primary/10 blur-[50px] transition-all duration-500 group-hover:bg-brand-primary/20 group-hover:scale-150"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-[#7BC1FF] transition-transform duration-300 group-hover:scale-110",
                                            children: Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 81,
                                                columnNumber: 30
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Services.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-white mb-4",
                                            children: service.title[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Services.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed",
                                            children: service.description[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Services.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 pt-8 border-t border-white/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: service.href,
                                        className: "inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-[#7BC1FF]",
                                        children: [
                                            isRtl ? "اعرف المزيد" : "Learn More",
                                            isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 98,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 100,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Services.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, service.id, true, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Services.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex justify-center md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/services",
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$glass$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidButton"], {
                            className: "w-full px-6 h-12 rounded-full text-white",
                            children: isRtl ? "عرض جميع الخدمات" : "View All Services"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Services.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Services.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Services.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_32c15f65._.js.map