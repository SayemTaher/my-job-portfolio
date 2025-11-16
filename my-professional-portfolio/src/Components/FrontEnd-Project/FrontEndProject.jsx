/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCode, FaGlobeAfrica } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

const FrontEndProject = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const maxLength = 120;
  const shouldTruncate = description && description.length > maxLength;
  const displayDescription = isExpanded || !shouldTruncate 
    ? description 
    : `${description.substring(0, maxLength)}...`;
  
  return (
    <div className="w-full max-w-full mx-auto lg:max-w-[1170px] bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 border border-blue-500/20 hover:border-blue-400/40 overflow-hidden">
      <div
        className="flex lg:flex-row flex-col lg:justify-between lg:items-start justify-center items-center gap-5 lg:gap-10 p-4 sm:p-5 lg:p-0"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:m-5">
          <ImageWithLoader
            className="w-full max-w-full sm:max-w-md lg:max-w-[600px] h-auto lg:h-[400px] object-cover animate__animated animate__backInLeft shadow-xl lg:shadow-sm rounded-xl lg:rounded-2xl"
            src={image}
            alt={`img of ${id}`}
            skeletonClassName="w-full max-w-full sm:max-w-md lg:max-w-[600px] h-auto lg:h-[400px] rounded-xl lg:rounded-2xl"
          />
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-auto p-4 sm:p-5 lg:p-5 text-center lg:text-left gap-4 lg:gap-5">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-2 pb-3 lg:pb-5">
              <h1 className="text-lg sm:text-xl lg:text-2xl text-white font-bold">
                {title}
              </h1>
              {type && (
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-xs sm:text-xs text-white px-3 py-1.5 sm:px-2.5 sm:py-1.5 text-center rounded-full font-semibold whitespace-nowrap border border-purple-400/30 shadow-md">
                  {type}
                </span>
              )}
            </div>
            <div className="flex gap-2 max-w-full lg:max-w-[400px] flex-wrap justify-center lg:justify-start items-center">
              {technology.map((techno, idx) => (
                <span
                  className="bg-blue-500/20 text-blue-300 p-1.5 sm:p-2 text-center lg:w-[120px] w-auto min-w-[90px] text-xs rounded-full border border-blue-400/30"
                  key={idx}
                >
                  {techno}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full">
            <p className="text-blue-200/80 text-sm sm:text-base max-w-full lg:max-w-[450px] mb-2">
              {displayDescription}
            </p>
            {shouldTruncate && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-blue-400 hover:text-cyan-400 text-sm font-medium mb-3 transition-colors"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full lg:w-auto">
            <Link 
              to={website_link}
              className="flex bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full text-white hover:scale-105 items-center gap-2 transition-transform duration-300 ease-out will-change-transform shadow-lg hover:shadow-xl border border-blue-400/30 w-full sm:w-auto justify-center"
            >
              <FaGlobeAfrica></FaGlobeAfrica>
              <span>Visit Now</span>
            </Link>
            <Link 
              to={gitHub}
              className="flex gap-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white p-3 rounded-full hover:scale-105 items-center transition-transform duration-300 ease-out will-change-transform shadow-lg hover:shadow-xl border border-slate-600/30 w-full sm:w-auto justify-center"
            >
              <FaCode />
              <span>View Code</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndProject;
