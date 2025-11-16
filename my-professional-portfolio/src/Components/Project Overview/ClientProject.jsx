import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { clientProjects } from "../../data/clientProjects";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

function Chip({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
      {children}
    </span>
  );
}

function ProjectCard({ id, title, desc, img, alt, chips, gradient }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  const shouldTruncate = desc && desc.length > maxLength;
  const displayDescription = isExpanded || !shouldTruncate 
    ? desc 
    : `${desc.substring(0, maxLength)}...`;
  return (
    <Link to={`/client-project/${id}`}>
      <article
        data-aos="fade-up"
        className="group overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:shadow-blue-500/20 cursor-pointer"
      >
        {/* Media */}
        <div className="relative overflow-hidden">
          <div className="w-full overflow-hidden">
            {img ? (
              <ImageWithLoader
                src={img}
                alt={alt}
                className="h-[400px] w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
                skeletonClassName="h-[400px] w-full"
              />
            ) : (
              <div className={`h-[400px] w-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <span className="text-white text-xl font-bold text-center px-4">{title}</span>
              </div>
            )}
          </div>
          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out`}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
            {title}
          </h3>
          <div className="mt-2 mb-4">
            <p className="text-sm lg:text-base text-blue-200/80 mb-2">
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

          {/* Chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>

          {/* View Project Link */}
          <div className="flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors font-semibold mt-4">
            <span>View Project</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

export const ClientProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-quart",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {clientProjects.map((p) => (
            <ProjectCard
              key={p.id}
              id={p.id}
              title={p.title}
              desc={p.description}
              img={p.img}
              alt={p.alt}
              chips={p.chips}
              gradient={p.gradient}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center" data-aos="fade-up">
          <NavLink
            to="/mobileProjects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 ease-out hover:scale-105 will-change-transform border border-blue-400/30"
          >
            <MdOutlineArrowCircleRight className="text-xl" />
            <span>View All UX/UI Projects</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ClientProject;
