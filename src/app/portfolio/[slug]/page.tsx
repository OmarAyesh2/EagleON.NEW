import { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import CaseStudyClient from "./CaseStudyClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = portfolio.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title.en,
    description: project.description.en,
    openGraph: {
      images: project.thumbnail || project.image || [],
    },
  };
}

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}
