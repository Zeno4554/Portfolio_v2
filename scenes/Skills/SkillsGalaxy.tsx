"use client";

import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import {
  skillNodes,
  skillEdges,
} from "./galaxyData";
import {
  getGalaxySize,
  getNodeById,
} from "./layout";

export default function SkillsGalaxy() {
  const { width, height } = getGalaxySize();

  return (
    <div
      className="relative mx-auto overflow-visible"
      style={{
        width,
        height,
      }}
    >
      {/* Background Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 120 }).map((_, i) => (
          <span
            key={i}
            data-star
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-white/30
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Connections */}
      {skillEdges.map((edge) => {
        const from = getNodeById(skillNodes, edge.from);
        const to = getNodeById(skillNodes, edge.to);

        if (!from || !to) return null;

        return (
          <SkillEdge
            key={`${edge.from}-${edge.to}`}
            from={from}
            to={to}
          />
        );
      })}

      {/* Nodes */}
      {skillNodes.map((node) => (
        <SkillNode
          key={node.id}
          {...node}
        />
      ))}
    </div>
  );
}