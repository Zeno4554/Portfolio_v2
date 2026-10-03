"use client";

import { useMemo, useRef, useState } from "react";

import {
  graphEdges,
  graphNodes,
} from "./architectureData";
import ResponsiveArchitectureFlow from "../ResponsiveArchitectureFlow";

interface Props {
  onSelect: (id: string) => void;
  activeFlow?: string | null;
}

const GRAPH_WIDTH = 980;
const GRAPH_HEIGHT = 620;

const COLUMN_X = {
  client: GRAPH_WIDTH * 0.14,
  server: GRAPH_WIDTH * 0.5,
  database: GRAPH_WIDTH * 0.86,
};

const COLUMN_Y = {
  client: 150,
  server: 150,
  database: 150,
};

const ROW_Y = [
  150,
  250,
  350,
  450,
];

export default function ArchitectureGraph({
  onSelect,
  activeFlow,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] =
    useState<string | null>(graphNodes[0].id);

  const positionedNodes = useMemo(() => {
    return graphNodes.map((node) => ({
      ...node,
      x: COLUMN_X[node.column],
      y: ROW_Y[node.row] ?? (COLUMN_Y[node.column] + node.row * 100),
    }));
  }, []);

  return (
    <>
      <ResponsiveArchitectureFlow
        nodes={graphNodes}
        activeId={activeFlow ?? activeNode}
        onSelect={(id) => {
          setActiveNode(id);
          onSelect(id);
        }}
        tone="cyan"
      />

      <div
        className="
        hidden
        w-full
        flex-1
        min-h-0
        items-start
        justify-center
        lg:flex
      "
      >
      <div
        ref={containerRef}
        className="relative w-full max-w-[980px]"
        style={{
          aspectRatio: `${GRAPH_WIDTH} / ${GRAPH_HEIGHT}`,
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
        >
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

              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 2 0 0
                  0 0 0 1 0
                "
                result="glow"
              />

              <feMerge>
                <feMergeNode in="glow" />
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
                stopColor="#0b1822"
              />

              <stop
                offset="100%"
                stopColor="#05080d"
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
            opacity=".38"
          />

          {/* ==============================
              SVG Column Headers
          ============================== */}
          <text
            x={COLUMN_X.client}
            y={70}
            textAnchor="middle"
            fill="#22d3ee"
            fontSize="16"
            letterSpacing="6"
            fontFamily="monospace"
          >
            CLIENT
          </text>

          <text
            x={COLUMN_X.server}
            y={70}
            textAnchor="middle"
            fill="#22d3ee"
            fontSize="16"
            letterSpacing="6"
            fontFamily="monospace"
          >
            SERVER
          </text>

          <text
            x={COLUMN_X.database}
            y={70}
            textAnchor="middle"
            fill="#22d3ee"
            fontSize="16"
            letterSpacing="6"
            fontFamily="monospace"
          >
            DATABASE
          </text>

          {graphEdges.map((edge) => {
            const from = positionedNodes.find(
              (n) => n.id === edge.from
            )!;

            const to = positionedNodes.find(
              (n) => n.id === edge.to
            )!;

            const highlight =
              edge.from === activeNode ||
              edge.to === activeNode;

            const path = (() => {
              // Straight line for nodes within the same column or row
              if (from.x === to.x || from.y === to.y) {
                return `
                  M ${from.x} ${from.y}
                  L ${to.x} ${to.y}
                `;
              }

              // Curved routing for inter-column connections
              const offset = Math.abs(to.x - from.x) * 0.42;

              return `
                M ${from.x} ${from.y}
                C ${from.x + offset} ${from.y},
                  ${to.x - offset} ${to.y},
                  ${to.x} ${to.y}
              `;
            })();

            return (
              <g key={`${edge.from}-${edge.to}`}>
                <path
                  d={path}
                  fill="none"
                  stroke={highlight ? "#7ef9ff" : "#1d9fd6"}
                  strokeOpacity={highlight ? 1 : 0.35}
                  strokeWidth={highlight ? 4 : 2}
                />

                {activeFlow && (
                  <>
                    <circle
                      r="3.5"
                      fill="#9ff6ff"
                      filter="url(#cyanGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        rotate="auto"
                        begin="0s"
                        path={path}
                      />
                    </circle>

                    <circle
                      r="2.5"
                      fill="#7ef9ff"
                      opacity=".6"
                      filter="url(#cyanGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        rotate="auto"
                        begin="0.8s"
                        path={path}
                      />
                    </circle>

                    <circle
                      r="2"
                      fill="#d7ffff"
                      opacity=".35"
                      filter="url(#cyanGlow)"
                    >
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        rotate="auto"
                        begin="1.6s"
                        path={path}
                      />
                    </circle>
                  </>
                )}
              </g>
            );
          })}

          {/* ==============================
              SVG Nodes
          ============================== */}

          {positionedNodes.map((node) => {
            const active =
              node.id === (activeFlow ?? activeNode);

            const large = [
              "express",
              "controllers",
              "services",
            ].includes(node.id);

            const width = large ? 165 : 135;
            const height = large ? 70 : 62;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                style={{
                  cursor: "pointer",
                }}
                onMouseEnter={() => {
                  if (activeNode === node.id) return;

                  setActiveNode(node.id);
                  onSelect(node.id);
                }}
                onMouseLeave={() => {
                  setActiveNode(null);
                }}
                onClick={() => {
                  setActiveNode(node.id);
                  onSelect(node.id);
                }}
              >
                {/* Glow */}

                <rect
                  x={-width / 2}
                  y={-height / 2}
                  rx="14"
                  width={width}
                  height={height}
                  fill="#00d9ff22"
                  filter="url(#cyanGlow)"
                />

                {/* Main Panel */}

                <rect
                  x={-width / 2}
                  y={-height / 2}
                  rx="14"
                  width={width}
                  height={height}
                  fill="url(#nodeGradient)"
                  stroke={
                    active
                      ? "#d9ffff"
                      : "#39cfff"
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
                  fill="#c8f9ff"
                  fontSize="15"
                  fontWeight="600"
                  letterSpacing="4"
                  fontFamily="monospace"
                >
                  {node.title.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      </div>
    </>
  );
}