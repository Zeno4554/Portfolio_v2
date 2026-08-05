"use client";

interface Props {
  accent: string;
}

export default function ReactorEnergy({
  accent,
}: Props) {
  return (
    <>
      {/* Pulse Wave */}

      <circle
        data-energy-wave
        cx="250"
        cy="250"
        r="78"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity=".45"
      />

      {/* Energy Arc */}

      <circle
        data-energy-arc
        cx="250"
        cy="250"
        r="132"
        fill="none"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="60 400"
      />
    </>
  );
}