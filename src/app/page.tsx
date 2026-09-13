import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";

const Services = dynamic(() => import("@/components/sections/Services"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Comparison = dynamic(() => import("@/components/sections/Comparison"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const CTABand = dynamic(() => import("@/components/sections/CTABand"));

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <Services />
      <Portfolio />
      <Comparison />
      <WhyChooseUs />
      <CTABand />
    </div>
  );
}
