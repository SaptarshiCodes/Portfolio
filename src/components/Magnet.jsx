import { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnet = ({
  children,
  strength = 0.35,
  padding = 120,
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const move = (e) => {
      const rect = el.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      if (
        Math.abs(distanceX) < rect.width / 2 + padding &&
        Math.abs(distanceY) < rect.height / 2 + padding
      ) {
        gsap.to(el, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.35,
          ease: "power3.out",
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1,0.35)",
        });
      }
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [padding, strength]);

  return (
    <div ref={ref} className={`relative flex w-full h-full ${className}`}>
      {children}
    </div>
  );
};

export default Magnet;