export type RepoNodeType = "folder" | "file";

export interface RepoNode {
  id: string;
  name: string;
  type: RepoNodeType;
  children?: RepoNode[];
}

export const aiRepository: RepoNode[] = [
  // ======================================================
  // CLIENT
  // ======================================================

  {
    id: "client",
    name: "client",
    type: "folder",
    children: [
      {
        id: "app",
        name: "app",
        type: "folder",
        children: [
          {
            id: "page",
            name: "page.tsx",
            type: "file",
          },
          {
            id: "layout",
            name: "layout.tsx",
            type: "file",
          },
        ],
      },

      {
        id: "chat",
        name: "chat",
        type: "folder",
        children: [
          {
            id: "ChatWindow",
            name: "ChatWindow.tsx",
            type: "file",
          },
          {
            id: "StreamingMessage",
            name: "StreamingMessage.tsx",
            type: "file",
          },
        ],
      },

      {
        id: "components",
        name: "components",
        type: "folder",
        children: [
          {
            id: "Message",
            name: "Message.tsx",
            type: "file",
          },
          {
            id: "PromptInput",
            name: "PromptInput.tsx",
            type: "file",
          },
        ],
      },

      {
        id: "hooks",
        name: "hooks",
        type: "folder",
        children: [
          {
            id: "useChat",
            name: "useChat.ts",
            type: "file",
          },
        ],
      },

      {
        id: "lib",
        name: "lib",
        type: "folder",
        children: [
          {
            id: "api",
            name: "api.ts",
            type: "file",
          },
        ],
      },
    ],
  },

  // ======================================================
  // SERVER
  // ======================================================

  {
    id: "server",
    name: "server",
    type: "folder",
    children: [
      {
        id: "parser",
        name: "parser",
        type: "folder",
        children: [
          {
            id: "parserCore",
            name: "parser.ts",
            type: "file",
          },
          {
            id: "systemPrompt",
            name: "systemPrompt.ts",
            type: "file",
          },
        ],
      },

      {
        id: "planner",
        name: "planner",
        type: "folder",
        children: [
          {
            id: "plannerCore",
            name: "planner.ts",
            type: "file",
          },
          {
            id: "executor",
            name: "executor.ts",
            type: "file",
          },
        ],
      },

      {
        id: "memory",
        name: "memory",
        type: "folder",
        children: [
          {
            id: "conversationStore",
            name: "conversationStore.ts",
            type: "file",
          },
          {
            id: "memoryManager",
            name: "memoryManager.ts",
            type: "file",
          },
        ],
      },

      {
        id: "embeddings",
        name: "embeddings",
        type: "folder",
        children: [
          {
            id: "embedder",
            name: "embedder.ts",
            type: "file",
          },
          {
            id: "encoder",
            name: "encoder.ts",
            type: "file",
          },
        ],
      },

      {
        id: "retriever",
        name: "retriever",
        type: "folder",
        children: [
          {
            id: "retrieverCore",
            name: "retriever.ts",
            type: "file",
          },
          {
            id: "ranking",
            name: "ranking.ts",
            type: "file",
          },
        ],
      },

      {
        id: "agents",
        name: "agents",
        type: "folder",
        children: [
          {
            id: "orchestrator",
            name: "orchestrator.ts",
            type: "file",
          },
          {
            id: "router",
            name: "router.ts",
            type: "file",
          },
        ],
      },

      {
        id: "llm",
        name: "llm",
        type: "folder",
        children: [
          {
            id: "gemini",
            name: "gemini.ts",
            type: "file",
          },
        ],
      },

      {
        id: "tools",
        name: "tools",
        type: "folder",
        children: [
          {
            id: "search",
            name: "search.ts",
            type: "file",
          },
          {
            id: "calculator",
            name: "calculator.ts",
            type: "file",
          },
          {
            id: "weather",
            name: "weather.ts",
            type: "file",
          },
        ],
      },

      {
        id: "routes",
        name: "routes",
        type: "folder",
        children: [
          {
            id: "chatRoute",
            name: "chat.ts",
            type: "file",
          },
        ],
      },

      {
        id: "config",
        name: "config",
        type: "folder",
        children: [
          {
            id: "env",
            name: "env.ts",
            type: "file",
          },
          {
            id: "constants",
            name: "constants.ts",
            type: "file",
          },
        ],
      },

      {
        id: "utils",
        name: "utils",
        type: "folder",
        children: [
          {
            id: "logger",
            name: "logger.ts",
            type: "file",
          },
        ],
      },
    ],
  },

  // ======================================================
  // DATABASE
  // ======================================================

  {
    id: "database",
    name: "database",
    type: "folder",
    children: [
      {
        id: "session",
        name: "session.ts",
        type: "file",
      },
    ],
  },

  // ======================================================
  // VECTOR DATABASE
  // ======================================================

  {
    id: "vector-db",
    name: "vector-db",
    type: "folder",
    children: [
      {
        id: "indexes",
        name: "indexes",
        type: "folder",
        children: [
          {
            id: "mainIndex",
            name: "main.index",
            type: "file",
          },
        ],
      },

      {
        id: "metadata",
        name: "metadata",
        type: "folder",
        children: [
          {
            id: "metadataFile",
            name: "metadata.json",
            type: "file",
          },
        ],
      },

      {
        id: "cache",
        name: "cache",
        type: "folder",
        children: [
          {
            id: "cacheFile",
            name: "cache.db",
            type: "file",
          },
        ],
      },
    ],
  },
];