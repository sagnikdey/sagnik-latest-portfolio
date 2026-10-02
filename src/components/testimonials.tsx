"use client";

import FadeContent from "@/components/bits/fade-content";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-b border-border px-6 py-14 lg:px-20 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full flex-col gap-8 lg:flex-row lg:gap-20 min-[2400px]:w-1/2">
        <FadeContent duration={800} threshold={0.15} className="lg:w-[400px] lg:shrink-0">
          <SectionHeading underline as="h2">
            <span id="testimonials-heading">what people say</span>
          </SectionHeading>
        </FadeContent>

        <div className="flex flex-1 flex-col gap-4 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
