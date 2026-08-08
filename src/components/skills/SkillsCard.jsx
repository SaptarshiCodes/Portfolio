import { Code2, Globe, Wrench, Cpu } from "lucide-react";
import Magnet from "../Magnet";

const skillCards = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "JavaScript", "Python"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Linux", "MongoDB", "MySQL", "Postman", "Clerk"],
  },
  {
    title: "Core CS",
    icon: Cpu,
    skills: [
      "Data Structures & Algorithms",
      "Dynamic Programming",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function SkillsCard() {
  return (
    <section className="w-full pt-[5vw] px-[1vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {skillCards.map((card) => {
          const Icon = card.icon;

          return (
            <Magnet key={card.title} strength={0.02} padding={10}>
              <div
                key={card.title}
                data-scroll-reveal
                className="
                group
                relative
                flex
                flex-col
                h-full
                w-full
                bg-[hsl(0,0%,10%)]
                border
                border-zinc-800
                rounded-3xl
                py-[1.2vw]
                px-[1.2vw]
                transition-all
                duration-300
                hover:border-zinc-600
                hover:shadow-[0_0_40px_rgba(161,161,170,0.20)]
              "
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800">
                  <Icon
                    size={20}
                    className="text-zinc-300 group-hover:text-zinc-100 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h2 className="mt-[1vw] font-[font2] text-2xl font-semibold text-white">
                  {card.title}
                </h2>

                {/* Skills */}
                <div className="mt-[2vw] flex flex-wrap gap-2">
                  {card.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                      px-5
                      py-2
                      rounded-full
                      border
                      border-zinc-800
                      text-zinc-500
                      text-sm
                      transition-all
                      duration-300
                      hover:border-zinc-500
                      hover:text-white
                    "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Magnet>
          );
        })}
      </div>
    </section>
  );
}
