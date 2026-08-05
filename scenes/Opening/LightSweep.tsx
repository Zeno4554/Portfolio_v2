"use client";

import { forwardRef } from "react";

const LightSweep = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="
        absolute
        inset-y-0
        left-[-45vw]
        w-[28vw]
        -rotate-[12deg]
        pointer-events-none
        will-change-transform
      "
    >
      {/* Core beam */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-cyan-300/20
          to-transparent
          blur-[40px]
        "
      />

      {/* Bright center */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[2px]
          -translate-x-1/2
          bg-cyan-200/70
          blur-sm
        "
      />

      {/* Outer glow */}
      <div
        className="
          absolute
          inset-0
          bg-cyan-400/8
          blur-[120px]
        "
      />
    </div>
  );
});

LightSweep.displayName = "LightSweep";

export default LightSweep;