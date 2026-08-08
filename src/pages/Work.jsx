import String from "../components/String";
import Process from "../components/work/Process";
import SelectedWorks from "../components/work/SelectedWorks";

const Work = () => {
  return (
    <div id="work" className="relative min-h-screen w-full bg-[hsl(0,0%,3%)] pt-[5vw] px-[2vw]">
      <h1 data-scroll-reveal className="text-zinc-100 uppercase font-[font2] text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.6)]">
        My Work
      </h1>
      <String />
      <SelectedWorks />
      <Process />
    </div>
  );
};

export default Work;
