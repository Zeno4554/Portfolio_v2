"use client";

interface Props {
  accent: string;
}

export default function ReactorOrbit({
  accent,
}: Props) {

  const radius = 176;

  return (

    <g>

      {/* Orbit Guide */}

      <circle
        cx="250"
        cy="250"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,.08)"
        strokeDasharray="5 12"
      />

      {Array.from({ length: 10 }).map((_, index) => {

        const angle = index * 36;

        const rad = angle * Math.PI / 180;

        const x =
          250 + Math.cos(rad) * radius;

        const y =
          250 + Math.sin(rad) * radius;

        return (

          <g key={index}>

            {/* Glow */}

            <circle
              cx={x}
              cy={y}
              r="10"
              fill={accent}
              opacity=".15"
              filter="url(#blur20)"
            />

            {/* Core */}

            <circle
              data-orbit-dot
              cx={x}
              cy={y}
              r="4"
              fill={accent}
            />

            {/* Ring */}

            <circle
              cx={x}
              cy={y}
              r="8"
              fill="none"
              stroke={accent}
              strokeWidth="1"
              opacity=".28"
            />

          </g>

        );

      })}

    </g>

  );

}