// import Image from "next/image";
// import Hero from "./components/Hero";
// import ProjectsSection from "./components/projects";
import FolderLanding from "./components/folder";
import Sections from "./components/sections";

export default function Home() {
  return (
    <main>
      <FolderLanding/>
      <Sections/>
      {/* <Hero />
      <ProjectsSection /> */}
    </main>
  );
}