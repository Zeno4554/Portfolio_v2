"use client";

import { aiProject } from "./data/projectData";

import ProjectHero from "./hero/ProjectHero";
import ProjectArchitecture from "../Projects/ProjectArchitecture";

interface Props {
  onOpen: () => void;
}

export default function ProjectCard({
  onOpen,
}: Props) {
  return (
    <article>
      <ProjectHero project={aiProject} />

      <ProjectArchitecture
        project={aiProject}
        onOpen={onOpen}
      />
    </article>
  );
}