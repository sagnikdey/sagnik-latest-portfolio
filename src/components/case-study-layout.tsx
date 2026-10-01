import Link from "next/link";

import { siteLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type CaseStudyLayoutProps = {
  children: React.ReactNode;
  className?: string;
  /** When false, omit the top back link (e.g. MDM moves it into the left TOC). */
  showBackLink?: boolean;
};

export function CaseStudyLayout({
  children,
  className,
  showBackLink = true,
}: CaseStudyLayoutProps) {
  return (
    <article
      className={cn(
        "mx-auto flex container flex-col gap-14 px-6 py-14 lg:gap-20 lg:px-20 lg:py-[120px]",
        className
      )}
    >
      {showBackLink ? (
        <Link
          href={siteLinks.portfolioHref}
          className="w-fit font-mono text-meta font-bold text-ink uppercase transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          ← Back to portfolio
        </Link>
      ) : null}
      {children}
    </article>
  );
}

type ChapterDividerProps = {
  number: string;
  label: string;
  id?: string;
};

export function ChapterDivider({ number, label, id }: ChapterDividerProps) {
  return <h2 id={id}>{number} · {label}</h2>;
}

type PullStatProps = {
  value: string;
  caption: string;
};

export function PullStat({ value, caption }: PullStatProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-6 lg:p-8">
      <p className="font-display text-display-section font-extrabold text-accent lg:text-display-section-lg">
        {value}
      </p>
      <p className="font-mono text-tag text-ink-muted uppercase lg:text-meta">{caption}</p>
    </div>
  );
}
