"use client";

import ReactorBlade from "./ReactorBlade";

interface Props {
  accent: string;
}

export default function ReactorIris({
  accent,
}: Props) {
  return (
    <g data-reactor-iris>

      {/* Outer Iris Ring */}

      <circle
        cx="250"
        cy="250"
        r="96"
        fill="none"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="2"
      />

      {/* Blades */}

      {Array.from({ length: 8 }).map((_, index) => (
        <ReactorBlade
          key={index}
          accent={accent}
          angle={index * 45}
        />
      ))}

      {/* Inner Housing */}

      <circle
        cx="250"
        cy="250"
        r="62"
        fill="rgba(8,8,10,.95)"
        stroke={accent}
        strokeWidth="1.5"
      />
    </g>
  );
}