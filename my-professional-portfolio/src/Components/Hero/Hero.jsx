import { FaCode, FaDatabase } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Fast",
      description: "High-performance development"
    },
    {
      icon: <MdDesignServices className="text-4xl" />,
      title: "Reliable",
      description: "Consistent quality delivery"
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Safe",
      description: "Secure and scalable solutions"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 min-h-screen flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className=" mx-auto text-center" data-aos="fade-up">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className=" text-4xl md:text-7xl lg:text-8xl font-bold text-white  leading-tight">
            Designing Human-Centered
          </h1>
           <span className="bg-gradient-to-r mb-4 text-6xl md:text-5xl lg:text-9xl font-bold from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                <Typewriter
                  words={["Experiences", "Solutions", "Innovations"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-6 max-w-6xl text-center leading-relaxed">
            Blending creativity and technology to translate ideas into meaningful digital solutions that connect users with innovation
          </p>
          </div>

          

          {/* Expertise Tags */}
          <div className="flex items-center flex-wrap justify-center pt-12 gap-4" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-blue-500/20 backdrop-blur-md shadow-lg rounded-full px-6 py-3 text-center flex gap-2 items-center justify-center hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30">
              <FaCode className="text-white text-xl" />
              <span className="font-semibold text-white">Front-End Development</span>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-md shadow-lg rounded-full px-6 py-3 text-center flex gap-2 items-center justify-center hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30">
              <MdDesignServices className="text-white text-xl" />
              <span className="font-semibold text-white">UX/UI Design</span>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-md shadow-lg rounded-full px-6 py-3 text-center flex gap-2 items-center justify-center hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30">
              <FaDatabase className="text-white text-xl" />
              <span className="font-semibold text-white">Back-End Development</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center mt-8 text-blue-200" data-aos="fade-up" data-aos-delay="400">
            <FaLocationCrosshairs className="mr-2" />
            <span>Eindhoven, The Netherlands</span>
          </div>
        </div>
      </div>

      {/* Smooth scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-300/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
