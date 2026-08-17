"use client";

import { useState } from "react";

import { Section } from "@/components/common/Section";

import { projects, Project } from "./projectsData";

import ProjectCard from "./ProjectCard";
import useProjectAnimation from "./useProjectAnimation";
import DeepDive from "./DeepDive";

export function Projects() {
  useProjectAnimation();

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [consoleOpen, setConsoleOpen] =
    useState(false);

  const openConsole = (project: Project) => {
    // Force a fresh lifecycle every time
    setConsoleOpen(false);
    setSelectedProject(null);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSelectedProject(project);
        setConsoleOpen(true);
      });
    });
  };

  const closeConsole = () => {
    setConsoleOpen(false);

    // Wait until the close animation finishes
    setTimeout(() => {
      setSelectedProject(null);
    }, 700);
  };

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
            onOpen={() => openConsole(project)}
          />
        ))}
      </div>

      <DeepDive
        key={selectedProject?.id ?? "closed"}
        project={selectedProject}
        open={consoleOpen}
        onClose={closeConsole}
      />
    </Section>
  );
}