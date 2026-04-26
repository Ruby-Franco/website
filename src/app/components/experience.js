"use client";
import { useState } from "react";

const experience = [
  {
    company: "LA-Tech Rising",
    role: "SWE Intern",
    location: "Los Angeles, CA",
    period: "September - December 2025",
    category: "Software Engineer",
    bullets: [
      "Engineered core draft interface in React, utilizing Axios for RESTful API requests to manage player selection, budget enforcement, and real-time draft state synchronization across concurrent users",
      "Implemented frontend-backend integration for player filtering and selection features, connecting UI components to AWS Amplify services with error handling and loading states",
      "Contributed to full-stack development in Agile 9-person team, using Git for version control and participating in code reviews and technical documentation",
    ],
    techStack: ["React", "Axios", "AWS Amplify", "Git"],
  },
  {
    company: "STEMNETICS",
    role: "Operations Intern",
    location: "Los Angeles, CA",
    period: "August - December 2025",
    category: "Software Engineer",
    bullets: [
      "Developed full-stack inventory management web application using React and Flask to digitize manual tracking of 70+ STEM activity kits, implementing RESTful API with SQLAlchemy ORM and real-time low-stock alerts",
      "Built admin dashboard with tabbed interface and search functionality to manage inventory across multiple school locations and analyze instructor survey submissions",
      "Designed automated workflows using Jotform and Google Sheets, eliminating 7-day processing delays and ensuring zero data loss across hiring pipeline for 10-20 monthly applicants",
    ],
    techStack: ["React", "Flask", "SQLAlchemy", "Jotform", "Google Sheets"],
  },
  {
    company: "Rare Combinations L.L.C.",
    role: "Hardware Technician",
    location: "Los Angeles, CA",
    period: "July 2022 – August 2023",
    category: "Embedded Systems",
    bullets: [
      "Constructed alcohol detector devices consisting of 15 different electrical parts, testing approximately 130 devices before distribution to kombucha breweries throughout the United States",
      "Facilitated device production including maintenance of and technical work with Arduino microprocessors, PCBs, wires, and soldering machines",
    ],
    techStack: ["Arduino", "PCB", "Soldering", "Embedded Systems"],
  },
  {
    company: "ID Tech",
    role: "Computer Science Instructor",
    location: "UCLA",
    period: "May - August 2025",
    category: "Teaching",
    bullets: [
      "Taught Python fundamentals, data science, and ML/AI concepts to 30+ students aged 12-18, covering NumPy, Pandas, scikit-learn, and API integration through hands-on coding projects",
      "Mentored students through individual coding challenges in a project-based learning environment, achieving over 90% project completion rate",
    ],
    techStack: ["Python", "NumPy", "Pandas", "scikit-learn"],
  },
  {
    company: "ARC — UCR",
    role: "Math Lab Leader (ARC 035)",
    location: "Riverside, CA",
    period: "July 2023 – March 2024",
    category: "Teaching",
    bullets: [
      "Developed interactive and adaptable intermediate algebra lessons for multiple classes of 30 UCR students, tailoring lessons to meet individual class needs",
      "Cultivated a supportive learning environment by hosting office hours and providing personalized assistance to students, ensuring an enriching and collaborative experience",
    ],
    techStack: [],
  },
  {
    company: "Modern Bread and Bagel",
    role: "Barista",
    location: "Los Angeles, CA",
    period: "August – December 2024",
    category: "Other",
    bullets: [
      "Awarded Employee of the Month within the first month — recognized for fast onboarding, reliability, and strong customer-facing communication skills",
    ],
    techStack: [],
  },
];

const categories = ["All", "Software Engineer", "Embedded Systems", "Teaching", "Other"];

export default function Experience() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? experience
    : experience.filter((job) => job.category === active);

  return (
    <section
      id="experience"
      className="w-full min-h-screen py-16 px-6"
      style={{ background: "#2d1a1a" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: "#c9a8a8", fontFamily: "monospace" }}
          >
            experience/
          </p>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "2.5rem",
              color: "#f5e6e6",
            }}
          >
            Work Experience
          </h2>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full text-xs transition-all"
              style={{
                fontFamily: "monospace",
                background: active === cat ? "#f0b0b0" : "#5a3030",
                color: active === cat ? "#2d1a1a" : "#c9a8a8",
                border: "none",
                cursor: "pointer",
                fontWeight: active === cat ? "bold" : "normal",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {filtered.map((job, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                background: "#3d2020",
                boxShadow: "2px 4px 14px rgba(0,0,0,0.2)",
                transition: "opacity 0.2s ease",
              }}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontStyle: "italic",
                      fontSize: "1.3rem",
                      color: "#f5e6e6",
                    }}
                  >
                    {job.company}
                  </h3>
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.85rem",
                      color: "#f0b0b0",
                    }}
                  >
                    {job.role} — {job.location}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span
                    className="text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: "#5a3030",
                      color: "#c9a8a8",
                      fontFamily: "monospace",
                    }}
                  >
                    {job.period}
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: "#f0b0b033",
                      color: "#f0b0b0",
                      fontFamily: "monospace",
                    }}
                  >
                    {job.category}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2 mb-4">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm"
                    style={{
                      fontFamily: "monospace",
                      color: "#c9a8a8",
                      lineHeight: "1.7",
                    }}
                  >
                    <span style={{ color: "#f0b0b0", flexShrink: 0, marginTop: "2px" }}>—</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              {job.techStack.length > 0 && (
                <div
                  className="flex flex-wrap gap-1 pt-3 border-t"
                  style={{ borderColor: "#5a3030" }}
                >
                  {job.techStack.map((tech) => (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}