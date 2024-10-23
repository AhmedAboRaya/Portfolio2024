import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide } from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const navItem =
    "text-white text-md xl:text-2xl font-bold hover:text-[#220a3d] duration-500 tracking-wider xl:tracking-widest ";

  return (
    <>
      {/* Mobile Navbar */}
      <ul className="md:hidden mt-4 flex justify-between w-full px-6">
        <li className="w-14">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </li>
        <li className="z-20" onClick={() => setIsOpen(!isOpen)}>
          <Divide />
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-80 transition-transform transform z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="py-4">
            <Link
              className={`${navItem}`}
              to="/"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="py-4">
            <Link
              className={`${navItem}`}
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li className="py-4">
            <Link
              className={`${navItem}`}
              to="/education"
              onClick={() => setIsOpen(false)}
            >
              EDUCATION
            </Link>
          </li>

          <li className="py-4 w-10 xl:w-14">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src="/logo.png" alt="Logo" />
            </Link>
          </li>
          <li className="py-4">
            <Link
              className={`${navItem}`}
              to="/skills"
              onClick={() => setIsOpen(false)}
            >
              SKILLS
            </Link>
          </li>
          <li className="py-4">
            <Link
              className={`${navItem}`}
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </Link>
          </li>
          <li className="py-4">
            <Link
              className={`${navItem}`}
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Computer Navbar */}
      <ul className="fade-in items-center space-y-7 md:space-x-11 xl:space-x-14 2xl:space-x-20 duration-500 hidden md:flex">
        <li className="w-0"></li>
        <li className="m-0">
          <Link className={`${navItem} m-0`} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className={`${navItem}`} to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className={`${navItem}`} to="/education">
            EDUCATION
          </Link>
        </li>
        <li className="w-10 xl:w-14">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </li>

        <li>
          <Link className={`${navItem}`} to="/skills">
            SKILLS
          </Link>
        </li>
        <li>
          <Link className={`${navItem}`} to="/projects">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link className={`${navItem}`} to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
