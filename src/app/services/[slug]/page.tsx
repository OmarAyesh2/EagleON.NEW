import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title.en,
    description: service.description?.en || service.overview?.en || "",
  };
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />;
}
