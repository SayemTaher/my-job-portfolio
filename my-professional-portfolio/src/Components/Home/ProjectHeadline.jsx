import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const ProjectHeadline = ({ header, info }) => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-quart",
      once: true,
      offset: 40,
    });
    AOS.refresh(); 
  }, []);

  return (
    <div
      data-aos="fade-up" 
      className="bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 py-20 md:py-24 flex flex-col gap-6 justify-center items-center relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-6">
          {header}
        </h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-200 leading-relaxed">
          {info}
        </p>
      </div>
    </div>
  );
};
