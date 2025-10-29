import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const projects = [
  {
    id: "quiet",
    title: "Quiet Eindhoven",
    desc: "iOS donation management app enabling indirect charitable contributions. Complete UX/UI design and development.",
    img: "/quiet-eindhoven.png",
    alt: "Quiet Eindhoven iOS donation app preview",
    chips: ["Swift", "SwiftUI", "Figma", "iOS Design", "Prototyping"],
    gradient: "from-orange-400/80 via-rose-400/70 to-red-500/80",
  },
  {
    id: "i3connect",
    title: "i3Connect AI Assistant",
    desc: "Interactive AI scenarios for educational software. User research, testing, and human-centered design.",
    img: "/ctouch.png", 
    alt: "i3Connect virtual AI assistant interface",
    chips: ["Figma", "Application Design", "AI Assistant", "Prototyping"],
    gradient: "from-emerald-400/80 via-teal-400/70 to-blue-500/80",
  },
];

function Chip({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-white/10 dark:text-purple-200">
      {children}
    </span>
  );
}

function ProjectCard({ title, desc, img, alt, chips, gradient }) {
  return (
    <article
      data-aos="fade-up"
      className="group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-md ring-1 ring-black/5 dark:ring-white/10 transition hover:shadow-xl"
    >
      {/* Media */}
      <div className="relative">
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        {/* Gradient veil for readability */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition`}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm lg:text-base text-slate-600 dark:text-slate-300">
          {desc}
        </p>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    </article>
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
    <section className="w-full bg-purple-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <NavLink
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full  bg-white px-5 py-3 text-purple-600 shadow-lg shadow-white border-2 border-purple-200 backdrop-blur-md transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            <MdOutlineArrowCircleRight className="text-xl" />
            <span className="font-semibold">View All Projects</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ClientProject;
