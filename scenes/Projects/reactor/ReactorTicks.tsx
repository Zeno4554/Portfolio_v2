"use client";

interface Props {
  accent: string;
}

export default function ReactorTicks({
  accent,
}: Props) {
  return (
    <g data-reactor-ticks>

      {/* Major Engineering Marks */}

      {Array.from({ length: 24 }).map((_, i) => {

        const angle = i * 15;

        return (
          <g
            key={`major-${i}`}
            transform={`rotate(${angle} 250 250)`}
          >
            <line
              x1="250"
              y1="12"
              x2="250"
              y2="34"
              stroke={accent}
              strokeWidth="2"
              opacity=".85"
            />
          </g>
        );

      })}

      {/* Minor Marks */}

      {Array.from({ length: 96 }).map((_, i) => {

        const angle = i * 3.75;

        return (
          <g
            key={`minor-${i}`}
            transform={`rotate(${angle} 250 250)`}
          >
            <line
              x1="250"
              y1="20"
              x2="250"
              y2="28"
              stroke="white"
              strokeWidth=".8"
              opacity=".18"
            />
          </g>
        );

      })}

      {/* Cardinal Brackets */}

      {[0, 90, 180, 270].map((angle) => (

        <g
          key={angle}
          transform={`rotate(${angle} 250 250)`}
        >

          <path
            d="
              M236 52
              L264 52
              M236 52
              L236 70
              M264 52
              L264 70
            "
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            opacity=".7"
          />

        </g>

      ))}

    </g>
  );
}