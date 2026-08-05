export interface SkillNodeData {
  id: string;
  label: string;
  category:
    | "frontend"
    | "backend"
    | "ai"
    | "cloud"
    | "database"
    | "iot";

  x: number;
  y: number;
}

export interface SkillEdgeData {
  from: string;
  to: string;
}

export const skillNodes: SkillNodeData[] = [
  // ---------- FRONTEND ----------
  { id: "react", label: "React", category: "frontend", x: 18, y: 35 },
  { id: "next", label: "Next.js", category: "frontend", x: 10, y: 50 },
  { id: "ts", label: "TypeScript", category: "frontend", x: 24, y: 55 },
  { id: "tailwind", label: "Tailwind", category: "frontend", x: 30, y: 42 },
  { id: "gsap", label: "GSAP", category: "frontend", x: 18, y: 65 },

  // ---------- BACKEND ----------
  { id: "node", label: "Node.js", category: "backend", x: 48, y: 55 },
  { id: "express", label: "Express", category: "backend", x: 55, y: 43 },
  { id: "fastapi", label: "FastAPI", category: "backend", x: 62, y: 58 },
  { id: "rest", label: "REST APIs", category: "backend", x: 52, y: 70 },
  { id: "prisma", label: "Prisma", category: "backend", x: 42, y: 42 },

  // ---------- AI ----------
  { id: "python", label: "Python", category: "ai", x: 52, y: 18 },
  { id: "langchain", label: "LangChain", category: "ai", x: 42, y: 8 },
  { id: "gemini", label: "Gemini", category: "ai", x: 62, y: 8 },
  { id: "tensorflow", label: "TensorFlow", category: "ai", x: 72, y: 18 },
  { id: "pytorch", label: "PyTorch", category: "ai", x: 34, y: 18 },

  // ---------- CLOUD ----------
  { id: "aws", label: "AWS", category: "cloud", x: 82, y: 40 },
  { id: "docker", label: "Docker", category: "cloud", x: 88, y: 55 },
  { id: "supabase", label: "Supabase", category: "cloud", x: 76, y: 58 },
  { id: "render", label: "Render", category: "cloud", x: 84, y: 70 },

  // ---------- DATABASE ----------
  { id: "postgres", label: "PostgreSQL", category: "database", x: 54, y: 88 },
  { id: "mongodb", label: "MongoDB", category: "database", x: 42, y: 94 },

  // ---------- IOT ----------
  { id: "esp", label: "ESP8266", category: "iot", x: 18, y: 88 },
  { id: "awsiot", label: "AWS IoT", category: "iot", x: 10, y: 78 },
  { id: "sensor", label: "Sensors", category: "iot", x: 28, y: 82 },
];

export const skillEdges: SkillEdgeData[] = [
  // Frontend
  { from: "react", to: "next" },
  { from: "react", to: "ts" },
  { from: "react", to: "tailwind" },
  { from: "react", to: "gsap" },

  // Backend
  { from: "node", to: "express" },
  { from: "node", to: "fastapi" },
  { from: "node", to: "rest" },
  { from: "node", to: "prisma" },

  // AI
  { from: "python", to: "langchain" },
  { from: "python", to: "gemini" },
  { from: "python", to: "tensorflow" },
  { from: "python", to: "pytorch" },

  // Cloud
  { from: "aws", to: "docker" },
  { from: "aws", to: "supabase" },
  { from: "aws", to: "render" },

  // Database
  { from: "postgres", to: "mongodb" },

  // IoT
  { from: "esp", to: "sensor" },
  { from: "esp", to: "awsiot" },

  // Cross Connections
  { from: "python", to: "fastapi" },
  { from: "fastapi", to: "postgres" },
  { from: "node", to: "postgres" },
  { from: "docker", to: "node" },
  { from: "docker", to: "python" },
  { from: "awsiot", to: "aws" },
];