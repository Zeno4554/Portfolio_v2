"use client";

import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { buildHeadlineReveal } from "@/animations/timelines/headlineReveal";
import { cn } from "@/lib/utils";

interface HeadlineProps {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Word-staggered scroll-reveal headline. Reverts split DOM on unmount for SEO/a11y. */
export function Headline({ children, as = "h2", className }: HeadlineProps) {
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
      className={cn("font-display font-medium leading-[1.05] tracking-tight text-ink", className)}
    >
      {children}
    </Tag>
  );
}
