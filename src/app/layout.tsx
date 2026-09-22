import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Poppins, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GlassFilter } from "@/components/ui/liquid-glass";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eagleon.digital"),
  title: {
    default: "EagleOn Digital Solutions",
    template: "%s | EagleOn Digital",
  },
  description: "Custom websites, full brand identity, social media management, and cinema grade CGI. A technical and creative studio based in Amman, Jordan.",
  keywords: ["Web Development Jordan", "تصميم مواقع الأردن", "CGI Amman", "Brand Identity Jordan", "Digital Solutions Amman", "EagleOn Digital", "حلول رقمية عمّان"],
  authors: [{ name: "EagleOn Digital Solutions" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_JO",
    siteName: "EagleOn Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("eagleon_lang")?.value;
  const lang = langCookie === "en" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={`${poppins.variable} ${tajawal.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EagleOn Digital Solutions",
              url: "https://eagleon.digital",
              logo: "https://eagleon.digital/Logo.png",
              email: "info@eagleon.digital",
              telephone: ["+962793188188", "+962771299937"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amman",
                addressCountry: "JO",
              },
              sameAs: [],
            }),
          }}
        />
        <LanguageProvider initialLang={lang}>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-brand-primary focus:text-brand-black skip-link">
            Skip to content
          </a>
          <GlassFilter />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
