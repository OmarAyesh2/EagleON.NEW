"use client";


import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { useLanguage } from "@/context/LanguageContext";

const logos = [
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036551/Redeye_mfzebs.png",
    alt: "RedEYE",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036554/Jilya_jsvpqn.png",
    alt: "Jilya",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036555/Lorenzo_um0xuj.png",
    alt: "Lorenzo",
  },
  {
    src: "https://placehold.co/200x80/transparent/FFFFFF/png?text=1%2F2+M",
    alt: "1/2 M",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036553/Brandaty_irbxbr.png",
    alt: "Brandaty",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036553/Burger_Hunch_t86psh.png",
    alt: "Burger Hunch",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036552/SkyLinks_vpq5ob.png",
    alt: "SkyLinks",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786036552/Sugar_Dose_ewwne1.png",
    alt: "Sugar Dose",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786936001/Asset_2_kqafqk.png",
    alt: "Proton",
  },
  {
    src: "https://res.cloudinary.com/dzbsayerm/image/upload/v1786934046/Asset_4_qwvlxq.png",
    alt: "LeCiel Fragrance",
  },
];

export default function Logos() {
  const { lang } = useLanguage();

  return (
    <section className="w-full py-12 border-t border-white/10 relative z-10 overflow-hidden">
      <div className="w-full">
        <h2 className="mb-10 text-center text-xl md:text-2xl font-semibold tracking-widest text-muted-foreground uppercase">
          {lang === "ar" ? "يثق بنا الأفضل" : "Trusted by the Best"}
        </h2>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}
