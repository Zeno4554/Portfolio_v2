"use client";

import { Section } from "@/components/common/Section";
import SkillsGalaxy from "./SkillsGalaxy";
import { useGalaxyAnimation } from "./useGalaxyAnimation";
import { getGalaxySize } from "./layout";

export function SkillsGalaxySection() {
  useGalaxyAnimation();

  const { height } = getGalaxySize();

  return (
    <Section
      id="skills"
      index="03"
      label="Skills"
      className="relative overflow-hidden py-40"
    >
      {/* Background */}
      <h1
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          select-none
          font-display
          text-[clamp(10rem,22vw,22rem)]
          font-black
          uppercase
          tracking-[-0.08em]
          text-white/[0.025]
        "
      >
        GALAXY
      </h1>

      <div
        className="relative z-10 flex justify-center"
        style={{
          minHeight: height + 120,
        }}
      >
        <SkillsGalaxy />
      </div>
    </Section>
  );
}