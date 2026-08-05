"use client";

import { Section } from "@/components/common/Section";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import useProjectAnimation from "./useProjectAnimation";

export function Projects() {
  useProjectAnimation();

  return (
    <Section
      id="projects"
      index="04"
      label="Selected Work"
      bleed
      className="relative overflow-hidden"
    >
      <div>

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>
    </Section>
  );
}