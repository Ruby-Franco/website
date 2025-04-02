const projects =  [
    {
        title: "Digial Clock", 
        description: "live clock with animations ", 
        image: "", 
        video: "", 
        demo: "", // deployment link 
        repo: "",  // github link
    }, 
    {
        title: "Galaga", 
        description: "Embedded system video game", 
        image: "", 
        video: "", 
        demo: "", // deployment link 
        repo: "",  // github link
    }
]



export default function ProjectSection() {
    return (
      <section id="projects" className="min-h-screen bg-gray-900 text-white p-10">
        <h2 className="text-4xl font-bold"> projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {projects.map((project, index) => (<div key={index} className="bggray-800 p-4 rounded-lg shadow-lg"> 
            
            <h3 className="text-xl font-semibold mt-4">     {project.title}  </h3>
            <p className="text-gray-300 text-sm mt-2">      {project.description} </p>

            
            </div>))}

        </div>
      </section>
    );
  };
  
  