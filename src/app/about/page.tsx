import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "EagleOn was started with a clear goal: to eliminate lazy templates, fragile code, and cookie cutter designs. A technical and creative studio in Amman, Jordan.",
};

export default function AboutPage() {
  return <AboutClient />;
}
