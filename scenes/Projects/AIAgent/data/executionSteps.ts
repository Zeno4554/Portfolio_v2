export interface ExecutionEntry {
  title: string;
  status: string;
}

export const executionSteps: Record<string, ExecutionEntry[]> = {
  browser: [
    {
      title: "Browser",
      status: "User submitted a prompt.",
    },
    {
      title: "Input Validation",
      status: "Checking prompt length and formatting.",
    },
    {
      title: "Request",
      status: "Sending request to AI backend.",
    },
  ],

  parser: [
    {
      title: "Prompt Parser",
      status: "Receiving raw natural language.",
    },
    {
      title: "Intent Detection",
      status: "Extracting user intent.",
    },
    {
      title: "Prompt Builder",
      status:
        "Injecting system instructions and formatting prompt.",
    },
  ],

  planner: [
    {
      title: "Planner",
      status: "Analyzing the user's objective.",
    },
    {
      title: "Execution Plan",
      status: "Generating a multi-step execution strategy.",
    },
    {
      title: "Task Graph",
      status: "Preparing downstream pipeline.",
    },
  ],

  memory: [
    {
      title: "Conversation Memory",
      status: "Loading previous conversation.",
    },
    {
      title: "Memory Search",
      status:
        "Searching relevant chat history.",
    },
    {
      title: "Memory Context",
      status:
        "Preparing conversation context.",
    },
  ],

  embedding: [
    {
      title: "Embedding Model",
      status:
        "Encoding prompt into dense vectors.",
    },
    {
      title: "Vector Generation",
      status:
        "Embedding successfully generated.",
    },
  ],

  "vector-db": [
    {
      title: "Vector Database",
      status:
        "Searching semantic index.",
    },
    {
      title: "Similarity Search",
      status:
        "Ranking nearest neighbours.",
    },
    {
      title: "Results",
      status:
        "Returning relevant knowledge chunks.",
    },
  ],

  retriever: [
    {
      title: "Retriever",
      status:
        "Scoring retrieved documents.",
    },
    {
      title: "Ranking",
      status:
        "Selecting highest relevance context.",
    },
  ],

  context: [
    {
      title: "Context Builder",
      status:
        "Merging memory with retrieved documents.",
    },
    {
      title: "Context Window",
      status:
        "Preparing final LLM context.",
    },
  ],

  llm: [
    {
      title: "LLM",
      status: "Sending enriched context to Gemini.",
    },
    {
      title: "Reasoning",
      status: "Analyzing instructions and retrieved knowledge.",
    },
    {
      title: "Generation",
      status: "Generating structured response tokens.",
    },
  ],

  tools: [
    {
      title: "Tool Router",
      status: "Selecting required external tools.",
    },
    {
      title: "Tool Execution",
      status: "Executing search, calculator, or API requests.",
    },
    {
      title: "Tool Response",
      status: "Returning structured tool output.",
    },
  ],

  response: [
    {
      title: "Streaming",
      status: "Streaming response tokens to the client.",
    },
    {
      title: "Renderer",
      status: "Rendering markdown and rich UI components.",
    },
    {
      title: "Conversation",
      status: "Updating conversation history.",
    },
  ],
};