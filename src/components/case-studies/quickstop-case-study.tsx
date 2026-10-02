import Link from "next/link";
import Image from "next/image";

import { CaseStudySectionNav } from "@/components/case-study-section-nav";
import {
  CaseStudyLayout,
  ChapterDivider,
  PullStat,
} from "@/components/case-study-layout";
import { Tag } from "@/components/tag";
import { Separator } from "@/components/ui/separator";
import { siteLinks } from "@/data/portfolio";
import {
  quickstopAgeGate,
  quickstopAiConclusion,
  quickstopAiFaster,
  quickstopAiHuman,
  quickstopBrandColors,
  quickstopCaseStudyMeta,
  quickstopCategories,
  quickstopCrossCutting,
  quickstopCursorNote,
  quickstopDesignLanguage,
  quickstopDesignSystemIntro,
  quickstopDesignSystemNote,
  quickstopIaDecisions,
  quickstopIaIntro,
  quickstopIosIntro,
  quickstopIosPoints,
  quickstopNavItems,
  quickstopNavTable,
  quickstopNext,
  quickstopOnboardingShot,
  quickstopOpenQuestions,
  quickstopOverview,
  quickstopPersonas,
  quickstopProblem,
  quickstopProblemInsight,
  quickstopProjectTree,
  quickstopPullStats,
  quickstopResearchInsight,
  quickstopResearchIntro,
  quickstopScreens,
  quickstopScreensIntro,
  quickstopTaxonomyIntro,
  quickstopYouShot,
} from "@/data/case-studies/quickstop";

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

function CaseStudyFigure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-surface">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        sizes="(max-width: 1023px) 100vw, 70vw"
      />
      <figcaption className="border-t border-border px-4 py-3 font-mono text-meta text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function NumberedCards({
  items,
  columns = "lg:grid-cols-2",
}: {
  items: { title: string; body: string }[];
  columns?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-4 lg:gap-5 ${columns}`}>
      {items.map((item, index) => (
        <Surface key={item.title} className="flex flex-col gap-2">
          <p className="font-mono text-tag text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h4>{item.title}</h4>
          <p className="text-ink-muted">{item.body}</p>
        </Surface>
      ))}
    </div>
  );
}

const sectionClass =
  "scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8";
const bodyClass = "max-w-3xl text-body text-ink-muted lg:text-body-lg";

export function QuickstopCaseStudy() {
  const meta = quickstopCaseStudyMeta;

  return (
    <CaseStudyLayout showBackLink={false}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] xl:gap-16">
        <CaseStudySectionNav
          items={quickstopNavItems}
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
          </header>

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {quickstopPullStats.map((stat) => (
              <PullStat key={stat.caption} value={stat.value} caption={stat.caption} />
            ))}
          </section>

          <section id="overview" className="scroll-mt-48 flex flex-col gap-4 lg:scroll-mt-28 lg:gap-5">
            <h3>Overview</h3>
            {quickstopOverview.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={bodyClass}>
                {paragraph}
              </p>
            ))}
          </section>

          <section id="problem" className={sectionClass}>
            <ChapterDivider number="01" label="The problem" />
            <p className={bodyClass}>{quickstopProblem}</p>
            <blockquote className="max-w-3xl border-l-2 border-accent pl-5 text-lede text-ink lg:text-lede-lg">
              {quickstopProblemInsight}
            </blockquote>
          </section>

          <section id="research" className={sectionClass}>
            <ChapterDivider number="02" label="User research & personas" />
            <p className={bodyClass}>{quickstopResearchIntro}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {quickstopPersonas.map((persona, index) => (
                <Surface key={persona.name} className="flex flex-col gap-2">
                  <p className="font-mono text-tag text-accent">
                    {String(index + 1).padStart(2, "0")} · {persona.archetype}
                  </p>
                  <h4>{persona.name}</h4>
                  <p className="text-ink-muted">{persona.need}</p>
                </Surface>
              ))}
            </div>
            <Surface>
              <h4>Key insight</h4>
              <p className="text-ink-muted">{quickstopResearchInsight}</p>
            </Surface>
          </section>

          <section id="ia" className={sectionClass}>
            <ChapterDivider number="03" label="Information architecture" />
            <p className={bodyClass}>{quickstopIaIntro}</p>
            <NumberedCards items={quickstopIaDecisions} columns="lg:grid-cols-3" />
            <div>
              <h3>Final nav (v0.3)</h3>
              <p className="mt-3 font-mono text-meta text-ink">
                [ Home ] [ Shop ] [ Scan ] [ Orders ] [ You ]
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-surface">
                <table className="w-full min-w-[32rem] text-left text-body">
                  <thead>
                    <tr className="border-b border-border font-mono text-tag text-accent uppercase">
                      <th className="px-4 py-3 font-medium">Tab</th>
                      <th className="px-4 py-3 font-medium">Purpose</th>
                      <th className="px-4 py-3 font-medium">Primary persona</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quickstopNavTable.map((row) => (
                      <tr key={row.tab} className="border-b border-border last:border-b-0">
                        <td className="px-4 py-3 font-bold text-ink">{row.tab}</td>
                        <td className="px-4 py-3 text-ink-muted">{row.purpose}</td>
                        <td className="px-4 py-3 text-ink-muted">{row.persona}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="taxonomy" className={sectionClass}>
            <ChapterDivider number="04" label="Shop taxonomy" />
            <p className={bodyClass}>{quickstopTaxonomyIntro}</p>
            <ol className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {quickstopCategories.map((category, index) => (
                <li
                  key={category}
                  className="flex items-baseline gap-3 rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <span className="font-mono text-tag text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink">{category}</span>
                </li>
              ))}
            </ol>
            <Surface>
              <h4>{quickstopAgeGate.title}</h4>
              <p className="text-ink-muted">{quickstopAgeGate.body}</p>
            </Surface>
            <Separator className="bg-border" />
            <h3>Persona-driven features</h3>
            <NumberedCards items={quickstopCrossCutting} />
          </section>

          <section id="design-system" className={sectionClass}>
            <ChapterDivider number="05" label="Design system setup" />
            <p className={bodyClass}>{quickstopDesignSystemIntro}</p>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {quickstopBrandColors.map((color) => (
                <Surface key={color.name} className="flex flex-col gap-3">
                  <span
                    className="h-16 w-full rounded-md border border-border"
                    style={{ backgroundColor: color.hex }}
                    aria-hidden
                  />
                  <div>
                    <h4>{color.label}</h4>
                    <p className="font-mono text-tag text-ink-muted">{color.hex}</p>
                    <p className="font-mono text-tag text-ink-muted">{color.name}</p>
                  </div>
                </Surface>
              ))}
            </div>
            <p className={bodyClass}>{quickstopDesignSystemNote}</p>
          </section>

          <section id="screens" className={sectionClass}>
            <ChapterDivider number="06" label="Screen design in Figma" />
            <p className={bodyClass}>{quickstopScreensIntro}</p>
            <NumberedCards items={quickstopScreens} />
            <CaseStudyFigure
              src={quickstopOnboardingShot.src}
              alt={quickstopOnboardingShot.alt}
              caption={quickstopOnboardingShot.caption}
              width={3105}
              height={1275}
            />
            <div className="max-w-xs">
              <CaseStudyFigure
                src={quickstopYouShot.src}
                alt={quickstopYouShot.alt}
                caption={quickstopYouShot.caption}
                width={402}
                height={1223}
              />
            </div>
            <p className={bodyClass}>{quickstopDesignLanguage}</p>
          </section>

          <section id="ios" className={sectionClass}>
            <ChapterDivider number="07" label="iOS development in Swift" />
            <p className={bodyClass}>{quickstopIosIntro}</p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-5 font-mono text-meta leading-relaxed text-ink-muted lg:p-6">
              {quickstopProjectTree}
            </pre>
            <NumberedCards items={quickstopIosPoints} />
            <Surface>
              <h4>Cursor-assisted development</h4>
              <p className="text-ink-muted">{quickstopCursorNote}</p>
            </Surface>
          </section>

          <section id="ai" className={sectionClass}>
            <ChapterDivider number="08" label="AI workflow — what actually changed" />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
              <Surface className="flex flex-col gap-3">
                <h4>What AI accelerated</h4>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-ink-muted">
                  {quickstopAiFaster.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Surface>
              <Surface className="flex flex-col gap-3">
                <h4>What still needed human judgment</h4>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-ink-muted">
                  {quickstopAiHuman.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Surface>
            </div>
            <blockquote className="max-w-3xl border-l-2 border-accent pl-5 text-lede text-ink lg:text-lede-lg">
              {quickstopAiConclusion}
            </blockquote>
          </section>

          <section id="next" className={sectionClass}>
            <ChapterDivider number="09" label="Open questions & what's next" />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
              <Surface className="flex flex-col gap-3">
                <h4>Open questions (v1)</h4>
                <ol className="flex list-decimal flex-col gap-2 pl-5 text-ink-muted">
                  {quickstopOpenQuestions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </Surface>
              <Surface className="flex flex-col gap-3">
                <h4>What&apos;s next</h4>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-ink-muted">
                  {quickstopNext.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Surface>
            </div>
            <Link
              href={siteLinks.portfolioHref}
              className="w-fit font-mono text-link font-bold text-ink uppercase transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              ← Back to portfolio
            </Link>
          </section>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
