"use client";

import { GraphNode } from "../data/architecture";

interface Props {
  node?: GraphNode;
}

export default function NodeDetails({
  node,
}: Props) {
  if (!node) {
    return (
      <section
        className="
          rounded-3xl
          border
          border-white/10
          bg-[#05080d]/90
          backdrop-blur-xl
          p-6
        "
      >
        <p className="font-mono text-xs tracking-[.45em] text-cyan-400">
          NODE DETAILS
        </p>

        <p className="mt-8 text-white/40">
          Select a module from the architecture graph.
        </p>
      </section>
    );
  }

  return (
    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#05080d]/90
        backdrop-blur-xl
        p-6
      "
    >
      <p className="font-mono text-xs tracking-[.45em] text-cyan-400">
        MODULE DETAILS
      </p>

      <h2
        className="
          mt-5
          text-3xl
          font-black
          uppercase
          text-white
        "
      >
        {node.title}
      </h2>

      <p
        className="
          mt-5
          leading-8
          text-white/70
        "
      >
        {node.description}
      </p>

      <div className="mt-8 space-y-6">

        <div>
          <p className="font-mono text-xs tracking-[.3em] text-white/35 uppercase">
            Input
          </p>

          <p className="mt-2 text-cyan-300">
            {node.input}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[.3em] text-white/35 uppercase">
            Output
          </p>

          <p className="mt-2 text-cyan-300">
            {node.output}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[.3em] text-white/35 uppercase">
            Average Latency
          </p>

          <p className="mt-2 text-cyan-300">
            {node.latency}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[.3em] text-white/35 uppercase">
            Folder
          </p>

          <p className="mt-2 font-mono text-cyan-300">
            {node.folder}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[.3em] text-white/35 uppercase">
            Files
          </p>

          <div className="mt-3 space-y-2">
            {node.files.map((file) => (
              <div
                key={file}
                className="
                  rounded-lg
                  border
                  border-white/5
                  bg-white/[0.03]
                  px-3
                  py-2
                  font-mono
                  text-sm
                  text-white/70
                "
              >
                {file}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}