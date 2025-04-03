"use client"

export default function Hero(){

    const scrollToProjects = () => {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }

    return(
        <section  className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold">
                Hi, I'm Ruby
            </h1>
            <p className="text-xl mt-4"> 
            Software Developer | Full-Time Coder, Part-Time movie watcher
            </p>
            <button onClick={scrollToProjects}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg"> 
            view my work</button>
        </section>
    )
}