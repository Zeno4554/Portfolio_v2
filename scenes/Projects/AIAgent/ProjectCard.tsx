"use client";

import { aiProject } from "./data/projectData";

import ProjectHero from "./hero/ProjectHero";

interface Props {
  onOpen: () => void;
}

export default function ProjectCard({
  onOpen,
}: Props) {
  return (
    <article>
      <ProjectHero project={aiProject} />

      <div className="flex justify-center px-6 pb-16">
        <button
          type="button"
          onClick={onOpen}
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Open engineering console
        </button>
      </div>
    </article>
  );
}