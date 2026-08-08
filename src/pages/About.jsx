import MainGrid from "../components/about/AboutCard";
import String from "../components/String";

const About = () => {
  return (
    <div id="about" className="relative min-h-screen w-full bg-[hsl(0,0%,3%)] pt-[5vw] px-[2vw]">
      {/* About */}
      <h1 data-scroll-reveal className="text-zinc-100 uppercase font-[font2] text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.6)]">
        About
      </h1>
      <String />
      <MainGrid />
    </div>
  );
};

export default About;
