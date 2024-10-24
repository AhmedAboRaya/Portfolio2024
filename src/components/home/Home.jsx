import React, { useState, useEffect } from "react";
import Robot from "./Robot";
import Navbar from "./Navbar";
import NavbarComp from "../navbar/NavberComp";
import Location from "../location/Location";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import './scrollButton.css'

function Home() {
  const [fullstackText, setFullstackText] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const targetText = "FULLSTACK DEVELOPER";
  const typingSpeed = 200; 

  useEffect(() => {
    let currentIndex = 0;
    let typingTimeout; 
    let startTypingTimeout; 

    const typeLetter = () => {
      if (currentIndex + 1 < targetText.length) {  
        setFullstackText((prev) => prev + targetText[currentIndex]);
        currentIndex++;
        typingTimeout = setTimeout(typeLetter, typingSpeed); 
      }
    };

      typeLetter(); 

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(startTypingTimeout); 
    };
  }, [targetText]);

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

  const handleScroll = () => {
    scrollToPosition(920, 2000); 
    // scrollToPosition(736, 2000); 
  };



  return (
    <div className="App relative w-full h-screen z-10">
      
      <Robot />
      <div className="mask"></div>
      <div className={`absolute top-0 left-0 text-white w-full flex md:justify-center`}>
        <NavbarComp />
        {showNavbar && <Navbar showNavbar={showNavbar}/>}
      </div>
      <div className="absolute bottom-40 w-full flex justify-center items-center text-center">
        <div className="w-full flex flex-col justify-center text-home">
          <TextRevealCardPreview />
          <div className="text-[#220a3d] font-bold">{fullstackText}</div>
        </div>
      </div>
      <div>
        <Location />
      </div>
      <a className="hero-mouse anchor" onClick={handleScroll}>
        <div className="mouse-icon">
          <span></span>
        </div>
      </a>
    </div>
  );
}

export default Home;
