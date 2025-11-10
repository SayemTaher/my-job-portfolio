import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCode } from "react-icons/fa";
import Education from "../Education/Education";
import Contact from "./Contact";
import HeroSection from "../HeroSection/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const About = () => {
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
      icon: <FaLaptopCode className="text-purple-400 mx-auto" />,
      title: "Developer",
      description: "Full-stack expertise"
    },
    {
      icon: <FaGraduationCap className="text-pink-400 mx-auto" />,
      title: "Student",
      description: "Continuous learning"
    },
    {
      icon: <IoLogoFigma className="text-rose-400 mx-auto" />,
      title: "Designer",
      description: "Digital solutions"
    }
  ];

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      <Helmet>
        <title>Portfolio | About Me</title>
      </Helmet>
      
      <HeroSection
        title="About Me"
        subtitle="Get to Know Me Better"
        description="A final-year student pursuing a Bachelor of Science in ICT at Fontys University of Applied Sciences. Primarily focused on Full Stack development, with a specialization in Mobile application development, particularly iOS platforms."
        gradient="from-slate-900 via-navy-900 to-indigo-900"
        features={features}
      />
      
      <section className="bg-gradient-to-br from-indigo-900 via-navy-900 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div
              className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-500/20"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 " data-aos="fade-right">
                  <img
                    src="/Sayem-linkedin.jpg"
                    alt="Sayem Ibne Taher"
                    className="w-[340px]   h-[340px] rounded-full  object-cover shadow-lg border-2 border-blue-500/30"
                  />
                </div>
                <div className="flex-1" data-aos="fade-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    An overview of who I am...
                  </h2>
                  <p className="text-blue-200/80 text-lg leading-relaxed mb-6">
                    A final-year student pursuing a Bachelor of Science in ICT at Fontys University of Applied Sciences. Primarily focused on Full Stack development, Minor in Digital Experienced Design, with a specialization in Mobile application development, particularly iOS platforms. Expertise in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, MongoDB and Swift. Skilled in UI/UX design and prototyping using Sketch and Figma.
                  </p>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-2xl font-bold text-blue-400 mb-1">
                      Sayem Ibne Taher
                    </h3>
                    <p className="text-blue-200 flex items-center gap-2">
                      <FaCode /> Junior Front-End Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education
            </h2>
            <div className="flex justify-center items-center gap-2 mt-6">
              <span className="inline-block w-48 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </div>
          </div>
          <Education />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-navy-900 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default About;
