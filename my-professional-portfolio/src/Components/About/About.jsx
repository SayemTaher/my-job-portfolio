import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Education from "../Education/Education";
import Contact from "./Contact";

const About = () => {
  return (
      <div className="flex flex-col pt-10 lg:pt-0">
          <Helmet><title>Porfolio | About Me</title></Helmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="relative flex">
          <div className="min-h-[900px] lg:w-1/3"></div>
          <div className="hidden w-3/4  bg-gray-100 dark:bg-gray-900 lg:block"></div>

          <div className="container pt-10   lg:p-0 lg:pl-10 pl-5 pr-5 lg:pr-0 flex flex-col justify-center w-full min-h-[800px]   mx-auto lg:absolute lg:inset-x-0">
            <h1
              className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
              data-aos="fade-up-right"
            >
              <span className="text-blue-500 lg:text-5xl text-2xl  uppercase font-bold">
                About Me...
              </span>{" "}
              <br />
            </h1>

            <div
              className="mt-10 bg-white dark:text-gray-500 p-5 shadow-sm rounded-md ml-0 lg:ml-28 lg:mt-20 lg:flex items-center"
              data-aos="fade-in"
            >
              <img
                data-aos="fade-right"
                className="object-cover object-left-top h-[300px] w-[300px] rounded-xl lg:rounded-full "
                src="https://i.ibb.co/hLsFWKq/IMG-2299.jpg"
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0" data-aos="fade-left">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-800 lg:w-72">
                  An overview of who I am...
                </h1>

                <p className="max-w-[800px] mt-6 text-gray-500 dark:text-gray-400">
                  “ A third-year student pursuing a Bachelor of Science in ICT
                  at Fontys University of Applied Sciences. Primarily focused on
                  Full Stack development, with a specialisation in Mobile
                  application development, particularly iOS platforms. Expertise
                  in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.Js,
                  MongoDB and Swift. Skilled in UI/UX design and prototyping
                  using Sketch and Figma. ”
                </p>

                <h3 className="mt-6 text-2xl font-semibold text-blue-600">
                  Sayem Ibne Taher
                </h3>
                <p className=" flex gap-2 items-center mt-2 text-gray-600 text-md dark:text-gray-800">
                  <FaCode> </FaCode>Junior Front-End Developer
                </p>
                
              </div>
            </div>

            <div className="flex items-center mb-6 justify-between mt-12 lg:justify-start">
              <Link to="/">
                <button
                  title="left arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </Link>

              <Link to="/frontEnd">
                <button
                  title="right arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 p-10 flex flex-col gap-5">
        <div className="pb-10 ">
          <h1 className="text-3xl lg:text-5xl font-bold dark:text-blue-600  ">Education</h1>
          <div className="flex  justify-left mx-auto mt-6">
            <span className="inline-block w-48 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>
        <Education></Education>
      </section>
      <section className="bg-gray-100  p-5">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default About;
