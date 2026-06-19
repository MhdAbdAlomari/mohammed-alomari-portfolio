import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
};

export type Post = PostMeta & {
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function ensureDir(): string {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
  return POSTS_DIR;
}

function readPostFile(file: string): Post | null {
  const slug = file.replace(/\.mdx?$/, "");
  const full = path.join(POSTS_DIR, file);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  if (!data.title || !data.excerpt) return null;
  return {
    slug,
    title: String(data.title),
    excerpt: String(data.excerpt),
    category: String(data.category ?? "Notes"),
    readingTime: String(data.readingTime ?? estimateReadingTime(content)),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    content,
  };
}

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 220));
  return `${mins} min read`;
}

export function getAllPosts(): Post[] {
  const dir = ensureDir();
  const files = fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f));
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
