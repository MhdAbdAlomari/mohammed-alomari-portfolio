import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackgroundFX } from "@/components/BackgroundFX";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getProject, projects } from "@/components/data";
import { l } from "@/lib/i18n";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const titleEn = l(project.title, "en");
  const descriptionEn = l(project.description, "en");
  const title = `${titleEn} — Case Study`;
  const ogImage = project.cover?.src;
  const altEn = project.cover ? l(project.cover.alt, "en") : titleEn;
  const url = `/projects/${project.slug}`;

  return {
    title,
    description: descriptionEn,
    keywords: project.keywords,
    authors: [{ name: "Mohammed Abdulrhman Alomari" }],
    openGraph: {
      title,
      description: descriptionEn,
      type: "article",
      url,
      siteName: "Mohammed Alomari",
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            alt: altEn,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: descriptionEn,
      ...(ogImage && { images: [ogImage] }),
    },
    alternates: { canonical: url },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative flex flex-1 flex-col">
        <CaseStudyLayout slug={project.slug} />
      </main>
      <Footer />
    </>
  );
}
