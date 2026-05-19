"use client";
import Link from "next/link";
//import { projects } from "../../components/projectInfo";


export const projects = [
  {
    slug: "calendar-display",
    title: "Calendar Display",
    description: "Senior design project — a physical scheduling tablet for office use, aggregating Google Calendar, Calendly, and Outlook into a single real-time display on Raspberry Pi.",
    role: "Full Stack Developer & Hardware Lead",
    techStack: ["Python", "Tkinter", "Raspberry Pi", "Google Calendar API", "Calendly API", "Outlook API", "Linux"],
    images: [],
    videos: [],
    demo: "",
    repo: "https://github.com/Ruby-Franco/digitalClock"
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    description: "Full-stack web app for STEMNETICS to digitize manual tracking of 70+ STEM activity kits with real-time low-stock alerts and automated end-of-shift surveys.",
    role: "Full Stack Developer",
    techStack: ["React", "Flask", "SQLAlchemy", "RESTful API", "Python"],
    images: [],
    videos: [],
    demo: "https://myinventory-ten.vercel.app/",
    repo: "https://github.com/Ruby-Franco/InventoryManagement",
  },
  {
    slug: "soccer-fantasy-draft",
    title: "Soccer Fantasy Draft Web App",
    description: "Capstone project for LA-Tech.org — a fantasy football draft app with real-time state synchronization across concurrent users.",
    role: "Full Stack Developer",
    techStack: ["React", "Axios", "AWS Amplify", "RESTful API"],
    images: [],
    videos: [],
    demo: "https://soccer-wine.vercel.app/",
    repo: "https://github.com/Ruby-Franco/LA-Tech-Soccer-Fantasy-Draft-Project",
  },
  {
    slug: "graphics-ray-tracer",
    title: "Graphics Ray Tracer",
    description: "Engineered a comprehensive ray tracer implementing the full graphics pipeline — vertex shader, tessellation, geometry shader, clipping, perspective divide, rasterization, fragment shader, and z-buffering.",
    role: "Solo Developer",
    techStack: ["C++", "Graphics Pipeline", "Ray Tracing"],
    images: [],
    videos: [],
    demo: "",
    repo: "",
  },
  {
    slug: "ai-coverage-analysis",
    title: "AI-based Coverage Analysis",
    description: "Recreated a research paper on AI-based Coverage Analysis, developing custom dataset classes, training BERT models, and evaluating performance metrics. Wrote a comprehensive report detailing steps, results, and optimizations.",
    role: "ML Engineer",
    techStack: ["Python", "BERT", "PyTorch", "Software Testing", "NLP"],
    images: [],
    videos: [],
    demo: "",
    repo: "",
  },
  {
    slug: "galaga",
    title: "Galaga",
    description: "Implemented and wired a synchronous state machine project utilizing an LCD screen, joysticks, and buttons to recreate the classic arcade game Galaga on embedded hardware.",
    role: "Embedded Systems Developer",
    techStack: ["C", "Arduino", "Embedded Systems", "State Machines"],
    images: [],
    videos: [
      "https://youtube.com/shorts/FEKUv1DBuSc?si=FW4kttocBKcnIxxi",
      "https://youtu.be/bLYGNdP3L44?si=qfbMcROr1F8pq7tZ",
    ],
    demo: "",
    repo: "",
  },
  // {
  //   slug: "digital-clock",
  //   title: "Digital Clock",
  //   description: "Live clock with animations built as an embedded/frontend project.",
  //   role: "Frontend Developer",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   images: [],
  //   videos: [],
  //   demo: "",
  //   repo: "https://github.com/Ruby-Franco/digitalClock",
  // },
];


export default function ProjectSection() {
  return (
    <section
      id="portfolio"
      className="w-full min-h-screen py-16 px-6"
      style={{ background: "#f4bdbd" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: "#8a4040", fontFamily: "monospace" }}
          >
            portfolio/
          </p>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "2.5rem",
              color: "#2d1a1a",
            }}
          >
            Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="rounded-2xl p-5 flex flex-col gap-3 h-full cursor-pointer"
                style={{
                  background: project.highlight ? "#2d1a1a" : "#3d2020",
                  boxShadow: project.highlight
                    ? "0 0 0 2px #f0b0b0, 2px 4px 14px rgba(0,0,0,0.15)"
                    : "2px 4px 14px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "4px 8px 24px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = project.highlight
                    ? "0 0 0 2px #f0b0b0, 2px 4px 14px rgba(0,0,0,0.15)"
                    : "2px 4px 14px rgba(0,0,0,0.08)";
                }}
              >
                {/* Featured badge */}
                {project.highlight && (
                  <span
                    className="self-start text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "#f0b0b0",
                      color: "#2d1a1a",
                      fontFamily: "monospace",
                    }}
                  >
                    ✦ featured
                  </span>
                )}

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    color: "#f5e6e6",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm flex-1"
                  style={{
                    fontFamily: "monospace",
                    color: "#c9a8a8",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "#5a3030",
                        color: "#f0b0b0",
                        fontFamily: "monospace",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className="flex gap-4 mt-auto pt-2 border-t"
                  style={{ borderColor: "#5a3030" }}
                >
                  {project.repo && (
                    <span
                      className="text-xs underline"
                      style={{ color: "#f0b0b0", fontFamily: "monospace" }}
                      onClick={(e) => { e.preventDefault(); window.open(project.repo, "_blank"); }}
                    >
                      ⌥ View Code
                    </span>
                  )}
                  {project.demo && (
                    <span
                      className="text-xs underline"
                      style={{ color: "#f0b0b0", fontFamily: "monospace" }}
                      onClick={(e) => { e.preventDefault(); window.open(project.demo, "_blank"); }}
                    >
                      ↗ Live Demo
                    </span>
                  )}
                  <span
                    className="text-xs ml-auto"
                    style={{ color: "#f0b0b0", fontFamily: "monospace" }}
                  >
                    read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}