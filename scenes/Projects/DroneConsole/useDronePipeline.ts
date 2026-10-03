"use client";

import { useEffect, useMemo, useState } from "react";
import { DRONE_STAGES, stageDurations, stageLogs, DroneStageId } from "./Pipeline";

export type DroneMessage = {
  role: "system" | "assistant";
  text: string;
};

const initialMessages: DroneMessage[] = [
  {
    role: "system",
    text: "SkyCorridor mission control session initialized.",
  },
  {
    role: "assistant",
    text: "Spatial planner connected to the drone fleet.",
  },
];

export default function useDronePipeline() {
  const [running, setRunning] = useState(false);
  const [activeStage, setActiveStage] = useState<DroneStageId | null>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [messages, setMessages] = useState<DroneMessage[]>(initialMessages);

  const stages = useMemo(() => DRONE_STAGES, []);

  useEffect(() => {
    if (!running) return;

    if (stageIndex >= stages.length) {
      setRunning(false);
      setActiveStage(null);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "SkyCorridor deployment complete. Mission control dashboard is live.",
        },
      ]);
      return;
    }

    const stage = stages[stageIndex];
    if (!stage) {
      throw new Error(`The drone pipeline has no stage at index ${stageIndex}.`);
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
