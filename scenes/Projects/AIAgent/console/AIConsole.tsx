"use client";

import { useState } from "react";

import PromptTerminal from "./PromptTerminal";
import ConversationPanel from "./ConversationPanel";
import ArchitectureGraph from "./ArchitectureGraph";
import NodeDetails from "./NodeDetails";
import ExecutionLog from "./ExecutionLog";

import usePipeline from "../hooks/usePipeline";
import { graphNodes } from "../data/architecture";

export default function AIConsole() {
  const pipeline = usePipeline();
  const [selectedNode, setSelectedNode] = useState(
    graphNodes[0]!
  );
  const activeNode =
    graphNodes.find((node) => node.id === pipeline.activeStage) ??
    selectedNode;

  return (
    <section
      className="
        flex
        flex-col
        gap-6
        p-8
      "
    >
      {/* Top */}

      <div
        className="
          grid
          grid-cols-[1.7fr_1fr]
          gap-6
          h-[360px]
          min-h-0
          overflow-hidden
        "
      >
        <div className="min-h-0 h-full">
          <PromptTerminal
            prompt={pipeline.prompt}
            onPromptChange={pipeline.setPrompt}
            onExecute={pipeline.start}
            running={pipeline.running}
          />
        </div>

        <div className="min-h-0 h-full">
          <ConversationPanel messages={pipeline.messages} />
        </div>
      </div>

      {/* Middle */}

      <div
        className="
          grid
          grid-cols-[minmax(0,1fr)_380px]
          gap-6
        "
      >
        <div className="min-w-0">
          <ArchitectureGraph
            activeFlow={pipeline.activeStage ?? selectedNode.id}
            onSelect={(id) => {
              const node = graphNodes.find(
                (n) => n.id === id
              );

              if (node) {
                setSelectedNode(node);
              }
            }}
          />
        </div>

        <div className="min-w-[380px] w-[380px]">
          <NodeDetails
            node={activeNode}
          />
        </div>
      </div>

      {/* Bottom */}

      <ExecutionLog
        active={selectedNode.id}
      />
    </section>
  );
}
