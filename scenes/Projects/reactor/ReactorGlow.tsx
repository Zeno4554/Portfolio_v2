"use client";

interface Props {
  accent: string;
}

export default function ReactorGlow({
  accent,
}: Props) {
  return (
    <g data-reactor-glow>

      {/* Huge Ambient */}

      <circle
        cx="250"
        cy="250"
        r="210"
        fill={accent}
        opacity=".08"
        filter="url(#blur40)"
      />

      {/* Mid */}

      <circle
        cx="250"
        cy="250"
        r="155"
        fill={accent}
        opacity=".12"
        filter="url(#blur20)"
      />

      {/* Inner */}

      <circle
        cx="250"
        cy="250"
        r="120"
        fill={accent}
        opacity=".06"
      />

    </g>
  );
}