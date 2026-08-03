import { ReactNode } from "react";
import clsx from "clsx";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizes: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export default function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 md:px-10 xl:px-16",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}