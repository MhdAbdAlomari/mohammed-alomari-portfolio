import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { mdxComponents } from "@/components/cms/mdxComponents";
import { getAllPostMeta, getPost } from "@/lib/cms";
import { l } from "@/lib/i18n";
import { PostClient } from "./PostClient";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  const titleEn = l(post.title, "en");
  const excerptEn = l(post.excerpt, "en");
  return {
    title: titleEn,
    description: excerptEn,
    openGraph: { title: titleEn, description: excerptEn, type: "article", publishedTime: post.date },
    twitter: { card: "summary_large_image", title: titleEn, description: excerptEn },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content: _content, ...meta } = post;
  const bodyEn = <MDXRemote source={post.content.en} components={mdxComponents} />;
  const bodyAr = <MDXRemote source={post.content.ar} components={mdxComponents} />;

  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative flex flex-1 flex-col px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-24 lg:px-10 lg:pt-40">
        <PostClient meta={meta} bodyEn={bodyEn} bodyAr={bodyAr} />
      </main>
      <Footer />
    </>
  );
}
