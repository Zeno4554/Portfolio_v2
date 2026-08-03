/**
 * Minimal dependency-free text splitter (avoids pulling in GSAP's paid
 * SplitText plugin). Wraps each word — and optionally each character — in
 * spans with a data-index for staggered GSAP animation.
 *
 * Usage: call inside a useLayoutEffect before building the reveal timeline,
 * and call `revert()` on cleanup to restore the original text node.
 */
export function splitTextToWords(el: HTMLElement) {
  const original = el.innerHTML;
  const words = el.textContent?.split(/\s+/).filter(Boolean) ?? [];

  el.innerHTML = words
    .map(
      (word, i) =>
        `<span class="split-word" style="display:inline-block;overflow:hidden;vertical-align:top;"><span class="split-word-inner" data-index="${i}" style="display:inline-block;">${word}</span></span>`
    )
    .join(" ");

  const targets = el.querySelectorAll<HTMLElement>(".split-word-inner");

  return {
    words: Array.from(targets),
    revert: () => {
      el.innerHTML = original;
    },
  };
}

export function splitTextToChars(el: HTMLElement) {
  const original = el.innerHTML;
  const chars = el.textContent?.split("") ?? [];

  el.innerHTML = chars
    .map(
      (char, i) =>
        `<span class="split-char" data-index="${i}" style="display:inline-block;">${
          char === " " ? "&nbsp;" : char
        }</span>`
    )
    .join("");

  const targets = el.querySelectorAll<HTMLElement>(".split-char");

  return {
    chars: Array.from(targets),
    revert: () => {
      el.innerHTML = original;
    },
  };
}
