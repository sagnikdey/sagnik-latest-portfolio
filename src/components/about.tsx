"use client";

import FadeContent from "@/components/bits/fade-content";
import { SectionHeading } from "@/components/section-heading";
import { aboutContent } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border px-6 py-14 lg:px-20 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full flex-col gap-8 lg:flex-row lg:gap-20 min-[2400px]:w-1/2">
        <FadeContent duration={800} threshold={0.15} className="lg:w-[400px] lg:shrink-0">
          <SectionHeading underline as="h2">
            <span id="about-heading">{aboutContent.title}</span>
          </SectionHeading>
        </FadeContent>

        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {aboutContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph.text.slice(0, 48)}
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
