import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Divide } from "hamburger-react";

function Navbar({ showNavbar }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItem =
    "text-white text-md xl:text-lg font-bold hover:text-[#55578b] duration-500 tracking-wider xl:tracking-widest ";

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
        className={`fixed inset-0 bg-[#121329c7] bg-opacity-80 transition-transform transform z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="py-4 w-10 xl:w-14">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <img src="/logo.png" alt="Logo" />
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              className={`${navItem}`}
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Computer Navbar */}
      <div className="hidden md:flex flex-row items-center w-full justify-between px-5">
        <div className="w-10 xl:w-14">
          <NavLink to="/">
            <img src="/logo.png" alt="Logo" />
          </NavLink>
        </div>
        <div>
          <ul
            className={`fade-in w-full pb-4  text-center px-5 pt-2 z-50 fade-in items-center space-y-7 md:space-x-11 xl:space-x-14 2xl:space-x-20 duration-500 hidden md:flex`}
          >
            <li></li>
            <li className="mt-0">
              <NavLink className={`${navItem} m-0`} to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink className={`${navItem}`} to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className={`${navItem}`} to="/projects">
                PROJECTS
              </NavLink>
            </li>
            <li>
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
