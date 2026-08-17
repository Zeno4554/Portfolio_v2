"use client";

interface Props {
  accent: string;
}

export default function ReactorRings({
  accent,
}: Props) {
  return (
    <>
      {/* ==========================================================
          OUTER ENGINEERING RING
      ========================================================== */}

      <g data-ring-1>

        <circle
          cx="250"
          cy="250"
          r="172"
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="4"
        />

        <circle
          cx="250"
          cy="250"
          r="168"
          fill="none"
          stroke={accent}
          strokeOpacity=".25"
          strokeWidth="1"
        />

        {/* Mechanical Segments */}

        {[0,45,90,135,180,225,270,315].map((a)=>(
          <g
            key={a}
            transform={`rotate(${a} 250 250)`}
          >
            <path
              d="
                M250 78
                L250 95
              "
              stroke="#D6F4FF"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="
                M250 102
                L250 114
              "
              stroke={accent}
              strokeOpacity=".65"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        ))}

      </g>

      {/* ==========================================================
          MIDDLE RING
      ========================================================== */}

      <g data-ring-2>

        <circle
          cx="250"
          cy="250"
          r="146"
          fill="none"
          stroke="rgba(255,255,255,.05)"
          strokeWidth="3"
        />

        {[...Array(48)].map((_,i)=>{

          const angle=i*7.5;

          return(
            <g
              key={i}
              transform={`rotate(${angle} 250 250)`}
            >
              <line
                x1="250"
                y1="101"
                x2="250"
                y2="111"
                stroke={accent}
                strokeOpacity=".45"
                strokeWidth="1.2"
              />
            </g>
          );

        })}

      </g>

      {/* ==========================================================
          INNER RING
      ========================================================== */}

      <g data-ring-3>

        <circle
          cx="250"
          cy="250"
          r="122"
          fill="none"
          stroke="#9CCFFF"
          strokeOpacity=".25"
          strokeWidth="2"
        />

        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a)=>(

          <g
            key={a}
            transform={`rotate(${a} 250 250)`}
          >

            <rect
              x="247"
              y="116"
              width="6"
              height="16"
              rx="2"
              fill="#D7F2FF"
              opacity=".55"
            />

          </g>

        ))}

      </g>
    </>
  );
}