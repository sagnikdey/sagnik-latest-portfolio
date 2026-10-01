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
      <FadeContent duration={800} threshold={0.15} className="mb-8 lg:mb-16">
        <SectionHeading as="h2">
          <span id="testimonials-heading">what people say</span>
        </SectionHeading>
      </FadeContent>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
