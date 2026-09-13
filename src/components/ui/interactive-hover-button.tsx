import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  const { isRtl } = useLanguage();
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto min-w-40 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-brand-black/60 backdrop-blur-md p-3 px-6 text-center font-semibold text-white",
        className,
      )}
      {...props}
    >
      <span className={cn(
        "inline-block transition-all duration-300 group-hover:opacity-0",
        isRtl ? "translate-x-[-0.25rem] group-hover:translate-x-[-3rem]" : "translate-x-1 group-hover:translate-x-12"
      )}>
        {text}
      </span>
      <div className={cn(
        "absolute inset-0 z-10 flex items-center justify-center gap-2 text-brand-black opacity-0 transition-all duration-300 group-hover:opacity-100",
        isRtl ? "translate-x-[-3rem] group-hover:-translate-x-3" : "translate-x-12 group-hover:-translate-x-1"
      )}>
        <span>{text}</span>
        {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
      </div>
      <div className={cn(
        "absolute top-[40%] h-2 w-2 scale-[1] rounded-lg bg-brand-primary transition-all duration-300 group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-brand-primary",
        isRtl ? "right-5 group-hover:right-[0%]" : "left-5 group-hover:left-[0%]"
      )}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
