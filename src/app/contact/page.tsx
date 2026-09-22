import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with EagleOn Digital Solutions in Amman, Jordan. Tell us your goals and we will send a fixed, itemized quote within 48 hours.",
};

export default function ContactPage() {
  return <ContactClient />;
}
