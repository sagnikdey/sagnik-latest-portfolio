"use client";

import { useLayoutEffect, useRef } from "react";

import { gsap, MOTION_OK } from "@/lib/scroll";

type KineticTextProps = {
  text: string;
  className?: string;
};

/** Words rise out of a mask, scrubbed to the heading's entry into view. */
export function KineticText({ text, className }: KineticTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.from(el.querySelectorAll("[data-word]"), {
        yPercent: 110,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", end: "top 55%", scrub: 0.6 },
      });
    });
    return () => mm.revert();
  }, [text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span data-word className="inline-block">
            {word}
            {i < text.split(" ").length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
