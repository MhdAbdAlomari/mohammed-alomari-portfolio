import type { Metadata } from "next";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAllPostMeta } from "@/lib/cms";
import { BlogIndexClient } from "./BlogIndexClient";

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
    "Mohammed Abdulrahman Alomari",
  ],
  openGraph: {
    title: "Writing — Mohammed Abdulrahman Alomari",
    description:
      "Notes on Flutter, Clean Architecture, Bloc, and shipping production mobile apps.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing — Mohammed Abdulrahman Alomari",
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
        <BlogIndexClient posts={posts} />
      </main>
      <Footer />
    </>
  );
}
