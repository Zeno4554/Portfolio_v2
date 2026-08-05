"use client";

import { Headline } from "@/components/typography/Headline";
import IdentityWordStack from "./IdentityWordStack";

export default function IdentityText() {
  return (
    <div className="flex flex-col justify-center">
      {/* Section Label */}
      <span className="mb-6 font-mono text-xs uppercase tracking-[0.6em] text-cyan-400/80">
        WHO I AM
      </span>

      {/* Main Title */}
      <Headline
        as="h2"
        data-identity-headline
        className="font-display text-[clamp(3.8rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white"
      >
        I BUILD
      </Headline>

      {/* Animated Word Stack */}
      <IdentityWordStack />

      {/* Signature Statement */}
      <p className="mt-10 max-w-2xl text-2xl leading-relaxed text-white/80">
        where{" "}
        <span className="text-cyan-300">intelligence</span>,
        {" "}
        <span className="text-white">infrastructure</span>,
        {" "}and{" "}
        <span className="text-cyan-300">interface</span>{" "}
        meet.
      </p>

      {/* Description */}
      <div
        data-identity-description
        className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-white/65"
      >
        <p>
          Full-stack developer focused on building software that is scalable,
          intuitive, and built for real-world impact.
        </p>

        <p>
          My work spans intelligent applications, IoT systems, interactive web
          experiences, and data-driven platforms, combining thoughtful
          engineering with modern user experiences.
        </p>
      </div>
    </div>
  );
}