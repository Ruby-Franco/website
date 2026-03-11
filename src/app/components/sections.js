const sections = [
  { id: "about",      label: "About Me",      color: "rgba(244, 241, 186, 1)" },
  { id: "portfolio",  label: "Portfolio",      color: "#f4bdbdff" },
  { id: "blog",       label: "Blog",           color: "#2d1a1a", labelColor: "#f5f0eb" },
  { id: "opensource", label: "Open Source",    color: "#aeb770ff" },
];

export default function Sections() {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="w-full min-h-screen flex items-center justify-center"
          style={{ backgroundColor: section.color }}
        >
          <h2
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "3rem",
              color: section.labelColor || "#2d1a1a",
              letterSpacing: "0.05em",
            }}
          >
            {section.label}
          </h2>
        </section>
      ))}
    </>
  );
}