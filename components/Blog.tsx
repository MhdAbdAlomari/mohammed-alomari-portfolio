"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import type { PostMeta } from "@/lib/cms";
import { Section } from "./ui/Section";
import { container, fadeUp, viewportOnce } from "./motion";
import { useLocale } from "./i18n/LocaleProvider";

export function Blog({ posts }: { posts: PostMeta[] }) {
  const { t } = useLocale();
  return (
    <Section id="blog" eyebrow={t.blog.eyebrow} title={t.blog.title} subtitle={t.blog.subtitle}>
      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/30"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium text-accent">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-soft">
                    <Clock size={11} />
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="mt-5 text-balance text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                  {t.blog.readArticle}
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent">
          {t.blog.viewAll}
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </Section>
  );
}
