import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { mdxComponents } from "@/components/cms/mdxComponents";
import { getAllPostMeta, getPost } from "@/lib/cms";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative flex flex-1 flex-col px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-24 lg:px-10 lg:pt-40">
        <article className="mx-auto w-full max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
            <ArrowLeft size={14} />
            All articles
          </Link>

          <header className="mt-8">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium text-accent">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-muted-soft">
                <Clock size={11} />
                {post.readingTime}
              </span>
              <time className="text-muted-soft" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>
            <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight gradient-text sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-balance text-lg leading-relaxed text-muted">{post.excerpt}</p>
          </header>

          <div className="prose mt-14">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
