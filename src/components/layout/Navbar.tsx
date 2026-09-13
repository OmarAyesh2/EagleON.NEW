"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, ctaLink } from "@/data/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { GlassEffect } from "@/components/ui/liquid-glass";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true);  // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav 
        className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl"
        style={{
          transform: `translateX(-50%) translateY(${visible ? '0' : '-150%'})`,
          opacity: visible ? 1 : 0,
          transition: 'transform 0.35s ease, opacity 0.35s ease'
        }}
      >
        <GlassEffect className="rounded-full items-center">
          <div className="flex items-center justify-between w-full px-5 py-2.5 gap-1">
            
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <img src="/logo.png" alt="EagleON Logo" className="h-6 w-auto object-contain" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 mx-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label[lang]}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-4 shrink-0">
              {/* Language Toggle Pill */}
              <div className="flex items-center bg-brand-black/40 rounded-full p-1 border border-brand-gray2/20 backdrop-blur-sm">
                <button
                  onClick={() => toggleLanguage("ar")}
                  className={`px-3 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded-full text-xs transition-colors ${lang === 'ar' ? 'text-brand-primary font-semibold bg-white/5' : 'text-brand-gray2'}`}
                >
                  AR
                </button>
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`px-3 py-1 rtl:pt-1.5 rtl:pb-0.5 rounded-full text-xs transition-colors ${lang === 'en' ? 'text-brand-primary font-semibold bg-white/5' : 'text-brand-gray2'}`}
                >
                  EN
                </button>
              </div>

              {/* CTA Button */}
              <Link 
                href={ctaLink.href}
                className="bg-brand-primary text-brand-black font-semibold rounded-full px-5 py-2 rtl:pt-2.5 rtl:pb-1.5 text-sm transition-transform hover:scale-[1.03] hover:brightness-110 whitespace-nowrap"
              >
                {ctaLink.label[lang]}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-brand-primary p-2 relative z-10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </GlassEffect>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
