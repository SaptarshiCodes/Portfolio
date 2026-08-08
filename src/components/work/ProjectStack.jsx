import { forwardRef, useImperativeHandle, useRef } from "react";
import Stack from "./Stack";

const ProjectStack = forwardRef(({ project, active = false }, ref) => {
  const stackRef = useRef(null);

  useImperativeHandle(ref, () => ({
    nextCard() {
      stackRef.current?.nextCard();
    },

    reset() {
      stackRef.current?.reset();
    },
  }));

  const cards = project.images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${project.title} ${index + 1}`}
      className="w-full h-full object-contain pointer-events-none select-none"
      draggable={false}
    />
  ));

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-[92%] max-w-[48vw] aspect-[1.87/1]">
        {/* Background Title */}
        <div className="absolute inset-0 flex items-center justify-center-safe pointer-events-none select-none z-0">
          <h1
            className="text-[15vw] font-black uppercase text-white/3 leading-relaxed"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.20)",
            }}
          >
            {project.id === 1 ? "message Platform" : "INTERVIEW PLATFORM"}
          </h1>
        </div>

        {/* Stack */}
        <div className="relative z-10 w-full h-full grayscale-25 brightness-105 contrast-110">
          <Stack
            ref={stackRef}
            cards={cards}
            autoplay
            autoplayDelay={2500}
            pauseOnHover
            sendToBackOnClick
          />
        </div>
      </div>
    </div>
  );
});

export default ProjectStack;
