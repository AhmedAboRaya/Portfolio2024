import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Divide } from "hamburger-react";
import "../../styles.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  const navItem =
    "text-white text-md xl:text-lg font-bold hover:text-[#8287f5] duration-500 tracking-wider xl:tracking-widest borderBottom";

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

  return (
    <div className="relative">
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
              <NavLink>
                <img src="/logo.png" alt="Logo" />
              </NavLink>
            </li>
            <li
              className="z-20"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Divide />
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-[#121329c7] bg-opacity-80 h-screen transition-transform transform z-10 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } duration-300 md:hidden`}
          >
            <ul className="flex flex-col items-center justify-center h-full header">
              <li className="py-4" onClick={scrollToHome}>
                <NavLink
                  className={`${navItem} `}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToHome();
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li
                className="py-4"
                onClick={() => {
                  setIsOpen(!isOpen);
                  scrollToAbout();
                }}
              >
                <NavLink className={`${navItem}`}>ABOUT</NavLink>
              </li>

              <li className="py-4 w-10 xl:w-14">
                <NavLink
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToHome();
                  }}
                >
                  <img src="/logo.png" alt="Logo" />
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  className={`${navItem}`}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToProjects();
                  }}
                >
                  PROJECTS
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  className={`${navItem}`}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToContact();
                  }}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Computer Navbar */}
          <ul
            className={`header pb-4 px-5 w-full text-center justify-between z-50 items-center space-y-7 md:space-x-11 xl:space-x-14 2xl:space-x-20 duration-500 hidden md:flex`}
          >
            <li className="mt-4 w-12 xl:w-14" onClick={scrollToHome}>
              <NavLink>
                <img src="/logo.png" alt="Logo" />
              </NavLink>
            </li>
            <div className="flex gap-6 m-0 h-full items-center md:space-x-7 xl:space-x-9 2xl:space-x-11">

              <li className="" onClick={scrollToHome}>
                <NavLink className={`${navItem} m-0`}>
                  HOME
                </NavLink>
              </li>
              <li onClick={scrollToAbout}>
                <NavLink className={`${navItem}`}>
                  ABOUT
                </NavLink>
              </li>

              <li onClick={scrollToProjects}>
                <NavLink className={`${navItem}`}>
                  PROJECTS
                </NavLink>
              </li>
              <li onClick={scrollToContact}>
                <NavLink className={`${navItem}`}>
                  CONTACT
                </NavLink>
              </li>
            </div>
          </ul>
        </>
      </div>
    </div>
  );
}

export default Navbar;
