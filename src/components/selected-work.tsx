"use client";

import FadeContent from "@/components/bits/fade-content";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { TextLink } from "@/components/text-link";
import { projects, siteLinks } from "@/data/portfolio";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-border px-6 py-14 lg:px-20 lg:py-[120px]"
    >
      <FadeContent duration={800} threshold={0.15} className="mb-8 lg:mb-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading as="h2">
            <span id="work-heading">Selected work</span>
          </SectionHeading>
          <TextLink href={siteLinks.portfolioHref} className="self-start sm:self-auto">
            View all
          </TextLink>
        </div>
      </FadeContent>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
