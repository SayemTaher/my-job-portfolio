/* eslint-disable react/prop-types */
import { FaCode, FaGlobeAfrica } from "react-icons/fa";

const FrontEndProject = ({ project }) => {
  const {
    id,
    title,
    gitHub,
    description,
    image,
    technology,
    type,
    website_link,
  } = project;
  
  return (
    <div className="flex mockup-window container mx-auto lg:m-0 lg:flex-row bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm shadow-lg hover:shadow-2xl gap-10 justify-center items-center rounded-2xl w-[360px] lg:w-[1170px] transition-all duration-300 hover:-translate-y-2 border border-blue-500/20 hover:border-blue-400/40">
      <div
        className="mt-5 flex lg:justify-between lg:items-start justify-center items-center lg:flex-row flex-col gap-5"
        data-aos="fade-up"
      >
        <div className="m-5">
          <img
            className="lg:h-[400px] animate__animated animate__backInLeft object-cover lg:w-[600px] shadow-xl lg:shadow-sm rounded-xl lg:rounded-2xl"
            src={image}
            alt={`img of ${id}`}
          />
        </div>

        <div className="flex flex-col justify-center items-center p-5 text-center lg:text-left lg:justify-start lg:items-start gap-5">
          <div>
            <h1 className="lg:text-2xl text-lg pt-5 lg:pt-0 text-white pb-5 font-bold">
              {title}{" "}
              <sup className="bg-gradient-to-r from-blue-600 to-cyan-600 text-xs text-white p-2 text-center rounded-full">
                {type}
              </sup>
            </h1>
            <div className="flex gap-2 max-w-[400px] flex-wrap text-center items-center">
              {technology.map((techno, idx) => (
                <span
                  className="bg-blue-500/20 text-blue-300 p-1 text-center lg:w-[120px] w-[90px] text-xs rounded-full border border-blue-400/30"
                  key={idx}
                >
                  {techno}
                </span>
              ))}
            </div>
          </div>

          <p className="text-blue-200/80 max-w-[450px]">{description}</p>

          <div className="flex gap-4 items-center">
            <a
              href={website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full text-white hover:scale-105 items-center gap-2 transition-transform duration-300 shadow-lg hover:shadow-xl border border-blue-400/30"
            >
              <FaGlobeAfrica></FaGlobeAfrica>
              <button>Visit Now</button>
            </a>
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white p-3 rounded-full hover:scale-105 items-center transition-transform duration-300 shadow-lg hover:shadow-xl border border-slate-600/30"
            >
              <FaCode />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndProject;
