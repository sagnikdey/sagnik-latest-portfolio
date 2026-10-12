"use client";

import { useLayoutEffect, useRef } from "react";

import { KineticText } from "@/components/scroll/kinetic-text";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/portfolio";
import { DESKTOP, gsap } from "@/lib/scroll";

/** Desktop: the section pins and the quotes pan sideways. Phones: a plain stack. */
export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    const track = trackRef.current;
    if (!section || !rail || !track) return;
    const mm = gsap.matchMedia();

    mm.add(DESKTOP, () => {
      const distance = () => track.scrollWidth - rail.clientWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden border-b border-border px-6 py-14 lg:flex lg:min-h-screen lg:items-center lg:px-20 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full flex-col gap-8 lg:flex-row lg:gap-20 min-[2400px]:w-1/2">
        <div className="lg:w-[400px] lg:shrink-0">
          <SectionHeading underline as="h2">
            <span id="testimonials-heading">
              <KineticText text="what people say" />
            </span>
          </SectionHeading>
        </div>

        <div ref={railRef} className="min-w-0 flex-1 lg:overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-col gap-4 lg:w-max lg:flex-row lg:items-stretch lg:gap-8"
          >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              className="lg:w-[min(520px,70vw)] lg:shrink-0"
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
