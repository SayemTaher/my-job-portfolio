import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <div
      className="mx-auto flex flex-col container  pt-20 pb-20"
      data-aos="fade-in"
    >
      <Helmet>
        <title>Portfolio | Certification</title>
      </Helmet>
      <section class="bg-white ">
        <div class="container px-6 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-2xl font-bold  text-blue-950 capitalize lg:text-4xl ">
              Professional Courses & International Events Certification
            </h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-700">
              Below, I have highlighted the professional courses I have
              completed, which have significantly strengthened my personal
              skills, along with the international events I have participated
              in.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div
                class="relative shadow-md border-2 border-gray-400"
                data-aos="fade-right"
              >
                <img
                  class="object-cover object-top w-full h-64  lg:h-80"
                  src="https://i.ibb.co/6ZWMrbx/Screenshot-2024-07-03-at-00-13-18.png"
                  alt=""
                />

                <div class="absolute bottom-0  shadow-lg flex p-3 bg-white  ">
                  <img
                    class="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co/VvGYkhk/ph.jpg"
                    alt=""
                  />

                  <div class="mx-4">
                    <h1 class="text-sm text-gray-700 ">
                      Programming Hero
                    </h1>
                    <a
                      href="https://www.programming-hero.com"
                      class="text-sm text-blue-500"
                    >
                      www.programming-hero.com
                    </a>
                  </div>
                </div>
              </div>

              <h1 class="mt-6 text-xl font-semibold text-blue-600 ">
                Complete Web Development
              </h1>

              <hr class="w-32 my-6 text-blue-500" />

              <p class="text-sm text-gray-500 ">
                This course has equipped me with extensive hands-on experience,
                laying a solid foundation for my career as a Junior Web
                Developer. I have become proficient in front-end and back-end
                development, authentication, authorization, and database
                management. Six months of continuous practice, classes, and
                assignments have given me the confidence to present myself as a
                skilled Web Developer. I am excited to apply my skills and
                continually push myself to new heights.
              </p>
            </div>

            <div>
              <div
                class="relative shadow-md border-2 border-gray-400"
                data-aos="fade-up"
              >
                <img
                  class="object-cover object-top w-full h-64 lg:h-80"
                  src="https://i.ibb.co/JdvNq4D/Screenshot-2024-07-04-at-22-24-21.png"
                  alt=""
                />

                <div class="absolute bottom-0 shadow-lg flex p-3 bg-white  ">
                  <img
                    class="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co/HVh0ByR/free-code-camp.png"
                    alt=""
                  />

                  <div class="mx-4">
                    <h1 class="text-sm text-gray-700 ">
                      FreeCodeCamp
                    </h1>
                    <a
                      href="https://www.freecodecamp.org/learn"
                      class="text-sm text-blue-500"
                    >
                      www.freecodecamp.org
                    </a>
                  </div>
                </div>
              </div>

              <h1 class="mt-6 text-xl font-semibold text-blue-600 ">
                Responsive Web Design
              </h1>

              <hr class="w-32 my-6 text-blue-500" />

              <p class="text-sm text-gray-500 ">
                This code provides hands on experience while working through
                projects to provide learners a complete strong understanding of
                designing web applications using HTML and CSS. The main purpose
                is to provide a complete understanding of responsive web
                development.
              </p>
            </div>

            <div>
              <div
                class="relative border-2 shadow-md border-gray-400"
                data-aos="fade-right"
              >
                <img
                  class="object-cover  object-top w-full h-64  lg:h-80"
                  src="https://i.ibb.co/DrfcbMj/1711407683311.jpg"
                  alt=""
                />

                <div class="absolute bottom-0 shadow-lg flex p-3 bg-white  ">
                  <img
                    class="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co/s1CMLrR/iba-kolding.png"
                    alt=""
                  />

                  <div class="mx-4">
                    <h1 class="text-sm text-gray-700 ">
                      IBA, Kolding, Denmark
                    </h1>
                    <a
                      className="text-sm text-blue-500"
                      href="https://busitweeks.wordpress.com/international-business-academy-kolding/"
                    >
                      www.iba.dk
                    </a>
                  </div>
                </div>
              </div>

              <h1 class="mt-6 text-xl font-semibold text-blue-600 ">
                Sustainability and Green UX in Multimedia and IT
              </h1>

              <hr class="w-32 my-6 text-blue-500" />

              <p class="text-sm text-gray-500 ">
                I worked actively as part of a multicultural team, on projects
                requiring problem-solving skills with an academic but
                nevertheless practical mindset. Of crucial importance over the
                various weeks were time management, cross-cultural communication
                and team spirit. These successfully completed projects increase
                skillsets, in terms of international competencies and
                intercultural communication, providing valuable insight into
                multicultural workplaces, bringing the students into closer
                contact with a global mindset, and making them more attractive
                in terms of global employability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center mb-6 justify-between mt-12 lg:justify-start">
        <Link to="/">
          <button
            title="left arrow"
            className="p-2 text-gray-800 transition-colors duration-300 bg-white border rounded-full rtl:-scale-x-100 dark:border-gray-700  dark:hover:bg-gray-800 hover:bg-gray-100"
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
            className="p-2 text-gray-800 transition-colors bg-white duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700  dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
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
  );
};

export default Certificates;
