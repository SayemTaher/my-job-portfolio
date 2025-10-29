import { NavLink, useNavigate } from "react-router-dom";
import { FaGraduationCap, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full">
          {/* Main Message */}
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              We lost this page
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              We searched high and low, but couldn’t find what you’re looking
              for. You can go back or return to the homepage to continue
              exploring.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center w-full mt-6 gap-x-3 gap-y-2 sm:w-auto">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg dark:text-gray-200 gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go Back</span>
              </button>

              <NavLink
                to="/"
                className="px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >
                Take Me Home
              </NavLink>
            </div>
          </div>

          {/* Helpful Shortcuts */}
          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Education */}
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
              <span className="text-gray-500 dark:text-gray-400">
                <FaGraduationCap className="w-6 h-6" />
              </span>
              <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200">
                Education
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Learn about my academic journey and background.
              </p>
              <NavLink
                to="/education"
                className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
              >
                <span>Go to Education</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </NavLink>
            </div>

            {/* Industry Projects */}
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
              <span className="text-gray-500 dark:text-gray-400">
                <FaProjectDiagram className="w-6 h-6" />
              </span>
              <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200">
                Industry Projects
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Explore my professional and client-based work.
              </p>
              <NavLink
                to="/projects"
                className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
              >
                <span>View Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </NavLink>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
              <span className="text-gray-500 dark:text-gray-400">
                <FaBriefcase className="w-6 h-6" />
              </span>
              <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200">
                Experience
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Learn more about my professional experiences and roles.
              </p>
              <NavLink
                to="/experience"
                className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
              >
                <span>View Experience</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
