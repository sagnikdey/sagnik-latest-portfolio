"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

type CaseStudySectionNavProps = {
  items: readonly CaseStudyNavItem[];
  backHref: string;
  backLabel?: string;
};

export function CaseStudySectionNav({
  items,
  backHref,
  backLabel = "Back to portfolio",
}: CaseStudySectionNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside
      className={cn(
        "sticky top-20 z-40 -mx-6 border-b border-border bg-bg/95 px-6 py-3 backdrop-blur-xl",
        "lg:top-28 lg:mx-0 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:border-b-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
      )}
    >
      <Link
        href={backHref}
        className={cn(
          "mb-3 inline-flex items-center gap-1 font-mono text-meta font-bold text-ink uppercase lg:mb-6",
          "transition-colors hover:text-accent",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        ← {backLabel}
      </Link>

      <nav aria-label="Contents">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 lg:mb-4">
          <p className="font-mono text-tag font-bold text-ink uppercase">Contents</p>
          <p className="font-mono text-tag text-ink-muted">
            {items.length} sections
          </p>
        </div>

        <ul
          className={cn(
            "-mx-1 flex gap-1 overflow-x-auto px-1 pb-1",
            "lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0 lg:pb-0"
          )}
        >
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id} className="shrink-0 lg:shrink">
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block rounded-lg px-2 py-2 font-mono text-meta uppercase transition-colors lg:px-0",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active
                      ? "bg-white/10 font-bold text-ink lg:bg-transparent"
                      : "text-ink-muted hover:text-ink"
                  )}
                  aria-current={active ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
