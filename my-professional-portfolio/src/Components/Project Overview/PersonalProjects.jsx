import { HiOutlineExternalLink } from "react-icons/hi";
import { ProjectHeadline } from "../Home/ProjectHeadline";

const projects = [
  {
    id: "blog",
    title: "Blog Platform",
    year: "2024",
    description: "Interactive blog with CRUD features, Firebase auth, and content categorization.",
    img: "/blog-posting.png",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Tailwind", "Firebase", "MongoDB", "Express"],
  },
  {
    id: "delivery",
    title: "Real Estate Experience",
    year: "2024",
    description: "This project is designed to give users a real-life feel of a luxurious penthouse website.",
    img: "/real-estate.png",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Tailwind", "JWT", "MongoDB"],
  },
  {
    id: "tourism",
    title: "Tourism Website",
    year: "2024",
    description: "Community travel platform with budget filtering and record management.",
    img: "/tourism-web.png",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Tailwind", "Firebase", "Express"],
  },
];

const ProjectCard = ({ title, description, year, img, liveUrl, repoUrl, tags = [] }) => {
  return (
    <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/60 to-navy-800/60 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] hover:shadow-blue-500/20">
      {/* Top image preview */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={`${title} preview`}
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold text-center px-4">{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
            {title}
          </h3>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 bg-blue-500/20 rounded-full p-2 text-blue-400 hover:text-cyan-400 border border-blue-400/30 transition-colors"
              aria-label={`${title} live preview`}
              title="Open live preview"
            >
              <HiOutlineExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="mt-2 text-[15px] leading-6 text-blue-200/80">
          {description}
        </p>

        <div className="flex flex-col h-[130px] justify-between">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
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
          <div className="mt-5 flex items-center justify-between text-blue-300">
            <span className="text-sm">{year}</span>

            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-blue-400/30"
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
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalProjects;
