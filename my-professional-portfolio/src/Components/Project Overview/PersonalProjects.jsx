import { HiOutlineExternalLink } from "react-icons/hi";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

const ProjectCard = ({ title, description, year, img, liveUrl, repoUrl, tags = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  const shouldTruncate = description.length > maxLength;
  const displayDescription = isExpanded || !shouldTruncate 
    ? description 
    : `${description.substring(0, maxLength)}...`;

  return (
    <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] hover:shadow-blue-500/20 flex flex-col h-full">
      {/* Top image preview */}
      <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
        {img ? (
          <ImageWithLoader
            src={img}
            alt={`${title} preview`}
            className="w-full h-full object-contain sm:object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
            skeletonClassName="h-40 sm:h-48"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold text-center px-4">{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
            {title}
          </h3>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (liveUrl === "#") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              className="shrink-0 bg-blue-500/20 rounded-full p-2 text-blue-400 hover:text-cyan-400 border border-blue-400/30 transition-colors"
              aria-label={`${title} live preview`}
              title="Open live preview"
            >
              <HiOutlineExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <div className="flex-grow flex flex-col">
          <p className="text-[15px] leading-6 text-blue-200/80 mb-3">
            {displayDescription}
          </p>

          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-cyan-400 text-sm font-medium mb-3 self-start transition-colors"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-auto mb-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between text-blue-300">
            <span className="text-sm">{year}</span>

            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (repoUrl === "#") {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
                className="text-xs font-medium px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-300 ease-out hover:scale-105 will-change-transform shadow-md hover:shadow-lg border border-blue-400/30"
              >
                View Code
              </a>
            ) : (
              <span className="text-xs opacity-60">Code private</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/front-end.json");
        const data = await response.json();
        // Slice to show only 3 items maximum
        setProjects(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Map JSON data to component props
  const mappedProjects = projects.map((project) => ({
    id: project.id,
    title: project.title,
    year: "2024",
    description: project.description,
    img: project.image,
    liveUrl: project.website_link || "#",
    repoUrl: project.gitHub || "#",
    tags: project.technology || [],
  }));

  return (
    <div>
      <div className="text-center mb-16 py-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Personal Projects
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          A number of projects where I utilized UX design and used modern frameworks
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-blue-300">Loading projects...</div>
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                {mappedProjects.map((p) => (
                  <ProjectCard key={p.id} {...p} />
                ))}
              </div>
              
              {/* View All Button */}
              <div className="flex justify-center mt-12" data-aos="fade-up">
                <NavLink
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 ease-out hover:scale-105 will-change-transform border border-blue-400/30"
                >
                  <MdOutlineArrowCircleRight className="text-xl" />
                  <span>View All Personal Projects</span>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default PersonalProjects;
