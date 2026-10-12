"use client";

import { useLayoutEffect, useRef } from "react";

import { gsap, MOTION_OK } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ClipRevealProps = {
  children: React.ReactNode;
  className?: string;
};

/** Each direct child wipes open from the bottom as it enters the viewport. */
export function ClipReveal({ children, className }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      for (const child of Array.from(el.children)) {
        gsap.fromTo(
          child,
          { clipPath: "inset(18% 4% 0% 4% round 8px)", y: 60, opacity: 0.2 },
          {
            clipPath: "inset(0% 0% 0% 0% round 8px)",
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: child, start: "top 95%", end: "top 60%", scrub: 0.5 },
          }
        );
      }
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
