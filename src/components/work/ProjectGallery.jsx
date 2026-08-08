import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ProjectStack from "./ProjectStack";

const ProjectGallery = forwardRef(({ projects }, ref) => {
  const stackRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(0);

  useImperativeHandle(ref, () => ({
    showProject(index) {
      setActiveProject(index);
    },

    nextCard() {
      stackRefs.current[activeProject]?.nextCard();
    },

    resetCurrent() {
      stackRefs.current[activeProject]?.reset();
    },
  }));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {projects.map((project, index) => (
        <ProjectStack
          key={project.id}
          ref={(el) => (stackRefs.current[index] = el)}
          project={project}
          active={index === activeProject}
        />
      ))}
    </div>
  );
});

export default ProjectGallery;