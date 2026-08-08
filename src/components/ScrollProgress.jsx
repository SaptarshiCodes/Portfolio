import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-500 via-white to-zinc-200 origin-[0%] z-[9999] pointer-events-none"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
