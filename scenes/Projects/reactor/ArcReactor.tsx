"use client";

import { Project } from "../projectsData";

import ArcCore from "./ArcCore";
import ReactorGlow from "./ReactorGlow";
import ReactorOrbit from "./ReactorOrbit";
import ReactorRings from "./ReactorRings";
import ReactorTicks from "./ReactorTicks";
import ReactorEnergy from "./ReactorEnergy";
import ReactorLabels from "./ReactorLabels";
import ReactorIris from "./ReactorIris";

import Blueprint from "./blueprint/Blueprint";

interface Props {
  project: Project;
  accent: string;
  active: boolean;
  onOpen: () => void;
}

export default function ArcReactor({
  project,
  accent,
  active,
  onOpen,
}: Props) {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
      "
    >
      {/* ==========================================
          Holographic Blueprint
      ========================================== */}

      <Blueprint
        project={project}
        accent={accent}
        active={active}
      />

      {/* ==========================================
          Arc Reactor
      ========================================== */}

      <button
        onClick={onOpen}
        className="
          relative
          z-20
          flex
          h-[440px]
          w-[440px]
          items-center
          justify-center
          transition-transform
          duration-500
          hover:scale-[1.02]
        "
      >
        <svg
          viewBox="0 0 500 500"
          className="h-full w-full overflow-visible"
        >
          <defs>
            {/* Glow Filters */}

            <filter id="blur40">
              <feGaussianBlur stdDeviation="40" />
            </filter>

            <filter id="blur20">
              <feGaussianBlur stdDeviation="20" />
            </filter>
          </defs>

          {/* ==========================================
              BACKGROUND GLOW
          ========================================== */}

          <ReactorGlow accent={accent} />

          {/* ==========================================
              MECHANICAL RINGS
          ========================================== */}

          <ReactorRings accent={accent} />

          {/* ==========================================
              ENGINEERING TICKS
          ========================================== */}

          <ReactorTicks accent={accent} />

          {/* ==========================================
              ORBIT NODES
          ========================================== */}

          <ReactorOrbit accent={accent} />

          {/* ==========================================
              ENERGY SYSTEM
          ========================================== */}

          <ReactorEnergy accent={accent} />

          {/* ==========================================
              MECHANICAL IRIS
          ========================================== */}

          <ReactorIris accent={accent} />

          {/* ==========================================
              ARC CORE
          ========================================== */}

          <ArcCore accent={accent} />

          {/* ==========================================
              HUD LABELS
          ========================================== */}

          <ReactorLabels accent={accent} />
        </svg>
      </button>
    </div>
  );
}