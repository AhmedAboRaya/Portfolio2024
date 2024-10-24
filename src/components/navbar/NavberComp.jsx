import React, { useState, useEffect } from "react";

const NavbarComp = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Function to show the navbar when scrolled down
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show the navbar after scrolling down 300px
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar z-50 fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Navbar</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarComp;
