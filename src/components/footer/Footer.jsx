import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const scrollToPosition = (target, duration) => {
    const start = window.scrollY;
    const change = target - start;
    const startTime = performance.now();
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      window.scrollTo(0, start + change * easeInOutQuad(progress));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    requestAnimationFrame(animateScroll);
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const productsSection = document.getElementById("about");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#121329] relative z-50 text-white py-4 opacity-100 ">
      <div className="mx-auto flex justify-center md:justify-between px-4 flex-wrap">
        <p className="mb-2">© {new Date().getFullYear()} Ahmed AboRaya. All rights reserved.</p>
        <div>
          <NavLink onClick={scrollToHome} className="text-gray-400 hover:text-white mx-2 duration-500">Home</NavLink>
          <NavLink onClick={scrollToAbout} className="text-gray-400 hover:text-white mx-2 duration-500">About</NavLink>
          <NavLink onClick={scrollToProjects} className="text-gray-400 hover:text-white mx-2 duration-500">Projects</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
