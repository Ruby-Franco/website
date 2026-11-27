import Image from "next/image";

const currently = [
  "Building web and mobile features at a fintech startup (React Native, TypeScript)",
  "Building a live LA Metro data pipeline (Python, PostgreSQL, Docker)",
  "Grinding NeetCode 150",
];

const toolbox = [
  "TypeScript", "JavaScript", "Python", "SQL",
  "React", "React Native", "Node.js", "Flask",
  "PostgreSQL", "Docker", "Git", "Jest",
];

const beyondCode = [
  "Proud AMC A-Lister 🍿 (yes, it's a flex)",
  "Music lover & vinyl record collector",
  "Teaching kids to code: Python, data science & ML at iD Tech (UCLA)",
  "SHPE alum: treasurer & SHPEtinas co-chair at UCR",
];

const labelStyle = { color: "#7a5a12", fontFamily: "monospace" };

function Card({ label, rotate, children }) {
  return (
    <div
      className="rounded-2xl p-5 h-full"
      style={{
        background: "#faf1df",
        transform: `rotate(${rotate})`,
        boxShadow: "2px 4px 14px rgba(0,0,0,0.10)",
      }}
    >
      <p className="text-xs uppercase tracking-widest mb-3" style={labelStyle}>
        {label}
      </p>
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-sm"
          style={{ fontFamily: "monospace", color: "#3b2a06", lineHeight: "1.6" }}
        >
          <span style={{ opacity: 0.6, flexShrink: 0 }}>◈</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20 px-6"
      style={{ background: "#f4e3ae" }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative tape strips */}
      <div className="absolute top-24 right-[15%] w-12 h-4 opacity-40 rotate-[5deg]"
        style={{ background: "#e6c873", borderRadius: "2px" }} />
      <div className="absolute bottom-16 left-[10%] w-14 h-4 opacity-45 rotate-[3deg]"
        style={{ background: "#e6c873", borderRadius: "2px" }} />

      {/* Main scrapbook card layout */}
      <div className="relative w-full max-w-5xl">

        {/* Section heading */}
        <div
          className="mb-8 md:mb-10"
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

        {/* TOP — photo + bio */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 items-center mb-10">

          {/* Polaroid, slightly rotated, taped on */}
          <figure
            className="relative w-full max-w-[18rem] mx-auto md:max-w-xs p-3 pb-4"
            style={{
              background: "#fdf7ea",
              transform: "rotate(-3deg)",
              boxShadow: "3px 6px 18px rgba(0,0,0,0.18)",
            }}
          >
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 opacity-70 rotate-[-4deg] z-10"
              style={{ background: "#e6c873", borderRadius: "2px" }}
            />
            <Image
              src="/rubyPolaroid.webp"
              alt="Ruby Franco smiling in her UCR graduation gown and stole"
              width={800}
              height={1000}
              sizes="(min-width: 768px) 320px, 288px"
              className="w-full h-auto block"
            />
            <figcaption
              className="text-center pt-3"
              style={{
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "#3b2a06",
              }}
            >
              UCR &apos;24 🎓
            </figcaption>
          </figure>

          {/* Bio — the lead */}
          <div className="flex flex-col gap-4">
            <Card label="Bio" rotate="1deg">
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.1rem",
                  color: "#3b2a06",
                  lineHeight: "1.75",
                }}
              >
                Hi! I&apos;m Ruby, a software engineer based in LA and a 2024 UC Riverside
                Computer Science graduate. I build web and mobile features at a fintech
                startup, and I love turning messy, manual processes into tools people
                actually use, from an inventory system for a STEM nonprofit to a live
                LA Metro data pipeline. I&apos;m looking for a full-time role on a team
                that cares about building thoughtful, well-tested products.
              </p>
            </Card>

            {/* Location tag */}
            <div
              className="self-start px-3 py-1 rounded-full"
              style={{
                background: "#ecd189",
                transform: "rotate(0.5deg)",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: "#3b2a06",
                letterSpacing: "0.08em",
              }}
            >
              📍 Los Angeles, CA
            </div>
          </div>
        </div>

        {/* BOTTOM — three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          <Card label="currently/" rotate="-0.8deg">
            <BulletList items={currently} />
          </Card>

          <Card label="toolbox/" rotate="0.6deg">
            <div className="flex flex-wrap gap-1.5">
              {toolbox.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "#ecd189", color: "#3b2a06", fontFamily: "monospace" }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>

          <Card label="beyond code/" rotate="-0.5deg">
            <BulletList items={beyondCode} />
          </Card>
        </div>
      </div>
    </section>
  );
}
