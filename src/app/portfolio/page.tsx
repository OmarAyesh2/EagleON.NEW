import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Real projects we have shipped. Custom websites, brand identities, CGI commercials, and social media campaigns across different industries.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
