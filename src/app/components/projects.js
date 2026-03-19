const projects =  [ 
    {
    title: "Inventory Management", 
    description: "Capstone Project for STEMNETICS: for their internal use only", 
    image: "", 
    videos: [], 
    demo: "https://myinventory-ten.vercel.app/", // deployment link 
    repo: "https://github.com/Ruby-Franco/InventoryManagement",  // github link
    },  
    {
    title: "Soccer Fantasy Draft Web App", 
    description: "Capstone Project for LA-Tech.org: Fantasy Football draft ", 
    image: "", 
    videos: [], 
    demo: "https://soccer-wine.vercel.app/", // deployment link 
    repo: "https://github.com/Ruby-Franco/LA-Tech-Soccer-Fantasy-Draft-Project",  // github link
    },
    {
    title: "Calendar Display", 
    description: "senior design project; physical scheduling tablet for office use", 
    image: "", 
    videos: [], 
    demo: "", // deployment link 
    repo: "https://github.com/Ruby-Franco/digitalClock",  // github link
    },
    {
        title: "Digital Clock", 
        description: "live clock with animations ", 
        image: "", 
        videos: [], 
        demo: "", // deployment link 
        repo: "https://github.com/Ruby-Franco/digitalClock",  // github link
    }, 
    {
        title: "Galaga", 
        description: "Embedded system video game", 
        image: "", 
        videos: ["https://youtube.com/shorts/FEKUv1DBuSc?si=FW4kttocBKcnIxxi", "https://youtu.be/bLYGNdP3L44?si=qfbMcROr1F8pq7tZ",] ,
        demo: "", // deployment link 
        repo: "",  // github link
    }
]

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ boxShadow: "2px 4px 14px rgba(0,0,0,0.08)", background: "#4d2929ff" }}
            >
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
 
              {/* Videos */}
              {project.videos?.length > 0 && (
                <div className="flex flex-col gap-1">
                  {project.videos.map((video, vidIndex) => (
                    <a
                      key={vidIndex}
                      href={video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline"
                      style={{ color: "#f0b0b0", fontFamily: "monospace" }}
                    >
                      ▶ Watch Video {vidIndex + 1}
                    </a>
                  ))}
                </div>
              )}
 
              {/* Links */}
              <div
                className="flex gap-4 mt-auto pt-2 border-t"
                style={{ borderColor: "#5a3030" }}
              >
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline"
                    style={{ color: "#f0b0b0", fontFamily: "monospace" }}
                  >
                    ⌥ View Code
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline"
                    style={{ color: "#f0b0b0", fontFamily: "monospace" }}
                  >
                    ↗ Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  };
  
  