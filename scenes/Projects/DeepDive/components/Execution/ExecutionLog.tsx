"use client";

import { useEffect, useRef, useState } from "react";

import {
  executionSteps,
} from "./executionSteps";

import TypewriterText from "./TypewriterText";

interface Props {
  active: string | null;
}

interface LogEntry {
  id: number;
  time: string;
  title: string;
  status: string;
  visible: boolean;
}

export default function ExecutionLog({
  active,
}: Props) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    const step = executionSteps[active];

    if (!step) return;

    const now = new Date();
    const time = now.toLocaleTimeString();

    const entry: LogEntry = {
      id: Date.now(),
      time,
      title: step.title,
      status: step.status,
      visible: false,
    };

    setLogs((prev) => [...prev.slice(-10), entry]);

    setTimeout(() => {
      setLogs((prev) =>
        prev.map((log) =>
          log.id === entry.id
            ? { ...log, visible: true }
            : log
        )
      );
    }, 60);
  }, [active]);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [logs]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs tracking-[.45em] text-cyan-400">
          LIVE EXECUTION
        </p>

        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>

      <div
        ref={scrollRef}
        className="
          mt-6
          flex-1
          min-h-0
          overflow-y-auto
          space-y-3
          pr-2
          font-mono
          text-sm
          touch-auto
          overscroll-contain
        "
      >
        {logs.length === 0 && (
          <p className="text-white/35">
            Waiting for execution...
          </p>
        )}

        {logs.map((log) => (
          <div
            key={log.id}
            className={`
              flex
              items-start
              gap-3
              rounded-xl
              border-l-2
              px-2
              py-2
              transition-all
              duration-300
              ${
                log.visible
                  ? "opacity-100 translate-x-0 border-cyan-400"
                  : "opacity-0 translate-x-2 border-transparent"
              }
            `}
          >
            <div
              className="
                mt-2
                h-2
                w-2
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            <div className="flex-1">
              <div className="flex justify-between">
                <span
                  className="
                    font-mono
                    text-cyan-300
                  "
                >
                  {log.title}
                </span>

                <span
                  className="
                    text-[11px]
                    text-white/30
                  "
                >
                  {log.time}
                </span>
              </div>

              <div
                className="
                  mt-1
                  font-mono
                  text-xs
                  text-white/55
                "
              >
                {log.visible ? (
                  <TypewriterText text={log.status} />
                ) : (
                  log.status
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}