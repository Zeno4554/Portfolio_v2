import { Opening } from "@/scenes/Opening";
import { Identity } from "@/scenes/About";
import { Evolution } from "@/scenes/Evolution";
import { SkillsGalaxySection } from "@/scenes/Skills";
import { Projects } from "@/scenes/Projects";
import { Experience } from "@/scenes/Experience";
import { Github } from "@/scenes/Github";
import { Contact } from "@/scenes/Contact";

export default function HomePage() {
  return (
    <>
      <Opening />

      <Identity />

      <Evolution />

      <SkillsGalaxySection />

      <Projects />

      <Experience />

      <Github />

      <Contact />
    </>
  );
}