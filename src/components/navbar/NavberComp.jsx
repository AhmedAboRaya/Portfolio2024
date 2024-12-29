import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Divide } from "hamburger-react";
import '../../styles.css'

function Navbar({ showNavbar }) {
  const [isOpen, setIsOpen] = useState(false);

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
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  const navItem =
    "text-white text-md xl:text-lg font-bold hover:text-[#8287f5] duration-500 tracking-wider xl:tracking-widest borderBottom ";

  return (
    <>
      {/* Mobile Navbar */}
      <ul className="md:hidden mt-4 flex justify-between w-full px-6 z-[1001]">
        <li className="w-14">
          <NavLink to="/" onClick={scrollToHome}>
            <img src="/logo.png" alt="Logo" className="w-12 z-[100] relative"/>
          </NavLink>
        </li>
        <li className="z-20" onClick={() => setIsOpen(!isOpen)}>
          <Divide />
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#121329c7] bg-opacity-80 transition-transform transform z-[1000] header  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/"
              onClick={() => {setIsOpen(false);  onClick={scrollToHome}}}
            >
              HOME
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/about"
              onClick={() => {setIsOpen(false);  onClick={scrollToAbout}}}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="py-4 w-10 xl:w-14">
            <NavLink to="/" onClick={() => {setIsOpen(false);  onClick={scrollToHome}}}>
              <img src="/logo.png" alt="Logo" />
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/projects"
              onClick={() => {setIsOpen(false);  onClick={scrollToProjects}}}
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/contact"
              onClick={() => {setIsOpen(false);  onClick={scrollToContact}}}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Computer Navbar */}
      <div className="hidden md:flex flex-row items-center w-full justify-between px-5 ">
        <div className="w-12 xl:w-14">
          <NavLink to="/">
            <img src="/logo.png" alt="Logo" />
          </NavLink>
        </div>
        <div>
          <ul
            className={`fade-in w-full pb-4  text-center px-5 pt-2 z-50 items-center space-y-7 md:space-x-7 xl:space-x-9 2xl:space-x-11 duration-500 hidden md:flex`}
          >
            <li></li>
            <li className="mt-0" onClick={scrollToHome}>
              <NavLink className={`${navItem} m-0`} to="/">
                HOME
              </NavLink>
            </li>
            <li onClick={scrollToAbout}>
              <NavLink className={`${navItem}`} to="/about">
                ABOUT
              </NavLink>
            </li>
            <li onClick={scrollToProjects}>
              <NavLink className={`${navItem}`} to="/projects">
                PROJECTS
              </NavLink>
            </li>
            <li onClick={scrollToContact}>
              <NavLink className={`${navItem}`} to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
