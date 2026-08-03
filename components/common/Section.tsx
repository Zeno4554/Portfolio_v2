import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  /** Full-bleed, no max-width container — used by pinned/camera scenes. */
  bleed?: boolean;
}

/**
 * Every scene renders through this so section landmarks, the index/label
 * eyebrow, and scroll-margin (for in-page nav) stay consistent without each
 * scene re-implementing the chrome.
 */
export function Section({ id, index, label, children, className, bleed = false }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative w-full scroll-mt-24", className)}
    >
      <div className={cn(!bleed && "mx-auto max-w-[1400px] px-6 md:px-12")}>
        <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-ink-faint">
          {index} / {label.toUpperCase()}
        </span>
        {children}
      </div>
    </section>
  );
}
