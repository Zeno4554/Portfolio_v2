"use client";

import { useEffect, useMemo, useState } from "react";
import { STAGES, stageDurations } from "../lib/pipelineAnimation";
import { useConversation } from "./useConversation";

export type StageId =
  | "browser"
  | "parser"
  | "planner"
  | "memory"
  | "embedding"
  | "vector-db"
  | "retriever"
  | "context"
  | "llm"
  | "tools"
  | "response";

interface UsePipelineResult {
  stages: StageId[];
  activeStage: StageId | null;
  running: boolean;
  logStage: StageId | null;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

const initialMessages = [
  {
    role: "system" as const,
    text: "AI Engineering Session Initialized",
  },
  {
    role: "system" as const,
    text: "Loading architecture modules...",
  },
  {
    role: "assistant" as const,
    text: "Memory subsystem connected.",
  },
];

export default function usePipeline() {
  const [running, setRunning] = useState(false);
  const [activeStage, setActiveStage] = useState<StageId | null>(null);
  const [logStage, setLogStage] = useState<StageId | null>(null);
  const [stageIndex, setStageIndex] = useState<number>(0);

  const [prompt, setPrompt] = useState(
    "Build me a production-ready AI assistant with memory, Retrieval-Augmented Generation, tool calling, streaming responses, and long-term conversation context."
  );

  const conversation = useConversation();
  const { append } = conversation;

  const stages = useMemo(() => STAGES, []);

  useEffect(() => {
    if (!running) return;

    if (stageIndex >= stages.length) {
      setRunning(false);
      setActiveStage(null);
      setLogStage(null);

      append({
        role: "assistant",
        text: "Execution complete. Response delivered successfully.",
      });

      return;
    }

    const stage = stages[stageIndex];

    // Strict TypeScript can treat indexed array access as undefined.
    // Guard it without changing the normal pipeline behavior.
    if (!stage) {
      setRunning(false);
      setActiveStage(null);
      setLogStage(null);
      return;
    }

    setActiveStage(stage);
    setLogStage(stage);

    append({
      role: "assistant",
      text: `Executing stage: ${stage.replace("-", " ")}.`,
    });

    const timer = window.setTimeout(() => {
      setStageIndex((current) => current + 1);
    }, stageDurations[stage]);

    return () => window.clearTimeout(timer);
  }, [running, stageIndex, stages, append]);

  const stop = () => {
    setRunning(false);
    setActiveStage(null);
    setLogStage(null);
    setStageIndex(0);
  };

  const resetPipeline = () => {
    stop();
    conversation.reset(initialMessages);
  };

  const start = () => {
    if (running) return;

    conversation.reset(initialMessages);
    setStageIndex(0);
    setActiveStage(null);
    setLogStage(null);
    setRunning(true);
  };

  return {
    stages,
    activeStage,
    running,
    logStage,
    prompt,
    setPrompt,
    messages: conversation.messages,
    start,
    stop,
    reset: resetPipeline,
  } as UsePipelineResult & {
    prompt: string;
    setPrompt: (value: string) => void;
    messages: readonly {
      role: "system" | "user" | "assistant";
      text: string;
    }[];
  };
}