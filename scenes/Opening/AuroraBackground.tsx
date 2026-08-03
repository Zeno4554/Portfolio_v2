"use client";

/**
 * Three soft radial-gradient blobs, animated via CSS transform only (no
 * layout properties) so this runs on the compositor thread at 60fps
 * regardless of main-thread load from ScrollTrigger elsewhere on the page.
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] animate-[aurora-drift-1_18s_ease-in-out_infinite] rounded-full bg-aurora-violet/25 blur-[120px]" />
      <div className="absolute -right-40 top-20 h-[500px] w-[500px] animate-[aurora-drift-2_22s_ease-in-out_infinite] rounded-full bg-aurora-cyan/20 blur-[120px]" />
      <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] animate-[aurora-drift-3_25s_ease-in-out_infinite] rounded-full bg-aurora-magenta/15 blur-[120px]" />
      <style>{`
        @keyframes aurora-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.1); }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 60px) scale(1.05); }
        }
        @keyframes aurora-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -50px) scale(1.15); }
        }
      `}</style>
    </div>
  );
}
