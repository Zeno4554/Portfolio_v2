"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
}

export default function TypewriterText({
  text,
  speed = 18,
}: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setValue(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <>
      {value}
      <span className="animate-pulse">▌</span>
    </>
  );
}