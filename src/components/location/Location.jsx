import React, { useState, useEffect } from "react";

function Location() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [deleting, setDeleting] = useState(false); 
  const [targetText, setTargetText] = useState("Home"); 
  const typingSpeed = 200;
  const deletingSpeed = 150; 

  useEffect(() => {
    const handleTypingEffect = () => {
      if (deleting) {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDeleting(false);
          setCurrentIndex(0);
        }
      } else {
        if (currentIndex < targetText.length) {
          setDisplayText((prev) => prev + targetText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    };

    const intervalId = setTimeout(
      handleTypingEffect,
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(intervalId);
  }, [displayText, deleting, currentIndex, targetText]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      if (position < 620) {
        if (targetText !== "Home") {
          setDeleting(true); 
          setTargetText("Home");
        }
      } else if (position >= 620 && position < 1440) {
        if (targetText !== "About") {
          setDeleting(true);
          setTargetText("About");
        }
      } else if (position >=  1440 && position < 1860) {
        if (targetText !== "Projects") {
          setDeleting(true); 
          setTargetText("Projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, [targetText]);


  

  return (
    <div className="before fixed text-sm left-16 md:left-20 xl:left-32 2xl:left-52 top-52 text-gray-300 tracking-widest">
      &lt;&gt;{displayText}&lt;/&gt;
    </div>
  );
}

export default Location;
