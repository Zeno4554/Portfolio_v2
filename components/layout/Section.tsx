import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
}

export default function Section({
  children,
  id,
  className,
  fullHeight = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full overflow-hidden",
        fullHeight ? "min-h-screen" : "py-32",
        className
      )}
    >
      {children}
    </section>
  );
}