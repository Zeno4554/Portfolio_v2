"use client";

import { Project } from "./projectsData";

import ProjectHero from "./ProjectHero";
import ProjectArchitecture from "./ProjectArchitecture";

interface Props {
  project: Project;
  onOpen: () => void;
}

export default function ProjectCard({
  project,
  onOpen,
}: Props) {
  return (
    <article>

      <ProjectHero project={project} />

      <ProjectArchitecture
        project={project}
        onOpen={onOpen}
      />

    </article>
  );
}