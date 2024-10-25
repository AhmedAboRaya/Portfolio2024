// Education.js
import React from 'react';
import Project from './Project';
import Course from './Course';
import Training from './Training';

const Education = () => {
  return (
    <div className="education-page max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      
      <section className="university-info mb-8">
        <h2 className="text-2xl font-semibold">University: Modern Academy for Engineering and Technology</h2>
        <p><strong>Specialization:</strong> Computer Engineering</p>
      </section>

      <section className="projects mb-8">
        <h3 className="text-xl font-semibold mb-4">Key Projects</h3>
        <Project title="Smart Home Project" description="Embedded system project focused on automation and IoT integration." />
        <Project title="Book Store Project" description="Full-stack web application showcasing online book store functionality." />
        <Project title="Graduation Project - FOTA" description="Developed both an embedded system and a website for the FOTA solution." />
        <Project title="Additional Projects" description="Engaged in various other engineering and tech projects during the course." />
      </section>

      <section className="student-activities mb-8">
        <h3 className="text-xl font-semibold mb-4">Student Activities</h3>
        <p>Participated in university activities to enhance soft skills, presentation skills, and programming skills.</p>
      </section>

      <section className="courses mb-8">
        <h3 className="text-xl font-semibold mb-4">Technical Courses & Training</h3>
        <Course title="Spark Course" content="HTML, CSS, JavaScript" projects="Completed several small projects, the largest being a basic website for a restaurant." />
        <Course title="Learning from YouTube" content="Languages and Technologies: C++, SQL, HTML, CSS, JavaScript, Basic React" channels="Elzero Web School and other resources" />
        <Course title="Udemy Course" content="TypeScript, Advanced React, Redux, and other React libraries" instructor="Mohamed Naga" />
      </section>

      <section className="training mb-8">
        <h3 className="text-xl font-semibold mb-4">Digital Egypt Pioneers Initiative (DEPI)</h3>
        <Training description="Full-stack development (MERN stack), soft skills, and business English" experience="Worked on multiple projects, including a graduation project with a team, focusing on a project and task management system." certification="Received a completion certificate." />
      </section>
    </div>
  );
};

export default Education;
