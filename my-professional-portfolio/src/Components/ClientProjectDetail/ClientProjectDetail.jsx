import { useParams, Link, Navigate } from "react-router-dom";
import { clientProjects } from "../../data/clientProjects";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

const GradientPlaceholder = ({ name, gradient, size = "h-64" }) => {
  return (
    <div
      className={`${size} w-full rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg border border-blue-500/20`}
    >
      <span className="text-white text-xl font-bold text-center px-4">{name}</span>
    </div>
  );
};

const ClientProjectDetail = () => {
  const { id } = useParams();
  const project = clientProjects.find((p) => p.id === id);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 100,
    });
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/mobileProjects" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900">
      <Helmet>
        <title>Portfolio | {project.title}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900 pt-32 pb-20 min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <Link
              to="/mobileProjects"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-cyan-400 mb-8 transition-colors"
            >
              <FaArrowLeft />
              <span>Back to UX/UI Projects</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full text-blue-300 text-sm font-semibold border border-blue-400/30"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-4 py-12 -mt-20 relative z-20">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20">
            {project.img ? (
              <ImageWithLoader
                src={project.img}
                alt={project.alt}
                className="w-full h-auto object-cover"
                skeletonClassName="w-full h-96"
              />
            ) : (
              <GradientPlaceholder
                name={project.title}
                gradient={project.gradient}
                size="h-96"
              />
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12" data-aos="fade-up">
            <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-500/20">
              <h3 className="text-sm font-semibold text-blue-300 mb-2">Category</h3>
              <p className="text-xl font-bold text-white">{project.category}</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-500/20">
              <h3 className="text-sm font-semibold text-blue-300 mb-2">Year</h3>
              <p className="text-xl font-bold text-white">{project.year}</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-500/20">
              <h3 className="text-sm font-semibold text-blue-300 mb-2">Role</h3>
              <p className="text-xl font-bold text-white">{project.role}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-blue-500/20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
            <p className="text-lg text-blue-200/80 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Prototype Images Section */}
      {project.prototypeImages && project.prototypeImages.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className=" mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center" data-aos="fade-up">
              Prototypes
            </h2>
            <div className="">
              {project.prototypeImages.map((img, idx) => (
                <div className="flex justify-center items-center" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <ImageWithLoader
                    src={img}
                    alt={`${project.title} prototype ${idx + 1}`}
                    className="max-w-full max-h-[700px] p-2 rounded-xl flex shadow-lg border border-blue-500/20"
                    skeletonClassName="max-w-full max-h-[700px] p-2 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Artifacts Section */}
      {project.artifactsImages && project.artifactsImages.length > 0 && (
        <section className="bg-gradient-to-br from-indigo-900 via-navy-900 to-slate-900 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center" data-aos="fade-up">
                Project Artifacts
              </h2>
              <div >
                {project.artifactsImages.map((img, idx) => (
                  <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                    <ImageWithLoader
                      src={img}
                      alt={`${project.title} artifact ${idx + 1}`}
                      className="w-full max-h-[700px] rounded-xl shadow-lg border border-blue-500/20"
                      skeletonClassName="w-full max-h-[700px] rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Design Methods Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center" data-aos="fade-up">
            Design Methods Followed
          </h2>
          <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
            {
              project?.designMethods?.map((method, idx) => (
                <div className="flex  justify-center items-center bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-blue-500/20" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <p className="text-xl text-blue-200/80 leading-relaxed whitespace-pre-line">{method}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Link
            to="/mobileProjects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 ease-out will-change-transform shadow-lg hover:shadow-xl border border-blue-400/30"
          >
            <FaArrowLeft />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientProjectDetail;
