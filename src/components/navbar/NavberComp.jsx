import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Divide } from "hamburger-react";
import "../../styles.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false); // Hide the navbar
      } else {
        setIsVisible(true); // Show the navbar
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Mobile Navbar */}
          <ul
            className={`md:hidden mt-4 flex justify-between w-full px-6 z-[1001] transition-all duration-300`}
          >
            <li className="w-14">
              <NavLink onClick={scrollToHome}>
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-12 z-[100] relative"
                />
              </NavLink>
            </li>
            <li className="z-20" onClick={() => setIsOpen(!isOpen)}>
              <Divide />
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } fixed inset-0 bg-[#121329c7] bg-opacity-80 transition-transform transform z-[1000] header md:hidden duration-500`}
          >
            <ul className="flex flex-col items-center justify-center h-full">
              <li className="py-4">
                <NavLink
                  className={navItem}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToHome();
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  className={navItem}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToAbout();
                  }}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="py-4 w-10 xl:w-14">
                <NavLink
                  onClick={() => {
                    setIsOpen(false);
                    scrollToHome();
                  }}
                >
                  <img src="/logo.png" alt="Logo" />
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink
                  className={navItem}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToProjects();
                  }}
                >
                  PROJECTS
                </NavLink>
              </li>
              <li
                className="py-4"
                onClick={() => {
                  setIsOpen(false);
                  scrollToContact();
                }}
              >
                <NavLink className={navItem}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Computer Navbar */}
          <div
            className={`hidden md:flex flex-row items-center w-full justify-between px-5 transition-all duration-300`}
          >
            <div className="w-12 xl:w-14">
              <NavLink>
                <img src="/logo.png" alt="Logo" />
              </NavLink>
            </div>
            <div>
              <ul className=" w-full pb-4 text-center px-5 pt-2 z-50 items-center space-y-7 md:space-x-7 xl:space-x-9 2xl:space-x-11 duration-500 hidden md:flex">
                <li></li>
                <li onClick={scrollToHome}>
                  <NavLink className={navItem}>
                    HOME
                  </NavLink>
                </li>
                <li onClick={scrollToAbout}>
                  <NavLink className={navItem}>
                    ABOUT
                  </NavLink>
                </li>
                <li onClick={scrollToProjects}>
                  <NavLink className={navItem}>
                    PROJECTS
                  </NavLink>
                </li>
                <li onClick={scrollToContact}>
                  <NavLink className={navItem}>
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
