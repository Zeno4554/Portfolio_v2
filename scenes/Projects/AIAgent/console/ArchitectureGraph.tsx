"use client";

import { useMemo, useState } from "react";

import {
  graphNodes,
  graphEdges,
} from "../data/architecture";

interface Props {
  activeFlow?: string | null;
  onSelect: (id: string) => void;
}

const COLUMN_X = {
  client: 140,
  core: 560,
  database: 980,
};

const ROW_Y = [
  140,
  225,
  310,
  395,
  480,
  565,
  650,
  735,
  820,
];

export default function ArchitectureGraph({
  activeFlow,
  onSelect,
}: Props) {
  const [activeNode, setActiveNode] =
    useState<string | null>(null);

  const positionedNodes = useMemo(() => {
    return graphNodes.map((node) => ({
      ...node,
      x: COLUMN_X[node.column],
      y: ROW_Y[node.row],
    }));
  }, []);

  return (
    <div className="relative h-[900px] min-w-0 w-full overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 920"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ==============================
            Definitions
        ============================== */}

        <defs>
          <filter
            id="cyanGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="8"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="nodeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#0B1822"
            />

            <stop
              offset="100%"
              stopColor="#05080D"
            />
          </linearGradient>

          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="#0ea5e910"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          opacity=".3"
        />

        {/* ==============================
            Edges
        ============================== */}

        {graphEdges.map((edge) => {
          const from = positionedNodes.find(
            (n) => n.id === edge.from
          );

          const to = positionedNodes.find(
            (n) => n.id === edge.to
          );

          if (!from || !to) return null;

          const highlight =
            edge.from === activeNode ||
            edge.to === activeNode;

          const path = (() => {
            if (from.x === to.x || from.y === to.y) {
              return `
                M ${from.x} ${from.y}
                L ${to.x} ${to.y}
              `;
            }

            const offset = Math.abs(to.x - from.x) * 0.42;

            return `
              M ${from.x} ${from.y}
              C ${from.x + offset} ${from.y},
                ${to.x - offset} ${to.y},
                ${to.x} ${to.y}
            `;
          })();

          return (
            <path
              key={`${edge.from}-${edge.to}`}
              d={path}
              fill="none"
              stroke={highlight ? "#7EF9FF" : "#1D9FD6"}
              strokeOpacity={highlight ? 1 : 0.35}
              strokeWidth={highlight ? 4 : 2}
            />
          );
        })}

        {/* ==============================
            Column Labels
        ============================== */}

        <text
          x={COLUMN_X.client}
          y={70}
          textAnchor="middle"
          fill="#38BDF8"
          fontSize="16"
          letterSpacing="6"
          fontFamily="monospace"
        >
          CLIENT
        </text>

        <text
          x={COLUMN_X.core}
          y={70}
          textAnchor="middle"
          fill="#38BDF8"
          fontSize="16"
          letterSpacing="6"
          fontFamily="monospace"
        >
          AI CORE
        </text>

        <text
          x={COLUMN_X.database}
          y={70}
          textAnchor="middle"
          fill="#38BDF8"
          fontSize="16"
          letterSpacing="6"
          fontFamily="monospace"
        >
          DATABASE
        </text>

        {/* ==============================
            Nodes
        ============================== */}

        {positionedNodes.map((node) => {
          const active =
            node.id === (activeFlow ?? activeNode);

          return (
            <g
              key={node.id}
              transform={`translate(${node.x},${node.y})`}
              style={{
                cursor: "pointer",
              }}
              onMouseEnter={() => {
                setActiveNode(node.id);
                onSelect(node.id);
              }}
              onMouseLeave={() =>
                setActiveNode(null)
              }
              onClick={() => {
                setActiveNode(node.id);
                onSelect(node.id);
              }}
            >
              {/* Glow */}

              <rect
                x="-78"
                y="-30"
                width="156"
                height="60"
                rx="14"
                fill="#00d9ff22"
                filter="url(#cyanGlow)"
              />

              {/* Main */}

              <rect
                x="-78"
                y="-30"
                width="156"
                height="60"
                rx="14"
                fill="url(#nodeGradient)"
                stroke={
                  active
                    ? "#D7FFFF"
                    : "#38BDF8"
                }
                strokeWidth={
                  active ? 3 : 1.4
                }
                filter={
                  active
                    ? "url(#cyanGlow)"
                    : undefined
                }
              />

              {/* Text */}

              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#D8F7FF"
                fontSize="15"
                fontWeight="700"
                letterSpacing="3"
                fontFamily="monospace"
              >
                {node.title.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}