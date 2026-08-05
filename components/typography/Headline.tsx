"use client";

import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { buildHeadlineReveal } from "@/animations/timelines/headlineReveal";
import { cn } from "@/lib/utils";

interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
}

export function Headline({
  children,
  as = "h2",
  className,
  ...props
}: HeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  const Tag = as;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { timeline, revert } = buildHeadlineReveal(el);

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => timeline.play(),
    });

    return () => {
      trigger.kill();
      timeline.kill();
      revert();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "font-display font-medium leading-[1.05] tracking-tight text-ink",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}