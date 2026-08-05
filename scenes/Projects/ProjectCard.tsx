"use client";

import { Project } from "./projectsData";
import ProjectHero from "./ProjectHero";
import ProjectArchitecture from "./ProjectArchitecture";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article>

      <ProjectHero project={project} />

      <ProjectArchitecture
        project={project}
      />

    </article>
  );
}