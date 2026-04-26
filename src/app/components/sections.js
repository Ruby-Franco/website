import AboutMe from "./aboutme";
import ProjectSection from "./projects";
import Experience from "./experience";
import Extras from "./extras";

const sections = [
  { id: "experience",       label: "Experience",           color: "#2d1a1a", labelColor: "#f5f0eb" },
  { id: "extras", label: "Extras",    color: "#aeb770ff" },
];

export default function Sections() {
  return (
    <>

        <AboutMe/>
        <ProjectSection/> 
        <Experience />
        <Extras />
    </>
  );
}