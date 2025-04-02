import Image from "next/image";
import Hero from "./components/Hero";
import ProjectsSection from "./components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
    </main>
  );
}