"use client";

const WORDS = [
  "SCALABLE",
  "INTELLIGENT",
  "INTERACTIVE",
  "DATA-DRIVEN",
  "REAL-TIME",
];

export default function IdentityWordStack() {
  return (
    <div className="mt-16 flex flex-col gap-4">
      {WORDS.map((word, index) => (
        <div
          key={word}
          data-word
          data-index={index}
          className="overflow-hidden"
        >
          <span
            className="
              block
              font-display
              text-[clamp(2.8rem,5vw,5.2rem)]
              font-black
              uppercase
              leading-none
              tracking-[-0.05em]
              text-cyan-300
              will-change-transform
            "
          >
            {word}
          </span>
        </div>
      ))}

      <div className="overflow-hidden pt-8">
        <span
          data-systems
          className="
            block
            font-display
            text-[clamp(3.2rem,6vw,6rem)]
            font-black
            uppercase
            tracking-[-0.06em]
            text-white
          "
        >
          SYSTEMS
        </span>
      </div>
    </div>
  );
}