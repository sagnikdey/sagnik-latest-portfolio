"use client";

import { useLayoutEffect, useRef } from "react";

import { gsap, MOTION_OK } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  /** Fraction of viewport height travelled across the trigger. Negative moves up. */
  rate?: number;
  /** Scale-and-settle for image planes. */
  scale?: [number, number];
  className?: string;
};

export function Parallax({ children, rate = -0.15, scale, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        el,
        { y: 0, scale: scale?.[0] ?? 1 },
        {
          y: () => rate * window.innerHeight,
          scale: scale?.[1] ?? 1,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
    return () => mm.revert();
  }, [rate, scale]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
