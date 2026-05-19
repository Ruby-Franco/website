"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20 px-6"
      style={{ background: "#f5f0c0" }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative tape strips */}
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
            fontSize: "1.5rem",
            color: "#2d1a1a",
            letterSpacing: "0.1em",
          }}
        >
          About Me/Ruby Franco
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
            <img
            src="/rubyStanding.svg"
            alt="Ruby Franco"
            className="w-full h-auto"
            />

          </div> 
          
          <div className="flex flex-col gap-5">

            {/* Bio card */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "#c8d4a0",
                transform: "rotate(1deg)",
                boxShadow: "2px 4px 14px rgba(0,0,0,0.10)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "#5a6a30", fontFamily: "monospace" }}
              >
               Bio
              </p>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.95rem",
                  color: "#2d3a10",
                  lineHeight: "1.7",
                }}
              >
                Hi! I'm Ruby, I'm a software developer based in LA. UCR 2024 CS graduate. Proudly part of the 2% of Latinas in engineering. STEM is for everyone.
              </p>
            </div>

            {/* Links card */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "#c8d4a0",
                transform: "rotate(-0.8deg)",
                boxShadow: "2px 4px 14px rgba(0,0,0,0.10)"
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color:  "#5a6a30", fontFamily: "monospace" }}
              >
                links/
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "GitHub", href: "https://github.com/Ruby-Franco", icon: "◈"},
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/ruby-franco/", icon: "◈" }, 
                  { label: "Resume", href: "/resume.pdf", icon: "◈", download: true }, 
                  { label: "Email", href: "mailto:rubyfranco.1@gmail.com", icon: "◈" }, 
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    download={link.download || undefined}
                    target={link.download ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "#2d3a10",
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
              className="self-start px-3 py-1 rounded-full"
              style={{
                background: "#aeb770",
                transform: "rotate(0.5deg)",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: "#2d3a10",
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