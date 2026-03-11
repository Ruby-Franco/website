import Image from "next/image";
import Hero from "./components/Hero";
import ProjectsSection from "./components/projects";
import { SpeedInsights } from "@vercel/speed-insights/next"
import FolderLanding from "./components/folder";
export default function Home() {
  return (
    <main>
      <FolderLanding/>
      <Hero />
      <ProjectsSection />
      <SpeedInsights />
    </main>
  );
}