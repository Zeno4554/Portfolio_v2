"use client";

import { useState } from "react";
import { Project } from "../../projectsData";
import FolderExplorer from "../components/FolderExplorer/FolderExplorer";
import ArchitectureGraph from "../components/ArchitectureGraph/ArchitectureGraph";
import NodeDetails from "../components/ArchitectureGraph/NodeDetails";
import ExecutionLog from "../components/Execution/ExecutionLog";
import { graphNodes } from "../components/ArchitectureGraph/architectureData";
import useRequestFlow from "../hooks/useRequestFlow";

interface Props {
  project: Project;
}

export default function EngineeringConsole({
  project,
}: Props) {
  const [selectedNode, setSelectedNode] = useState(() => graphNodes[0]);
  const flow = useRequestFlow();

  const activeNodeId =
    flow.active || selectedNode.id;
  const activeNode =
    graphNodes.find(
      (n) => n.id === activeNodeId
    ) ?? graphNodes[0];

  return (
    <section
      data-engineering-console
      className="
        grid
        min-w-0
        gap-6
        p-4
        sm:p-6
        min-h-full
        xl:grid-cols-[300px_minmax(0,1fr)_340px]
        xl:p-8
      "
    >
      {/* =======================================
          LEFT PANEL
      ======================================= */}

      <aside
        className="
          w-full
          min-w-0
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-4
          sm:p-6
        "
      >
        <div>
          <p
            className="font-mono text-xs tracking-[.45em]"
            style={{
              color: project.accent,
            }}
          >
            FILE TREE
          </p>

          <div className="mt-8">
            <FolderExplorer activeNode={activeNodeId} />
          </div>
        </div>
      </aside>

      {/* =======================================
          CENTER PANEL
      ======================================= */}

      <main
        className="
          min-w-0
          flex-1
          min-h-0
          flex
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-4
          sm:p-6
        "
      >
        <div className="flex items-center justify-between">
          <p
            className="font-mono text-xs tracking-[.45em]"
            style={{ color: project.accent }}
          >
            SYSTEM ARCHITECTURE
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
              <span
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  flow.running
                    ? "bg-cyan-400 animate-pulse"
                    : "bg-emerald-400"
                }`}
              />
              <span>
                {flow.running
                  ? `EXECUTING • ${activeNode.title}`
                  : "SYSTEM READY"}
              </span>
            </div>

            <button
              onClick={flow.start}
              disabled={flow.running}
              className="
                rounded-full
                border
                border-cyan-400/20
                px-5
                py-2
                font-mono
                text-xs
                tracking-[.3em]
                text-cyan-300
                transition-all
                hover:border-cyan-300
                hover:bg-cyan-400/10
                disabled:opacity-40
              "
            >
              {flow.running
                ? "RUNNING..."
                : "SIMULATE REQUEST"}
            </button>
          </div>
        </div>

        <div
          className="
            mt-6
            flex-1
            min-h-0
            w-full
            flex
          "
        >
          <ArchitectureGraph
            activeFlow={flow.active}
            onSelect={(id) => {
              const node = graphNodes.find((n) => n.id === id);

              if (node) {
                setSelectedNode(node);
              }
            }}
          />
        </div>
      </main>

      {/* =======================================
          RIGHT PANEL
      ======================================= */}

      <aside
        className="
        grid
        min-w-0
        min-h-0
        gap-6
        md:grid-cols-2
        xl:flex
        flex-col
        xl:w-[340px]
        xl:grid-cols-1
        "
      >
        <div
          className="
            shrink-0
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-4
            sm:p-6
          "
        >
          <NodeDetails node={activeNode} />
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
            h-[300px]
            sm:h-[360px]
          "
        >
          <ExecutionLog active={activeNodeId} />
        </div>
      </aside>
    </section>
  );
}