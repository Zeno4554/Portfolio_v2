"use client";

import { Project } from "../projectsData";

import BlueprintGrid from "./BlueprintGrid";
import BlueprintLines from "./BlueprintLines";
import BlueprintModules from "./BlueprintModules";

interface Props {
  project: Project;
  accent: string;
  active: boolean;
}

export default function Blueprint({
  project,
  accent,
  active,
}: Props) {
  return (
    <div
      data-blueprint
      className="
        absolute
        left-1/2
        top-1/2
        z-40
        w-[760px]
        -translate-x-1/2
        -translate-y-[115%]
        pointer-events-none
      "
      style={{
        opacity: active ? 1 : 0,
        transform: active
          ? "translate(-50%, -115%) scale(1)"
          : "translate(-50%, -80%) scale(.92)",
        transition:
          "all .9s cubic-bezier(.22,1,.36,1)",
      }}
    >
      {/* Glass Panel */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-black/25
          backdrop-blur-3xl
        "
      >
        {/* Glow */}

        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${accent}22 0%, transparent 70%)`,
          }}
        />

        {/* Engineering Grid */}

        <BlueprintGrid accent={accent} />

        {/* Connection Lines */}

        <BlueprintLines
          project={project}
          accent={accent}
        />

        {/* Modules */}

        <BlueprintModules
          project={project}
          accent={accent}
        />
      </div>
    </div>
  );
}