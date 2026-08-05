"use client";

interface ProjectScannerProps {
  accent: string;
}

export default function ProjectScanner({
  accent,
}: ProjectScannerProps) {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* Blueprint Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Moving Scan */}

      <div
        data-scanner-line
        className="absolute left-0 top-0 h-[2px] w-full"
        style={{
          background: accent,
          boxShadow: `0 0 20px ${accent}`,
        }}
      />

      {/* Top Left */}

      <div
        className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2"
        style={{
          borderColor: accent,
        }}
      />

      {/* Top Right */}

      <div
        className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2"
        style={{
          borderColor: accent,
        }}
      />

      {/* Bottom Left */}

      <div
        className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2"
        style={{
          borderColor: accent,
        }}
      />

      {/* Bottom Right */}

      <div
        className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2"
        style={{
          borderColor: accent,
        }}
      />

      {/* Telemetry */}

      <div className="absolute left-6 top-5">

        <p
          className="font-mono text-[10px] tracking-[0.4em]"
          style={{
            color: accent,
          }}
        >
          SYSTEM ANALYSIS
        </p>

      </div>

      <div className="absolute right-6 top-5 flex items-center gap-2">

        <div
          data-status-dot
          className="h-2 w-2 rounded-full"
          style={{
            background: accent,
          }}
        />

        <span
          className="font-mono text-[10px]"
          style={{
            color: accent,
          }}
        >
          ONLINE
        </span>

      </div>

      <div className="absolute bottom-5 left-6">

        <p className="font-mono text-[10px] text-white/50">
          SIGNAL • 98%
        </p>

      </div>

      <div className="absolute bottom-5 right-6">

        <p className="font-mono text-[10px] text-white/50">
          BUILD READY
        </p>

      </div>

    </div>
  );
}