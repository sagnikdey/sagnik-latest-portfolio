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
      <div className="mx-auto flex w-full flex-col gap-8 lg:flex-row lg:gap-20 min-[2400px]:w-1/2">
        <FadeContent
          duration={800}
          threshold={0.15}
          className="flex flex-col gap-4 lg:w-[400px] lg:shrink-0"
        >
          <SectionHeading underline as="h2">
            <span id="work-heading">selected work</span>
          </SectionHeading>
          <TextLink href={siteLinks.portfolioHref} className="self-start">
            View all
          </TextLink>
        </FadeContent>

        <div className="grid flex-1 grid-cols-1 gap-5 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
