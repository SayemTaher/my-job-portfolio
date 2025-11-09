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
    <div  className=" mx-auto container mt-10 mb-10 pr-5 pl-5" data-aos="fade-up">
            <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="">
                  <img
                    className="object-cover w-full h-full"
                    src="/bosch-dashboard.png"
                    alt="Bosch Security Systems Dashboard"
                  />
                </div>

                <div className="p-8 ">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      className=" w-[180px] object-cover "
                      src="/Bosch-Logo.png"
                      alt="Bosch Logo"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
                    <div className="flex lg:flex-row flex-col items-left lg:items-center gap-3">
                      <span className="text-3xl lg:text-4xl font-bold text-white">
                        Bosch Security Systems
                      </span>
                      <div className="flex gap-2 border-2 items-center rounded-full py-2 border-blue-400 px-4 max-w-[120px]  bg-blue-500/20">
                        <FaStar className="text-xl text-yellow-400"></FaStar>
                        <span className="text-lg text-white">10/10</span>
                      </div>
                    </div>
                    <span className="bg-blue-500/20 text-sm font-semibold text-blue-200 border-2 border-blue-400/30 pt-2 pb-2 pl-4 pr-4 rounded-full">
                      February, 2025 - June, 2025
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-300 mb-4">
                    Web Design & Development Internship
                  </h3>

                  <p className="text-blue-200/80 text-lg mb-6 leading-relaxed">
                    During my internship at Bosch Security Systems in Eindhoven, I worked as a Web Application Design & Developer Intern, focusing on creating a secure, full-stack web solution for internal use. The project, a major upgrade to the department's Knowledge Kiosk system, allowed me to apply both my technical and UX design skills in a professional, high-security environment. I implemented the MERN stack (MongoDB, Express.js, React.js, Node.js) to build a responsive, touch-optimized interface, designed for interactive kiosk displays. I developed a multi-user authentication system using JWT and integrated RFID card-reader support to enable secure, role-based access for different user types.
                  </p>

                  <div className="flex gap-2 flex-wrap text-sm font-semibold mb-6">
                    {["Internship", "Agile Development", "Web development", "Web Design", "User Centered Design", "UX/UI Design", "Prototyping", "A/B Testing"].map((tag) => (
                      <span key={tag} className="bg-blue-500/20 p-2 rounded-md text-blue-300 border border-blue-400/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="bg-blue-500/10 p-6 rounded-md border border-blue-500/20">
                    <span className="text-xl font-bold text-white mb-4 block">Tools & Technologies</span>
                    <div className="flex flex-wrap justify-start gap-4">
                      {[
                        { icon: <FaReact className="text-5xl text-blue-400" />, name: "React" },
                        { icon: <FaNodeJs className="text-5xl text-cyan-400" />, name: "Node.js" },
                        { icon: <SiExpress className="text-5xl text-gray-300" />, name: "Express.js" },
                        { icon: <SiMongodb className="text-5xl text-blue-300" />, name: "MongoDB" },
                        { icon: <SiTailwindcss className="text-5xl text-cyan-500" />, name: "Tailwind" },
                        { icon: <FaFigma className="text-5xl text-cyan-400" />, name: "Figma" }
                      ].map((tech, idx) => (
                        <div key={idx} className="flex flex-col border-2 border-blue-500/30 p-3 rounded-xl gap-2 items-center justify-center h-[120px] w-[150px] bg-blue-500/10">
                          <div>{tech.icon}</div>
                          <span className="text-sm text-blue-200 font-bold">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};


