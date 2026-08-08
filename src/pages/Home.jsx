import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
// import Beams from "../components/background/Beams";
import Orb from "../components/background/Orb";

const Home = () => {
  return (
    <div id="home" className="relative h-screen w-full bg-[hsl(0,0%,3%)] overflow-hidden">
      <div className="absolute ml-[52vw]  inset-0 z-0 scale-[110%]">
        <Orb
          hoverIntensity={0}
          rotateOnHover={false}
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>
      <div className="relative h-full w-full flex pt-[3vw] z-10">
        {/* left section */}
        <div className="h-full w-1/2 relative z-10">
          <div className="p-[2vw]">
            <h1 data-scroll-reveal className="text-zinc-300 text-[2.5vw] font-semibold  font-[font2] pb-[3vw]">
              Saptarshi Manna
            </h1>
            <h2 data-scroll-reveal className="text-zinc-100 text-[5.8vw] font-extrabold uppercase whitespace-nowrap font-[font2] tracking-wide transform-[scaleY(2)] origin-center py-[1vw]">
              Crafting
            </h2>
            <h2 data-scroll-reveal className="text-zinc-300/70 text-[4.5vw] uppercase whitespace-nowrap font-[font2] font-extrabold tracking-tight origin-left scale-x-90 transform-[scaleY(2)] py-[1vw]">
              Digital value.
            </h2>
            <p data-scroll-reveal className="text-zinc-400 py-[2vw] text-[1.2vw] leading-relaxed font-[font1] mb-[3vw]">
              Software Engineering student and Full-Stack Developer passionate
              about building scalable web applications, solving complex
              problems, and creating engaging digital experiences.
            </p>
            <div data-scroll-reveal className="font-[font2] text-[1.5vw] flex flex-wrap items-center gap-[3vw]">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-zinc-400 border-zinc-400 border-[0.15vw] px-[2vw] font-semibold leading-loose rounded-full hover:border-black hover:text-black hover:bg-zinc-100 flex items-center justify-center"
              >
                My Works <FiArrowDownRight className="ml-[0.8vw]" />
              </a>
              <a
                href="/Saptarshi CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 border-zinc-400 border-[0.15vw] px-[2vw] font-semibold leading-loose rounded-full hover:border-zinc-100 hover:text-zinc-100 flex items-center justify-center"
              >
                My Resume <FiArrowUpRight className="ml-[0.8vw]" />
              </a>
            </div>
          </div>
        </div>
        {/* right section */}

        <div className="h-[85%] w-1/2 mt-[3.5vw] mr-[1.5vw] flex justify-end">
          <img
            className="w- h-full p-[1vw] grayscale-[75] brightness-80 opacity-80 contrast-130 object-cover"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle, black 60%, transparent 68%)",
              maskImage: "radial-gradient(circle, black 60%, transparent 68%)",
            }}
            src="/profile pic.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
