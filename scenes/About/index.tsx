import { Section } from "@/components/common/Section";
import { Headline } from "@/components/typography/Headline";
import { IdentityBackdrop } from "./IdentityBackdrop";

/**
 * Identity — the "who is this" scene. A large statement headline over a
 * parallax-layered backdrop; deliberately text-forward since this is where
 * the visitor forms their read on the person, not the visuals.
 */
export function Identity() {
  return (
    <Section
      id="identity"
      index="01"
      label="Identity"
      className="relative flex min-h-[140vh] items-center py-32"
    >
      <IdentityBackdrop />
      <div className="relative z-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Headline as="h2" className="text-display">
          I build systems where intelligence, infrastructure, and interface meet.
        </Headline>
        <div className="flex flex-col gap-6 self-end font-body text-ink-muted">
          <p>
            Full-stack engineer working across AI model infrastructure, cloud
            platforms, and the products people actually touch — with equal
            weight on how it's built and how it feels to use.
          </p>
          <p>
            Currently focused on distributed inference systems, developer
            tooling, and interfaces that treat motion as information, not
            decoration.
          </p>
        </div>
      </div>
    </Section>
  );
}
