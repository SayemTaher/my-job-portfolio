import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import FrontEnd from "../Front-End/FrontEnd";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import "animate.css";

const Projects = () => {
  const handleType = (count) => {
    console.log(count); // This logs the current word count
  };

  const handleDone = () => {
    console.log(`Done typing!`);
  };

  return (
    <Fade triggerOnce damping={0.3} cascade>
      <div className="mx-auto flex flex-col  container ">
        <Helmet>
          <title>Portfolio | Front-End</title>
        </Helmet>

        <div
          className="flex lg:flex-row flex-col gap-5 pl-10 pr-10 justify-between items-center    min-h-[800px] bg-frontBlue"
          data-aos="fade-up"
        >
          <div
            className="flex flex-col gap-2   justify-center  lg:text-left"
            data-aos="fade-in"
          >
            <div
              data-aos="fade-in-right"
              className=" flex flex-col  gap-5 pb-5"
            >
              <h1 className=" lg:text-6xl text-gray-100 text-4xl  animate__animated animate__backInDown font-bold">
                <Typewriter
                  words={["Front-End Development", "Back-End Development"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </h1>
              <div className="h-[4px] rounded-full w-[300px] bg-primaryBlue"></div>
            </div>

            <div className="lg:max-w-[800px] max-w-[430px]">
              <p className="text-gray-400 text-sm">
                For the past two years, Ive been dedicated to my growth as a web
                developer.{" "}
                <b>
                  {" "}
                  I have completed 15+ projects using JS, React, React
                  Router,MongoDB, Node.Js, Express.Js and Firebase
                  authentication, while gaining proficiency in HTML, CSS, and
                  Tailwind{" "}
                </b>
                . I am currently building modern websites with Node.js and
                MongoDB. My ultimate goal is to become a skilled Full Stack
                Developer who creates impactful products.
              </p>
            </div>

            <div className="flex gap-5  flex-wrap pt-10 lg:text-2xl text-lg">
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <FaNodeJs className="text-green-500"></FaNodeJs>
                </div>
              </Fade>
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <FaReact className="text-blue-400"></FaReact>
                </div>
              </Fade>
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <ImHtmlFive className="text-orange-400"></ImHtmlFive>
                </div>
              </Fade>
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <IoLogoJavascript className="text-yellow-400"></IoLogoJavascript>
                </div>
              </Fade>
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <SiCss3 className="text-blue-600"></SiCss3>
                </div>
              </Fade>
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <SiTailwindcss className="text-blue-400"></SiTailwindcss>
                </div>
              </Fade>
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <SiFirebase className="text-orange-500"></SiFirebase>
                </div>
              </Fade>
              <Fade>
                <div className="bg-gray-100 p-5 rounded-full text-center shadow-md">
                  <SiMongodb className="text-green-500"></SiMongodb>
                </div>
              </Fade>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/Kr793Tn/deviceframes-3.png" className="w-[600px]" alt="" />
          </div>
        </div>
      </div>
      <div>
        <FrontEnd></FrontEnd>
      </div>
    </Fade>
  );
};

export default Projects;
