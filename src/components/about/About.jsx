import "./about.css";
import ParticlesComponent from "../particles/ParticlesComponent";

const About = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ahmed_CV.pdf";
    link.download = "Ahmed_CV.pdf"; 
    link.click();
  };

  return (
    <div className="relative bg-[#2C2D4F] py-20 md:py-0">
      <ParticlesComponent id="particles" />
      <section className=" relative h-screen bg-[#2C2D4F] text-white flex items-center  flex-row justify-center md:justify-between p-10 xl:p-36 2xl:px-44 flex-wrap">
        <div className="max-w-2xl space-y-4 p-8">
          <h1 className="font-bold text-xl">ABOUT</h1>
          <p className="text-sm md:text-md xl:text-lg leading-10 text-justify text-white">
            I'm Ahmed, a Full-Stack Developer specializing in the MERN Stack. I
            create user-friendly web applications using React.js for the front
            end and Node.js with Express.js for the back end, integrated with
            MongoDB. I’m passionate about delivering efficient solutions and
            always open to learning new technologies.
          </p>
        </div>

        <div
          className="download-cv w-52 h-52 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 text-white cursor-pointer"
          onClick={handleDownload}
        >
          <span className="z-10 text-[#220a3d] font-bold text-md lg:text-lg xl:text-xl 2xl:text-2xl duration-1000">
            &lt;Download CV /&gt;
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;