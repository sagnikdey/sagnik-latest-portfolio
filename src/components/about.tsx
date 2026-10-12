"use client";

import { useLayoutEffect, useRef } from "react";

import { KineticText } from "@/components/scroll/kinetic-text";
import { SectionHeading } from "@/components/section-heading";
import { aboutContent } from "@/data/portfolio";
import { DESKTOP, gsap, MOTION_OK } from "@/lib/scroll";

/**
 * The page's one peak: on desktop the heading column pins while the story
 * advances beside it, each paragraph lifting from dim to full ink in turn.
 */
export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const paragraphs = section.querySelectorAll<HTMLElement>("[data-about-p]");
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      paragraphs.forEach((p) => {
        gsap.fromTo(
          p,
          { opacity: 0.18, y: 24 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: p, start: "top 85%", end: "top 50%", scrub: true },
          }
        );
      });
    });

    mm.add(DESKTOP, () => {
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: asideRef.current,
            pinSpacing: false,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border px-6 py-14 lg:px-20 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full flex-col gap-8 lg:flex-row lg:gap-20 min-[2400px]:w-1/2">
        <div className="lg:w-[400px] lg:shrink-0">
          <div ref={asideRef} className="flex gap-6 lg:pt-[120px] lg:-mt-[120px]">
            <span
              aria-hidden
              className="hidden h-40 w-px origin-top bg-border lg:block"
            >
              <span ref={progressRef} className="block h-full w-full origin-top bg-accent" />
            </span>
            <SectionHeading underline as="h2">
              <span id="about-heading">
                <KineticText text={aboutContent.title} />
              </span>
            </SectionHeading>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:gap-8 lg:py-[20vh]">
          {aboutContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph.text.slice(0, 48)}
              data-about-p
              className={
                paragraph.emphasis
                  ? "text-lede text-ink lg:text-lede-lg"
                  : "text-body text-ink-muted lg:text-body-lg"
              }
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
