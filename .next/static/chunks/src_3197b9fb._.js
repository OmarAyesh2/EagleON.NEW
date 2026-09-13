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
"[project]/src/components/ui/liquid-glass-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
const liquidbuttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
function LiquidButton(param) {
    let { className, variant, size, asChild = false, children, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", liquidbuttonVariants({
                variant,
                size,
                className
            })),
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 z-0 h-full w-full rounded-full  shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]  transition-all  dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-[inherit]",
                    style: {
                        backdropFilter: 'url("#container-glass")'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassFilter, {}, void 0, false, {
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
_c2 = LiquidButton;
function GlassFilter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: "container-glass",
                x: "0%",
                y: "0%",
                width: "100%",
                height: "100%",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                        in: "turbulence",
                        stdDeviation: "2",
                        result: "blurredNoise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                        in: "displaced",
                        stdDeviation: "4",
                        result: "finalBlur"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
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
_c3 = GlassFilter;
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
const metalButtonVariants = function() {
    let variant = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "default", isPressed = arguments.length > 1 ? arguments[1] : void 0, isHovered = arguments.length > 2 ? arguments[2] : void 0, isTouchDevice = arguments.length > 3 ? arguments[3] : void 0;
    const colors = colorVariants[variant];
    const transitionStyle = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";
    return {
        wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex transform-gpu rounded-md p-[1.25px] will-change-transform", colors.outer),
        wrapperStyle: {
            transform: isPressed ? "translateY(2.5px) scale(0.99)" : "translateY(0) scale(1)",
            boxShadow: isPressed ? "0 1px 2px rgba(0, 0, 0, 0.15)" : isHovered && !isTouchDevice ? "0 4px 12px rgba(0, 0, 0, 0.12)" : "0 3px 8px rgba(0, 0, 0, 0.08)",
            transition: transitionStyle,
            transformOrigin: "center center"
        },
        inner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-[1px] transform-gpu rounded-lg will-change-transform", colors.inner),
        innerStyle: {
            transition: transitionStyle,
            transformOrigin: "center center",
            filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.05)" : "none"
        },
        button: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 m-[1px] rounded-md inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-md px-6 py-2 text-sm leading-none font-semibold will-change-transform outline-none", colors.button, colors.textColor, colors.textShadow),
        buttonStyle: {
            transform: isPressed ? "scale(0.97)" : "scale(1)",
            transition: transitionStyle,
            transformOrigin: "center center",
            filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.02)" : "none"
        }
    };
};
const ShineEffect = (param)=>{
    let { isPressed } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300", isPressed ? "opacity-20" : "opacity-0"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c4 = ShineEffect;
const MetalButton = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = _s((param, ref)=>{
    let { children, className, variant = "default", ...props } = param;
    _s();
    const [isPressed, setIsPressed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isHovered, setIsHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isTouchDevice, setIsTouchDevice] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MetalButton.useEffect": ()=>{
            setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        }
    }["MetalButton.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: variants.wrapper,
        style: variants.wrapperStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: variants.inner,
                style: variants.innerStyle
            }, void 0, false, {
                fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(variants.button, className),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShineEffect, {
                        isPressed: isPressed
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/liquid-glass-button.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    buttonText,
                    isHovered && !isPressed && !isTouchDevice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}, "qoFmwB2PbsCXGP8Z3iNPMWkBCqw=")), "qoFmwB2PbsCXGP8Z3iNPMWkBCqw=");
_c6 = MetalButton;
MetalButton.displayName = "MetalButton";
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "LiquidButton");
__turbopack_context__.k.register(_c3, "GlassFilter");
__turbopack_context__.k.register(_c4, "ShineEffect");
__turbopack_context__.k.register(_c5, "MetalButton$React.forwardRef");
__turbopack_context__.k.register(_c6, "MetalButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/liquid-metal-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiquidMetalButton",
    ()=>LiquidMetalButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shaders/liquid-metal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders/dist/shader-mount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function LiquidMetalButton(param) {
    let { label = "Get Started", onClick, viewMode = "text", width = 180, height = 44, className = "" } = param;
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPressed, setIsPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ripples, setRipples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const shaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // biome-ignore lint/suspicious/noExplicitAny: External library without types
    const shaderMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rippleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LiquidMetalButton.useMemo[dimensions]": ()=>{
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
        }
    }["LiquidMetalButton.useMemo[dimensions]"], [
        viewMode,
        width,
        height
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiquidMetalButton.useEffect": ()=>{
            const styleId = "shader-canvas-style-exploded";
            if (!document.getElementById(styleId)) {
                const style = document.createElement("style");
                style.id = styleId;
                style.textContent = "\n        .shader-container-exploded canvas {\n          width: 100% !important;\n          height: 100% !important;\n          display: block !important;\n          position: absolute !important;\n          top: 0 !important;\n          left: 0 !important;\n          border-radius: 100px !important;\n        }\n        @keyframes ripple-animation {\n          0% {\n            transform: translate(-50%, -50%) scale(0);\n            opacity: 0.6;\n          }\n          100% {\n            transform: translate(-50%, -50%) scale(4);\n            opacity: 0;\n          }\n        }\n      ";
                document.head.appendChild(style);
            }
            const loadShader = {
                "LiquidMetalButton.useEffect.loadShader": async ()=>{
                    try {
                        if (shaderRef.current) {
                            var _shaderMount_current;
                            if ((_shaderMount_current = shaderMount.current) === null || _shaderMount_current === void 0 ? void 0 : _shaderMount_current.destroy) {
                                shaderMount.current.destroy();
                            }
                            shaderMount.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMount"](shaderRef.current, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liquidMetalFragmentShader"], {
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
                }
            }["LiquidMetalButton.useEffect.loadShader"];
            loadShader();
            return ({
                "LiquidMetalButton.useEffect": ()=>{
                    var _shaderMount_current;
                    if ((_shaderMount_current = shaderMount.current) === null || _shaderMount_current === void 0 ? void 0 : _shaderMount_current.destroy) {
                        shaderMount.current.destroy();
                        shaderMount.current = null;
                    }
                }
            })["LiquidMetalButton.useEffect"];
        }
    }["LiquidMetalButton.useEffect"], []);
    const handleMouseEnter = ()=>{
        var _shaderMount_current_setSpeed, _shaderMount_current;
        setIsHovered(true);
        (_shaderMount_current = shaderMount.current) === null || _shaderMount_current === void 0 ? void 0 : (_shaderMount_current_setSpeed = _shaderMount_current.setSpeed) === null || _shaderMount_current_setSpeed === void 0 ? void 0 : _shaderMount_current_setSpeed.call(_shaderMount_current, 1);
    };
    const handleMouseLeave = ()=>{
        var _shaderMount_current_setSpeed, _shaderMount_current;
        setIsHovered(false);
        setIsPressed(false);
        (_shaderMount_current = shaderMount.current) === null || _shaderMount_current === void 0 ? void 0 : (_shaderMount_current_setSpeed = _shaderMount_current.setSpeed) === null || _shaderMount_current_setSpeed === void 0 ? void 0 : _shaderMount_current_setSpeed.call(_shaderMount_current, 0.6);
    };
    const handleClick = (e)=>{
        var _shaderMount_current;
        if ((_shaderMount_current = shaderMount.current) === null || _shaderMount_current === void 0 ? void 0 : _shaderMount_current.setSpeed) {
            shaderMount.current.setSpeed(2.4);
            setTimeout(()=>{
                if (isHovered) {
                    var _shaderMount_current_setSpeed, _shaderMount_current;
                    (_shaderMount_current = shaderMount.current) === null || _shaderMount_current === void 0 ? void 0 : (_shaderMount_current_setSpeed = _shaderMount_current.setSpeed) === null || _shaderMount_current_setSpeed === void 0 ? void 0 : _shaderMount_current_setSpeed.call(_shaderMount_current, 1);
                } else {
                    var _shaderMount_current_setSpeed1, _shaderMount_current1;
                    (_shaderMount_current1 = shaderMount.current) === null || _shaderMount_current1 === void 0 ? void 0 : (_shaderMount_current_setSpeed1 = _shaderMount_current1.setSpeed) === null || _shaderMount_current_setSpeed1 === void 0 ? void 0 : _shaderMount_current_setSpeed1.call(_shaderMount_current1, 0.6);
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
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                perspective: "1000px",
                perspectiveOrigin: "50% 50%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: "".concat(dimensions.width, "px"),
                    height: "".concat(dimensions.height, "px"),
                    transformStyle: "preserve-3d",
                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
                    transform: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(dimensions.width, "px"),
                            height: "".concat(dimensions.height, "px"),
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
                            viewMode === "icon" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
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
                            viewMode === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(dimensions.width, "px"),
                            height: "".concat(dimensions.height, "px"),
                            transformStyle: "preserve-3d",
                            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
                            transform: "translateZ(10px) ".concat(isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"),
                            zIndex: 20
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "".concat(dimensions.innerWidth, "px"),
                                height: "".concat(dimensions.innerHeight, "px"),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(dimensions.width, "px"),
                            height: "".concat(dimensions.height, "px"),
                            transformStyle: "preserve-3d",
                            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease",
                            transform: "translateZ(0px) ".concat(isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"),
                            zIndex: 10
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "".concat(dimensions.height, "px"),
                                width: "".concat(dimensions.width, "px"),
                                borderRadius: "100px",
                                boxShadow: isPressed ? "0px 0px 0px 1px rgba(123, 193, 255, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)" : isHovered ? "0px 0px 0px 1px rgba(123, 193, 255, 0.4), 0px 12px 6px 0px rgba(123, 193, 255, 0.15), 0px 8px 5px 0px rgba(123, 193, 255, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)" : "0px 0px 0px 1px rgba(123, 193, 255, 0.3), 0px 36px 14px 0px rgba(123, 193, 255, 0.05), 0px 20px 12px 0px rgba(123, 193, 255, 0.08), 0px 9px 9px 0px rgba(123, 193, 255, 0.12), 0px 2px 5px 0px rgba(0, 0, 0, 0.15)",
                                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                background: "rgb(0 0 0 / 0)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: shaderRef,
                                className: "shader-container-exploded",
                                style: {
                                    borderRadius: "100px",
                                    overflow: "hidden",
                                    position: "relative",
                                    width: "".concat(dimensions.shaderWidth, "px"),
                                    maxWidth: "".concat(dimensions.shaderWidth, "px"),
                                    height: "".concat(dimensions.shaderHeight, "px"),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            width: "".concat(dimensions.width, "px"),
                            height: "".concat(dimensions.height, "px"),
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
                        children: ripples.map((ripple)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "absolute",
                                    left: "".concat(ripple.x, "px"),
                                    top: "".concat(ripple.y, "px"),
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
_s(LiquidMetalButton, "DaR2SuCFABof4Hz9j9dZyV3Q7sk=");
_c = LiquidMetalButton;
var _c;
__turbopack_context__.k.register(_c, "LiquidMetalButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/animated-gradient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function AnimatedGradient(param) {
    let { config = {
        preset: "Prism"
    }, noise, radius = "0px", style, className } = param;
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedGradient.useEffect": ()=>{
            setIsMounted(true);
            return ({
                "AnimatedGradient.useEffect": ()=>setIsMounted(false)
            })["AnimatedGradient.useEffect"];
        }
    }["AnimatedGradient.useEffect"], []);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedGradient.useMemo[params]": ()=>{
            if (config.preset === "custom") {
                var _config_rotation, _config_proportion, _config_scale, _config_speed, _config_distortion, _config_swirl, _config_swirlIterations, _config_softness, _config_offset, _config_shape, _config_shapeSize;
                return {
                    color1: config.color1,
                    color2: config.color2,
                    color3: config.color3,
                    rotation: (_config_rotation = config.rotation) !== null && _config_rotation !== void 0 ? _config_rotation : 0,
                    proportion: (_config_proportion = config.proportion) !== null && _config_proportion !== void 0 ? _config_proportion : 35,
                    scale: (_config_scale = config.scale) !== null && _config_scale !== void 0 ? _config_scale : 1,
                    speed: (_config_speed = config.speed) !== null && _config_speed !== void 0 ? _config_speed : 25,
                    distortion: (_config_distortion = config.distortion) !== null && _config_distortion !== void 0 ? _config_distortion : 12,
                    swirl: (_config_swirl = config.swirl) !== null && _config_swirl !== void 0 ? _config_swirl : 80,
                    swirlIterations: (_config_swirlIterations = config.swirlIterations) !== null && _config_swirlIterations !== void 0 ? _config_swirlIterations : 10,
                    softness: (_config_softness = config.softness) !== null && _config_softness !== void 0 ? _config_softness : 100,
                    offset: (_config_offset = config.offset) !== null && _config_offset !== void 0 ? _config_offset : 0,
                    shape: (_config_shape = config.shape) !== null && _config_shape !== void 0 ? _config_shape : "Checks",
                    shapeSize: (_config_shapeSize = config.shapeSize) !== null && _config_shapeSize !== void 0 ? _config_shapeSize : 10
                };
            }
            const preset = presets[config.preset] || presets.Prism;
            var _config_speed1;
            return {
                ...preset,
                speed: (_config_speed1 = config.speed) !== null && _config_speed1 !== void 0 ? _config_speed1 : preset.speed
            };
        }
    }["AnimatedGradient.useMemo[params]"], [
        config
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_s1({
        "AnimatedGradient.useEffect": ()=>{
            _s1();
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container || !isMounted) return;
            const gl = canvas.getContext("webgl2", {
                premultipliedAlpha: true,
                alpha: true,
                antialias: true
            });
            if (!gl) return;
            const vertexShaderSource = "#version 300 es\n    in vec4 a_position;\n    void main() {\n      gl_Position = a_position;\n    }";
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
            const resize = {
                "AnimatedGradient.useEffect.resize": ()=>{
                    const width = container.clientWidth;
                    const height = container.clientHeight;
                    const pixelRatio = window.devicePixelRatio || 1;
                    canvas.width = width * pixelRatio;
                    canvas.height = height * pixelRatio;
                    canvas.style.width = "".concat(width, "px");
                    canvas.style.height = "".concat(height, "px");
                    gl.viewport(0, 0, canvas.width, canvas.height);
                }
            }["AnimatedGradient.useEffect.resize"];
            resize();
            const resizeObserver = new ResizeObserver(resize);
            resizeObserver.observe(container);
            startTimeRef.current = performance.now();
            const animate = {
                "AnimatedGradient.useEffect.animate": (time)=>{
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
                }
            }["AnimatedGradient.useEffect.animate"];
            frameIdRef.current = requestAnimationFrame(animate);
            return ({
                "AnimatedGradient.useEffect": ()=>{
                    if (frameIdRef.current !== undefined) {
                        cancelAnimationFrame(frameIdRef.current);
                    }
                    resizeObserver.disconnect();
                    gl.deleteProgram(program);
                    gl.deleteShader(vertexShader);
                    gl.deleteShader(fragmentShader);
                    gl.deleteBuffer(positionBuffer);
                }
            })["AnimatedGradient.useEffect"];
        }
    }["AnimatedGradient.useEffect"], "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true), [
        isMounted,
        params
    ]);
    var _noise_scale;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
            noise && noise.opacity > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCgkGBAVJOAVJAAAASklEQVQ4y2NgGAWjYBSMglEwCgY/YGRgZBQUYmJiZGQEkYwMjIyMgoKCjIyMIJKBgRFIMjIyAklGRkYGRkFBYEcwMDIyMjAOUQAA1I4HwVwZAkYAAAAASUVORK5CYII=")',
                    backgroundSize: ((_noise_scale = noise.scale) !== null && _noise_scale !== void 0 ? _noise_scale : 1) * 200,
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
_s(AnimatedGradient, "5n2XwiEaXcSN/5aJcOyiVfHlAlY=");
_c = AnimatedGradient;
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
const FRAGMENT_SHADER = "#version 300 es\nprecision highp float;\n\nuniform float u_time;\nuniform float u_pixelRatio;\nuniform vec2 u_resolution;\n\nuniform float u_scale;\nuniform float u_rotation;\nuniform vec4 u_color1;\nuniform vec4 u_color2;\nuniform vec4 u_color3;\nuniform float u_proportion;\nuniform float u_softness;\nuniform float u_shape;\nuniform float u_shapeScale;\nuniform float u_distortion;\nuniform float u_swirl;\nuniform float u_swirlIterations;\n\nout vec4 fragColor;\n\n#define TWO_PI 6.28318530718\n#define PI 3.14159265358979323846\n\nvec2 rotate(vec2 uv, float th) {\n  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;\n}\n\nfloat random(vec2 st) {\n  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);\n}\n\nfloat noise(vec2 st) {\n  vec2 i = floor(st);\n  vec2 f = fract(st);\n  float a = random(i);\n  float b = random(i + vec2(1.0, 0.0));\n  float c = random(i + vec2(0.0, 1.0));\n  float d = random(i + vec2(1.0, 1.0));\n\n  vec2 u = f * f * (3.0 - 2.0 * f);\n\n  float x1 = mix(a, b, u.x);\n  float x2 = mix(c, d, u.x);\n  return mix(x1, x2, u.y);\n}\n\nvec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {\n    vec3 color1 = c1.rgb * c1.a;\n    vec3 color2 = c2.rgb * c2.a;\n    vec3 color3 = c3.rgb * c3.a;\n\n    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);\n    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);\n\n    vec3 blended_color_2 = mix(color1, color2, r1);\n    float blended_opacity_2 = mix(c1.a, c2.a, r1);\n\n    vec3 c = mix(blended_color_2, color3, r2);\n    float o = mix(blended_opacity_2, c3.a, r2);\n    return vec4(c, o);\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n\n    float t = .5 * u_time;\n\n    float noise_scale = .0005 + .006 * u_scale;\n\n    uv -= .5;\n    uv *= (noise_scale * u_resolution);\n    uv = rotate(uv, u_rotation * .5 * PI);\n    uv /= u_pixelRatio;\n    uv += .5;\n\n    float n1 = noise(uv * 1. + t);\n    float n2 = noise(uv * 2. - t);\n    float angle = n1 * TWO_PI;\n    uv.x += 4. * u_distortion * n2 * cos(angle);\n    uv.y += 4. * u_distortion * n2 * sin(angle);\n\n    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));\n    for (float i = 1.; i <= iterations_number; i++) {\n        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);\n        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);\n    }\n\n    float proportion = clamp(u_proportion, 0., 1.);\n\n    float shape = 0.;\n    float mixer = 0.;\n    if (u_shape < .5) {\n      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);\n      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);\n      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);\n    } else if (u_shape < 1.5) {\n      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);\n      float f = fract(stripes_shape_uv.y);\n      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);\n      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);\n    } else {\n      float sh = 1. - uv.y;\n      sh -= .5;\n      sh /= (noise_scale * u_resolution.y);\n      sh += .5;\n      float shape_scaling = .2 * (1. - u_shapeScale);\n      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));\n      mixer = shape;\n    }\n\n    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);\n\n    fragColor = vec4(color_mix.rgb, color_mix.a);\n}\n";
var _c;
__turbopack_context__.k.register(_c, "AnimatedGradient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/sections/Hero.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_3197b9fb._.js.map