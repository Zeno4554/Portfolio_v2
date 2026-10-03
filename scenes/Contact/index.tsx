"use client";

import { Section } from "@/components/common/Section";
import { Headline } from "@/components/typography/Headline";
import { MagneticButton } from "@/components/buttons/MagneticButton";
import { socialLinks } from "@/data/social";

export function Contact() {
  const mail = socialLinks.find((l) => l.id === "mail");

  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      className="flex min-h-svh flex-col justify-center py-32"
    >
      <Headline as="h2" className="text-hero max-w-3xl">
        Let's build something worth remembering.
      </Headline>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        {mail && (
          <MagneticButton
            onClick={() => window.location.href = mail.href}
          >
            {mail.label} me
          </MagneticButton>
        )}

        <nav
          aria-label="Social links"
          className="flex flex-wrap gap-x-6 gap-y-3"
        >
          {socialLinks
            .filter((l) => l.id !== "mail")
            .map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-wide text-ink-muted transition-colors hover:text-aurora-cyan"
              >
                {link.label}
              </a>
            ))}
        </nav>
      </div>

      <footer className="mt-24 flex flex-col gap-3 border-t border-glass-border pt-8 font-mono text-[11px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()}</span>
        <span>Built with Next.js, GSAP & React Three Fiber</span>
      </footer>
    </Section>
  );
}