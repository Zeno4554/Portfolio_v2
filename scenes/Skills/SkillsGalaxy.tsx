"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import {
  skillNodes,
  skillEdges,
  SkillNodeData,
} from "./galaxyData";
import {
  getGalaxySize,
  getNodeById,
  CATEGORY_CLUSTERS,
} from "./layout";

interface SkillsGalaxyProps {
  activeCategory?: SkillNodeData["category"] | "all";
}

export default function SkillsGalaxy({
  activeCategory = "all",
}: SkillsGalaxyProps) {
  const { width, height } = getGalaxySize();

  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<SkillNodeData | null>(null);

  // Parallax rotation refs for 60 FPS direct DOM update
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // Smooth 60 FPS RAF lerp loop for parallax rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const offsetX = (e.clientX - cx) / (rect.width / 2);
      const offsetY = (e.clientY - cy) / (rect.height / 2);

      targetRot.current = {
        x: offsetX * 16,
        y: -offsetY * 12,
      };
    };

    const updateFrame = () => {
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.08;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.08;

      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1200px) rotateX(${currentRot.current.y.toFixed(
          2
        )}deg) rotateY(${currentRot.current.x.toFixed(2)}deg) translateZ(0)`;
      }

      rafId.current = requestAnimationFrame(updateFrame);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Compute connected nodes for hover state
  const connectedNodeIds = useMemo(() => {
    if (!hoveredNodeId) return new Set<string>();

    const set = new Set<string>([hoveredNodeId]);
    skillEdges.forEach((edge) => {
      if (edge.from === hoveredNodeId) set.add(edge.to);
      if (edge.to === hoveredNodeId) set.add(edge.from);
    });

    return set;
  }, [hoveredNodeId]);

  // Compute connected technologies for selected node inspection
  const selectedConnections = useMemo(() => {
    if (!selectedNode) return [];

    return skillEdges
      .filter((edge) => edge.from === selectedNode.id || edge.to === selectedNode.id)
      .map((edge) => {
        const targetId = edge.from === selectedNode.id ? edge.to : edge.from;
        return getNodeById(skillNodes, targetId);
      })
      .filter((node): node is SkillNodeData => !!node);
  }, [selectedNode]);

  // Category clusters list
  const clusters = useMemo(() => Object.values(CATEGORY_CLUSTERS), []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto overflow-visible will-change-transform"
      style={{
        width,
        height,
      }}
    >
      {/* Background Starfield Particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 140 }).map((_, i) => (
          <span
            key={i}
            data-star
            className="absolute rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              width: i % 5 === 0 ? "3px" : "2px",
              height: i % 5 === 0 ? "3px" : "2px",
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              opacity: 0.2 + (i % 6) * 0.12,
            }}
          />
        ))}
      </div>

      {/* Ambient Category Constellation Nebulae */}
      <div className="pointer-events-none absolute inset-0">
        {clusters.map((c) => {
          const isCategoryActive =
            activeCategory === "all" || activeCategory === c.id;

          return (
            <div
              key={c.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                width: isCategoryActive ? "320px" : "180px",
                height: isCategoryActive ? "320px" : "180px",
                background: `radial-gradient(circle, ${c.glowColor} 0%, transparent 70%)`,
                opacity: isCategoryActive ? 0.8 : 0.15,
                filter: "blur(40px)",
              }}
            />
          );
        })}
      </div>

      {/* Category Constellation Hub Titles */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {clusters.map((c) => {
          const isCategoryActive =
            activeCategory === "all" || activeCategory === c.id;

          return (
            <div
              key={`hub-${c.id}`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 ${
                isCategoryActive ? "opacity-70 scale-100" : "opacity-20 scale-90"
              }`}
              style={{
                left: `${c.x}%`,
                top: `${c.y - 10}%`,
              }}
            >
              <div
                className="font-mono text-[9px] uppercase tracking-[0.35em] font-bold"
                style={{ color: c.color }}
              >
                ✦ {c.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Constellation Edge Lines */}
      <div className="absolute inset-0 z-10">
        {skillEdges.map((edge) => {
          const from = getNodeById(skillNodes, edge.from);
          const to = getNodeById(skillNodes, edge.to);

          if (!from || !to) return null;

          const isEdgeCategoryActive =
            activeCategory === "all" ||
            from.category === activeCategory ||
            to.category === activeCategory;

          const isEdgeHovered =
            hoveredNodeId &&
            (edge.from === hoveredNodeId || edge.to === hoveredNodeId);

          const isEdgeDimmed =
            (activeCategory !== "all" && !isEdgeCategoryActive) ||
            (hoveredNodeId !== null && !isEdgeHovered);

          return (
            <SkillEdge
              key={`${edge.from}-${edge.to}`}
              from={from}
              to={to}
              isHighlighted={!!isEdgeHovered}
              isDimmed={isEdgeDimmed}
            />
          );
        })}
      </div>

      {/* Constellation Skill Nodes */}
      <div className="absolute inset-0 z-20">
        {skillNodes.map((node) => {
          const isCategoryMatch =
            activeCategory === "all" || node.category === activeCategory;
          const isHovered = hoveredNodeId === node.id;
          const isConnected = connectedNodeIds.has(node.id);

          const isDimmed =
            (activeCategory !== "all" && !isCategoryMatch) ||
            (hoveredNodeId !== null && !isConnected);

          return (
            <SkillNode
              key={node.id}
              {...node}
              isSelected={selectedNode?.id === node.id}
              isHovered={isHovered}
              isConnectedToHovered={isConnected && hoveredNodeId !== node.id}
              isDimmed={isDimmed}
              onHover={setHoveredNodeId}
              onClickNode={setSelectedNode}
            />
          );
        })}
      </div>

      {/* Selected Skill Focused Detail Overlay */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md px-4 animate-[fadeIn_300ms_ease-out]">
          <div
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/20 bg-[#0c100d] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            style={{
              borderColor: CATEGORY_CLUSTERS[selectedNode.category].color + "60",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.3em]"
                  style={{ color: CATEGORY_CLUSTERS[selectedNode.category].color }}
                >
                  CONSTELLATION NODE · {selectedNode.category}
                </span>

                <h3 className="mt-1 font-display text-2xl font-black uppercase tracking-tight text-white">
                  {selectedNode.label}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedNode(null)}
                className="font-mono text-xs text-white/40 hover:text-white transition-colors p-1"
              >
                ✕
              </button>
            </div>

            {/* Connected Technologies Section */}
            <div className="mt-5">
              <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/40">
                CONNECTED CONSTELLATION NODES
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedConnections.length > 0 ? (
                  selectedConnections.map((conn) => (
                    <span
                      key={conn.id}
                      className="rounded border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/80"
                      style={{
                        borderColor: CATEGORY_CLUSTERS[conn.category].color + "40",
                      }}
                    >
                      ✦ {conn.label}
                    </span>
                  ))
                ) : (
                  <span className="font-mono text-xs text-white/40">
                    Standalone constellation hub
                  </span>
                )}
              </div>
            </div>

            {/* Close / Action Footer */}
            <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setSelectedNode(null)}
                className="rounded border border-white/20 bg-white/5 px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/80 transition-all hover:bg-white/10 hover:text-white"
              >
                RETURN TO GALAXY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}