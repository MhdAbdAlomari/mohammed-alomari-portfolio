"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import type { ReactNode } from "react";
import type { PostMeta } from "@/lib/cms";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { l } from "@/lib/i18n";

type Props = {
  meta: PostMeta;
  bodyEn: ReactNode;
  bodyAr: ReactNode;
};

export function PostClient({ meta, bodyEn, bodyAr }: Props) {
  const { t, locale } = useLocale();
  const body = locale === "ar" ? bodyAr : bodyEn;
  return (
    <article className="mx-auto w-full max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        {t.blog.allArticles}
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium text-accent">
            {l(meta.category, locale)}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-soft">
            <Clock size={11} />
            {l(meta.readingTime, locale)}
          </span>
          <time className="text-muted-soft" dateTime={meta.date}>
            {new Date(meta.date).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight gradient-text sm:text-4xl lg:text-5xl">
          {l(meta.title, locale)}
        </h1>
        <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
          {l(meta.excerpt, locale)}
        </p>
      </header>

      <div className="prose mt-14">{body}</div>
    </article>
  );
}
