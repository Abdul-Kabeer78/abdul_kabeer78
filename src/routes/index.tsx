import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubSection } from "@/components/GitHubSection";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdul Kabeer Shahani — CS Student & AI Engineer" },
      { name: "description", content: "Portfolio of Abdul Kabeer Shahani — Computer Science student, C++/Java developer, DSA enthusiast, and AI learner." },
      { property: "og:title", content: "Abdul Kabeer Shahani — Portfolio" },
      { property: "og:description", content: "CS student, C++/Java developer, DSA enthusiast, AI learner." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
