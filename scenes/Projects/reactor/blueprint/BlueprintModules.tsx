"use client";

import { Project } from "../projectsData";
import BlueprintNode from "./BlueprintNode";

interface Props {
  project: Project;
  accent: string;
}

export default function BlueprintModules({
  project,
  accent,
}: Props) {
  const positions = [
    { x: "50%", y: "14%" }, // Top
    { x: "86%", y: "42%" }, // Right
    { x: "50%", y: "82%" }, // Bottom
    { x: "14%", y: "42%" }, // Left
  ];

  return (
    <>
      {project.insideBuild.map((module, index) => (
        <BlueprintNode
          key={module.id}
          title={module.title}
          subtitle={module.tech}
          accent={accent}
          x={positions[index]?.x ?? "50%"}
          y={positions[index]?.y ?? "50%"}
        />
      ))}
    </>
  );
}