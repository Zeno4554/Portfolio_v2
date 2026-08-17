export interface TechStack {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
    | "ai"
    | "tool";
}

export interface FolderNode {
  name: string;
  children?: FolderNode[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type:
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
    | "service"
    | "ai";
}

export interface ArchitectureEdge {
  from: string;
  to: string;
}

export interface ApiRoute {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  description: string;
}

export interface DatabaseTable {
  name: string;
  columns: string[];
}

export interface DeploymentTarget {
  name: string;
  provider: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface DeepDiveProject {
  id: string;

  title: string;

  subtitle: string;

  description: string;

  techStack: TechStack[];

  folderTree: FolderNode[];

  architecture: {
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };

  api: ApiRoute[];

  database: DatabaseTable[];

  deployment: DeploymentTarget[];

  metrics: ProjectMetric[];
}