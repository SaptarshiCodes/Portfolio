import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectGallery from "./ProjectGallery";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

gsap.registerPlugin(ScrollTrigger);

const SelectedWorks = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const galleryRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "center center",
        endTrigger: sectionRef.current,
        end: "bottom-=80 bottom",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      const projectCards = gsap.utils.toArray("[data-project-card]");

      projectCards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",

          onEnter: () => {
            galleryRef.current?.showProject(index);
          },

          onEnterBack: () => {
            galleryRef.current?.showProject(index);
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-[3vw] px-[1vw]"
    >
      <h1 data-scroll-reveal className="text-zinc-200 text-[3.5vw] font-[font2] font-bold tracking-wide">
        Selected Works
      </h1>

      <div data-scroll-reveal className="my-[1.5vw] flex justify-between">
        <p className="text-zinc-400 font-[font1] font-light text-[1.2vw]">
          A collection of projects that define my journey
          <br />
          in digital product creation.
        </p>

        <h2 className="text-zinc-400 font-[font2] text-[1.5vw]">(02)</h2>
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <div className="flex justify-between items-start">
        <div className="w-[52%]">
          <div
            ref={pinRef}
            className="h-screen flex justify-center items-center"
          >
            <ProjectGallery ref={galleryRef} projects={projects} />
          </div>
        </div>

        <div className="w-[42%]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
