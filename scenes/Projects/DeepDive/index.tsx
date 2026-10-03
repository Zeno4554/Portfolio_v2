"use client";

import { ReactNode } from "react";

import { Project } from "../projectsData";
import { ProjectData } from "../AIAgent/data/projectData";

import DeepDiveOverlay from "./components/DeepDiveOverlay";

export type DeepDiveProject = Project | ProjectData;

interface Props {
  project: DeepDiveProject | null;
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function DeepDive({
  project,
  open,
  onClose,
  children,
}: Props) {
  return (
    <DeepDiveOverlay
      project={project}
      open={open}
      onClose={onClose}
    >
      {children}
    </DeepDiveOverlay>
  );
}