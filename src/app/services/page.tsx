import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Custom websites, brand identity, social media management, cinema grade CGI, and media production. Five core services built from scratch for your business.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
