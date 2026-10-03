export type DroneStageId =
  | "route-planning"
  | "navigation-core"
  | "mission-api"
  | "spatial-db"
  | "fleet-management"
  | "simulation"
  | "docker";

export const DRONE_STAGES: [DroneStageId, ...DroneStageId[]] = [
  "route-planning",
  "navigation-core",
  "mission-api",
  "spatial-db",
  "fleet-management",
  "simulation",
  "docker",
];

export const stageDurations: Record<DroneStageId, number> = {
  "route-planning": 380,
  "navigation-core": 320,
  "mission-api": 420,
  "spatial-db": 360,
  "fleet-management": 300,
  simulation: 440,
  docker: 260,
};

export const stageLogs: Record<DroneStageId, string> = {
  "route-planning": "Computing optimized urban air corridors and obstacle-aware flight paths.",
  "navigation-core": "Converting planned trajectories into drone guidance commands.",
  "mission-api": "Orchestrating mission state and sending directives to the fleet.",
  "spatial-db": "Persisting corridor geometry and mission telemetry in the spatial database.",
  "fleet-management": "Coordinating drone assignments, availability, and health checks.",
  simulation: "Rendering flight simulations and telemetry playback for operator review.",
  docker: "Deploying services with Docker compose for consistent mission execution.",
};
