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
      className="bg-base-100 pt-5 pb-5 h-96 flex flex-col gap-4 justify-center items-center"
    >
      <h1 className="text-transparent text-2xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        {header}
      </h1>
      <span className="text-xl text-center text-gray-600">{info}</span>
    </div>
  );
};
