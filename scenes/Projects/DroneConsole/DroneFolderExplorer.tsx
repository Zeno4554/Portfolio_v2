"use client";

import { graphNodes } from "./architectureData";

interface Props {
  activeNode: string | null;
}

const nodeFolders = [
  {
    id: "pathfinding",
    title: "Pathfinding",
    description: "Route planning algorithms and geospatial constraints.",
  },
  {
    id: "api",
    title: "Navigation API",
    description: "FastAPI navigation and mission control services.",
  },
  {
    id: "spatial-db",
    title: "Spatial DB",
    description: "PostGIS-backed storage for air corridors and telemetry.",
  },
  {
    id: "fleet",
    title: "Fleet",
    description: "Drone fleet coordination, health, and dispatch logic.",
  },
  {
    id: "simulation",
    title: "Simulation",
    description: "Streamlit flight visualization and telemetry playback.",
  },
  {
    id: "docker",
    title: "Docker",
    description: "Deployment manifests for mission service stacks.",
  },
];

export default function DroneFolderExplorer({ activeNode }: Props) {
  return (
    <div className="h-full space-y-4 overflow-y-auto overflow-x-hidden pr-1 touch-auto overscroll-contain">
      {nodeFolders.map((folder) => (
        <div key={folder.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-mono text-xs tracking-[.45em] text-sky-400">{folder.title}</p>
          <p className="mt-3 text-sm text-white/70">{folder.description}</p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            {graphNodes
              .filter((node) => node.folder.startsWith(folder.id))
              .map((node) => (
                <div
                  key={node.id}
                  className={`rounded-xl border px-3 py-2 text-xs font-mono transition ${
                    activeNode === node.id
                      ? "border-sky-400 bg-sky-400/10 text-sky-200"
                      : "border-white/5 bg-white/[0.02] text-white/65"
                  }`}
                >
                  {node.title}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
