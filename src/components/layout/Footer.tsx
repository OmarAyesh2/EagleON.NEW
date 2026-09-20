"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const { lang, isRtl } = useLanguage();

  const content = {
    col1: {
      heading: { ar: "عن الشركة", en: "About Us" },
      description: {
        ar: "شريكك الاستراتيجي للنمو الرقمي في عمّان، الأردن. نحوّل التحديات إلى فرص من خلال الدقة الهندسية والإبداع المحسوب.",
        en: "Your strategic partner for digital growth in Amman, Jordan. We transform challenges into opportunities through engineering precision and calculated creativity."
      }
    },
    col2: {
      heading: { ar: "روابط سريعة", en: "Quick Links" },
      links: [
        { label: { ar: "الرئيسية", en: "Home" }, href: "/" },
        { label: { ar: "عن الشركة", en: "About Us" }, href: "/about" },
        { label: { ar: "خدماتنا", en: "Services" }, href: "/services" },
        { label: { ar: "أعمالنا", en: "Portfolio" }, href: "/portfolio" },
        { label: { ar: "الأسعار", en: "Pricing" }, href: "/pricing" }
      ]
    },
    col3: {
      heading: { ar: "خدماتنا", en: "Our Services" },
      links: [
        { label: { ar: "أنظمة الهوية البصرية", en: "Brand Identity Systems" }, href: "/services/branding" },
        { label: { ar: "CGI وتأثيرات سينمائية", en: "CGI & Cinema Grade VFX" }, href: "/services/3d-modeling-cgi" },
        { label: { ar: "تطبيقات ومنصات الويب", en: "Web Applications & Platforms" }, href: "/services/web-development" }
      ]
    },
    col4: {
      heading: { ar: "تواصل معنا", en: "Contact Us" },
      address: {
        ar: "246، الطابق الخامس، مركز رام الله، شارع خالد بن الوليد، جبل الحسين، عمّان",
        en: "246, 5th floor, Ramalla center, Khalid Bin Al Waleed St, Jabal Al Hussain, Amman"
      }
    }
  };

  return (
    <footer className="w-full bg-white/[0.02] border-t border-white/[0.06]">
      <div className="container mx-auto px-4 py-16 md:py-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Column 1: About */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {content.col1.heading[lang]}
            </h3>
            <div className="mb-6">
              <img src="/logo_footer.png" alt="EagleON Logo" className="h-16 md:h-12 w-auto object-contain" />
            </div>
            <p className="text-brand-gray2 text-sm leading-relaxed">
              {content.col1.description[lang]}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {content.col2.heading[lang]}
            </h3>
            <ul className="flex flex-col space-y-3">
              {content.col2.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-brand-gray2 text-sm transition-colors hover:text-brand-primary block w-fit"
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {content.col3.heading[lang]}
            </h3>
            <ul className="flex flex-col space-y-3">
              {content.col3.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-brand-gray2 text-sm transition-colors hover:text-brand-primary block w-fit"
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              {content.col4.heading[lang]}
            </h3>
            <div className="flex flex-col space-y-3 mb-6">
              <a
                href="mailto:info@eagleon.digital"
                className="text-brand-gray2 text-sm transition-colors hover:text-brand-primary block w-fit"
              >
                info@eagleon.digital
              </a>
              <a
                href="tel:+962793188188"
                dir="ltr"
                className={`text-brand-gray2 text-sm transition-colors hover:text-brand-primary block w-full ${isRtl ? 'text-right' : 'text-left'}`}
              >
                +962 7 9318 8188
              </a>
              <a 
                href="https://maps.app.goo.gl/rGj9HyRHYZc4SFYr6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray2 text-sm leading-relaxed pt-2 transition-colors hover:text-brand-primary block"
              >
                {content.col4.address[lang]}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-auto">
              <a
                href="https://www.instagram.com/eagleon.digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-gray2 transition-colors hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/eagleon-digital-solution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-brand-gray2 transition-colors hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-center text-center">
          <p className="text-xs text-brand-gray2">
            {lang === "ar"
              ? "© 2026 EAGLEON للحلول الرقمية. جميع الحقوق محفوظة."
              : "© 2026 EAGLEON Digital Solutions. All Rights Reserved."}
          </p>
        </div>

      </div>
    </footer>
  );
}
