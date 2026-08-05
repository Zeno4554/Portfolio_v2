"use client";

interface Props {
  accent: string;
}

export default function BlueprintGrid({
  accent,
}: Props) {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-[30px]
      "
    >
      {/* ======================================
          Base Blueprint Grid
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, ${accent}22 1px, transparent 1px),
            linear-gradient(to bottom, ${accent}22 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ======================================
          Secondary Fine Grid
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
        }}
      />

      {/* ======================================
          Center Crosshair
      ====================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-white/15
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          -translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
        "
      />

      {/* ======================================
          Corner Brackets
      ====================================== */}

      {[
        "left-6 top-6",
        "right-6 top-6",
        "left-6 bottom-6",
        "right-6 bottom-6",
      ].map((pos) => (
        <div
          key={pos}
          className={`absolute ${pos} h-8 w-8`}
        >
          <div
            className="absolute inset-0 border-l border-t"
            style={{
              borderColor: accent,
            }}
          />
        </div>
      ))}

      {/* ======================================
          Scan Line
      ====================================== */}

      <div
        data-blueprint-scan
        className="absolute left-0 top-0 h-[2px] w-full"
        style={{
          background: accent,
          boxShadow: `0 0 20px ${accent}`,
        }}
      />

      {/* ======================================
          Noise Overlay
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-screen
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
    </div>
  );
}