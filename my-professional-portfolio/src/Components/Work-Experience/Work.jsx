import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio |Work Experiences</title>
      </Helmet>
      <section class="bg-white flex flex-col  min-h-[800px] pt-20 pl-5 pr-5 pb-10">
        <div class="container bg-gray-100 shadow-md px-6 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-2xl text-blue-600 font-bold capitalize lg:text-4xl ">
              My Work Experiences
            </h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-700">
              Below you will find my work experiences in a short details. I will
              try to explain how I contributed and what type of work I was
              assigned to do.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src="https://i.ibb.co/qBDkH6b/landgoed-huize-bergen.jpg"
                alt="Huize Bergen"
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 flex flex-col  bg-white rounded-md shadow ">
                <a
                  href="#"
                  class="font-semibold text-blue-950 hover:underline  md:text-xl"
                >
                  Landgoed Huize Bergen, Vught, The Netherlands
                </a>
                <span className="bg-blue-100 text-blue-600 font-semibold text-center w-[220px] p-2 mt-4 mb-2">
                  Hospitality & Management
                </span>

                <p class="mt-3 text-sm text-gray-700 dark:text-gray-700 md:text-sm">
                  <b>Landgoed Huize Bergen</b> is one of the most famous and
                  iconic 4 Star Hotel situated  in Vught, The Netherlands. I have been working
                  there in the hospitality department for the last three years
                  as a Full-Time Senior Food & Beverage professional.
                </p>

                <p class="mt-3 text-sm text-blue-500">
                  21 August 2022 - Present
                </p>
              </div>
            </div>

            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src="https://i.ibb.co/Ws6VVfr/plein-4.jpg"
                alt="Square-4"
              />

              <div class="relative flex flex-col z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
                <a
                  href="#"
                  class="font-semibold text-blue-950 hover:underline  md:text-xl"
                >
                  Square 4, Eindhoven, The Netherlands
                </a>
                <span className="bg-blue-100 text-blue-600 font-semibold text-center w-[220px] p-2 mt-4 mb-2">
                  Hospitality & Management
                </span>

                <p class="mt-3 text-sm text-gray-700  md:text-sm">
                  <b>Square 4</b> also known as Plein 4 is a famous restaurant
                  in the heart of Eindhoven Central that helds weekly live music
                  and DJ Party. During my time at square 4 I worked as a
                  self-employed food & beverage professional.
                </p>

                <p class="mt-3 text-sm text-blue-500">
                  20 October 2022 - 29 July 2024
                </p>
              </div>
            </div>
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

          <Link to="/projects">
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
      </section>
    </div>
  );
};

export default Work;
