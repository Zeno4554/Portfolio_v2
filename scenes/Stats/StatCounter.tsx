"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function StatCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const counter = { n: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration: 1.6,
        ease: "cinematicOut",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(counter.n).toLocaleString() + suffix;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className="font-display text-5xl font-medium text-ink">
      0{suffix}
    </span>
  );
}
