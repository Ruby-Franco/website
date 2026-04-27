import Link from "next/link";
import { notFound } from "next/navigation";
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
    demo: "",
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
  {
    slug: "digital-clock",
    title: "Digital Clock",
    description: "Live clock with animations built as an embedded/frontend project.",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript"],
    images: [],
    videos: [],
    demo: "",
    repo: "https://github.com/Ruby-Franco/digitalClock",
  },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main
      className="min-h-screen w-full py-16 px-6"
      style={{ background: "#f4bdbd" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 mb-10 text-sm"
          style={{ fontFamily: "monospace", color: "#8a4040", textDecoration: "none" }}
        >
          ← back to portfolio
        </Link>

        {/* Title */}
        <h1
          className="mb-1"
          style={{
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            fontSize: "2.5rem",
            color: "#2d1a1a",
          }}
        >
          {project.title}
        </h1>

        {/* Role */}
        <p
          className="mb-6 text-sm"
          style={{ fontFamily: "monospace", color: "#8a4040" }}
        >
          {project.role}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm"
              style={{
                background: "#3d2020",
                color: "#f0b0b0",
                fontFamily: "monospace",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <div
          className="rounded-2xl p-6 mb-8"
          style={{ background: "#3d2020" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#f0b0b0", fontFamily: "monospace" }}
          >
            overview
          </p>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              color: "#ffffff",
              lineHeight: "1.8",
              fontSize: "0.95rem",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Notes — what you specifically worked on */}
        {project.notes && (
          <div
            className="rounded-2xl p-6 mb-8"
            style={{ background: "#3d2020" }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#f0b0b0", fontFamily: "monospace" }}
            >
              what i worked on
            </p>
            <ul className="flex flex-col gap-2">
              {project.notes.map((note, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm"
                  style={{
                    fontFamily: "monospace",
                    color: "#ffffff",
                    lineHeight: "1.7",
                  }}
                >
                  <span style={{ color: "#f0b0b0", flexShrink: 0 }}>—</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots */}
        {project.images?.length > 0 && (
          <div className="mb-8">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#8a4040", fontFamily: "monospace" }}
            >
              screenshots
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-2xl w-full object-cover"
                  style={{ boxShadow: "2px 4px 14px rgba(0,0,0,0.10)" }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {project.videos?.length > 0 && (
          <div className="mb-8">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#8a4040", fontFamily: "monospace" }}
            >
              videos
            </p>
            <div className="flex flex-col gap-2">
              {project.videos.map((video, i) => (
                <a
                  key={i}
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline"
                  style={{ color: "#8a4040", fontFamily: "monospace" }}
                >
                  ▶ Watch Video {i + 1}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {(project.repo || project.demo) && (
          <div
            className="flex gap-4 pt-6 border-t"
            style={{ borderColor: "#e0a0a0" }}
          >
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: "#3d2020",
                  color: "#f0b0b0",
                  fontFamily: "monospace",
                  textDecoration: "none",
                }}
              >
                ⌥ View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: "#3d2020",
                  color: "#f0b0b0",
                  fontFamily: "monospace",
                  textDecoration: "none",
                }}
              >
                ↗ Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}