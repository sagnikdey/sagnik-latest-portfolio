"use client";

import FadeContent from "@/components/bits/fade-content";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioPageContent, projects } from "@/data/portfolio";

export function PortfolioListing() {
  return (
    <section
      aria-labelledby="portfolio-heading"
      className="border-b border-border px-6 py-14 lg:px-20 lg:py-[120px]"
    >
      <div className="mb-10 flex flex-col gap-6 lg:mb-16 lg:max-w-3xl lg:gap-8">
        <FadeContent duration={800} threshold={0.15}>
          <p className="font-mono text-eyebrow font-medium text-accent lg:text-eyebrow-lg">
            {portfolioPageContent.eyebrow}
          </p>
          <SectionHeading as="h1" underline className="mt-4 lg:mt-6">
            <span id="portfolio-heading">{portfolioPageContent.title}</span>
          </SectionHeading>
        </FadeContent>
        <p className="text-lede text-ink lg:text-lede-lg">
          {portfolioPageContent.lede}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="rich" />
        ))}
      </div>
    </section>
  );
}
