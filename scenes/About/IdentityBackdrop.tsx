"use client";

import { useParallax } from "@/animations/hooks/useParallax";

export function IdentityBackdrop() {
  const farLayer = useParallax<HTMLDivElement>(0.2);
  const nearLayer = useParallax<HTMLDivElement>(0.5);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        ref={farLayer}
        className="absolute left-1/2 top-0 h-[120%] w-[120%] -translate-x-1/2 rounded-full bg-aurora-violet/10 blur-[140px]"
      />
      <div
        ref={nearLayer}
        className="absolute right-0 top-1/4 h-[50%] w-[50%] rounded-full bg-aurora-cyan/10 blur-[100px]"
      />
    </div>
  );
}
