import type { StageId } from "../hooks/usePipeline";

export const STAGES: StageId[] = [
  "browser",
  "parser",
  "planner",
  "memory",
  "embedding",
  "vector-db",
  "retriever",
  "context",
  "llm",
  "tools",
  "response",
];

export const stageDurations: Record<StageId, number> = {
  browser: 1600,
  parser: 1600,
  planner: 1800,
  memory: 1800,
  embedding: 1800,
  "vector-db": 1800,
  retriever: 1800,
  context: 1800,
  llm: 2200,
  tools: 1800,
  response: 1400,
};

const edgeMap: Record<StageId, string[]> = {
  browser: ["browser-parser"],
  parser: ["parser-planner"],
  planner: ["planner-memory"],
  memory: ["memory-embedding"],
  embedding: ["embedding-vector-db"],
  "vector-db": ["vector-db-retriever"],
  retriever: ["retriever-context"],
  context: ["context-llm"],
  llm: ["llm-tools"],
  tools: ["tools-response"],
  response: [],
};

export function getActiveEdgeIds(stage: StageId | null) {
  if (!stage) return [];
  return edgeMap[stage] ?? [];
}

export const STAGE_FOLDER_MAP: Record<StageId, string> = {
  browser: "client/app",
  parser: "server/prompts",
  planner: "server/planner",
  memory: "server/memory",
  embedding: "server/embeddings",
  "vector-db": "vector-db/indexes",
  retriever: "server/retriever",
  context: "server/context",
  llm: "server/agents",
  tools: "server/tools",
  response: "client/chat",
};

export function getFolderForStage(stage: StageId | null) {
  if (!stage) return null;
  return STAGE_FOLDER_MAP[stage] ?? null;
}
