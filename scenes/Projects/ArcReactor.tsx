"use client";

interface ArcReactorProps {
  accent: string;
  active: boolean;
  onOpen: () => void;
}

export default function ArcReactor({
  accent,
  active,
  onOpen,
}: ArcReactorProps) {
  return (
    <button
      onClick={onOpen}
      className="
        group
        relative
        flex
        h-[420px]
        w-[420px]
        items-center
        justify-center
        rounded-full
      "
    >
      {/* Ambient Reactor Glow */}

      <div
        data-reactor-glow
        className="absolute inset-0 rounded-full blur-[130px]"
        style={{
          background: accent,
          opacity: active ? 0.35 : 0.18,
        }}
      />

      {/* ===================================== */}
      {/* OUTER SHELL */}
      {/* ===================================== */}

      <div
        data-reactor-ring-1
        className="
          absolute
          inset-0
          rounded-full
          border
          border-white/10
        "
      />

      <div
        data-reactor-ring-2
        className="
          absolute
          inset-[26px]
          rounded-full
          border
          border-white/10
        "
      />

      <div
        data-reactor-ring-3
        className="
          absolute
          inset-[56px]
          rounded-full
          border
        "
        style={{
          borderColor: accent,
          boxShadow: `0 0 25px ${accent}`,
        }}
      />

      {/* ===================================== */}
      {/* ENGINEERING TICKS */}
      {/* ===================================== */}

      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 origin-center"
          style={{
            transform: `
              translate(-50%,-50%)
              rotate(${i * 15}deg)
            `,
          }}
        >
          <div
            className="h-5 w-[2px] rounded-full"
            style={{
              background: accent,
              opacity: i % 3 === 0 ? 1 : 0.35,
              transform: "translateY(-152px)",
            }}
          />
        </div>
      ))}

      {/* ===================================== */}
      {/* ORBIT RING */}
      {/* ===================================== */}

      <div
        data-orbit-ring
        className="
          absolute
          h-[310px]
          w-[310px]
          rounded-full
        "
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            data-orbit-dot
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `
                rotate(${i * 45}deg)
                translateY(-155px)
              `,
            }}
          >
            <div
              className="h-3 w-3 rounded-full"
              style={{
                background: accent,
                boxShadow: `0 0 18px ${accent}`,
              }}
            />
          </div>
        ))}
      </div>

      {/* ===================================== */}
      {/* ENERGY CORE */}
      {/* ===================================== */}

      <div
        data-reactor-core
        className="
          relative
          flex
          h-32
          w-32
          items-center
          justify-center
          rounded-full
        "
        style={{
          background: accent,
          boxShadow: `0 0 60px ${accent}`,
        }}
      >
        <div className="h-12 w-12 rounded-full bg-white" />
      </div>
    </button>
  );
}