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
  title: "EagleOn Digital Solutions",
  description: "EagleOn Digital Solutions Website",
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
