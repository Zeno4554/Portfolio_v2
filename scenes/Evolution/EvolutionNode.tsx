"use client";

import { EvolutionNodeData } from "./evolutionData";
import { getNodePosition } from "./layout";

type EvolutionNodeProps = EvolutionNodeData;

export default function EvolutionNode({
  year,
  title,
  subtitle,
  level,
  lane,
}: EvolutionNodeProps) {
  const position = getNodePosition({
    id: "",
    year,
    title,
    subtitle,
    level,
    lane,
  });

  return (
    <div
      className="absolute left-1/2 bottom-0 -translate-x-1/2"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="flex items-center gap-8">
        {/* Node */}
        <div
          data-node
          className="
            group
            relative
            h-20
            w-20
            rounded-full
            border
            border-cyan-400/30
            bg-[#090913]
            backdrop-blur-xl
            transition-all
            duration-500
          "
        >
          <div
            data-glow
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/10
              blur-xl
              opacity-0
            "
          />

          <div
            data-core
            className="
              absolute
              left-1/2
              top-1/2
              h-3
              w-3
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-300
            "
          />
        </div>

        {/* Text */}
        <div>
          {year && (
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-300">
              {year}
            </p>
          )}

          <h3 className="mt-2 font-display text-3xl font-black uppercase text-white">
            {title}
          </h3>

          <p className="mt-2 text-white/55">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}