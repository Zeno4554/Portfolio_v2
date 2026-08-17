"use client";

import { GraphNode } from "./architectureData";

interface Props {
  node: GraphNode;
  active: boolean;
  onHover: (id: string) => void;
  onLeave: () => void;
}

export default function ArchitectureNode({
  node,
  active,
  onHover,
  onLeave,
}: Props) {
  const large = [
    "express",
    "controllers",
    "services",
  ].includes(node.id);

  return (
    <div
      className="
        absolute
        -translate-x-1/2
        -translate-y-1/2
        transition-all
        duration-300
        cursor-pointer
      "
      style={{
        left: `${node.x}px`,
        top: `${node.y}px`,
      }}
      onClick={() => onHover(node.id)}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 rounded-xl blur-xl bg-cyan-400/10" />

      <div
        className={`
          relative
          flex
          items-center
          justify-center
          rounded-xl
          border
          bg-gradient-to-br
          from-cyan-400/10
          to-black/80
          px-5
          py-3
          backdrop-blur-xl
          transition-all
          duration-300
          ${large ? "w-40 h-16" : "w-28 h-14"}
          ${
            active
              ? "border-cyan-300 shadow-[0_0_40px_rgba(0,255,255,.55)] scale-105 animate-pulse"
              : "border-cyan-300/30 shadow-[0_0_35px_rgba(0,220,255,.18)]"
          }
        `}
      >
        <p
          className="
            font-mono
            text-xs
            uppercase
            tracking-[.25em]
            text-cyan-200
            text-center
          "
        >
          {node.title}
        </p>
      </div>
    </div>
  );
}