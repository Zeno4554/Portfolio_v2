"use client";

import { Section } from "@/components/common/Section";
import { IdentityBackdrop } from "./IdentityBackdrop";
import IdentityText from "./IdentityText";
import IdentityQuote from "./IdentityQuote";
import { useIdentityAnimation } from "./useIdentityAnimation";

export function Identity() {
  useIdentityAnimation();

  return (
    <Section
      id="identity"
      index="01"
      label="Identity"
      className="relative flex min-h-[140vh] items-center overflow-hidden py-32"
    >
      <IdentityBackdrop />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-20 px-8 lg:grid-cols-[1.4fr_0.8fr]">
        <IdentityText />
        <IdentityQuote />
      </div>
    </Section>
  );
}