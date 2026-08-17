import { SkillNodeData } from "./galaxyData";

/**
 * Virtual Galaxy Size
 * Coordinate space for positioning all skill nodes in the 3D constellation.
 */
const SCENE_WIDTH = 1200;
const SCENE_HEIGHT = 950;

export const NODE_SIZE = 64;
export const NODE_RADIUS = NODE_SIZE / 2;

export interface ClusterInfo {
  id: SkillNodeData["category"];
  label: string;
  color: string;
  glowColor: string;
  x: number;
  y: number;
  z: number;
}

export const CATEGORY_CLUSTERS: Record<SkillNodeData["category"], ClusterInfo> = {
  ai: {
    id: "ai",
    label: "ARTIFICIAL INTELLIGENCE",
    color: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.3)",
    x: 50,
    y: 15,
    z: -30,
  },
  frontend: {
    id: "frontend",
    label: "FRONTEND ENGINEERING",
    color: "#22d3ee",
    glowColor: "rgba(34, 211, 238, 0.3)",
    x: 20,
    y: 45,
    z: 20,
  },
  backend: {
    id: "backend",
    label: "BACKEND ARCHITECTURE",
    color: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.3)",
    x: 52,
    y: 52,
    z: 0,
  },
  cloud: {
    id: "cloud",
    label: "CLOUD INFRASTRUCTURE",
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.3)",
    x: 82,
    y: 52,
    z: -20,
  },
  database: {
    id: "database",
    label: "DATA STORAGE",
    color: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.3)",
    x: 50,
    y: 88,
    z: 30,
  },
  iot: {
    id: "iot",
    label: "IOT & HARDWARE",
    color: "#fb923c",
    glowColor: "rgba(251, 146, 60, 0.3)",
    x: 18,
    y: 82,
    z: -25,
  },
};

export function getSkillPosition(node: SkillNodeData) {
  return {
    x: (node.x / 100) * SCENE_WIDTH,
    y: (node.y / 100) * SCENE_HEIGHT,
  };
}

export function getSkillCenter(node: SkillNodeData) {
  const pos = getSkillPosition(node);
  return {
    x: pos.x,
    y: pos.y,
  };
}

export function getGalaxySize() {
  return {
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
  };
}

export function getNodeById(nodes: SkillNodeData[], id: string) {
  return nodes.find((node) => node.id === id);
}