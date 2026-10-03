"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import SkillsGalaxy from "./SkillsGalaxy";
import { useGalaxyAnimation } from "./useGalaxyAnimation";
import { getGalaxySize, CATEGORY_CLUSTERS } from "./layout";
import { skillNodes, SkillNodeData } from "./galaxyData";

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
      className="relative overflow-hidden bg-[#030504] py-20 sm:py-32"
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
          max-sm:hidden
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

        <h2 className="font-display text-3xl font-black uppercase tracking-[-0.04em] text-[#e8e4d8] sm:text-4xl md:text-5xl">
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
                aria-pressed={isActive}
                className={`rounded-full border px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] transition-colors duration-300 sm:px-3.5 sm:py-1.5 sm:text-[8.5px] sm:tracking-[0.2em] ${
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

      <div
        className="relative z-10 hidden justify-center min-[1280px]:flex"
        style={{
          minHeight: height + 60,
        }}
      >
        <SkillsGalaxy activeCategory={activeCategory} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 min-[1280px]:hidden">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
          <span>Constellation map</span>
          <span>
            {skillNodes.filter((skill) =>
              activeCategory === "all" || skill.category === activeCategory
            ).length}{" "}
            nodes
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {Object.values(CATEGORY_CLUSTERS)
            .filter((category) =>
              activeCategory === "all" || category.id === activeCategory
            )
            .map((category) => {
              const skills = skillNodes.filter(
                (skill) => skill.category === category.id
              );

              return (
                <section
                  key={category.id}
                  aria-label={category.label}
                  className="relative min-w-0 overflow-hidden rounded-2xl border bg-black/35 p-4 sm:p-5"
                  style={{ borderColor: `${category.color}45` }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl"
                    style={{ backgroundColor: category.color }}
                  />
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{
                          backgroundColor: category.color,
                          boxShadow: `0 0 12px ${category.color}`,
                        }}
                      />
                      <h3
                        className="min-w-0 font-mono text-[10px] font-bold uppercase tracking-[0.14em] sm:text-xs"
                        style={{ color: category.color }}
                      >
                        {category.label}
                      </h3>
                    </div>
                    <span className="shrink-0 font-mono text-[9px] text-white/35">
                      {String(skills.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill.id}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[10px] text-white/75 sm:text-xs"
                      >
                        {skill.label}
                      </span>
                    ))}
                  </div>
                </section>
              );
            })}
        </div>
        <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
          Choose a category to filter skills
        </p>
      </div>

      {/* Navigation Help Note */}
      <div className="relative z-20 mt-4 hidden text-center font-mono text-[7.5px] uppercase tracking-[0.25em] text-white/20 min-[1280px]:block">
        Move mouse to tilt camera · Hover node to reveal connections · Click to inspect
      </div>
    </Section>
  );
}