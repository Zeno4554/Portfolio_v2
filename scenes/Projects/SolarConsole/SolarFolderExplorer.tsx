"use client";

import { graphNodes } from "./architectureData";

interface Props {
  activeNode: string | null;
}

const nodeFolders = [
  {
    id: "firmware",
    title: "Firmware",
    description: "ESP8266 and sensor firmware source code.",
  },
  {
    id: "aws-iot",
    title: "AWS IoT",
    description: "Device registry, policies and streaming rules.",
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Python analytics engine and telemetry metrics.",
  },
  {
    id: "ml-pipeline",
    title: "ML Pipeline",
    description: "Forecasting model, prediction code and training artifacts.",
  },
  {
    id: "grafana",
    title: "Dashboard",
    description: "Power BI / Grafana dashboard configuration and visuals.",
  },
];

export default function SolarFolderExplorer({ activeNode }: Props) {
  return (
    <div className="h-full space-y-4 overflow-y-auto overflow-x-hidden pr-1 touch-auto overscroll-contain">
      {nodeFolders.map((folder) => (
        <div key={folder.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-mono text-xs tracking-[.45em] text-cyan-400">{folder.title}</p>
          <p className="mt-3 text-sm text-white/70">{folder.description}</p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            {graphNodes
              .filter((node) => node.folder.startsWith(folder.id))
              .map((node) => (
                <div
                  key={node.id}
                  className={`rounded-xl border px-3 py-2 text-xs font-mono transition ${
                    activeNode === node.id
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-200"
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
