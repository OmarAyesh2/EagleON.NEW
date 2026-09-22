import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Every project is scoped to what you actually need. No generic packages. Get a custom quote from EagleOn Digital Solutions.",
};

export default function PricingPage() {
  return <PricingClient />;
}
