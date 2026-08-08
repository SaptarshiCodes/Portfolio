import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LoadingText from "./animations/LoadingText";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const counter = { value: 0 };

    gsap.to(counter, {
      value: 100,
      duration: 2.3, // Same duration as LoadingText animation
      ease: "power1.out",

      onUpdate: () => {
        setProgress(Math.floor(counter.value));
      },

      onComplete: () => {
        // Wait a tiny bit so both animations feel synchronized
        gsap.delayedCall(0.15, () => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",

            onComplete: () => {
              onComplete?.();
            },
          });
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      <div className="absolute top-10 left-5 text-zinc-300">
        <h1 className="text-xl">Portfolio is loading</h1>
      </div>
      <LoadingText
        text="SAPTARSHI"
        strokeColor="#ffffff"
        fillColor="#F8FAFC"
        strokeWidth={1.4}
        drawDuration={1.7}
        fillDelay={0.30}
        stagger={0.05}
        ease="power2.out"
        trigger="mount"
        fillMode="wipe"
        fontSize={240}
        fontWeight={800}
        letterSpacing={-4}
        reverse={false}
      />
      <div className="absolute bottom-12 right-12 flex items-center gap-2 text-white">
        <span className="text-sm uppercase tracking-[0.3em]">Loading</span>

        <span className="text-xl font-semibold tabular-nums">{progress}%</span>
      </div>
    </div>
  );
};

export default Loader;
