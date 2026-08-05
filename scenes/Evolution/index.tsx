"use client";

import { Section } from "@/components/common/Section";
import EvolutionNode from "./EvolutionNode";
import EvolutionEdge from "./EvolutionEdge";
import {
  evolutionNodes,
  evolutionEdges,
} from "./evolutionData";
import { getGraphHeight } from "./layout";
import { useEvolutionAnimation } from "./useEvolutionAnimation";

export function Evolution() {
  useEvolutionAnimation();

  const graphHeight = getGraphHeight(evolutionNodes);

  return (
    <Section
      id="evolution"
      index="02"
      label="Becoming"
      className="relative overflow-hidden py-40"
    >
      {/* Background Typography */}
      <h1
        data-becoming-bg
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          select-none
          font-display
          text-[clamp(10rem,22vw,22rem)]
          font-black
          uppercase
          tracking-[-0.08em]
          text-white/[0.025]
          will-change-transform
        "
      >
        BECOMING
      </h1>

      {/* Graph */}
      <div
        className="relative mx-auto max-w-7xl"
        style={{
          height: graphHeight + 250,
        }}
      >
        {/* Connections */}
        {evolutionEdges.map(([fromId, toId]) => {
          const from = evolutionNodes.find(
            (node) => node.id === fromId
          );

          const to = evolutionNodes.find(
            (node) => node.id === toId
          );

          if (!from || !to) return null;

          return (
            <EvolutionEdge
              key={`${fromId}-${toId}`}
              from={from}
              to={to}
            />
          );
        })}

        {/* Nodes */}
        {evolutionNodes.map((node) => (
          <EvolutionNode
            key={node.id}
            {...node}
          />
        ))}
      </div>
    </Section>
  );
}