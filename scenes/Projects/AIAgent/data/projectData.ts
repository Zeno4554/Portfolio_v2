export interface Technology {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "AI"
    | "Database"
    | "Cloud"
    | "DevOps";
}

export interface ProjectData {
  id: string;

  title: string;

  tagline: string;

  subtitle: string;

  description: string;

  status:
    | "Completed"
    | "Production"
    | "In Development";

  year: string;

  role: string;

  duration: string;

  github: string;

  demo: string;

  heroImage: string;

  accent: string;

  fullTitle: string;

  technologies: Technology[];

  highlights: string[];

  metrics: {
    latency: string;
    contextWindow: string;
    embeddingModel: string;
    llm: string;
  };
}

export const projectData: ProjectData = {
  id: "ai-agent",

  title: "AI Assistant",

  tagline:
    "Production-Grade Conversational AI Platform",

  subtitle:
    "An intelligent AI assistant powered by Retrieval-Augmented Generation (RAG), long-term memory, semantic search, and tool execution.",

  description:
    "This project demonstrates the complete lifecycle of a modern AI assistant—from prompt parsing and memory retrieval to vector search, context construction, LLM inference, external tool execution, and real-time response streaming. The engineering console visualizes each stage of the request pipeline to make the internal architecture transparent and interactive.",

  status: "In Development",

  year: "2026",

  role: "Full Stack AI Engineer",

  duration: "Ongoing",

  github: "#",

  demo: "#",

  heroImage: "/projects/ai-agent/hero.webp",

  accent: "#8B5CF6",

  fullTitle: "AI Assistant",

  technologies: [
    {
      name: "React",
      category: "Frontend",
    },
    {
      name: "Next.js",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      category: "Frontend",
    },
    {
      name: "FastAPI",
      category: "Backend",
    },
    {
      name: "Python",
      category: "Backend",
    },
    {
      name: "LangChain",
      category: "AI",
    },
    {
      name: "Gemini",
      category: "AI",
    },
    {
      name: "PostgreSQL",
      category: "Database",
    },
    {
      name: "ChromaDB",
      category: "Database",
    },
    {
      name: "Docker",
      category: "DevOps",
    },
  ],

  highlights: [
    "Retrieval-Augmented Generation (RAG)",
    "Conversation Memory",
    "Semantic Vector Search",
    "Streaming Responses",
    "Tool Calling",
    "Prompt Engineering",
    "Context Window Construction",
    "Interactive Engineering Console",
  ],

  metrics: {
    latency: "< 600 ms",

    contextWindow: "128K Tokens",

    embeddingModel: "Gemini Embeddings",

    llm: "Gemini 2.5",
  },
};

export const aiProject = projectData;