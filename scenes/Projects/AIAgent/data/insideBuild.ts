export interface BuildStage {
  id: string;

  title: string;

  subtitle: string;

  description: string;

  technologies: string[];

  outcome: string;
}

export const insideBuild: BuildStage[] = [
  {
    id: "architecture",

    title: "System Architecture",

    subtitle: "Designing the AI Pipeline",

    description:
      "The project was designed around a modular AI pipeline where every stage has a single responsibility. Requests travel through prompt parsing, memory retrieval, embedding generation, semantic search, context construction, language model inference, tool execution, and finally response streaming.",

    technologies: [
      "React",
      "Next.js",
      "FastAPI",
      "TypeScript",
    ],

    outcome:
      "A scalable architecture that separates UI, orchestration, AI processing, and data retrieval.",
  },

  {
    id: "memory",

    title: "Conversation Memory",

    subtitle: "Maintaining Context",

    description:
      "Instead of treating every prompt independently, the assistant maintains conversation history and selectively retrieves relevant messages to preserve context across interactions.",

    technologies: [
      "LangChain",
      "Conversation Memory",
      "PostgreSQL",
    ],

    outcome:
      "Responses remain consistent and context-aware across multiple conversations.",
  },

  {
    id: "rag",

    title: "Retrieval-Augmented Generation",

    subtitle: "Grounding Responses",

    description:
      "The assistant transforms prompts into embeddings, performs semantic similarity search in a vector database, retrieves the most relevant documents, and injects them into the context before inference.",

    technologies: [
      "Embeddings",
      "ChromaDB",
      "Semantic Search",
    ],

    outcome:
      "More accurate responses by grounding the language model with retrieved knowledge.",
  },

  {
    id: "llm",

    title: "Language Model",

    subtitle: "Reasoning Engine",

    description:
      "After assembling the context window, the request is forwarded to the language model. The model performs reasoning, generates structured responses, and decides when external tools are required.",

    technologies: [
      "Gemini",
      "Prompt Engineering",
      "Context Window",
    ],

    outcome:
      "High-quality responses with structured reasoning and tool awareness.",
  },

  {
    id: "tools",

    title: "Tool Execution",

    subtitle: "Extending the Model",

    description:
      "The assistant can invoke external tools such as search, weather, or calculators. Tool results are fed back into the reasoning pipeline before the final response is streamed.",

    technologies: [
      "Function Calling",
      "REST APIs",
      "Tool Orchestration",
    ],

    outcome:
      "The AI is capable of performing actions beyond text generation.",
  },

  {
    id: "streaming",

    title: "Response Streaming",

    subtitle: "Real-Time Interaction",

    description:
      "Responses are streamed token-by-token to provide immediate feedback. The engineering console simultaneously visualizes each stage of the pipeline as the request progresses.",

    technologies: [
      "Streaming",
      "React",
      "Web APIs",
    ],

    outcome:
      "A responsive conversational experience with transparent execution flow.",
  },
];