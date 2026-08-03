import type { SkillNode } from "@/types/content";

export const skills: SkillNode[] = [
  { id: "pytorch", label: "PyTorch", category: "ai", proficiency: 0.9 },
  { id: "llm-systems", label: "LLM Systems", category: "ai", proficiency: 0.85 },
  { id: "node", label: "Node.js", category: "backend", proficiency: 0.95 },
  { id: "postgres", label: "PostgreSQL", category: "backend", proficiency: 0.85 },
  { id: "react", label: "React", category: "frontend", proficiency: 0.9 },
  { id: "threejs", label: "Three.js", category: "frontend", proficiency: 0.75 },
  { id: "aws", label: "AWS", category: "cloud", proficiency: 0.85 },
  { id: "kubernetes", label: "Kubernetes", category: "cloud", proficiency: 0.8 },
  { id: "distributed-systems", label: "Distributed Systems", category: "systems", proficiency: 0.8 },
];
