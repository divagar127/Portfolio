import { createFileRoute } from "@tanstack/react-router";
import { Navbar, SocialRail } from "@/components/navbar";
import { AmbientBackground } from "@/components/motion-primitives";
import {
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Research,
  Experience,
  Activity,
  Contact,
  Footer,
} from "@/components/sections";

const title = "Divagar S — Software Developer & AI/ML Engineer";
const description =
  "Portfolio of Divagar S: AI/ML engineer and software developer working on multilingual NLP, healthcare AI, BCI research and real-time data pipelines.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <SocialRail />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Activity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
