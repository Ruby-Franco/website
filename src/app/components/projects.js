const projects =  [ 
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
      <section id="projects" className="min-h-screen bg-gray-900 text-white p-10">
        <h2 className="text-4xl font-bold"> projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {projects.map((project, index) => (<div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg"> 
            
            <h3 className="text-xl font-semibold mt-4">     {project.title}  </h3>
            <p className="text-gray-300 text-sm mt-2">      {project.description} </p>

            <div className="mt-4">
              {project.videos?.map((video, vidIndex) => (
                  <a 
                  key={vidIndex} 
                  href={video} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-400 underline hover:text-blue-500 mt-2">
                  Watch Video {vidIndex + 1}
              </a>
              )) }
            </div>

              {project.repo ? (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-200 underline ml-4">
                  View Code
                </a>
              ) : null}
            </div>))}

        </div>
      </section>
    );
  };
  
  