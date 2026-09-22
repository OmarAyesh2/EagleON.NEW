import { Metadata } from "next";
import QAClient from "./QAClient";

export const metadata: Metadata = {
  title: "Q&A",
  description: "Common questions about working with EagleOn Digital Solutions. Pricing, timelines, process, and what to expect.",
};

export default function QAPage() {
  return <QAClient />;
}
