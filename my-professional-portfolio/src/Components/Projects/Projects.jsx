import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import FrontEnd from "../Front-End/FrontEnd";
import PersonalProjects from "../Project Overview/PersonalProjects";
import { Helmet } from "react-helmet-async";
import HeroSection from "../HeroSection/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      icon: <FaReact className="text-blue-400 mx-auto" />,
      title: "React",
      description: "Modern UI development"
    },
    {
      icon: <FaNodeJs className="text-cyan-400 mx-auto" />,
      title: "Node.js",
      description: "Server-side development"
    },
    {
      icon: <SiMongodb className="text-blue-300 mx-auto" />,
      title: "MongoDB",
      description: "Database management"
    }
  ];

  return (
    <div className="mx-auto flex flex-col bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      <Helmet>
        <title>Portfolio | Web Development Projects</title>
      </Helmet>

      {/* Hero Section - Full Screen Height */}
      <HeroSection
        title="Web Development"
        subtitle="Building Modern Digital Solutions"
        description="Showcasing my expertise in full-stack development using cutting-edge technologies and best practices. I have completed 15+ projects using JS, React, React Router, MongoDB, Node.js, Express.js and Firebase authentication."
        gradient="from-slate-900 via-navy-900 to-indigo-900"
        features={features}
      />

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-navy-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technologies I Work With
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <ImHtmlFive className="text-5xl text-orange-500" />, name: "HTML5" },
              { icon: <SiCss3 className="text-5xl text-blue-600" />, name: "CSS3" },
              { icon: <IoLogoJavascript className="text-5xl text-yellow-400" />, name: "JavaScript" },
              { icon: <FaReact className="text-5xl text-blue-400" />, name: "React" },
              { icon: <SiTailwindcss className="text-5xl text-cyan-500" />, name: "Tailwind" },
              { icon: <FaNodeJs className="text-5xl text-cyan-400" />, name: "Node.js" },
              { icon: <SiExpress className="text-5xl text-gray-300" />, name: "Express" },
              { icon: <SiMongodb className="text-5xl text-blue-300" />, name: "MongoDB" },
              { icon: <SiFirebase className="text-5xl text-orange-500" />, name: "Firebase" }
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-800/50 to-navy-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-400/40 hover:scale-110 transition-all duration-300 cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-blue-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Front-End Projects Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FrontEnd />
        </div>
      </section>

      
    </div>
  );
};

export default Projects;
