export interface ExecutionStep {
  title: string;
  status: string;
}

export const executionSteps: Record<string, ExecutionStep> = {
  react: {
    title: "React Renderer",
    status: "Rendering application shell...",
  },

  router: {
    title: "React Router",
    status: "Resolving protected route...",
  },

  axios: {
    title: "Axios Client",
    status: "Sending GET /api/movies...",
  },

  express: {
    title: "Express Server",
    status: "Incoming request accepted...",
  },

  routes: {
    title: "API Router",
    status: "Dispatching request...",
  },

  controllers: {
    title: "Controller",
    status: "Validating payload...",
  },

  services: {
    title: "Service Layer",
    status: "Executing business logic...",
  },

  prisma: {
    title: "Prisma ORM",
    status: "Preparing SQL query...",
  },

  postgres: {
    title: "PostgreSQL",
    status: "Returning records...",
  },
};