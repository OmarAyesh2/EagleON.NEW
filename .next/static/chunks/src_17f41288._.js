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
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-brand-primary text-brand-black hover:bg-brand-primary/90",
            outline: "border border-brand-gray1 bg-transparent text-brand-white hover:bg-white/5",
            secondary: "bg-white/10 text-brand-white hover:bg-white/15"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
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
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/animated-gradient.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Hero() {
    _s();
    const [titleNumber, setTitleNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    // Detect language from html dir attribute
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ar");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const checkLang = {
                "Hero.useEffect.checkLang": ()=>{
                    setLang(document.documentElement.lang === "en" ? "en" : "ar");
                }
            }["Hero.useEffect.checkLang"];
            checkLang();
            const observer = new MutationObserver(checkLang);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "lang"
                ]
            });
            return ({
                "Hero.useEffect": ()=>observer.disconnect()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const currentTitles = titles[lang];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative isolate w-full min-h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animated$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                lineNumber: 48,
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
                                    className: "text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: lang === "ar" ? "نبني تجارب رقمية تصنع" : "We Build Digital Experiences That Drive"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[1.5em] items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                                }, "".concat(lang, "-").concat(titleNumber), false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center mx-auto",
                                    children: lang === "ar" ? "مواقع مخصصة، هوية بصرية، إدارة سوشيال ميديا، و CGI سينمائي — مصممة للشركات الجاهزة للتميّز في سوقها." : "Custom websites, brand identity, social media, and cinema-grade CGI — engineered for businesses ready to dominate their market."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "gap-3 rounded-full",
                                        children: [
                                            lang === "ar" ? "ابدأ مشروعك" : "Start Your Project",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        variant: "outline",
                                        className: "gap-3 rounded-full",
                                        children: lang === "ar" ? "شاهد أعمالنا" : "View Our Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Hero, "cRGbDwWBmuUHhTkB3fQZIFekI9U=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_17f41288._.js.map