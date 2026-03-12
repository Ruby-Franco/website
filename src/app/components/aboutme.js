"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20 px-6"
      style={{ background: "#f5f0c0" }}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative tape strips */}
      <div className="absolute top-10 left-[20%] w-16 h-4 opacity-50 rotate-[-8deg]"
        style={{ background: "#e8d87a", borderRadius: "2px" }} />
      <div className="absolute top-24 right-[15%] w-12 h-4 opacity-40 rotate-[5deg]"
        style={{ background: "#e8d87a", borderRadius: "2px" }} />
      <div className="absolute bottom-16 left-[10%] w-14 h-4 opacity-45 rotate-[3deg]"
        style={{ background: "#e8d87a", borderRadius: "2px" }} />

      {/* Main scrapbook card layout */}
      <div className="relative w-full max-w-5xl">

        {/* Section heading — torn paper style */}
        <div
          className="absolute -top-8 left-4 z-10"
          style={{
            fontFamily: "'Georgia', serif",
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: "#8a7a20",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          about_me/
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* LEFT — photo card, slightly rotated */}
          <div
            className="relative"
            style={{
              transform: "rotate(-2deg)",
              transformOrigin: "center",
            }}
          >
            {/* Photo polaroid */}
            <div
              className="bg-white p-3 pb-10 shadow-lg"
              style={{
                boxShadow: "3px 5px 18px rgba(0,0,0,0.15)",
              }}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src="/rubyStanding.svg"
                  alt="Ruby Franco"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p
                className="text-center mt-3 text-sm"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontStyle: "italic",
                  color: "#5a5020",
                }}
              >
                Ruby Franco ✦
              </p>
            </div>

            {/* Tape on photo */}
            <div
              className="absolute -top-3 left-1/2 w-14 h-4 opacity-60"
              style={{
                background: "#e8d87a",
                borderRadius: "2px",
                transform: "translateX(-50%) rotate(1deg)",
              }}
            />
          </div>

          {/* RIGHT — info cards stacked scrapbook style */}
          <div className="flex flex-col gap-5">

            {/* Bio card */}
            <div
              className="bg-white p-5 shadow-md"
              style={{
                transform: "rotate(1deg)",
                boxShadow: "2px 4px 14px rgba(0,0,0,0.10)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "#a09030", fontFamily: "monospace" }}
              >
                bio.txt
              </p>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.95rem",
                  color: "#3a3020",
                  lineHeight: "1.7",
                }}
              >
                {/* ✏️ Replace this with your bio */}
                Hi! I'm Ruby — a software developer based in LA. UCR 2024 CS graduate. I love building things for the web, going to concerts!
              </p>
            </div>

            {/* Links card */}
            <div
              className="bg-white p-5 shadow-md"
              style={{
                transform: "rotate(-0.8deg)",
                boxShadow: "2px 4px 14px rgba(0,0,0,0.10)",
                borderRadius: "2px",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#a09030", fontFamily: "monospace" }}
              >
                links/
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "GitHub", href: "https://github.com/Ruby-Franco", icon: "⌥" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/ruby-franco/", icon: "◈" }, // ✏️ replace with your LinkedIn
                  { label: "Resume", href: "#", icon: "↓", download: true }, // ✏️ replace with your resume link
                  { label: "Email", href: "mailto:rubyfranco.1@gmail.com", icon: "✉" }, // ✏️ replace with your email
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.download ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "#3a3020",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#8a7a20")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3a3020")}
                  >
                    <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>{link.icon}</span>
                    {link.label}
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                      style={{ color: "#8a7a20" }}
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location tag */}
            <div
              className="self-start px-3 py-1"
              style={{
                background: "#e8d87a",
                borderRadius: "2px",
                transform: "rotate(0.5deg)",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: "#5a5020",
                letterSpacing: "0.08em",
              }}
            >
              📍 Los Angeles, CA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}