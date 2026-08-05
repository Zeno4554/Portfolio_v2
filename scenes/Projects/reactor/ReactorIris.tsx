"use client";

import ReactorBlade from "./ReactorBlade";

interface Props {
  accent: string;
}

export default function ReactorIris({
  accent,
}: Props) {
  const BLADE_COUNT = 24;

  return (
    <g data-reactor-iris>

      {/* =======================================================
          OUTER REAR HOUSING
      ======================================================= */}

      <circle
        cx="250"
        cy="250"
        r="112"
        fill="#0A1017"
        stroke="#2E3E50"
        strokeWidth="5"
      />

      {/* Inner Groove */}

      <circle
        cx="250"
        cy="250"
        r="104"
        fill="none"
        stroke="#496175"
        strokeOpacity=".45"
        strokeWidth="2"
      />

      {/* =======================================================
          TURBINE BLADES
      ======================================================= */}

      {Array.from({ length: BLADE_COUNT }).map((_, index) => (
        <ReactorBlade
          key={index}
          accent={accent}
          angle={(360 / BLADE_COUNT) * index}
        />
      ))}

      {/* =======================================================
          FRONT RETAINING RING
      ======================================================= */}

      <circle
        cx="250"
        cy="250"
        r="84"
        fill="none"
        stroke="#BFDFFF"
        strokeOpacity=".18"
        strokeWidth="2"
      />

      <circle
        cx="250"
        cy="250"
        r="78"
        fill="#0C1118"
        stroke="#6A87A4"
        strokeOpacity=".45"
        strokeWidth="2"
      />

      {/* =======================================================
          INNER MECHANICAL HUB
      ======================================================= */}

      <circle
        cx="250"
        cy="250"
        r="56"
        fill="#070B10"
        stroke="#9EDCFF"
        strokeOpacity=".35"
        strokeWidth="1.5"
      />

      {/* Small Engineering Ring */}

      <circle
        cx="250"
        cy="250"
        r="49"
        fill="none"
        stroke="#7FB9E5"
        strokeOpacity=".25"
        strokeWidth="1"
      />

    </g>
  );
}