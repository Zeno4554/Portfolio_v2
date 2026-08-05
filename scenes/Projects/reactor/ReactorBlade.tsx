"use client";

interface Props {
  accent: string;
  angle: number;
}

export default function ReactorBlade({
  accent,
  angle,
}: Props) {
  return (
    <g
      data-reactor-blade
      transform={`rotate(${angle} 250 250)`}
    >
      {/* Main Blade */}

      <path
        d="
          M242 118
          L258 118
          L272 182
          L250 210
          L228 182
          Z
        "
        fill="rgba(15,15,18,.95)"
        stroke={accent}
        strokeWidth="1"
      />

      {/* Highlight */}

      <path
        d="
          M246 126
          L254 126
          L262 170
          L250 186
          L238 170
          Z
        "
        fill="rgba(255,255,255,.08)"
      />

      {/* Side Screws */}

      <circle
        cx="250"
        cy="132"
        r="1.8"
        fill={accent}
        opacity=".8"
      />

      <circle
        cx="250"
        cy="174"
        r="1.8"
        fill={accent}
        opacity=".8"
      />
    </g>
  );
}