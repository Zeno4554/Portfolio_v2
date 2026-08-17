"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import SkillsGalaxy from "./SkillsGalaxy";
import { useGalaxyAnimation } from "./useGalaxyAnimation";
import { getGalaxySize, CATEGORY_CLUSTERS } from "./layout";
import { SkillNodeData } from "./galaxyData";

export function SkillsGalaxySection() {
  useGalaxyAnimation();

  const [activeCategory, setActiveCategory] = useState<
    SkillNodeData["category"] | "all"
  >("all");

  const { height } = getGalaxySize();

  const filterOptions: { id: SkillNodeData["category"] | "all"; label: string; color?: string }[] = [
    { id: "all", label: "ALL CONSTELLATIONS" },
    { id: "frontend", label: "FRONTEND", color: CATEGORY_CLUSTERS.frontend.color },
    { id: "backend", label: "BACKEND", color: CATEGORY_CLUSTERS.backend.color },
    { id: "ai", label: "AI & ML", color: CATEGORY_CLUSTERS.ai.color },
    { id: "cloud", label: "CLOUD", color: CATEGORY_CLUSTERS.cloud.color },
    { id: "database", label: "DATABASE", color: CATEGORY_CLUSTERS.database.color },
    { id: "iot", label: "IOT & SYSTEMS", color: CATEGORY_CLUSTERS.iot.color },
  ];

  return (
    <Section
      id="skills"
      index="03"
      label="Skills Galaxy"
      className="relative overflow-hidden py-32 bg-[#030504]"
    >
      {/* Background Watermark */}
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
          text-white/[0.02]
        "
      >
        GALAXY
      </h1>

      {/* Header & Subtitle */}
      <div className="relative z-20 mb-8 text-center px-4">
        <div className="mb-2 inline-flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#69ff59]/70">
          <span className="h-px w-6 bg-[#69ff59]/50" />
          03 — Skills Galaxy
          <span className="h-px w-6 bg-[#69ff59]/50" />
        </div>

        <h2 className="font-display text-4xl font-black uppercase tracking-[-0.04em] text-[#e8e4d8] md:text-5xl">
          Technology Constellation
        </h2>

        <p className="mx-auto mt-3 max-w-md font-body text-xs leading-6 text-white/40 md:text-sm">
          An interactive universe mapping my technical journey, core frameworks, cloud platforms, and system architectures.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => {
            const isActive = activeCategory === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveCategory(opt.id)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "border-white/60 bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "border-white/10 bg-black/40 text-white/50 hover:border-white/30 hover:text-white/80"
                }`}
                style={{
                  borderColor: isActive && opt.color ? opt.color : undefined,
                  color: isActive && opt.color ? opt.color : undefined,
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Constellation Galaxy Container */}
      <div
        className="relative z-10 flex justify-center"
        style={{
          minHeight: height + 60,
        }}
      >
        <SkillsGalaxy activeCategory={activeCategory} />
      </div>

      {/* Navigation Help Note */}
      <div className="relative z-20 mt-4 text-center font-mono text-[7.5px] uppercase tracking-[0.25em] text-white/20">
        Move mouse to tilt camera · Hover node to reveal connections · Click to inspect
      </div>
    </Section>
  );
}