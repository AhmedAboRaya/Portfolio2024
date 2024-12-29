import "./about.css";
import ParticlesComponent from "../particles/ParticlesComponent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skill from "../skill/Skill";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ahmed_CV.pdf";
    link.download = "Ahmed_CV.pdf";
    link.click();
  };

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div
      className="relative min-h-screen bg-[#2C2D4F] py-20 md:py-0"
      id="about"
    >
      <ParticlesComponent id="particles" />
      <section className="relative  bg-[#2C2D4F] text-white flex items-center flex-row justify-center 1020:justify-between p-10 xl:p-36 2xl:px-44 flex-wrap">
        <motion.div
          ref={ref}
          className="max-w-2xl space-y-4 p-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="font-bold text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            About
          </motion.h1>
          <motion.p
            className="text-sm 1020:text-md xl:text-lg leading-10 text-justify text-[#ffffff]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* I'm Ahmed, a Full-Stack Developer specializing in the MERN Stack. I
            create user-friendly web applications using React.js for the front
            end and Node.js with Express.js for the back end, integrated with
            MongoDB. I’m passionate about delivering efficient solutions and
            always open to learning new technologies. */}
            I'm Ahmed, a Full-Stack Engineer who loves creating seamless digital
            experiences. I’m passionate about my work and constantly strive to
            make it better, exploring innovative solutions and pushing
            boundaries to deliver exceptional results.
            <br />I work with modern technologies like React, Tailwind CSS,
            Node.js, Express.js, and MongoDB to craft user-friendly, efficient,
            and scalable web applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="download-cv w-52 h-52 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 text-white cursor-pointer flex justify-center items-center"
          onClick={handleDownload}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.span
            className="z-10 text-[#220a3d] font-bold text-md lg:text-lg xl:text-xl 2xl:text-2xl duration-1000"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            &lt;Download CV /&gt;
          </motion.span>
        </motion.div>
      </section>
      <Skill />
    </div>
  );
};

export default About;
