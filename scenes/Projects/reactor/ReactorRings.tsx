"use client";

interface Props {
  accent: string;
}

export default function ReactorRings({
  accent,
}: Props) {
  return (
    <>
      {/* OUTER FRAME */}

      <g data-ring-1>

        <circle
          cx="250"
          cy="250"
          r="184"
          fill="none"
          stroke="rgba(255,255,255,.06)"
          strokeWidth="2"
        />

        <circle
          cx="250"
          cy="250"
          r="184"
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeDasharray="40 18"
          strokeLinecap="round"
          opacity=".9"
        />

      </g>

      {/* ENGINEERING RING */}

      <g data-ring-2>

        <circle
          cx="250"
          cy="250"
          r="150"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeDasharray="10 8"
          opacity=".65"
        />

      </g>

      {/* INNER GUIDE */}

      <g data-ring-3>

        <circle
          cx="250"
          cy="250"
          r="118"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="20 12"
          opacity=".12"
        />

      </g>

      {/* CORE HOUSING */}

      <circle
        cx="250"
        cy="250"
        r="86"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity=".85"
      />

      {/* INNER HOUSING */}

      <circle
        cx="250"
        cy="250"
        r="64"
        fill="none"
        stroke="rgba(255,255,255,.12)"
        strokeWidth="1"
      />
    </>
  );
}