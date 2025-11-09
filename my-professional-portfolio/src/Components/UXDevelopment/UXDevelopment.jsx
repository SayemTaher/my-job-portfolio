import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaSearch, FaLightbulb, FaPalette, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";
import { clientProjects } from "../../data/clientProjects";

const UXDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
    });
  }, []);

  const processes = [
    {
      step: "01",
      title: "Research & Discovery",
      icon: <FaSearch className="text-4xl" />,
      description: "Understanding user needs, market analysis, and competitive research to inform design decisions."
    },
    {
      step: "02",
      title: "Ideation & Strategy",
      icon: <FaLightbulb className="text-4xl" />,
      description: "Brainstorming solutions, creating user personas, and developing design strategies."
    },
    {
      step: "03",
      title: "Design & Prototyping",
      icon: <FaPalette className="text-4xl" />,
      description: "Creating wireframes, high-fidelity designs, and interactive prototypes using Figma and Sketch."
    },
    {
      step: "04",
      title: "User Testing",
      icon: <FaUsers className="text-4xl" />,
      description: "Conducting usability tests, gathering feedback, and iterating on designs based on user insights."
    },
    {
      step: "05",
      title: "Development",
      icon: <FaRocket className="text-4xl" />,
      description: "Collaborating with developers to implement designs, ensuring pixel-perfect execution."
    },
    {
      step: "06",
      title: "Analytics & Iteration",
      icon: <FaChartLine className="text-4xl" />,
      description: "Monitoring user behavior, analyzing metrics, and continuously improving the user experience."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            UX/UI Development
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A comprehensive approach to creating exceptional user experiences through systematic design processes
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-7xl mx-auto">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-400">{process.icon}</div>
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {process.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
              <p className="text-blue-200/80 leading-relaxed">{process.description}</p>
            </div>
          ))}
        </div>

        {/* Client Projects Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Projects
          </h3>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Real-world projects showcasing UX/UI design expertise
          </p>
        </div>

        <div >
          {clientProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/client-project/${project.id}`}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gradient-to-br from-slate-800/60  to-navy-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Image */}
                <div className="relative h-[400px] object-cover overflow-hidden">
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
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
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
                  <div className="flex items-center text-blue-400 mt-6 group-hover:text-cyan-400 transition-colors font-semibold">
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
  );
};

export default UXDevelopment;

