"use client";

import { forwardRef } from "react";

const ScrollCue = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        text-xs
        uppercase
        tracking-[0.4em]
        text-white/40
        will-change-transform
      "
    >
      SCROLL
    </div>
  );
});

ScrollCue.displayName = "ScrollCue";

export default ScrollCue;