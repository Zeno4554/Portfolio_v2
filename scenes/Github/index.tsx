import { Section } from "@/components/common/Section";
import { MagneticButton } from "@/components/buttons/MagneticButton";
import { socialLinks } from "@/data/social";
import { ContributionGrid } from "./ContributionGrid";

export function Github() {
  const githubLink = socialLinks.find((l) => l.id === "github");

  return (
    <Section id="github" index="07" label="GitHub" className="py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <h2 className="font-display text-display font-medium text-ink">
            Open source, in the open.
          </h2>
          <p className="mt-4 max-w-md font-body text-ink-muted">
            A rolling look at recent activity — commits, reviews, and side
            projects that don't make it into the featured list above.
          </p>
          {githubLink && (
            <MagneticButton className="mt-8" onClick={() => window.open(githubLink.href, "_blank")}>
              View GitHub profile
            </MagneticButton>
          )}
        </div>
        <ContributionGrid />
      </div>
    </Section>
  );
}
