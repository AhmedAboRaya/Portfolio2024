import "./about.css";
import circle from "../../../public/circleAbout.png"

const About = () => {
  return (
    <section className="h-screen bg-[#2C2D4F] text-white flex items-center flex-row w-full">
      <div className="max-w-2xl  p-8">
        <p className="text-lg leading-7 mb-4">
          I'm Ahmed, a Full-Stack Developer specializing in the MERN Stack. I
          create user-friendly web applications using React.js for the front end
          and Node.js with Express.js for the back end, integrated with MongoDB.
          I’m passionate about delivering efficient solutions and always open to
          learning new technologies.
        </p>
      </div>
      <div className="relative w-1/2">
        <img  className="absolute top-0" src={circle} /> 
        <div className="absolute top-0 text-[#262dee] pr-">&lt;Download CV /&gt;</div>
      </div>
    </section>
  );
};

export default About;
