import { Helmet } from "react-helmet-async";
import HeroSection from "../HeroSection/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase, FaUsers, FaChartLine, FaReact, FaNodeJs, FaFigma, FaStar } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import { clientProjects } from "../../data/clientProjects";
import { Bosch } from "../Project Overview/Bosch";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      icon: <FaBriefcase className="text-blue-400 mx-auto" />,
      title: "Professional",
      description: "Industry experience"
    },
    {
      icon: <FaUsers className="text-cyan-400 mx-auto" />,
      title: "Collaborative",
      description: "Team environments"
    },
    {
      icon: <FaChartLine className="text-blue-300 mx-auto" />,
      title: "Growth",
      description: "Continuous development"
    }
  ];

  return (
    <div className="mx-auto flex flex-col bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      <Helmet>
        <title>Portfolio | Work Experience</title>
      </Helmet>
      
      <HeroSection
        title="Work Experience"
        subtitle="Professional Journey"
        description="Exploring my professional experiences including internships and client projects that have contributed to my growth and expertise"
        gradient="from-slate-900 via-navy-900 to-indigo-900"
        features={features}
      />
      
      {/* Internship Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-navy-900 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Internship Experience
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Professional internship that shaped my technical and design skills
            </p>
          </div>

          <Bosch></Bosch>
        </div>
      </section>

      {/* Client Projects Section */}
      <section className="bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client Projects
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Real-world projects for clients showcasing UX/UI design expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clientProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/client-project/${project.id}`}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={project.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`h-full w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <span className="text-white text-2xl font-bold text-center px-4">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-200/80 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.chips.map((chip, chipIndex) => (
                        <span
                          key={chipIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-400/30"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors font-semibold">
                      <span>View Project</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
