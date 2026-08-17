"use client";

import { useState } from "react";

import { Section } from "@/components/common/Section";

import ProjectCard from "./ProjectCard";
import AIConsole from "./console/AIConsole";

import DeepDive from "../DeepDive";

import { aiProject } from "./data/projectData";

import useProjectAnimation from "./hooks/useProjectAnimation";

export default function AIAgent() {
  useProjectAnimation();

  const [consoleOpen, setConsoleOpen] =
    useState(false);

  return (
    <Section
      id="ai-agent"
      index="05"
      label="AI Intelligence System"
      bleed
      className="relative overflow-hidden"
    >
      <ProjectCard
        onOpen={() => setConsoleOpen(true)}
      />

      <DeepDive
        project={aiProject}
        open={consoleOpen}
        onClose={() => setConsoleOpen(false)}
      >
        <AIConsole />
      </DeepDive>
    </Section>
  );
}