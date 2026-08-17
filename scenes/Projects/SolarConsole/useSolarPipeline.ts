"use client";

import { useEffect, useMemo, useState } from "react";
import {
  SOLAR_STAGES,
  stageDurations,
  stageLogs,
  SolarStageId,
} from "./Pipeline";

export type SolarMessage = {
  role: "system" | "assistant";
  text: string;
};

const initialMessages: SolarMessage[] = [
  {
    role: "system",
    text: "Solar Analytics Engineering Session Initialized.",
  },
  {
    role: "assistant",
    text: "ESP8266 device handshake complete.",
  },
];

export default function useSolarPipeline() {
  const [running, setRunning] = useState(false);
  const [activeStage, setActiveStage] = useState<SolarStageId | null>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [logStage, setLogStage] = useState<SolarStageId | null>(null);
  const [messages, setMessages] = useState<SolarMessage[]>(
    initialMessages
  );

  const stages = useMemo(() => SOLAR_STAGES, []);

  useEffect(() => {
    if (!running) return;

    if (stageIndex >= stages.length) {
      setRunning(false);
      setActiveStage(null);
      setLogStage(null);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Solar energy pipeline complete. Dashboard metrics updated.",
        },
      ]);
      return;
    }

    const stage = stages[stageIndex];
    setActiveStage(stage);
    setLogStage(stage);
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
    setLogStage(null);
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
    setActiveStage(null);
    setLogStage(null);
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
    logStage,
    messages,
    start,
    stop,
    reset,
  };
}
