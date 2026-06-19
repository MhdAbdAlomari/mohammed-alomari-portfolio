import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale, Localized } from "@/lib/i18n";

export type PostMeta = {
  slug: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  category: Localized<string>;
  readingTime: Localized<string>;
  date: string;
};

export type Post = PostMeta & {
  content: Localized<string>;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function ensureDir(): string {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
  return POSTS_DIR;
}

function pickLS(en: string, ar: unknown): Localized<string> {
  return { en, ar: typeof ar === "string" && ar.length > 0 ? ar : en };
}

function readPostFile(file: string): Post | null {
  const slug = file.replace(/\.mdx?$/, "");
  const full = path.join(POSTS_DIR, file);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  if (!data.title || !data.excerpt) return null;

  const titleEn = String(data.title);
  const excerptEn = String(data.excerpt);
  const categoryEn = String(data.category ?? "Notes");
  const readingTimeEn = String(data.readingTime ?? estimateReadingTime(content));

  const arContent = readArabicBody(slug);

  return {
    slug,
    title: pickLS(titleEn, data.title_ar),
    excerpt: pickLS(excerptEn, data.excerpt_ar),
    category: pickLS(categoryEn, data.category_ar),
    readingTime: pickLS(readingTimeEn, data.readingTime_ar),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    content: { en: content, ar: arContent ?? content },
  };
}

function readArabicBody(slug: string): string | null {
  for (const ext of ["mdx", "md"] as const) {
    const file = path.join(POSTS_DIR, `${slug}.ar.${ext}`);
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, "utf8");
      const { content } = matter(raw);
      return content;
    }
  }
  return null;
}

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 220));
  return `${mins} min read`;
}

export function getAllPosts(): Post[] {
  const dir = ensureDir();
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .filter((f) => !/\.ar\.mdx?$/.test(f));
  const posts = files
    .map(readPostFile)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map(({ content: _, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  const dir = ensureDir();
  for (const ext of ["mdx", "md"] as const) {
    const file = path.join(dir, `${slug}.${ext}`);
    if (fs.existsSync(file)) {
      return readPostFile(`${slug}.${ext}`);
    }
  }
  return null;
}

export function pickContent(post: Post, locale: Locale): string {
  return post.content[locale] ?? post.content.en;
}
