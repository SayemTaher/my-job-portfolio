import { FaDatabase } from "react-icons/fa6";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import { FaCode } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { MdDesignServices } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
AOS.init({
  // Global settings
  offset: 100, // Adjusts the offset (in pixels) from the top/bottom of the element when the animation starts
  duration: 800, // Duration of the animation (in milliseconds)
  easing: "ease", // Easing function for the animation
  delay: 0, // Delay before the animation starts (in milliseconds)
  once: false, // Whether the animation should only happen once
  mirror: true, // Whether the animation should be mirrored on scroll up and scroll down
});

import "./hero.css";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-pink-100  justify-center bg-no-repeat  min-h-screen    font-mulish"
      data-aos="fade-up-right"
    >
      <div
        className="flex flex-col gap-5 mt-20 lg:mt-0 items-center justify-center "
        data-aos="fade-up-right"
      >
        {/* <div className="pb-2 text-left">
            <span className=" border-l-4 pl-2 border-darknavy  text-lg lg:text-2xl font-bold text-blue-600 ">
              Sayem Ibne Taher
            </span>
          </div> */}
        <div data-aos="fade-up">
          <div>
            <h1 className="lg:text-8xl font-bold text-center  pb-4 animate__animated animate__fadeInDown text-3xl text-darknavy">
              Designing Human-Centered <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <Typewriter
                  words={[
                    "Digital Experiences",
                    "Solutions",
                    "Digital Innovations",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
        <div>
          <p className="lg:w-[800px] w-[350px] text-sm lg:text-2xl text-gray-600 text-center  lg:text-center ">
            {" "}
            Blending creativity and technology to craft meaningful digital
            solutions that connect users with innovation
          </p>
        </div>
        {/* <div className="  lg:ml-5 w-[150px] flex lg:hidden md:hidden ">
            <span className=" border-b-4 text-2xl  pb-2 border-gray-500  font-bold  text-darknavy">
              Expertise In{" "}
            </span>
          </div> */}
        <div className="flex items-center flex-wrap justify-center pt-6 gap-4 ">
          <div className="bg-white   shadow-sm lg:shadow-none rounded-full pt-4 pb-4 pr-4 pl-4 text-md text-center flex gap-2  items-center justify-center">
            <FaCode className="text-purple-500 text-2xl -mt-14"></FaCode>
            <span className=" -ml-6 font-semibold text-pink-500">
              Front-End Development
            </span>
          </div>
          <div className="bg-white  shadow-sm lg:shadow-md shadow-purple-200 pt-4 pb-4 pr-4 pl-4  rounded-full lg:pt-6 lg:pb-6 lg:pr-4 lg:pl-4 text-md text-center flex gap-2  items-center justify-center">
            <MdDesignServices className="text-purple-500  text-2xl -mt-[58px] lg:-mt-[70px]" />

            <span className=" -ml-8 font-semibold  text-pink-500">
              UX/UI Design
            </span>
          </div>
          <div className="bg-white shadow-sm lg:shadow-none font-semibold  rounded-full pt-4 pb-4 pr-4 pl-4 text-md text-center flex gap-2  items-center justify-center">
            <FaDatabase className="text-purple-500  text-2xl -mt-14"></FaDatabase>
            <span className=" -ml-6 text-pink-500">
              Back-End Development
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-5   text-sm font-bold  rounded-full p-2  gap-2 justify-center items-center">
        <FaLocationCrosshairs className="text-gray-600"></FaLocationCrosshairs>
        <span className="text-gray-600"> Eindhoven, The Netherlands</span>
      </div>
    </div>
  );
};

export default Hero;
