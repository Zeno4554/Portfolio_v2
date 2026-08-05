"use client";

export default function LightBeam() {
  return (
    <>
      <div
        className="
        absolute
        left-1/2
        top-0
        h-full
        w-[380px]
        -translate-x-1/2
        bg-gradient-to-b
        from-blue-400/20
        via-blue-500/8
        to-transparent
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        left-[25%]
        top-0
        h-full
        w-[180px]
        rotate-[12deg]
        bg-gradient-to-b
        from-cyan-400/10
        to-transparent
        blur-[100px]
      "
      />
    </>
  );
}