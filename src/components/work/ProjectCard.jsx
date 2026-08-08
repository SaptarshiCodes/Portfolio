import { FaGithub, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <section
      id={`project-${index}`}
      data-project-card
      className="min-h-screen flex items-center py-[6vw]"
    >
      <div className="relative w-full">
        {/* Project Number */}
        <h1 data-scroll-reveal className="absolute right-[-1vw] top-[-1.5vw] text-[9vw] font-black text-zinc-700 leading-none pointer-events-none select-none">
          0{index + 1}
        </h1>

        {/* Year */}
        <p data-scroll-reveal className="uppercase tracking-[0.35vw] text-zinc-300 text-[0.8vw] mb-[1vw]">
          {project.year}
        </p>

        {/* Title */}
        <h2 data-scroll-reveal className="font-[font2] text-zinc-200 text-[3.5vw] leading-[3.5vw] max-w-[70%]">
          {project.title}
        </h2>

        {/* Subtitle */}
        <p data-scroll-reveal className="mt-[2vw] text-zinc-300 text-[1vw] leading-[1.9vw] max-w-[75%]">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div data-scroll-reveal className="flex flex-wrap gap-[0.8vw] mt-[2vw]">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                text-zinc-300
                border-zinc-300
                px-[1vw]
                py-[0.45vw]
                text-[0.8vw]
                uppercase
                tracking-wide
                transition-all
                duration-300
                hover:bg-black
                hover:border-zinc-100
                hover:text-zinc-100
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}

        <div data-scroll-reveal className="mt-[2vw] space-y-[0.5vw]">
          {project.highlights.slice(0, 4).map((item, i) => (
            <div key={i} className="flex items-center gap-[1vw]">
              <div
                className="h-[0.45vw] w-[0.45vw] rounded-full"
                style={{
                  background: project.accent,
                }}
              />

              <p className="text-zinc-300 text-[0.95vw]">{item}</p>
            </div>
          ))}
        </div>

        {/* Divider */}

        <div className="h-px bg-zinc-800 my-[2vw]" />

        {/* Links */}

        <div data-scroll-reveal className="flex gap-[5vw]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-[0.8vw] text-[1.2vw] text-zinc-300 hover:text-zinc-100 transition-colors font-medium"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center text-zinc-300 gap-[0.8vw] text-[1.2vw] font-medium hover:text-zinc-100"
          >
            Explore Project
            <FaArrowRight className="transition-transform duration-300 size-4 group-hover:translate-x-1 group-hover:text-zinc-100" />
          </a>
        </div>
        <div className="h-px bg-zinc-800 my-[2vw]" />
      </div>
    </section>
  );
};

export default ProjectCard;
