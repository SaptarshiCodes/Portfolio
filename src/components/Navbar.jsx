import { useRef, useState } from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center pointer-events-none font-[font2]">
      <SlideTabs />
    </nav>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="
        pointer
        fixed
        top-[1vw]
        left-1/2
        -translate-x-1/2
        z-50

        flex
        items-center
        justify-center
        gap-[1.5vw]
        px-[0.2vw]
        py-[0.7vw]

        rounded-full
        border
        border-white/10

        bg-[hsla(0,0%,8%,0.35)]
        backdrop-blur-xl      

        shadow-[0_8px_30px_rgba(0,0,0,0.25)]

        pointer-events-auto
      "
    >
      <Tab setPosition={setPosition} targetId="home">
        SAPTARSHI
      </Tab>
      <Tab setPosition={setPosition} targetId="about"></Tab>
      <Tab setPosition={setPosition} targetId="skills"></Tab>
      <Tab setPosition={setPosition} targetId="work">
        Work
      </Tab>
      <Tab setPosition={setPosition} targetId="contact">
        Contact
      </Tab>
      <Tab setPosition={setPosition} isResume>
        Resume
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, targetId, isResume }) => {
  const ref = useRef(null);

  const handleClick = () => {
    if (isResume) {
      window.open("/Saptarshi CV.pdf", "_blank", "noopener,noreferrer");
    } else if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <li
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="
        relative
        z-10
        flex
        items-center
        justify-center
        cursor-pointer
        px-[1.2vw]
        text-[1.2vw]
        font-semibold
        font-[font2]
        uppercase
        text-white
        mix-blend-difference
      "
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className="
        absolute
        top-1/2
        -translate-y-1/2
        h-[90%]
        rounded-full
      bg-white
      "
    />
  );
};
