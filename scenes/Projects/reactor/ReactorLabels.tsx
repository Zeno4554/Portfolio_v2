"use client";

interface Props {
  accent: string;
}

export default function ReactorLabels({
  accent,
}: Props) {
  return (
    <>
      <text
        x="250"
        y="54"
        textAnchor="middle"
        fill={accent}
        fontSize="10"
        letterSpacing="3"
        fontFamily="monospace"
      >
        ARC CORE
      </text>

      <text
        x="250"
        y="470"
        textAnchor="middle"
        fill="white"
        opacity=".5"
        fontSize="9"
        letterSpacing="3"
        fontFamily="monospace"
      >
        SYSTEM ONLINE
      </text>

      <text
        x="60"
        y="250"
        fill={accent}
        fontSize="9"
        fontFamily="monospace"
      >
        PWR
      </text>

      <text
        x="418"
        y="250"
        fill={accent}
        fontSize="9"
        fontFamily="monospace"
      >
        SYNC
      </text>
    </>
  );
}