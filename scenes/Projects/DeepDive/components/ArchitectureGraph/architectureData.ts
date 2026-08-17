export interface GraphNode {
  id: string;
  title: string;
  layer: "client" | "server" | "database";
  column: "client" | "server" | "database";
  row: number;

  description: string;
  folder: string;
  files: string[];
}

export interface GraphEdge {
  from: string;
  to: string;
}

export const graphNodes: GraphNode[] = [
  // CLIENT
  {
    id: "react",
    title: "React",
    layer: "client",
    column: "client",
    row: 0,
    description:
      "Component based UI library responsible for rendering the OTT platform interface.",
    folder: "client/src",
    files: ["App.tsx", "main.tsx"],
  },

  {
    id: "router",
    title: "Router",
    layer: "client",
    column: "client",
    row: 1,
    description:
      "Handles client side routing between authentication, movies and dashboard pages.",
    folder: "client/src/routes",
    files: ["routes.tsx", "ProtectedRoute.tsx"],
  },

  {
    id: "axios",
    title: "Axios",
    layer: "client",
    column: "client",
    row: 2,
    description:
      "Performs HTTP requests to the Express backend using JWT authentication.",
    folder: "client/src/services",
    files: ["api.ts", "auth.ts"],
  },

  // SERVER
  {
    id: "express",
    title: "Express",
    layer: "server",
    column: "server",
    row: 0,
    description:
      "Main backend server handling middleware, routing and API lifecycle.",
    folder: "server/src",
    files: ["server.ts"],
  },

  {
    id: "routes",
    title: "Routes",
    layer: "server",
    column: "server",
    row: 1,
    description:
      "Defines REST API endpoints and maps them to controllers.",
    folder: "server/src/routes",
    files: [
      "auth.routes.ts",
      "movie.routes.ts",
      "admin.routes.ts",
    ],
  },

  {
    id: "controllers",
    title: "Controllers",
    layer: "server",
    column: "server",
    row: 2,
    description:
      "Receives requests, validates payloads and delegates business logic.",
    folder: "server/src/controllers",
    files: [
      "auth.controller.ts",
      "movie.controller.ts",
      "admin.controller.ts",
    ],
  },

  {
    id: "services",
    title: "Services",
    layer: "server",
    column: "server",
    row: 3,
    description:
      "Contains reusable business logic and database interactions.",
    folder: "server/src/services",
    files: [
      "movie.service.ts",
      "user.service.ts",
      "admin.service.ts",
    ],
  },

  // DATABASE
  {
    id: "prisma",
    title: "Prisma",
    layer: "database",
    column: "database",
    row: 0,
    description:
      "ORM responsible for communicating with PostgreSQL.",
    folder: "server/prisma",
    files: ["schema.prisma"],
  },

  {
    id: "postgres",
    title: "PostgreSQL",
    layer: "database",
    column: "database",
    row: 1,
    description:
      "Persistent relational database storing users, movies and streaming metadata.",
    folder: "Database",
    files: [],
  },
];

export const graphEdges: GraphEdge[] = [
  { from: "react", to: "router" },
  { from: "router", to: "axios" },
  { from: "axios", to: "express" },
  { from: "express", to: "routes" },
  { from: "routes", to: "controllers" },
  { from: "controllers", to: "services" },
  { from: "services", to: "prisma" },
  { from: "prisma", to: "postgres" },
];