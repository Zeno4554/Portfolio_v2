"use client";

export default function IdentityQuote() {
  return (
    <aside className="flex items-end justify-end">
      <div
        data-identity-quote
        className="max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
      >
        <span className="font-mono text-xs uppercase tracking-[0.5em] text-cyan-300">
          Philosophy
        </span>

        <p className="mt-6 text-2xl font-light leading-relaxed text-white">
          “Great software isn't just functional.
          <br />
          It's intuitive,
          <br />
          performant,
          <br />
          and unforgettable.”
        </p>

        <div className="mt-10 h-px w-16 bg-cyan-400/40" />

        <p className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-white/45">
          Anurag
        </p>
      </div>
    </aside>
  );
}