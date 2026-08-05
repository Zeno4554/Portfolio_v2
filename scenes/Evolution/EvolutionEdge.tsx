"use client";

import { EvolutionNodeData } from "./evolutionData";
import { getNodePosition } from "./layout";

interface EdgeProps {
  from: EvolutionNodeData;
  to: EvolutionNodeData;
}

export default function EvolutionEdge({
  from,
  to,
}: EdgeProps) {
  const start = getNodePosition(from);
  const end = getNodePosition(to);

  const dx = end.x - start.x;
  const dy = end.y - start.y;

  const length = Math.sqrt(dx * dx + dy * dy);

  const angle =
    (Math.atan2(dy, dx) * 180) / Math.PI;

  return (
  <div
    className="absolute left-1/2 bottom-0"
    style={{
      transform: `translate(${start.x}px, ${start.y}px) rotate(${angle}deg)`,
      transformOrigin: "left center",
      width: `${length}px`,
    }}
  >
    {/* Ambient Glow */}
    <div
      className="
        absolute
        left-0
        top-1/2
        h-[10px]
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
        h-[2px]
        w-full
        -translate-y-1/2
        rounded-full
        bg-white/10
      "
    />

    {/* Animated Progress Line */}
    <div
      data-edge-progress
      className="
        absolute
        left-0
        top-1/2
        h-[2px]
        w-full
        -translate-y-1/2
        origin-left
        scale-x-0
        rounded-full
        bg-cyan-300
        shadow-[0_0_18px_rgba(34,211,238,0.9)]
        will-change-transform
      "
    />

    {/* Energy Pulse (for next sprint) */}
    <div
      data-edge-pulse
      className="
        absolute
        left-0
        top-1/2
        h-3
        w-3
        -translate-y-1/2
        rounded-full
        bg-cyan-300
        opacity-0
        blur-[1px]
        shadow-[0_0_24px_rgba(34,211,238,1)]
      "
    />
  </div>
);