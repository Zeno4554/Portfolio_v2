"use client";

import { useMemo, useState } from "react";
import { graphEdges, graphNodes } from "./architectureData";

interface Props {
  activeFlow?: string | null;
  onSelect: (id: string) => void;
}

const COLUMN_X = {
  browser: 120,
  router: 320,
  auth: 520,
  api: 720,
  server: 920,
  db: 1120,
  payment: 1320,
  order: 1520,
};

const ROW_Y = [140, 260, 380, 500, 620];

export default function EcommerceArchitectureGraph({ activeFlow, onSelect }: Props) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

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
    <div className="relative h-[760px] min-w-0 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#05060c]/90">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1680 760" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="nodeBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1120" />
            <stop offset="100%" stopColor="#081119" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="#02050d" />

        {graphEdges.map((edge) => {
          const from = positionedNodes.find((node) => node.id === edge.from);
          const to = positionedNodes.find((node) => node.id === edge.to);
          if (!from || !to) return null;

          const path = `M ${from.x} ${from.y} C ${from.x + 180} ${from.y}, ${to.x - 180} ${to.y}, ${to.x} ${to.y}`;
          const highlight = edge.from === activeNode || edge.to === activeNode;

          return (
            <path
              key={`${edge.from}-${edge.to}`}
              d={path}
              fill="none"
              stroke={highlight ? "#A78BFA" : "#818CF8"}
              strokeOpacity={highlight ? 1 : 0.28}
              strokeWidth={highlight ? 4 : 2}
            />
          );
        })}

        {Object.entries(COLUMN_X).map(([key, x]) => (
          <text key={key} x={x} y={60} textAnchor="middle" fill="#C7D2FE" fontSize="14" letterSpacing="5" fontFamily="monospace">
            {key.replace(/-/g, " ").toUpperCase()}
          </text>
        ))}

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
              <rect x="-120" y="-44" width="240" height="88" rx="24" fill="#0F172A" />
              <rect x="-120" y="-44" width="240" height="88" rx="24" fill="url(#nodeBg)" stroke={active ? "#C7D2FE" : "#818CF8"} strokeWidth={active ? 3 : 1.5} />
              <text x="0" y="-6" fill="#E2E8F0" fontSize="14" fontFamily="monospace" textAnchor="middle">
                {node.title}
              </text>
              <text x="0" y="18" fill="#A5B4FC" fontSize="10" fontFamily="monospace" textAnchor="middle">
                {node.folder}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
