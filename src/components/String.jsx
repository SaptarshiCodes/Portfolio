import { useRef } from "react";
import gsap from "gsap";

const WIDTH = 1000;
const HEIGHT = 200;

const INITIAL_PATH = `M 0 ${HEIGHT / 2} Q ${WIDTH / 2} ${HEIGHT / 2} ${WIDTH} ${HEIGHT / 2}`;

const String = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const handleMove = (e) => {
    const svg = svgRef.current;

    // Convert mouse position to SVG coordinates
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;

    const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());

    gsap.to(pathRef.current, {
      attr: {
        d: `M 0 ${HEIGHT / 2} Q ${svgPoint.x} ${svgPoint.y} ${WIDTH} ${HEIGHT / 2}`,
      },
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(pathRef.current, {
      attr: {
        d: INITIAL_PATH,
      },
      duration: 2.5,
      ease: "elastic.out(2,0.01)",
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
      absolute
      top-[5vw]
      left-0
      w-full
      h-30
      overflow-visible
      z-30
    "
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className="w-full h-full px-[2vw]"
      >
        <path
          ref={pathRef}
          d={INITIAL_PATH}
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default String;
