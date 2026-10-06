import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/components/tag";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  /** Compact for homepage; rich for /portfolio listing */
  variant?: "compact" | "rich";
};

export function ProjectCard({
  project,
  className,
  variant = "compact",
}: ProjectCardProps) {
  const isRich = variant === "rich";

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:border-ink-muted/40 has-[a[data-card-link]:focus-visible]:ring-2 has-[a[data-card-link]:focus-visible]:ring-ring has-[a[data-card-link]:focus-visible]:ring-offset-2 has-[a[data-card-link]:focus-visible]:ring-offset-bg lg:p-10",
        isRich ? "min-h-[280px] gap-8 lg:min-h-[340px]" : "min-h-[196px] lg:min-h-[300px] lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className="flex max-w-[500px] flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {isRich ? (
            <span className="font-mono text-tag text-accent">{project.number}</span>
          ) : null}
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h3>
          {/* Stretched link: its ::after covers the card so the whole card opens the case study. */}
          <Link
            href={project.href}
            data-card-link
            aria-label={`Open case study: ${project.title}`}
            className="after:absolute after:inset-0 after:rounded-lg after:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-body text-ink-muted lg:text-body-lg">
          {project.description}
        </p>
        {isRich ? (
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-tag text-ink-muted uppercase lg:text-meta">
            <span>
              <span className="text-accent">Role</span> {project.role}
            </span>
            <span>
              <span className="text-accent">Timeline</span> {project.timeline}
            </span>
          </div>
        ) : null}
      </div>

      <div
        className={cn(
          "flex items-center justify-between gap-4",
          isRich ? "mt-auto" : "mt-8 lg:mt-0 lg:shrink-0"
        )}
      >
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.liveLabel ?? "Live site"} for ${project.title} (opens in a new tab)`}
            className="relative z-10 font-mono text-meta font-bold text-ink uppercase underline decoration-accent underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {project.liveLabel ?? "Live site"} ↗
          </a>
        ) : null}
        <span className="font-mono text-meta text-ink-muted uppercase lg:hidden">
          View case study
        </span>
        {isRich ? (
          <span className="hidden font-mono text-meta text-ink-muted uppercase lg:inline">
            View case study
          </span>
        ) : null}
        <span className="relative inline-flex size-11 items-center justify-center rounded-full bg-accent transition-opacity group-hover:opacity-90 lg:size-14">
          <Image
            src="/images/arrow-right.svg"
            alt=""
            width={20}
            height={20}
            className="size-5"
            unoptimized
          />
        </span>
      </div>
    </article>
  );
}
