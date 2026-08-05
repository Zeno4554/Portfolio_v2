"use client";

interface Props {
  accent: string;
}

export default function ArcCore({
  accent,
}: Props) {
  return (
    <g data-reactor-core>

      {/* Core Glow */}

      <circle
        cx="250"
        cy="250"
        r="78"
        fill={accent}
        opacity=".18"
        filter="url(#blur40)"
      />

      <circle
        cx="250"
        cy="250"
        r="56"
        fill={accent}
        opacity=".28"
        filter="url(#blur20)"
      />

      {/* Main Core */}

      <circle
        cx="250"
        cy="250"
        r="42"
        fill={accent}
      />

      {/* Inner Core */}

      <circle
        cx="250"
        cy="250"
        r="18"
        fill="white"
        opacity=".96"
      />

      {/* Highlight */}

      <circle
        cx="242"
        cy="240"
        r="5"
        fill="white"
        opacity=".45"
      />

    </g>
  );
}