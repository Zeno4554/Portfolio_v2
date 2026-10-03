"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ECOMMERCE_STAGES,
  stageDurations,
  stageLogs,
  EcommerceStageId,
} from "./Pipeline";

export type EcommerceMessage = {
  role: "system" | "assistant";
  text: string;
};

const initialMessages: EcommerceMessage[] = [
  {
    role: "system",
    text: "E-Commerce engineering session initialized.",
  },
  {
    role: "assistant",
    text: "React storefront has mounted and is waiting for user interaction.",
  },
];

export default function useEcommercePipeline() {
  const [running, setRunning] = useState(false);
  const [activeStage, setActiveStage] = useState<EcommerceStageId | null>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [messages, setMessages] = useState<EcommerceMessage[]>(initialMessages);

  const stages = useMemo(() => ECOMMERCE_STAGES, []);

  useEffect(() => {
    if (!running) return;

    if (stageIndex >= stages.length) {
      setRunning(false);
      setActiveStage(null);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Order completed successfully and confirmation returned to the storefront.",
        },
      ]);
      return;
    }

    const stage = stages[stageIndex];
    if (!stage) {
      throw new Error(`The ecommerce pipeline has no stage at index ${stageIndex}.`);
    }
    setActiveStage(stage);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: `Executing ${stageLogs[stage]}`,
      },
    ]);

    const timer = window.setTimeout(() => {
      setStageIndex((current) => current + 1);
    }, stageDurations[stage]);

    return () => window.clearTimeout(timer);
  }, [running, stageIndex, stages]);

  const start = () => {
    if (running) return;
    setMessages(initialMessages);
    setStageIndex(0);
    setActiveStage(null);
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
    setActiveStage(null);
    setStageIndex(0);
  };

  const reset = () => {
    stop();
    setMessages(initialMessages);
  };

  return {
    stages,
    activeStage,
    running,
    messages,
    start,
    stop,
    reset,
  };
}
