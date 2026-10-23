import { useEffect, useRef } from "react";

export function useSectionEntrance() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || motion.matches || !("IntersectionObserver" in window)) return;

    const blocks = Array.from(root.querySelectorAll<HTMLElement>(".section-entrance"));
    const pending = blocks.filter(
      (block) => block.getBoundingClientRect().top >= window.innerHeight,
    );
    if (pending.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset["entrance"] = "visible";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -32px 0px", threshold: 0 },
    );

    // Preserve SSR visibility and avoid a flash when opening a deep link.
    for (const block of pending) {
      block.dataset["entrance"] = "waiting";
      observer.observe(block);
    }

    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const block = event.target.closest<HTMLElement>(".section-entrance");
      if (!block) return;
      delete block.dataset["entrance"];
      observer.unobserve(block);
    };
    const stopMotion = () => {
      if (!motion.matches) return;
      observer.disconnect();
      blocks.forEach((block) => delete block.dataset["entrance"]);
    };
    root.addEventListener("focusin", revealFocused);
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      root.removeEventListener("focusin", revealFocused);
      motion.removeEventListener("change", stopMotion);
      blocks.forEach((block) => delete block.dataset["entrance"]);
    };
  }, []);

  return rootRef;
}
