"use client";

import { SkillNodeData } from "./galaxyData";
import { getSkillCenter } from "./layout";

interface SkillEdgeProps {
  from: SkillNodeData;
  to: SkillNodeData;
}

export default function SkillEdge({
  from,
  to,
}: SkillEdgeProps) {
  const start = getSkillCenter(from);
  const end = getSkillCenter(to);

  const dx = end.x - start.x;
  const dy = end.y - start.y;

  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  return (
    <div
      className="absolute"
      style={{
        left: start.x,
        top: start.y,
        width: `${length}px`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%",
      }}
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          left-0
          top-1/2
          h-[6px]
          w-full
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-md
          pointer-events-none
        "
      />

      {/* Base Line */}
      <div
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          -translate-y-1/2
          rounded-full
          bg-white/10
        "
      />

      {/* Animated Line */}
      <div
        data-edge
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          -translate-y-1/2
          origin-left
          scale-x-0
          rounded-full
          bg-cyan-300
          shadow-[0_0_16px_rgba(34,211,238,0.9)]
          will-change-transform
        "
      />

      {/* Energy Pulse */}
      <div
        data-pulse
        className="
          absolute
          left-0
          top-1/2
          h-2.5
          w-2.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300
          opacity-0
          shadow-[0_0_20px_rgba(34,211,238,1)]
        "
      />
    </div>
  );
}