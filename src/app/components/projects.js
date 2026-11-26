"use client";
import Link from "next/link";
import { projects } from "../data/projects";


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
                  background: "#fffaf0",
                  boxShadow: project.highlight
                    ? "0 0 0 2px #d98080, 2px 4px 14px rgba(0,0,0,0.15)"
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
                    ? "0 0 0 2px #d98080, 2px 4px 14px rgba(0,0,0,0.15)"
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
                    color: "#2d1a1a",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm flex-1"
                  style={{
                    fontFamily: "monospace",
                    color: "#5a4545",
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
                        background: "#fbe3e3",
                        color: "#7a2e2e",
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
                  style={{ borderColor: "#f3dede" }}
                >
                  {project.repo && (
                    <span
                      className="text-xs underline"
                      style={{ color: "#a03c3c", fontFamily: "monospace" }}
                      onClick={(e) => { e.preventDefault(); window.open(project.repo, "_blank"); }}
                    >
                      ⌥ View Code
                    </span>
                  )}
                  {project.demo && (
                    <span
                      className="text-xs underline"
                      style={{ color: "#a03c3c", fontFamily: "monospace" }}
                      onClick={(e) => { e.preventDefault(); window.open(project.demo, "_blank"); }}
                    >
                      ↗ Live Demo
                    </span>
                  )}
                  <span
                    className="text-xs ml-auto"
                    style={{ color: "#a03c3c", fontFamily: "monospace" }}
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