"use client";

import { memo } from "react";
import { SkillNodeData } from "./galaxyData";
import { getSkillCenter, CATEGORY_CLUSTERS } from "./layout";

interface SkillEdgeProps {
  from: SkillNodeData;
  to: SkillNodeData;
  isHighlighted?: boolean;
  isDimmed?: boolean;
}

function SkillEdge({
  from,
  to,
  isHighlighted,
  isDimmed,
}: SkillEdgeProps) {
  const start = getSkillCenter(from);
  const end = getSkillCenter(to);

  const dx = end.x - start.x;
  const dy = end.y - start.y;

  const length = Math.round(Math.sqrt(dx * dx + dy * dy) * 100) / 100;
  const angle =
    Math.round(((Math.atan2(dy, dx) * 180) / Math.PI) * 100) / 100;

  const cluster = CATEGORY_CLUSTERS[from.category];

  return (
    <div
      className={`absolute transition-opacity duration-500 ${
        isDimmed ? "opacity-15" : isHighlighted ? "opacity-100 z-30" : "opacity-40"
      }`}
      style={{
        left: start.x,
        top: start.y,
        width: length,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
      }}
    >
      {/* Ambient Line Glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[5px] w-full -translate-y-1/2 rounded-full transition-all duration-300"
        style={{
          backgroundColor: isHighlighted ? cluster.color : "transparent",
          filter: "blur(4px)",
          opacity: isHighlighted ? 0.6 : 0.15,
        }}
      />

      {/* Base Line */}
      <div
        className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 transition-colors duration-300"
        style={{
          backgroundColor: isHighlighted ? cluster.color : "rgba(255,255,255,0.18)",
        }}
      />

      {/* Animated Luminous Edge */}
      <div
        data-edge
        className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 origin-left scale-x-0 rounded-full transition-all duration-300"
        style={{
          backgroundColor: cluster.color,
          boxShadow: isHighlighted ? `0 0 12px ${cluster.color}` : undefined,
        }}
      />
    </div>
  );
}

export default memo(SkillEdge);