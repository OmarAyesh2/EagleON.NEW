"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, ctaLink } from "@/data/navigation";
import { X } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { lang, toggleLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-brand-black/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <Link href="/" onClick={onClose} className="shrink-0 flex items-center">
              <img src="/logo.png" alt="EagleON Logo" className="h-8 w-auto object-contain" />
            </Link>
            <button onClick={onClose} className="text-brand-primary p-2" aria-label="Close menu">
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`text-3xl font-semibold transition-colors ${
                    isActive ? "text-brand-primary" : "text-brand-gray2 hover:text-white"
                  }`}
                >
                  {link.label[lang]}
                </Link>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="p-8 flex flex-col gap-6 items-center border-t border-white/10">
            <div className="flex items-center bg-brand-black/60 rounded-full p-1 border border-brand-gray2/20">
              <button
                onClick={() => toggleLanguage("ar")}
                className={`px-6 py-2 rtl:pt-2.5 rtl:pb-1.5 rounded-full text-sm transition-colors ${lang === 'ar' ? 'text-brand-primary font-semibold bg-white/10' : 'text-brand-gray2'}`}
              >
                العربية
              </button>
              <button
                onClick={() => toggleLanguage("en")}
                className={`px-6 py-2 rtl:pt-2.5 rtl:pb-1.5 rounded-full text-sm transition-colors ${lang === 'en' ? 'text-brand-primary font-semibold bg-white/10' : 'text-brand-gray2'}`}
              >
                English
              </button>
            </div>

            <Link
              href={ctaLink.href}
              onClick={onClose}
              className="bg-brand-primary text-brand-black font-semibold rounded-full w-full py-4 text-center transition-transform active:scale-[0.98]"
            >
              {ctaLink.label[lang]}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
