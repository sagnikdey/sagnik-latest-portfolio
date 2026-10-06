import Image from "next/image";
import Link from "next/link";

import { CaseStudySectionNav } from "@/components/case-study-section-nav";
import {
  CaseStudyLayout,
  ChapterDivider,
  PullStat,
} from "@/components/case-study-layout";
import { Tag } from "@/components/tag";
import type {
  CaseStudyMeta,
  CaseStudyShot,
  CaseStudyStat,
} from "@/data/case-studies/mdm";
import { siteLinks } from "@/data/portfolio";

export type CaseStudySection = {
  id: string;
  label: string;
  intro?: string;
  cards?: { title: string; body: string }[];
  list?: string[];
  note?: string;
  quote?: string;
  shots?: (CaseStudyShot & { width: number; height: number })[];
  linkHref?: string;
  linkLabel?: string;
};

type SectionedCaseStudyProps = {
  meta: CaseStudyMeta;
  stats: CaseStudyStat[];
  overview: string[];
  sections: CaseStudySection[];
  links?: { label: string; href: string }[];
  credits?: string;
};

function Surface({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-5 lg:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

const sectionClass =
  "scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8";
const bodyClass = "max-w-3xl text-body text-ink-muted lg:text-body-lg";
const linkClass =
  "w-fit font-mono text-link font-bold text-ink uppercase transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function SmartLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function SectionedCaseStudy({
  meta,
  stats,
  overview,
  sections,
  links = [],
  credits,
}: SectionedCaseStudyProps) {
  const navItems = [
    { id: "overview", label: "Overview" },
    ...sections.map((section, index) => ({
      id: section.id,
      label: `${String(index + 1).padStart(2, "0")} ${section.label}`,
    })),
  ];

  return (
    <CaseStudyLayout showBackLink={false}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] xl:gap-16">
        <CaseStudySectionNav
          items={navItems}
          backHref={siteLinks.portfolioHref}
          backLabel="Back to portfolio"
        />

        <div className="flex min-w-0 flex-col gap-14 lg:gap-20">
          <header className="flex flex-col gap-8 border-b border-border pb-12 lg:pb-16">
            <p className="font-mono text-eyebrow font-medium text-accent lg:text-eyebrow-lg">
              {meta.eyebrow}
            </p>
            <div className="flex flex-col gap-4 lg:gap-6">
              <h1 className="font-display text-display-section font-black uppercase text-ink lg:text-display-section-lg">
                {meta.title}
              </h1>
              <span className="h-1 w-16 bg-accent lg:w-20" aria-hidden />
              <p className="max-w-3xl text-lede text-ink lg:text-lede-lg">{meta.lede}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Role", value: meta.role },
                { label: "Status", value: meta.status },
                { label: "Stack", value: meta.stack },
                { label: "Timeline", value: meta.timeline },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-2">
                  <span className="font-mono text-tag text-accent uppercase">
                    {field.label}
                  </span>
                  <span className="text-body text-ink-muted">{field.value}</span>
                </div>
              ))}
            </div>
            {links.length > 0 && (
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <SmartLink key={link.href} href={link.href} className={linkClass}>
                    {link.label} ↗
                  </SmartLink>
                ))}
              </div>
            )}
          </header>

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <PullStat key={stat.caption} value={stat.value} caption={stat.caption} />
            ))}
          </section>

          <section id="overview" className="scroll-mt-48 flex flex-col gap-4 lg:scroll-mt-28 lg:gap-5">
            <h3>Overview</h3>
            {overview.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={bodyClass}>
                {paragraph}
              </p>
            ))}
          </section>

          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className={sectionClass}>
              <ChapterDivider
                number={String(index + 1).padStart(2, "0")}
                label={section.label}
              />
              {section.intro && <p className={bodyClass}>{section.intro}</p>}
              {section.cards && (
                <div
                  className={`grid grid-cols-1 gap-4 lg:gap-5 ${
                    section.cards.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                  }`}
                >
                  {section.cards.map((card, cardIndex) => (
                    <Surface key={card.title} className="flex flex-col gap-2">
                      <p className="font-mono text-tag text-accent">
                        {String(cardIndex + 1).padStart(2, "0")}
                      </p>
                      <h4>{card.title}</h4>
                      <p className="text-ink-muted">{card.body}</p>
                    </Surface>
                  ))}
                </div>
              )}
              {section.list && (
                <Surface>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-ink-muted">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Surface>
              )}
              {section.shots?.map((shot) => (
                <figure
                  key={shot.src}
                  className="overflow-hidden rounded-lg border border-border bg-surface"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className="h-auto w-full"
                    sizes="(max-width: 1023px) 100vw, 70vw"
                  />
                  <figcaption className="border-t border-border px-4 py-3 font-mono text-meta text-ink-muted">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
              {section.note && <p className={bodyClass}>{section.note}</p>}
              {section.quote && (
                <blockquote className="max-w-3xl border-l-2 border-accent pl-5 text-lede text-ink lg:text-lede-lg">
                  {section.quote}
                </blockquote>
              )}
              {section.linkHref && section.linkLabel && (
                <SmartLink href={section.linkHref} className={linkClass}>
                  {section.linkLabel}
                </SmartLink>
              )}
            </section>
          ))}

          <footer className="flex flex-col gap-6">
            {credits && <p className="max-w-3xl font-mono text-meta text-ink-muted">{credits}</p>}
            <Link href={siteLinks.portfolioHref} className={linkClass}>
              ← Back to portfolio
            </Link>
          </footer>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
