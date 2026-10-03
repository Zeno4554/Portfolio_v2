"use client";

import { useEffect, useState } from "react";

const FLOW = [
  "react",
  "router",
  "axios",
  "express",
  "routes",
  "controllers",
  "services",
  "prisma",
  "postgres",
] as const;

export default function useRequestFlow() {
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!running) return;

    let index = 0;

    const firstStage = FLOW[0];
    if (!firstStage) {
      throw new Error("The project request flow must include at least one stage.");
    }
    setActive(firstStage);

    const timer = setInterval(() => {
      index++;

      if (index >= FLOW.length) {
        clearInterval(timer);
        setRunning(false);
        setActive(null);
        return;
      }

      const stage = FLOW[index];
      if (!stage) {
        throw new Error(`The project request flow has no stage at index ${index}.`);
      }
      setActive(stage);
    }, 650);

    return () => clearInterval(timer);
  }, [running]);

  return {
    running,
    active,
    start: () => {
      if (running) return;
      setRunning(true);
    },
  };
}