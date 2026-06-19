import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllPostMeta } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on Flutter, Clean Architecture, Bloc, and shipping production mobile apps — from a working Flutter engineer behind the Ashafaq Car Wash and ShamFix products.",
  keywords: [
    "Flutter blog",
    "Flutter Clean Architecture",
    "Bloc state management",
    "Production Flutter",
    "Flutter engineering notes",
    "Mohammed Alomari",
  ],
  openGraph: {
    title: "Writing — Mohammed Alomari",
    description:
      "Notes on Flutter, Clean Architecture, Bloc, and shipping production mobile apps.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing — Mohammed Alomari",
    description: "Notes from a working Flutter engineer.",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPostMeta();
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative flex flex-1 flex-col px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-24 lg:px-10 lg:pt-40">
        <div className="mx-auto w-full max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
            <ArrowLeft size={14} />
            Back home
          </Link>

          <header className="mt-8 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
              Writing
            </span>
            <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight gradient-text sm:text-5xl lg:text-6xl">
              Notes from the field.
            </h1>
            <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
              Short, honest notes on Flutter, Clean Architecture, and shipping production mobile products.
            </p>
          </header>

          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/30"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium text-accent">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-soft">
                      <Clock size={11} />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-5 text-balance text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    Read article
                    <ArrowUpRight size={12} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
