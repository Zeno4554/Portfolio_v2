"use client";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#05050A]" />

      {/* Aurora Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      {/* Vertical Light Beam */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[450px]
          -translate-x-1/2
          bg-gradient-to-b
          from-blue-400/15
          via-blue-500/8
          to-transparent
          blur-[120px]
        "
      />

      

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.92)_100%)]
        "
      />

    </div>
  );
}