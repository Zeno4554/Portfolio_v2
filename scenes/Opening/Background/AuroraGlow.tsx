"use client";

export default function AuroraGlow() {
  return (
    <>
      {/* Main Glow */}
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

      {/* Secondary Glow */}
      <div
        className="
        absolute
        left-[65%]
        top-[40%]
        h-[450px]
        w-[450px]
        rounded-full
        bg-cyan-400/10
        blur-[140px]
      "
      />
    </>
  );
}