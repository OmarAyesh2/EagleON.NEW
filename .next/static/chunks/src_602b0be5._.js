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
                    className: "absolute top-0 left-0 z-0 h-full w-full rounded-full    shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]    transition-all    dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
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
                        console.error("Failed to load shader:", error);
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
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript) <export default as MoveRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-left.js [app-client] (ecmascript) <export default as MoveLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$glass$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/liquid-glass-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$metal$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/liquid-metal-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
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
function Hero() {
    _s();
    const [titleNumber, setTitleNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Rotating words — the services we offer
    const titles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Hero.useMemo[titles]": ()=>({
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
            })
    }["Hero.useMemo[titles]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timeoutId = setTimeout({
                "Hero.useEffect.timeoutId": ()=>{
                    setTitleNumber({
                        "Hero.useEffect.timeoutId": (prev)=>prev === titles.en.length - 1 ? 0 : prev + 1
                    }["Hero.useEffect.timeoutId"]);
                }
            }["Hero.useEffect.timeoutId"], 2500);
            return ({
                "Hero.useEffect": ()=>clearTimeout(timeoutId)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        titleNumber,
        titles
    ]);
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const currentTitles = titles[lang];
    const handleMouseMove = (e)=>{
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: heroRef,
        onMouseMove: handleMouseMove,
        className: "relative isolate w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#2F5F7A]/20 via-[#01080F] to-[#01080F] z-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none opacity-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[200vw] h-[200vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] origin-top bg-[linear-gradient(rgba(123,193,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(123,193,255,0.35)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-scroll",
                    style: {
                        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none opacity-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[200vw] h-[200vh] absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[40%] origin-bottom bg-[linear-gradient(rgba(123,193,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(123,193,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-scroll-reverse",
                    style: {
                        transform: 'perspective(500px) rotateX(-60deg) translateY(100px) translateZ(-200px)',
                        maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 71,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-1 pointer-events-none",
                style: {
                    background: "radial-gradient(800px circle at ".concat(mousePos.x, "px ").concat(mousePos.y, "px, rgba(123, 193, 255, 0.1), transparent 40%)")
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 animate-spin-slow pointer-events-none opacity-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 border-t border-r border-[#7BC1FF]/30 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 w-2 h-2 bg-[#7BC1FF] rounded-full shadow-[0_0_10px_#7BC1FF]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 w-2 h-2 bg-[#7BC1FF] rounded-full shadow-[0_0_10px_#7BC1FF]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[size:100%_4px] opacity-10"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#7BC1FF]/5 to-transparent h-[100px] w-full animate-scanline opacity-20"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-24 left-6 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 right-6 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 py-20 lg:py-40 items-center justify-center flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-6xl lg:text-8xl max-w-5xl tracking-tighter text-center font-black leading-tight md:leading-[1.1] px-4 md:px-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: lang === "ar" ? "نبني تجارب رقمية تصنع" : "We Build Digital Experiences That Drive"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[1.5em] items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    className: "font-medium text-brand-primary",
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
                                                }, "".concat(lang, "-").concat(titleNumber), false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center mx-auto px-4 md:px-0",
                                    children: lang === "ar" ? "مواقع مخصصة، هوية بصرية متكاملة، إدارة سوشيال ميديا، و CGI سينمائي — كلها تحت سقف واحد في عمّان." : "Custom websites, full brand identity, social media management, and cinema grade CGI — all under one roof in Amman."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$metal$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiquidMetalButton"], {
                                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                lang === "ar" ? "ابدأ مشروعك" : "Start Your Project",
                                                lang === "ar" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveLeft$3e$__["MoveLeft"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 38
                                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 73
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$liquid$2d$glass$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiquidButton"], {
                                        size: "lg",
                                        className: "h-11 gap-3 text-white rounded-full px-8",
                                        children: lang === "ar" ? "شاهد أعمالنا" : "View Our Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Hero, "vESQRZGLpITfL7UtapoC3oPlqUU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/infinite-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteSlider",
    ()=>InfiniteSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function InfiniteSlider(param) {
    let { children, gap = 16, duration = 25, durationOnHover, direction = 'horizontal', reverse = false, className } = param;
    _s();
    const [currentDuration, setCurrentDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(duration);
    const [ref, { width, height }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteSlider.useEffect": ()=>{
            let controls;
            const size = direction === 'horizontal' ? width : height;
            const contentSize = size + gap;
            const from = reverse ? -contentSize / 2 : 0;
            const to = reverse ? 0 : -contentSize / 2;
            if (isTransitioning) {
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(translation, [
                    translation.get(),
                    to
                ], {
                    ease: 'linear',
                    duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
                    onComplete: {
                        "InfiniteSlider.useEffect": ()=>{
                            setIsTransitioning(false);
                            setKey({
                                "InfiniteSlider.useEffect": (prevKey)=>prevKey + 1
                            }["InfiniteSlider.useEffect"]);
                        }
                    }["InfiniteSlider.useEffect"]
                });
            } else {
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(translation, [
                    from,
                    to
                ], {
                    ease: 'linear',
                    duration: currentDuration,
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 0,
                    onRepeat: {
                        "InfiniteSlider.useEffect": ()=>{
                            translation.set(from);
                        }
                    }["InfiniteSlider.useEffect"]
                });
            }
            return controls === null || controls === void 0 ? void 0 : controls.stop;
        }
    }["InfiniteSlider.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex w-max",
            style: {
                ...direction === 'horizontal' ? {
                    x: translation
                } : {
                    y: translation
                },
                gap: "".concat(gap, "px"),
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
_s(InfiniteSlider, "UX/EEmidyeh0RKpJLtWOiKJ690w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = InfiniteSlider;
var _c;
__turbopack_context__.k.register(_c, "InfiniteSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/progressive-blur.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GRADIENT_ANGLES",
    ()=>GRADIENT_ANGLES,
    "ProgressiveBlur",
    ()=>ProgressiveBlur
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
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
function ProgressiveBlur(param) {
    let { direction = 'bottom', blurLayers = 8, className, blurIntensity = 0.25, ...props } = param;
    const layers = Math.max(blurLayers, 2);
    const segmentSize = 1 / (blurLayers + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        children: Array.from({
            length: layers
        }).map((_, index)=>{
            const angle = GRADIENT_ANGLES[direction];
            const gradientStops = [
                index * segmentSize,
                (index + 1) * segmentSize,
                (index + 2) * segmentSize,
                (index + 3) * segmentSize
            ].map((pos, posIndex)=>"rgba(255, 255, 255, ".concat(posIndex === 1 || posIndex === 2 ? 1 : 0, ") ").concat(pos * 100, "%"));
            const gradient = "linear-gradient(".concat(angle, "deg, ").concat(gradientStops.join(', '), ")");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "pointer-events-none absolute inset-0 rounded-[inherit]",
                style: {
                    maskImage: gradient,
                    WebkitMaskImage: gradient,
                    backdropFilter: "blur(".concat(index * blurIntensity, "px)")
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
_c = ProgressiveBlur;
var _c;
__turbopack_context__.k.register(_c, "ProgressiveBlur");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/logo-cloud-4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoCloud",
    ()=>LogoCloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$infinite$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/infinite-slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progressive$2d$blur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progressive-blur.tsx [app-client] (ecmascript)");
;
;
;
function LogoCloud(param) {
    let { logos } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto w-full py-6 md:border-x",
        dir: "ltr",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$infinite$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfiniteSlider"], {
                gap: 64,
                duration: 60,
                durationOnHover: 20,
                children: logos.map((logo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: logo.alt,
                        className: "pointer-events-none h-12 select-none md:h-16",
                        height: "auto",
                        loading: "lazy",
                        src: logo.src,
                        width: "auto"
                    }, "logo-".concat(logo.alt), false, {
                        fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progressive$2d$blur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressiveBlur"], {
                blurIntensity: 1,
                className: "pointer-events-none absolute top-0 left-0 h-full w-12 md:w-[160px]",
                direction: "left"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progressive$2d$blur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressiveBlur"], {
                blurIntensity: 1,
                className: "pointer-events-none absolute top-0 right-0 h-full w-12 md:w-[160px]",
                direction: "right"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo-cloud-4.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = LogoCloud;
var _c;
__turbopack_context__.k.register(_c, "LogoCloud");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Logos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2d$cloud$2d$4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/logo-cloud-4.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full py-12 border-t border-white/10 relative z-10 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-10 text-center text-xl md:text-2xl font-semibold tracking-widest text-muted-foreground uppercase",
                    children: lang === "ar" ? "يثق بنا الأفضل" : "Trusted by the Best"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Logos.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2d$cloud$2d$4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoCloud"], {
                    logos: logos
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Logos.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Logos.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Logos.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Logos, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Logos;
var _c;
__turbopack_context__.k.register(_c, "Logos");
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
        tabs: [
            {
                label: {
                    ar: "تصميم",
                    en: "Design"
                },
                src: "https://cdn.21st.dev/assets/mirror/e1/e10c7175dec8e12ea3daa7204fd1cfba161d61aa3fda5387a022e7e258e3171f.png"
            },
            {
                label: {
                    ar: "أداء",
                    en: "Performance"
                },
                src: "https://cdn.21st.dev/assets/mirror/61/6138ba1bccd2ae7cc89a81c656e36febe6fb4a3166232accf821861e8f8d86a1.jpg"
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
        tabs: [
            {
                label: {
                    ar: "تصميم",
                    en: "Design"
                },
                src: "https://cdn.21st.dev/assets/mirror/e1/e10c7175dec8e12ea3daa7204fd1cfba161d61aa3fda5387a022e7e258e3171f.png"
            },
            {
                label: {
                    ar: "أداء",
                    en: "Performance"
                },
                src: "https://cdn.21st.dev/assets/mirror/61/6138ba1bccd2ae7cc89a81c656e36febe6fb4a3166232accf821861e8f8d86a1.jpg"
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
        tabs: [
            {
                label: {
                    ar: "تصميم",
                    en: "Design"
                },
                src: "https://cdn.21st.dev/assets/mirror/e1/e10c7175dec8e12ea3daa7204fd1cfba161d61aa3fda5387a022e7e258e3171f.png"
            },
            {
                label: {
                    ar: "أداء",
                    en: "Performance"
                },
                src: "https://cdn.21st.dev/assets/mirror/61/6138ba1bccd2ae7cc89a81c656e36febe6fb4a3166232accf821861e8f8d86a1.jpg"
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
        tabs: [
            {
                label: {
                    ar: "تصميم",
                    en: "Design"
                },
                src: "https://cdn.21st.dev/assets/mirror/e1/e10c7175dec8e12ea3daa7204fd1cfba161d61aa3fda5387a022e7e258e3171f.png"
            },
            {
                label: {
                    ar: "أداء",
                    en: "Performance"
                },
                src: "https://cdn.21st.dev/assets/mirror/61/6138ba1bccd2ae7cc89a81c656e36febe6fb4a3166232accf821861e8f8d86a1.jpg"
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
        tabs: [
            {
                label: {
                    ar: "تصميم",
                    en: "Design"
                },
                src: "https://cdn.21st.dev/assets/mirror/e1/e10c7175dec8e12ea3daa7204fd1cfba161d61aa3fda5387a022e7e258e3171f.png"
            },
            {
                label: {
                    ar: "أداء",
                    en: "Performance"
                },
                src: "https://cdn.21st.dev/assets/mirror/61/6138ba1bccd2ae7cc89a81c656e36febe6fb4a3166232accf821861e8f8d86a1.jpg"
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
"[project]/src/components/ui/interactive-hover-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveHoverButton",
    ()=>InteractiveHoverButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const InteractiveHoverButton = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s((param, ref)=>{
    let { text = "Button", className, ...props } = param;
    _s();
    const { isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative w-auto min-w-40 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-brand-black/60 backdrop-blur-md p-3 px-6 text-center font-semibold text-white", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block transition-all duration-300 group-hover:opacity-0", isRtl ? "translate-x-[-0.25rem] group-hover:translate-x-[-3rem]" : "translate-x-1 group-hover:translate-x-12"),
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui/interactive-hover-button.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-10 flex items-center justify-center gap-2 text-brand-black opacity-0 transition-all duration-300 group-hover:opacity-100", isRtl ? "translate-x-[-3rem] group-hover:-translate-x-3" : "translate-x-12 group-hover:-translate-x-1"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/interactive-hover-button.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/interactive-hover-button.tsx",
                        lineNumber: 36,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/interactive-hover-button.tsx",
                        lineNumber: 36,
                        columnNumber: 54
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/interactive-hover-button.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-[40%] h-2 w-2 scale-[1] rounded-lg bg-brand-primary transition-all duration-300 group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-brand-primary", isRtl ? "right-5 group-hover:right-[0%]" : "left-5 group-hover:left-[0%]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/interactive-hover-button.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/interactive-hover-button.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "mCnZ6Umb87gm4hUZ8oMgl/VI5Pg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "mCnZ6Umb87gm4hUZ8oMgl/VI5Pg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = InteractiveHoverButton;
InteractiveHoverButton.displayName = "InteractiveHoverButton";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "InteractiveHoverButton$React.forwardRef");
__turbopack_context__.k.register(_c1, "InteractiveHoverButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/interactive-hover-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
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
const AUTO_PLAY_DURATION = 5000;
function Services() {
    _s();
    const { lang, isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filter only featured services and map placeholder images for them
    const featuredServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].filter((s)=>s.featured).map((service, index)=>({
            ...service,
            numId: "0".concat(index + 1),
            image: [
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789819963/Untitled_pao1la.png",
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789915086/3d_xosoow.png",
                "https://res.cloudinary.com/dzbsayerm/image/upload/v1789915851/Untitled2-01_ocistw.png"
            ][index % 3]
        }));
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Services.useCallback[handleNext]": ()=>{
            setDirection(1);
            setActiveIndex({
                "Services.useCallback[handleNext]": (prev)=>(prev + 1) % featuredServices.length
            }["Services.useCallback[handleNext]"]);
        }
    }["Services.useCallback[handleNext]"], [
        featuredServices.length
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Services.useCallback[handlePrev]": ()=>{
            setDirection(-1);
            setActiveIndex({
                "Services.useCallback[handlePrev]": (prev)=>(prev - 1 + featuredServices.length) % featuredServices.length
            }["Services.useCallback[handlePrev]"]);
        }
    }["Services.useCallback[handlePrev]"], [
        featuredServices.length
    ]);
    const handleTabClick = (index)=>{
        if (index === activeIndex) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        setIsPaused(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            if (isPaused) return;
            const interval = setInterval({
                "Services.useEffect.interval": ()=>{
                    handleNext();
                }
            }["Services.useEffect.interval"], AUTO_PLAY_DURATION);
            return ({
                "Services.useEffect": ()=>clearInterval(interval)
            })["Services.useEffect"];
        }
    }["Services.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5 bg-[#0a0a0f]/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-8 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-bold tracking-tight text-white mb-4",
                                    children: isRtl ? "خدماتنا" : "WHAT WE DO"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground",
                                    children: isRtl ? "خمس خدمات أساسية. كل واحدة مبنية من الصفر لعملك تحديداً. بدون باقات جاهزة وبدون اختصارات." : "Five core services. Each one built from scratch for your specific business. No packages, no shortcuts."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            className: "shrink-0 hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveHoverButton"], {
                                text: isRtl ? "عرض الكل" : "View All"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Services.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 flex flex-col justify-start order-2 lg:order-1 pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-0 justify-start h-[420px] md:h-[480px] lg:h-[500px]",
                                children: featuredServices.map((service, index)=>{
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
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50",
                                                children: [
                                                    "/",
                                                    service.numId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 142,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-500", isActive ? "text-white" : ""),
                                                        children: service.title[lang]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Services.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 23
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
                                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 29
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
                                                                            fileName: "[project]/src/components/sections/Services.tsx",
                                                                            lineNumber: 180,
                                                                            columnNumber: 33
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "w-4 h-4 transition-transform group-hover:translate-x-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Services.tsx",
                                                                            lineNumber: 182,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Services.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Services.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 146,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, service.id, true, {
                                        fileName: "[project]/src/components/sections/Services.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group/gallery",
                                onMouseEnter: ()=>setIsPaused(true),
                                onMouseLeave: ()=>setIsPaused(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-video md:aspect-[4/3] lg:aspect-[16/11] rounded-3xl md:rounded-[2.5rem] overflow-hidden",
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: featuredServices[activeIndex].image,
                                                    alt: featuredServices[activeIndex].title[lang],
                                                    className: "w-full h-full object-contain md:object-cover transition-transform duration-700 hover:scale-105 !m-0 !p-0 block",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            }, activeIndex, false, {
                                                fileName: "[project]/src/components/sections/Services.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Services.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
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
                                                        fileName: "[project]/src/components/sections/Services.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 30
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Services.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 67
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
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
                                                        fileName: "[project]/src/components/sections/Services.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 30
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Services.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 66
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Services.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Services.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Services.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Services.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Services.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 flex justify-center md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/services",
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveHoverButton"], {
                            text: isRtl ? "عرض جميع الخدمات" : "View All Services",
                            className: "w-full max-w-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Services.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Services.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Services.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Services.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Services.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(Services, "bMb5nrySxwlh8gInVAhOsw8BeFM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projects/redeye-cgi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const project = {
    // ── BASIC INFO ──────────────────────────────────
    id: "redeye-cgi",
    slug: "redeye-cgi-commercials",
    year: "2024",
    featured: true,
    // ── TITLES & DESCRIPTIONS ──────────────────────
    title: {
        ar: "إعلانات CGI تجارية — Redeye",
        en: "Redeye CGI Commercials"
    },
    category: {
        ar: "رسوم ثلاثية الأبعاد (CGI)",
        en: "CGI & 3D Animation"
    },
    categorySlug: "cgi",
    description: {
        ar: "إنتاج فيديوين إعلانيين بتقنية CGI ثلاثية الأبعاد لعلامة Redeye، مع التركيز على إبراز تفاصيل المنتج والإخراج البصري الإعلاني.",
        en: "Production of two high-impact 3D CGI commercial videos for Redeye, highlighting product detailing, dynamic lighting, and realistic simulation."
    },
    client: {
        ar: "ريد أي",
        en: "RedEye"
    },
    duration: {
        ar: "أسبوع",
        en: "One Weeks"
    },
    // ── MEDIA ───────────────────────────────────────
    image: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036551/Redeye_mfzebs.png",
    thumbnail: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786034412/dfg-05_xmmyms.png",
    gallery: [
        "https://res.cloudinary.com/dzbsayerm/video/upload/v1742323487/8_vk6qrm.mp4",
        "https://res.cloudinary.com/dzbsayerm/video/upload/v1740245943/redeye_1_lsfhyo.mp4"
    ],
    // ── TAGS & TOOLS ────────────────────────────────
    tags: [
        "CGI",
        "3D Animation",
        "Coffee House"
    ],
    tools: [
        "Blender 3D",
        "DaVinci Resolve"
    ],
    // ── DELIVERABLES ────────────────────────────────
    deliverables: [
        {
            ar: "نمذجة ثلاثية الأبعاد للمنتج",
            en: "3D Product Modeling"
        },
        {
            ar: "إخراج وتحريك CGI",
            en: "CGI Direction & Animation"
        },
        {
            ar: "فيديو إعلاني تجاري (عدد ٢)",
            en: "2 Commercial Video Spots"
        },
        {
            ar: "معالجة بصرية ومونتاج ألوان",
            en: "Compositing & Color Grading"
        }
    ],
    // ── CASE STUDY STORY ────────────────────────────
    challenge: {
        ar: "احتاجت العلامة التجارية Redeye إلى طريقة مبتكرة وجذابة بصرياً لعرض تفاصيل منتجها بعيداً عن أساليب التصوير التقليدي المحدودة، مع خلق طابع بصري جريء يعكس هوية المنتج ويرفع التفاعل على منصات التواصل الاجتماعي.",
        en: "Redeye needed an eye-catching, visually striking way to showcase their product beyond the limitations of traditional live-action shoots, aiming for a bold visual identity that boosts engagement across digital platforms."
    },
    solution: {
        ar: "قمنا ببناء نموذج ثلاثي الأبعاد عالي الدقة للمنتج، وتصميم إضاءة ديناميكية وتأثيرات بصرية متقدمة داخل بيئة ثلاثية الأبعاد كاملة، مما أتاح إنتاج فيديوين إعلانيين بدقة بصرية فائقة ومونتاج يعزز هوية العلامة التجارية.",
        en: "We developed a photorealistic 3D product model, designed dynamic studio lighting, and produced complete CGI environments. This delivered two high-energy commercial spots with premium color grading and seamless visual direction."
    },
    // ── RESULTS ─────────────────────────────────────
    results: [
        {
            metric: "2",
            label: {
                ar: "إعلانات CGI تجارية",
                en: "CGI Commercial Spots"
            }
        },
        {
            metric: "+120%",
            label: {
                ar: "نمو التفاعل والمشاركات",
                en: "Engagement & Shares Growth"
            }
        },
        {
            metric: "+70%",
            label: {
                ar: "معدل المشاهدة الكاملة للفيديو",
                en: "Video Completion Rate"
            }
        }
    ],
    // ── TESTIMONIAL (optional) ──────────────────────
    // testimonial: {
    //   quote: { ar: "شهادة العميل بالعربي", en: "Client testimonial in English" },
    //  author: "Client Name",
    // role: { ar: "المنصب", en: "Job Title" },
    //},
    // ── CATEGORY-SPECIFIC (use only what applies) ───
    // For "web":
    // liveUrl: "https://example.com",
    // For "branding":
    // colors: ["#1E232A", "#D4AF37", "#F8F5F0"],
    // typography: [
    //   { ar: "الخط العربي", en: "English Font" },
    // ],
    // For "cgi" or "production":
    // videoUrl: "https://res.cloudinary.com/.../video.mp4",
    // For "social":
    // platforms: ["Instagram", "TikTok"],
    // ── AUTO-GENERATED (don't change) ───────────────
    href: "/portfolio/redeye-cgi-commercials"
};
const __TURBOPACK__default__export__ = project;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "portfolio",
    ()=>portfolio
]);
// Import all projects
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$redeye$2d$cgi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects/redeye-cgi.ts [app-client] (ecmascript)");
;
const portfolio = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2f$redeye$2d$cgi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/interactive-hover-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Portfolio() {
    _s();
    const { lang, isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const featuredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].filter((project)=>project.featured);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-8 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-bold tracking-tight text-white mb-4",
                                    children: isRtl ? "أعمالنا" : "OUR WORK"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground",
                                    children: isRtl ? "مشاريع حقيقية سلّمناها. صناعات مختلفة، نفس المعيار." : "Real projects we've shipped. Different industries, same standard."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/portfolio",
                            className: "shrink-0 hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveHoverButton"], {
                                text: isRtl ? "عرض الكل" : "View All"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: featuredProjects.map((project, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "group relative flex flex-col rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#7BC1FF]/50 hover:shadow-[0_0_30px_rgba(123,193,255,0.15)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: project.href,
                                    className: "block w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full aspect-[16/10] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: project.thumbnail || project.image,
                                                alt: project.title[lang],
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 ".concat(isRtl ? 'right-4' : 'left-4'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full px-3 py-1 rtl:pt-1.5 rtl:pb-0.5 text-xs font-semibold bg-black/50 backdrop-blur-md text-white border border-white/20",
                                                    children: project.category[lang]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col flex-1 p-6 lg:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: project.href,
                                            className: "block group/link",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white mb-3 transition-colors group-hover/link:text-[#7BC1FF]",
                                                children: project.title[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground mb-6 line-clamp-2",
                                            children: project.description[lang]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-8 mt-auto",
                                            children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-white/70 bg-white/5 rounded-md px-2 py-1 rtl:pt-1.5 rtl:pb-0.5 border border-white/10",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: project.href,
                                            className: "inline-flex items-center gap-2 text-sm font-medium text-[#7BC1FF] transition-all duration-300 hover:text-white",
                                            children: [
                                                isRtl ? "استعراض المشروع" : "View Case Study",
                                                isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 flex justify-center md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/portfolio",
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveHoverButton"], {
                            text: isRtl ? "عرض جميع المشاريع" : "View All Projects",
                            className: "w-full max-w-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Portfolio.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Portfolio.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Portfolio, "2hho/OxZggs4hRJSHooj5Huf+Kk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Comparison.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Comparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Comparison() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const content = {
        heading: {
            ar: "لماذا لا نستخدم القوالب الجاهزة؟",
            en: "THE ANTI TEMPLATE APPROACH"
        },
        subtitle: {
            ar: "لماذا الحلول الجاهزة تفشل في تحقيق نتائج استراتيجية حقيقية.",
            en: "Why generic solutions fail to deliver strategic results in the modern B2B landscape."
        },
        trap: {
            title: {
                ar: "فخ القوالب الجاهزة",
                en: "The Template Trap"
            },
            items: [
                {
                    ar: "حماية ضعيفة من إضافات رخيصة وجاهزة",
                    en: "Weak security from cheap, premade plugins"
                },
                {
                    ar: "سرعة تحميل بطيئة تخسرك عملاءك",
                    en: "Slow loading speeds that lose you customers"
                },
                {
                    ar: "تصاميم جامدة يصعب تعديلها أو توسيعها لاحقاً",
                    en: "Rigid layouts that are hard to change or expand later"
                },
                {
                    ar: "تصاميم مكررة ومملة تشبه أي موقع آخر",
                    en: "Boring, copy paste designs that look like everyone else"
                }
            ],
            footer: {
                ar: "الحالة: تم اكتشاف عنق الزجاجة",
                en: "Status: Bottleneck Detected"
            }
        },
        custom: {
            title: {
                ar: "بناء EagleOn المخصص",
                en: "EagleOn Custom Build"
            },
            items: [
                {
                    ar: "حماية متينة مبنية من الصفر خصيصاً لك",
                    en: "Solid, custom built security from scratch"
                },
                {
                    ar: "مرونة 100% لإضافة أي ميزة في أي وقت",
                    en: "100% flexible to add any new feature anytime"
                },
                {
                    ar: "تصميم فريد مصمم ليكسبك عملاء جدد",
                    en: "Unique, custom design built to win you clients"
                },
                {
                    ar: "أداء خارق وسرعة تحميل فورية",
                    en: "Lightning fast performance and instant loading"
                }
            ],
            footer: {
                ar: "الأداء: 100%",
                en: "Performance: 100%"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-10 lg:py-20 px-4 md:px-10 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full bg-[#0a0a0f] rounded-3xl md:rounded-[3rem] py-16 md:py-32 overflow-hidden border border-white/5 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-brand-primary/10 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Comparison.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                        background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Comparison.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-y-0 right-0 w-1/2 pointer-events-none",
                    style: {
                        maskImage: 'linear-gradient(to left, black, transparent)',
                        WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[200%] h-full animate-grid-scroll opacity-20",
                        style: {
                            backgroundImage: 'linear-gradient(to right, rgba(123, 193, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(123, 193, 255, 0.2) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Comparison.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Comparison.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-20 mix-blend-overlay",
                    style: {
                        maskImage: 'linear-gradient(to right, black, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Comparison.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 relative z-10",
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
                            className: "flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase",
                                    children: content.heading[lang]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground max-w-2xl",
                                    children: content.subtitle[lang]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Comparison.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch",
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
                                        duration: 0.5,
                                        delay: 0.1
                                    },
                                    className: "relative rounded-3xl p-1 bg-gradient-to-b from-red-900/20 to-transparent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex flex-col h-full bg-black/40 backdrop-blur-sm rounded-[22px] border border-red-500/10 p-6 md:p-12 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 z-0 pointer-events-none opacity-[0.08]",
                                                style: {
                                                    backgroundImage: 'url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    mixBlendMode: 'color-dodge'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Comparison.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 flex flex-col h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-mono font-bold text-2xl text-white mb-4",
                                                        children: content.trap.title[lang]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-0.5 w-12 bg-red-900/50 mb-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-6 flex-1",
                                                        children: content.trap.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shrink-0 mt-1 text-red-900 font-bold font-mono text-sm leading-relaxed",
                                                                        children: "[ERR]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-brand-gray2 font-mono text-sm leading-relaxed",
                                                                        children: item[lang]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-12 pt-6 border-t border-red-900/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-800 text-xs font-mono uppercase tracking-widest",
                                                            children: content.trap.footer[lang]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Comparison.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Comparison.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
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
                                        duration: 0.5,
                                        delay: 0.2
                                    },
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-blue-600 to-brand-primary rounded-3xl blur opacity-30 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Comparison.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex flex-col h-full bg-[#0a0a0f] rounded-3xl border border-white/10 p-6 md:p-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-8 w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(123,193,255,0.15)] text-brand-primary",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-3xl text-white mb-4",
                                                    children: content.custom.title[lang]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1 w-20 bg-brand-primary mb-10 shadow-[0_0_10px_rgba(123,193,255,0.5)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-6 flex-1",
                                                    children: content.custom.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "shrink-0 mt-1 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-4 h-4 text-black",
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-medium text-lg leading-relaxed",
                                                                    children: item[lang]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/components/sections/Comparison.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-12 pt-6 border-t border-white/10 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-brand-primary text-xs font-mono uppercase tracking-widest",
                                                            children: content.custom.footer[lang]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Comparison.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1.5 items-end h-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-3.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(123,193,255,0.8)] animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Comparison.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Comparison.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Comparison.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Comparison.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Comparison.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Comparison.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Comparison.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Comparison, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Comparison;
var _c;
__turbopack_context__.k.register(_c, "Comparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/WhyChooseUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChooseUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WhyChooseUs() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
                    en: "World Class Quality"
                },
                description: {
                    ar: "الكود المخصص والتصاميم ثلاثية الأبعاد عندنا بنفس مستوى أكبر بيوت الإنتاج العالمية. تحصل على تنفيذ احترافي بمعايير استوديو بدون أي تنازلات.",
                    en: "Our custom code and 3D renders match the caliber of top tier international production houses. You get elite, studio grade execution without any compromises."
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
                    en: "We aren't blind order takers. If your technical plan has a structural flaw that will break under pressure later, we will call it out immediately and give you the right fix."
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-20 lg:py-32 overflow-hidden border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative z-10",
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
                    className: "flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-bold tracking-tight text-white uppercase",
                        children: content.heading[lang]
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto",
                    children: content.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "bg-black/40 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/5 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-brand-primary font-mono text-sm uppercase tracking-widest transition-colors duration-300",
                                    children: card.num
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold text-xl md:text-2xl mt-3 transition-colors duration-300 group-hover:text-brand-primary",
                                    children: card.title[lang]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-brand-gray2 text-[14.5px] leading-relaxed mt-3",
                                    children: card.description[lang]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, card.num, true, {
                            fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/WhyChooseUs.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(WhyChooseUs, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = WhyChooseUs;
var _c;
__turbopack_context__.k.register(_c, "WhyChooseUs");
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
]);

//# sourceMappingURL=src_602b0be5._.js.map