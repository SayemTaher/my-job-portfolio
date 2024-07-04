/* eslint-disable react/prop-types */
// import { Fade } from "react-awesome-reveal";
import { FaCode, FaGlobeAfrica } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div className="flex  mockup-window container mx-auto lg:m-0 lg:flex-row bg-gray-100  shadow-md gap-10 justify-center items-center rounded-xl w-[360px]  lg:w-[1170px]">
      <div
        className=" mt-5  flex lg:justify-between lg:items-start justify-center items-center lg:flex-row flex-col gap-5"
        data-aos="fade-up"
      >
        <div className="m-5">
          <img
            className="lg:h-[400px] animate__animated animate__backInLeft  object-cover lg:w-[600px]  shadow-xl lg:shadow-sm rounded-xl lg:rounded-2xl "
            src={image}
            alt={`img of ${id}`}
          />
        </div>

        <div className="flex flex-col justify-center items-center p-5 text-center lg:text-left lg:justify-start lg:items-start gap-5">
          <div>
            <h1 className="lg:text-2xl text-lg pt-5 lg:pt-0 text-gray-500  pb-5 font-bold">
              {title}{" "}
              <sup className="bg-primaryBlue text-xs text-white p-2 text-center rounded-full">
                {type}
              </sup>
            </h1>
            <div className="flex gap-2 max-w-[400px]  flex-wrap text-center  items-center">
              {technology.map((techno, idx) => (
                <span
                  className="bg-blue-100 text-blue-600 p-1 text-center lg:w-[120px] w-[90px] text-xs  rounded-full"
                  key={idx}
                >
                  {techno}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-500 max-w-[450px]">{description}</p>

          <div className=" flex  gap-4    items-center rounded-full">
            <div className="flex bg-blue-950 p-2 rounded-full text-white hover:scale-95 items-center gap-2">
              <FaGlobeAfrica></FaGlobeAfrica>
              <Link to={website_link}>
                <button>Visit Now</button>
              </Link>
            </div>
            <div className="flex gap-2 bg-gray-800 text-white p-2 rounded-full hover:scale-95 items-center">
              <FaCode />
              <Link to={gitHub}>View Code</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndProject;
