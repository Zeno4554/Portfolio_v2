"use client";

interface Props {
  accent: string;
  angle: number;
}

export default function ReactorBlade({
  accent,
  angle,
}: Props) {
  return (
    <g
      data-reactor-blade
      transform={`rotate(${angle} 250 250)`}
    >
      {/* =======================================================
          OUTER TURBINE BLADE
      ======================================================= */}

      <path
        d="
          M243 124

          Q250 116 257 124

          L269 194

          Q250 222 231 194

          Z
        "
        fill="url(#bladeMetal)"
        stroke="#D9F5FF"
        strokeWidth=".9"
        filter="url(#bladeGlow)"
      />

      {/* =======================================================
          INNER RECESSED METAL
      ======================================================= */}

      <path
        d="
          M246 132

          Q250 127 254 132

          L261 189

          Q250 204 239 189

          Z
        "
        fill="#203041"
        opacity=".92"
      />

      {/* =======================================================
          LEFT EDGE LIGHT
      ======================================================= */}

      <path
        d="
          M244 126

          L247 128

          L252 192

          L248 203

          Z
        "
        fill="white"
        opacity=".18"
      />

      {/* =======================================================
          RIGHT BLUE REFLECTION
      ======================================================= */}

      <path
        d="
          M253 129

          L257 131

          L260 186

          L254 198

          Z
        "
        fill="url(#bladeReflection)"
        opacity=".45"
      />

      {/* =======================================================
          UPPER FASTENER
      ======================================================= */}

      <circle
        cx="250"
        cy="145"
        r="1.4"
        fill="#ECFCFF"
      />

      <circle
        cx="250"
        cy="145"
        r="4"
        fill="none"
        stroke={accent}
        strokeOpacity=".35"
        strokeWidth=".4"
      />

      {/* =======================================================
          LOWER FASTENER
      ======================================================= */}

      <circle
        cx="250"
        cy="183"
        r="1.4"
        fill="#ECFCFF"
      />

      <circle
        cx="250"
        cy="183"
        r="4"
        fill="none"
        stroke={accent}
        strokeOpacity=".35"
        strokeWidth=".4"
      />
    </g>
  );
}