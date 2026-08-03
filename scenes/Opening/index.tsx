import { Section } from "@/components/common/Section";
import { Headline } from "@/components/typography/Headline";
import { SITE } from "@/config/site";
import { AuroraBackground } from "./AuroraBackground";
import { ScrollCue } from "./ScrollCue";

/**
 * Opening — the first thing painted. No dynamic() import here on purpose:
 * this scene IS the LCP element, so it ships in the initial bundle.
 */
export function Opening() {
  return (
    <Section id="opening" index="00" label="Opening" bleed className="flex h-svh flex-col justify-center overflow-hidden">
      <AuroraBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <Headline as="h1" className="text-hero">
          {SITE.role}
        </Headline>
        <p className="mt-6 max-w-xl font-body text-lg text-ink-muted">
          {SITE.description}
        </p>
      </div>
      <ScrollCue />
    </Section>
  );
}
