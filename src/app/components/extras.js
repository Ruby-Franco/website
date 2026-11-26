const awards = [
  {
    title: "1st Place — MESA Idea Accelerator Program",
    org: "Qualcomm",
    period: "August - October 2023",
    description:
      "Designed a handheld language learning device prototype to address language barriers and cultural integration challenges for immigrant communities using human-centered design principles. Led research and 3D modeling for physical prototype, collaborating with a 4-person team during a week-long intensive program. Presented to a panel of industry professionals.",
    icon: "🏆",
  },
];
 
const leadership = [
  {
    title: "Treasurer & SHPEtinas Co-chair",
    org: "Society of Hispanic Professional Engineers (SHPE) — UCR",
    period: "March 2022 - June 2024",
    description:
      "Managed an annual budget of $8,000 and allocated funds to events ranging from general meetings to professional development fairs, supporting the chapter's mission and goals.",
    icon: "◈",
  },
];
 
function Card({ item }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "#fffaf0",
        boxShadow: "2px 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span style={{ fontSize: "1.5rem", color: "#5a6a30" }}>{item.icon}</span>
        <div>
          <h3
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "#2d3a10",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.8rem",
              color: "#5a6a30",
            }}
          >
            {item.org}
          </p>
        </div>
        <span
          className="ml-auto text-xs px-2 py-0.5 rounded-full self-start whitespace-nowrap"
          style={{
            background: "#aeb770",
            color: "#2d3a10",
            fontFamily: "monospace",
          }}
        >
          {item.period}
        </span>
      </div>
      <p
        className="text-sm"
        style={{
          fontFamily: "monospace",
          color: "#4a5a20",
          lineHeight: "1.7",
        }}
      >
        {item.description}
      </p>
    </div>
  );
}
 
export default function Extras() {
  return (
    <section
      id="extras"
      className="w-full min-h-screen py-16 px-6"
      style={{ background: "#aeb770" }}
    >
      <div className="max-w-4xl mx-auto">
 
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: "#5a6a30", fontFamily: "monospace" }}
          >
            extras/
          </p>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "2.5rem",
              color: "#2d3a10",
            }}
          >
            Awards & Leadership
          </h2>
        </div>
 
        {/* Awards */}
        <div className="mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#5a6a30", fontFamily: "monospace" }}
          >
            awards
          </p>
          <div className="flex flex-col gap-5">
            {awards.map((item, i) => <Card key={i} item={item} />)}
          </div>
        </div>
 
        {/* Leadership */}
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#5a6a30", fontFamily: "monospace" }}
          >
            leadership
          </p>
          <div className="flex flex-col gap-5">
            {leadership.map((item, i) => <Card key={i} item={item} />)}
          </div>
        </div>
 
      </div>
    </section>
  );
}