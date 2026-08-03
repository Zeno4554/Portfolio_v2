"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ScrollCue() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 0,
        y: 20,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] text-ink-faint">SCROLL</span>
      <div className="h-10 w-px bg-gradient-to-b from-ink-faint to-transparent" />
    </div>
  );
}
