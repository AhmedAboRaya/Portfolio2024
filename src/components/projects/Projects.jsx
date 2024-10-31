// Projects.js
import React from "react";
import Card from "./Card"

const projects = [
    {
        title: "Project One",
        description: "This is a description of project one.",
        link: "https://github.com/yourusername/project-one",
    },
    {
        title: "Project Two",
        description: "This is a description of project two.",
        link: "https://github.com/yourusername/project-two",
    },
];

const Projects = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card />
            </div>
        </div>
    );
};

export default Projects;
