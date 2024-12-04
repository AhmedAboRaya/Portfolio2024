import React, { useState, useEffect, useRef } from "react";
import Robot from "./Robot";
import Navbar from "./Navbar";
import NavbarComp from "../navbar/NavberComp";
import Location from "../location/Location";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import "./scrollButton.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scrolling logic remains unchanged
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 300);
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPosition = (target, duration) => {
    const start = window.scrollY;
    const change = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
      window.scrollTo(0, start + change * easeInOutQuad(progress));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleScrollToTop = () => scrollToPosition(0, 1000);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      scrollToPosition(aboutSection.offsetTop, 1000);
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  return (
    <div className="App relative w-full h-screen z-20" id="home">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <Robot />
      </motion.div>
      <div className="mask"></div>
      <div
        className={`absolute top-0 left-0 text-white w-full flex md:justify-center`}
      >
        <NavbarComp />
        {showNavbar && <Navbar />}
      </div>
      <div className="absolute bottom-40 w-full flex justify-center items-center text-center">
        <div
          ref={ref}
          className="w-full flex flex-col justify-center text-home overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <TextRevealCardPreview />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-[#220a3d] font-bold"
          >
            FULLSTACK DEVELOPER
          </motion.div>
        </div>
      </div>
      <div className="hidden md:block">
        <Location />
      </div>
      <a className="hero-mouse anchor" onClick={scrollToAbout}>
        <div className="mouse-icon">
          <span></span>
        </div>
      </a>

      {showBackToTop && (
        <div className="fixed z-50 bottom-5 right-5">
          <button
            onClick={handleScrollToTop}
            className="bg-[#121329] z-50 relative text-white rounded-full p-3 px-5 shadow-lg hover:bg-[#121329c4] transition duration-300"
          >
            <MdOutlineKeyboardArrowUp className="arrow" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
