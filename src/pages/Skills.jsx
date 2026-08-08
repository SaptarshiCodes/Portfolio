import SkillsCard from "../components/skills/SkillsCard"
import SkillsFooter from "../components/skills/SkillsFooter"
import String from "../components/String"

const Skills = () => {
  return (
    <div id="skills" className="relative min-h-screen w-full bg-[hsl(0,0%,3%)] pt-[5vw] px-[2vw]">
      <h1 data-scroll-reveal className="text-zinc-100 uppercase font-[font2] text-[2vw] font-extrabold leading-relaxed transform-[scaleY(1.6)]">
        My Skills
      </h1>
      <String />
      <SkillsCard />
      <SkillsFooter />
    </div>
  )
}

export default Skills