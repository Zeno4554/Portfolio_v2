"use client";

import { SkillNodeData } from "./galaxyData";
import { getSkillPosition } from "./layout";

type SkillNodeProps = SkillNodeData;

const CATEGORY_COLORS = {
  frontend: {
    glow: "bg-cyan-400/20",
    border: "border-cyan-300/40",
    dot: "bg-cyan-300",
  },

  backend: {
    glow: "bg-blue-400/20",
    border: "border-blue-300/40",
    dot: "bg-blue-300",
  },

  ai: {
    glow: "bg-violet-400/20",
    border: "border-violet-300/40",
    dot: "bg-violet-300",
  },

  cloud: {
    glow: "bg-sky-400/20",
    border: "border-sky-300/40",
    dot: "bg-sky-300",
  },

  database: {
    glow: "bg-emerald-400/20",
    border: "border-emerald-300/40",
    dot: "bg-emerald-300",
  },

  iot: {
    glow: "bg-orange-400/20",
    border: "border-orange-300/40",
    dot: "bg-orange-300",
  },
};

export default function SkillNode(props: SkillNodeProps) {
  const position = getSkillPosition(props);
  const colors = CATEGORY_COLORS[props.category];

  return (
    <div
      data-skill-node
      data-category={props.category}
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex flex-col items-center gap-4">

        {/* Planet */}
        <div
          data-skill-core
          className={`
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            backdrop-blur-xl
            transition-all
            duration-500
            ${colors.border}
          `}
        >
          {/* Glow */}
          <div
            data-glow
            className={`
              absolute
              inset-0
              rounded-full
              opacity-0
              blur-xl
              ${colors.glow}
            `}
          />

          {/* Core */}
          <div
            data-core
            className={`
              h-3
              w-3
              rounded-full
              ${colors.dot}
            `}
          />
        </div>

        {/* Label */}
        <span
          className="
            whitespace-nowrap
            font-mono
            text-xs
            uppercase
            tracking-[0.25em]
            text-white/70
          "
        >
          {props.label}
        </span>
      </div>
    </div>
  );
}