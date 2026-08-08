const Process = () => {
  const processsCards = [
    {
      number: "01",
      title: "Plan",
      description: "Understanding the problem, requirements, and user needs.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Wireframing, architecture, database schema, and API planning.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Building responsive UIs, APIs, authentication, and backend logic.",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Testing, optimization, deployment, and continuous improvements.",
    },
  ];

  return (
    <div className="w-full px-[1vw]">
      <h1 data-scroll-reveal className="text-zinc-200 text-[3.5vw] font-[font2] font-bold tracking-wide">
        Process
        <div className="w-full h-px bg-zinc-800 mb-[1vw]"></div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {processsCards.map((card) => {
          return (
            <div
              key={card.title}
              data-scroll-reveal
              className="group
                relative
                flex
                flex-col
                h-full
                w-full
                my-[1vw]
                rounded-3xl
                transition-all
                duration-300
                "
            >
              {/* Number */}
              <div className="text-[5vw] font-[font2] leading-none font-semibold text-zinc-800 group-hover:text-zinc-400 ml-[-0.5vw]">{card.number}</div>
              {/* Title */}
              <div className="text-[2vw] font-medium px-[1vw] font-[font1] text-zinc-200">{card.title}</div>
              <div className="text-[1.1vw] p-[1vw] tracking-wider text-zinc-400">{card.description}</div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Process;
