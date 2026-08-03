"use client";

import { useMagnetic } from "@/animations/hooks/useMagnetic";
import { useCursorStore } from "@/store/useCursorStore";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const ref = useMagnetic<HTMLButtonElement>(0.35);
  const setVariant = useCursorStore((s) => s.setVariant);

  return (
    <button
      ref={ref}
      onPointerEnter={() => setVariant("link")}
      onPointerLeave={() => setVariant("default")}
      className={cn(
        "glass-panel gpu-layer relative rounded-full px-8 py-4 font-body text-sm font-medium text-ink transition-colors duration-300 hover:border-aurora-cyan/40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
