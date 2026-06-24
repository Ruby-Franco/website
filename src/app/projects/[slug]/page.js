import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

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

        {/* Class diagram evolution */}
        {project.diagrams && (
          <div className="mb-8">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#8a4040", fontFamily: "monospace" }}
            >
              class diagram evolution
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[project.diagrams.old, project.diagrams.new].map((d, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <img
                    src={d.src}
                    alt={`${project.title} ${d.label}`}
                    className="rounded-2xl w-full object-contain"
                    style={{ boxShadow: "2px 4px 14px rgba(0,0,0,0.10)", background: "#0a0a14" }}
                  />
                  <p
                    className="text-xs"
                    style={{ color: "#8a4040", fontFamily: "monospace" }}
                  >
                    {d.label}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#5a2a2a", fontFamily: "'Georgia', serif", lineHeight: "1.5" }}
                  >
                    {d.caption}
                  </p>
                </div>
              ))}
            </div>
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