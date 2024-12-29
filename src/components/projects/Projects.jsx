import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const projects = [
    {
        title: "Manasety",
        description: "Teachers upload lessons; students watch.",
        link: "https://github.com/AhmedAboRaya/Educational-platform",
        tryLink: "https://manasty-phi.vercel.app/",
        img: "/Manasety.png",
    },
    {
        title: "Egy-Rack",
        description: "Showcasing import and export products.",
        link: "https://github.com/AhmedAboRaya/Egy-Rack",
        tryLink: "https://egy-rack.vercel.app/",
        img: "/EgyRack.png",
    },
    {
        title: "TaskTracker",
        description: "A tool for organizing tasks and managing projects.",
        link: "https://github.com/abdelrahman-elkhateeb/taskTrackr.git",
        tryLink: "https://depi-final-project-m1eh.vercel.app/",
        img: "/taskTracker2 (2).png",
    },
    
    {
        title: "MedReserve",
        description: "Manage medical appointments and prescriptions.",
        link: "https://github.com/AhmedAboRaya/MedReserve.git",
        img: "/MedRev.png",
    },{
        title: "Shopping Website",
        description: "An e-commerce platform with a user dashboard.",
        link: "https://github.com/AhmedAboRaya/E-Commerce.git",
        img: "/Shopping.png",
    },
    {
        title: "VS Code Clone",
        description: "A clone of Visual Studio Code for code editing.",
        link: "https://github.com/AhmedAboRaya/VS_Clone.git",
        img: "/vs_clone.png",
    },
];


const Projects = () => {
    return (
        <div className="p-8 pt-24 px-20 min-h-screen w-full z-[2] relative" id="projects">
            <h1 className="text-4xl font-bold text-center text-white mb-8">My Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 1510:grid-cols-3  md:gap-5">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Card
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            tryLink={project.tryLink}
                            img={project.img}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
