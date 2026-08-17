"use client";

interface BlueprintConnectorProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  accent: string;
  active: boolean;
}

export default function BlueprintConnector({
  x1,
  y1,
  x2,
  y2,
  accent,
  active,
}: BlueprintConnectorProps) {
  const gradientId = `gradient-${accent.replace("#", "")}`;

  const dx = Math.abs(x2 - x1) * 0.45;

  const path = `
    M ${x1} ${y1}
    C
      ${x1 + dx} ${y1},
      ${x2 - dx} ${y2},
      ${x2} ${y2}
  `;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="50%" stopColor={accent} />
          <stop offset="80%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        <filter id="connectorGlow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow Path */}
      <path
        d={path}
        stroke={accent}
        strokeWidth="8"
        fill="none"
        opacity={active ? 0.16 : 0.03}
        filter="url(#connectorGlow)"
      />

      {/* Main Path */}
      <path
        data-connector
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={active ? 1 : 0.28}
      />

      {/* Start Node */}
      <circle
        cx={x1}
        cy={y1}
        r="4"
        fill={accent}
        opacity={active ? 1 : 0.45}
      />

      {/* End Node */}
      <circle
        cx={x2}
        cy={y2}
        r="5"
        fill={accent}
        opacity={active ? 1 : 0.35}
      />
    </svg>
  );
}