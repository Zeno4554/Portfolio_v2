"use client";

import { ReactNode } from "react";

interface SceneWrapperProps {
  children: ReactNode;
  name: string;
  className?: string;
}

export default function SceneWrapper({
  children,
  name,
  className,
}: SceneWrapperProps) {
  return (
    <div
      data-scene={name}
      className={className}
    >
      {children}
    </div>
  );
}