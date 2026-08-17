export interface GraphNode {
  id: string;
  title: string;
  layer: "source" | "edge" | "cloud" | "analytics" | "dashboard";
  column: "source" | "edge" | "cloud" | "analytics" | "dashboard";
  row: number;

  description: string;
  folder: string;
  files: string[];
  input: string;
  output: string;
  latency: string;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export const graphNodes: GraphNode[] = [
  {
    id: "route-planning",
    title: "Route Planning",
    layer: "source",
    column: "source",
    row: 0,
    description:
      "A geospatial path planner computes optimized air corridors, altitude-safe waypoints, and collision-free drone routes.",
    folder: "pathfinding",
    files: ["planner.py", "grid_map.geojson"],
    input: "Urban airspace constraints",
    output: "Flight corridor plan",
    latency: "120ms",
  },
  {
    id: "navigation-core",
    title: "Navigation Core",
    layer: "edge",
    column: "edge",
    row: 0,
    description:
      "In-flight navigation services maintain real-time guidance, sensor fusion, and route correction during autonomous missions.",
    folder: "api",
    files: ["navigation_service.py", "route_engine.py"],
    input: "Planned trajectories",
    output: "Waypoint commands",
    latency: "80ms",
  },
  {
    id: "mission-api",
    title: "Mission API",
    layer: "cloud",
    column: "cloud",
    row: 0,
    description:
      "FastAPI mission orchestration exposes fleet control endpoints, mission scheduling, and telemetry ingestion for the platform.",
    folder: "api",
    files: ["main.py", "schemas.py", "mission_router.py"],
    input: "Fleet requests",
    output: "Mission directives",
    latency: "220ms",
  },
  {
    id: "spatial-db",
    title: "Spatial DB",
    layer: "cloud",
    column: "cloud",
    row: 1,
    description:
      "A geospatial database stores air corridors, mission waypoints, and telemetry history for route validation and analytics.",
    folder: "spatial-db",
    files: ["schema.sql", "postgis_setup.sql"],
    input: "Mission data",
    output: "Spatial queries",
    latency: "200-280ms",
  },
  {
    id: "fleet-management",
    title: "Fleet Management",
    layer: "analytics",
    column: "analytics",
    row: 0,
    description:
      "Fleet services coordinate drone assignments, availability, and status reporting for secure urban delivery operations.",
    folder: "fleet",
    files: ["fleet_manager.py", "health_monitor.py"],
    input: "Mission state",
    output: "Dispatch decisions",
    latency: "300ms",
  },
  {
    id: "simulation",
    title: "Simulation",
    layer: "dashboard",
    column: "dashboard",
    row: 0,
    description:
      "A Streamlit visualization surface renders 3D flight corridors, telemetry playback, and mission outcomes for operator review.",
    folder: "simulation",
    files: ["app.py", "flight_viewer.py"],
    input: "Mission telemetry",
    output: "Simulation insights",
    latency: "Realtime",
  },
  {
    id: "docker",
    title: "Docker Orchestration",
    layer: "dashboard",
    column: "dashboard",
    row: 1,
    description:
      "Containerized deployment with compose manifests keeps mission services, API endpoints, and the simulation in a reproducible environment.",
    folder: "docker",
    files: ["docker-compose.yml", "Dockerfile"],
    input: "Service definitions",
    output: "Running platform stack",
    latency: "N/A",
  },
];

export const graphEdges: GraphEdge[] = [
  { from: "route-planning", to: "navigation-core" },
  { from: "navigation-core", to: "mission-api" },
  { from: "mission-api", to: "spatial-db" },
  { from: "spatial-db", to: "fleet-management" },
  { from: "fleet-management", to: "simulation" },
  { from: "simulation", to: "docker" },
];
