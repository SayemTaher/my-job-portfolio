import { HiOutlineExternalLink } from "react-icons/hi";
import { ProjectHeadline } from "../Home/ProjectHeadline";

// Each project now includes an image instead of a gradient.
const projects = [
  {
    id: "blog",
    title: "Blog Platform",
    year: "2024",
    description:
      "Interactive blog with CRUD features, Firebase auth, and content categorization.",
    img: "/blog-posting.png",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Tailwind", "Firebase", "MongoDB", "Express"],
  },
  {
    id: "delivery",
    title: "Real Estate Experience",
    year: "2024",
    description:
      " This project is designed to give users a real-life feel of a luxurious penthouse website. ",
    img: "/real-estate.png",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Tailwind", "JWT", "MongoDB"],
  },
  {
    id: "tourism",
    title: "Tourism Website",
    year: "2024",
    description:
      "Community travel platform with budget filtering and record management.",
    img: "/tourism-web.png",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Tailwind", "Firebase", "Express"],
  },
];

const ProjectCard = ({
  title,
  description,
  year,
  img,
  liveUrl,
  repoUrl,
  tags = [],
}) => {
  return (
    <div className="group rounded-3xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl shadow-black/5 ring-1 ring-black/5 dark:ring-white/10 transition-transform hover:shadow-pink-200 duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Top image preview */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={img}
          alt={`${title} preview`}
          className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
        />
        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {title}
          </h3>

          {/* External link (live) */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 bg-blue-50 rounded-full p-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              aria-label={`${title} live preview`}
              title="Open live preview"
            >
              <HiOutlineExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="mt-2 text-[15px] leading-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <div className="flex flex-col h-[130px] justify-between">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-sm">{year}</span>

            {/* Repo link */}
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium px-3.5 py-2.5 rounded-full bg-pink-500 hover:scale-105 text-white transition-transform"
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
      <ProjectHeadline
        header="Personal Projects"
        info="A number of projects where I utilized UX design and used modern frameworks"
      ></ProjectHeadline>

      <section className=" py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          

          {/* Grid */}
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
