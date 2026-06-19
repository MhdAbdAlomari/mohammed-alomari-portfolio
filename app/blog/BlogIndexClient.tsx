"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import type { PostMeta } from "@/lib/cms";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { l } from "@/lib/i18n";

export function BlogIndexClient({ posts }: { posts: PostMeta[] }) {
  const { t, locale } = useLocale();
  return (
    <div className="mx-auto w-full max-w-5xl">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        {t.blog.backHome}
      </Link>

      <header className="mt-8 max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
          {t.blog.eyebrow}
        </span>
        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight gradient-text sm:text-5xl lg:text-6xl">
          {t.blog.indexHeroTitle}
        </h1>
        <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
          {t.blog.indexHeroSubtitle}
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
                  {l(post.category, locale)}
                </span>
                <span className="inline-flex items-center gap-1 text-muted-soft">
                  <Clock size={11} />
                  {l(post.readingTime, locale)}
                </span>
              </div>
              <h2 className="mt-5 text-balance text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-accent">
                {l(post.title, locale)}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {l(post.excerpt, locale)}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                {t.blog.readArticle}
                <ArrowUpRight size={12} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
