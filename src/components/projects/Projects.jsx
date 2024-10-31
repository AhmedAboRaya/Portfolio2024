// Projects.js
import React from "react";
import Card from "./Card"

const projects = [
    {
        title: "MedReserve",
        description: "This is a description of project one.",
        link: "https://github.com/AhmedAboRaya/MedReserve.git",
        img: "/MedRev.png",
    },
    {
        title: "TaskTracker",
        description: "This is a description of project two.",
        link: "https://github.com/abdelrahman-elkhateeb/taskTrackr.git",
        img: "/taskTracker.png",
    },
    {
        title: "Shopping Website",
        description: "This is a description of project two.",
        link: "https://github.com/AhmedAboRaya/E-Commerce.git",
        img: "/Shopping.png",
    },
    {
        title: "VS code clone",
        description: "This is a description of project two.",
        link: "https://github.com/AhmedAboRaya/VS_Clone.git",
        img: "/vs_clone.png",
    },
];

const Projects = () => {
    return (
        <div className=" p-8 h-full w-full z-[2] relative">
            <h1 className="text-4xl font-bold text-center text-white mb-8">My Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 1510:grid-cols-3 gap-5">
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        img={project.img}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default Projects;
