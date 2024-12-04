import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Divide } from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  const navItem =
    "text-white text-md xl:text-lg font-bold hover:text-[#8287f5] duration-500 tracking-wider xl:tracking-widest";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFixedNavbar(true);
      } else {
        setShowFixedNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    if(!isMenuOpen) toggleMenu();
  };
  const scrollToAbout = () => {
    const productsSection = document.getElementById("about");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
    if(!isMenuOpen) toggleMenu();
  };
  const scrollToProjects = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    if(!isMenuOpen) toggleMenu();
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    if(!isMenuOpen) toggleMenu();
  };

  return (
    <>
      {/* Fixed Navbar after scroll */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-[#2C2D4F] border-b-[1px] border-[#ffffffa1] bg-opacity-80 transition-transform duration-500 ${
          showFixedNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <>
          {/* Mobile Navbar */}
          <ul className="md:hidden p-2 flex justify-between w-full px-6">
            <li className="w-14" onClick={scrollToHome}>
              <Link to="/">
                <img src="/logo.png" alt="Logo" />
              </Link>
            </li>
            <li className="z-20" onClick={() => {setIsOpen(!isOpen)}}>
              <Divide />
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-[#121329c7] bg-opacity-80 h-screen transition-transform transform z-10 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } duration-300 md:hidden`}
          >
            <ul className="flex flex-col items-center justify-center h-full">
              <li className="py-4">
                <Link
                  className={`${navItem} `}
                  to="/"
                  onClick={() => {setIsOpen(!isOpen);  onClick={scrollToHome}}}
                >
                  HOME
                </Link>
              </li>
              <li className="py-4">
                <Link
                  className={`${navItem}`}
                  to="/about"
                  onClick={() => {setIsOpen(!isOpen);  onClick={scrollToAbout}}}
                >
                  ABOUT
                </Link>
              </li>

              <li className="py-4 w-10 xl:w-14">
                <Link to="/" onClick={() => {setIsOpen(!isOpen);  onClick={scrollToHome}}}>
                  <img src="/logo.png" alt="Logo" />
                </Link>
              </li>
              <li className="py-4">
                <Link
                  className={`${navItem}`}
                  to="/projects"
                  onClick={() => {setIsOpen(!isOpen);  onClick={scrollToProjects}}}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="py-4">
                <Link
                  className={`${navItem}`}
                  to="/contact"
                  onClick={() => {setIsOpen(!isOpen);  onClick={scrollToContact}}}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Computer Navbar */}
          <ul
            className={`pb-4 px-5 w-full text-center justify-between z-50 items-center space-y-7 md:space-x-11 xl:space-x-14 2xl:space-x-20 duration-500 hidden md:flex`}
          >
            <li className="mt-4 w-12 xl:w-14" onClick={scrollToHome}>
              <Link to="/">
                <img src="/logo.png" alt="Logo" />
              </Link>
            </li>
            <div className="flex gap-6 m-0 h-full items-center md:space-x-7 xl:space-x-9 2xl:space-x-11">
              <li className="" onClick={scrollToHome}>
                <Link className={`${navItem} m-0`} to="/">
                  HOME
                </Link>
              </li>
              <li onClick={scrollToAbout}>
                <Link className={`${navItem}`} to="/about">
                  ABOUT
                </Link>
              </li>

              <li onClick={scrollToProjects}>
                <Link className={`${navItem}`} to="/projects">
                  PROJECTS
                </Link>
              </li>
              <li onClick={scrollToContact}>
                <Link className={`${navItem}`} to="/contact">
                  CONTACT
                </Link>
              </li>
            </div>
          </ul>
        </>
      </div>
    </>
  );
}

export default Navbar;
