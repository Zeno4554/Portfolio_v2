import type { ComponentType } from "react";

import { Project } from "../projectsData";

import EngineeringConsole from "./sections/EngineeringConsole";
import AIConsole from "../AIAgent/console/AIConsole";
import SolarConsole from "../SolarConsole/SolarConsole";
import DroneConsole from "../DroneConsole";
import EcommerceConsole from "../EcommerceConsole/EcommerceConsole";

type ConsoleProps = {
  project: Project;
};

type ConsoleComponent = ComponentType<ConsoleProps>;

const consoleRegistry: Record<string, ConsoleComponent> = {
  ott: EngineeringConsole,
  "ai-agent": function AIConsoleWrapper(_props: ConsoleProps) {
    return <AIConsole />;
  },
  query: function QueryConsoleWrapper(_props: ConsoleProps) {
    return <AIConsole />;
  },
  solar: function SolarConsoleWrapper(_props: ConsoleProps) {
    return <SolarConsole />;
  },
  drone: function DroneConsoleWrapper(_props: ConsoleProps) {
    return <DroneConsole />;
  },
  ecommerce: function EcommerceConsoleWrapper(_props: ConsoleProps) {
    return <EcommerceConsole />;
  },
};

export function resolveConsoleComponent(project: Project | null) {
  if (!project) return null;

  return consoleRegistry[project.id] ?? EngineeringConsole;
}
