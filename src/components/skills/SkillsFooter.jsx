import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiVite,
  SiNpm,
} from "react-icons/si";

import { FaCss3Alt, FaJava } from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const iconClass =
  "w-[5vw] h-[5vw] text-gray-600 transition-colors duration-300 flex-shrink-0 p-[1vw]";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className={`${iconClass} hover:text-[#F7DF1E]`} />,
  },
  {
    name: "Python",
    icon: <SiPython className={`${iconClass} hover:text-[#3776AB]`} />,
  },
  {
    name: "C++",
    icon: <SiCplusplus className={`${iconClass} hover:text-[#00599C]`} />,
  },
  {
    name: "Java",
    icon: <FaJava className={`${iconClass} hover:text-[#ED8B00]`} />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className={`${iconClass} hover:text-[#E34F26]`} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className={`${iconClass} hover:text-[#1572B6]`} />,
  },
  {
    name: "React",
    icon: <SiReact className={`${iconClass} hover:text-[#61DAFB]`} />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className={`${iconClass} hover:text-[#339933]`} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className={`${iconClass} hover:text-white`} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className={`${iconClass} hover:text-[#06B6D4]`} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className={`${iconClass} hover:text-[#47A248]`} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className={`${iconClass} hover:text-[#4479A1]`} />,
  },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio className={`${iconClass} hover:text-white`} />,
  },
  {
    name: "Git",
    icon: <SiGit className={`${iconClass} hover:text-[#F05032]`} />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className={`${iconClass} hover:text-white`} />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className={`${iconClass} hover:text-white`} />,
  },
  {
    name: "Postman",
    icon: <SiPostman className={`${iconClass} hover:text-[#FF6C37]`} />,
  },
  {
    name: "Vite",
    icon: <SiVite className={`${iconClass} hover:text-[#646CFF]`} />,
  },
  {
    name: "npm",
    icon: <SiNpm className={`${iconClass} hover:text-[#CB3837]`} />,
  },
];

const SkillsFooter = () => {
  const tween = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    tween.current = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <div>
      <h2 data-scroll-reveal className="text-lg uppercase mt-[4vw] text-zinc-500">
        Technologies I work with
      </h2>
      <div data-scroll-reveal className="overflow-hidden pt-[3vw]">
        <div ref={trackRef} className="flex w-max">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="group relative mx-[2.5vw] flex items-center justify-center"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector(".icon"), {
                  scale: 1.25,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });

                gsap.to(tween.current, {
                  timeScale: 0.3,
                  duration: 0.5,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector(".icon"), {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                });

                gsap.to(tween.current, {
                  timeScale: 1,
                  duration: 0.5,
                });
              }}
            >
              <div className="icon">{skill.icon}</div>

              <div
                className="
                  absolute
                  top-[-2vw]
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-zinc-900
                  px-[1.2vw]
                  py-[0.5vw]
                  text-sm
                  whitespace-nowrap
                  opacity-0
                 text-white
                  z-50
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:-translate-y-1
                  pointer-events-none
        "
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsFooter;
