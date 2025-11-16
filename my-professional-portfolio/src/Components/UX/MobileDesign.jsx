import { Helmet } from "react-helmet-async";
import HeroSection from "../HeroSection/HeroSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMobileAlt, FaPalette, FaUserCheck, FaRocket } from "react-icons/fa";
import { clientProjects } from "../../data/clientProjects";
import { Link } from "react-router-dom";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  const shouldTruncate = project.description && project.description.length > maxLength;
  const displayDescription = isExpanded || !shouldTruncate 
    ? project.description 
    : `${project.description.substring(0, maxLength)}...`;

  return (
    <Link
      key={project.id}
      to={`/client-project/${project.id}`}
      className="group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          {project.img ? (
            <ImageWithLoader
              src={project.img}
              alt={project.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out will-change-transform"
              skeletonClassName="h-64 w-full"
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
          <div className="mb-4">
            <p className="text-blue-200/80 mb-2">
              {displayDescription}
            </p>
            {shouldTruncate && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-blue-400 hover:text-cyan-400 text-sm font-medium transition-colors"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>

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
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const MobileDesign = () => {
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
      icon: <FaPalette className="text-pink-400 mx-auto" />,
      title: "UI Design",
      description: "Beautiful and intuitive interfaces"
    },
    {
      icon: <FaUserCheck className="text-purple-400 mx-auto" />,
      title: "UX Research",
      description: "User-centered design approach"
    },
    {
      icon: <FaRocket className="text-blue-400 mx-auto" />,
      title: "Prototyping",
      description: "Rapid iteration and testing"
    }
  ];

  return (
    <div className="mx-auto flex flex-col bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      <Helmet>
        <title>Portfolio | UX/UI Design Projects</title>
      </Helmet>

      {/* Hero Section - Full Screen Height */}
      <HeroSection
        title="UX/UI Design"
        subtitle="Creating Intuitive Digital Experiences"
        description="Showcasing my work in user experience and interface design. From research to prototyping, I create designs that are both beautiful and functional."
        gradient="from-slate-900 via-navy-900 to-indigo-900"
        features={features}
      />

      {/* Projects Section */}
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
              Client Projects
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Real-world projects showcasing UX/UI design expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clientProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDesign;
