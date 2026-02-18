import Image from "next/image";
import Hero from "./components/Hero";
import ProjectsSection from "./components/projects";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <SpeedInsights />
    </main>
  );
}