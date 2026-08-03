"use client";

import { Section } from "@/components/common/Section";
import { Headline } from "@/components/typography/Headline";
import { useIsLowPowerDevice } from "@/hooks/usePreferences";
import { skills } from "@/data/skills";
import dynamic from "next/dynamic";

// The R3F canvas is heavy (three.js + fiber + drei) — split it out of the
// main bundle entirely and only request it on capable devices.
const GalaxyCanvas = dynamic(() => import("@/r3f/scenes/GalaxyCanvas").then((m) => m.GalaxyCanvas), {
  ssr: false,
});

const CATEGORY_COLOR: Record<string, string> = {
  ai: "text-aurora-violet",
  backend: "text-aurora-cyan",
  frontend: "text-aurora-magenta",
  cloud: "text-aurora-amber",
  systems: "text-ink",
};

export function SkillsGalaxy() {
  const isLowPower = useIsLowPowerDevice();

  return (
    <Section id="skills" index="03" label="Skills Galaxy" className="relative min-h-[120vh] py-32">
      <Headline as="h2" className="text-display mb-16">
        A galaxy of tools, held together by systems thinking.
      </Headline>

      {isLowPower ? (
        <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
          {skills.map((s) => (
            <li key={s.id} className={`font-mono text-sm ${CATEGORY_COLOR[s.category]}`}>
              {s.label}
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative h-[70vh] w-full">
          <GalaxyCanvas nodes={skills} />
        </div>
      )}
    </Section>
  );
}
