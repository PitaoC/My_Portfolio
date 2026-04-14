import { FaPython, FaGithub, FaExternalLinkAlt, FaReact, FaCoffee, FaCalendarAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiSupabase, SiRedux } from 'react-icons/si';

function MyProjects() {
    const projects = [
        {
            name: "ALTHOS",
            description: "A Python desktop application for group and member management. Built with CustomTkinter for a modern dark-themed UI and MongoDB Atlas for cloud database storage. Features include user authentication, dashboard overview, group creation, and member tracking.",
            technologies: ["Python", "CustomTkinter", "MongoDB"],
            techColors: ["bg-yellow-600", "bg-blue-700", "bg-green-700"],
            icon: <FaPython className="text-4xl text-yellow-400" />,
            github: "https://github.com/PitaoC/ALTHOS",
            download: "https://github.com/PitaoC/ALTHOS/archive/refs/heads/Admin_4-21-25.zip",
            liveDemo: null,
            type: "Desktop Application"
        },
        {
            name: "Flutter Blog",
            description: "A modern blog platform built with Flutter for both web and mobile. Features include user authentication, post creation and editing, commenting, and a responsive UI. Available as both a web application and a downloadable app.",
            technologies: ["Flutter", "Dart", "Web", "Mobile"],
            techColors: ["bg-blue-500", "bg-cyan-600", "bg-green-600", "bg-purple-600"],
            icon: <SiJavascript className="text-4xl text-blue-400" />, // You may replace with a Flutter icon if available
            github: "https://github.com/PitaoC/Blog-Assesment.git",
            download: null,
            liveDemo: "https://blog-assesment-gsd2.vercel.app/",
            type: "Web & App"
        },
        {
            name: "BlogHub",
            description: "A full-featured blog platform built with TypeScript and React. Users can register, login, create and edit blog posts, and leave comments. Uses Supabase for authentication and database, with Redux for state management and styled-components for a modern UI.",
            technologies: ["TypeScript", "React", "Redux", "Supabase"],
            techColors: ["bg-blue-600", "bg-cyan-600", "bg-purple-600", "bg-emerald-600"],
            icon: <SiTypescript className="text-4xl text-blue-400" />,
            github: "https://github.com/PitaoC/Blog-Assesment",
            download: null,
            liveDemo: "https://blog-assesment-zeta.vercel.app",
            type: "Web Application"
        },
        {
            name: "Cup of Kape (Unfinished)",
            description: "A specialty coffee shop website featuring a beautiful landing page, interactive menu with add-to-cart functionality, event booking services for weddings and corporate events, and a contact page. Built with React and styled with Tailwind CSS.",
            technologies: ["JavaScript", "React", "Tailwind CSS"],
            techColors: ["bg-yellow-500", "bg-cyan-600", "bg-teal-600"],
            icon: <FaCoffee className="text-4xl text-amber-600" />,
            github: "https://github.com/PitaoC/Coffee_Shop",
            download: null,
            liveDemo: "https://coffee-shop-five-self.vercel.app",
            type: "Web Application"
        },
        {
            name: "Su Casa Garden Resort",
            description: "An event reservation system for a garden resort. Features include a homepage showcasing services and facilities, a multi-step reservation form, admin dashboard with calendar view, reservation request management, and booking history. Built with React, Redux, and Bootstrap.",
            technologies: ["JavaScript", "React", "Redux", "Bootstrap"],
            techColors: ["bg-yellow-500", "bg-cyan-600", "bg-purple-600", "bg-violet-600"],
            icon: <FaCalendarAlt className="text-4xl text-green-400" />,
            github: "https://github.com/PitaoC/Sucasa",
            download: null,
            liveDemo: null,
            type: "Web Application"
        }
    ];

    return (
        <div id="Projects" className="lg:w-screen lg:min-h-screen w-screen 
                                      flex flex-col items-center justify-center py-20
                                      bg-gradient-to-b from-indigo-990 to-indigo-990 
                                      text-white">
            <div className="flex flex-col items-center scroll-fade">
                <div className="flex flex-col items-center justify-center mb-10">
                    <div className="flex flex-row my-4 justify-center">
                        <h1 className="text-center font-dmserif text-5xl lg:text-8xl">
                            Our&nbsp;
                        </h1>
                        <h1 className="text-center font-dmserif text-5xl lg:text-8xl text-teal-300">
                            Projects
                        </h1>
                    </div>
                    <p className="lg:w-11/20 w-80 text-center text-gray-200 font-roboto text-xs lg:text-sm px-4">
                        Explore our software applications and digital solutions built with modern technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-6 lg:px-20 max-w-6xl">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-slate-800 rounded-xl p-6 border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    {project.icon}
                                    <h2 className="text-xl lg:text-2xl font-bold font-lora">{project.name}</h2>
                                </div>
                                <span className="text-xs bg-slate-700 px-2 py-1 rounded-full text-gray-300">
                                    {project.type}
                                </span>
                            </div>
                            <p className="text-gray-300 text-xs lg:text-sm mb-4 font-roboto leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className={`px-3 py-1 ${project.techColors[techIndex]} rounded-full text-xs`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                                >
                                    <FaGithub /> Code
                                </a>
                                {project.liveDemo && (
                                    <a 
                                        href={project.liveDemo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors text-sm"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                                {project.download && (
                                    <a 
                                        href={project.download} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors text-sm"
                                    >
                                        <FaExternalLinkAlt /> Try It
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyProjects;