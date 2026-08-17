export type NodeColumn =
  | "client"
  | "core"
  | "database";

export interface GraphNode {
  id: string;
  title: string;

  column: NodeColumn;
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
    id: "browser",
    title: "Browser",

    column: "client",
    row: 0,

    description:
      "Captures the user's prompt and sends it to the AI backend.",

    folder: "client/app",

    files: [
      "page.tsx",
      "Chat.tsx",
    ],

    input: "User Interaction",

    output: "Prompt",

    latency: "<1 ms",
  },

  {
    id: "parser",
    title: "Prompt Parser",

    column: "core",
    row: 0,

    description:
      "Transforms natural language into a structured request for downstream processing.",

    folder: "server/prompts",

    files: [
      "parser.ts",
      "systemPrompt.ts",
    ],

    input: "Prompt",

    output: "Structured Prompt",

    latency: "2 ms",
  },

  {
    id: "planner",
    title: "Planner",

    column: "core",
    row: 1,

    description:
      "Creates an execution strategy and determines whether memory or tools are required.",

    folder: "server/planner",

    files: [
      "planner.ts",
      "executor.ts",
    ],

    input: "Structured Prompt",

    output: "Execution Plan",

    latency: "4 ms",
  },

  {
    id: "memory",
    title: "Memory",

    column: "core",
    row: 2,

    description:
      "Retrieves previous conversation context and user memory.",

    folder: "server/memory",

    files: [
      "memoryManager.ts",
      "conversationStore.ts",
    ],

    input: "Conversation",

    output: "Context",

    latency: "8 ms",
  },

  {
    id: "embedding",
    title: "Embeddings",

    column: "core",
    row: 3,

    description:
      "Converts the prompt into dense vector embeddings.",

    folder: "server/embeddings",

    files: [
      "embedder.ts",
      "encoder.ts",
    ],

    input: "Structured Prompt",

    output: "Vector",

    latency: "15 ms",
  },

  {
    id: "vector-db",
    title: "Vector DB",

    column: "database",
    row: 1,

    description:
      "Stores and searches semantic vectors for retrieval.",

    folder: "vector-db/indexes",

    files: [
      "chroma.ts",
      "metadata.ts",
    ],

    input: "Embedding",

    output: "Relevant Documents",

    latency: "12 ms",
  },

  {
    id: "retriever",
    title: "Retriever",

    column: "core",
    row: 4,

    description:
      "Ranks and selects the most relevant documents.",

    folder: "server/retriever",

    files: [
      "retriever.ts",
      "ranking.ts",
    ],

    input: "Embedding",

    output: "Top Documents",

    latency: "6 ms",
  },

  {
    id: "context",
    title: "Context",

    column: "core",
    row: 5,

    description:
      "Builds the final context window for the LLM.",

    folder: "server/context",

    files: [
      "builder.ts",
      "window.ts",
    ],

    input: "Retrieved Documents",

    output: "Context Window",

    latency: "5 ms",
  },

  {
    id: "llm",
    title: "LLM",

    column: "core",
    row: 6,

    description:
      "Generates the final response using the language model.",

    folder: "server/agents",

    files: [
      "gemini.ts",
      "agent.ts",
    ],

    input: "Context",

    output: "Tokens",

    latency: "320 ms",
  },

  {
    id: "tools",
    title: "Tools",

    column: "core",
    row: 7,

    description:
      "Executes external tools and APIs requested by the model.",

    folder: "server/tools",

    files: [
      "weather.ts",
      "search.ts",
      "calculator.ts",
    ],

    input: "Tool Call",

    output: "Tool Result",

    latency: "45 ms",
  },

  {
    id: "response",
    title: "Response",

    column: "core",
    row: 8,

    description:
      "Streams generated tokens back to the browser.",

    folder: "client/chat",

    files: [
      "StreamingMessage.tsx",
    ],

    input: "Generated Tokens",

    output: "Rendered UI",

    latency: "Streaming",
  },
];

export const graphEdges: GraphEdge[] = [
  {
    from: "browser",
    to: "parser",
  },

  {
    from: "parser",
    to: "planner",
  },

  {
    from: "planner",
    to: "memory",
  },

  {
    from: "memory",
    to: "embedding",
  },

  {
    from: "embedding",
    to: "vector-db",
  },

  {
    from: "vector-db",
    to: "retriever",
  },

  {
    from: "retriever",
    to: "context",
  },

  {
    from: "context",
    to: "llm",
  },

  {
    from: "llm",
    to: "tools",
  },

  {
    from: "tools",
    to: "response",
  },
];