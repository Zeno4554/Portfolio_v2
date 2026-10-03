"use client";

import { useMemo, useState } from "react";
import { graphEdges, graphNodes } from "./architectureData";
import ResponsiveArchitectureFlow from "../DeepDive/components/ResponsiveArchitectureFlow";

interface Props {
  activeFlow?: string | null;
  onSelect: (id: string) => void;
}

const COLUMN_X = {
  source: 140,
  edge: 420,
  cloud: 700,
  analytics: 980,
  dashboard: 1260,
};

const ROW_Y = [140, 260, 380, 500, 620];

export default function DroneArchitectureGraph({ activeFlow, onSelect }: Props) {
  const [activeNode, setActiveNode] = useState<string | null>(graphNodes[0].id);

  const positionedNodes = useMemo(
    () =>
      graphNodes.map((node) => ({
        ...node,
        x: COLUMN_X[node.column],
        y: ROW_Y[node.row],
      })),
    []
  );

  return (
    <>
      <ResponsiveArchitectureFlow
        nodes={graphNodes}
        activeId={activeFlow ?? activeNode}
        onSelect={(id) => {
          setActiveNode(id);
          onSelect(id);
        }}
        tone="sky"
      />
      <div className="relative hidden h-[760px] min-w-0 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#040d16]/90 lg:block">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="nodeBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1220" />
            <stop offset="100%" stopColor="#08101D" />
          </linearGradient>

          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#4EA1FF10" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.14" />

        {graphEdges.map((edge) => {
          const from = positionedNodes.find((node) => node.id === edge.from);
          const to = positionedNodes.find((node) => node.id === edge.to);
          if (!from || !to) return null;

          const path = `M ${from.x} ${from.y} C ${from.x + 160} ${from.y}, ${to.x - 160} ${to.y}, ${to.x} ${to.y}`;
          const highlight = edge.from === activeNode || edge.to === activeNode;

          return (
            <path
              key={`${edge.from}-${edge.to}`}
              d={path}
              fill="none"
              stroke={highlight ? "#4EA1FF" : "#7DD3FC"}
              strokeOpacity={highlight ? 1 : 0.3}
              strokeWidth={highlight ? 4 : 2}
            />
          );
        })}

        <text x={COLUMN_X.source} y={60} textAnchor="middle" fill="#93C5FD" fontSize="14" letterSpacing="5" fontFamily="monospace">
          PATH PLANNING
        </text>
        <text x={COLUMN_X.edge} y={60} textAnchor="middle" fill="#93C5FD" fontSize="14" letterSpacing="5" fontFamily="monospace">
          NAVIGATION
        </text>
        <text x={COLUMN_X.cloud} y={60} textAnchor="middle" fill="#93C5FD" fontSize="14" letterSpacing="5" fontFamily="monospace">
          MISSION CONTROL
        </text>
        <text x={COLUMN_X.analytics} y={60} textAnchor="middle" fill="#93C5FD" fontSize="14" letterSpacing="5" fontFamily="monospace">
          FLEET & DB
        </text>
        <text x={COLUMN_X.dashboard} y={60} textAnchor="middle" fill="#93C5FD" fontSize="14" letterSpacing="5" fontFamily="monospace">
          OPERATIONS
        </text>

        {positionedNodes.map((node) => {
          const active = node.id === (activeFlow ?? activeNode);

          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => {
                setActiveNode(node.id);
                onSelect(node.id);
              }}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => {
                setActiveNode(node.id);
                onSelect(node.id);
              }}
            >
              <rect x="-120" y="-44" width="240" height="88" rx="24" fill="#0F172A" filter={active ? "url(#glow)" : undefined} />
              <rect x="-120" y="-44" width="240" height="88" rx="24" fill="url(#nodeBg)" stroke={active ? "#38BDF8" : "#60A5FA"} strokeWidth={active ? 3 : 1.5} />

              <text x="0" y="-6" fill="#E2E8F0" fontSize="16" fontFamily="monospace" textAnchor="middle">
                {node.title}
              </text>
              <text x="0" y="18" fill="#BAE6FD" fontSize="11" fontFamily="monospace" textAnchor="middle">
                {node.folder}
              </text>
            </g>
          );
        })}
      </svg>
      </div>
    </>
  );
}
