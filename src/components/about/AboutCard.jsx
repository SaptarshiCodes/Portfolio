import {
  Lightbulb,
  GraduationCap,
  Code2,
  Trophy,
  Compass,
  Rocket,
} from "lucide-react";

import Magnet from "../Magnet.jsx";

const cardData = [
  {
    color: "hsl(0,0%,10%)",
    icon: Lightbulb,
    title: "Insight",
    description:
      "Creative problem solver passionate about crafting interactive, performant, and visually engaging digital experiences.",
    label: "Who I Am",
  },
  {
    color: "hsl(0,0%,10%)",
    icon: GraduationCap,
    title: "Education",
    description:
      "B.E. Information Technology student at Jadavpur University with a strong foundation in software engineering.",
    label: "Academic",
  },
  {
    color: "hsl(0,0%,10%)",
    icon: Code2,
    title: "Work Focus",
    description:
      "Building scalable full-stack applications using React, Node.js, Express, MongoDB and modern frontend tools.",
    label: "Development",
  },
  {
    color: "hsl(0,0%,10%)",
    icon: Trophy,
    title: "Achievements",
    description:
      "Solved 200+ coding problems, Codeforces Pupil journey, WBJEE Rank 505 and consistent project building.",
    label: "Milestones",
  },
  {
    color: "hsl(0,0%,10%)",
    icon: Compass,
    title: "Philosophy",
    description:
      "Learning by building. Every project is an opportunity to master engineering, creativity and clean architecture.",
    label: "Mindset",
  },
  {
    color: "hsl(0,0%,10%)",
    icon: Rocket,
    title: "Interests",
    description:
      "Creative development, GSAP animations, UI/UX, open source, competitive programming and emerging web technologies.",
    label: "Beyond Code",
  },
];

export default function MainGrid() {
  return (
    <section className="w-full pt-[5vw] px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cardData.map((card) => {
          const Icon = card.icon;

          return (
            <Magnet key={card.title} strength={0.02} padding={10}>
              <div
                key={card.title}
                data-scroll-reveal
                className="
                group
                flex
                flex-col
                relative
                h-full
                w-full
                rounded-3xl
                border
                border-zinc-800
                bg-[hsl(0,0%,10%)]
                p-7
                min-h-60
                overflow-hidden
                hover:shadow-[0_0_40px_rgba(161,161,170,0.25)]
                transition-all
                duration-300
                select-none
              "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl border border-zinc-400/40 pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-[0.25em] text-xs text-zinc-400">
                    {card.label}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700">
                    <Icon
                      size={24}
                      className="text-zinc-500 group-hover:text-white hover:scale-110 transition-colors duration-300"
                    />
                  </div>
                </div>

                <h3 className="mt-5 text-3xl font-semibold text-white font-[font2]">
                  {card.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {card.description}
                </p>
              </div>
            </Magnet>
          );
        })}
      </div>
    </section>
  );
}
