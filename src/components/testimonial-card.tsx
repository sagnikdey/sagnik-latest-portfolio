import type { Testimonial } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 lg:gap-6 lg:p-8",
        className
      )}
    >
      <blockquote className="text-quote text-ink lg:text-quote-lg">
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex flex-col gap-1 text-link lg:text-meta">
        <cite className="font-mono font-bold text-accent not-italic">
          — {testimonial.name}
        </cite>
        <span className="text-ink-muted">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
