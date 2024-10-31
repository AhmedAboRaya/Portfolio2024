// Education.js
import React, { useState } from 'react';
import Project from './Project';
import Course from './Course';
import Training from './Training';

const Education = () => {
  const [activeSection, setActiveSection] = useState('educationDetails');

  return (
    <div className="flex justify-center flex-col md:flex-row items-center h-screen bg-[#2C2D4F] text-white p-4 ">
      {/* Navigation for Desktop and Tabs for Mobile */}
      <nav className="w-full md:w-1/4 bg-[#1f1f3a70] p-6 flex flex-col md:rounded-lg shadow-lg md:mr-6">
        <h2 className="text-2xl font-bold mb-6 hidden md:block">Navigation</h2>
        <ul className="flex md:flex-col space-x-4 md:space-y-4 md:space-x-0 overflow-x-auto md:overflow-hidden">
          <li>
            <button 
              onClick={() => setActiveSection('educationDetails')} 
              className={`text-left w-full md:block ${activeSection === 'educationDetails' ? 'font-bold text-blue-400' : ''}`}
            >
              Education Details
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('courses')} 
              className={`text-left w-full md:block ${activeSection === 'courses' ? 'font-bold text-blue-400' : ''}`}
            >
              Technical Courses
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('training')} 
              className={`text-left w-full md:block ${activeSection === 'training' ? 'font-bold text-blue-400' : ''}`}
            >
              DEPI Training
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 overflow-y-auto rounded-lg shadow-lg bg-[#2C2D4F]">
        <h1 className="text-3xl font-bold mb-8 text-center">Education Overview</h1>

        {activeSection === 'educationDetails' && (
          <section className="education-details mb-8">
            <h2 className="text-2xl font-semibold mb-4">University: Modern Academy for Engineering and Technology</h2>
            <p><strong>Specialization:</strong> Computer Engineering</p>
            <p className="mt-2">
              Studied core computer engineering subjects, completed various projects, and developed skills in problem-solving and teamwork.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Key Projects</h3>
            <Project title="Smart Home Project" description="An IoT-enabled system for automated lighting, security, and climate control." />
            <Project title="Book Store Project" description="A web application featuring secure login and real-time database updates." />
            <Project title="Graduation Project - FOTA" description="Firmware Over-The-Air (FOTA) solution combining software and embedded systems." />

            <h3 className="text-xl font-semibold mt-6 mb-4">Student Activities</h3>
            <p>Involved in university activities to build soft skills, technical expertise, and leadership qualities.</p>
          </section>
        )}

        {activeSection === 'courses' && (
          <section className="courses mb-8">
            <h3 className="text-xl font-semibold mb-4">Technical Courses & Training</h3>
            <Course title="Spark Course" content="HTML, CSS, JavaScript" projects="Built a restaurant website and other small projects." />
            <Course title="Self-Learning (YouTube)" content="Languages: C++, SQL, HTML, CSS, JavaScript, React Basics" channels="Elzero Web School and other tutorials" />
            <Course title="Udemy: Advanced React Development" content="Advanced topics in TypeScript, React, and Redux." instructor="Mohamed Naga" />
          </section>
        )}

        {activeSection === 'training' && (
          <section className="training mb-8">
            <h3 className="text-xl font-semibold mb-4">Digital Egypt Pioneers Initiative (DEPI)</h3>
            <Training 
              description="Comprehensive training in Full-Stack Development (MERN Stack), soft skills, and business English."
              experience={
                <>
                  <ul className="list-disc list-inside">
                    <li>Full-Stack Development: Gained hands-on experience in MongoDB, Express, React, and Node.js.</li>
                    <li>Soft Skills: Training in communication and teamwork for collaborative projects.</li>
                    <li>Business English: Enhanced technical communication skills in English.</li>
                  </ul>
                  <p className="mt-4">Collaborated on a project management system as a team project, leading the frontend interface.</p>
                </>
              }
              certification="Earned a completion certificate."
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default Education;
