"use client";

import { memo } from "react";
import { SkillNodeData } from "./galaxyData";
import { getSkillPosition, CATEGORY_CLUSTERS } from "./layout";

interface SkillNodeProps extends SkillNodeData {
  isSelected?: boolean;
  isHovered?: boolean;
  isDimmed?: boolean;
  isConnectedToHovered?: boolean;
  onHover?: (id: string | null) => void;
  onClickNode?: (node: SkillNodeData) => void;
}

function SkillNode({
  isSelected,
  isHovered,
  isDimmed,
  isConnectedToHovered,
  onHover,
  onClickNode,
  ...props
}: SkillNodeProps) {
  const position = getSkillPosition(props);
  const cluster = CATEGORY_CLUSTERS[props.category];

  const highlighted = isHovered || isSelected || isConnectedToHovered;

  return (
    <div
      data-skill-node
      data-category={props.category}
      className={`absolute cursor-pointer transition-all duration-500 ease-out ${
        isDimmed ? "opacity-25 scale-90 blur-[0.5px]" : "opacity-100 scale-100"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) ${
          highlighted ? "scale(1.2)" : "scale(1)"
        }`,
        zIndex: highlighted ? 40 : 20,
      }}
      onMouseEnter={() => onHover?.(props.id)}
      onMouseLeave={() => onHover?.(null)}
      onClick={() => onClickNode?.(props)}
    >
      <div className="group flex flex-col items-center gap-3">
        {/* Constellation Orb Node */}
        <div
          data-skill-core
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#080b09]/80 backdrop-blur-xl shadow-lg transition-all duration-500 group-hover:border-white/60"
          style={{
            borderColor: highlighted ? cluster.color : undefined,
            boxShadow: highlighted
              ? `0 0 25px ${cluster.color}, 0 0 10px ${cluster.color}`
              : "0 4px 15px rgba(0,0,0,0.5)",
          }}
        >
          {/* Emissive Aura Glow */}
          <div
            data-glow
            className="absolute inset-0 rounded-full transition-opacity duration-500"
            style={{
              background: cluster.glowColor,
              opacity: highlighted ? 0.9 : 0.25,
              filter: "blur(12px)",
            }}
          />

          {/* Outer Ring */}
          <div
            className="absolute inset-1.5 rounded-full border border-dashed border-white/20 transition-transform duration-700 group-hover:rotate-45"
            style={{ borderColor: cluster.color + "60" }}
          />

          {/* Core Star Orb */}
          <div
            data-core
            className="h-3 w-3 rounded-full transition-all duration-300 group-hover:scale-125"
            style={{
              backgroundColor: cluster.color,
              boxShadow: `0 0 10px ${cluster.color}`,
            }}
          />
        </div>

        {/* Skill Label */}
        <div className="flex flex-col items-center">
          <span
            className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 ${
              highlighted
                ? "font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                : "text-white/70 group-hover:text-white"
            }`}
          >
            {props.label}
          </span>
          {highlighted && (
            <span
              className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.2em]"
              style={{ color: cluster.color }}
            >
              {props.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(SkillNode);