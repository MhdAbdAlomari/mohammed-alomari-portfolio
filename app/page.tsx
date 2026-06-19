import { About } from "@/components/About";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { getAllPostMeta } from "@/lib/cms";

export default function Home() {
  const posts = getAllPostMeta();
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative flex flex-1 flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
