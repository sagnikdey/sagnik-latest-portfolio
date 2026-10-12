"use client";

import { useLayoutEffect, useRef } from "react";

import { gsap, MOTION_OK } from "@/lib/scroll";

/**
 * Reading-page version of the homepage choreography: headings rise out of a
 * mask, figures wipe open while their image settles from a slight zoom, and
 * pull stats count up. No pins — case studies are for reading.
 */
export function CaseStudyMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      const restores: Array<() => void> = [];

      root.querySelectorAll<HTMLElement>("h1, h2, h3").forEach((heading) => {
        gsap.fromTo(
          heading,
          { clipPath: "inset(0% 0% 100% 0%)", y: 32 },
          {
            clipPath: "inset(0% 0% -10% 0%)",
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: heading, start: "top 92%", end: "top 70%", scrub: 0.6 },
          }
        );
      });

      root.querySelectorAll<HTMLElement>("figure").forEach((figure) => {
        gsap.fromTo(
          figure,
          { clipPath: "inset(14% 4% 0% 4% round 8px)", y: 48, opacity: 0.3 },
          {
            clipPath: "inset(0% 0% 0% 0% round 8px)",
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: figure, start: "top 95%", end: "top 60%", scrub: 0.5 },
          }
        );
        const img = figure.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: figure, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        }
      });

      root.querySelectorAll<HTMLElement>("[data-count]").forEach((stat) => {
        const original = stat.textContent ?? "";
        const match = original.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
        if (!match) return;
        const [, prefix, number, suffix] = match;
        const decimals = number.split(".")[1]?.length ?? 0;
        const counter = { value: 0 };
        gsap.to(counter, {
          value: Number(number),
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: stat, start: "top 85%", once: true },
          onUpdate: () => {
            stat.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`;
          },
          onComplete: () => {
            stat.textContent = original;
          },
        });
        stat.textContent = `${prefix}${(0).toFixed(decimals)}${suffix}`;
        restores.push(() => {
          stat.textContent = original;
        });
      });

      return () => restores.forEach((restore) => restore());
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
