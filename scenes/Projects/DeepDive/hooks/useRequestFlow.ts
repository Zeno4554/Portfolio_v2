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
];

export default function useRequestFlow() {
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!running) return;

    let index = 0;

    setActive(FLOW[0]);

    const timer = setInterval(() => {
      index++;

      if (index >= FLOW.length) {
        clearInterval(timer);
        setRunning(false);
        setActive(null);
        return;
      }

      setActive(FLOW[index]);
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