"use client";

interface Props {
  title: string;
  subtitle: string;
  accent: string;

  x: string;
  y: string;
}

export default function BlueprintNode({
  title,
  subtitle,
  accent,
  x,
  y,
}: Props) {
  return (
    <div
      data-blueprint-node
      className="absolute"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%,-50%)",
      }}
    >
      {/* Glow */}

      <div
        className="absolute inset-0 rounded-2xl blur-xl"
        style={{
          background: accent,
          opacity: .12,
        }}
      />

      {/* Main Module */}

      <div
        className="
          relative
          w-[170px]
          rounded-2xl
          border
          border-white/10
          bg-black/40
          backdrop-blur-xl
          px-5
          py-4
        "
      >

        {/* Status */}

        <div className="flex items-center gap-3">

          <div
            data-module-status
            className="h-2 w-2 rounded-full"
            style={{
              background: accent,
            }}
          />

          <span
            className="font-mono text-[10px] tracking-[.3em]"
            style={{
              color: accent,
            }}
          >
            ONLINE
          </span>

        </div>

        {/* Title */}

        <h4
          className="
            mt-4
            text-lg
            font-bold
            uppercase
            text-white
          "
        >
          {title}
        </h4>

        {/* Subtitle */}

        <p
          className="
            mt-2
            text-sm
            text-white/60
          "
        >
          {subtitle}
        </p>

        {/* Bottom Indicator */}

        <div
          className="mt-5 h-[2px] w-full rounded-full"
          style={{
            background: accent,
          }}
        />

      </div>

    </div>
  );
}