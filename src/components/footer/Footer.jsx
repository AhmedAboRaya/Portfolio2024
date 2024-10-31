import React from 'react';

const Footer = () => {
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

  const handleHomeClick = (e) => {
    e.preventDefault();
    scrollToPosition(0, 1000);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    scrollToPosition(920, 1000);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    scrollToPosition(1700, 1000);
  };

  return (
    <footer className="bg-[#121329] relative z-50 text-white py-4 opacity-100 ">
      <div className="mx-auto flex justify-center md:justify-between px-4 flex-wrap">
        <p className="mb-2">© {new Date().getFullYear()} Ahmed AboRaya. All rights reserved.</p>
        <div>
          <a href="#" onClick={handleHomeClick} className="text-gray-400 hover:text-white mx-2 duration-500">Home</a>
          <a href="#" onClick={handleAboutClick} className="text-gray-400 hover:text-white mx-2 duration-500">About</a>
          <a href="#" onClick={handleProjectsClick} className="text-gray-400 hover:text-white mx-2 duration-500">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
