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

import Blueprint from "../blueprint/Blueprint";

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

            {/* ==========================================
                Existing Blur Filters
            ========================================== */}

            <filter id="blur40">
              <feGaussianBlur stdDeviation="40" />
            </filter>

            <filter id="blur20">
              <feGaussianBlur stdDeviation="20" />
            </filter>

            {/* ==========================================
                Reactor Blade Metal
            ========================================== */}

            <linearGradient
              id="bladeMetal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F8FCFF" />
              <stop offset="12%" stopColor="#D9F0FF" />
              <stop offset="28%" stopColor="#9FD8FF" />
              <stop offset="50%" stopColor="#708CA8" />
              <stop offset="72%" stopColor="#DDEFFF" />
              <stop offset="100%" stopColor="#495C73" />
            </linearGradient>

            {/* ==========================================
                Blue Reflection
            ========================================== */}

            <linearGradient
              id="bladeReflection"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#FFFFFF"
                stopOpacity=".75"
              />

              <stop
                offset="35%"
                stopColor="#BFEEFF"
                stopOpacity=".45"
              />

              <stop
                offset="100%"
                stopColor="#62C8FF"
                stopOpacity="0"
              />
            </linearGradient>

            {/* ==========================================
                Blade Glow
            ========================================== */}

            <filter
              id="bladeGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                stdDeviation="2"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* ==========================================
                Blue Bloom
            ========================================== */}

            <filter
              id="blueBloom"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="6"
                result="blur"
              />

              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 2 0 0
                0 0 0 1 0
              "
              />

              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
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