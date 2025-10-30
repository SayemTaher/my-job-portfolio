import { ProjectHeadline } from "../Home/ProjectHeadline";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa6";
// BlogCard.jsx
export const Bosch = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-out-quart",
        once: true,
        offset: 60,
      });
      AOS.refresh();
    }, []);
  return (
    <div
      data-aos="ease-in-out"
      className="m-4 flex flex-col lg:flex-row gap-2 rounded-xl p-4 shadow backdrop-blur-lg"
    >
      <div>
        <img
          className="object-cover w-full h-full"
          src="/bosch-dashboard.png"
          alt="Article"
        />
      </div>

      <div className="p-6 bg-gray-50">
        <div>
          <div>
            {/* {main section} */}
            <div className="flex items-center lg:items-start justify-center lg:justify-start">
              <img
                className="rounded-xl  bg-white px-2 mb-2 w-[180px] object-cover"
                src="/Bosch-Logo.png"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-5    justify-between">
              <div className="flex items-center lg:flex-row flex-col gap-8 lg:gap-0 justify-between">
                <div className="flex lg:flex-row flex-col items-center gap-2 justify-center   text-pink-500 rounded-2xl font-bold text-xs">
                  <span className="text-3xl lg:text-4xl font-bold text-purple-600">
                    Bosch Security Systems
                  </span>
                  <div className="flex gap-2 border-2 rounded-full py-2 border-pink-500 px-4 items-center">
                    <FaStar className="text-xl"></FaStar>{" "}
                    <span className="text-lg">10/10</span>
                  </div>
                </div>

                <div>
                  {" "}
                  <span className="bg-pink-50 text-[16px]  w-[250px] lg:text-sm font-semibold text-pink-500 border-2 border-pink-100 pt-2 pb-2 pl-4 pr-4 rounded-full">
                    {" "}
                    February, 2025 - June, 2025
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="block mt-6 lg:mt-4 text-xl font-semibold text-gray-600 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex={0}
              role="link"
            >
              Web Design & Development Internship
            </a>

            <p className="  mt-10 text-gray-500 text-lg dark:text-gray-400">
              During my internship at Bosch Security Systems in Eindhoven, I
              worked as a Web Application Design & Developer Intern, focusing on
              creating a secure, full-stack web solution for internal use. The
              project a major upgrade to the department’s Knowledge Kiosk system
              allowed me to apply both my technical and UX design skills in a
              professional, high-security environment.I implemented the MERN
              stack (MongoDB, Express.js, React.js, Node.js) to build a
              responsive, touch-optimized interface, designed for interactive
              kiosk displays. I developed a multi-user authentication system
              using JWT and integrated RFID card-reader support to enable
              secure, role-based access for different user types.
            </p>
          </div>

          <div className="mt-4 flex gap-2 flex-wrap text-sm font-semibold">
            <span className="bg-blue-50 p-2 rounded-md text-blue-500">
              Internship
            </span>
            <span className="bg-blue-50 p-2 rounded-md text-blue-500">
              Agile Development
            </span>
            <span className="bg-blue-50 p-2 rounded-md text-blue-500">
              Web development
            </span>
            <span className="bg-blue-50 p-2 rounded-md text-blue-500">
              Web Design
            </span>
            <span className="bg-blue-50 p-2 rounded-md text-blue-500">
              User Centered Design
            </span>
            <span className="bg-blue-50 p-2 rounded-md text-blue-600">
              UX/UI Design
            </span>
            <span className="bg-blue-50 p-2 rounded-md text-blue-600">
              Prototyping
            </span>
            <span className="bg-blue-50 p-2 rounded-md text-blue-600">
              A/B Testing
            </span>
          </div>
        </div>
        <div className="mt-10  bg-white p-6 rounded-md">
          <span className="text-xl font-bold">Tools & Technologies</span>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5 items-center">
            <div className="flex flex-col border-2 border-blue-200 p-2 rounded-xl gap-2 items-center justify-center h-[120px] w-[200px] bg-blue-50 text-blue-600">
              <FaReact className="text-5xl"></FaReact>
              <span className="text-lg text-blue-700 font-bold">React</span>
            </div>
            <div className="flex border-2 border-green-200 flex-col p-2 rounded-xl gap-2 items-center justify-center h-[120px] w-[200px] bg-green-50 text-green-600">
              <FaNodeJs className="text-5xl"></FaNodeJs>
              <span className="text-lg text-green-600 font-bold">Node.js</span>
            </div>
            <div className="flex border-2 border-green-700 flex-col p-2 rounded-xl gap-2 items-center justify-center h-[120px] w-[200px] bg-white">
              <SiExpress className="text-5xl text-green-700"></SiExpress>
              <span className="text-lg text-gray-600 font-bold">
                Express.js
              </span>
            </div>
            <div className="flex border-2 border-green-700 flex-col p-2 rounded-xl gap-2 items-center justify-center h-[120px] w-[200px] bg-white">
              <SiMongodb className="text-5xl text-green-700"></SiMongodb>
              <span className="text-lg text-gray-600 font-bold">MongoDB</span>
            </div>
            <div className="flex border-2 border-blue-200 flex-col p-2 rounded-xl gap-2 items-center justify-center h-[120px] w-[200px] bg-blue-50">
              <SiTailwindcss className="text-5xl text-blue-700"></SiTailwindcss>
              <span className="text-lg text-blue-600 font-bold">Tailwind</span>
            </div>
            <div className="flex border-2 border-purple-200  flex-col p-2 rounded-xl gap-2 items-center justify-center h-[120px] w-[200px] bg-purple-50">
              <FaFigma className="text-5xl text-purple-600"></FaFigma>
              <span className="text-lg text-purple-600 font-bold">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


