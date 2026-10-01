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
  vestaCaseStudyMeta,
  vestaClosing,
  vestaDefineGoal,
  vestaDefineInsight,
  vestaDemonstrates,
  vestaDesignPrinciple,
  vestaEmpathizeGoal,
  vestaEmpathizeIntro,
  vestaEmpathizeTakeaway,
  vestaEmpathizeTracks,
  vestaHealthScoreShot,
  vestaHomeConvergedNote,
  vestaHomeConvergedShot,
  vestaHomeExplorationIntro,
  vestaHomeExplorationNotes,
  vestaHomeExplorationShot,
  vestaIdeateGoal,
  vestaIdeateIntro,
  vestaIdeateOutputs,
  vestaKilledIdea,
  vestaNavItems,
  vestaOnboardingShot,
  vestaOverview,
  vestaPointOfView,
  vestaPrincipleNote,
  vestaPrototypeGoal,
  vestaPrototypeIntro,
  vestaPrototypeRounds,
  vestaProtocolInsight,
  vestaPullStats,
  vestaStillToTest,
  vestaTestForms,
  vestaTestGoal,
  vestaTestIntro,
  vestaTrustPattern,
  vestaTrustShot,
} from "@/data/case-studies/vesta";

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
  width = 2400,
  height = 1500,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-lg border border-border bg-surface ${className}`}
    >
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

export function VestaCaseStudy() {
  const meta = vestaCaseStudyMeta;

  return (
    <CaseStudyLayout showBackLink={false}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] xl:gap-16">
        <CaseStudySectionNav
          items={vestaNavItems}
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
            {vestaPullStats.map((stat) => (
              <PullStat key={stat.caption} value={stat.value} caption={stat.caption} />
            ))}
          </section>

          <section
            id="overview"
            className="scroll-mt-48 flex flex-col gap-4 lg:scroll-mt-28 lg:gap-5"
          >
            <h3>Overview</h3>
            {vestaOverview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="max-w-3xl text-body text-ink-muted lg:text-body-lg"
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="empathize"
            className="scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8"
          >
            <ChapterDivider number="01" label="Empathize" />
            <p className="max-w-3xl font-mono text-meta text-accent uppercase">
              Goal · {vestaEmpathizeGoal}
            </p>
            <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
              {vestaEmpathizeIntro}
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
              {vestaEmpathizeTracks.map((track, index) => (
                <Surface key={track.title} className="flex flex-col gap-2">
                  <p className="font-mono text-tag text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4>{track.title}</h4>
                  <p className="text-ink-muted">{track.body}</p>
                </Surface>
              ))}
            </div>
            <Surface>
              <h4>What I took out of this phase</h4>
              <p className="text-ink-muted">{vestaEmpathizeTakeaway}</p>
            </Surface>
          </section>

          <section
            id="define"
            className="scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8"
          >
            <ChapterDivider number="02" label="Define" />
            <p className="max-w-3xl font-mono text-meta text-accent uppercase">
              Goal · {vestaDefineGoal}
            </p>
            <div>
              <h3>Point of view</h3>
              <blockquote className="mt-4 max-w-3xl border-l-2 border-accent pl-5 text-lede text-ink lg:text-lede-lg">
                {vestaPointOfView}
              </blockquote>
            </div>
            <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
              {vestaDefineInsight}
            </p>
            <Separator className="bg-border" />
            <div>
              <h3>Design principle</h3>
              <blockquote className="mt-4 max-w-3xl border-l-2 border-accent pl-5 text-lede text-ink lg:text-lede-lg">
                {vestaDesignPrinciple}
              </blockquote>
              <p className="mt-5 max-w-3xl text-body text-ink-muted lg:text-body-lg">
                {vestaPrincipleNote}
              </p>
            </div>
          </section>

          <section
            id="ideate"
            className="scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8"
          >
            <ChapterDivider number="03" label="Ideate" />
            <p className="max-w-3xl font-mono text-meta text-accent uppercase">
              Goal · {vestaIdeateGoal}
            </p>
            <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
              {vestaIdeateIntro}
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
              {vestaIdeateOutputs.map((item, index) => (
                <Surface key={item.title} className="flex flex-col gap-2">
                  <p className="font-mono text-tag text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4>{item.title}</h4>
                  <p className="text-ink-muted">{item.body}</p>
                </Surface>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <h3>The Home screen, three very different ways</h3>
                <p className="mt-3 max-w-3xl text-body text-ink-muted lg:text-body-lg">
                  {vestaHomeExplorationIntro}
                </p>
              </div>
              <CaseStudyFigure
                src={vestaHomeExplorationShot.src}
                alt={vestaHomeExplorationShot.alt}
                caption={vestaHomeExplorationShot.caption}
                width={1382}
                height={970}
              />
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
                {vestaHomeExplorationNotes.map((note) => (
                  <Surface key={note.title} className="flex flex-col gap-2">
                    <h4>{note.title}</h4>
                    <p className="text-ink-muted">{note.body}</p>
                  </Surface>
                ))}
              </div>
              <div className="max-w-sm">
                <CaseStudyFigure
                  src={vestaHomeConvergedShot.src}
                  alt={vestaHomeConvergedShot.alt}
                  caption={vestaHomeConvergedShot.caption}
                  width={404}
                  height={900}
                />
              </div>
              <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
                {vestaHomeConvergedNote}
              </p>
            </div>

            <Surface>
              <h4>{vestaKilledIdea.title}</h4>
              <p className="text-ink-muted">{vestaKilledIdea.body}</p>
            </Surface>
          </section>

          <section
            id="prototype"
            className="scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8"
          >
            <ChapterDivider number="04" label="Prototype" />
            <p className="max-w-3xl font-mono text-meta text-accent uppercase">
              Goal · {vestaPrototypeGoal}
            </p>
            <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
              {vestaPrototypeIntro}
            </p>
            <div className="max-w-sm">
              <CaseStudyFigure
                src={vestaOnboardingShot.src}
                alt={vestaOnboardingShot.alt}
                caption={vestaOnboardingShot.caption}
                width={402}
                height={874}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
              {vestaPrototypeRounds.map((round, index) => (
                <Surface key={round.title} className="flex flex-col gap-2">
                  <p className="font-mono text-tag text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4>{round.title}</h4>
                  <p className="text-ink-muted">{round.body}</p>
                </Surface>
              ))}
            </div>
            <Surface>
              <h4>Protocol over polish</h4>
              <p className="text-ink-muted">{vestaProtocolInsight}</p>
            </Surface>
            <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
              {vestaTrustPattern}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              <CaseStudyFigure
                src={vestaTrustShot.src}
                alt={vestaTrustShot.alt}
                caption={vestaTrustShot.caption}
                width={402}
                height={874}
              />
              <CaseStudyFigure
                src={vestaHealthScoreShot.src}
                alt={vestaHealthScoreShot.alt}
                caption={vestaHealthScoreShot.caption}
                width={402}
                height={874}
              />
            </div>
          </section>

          <section
            id="test"
            className="scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8"
          >
            <ChapterDivider number="05" label="Test" />
            <p className="max-w-3xl font-mono text-meta text-accent uppercase">
              Goal · {vestaTestGoal}
            </p>
            <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
              {vestaTestIntro}
            </p>
            <div className="flex flex-col gap-4 lg:gap-5">
              {vestaTestForms.map((form, index) => (
                <Surface key={form.title} className="flex flex-col gap-2">
                  <p className="font-mono text-tag text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4>{form.title}</h4>
                  <p className="text-ink-muted">{form.body}</p>
                </Surface>
              ))}
            </div>
            <Surface>
              <h4>Still to test</h4>
              <p className="text-ink-muted">{vestaStillToTest}</p>
            </Surface>
          </section>

          <section
            id="demonstrates"
            className="scroll-mt-48 flex flex-col gap-6 lg:scroll-mt-28 lg:gap-8"
          >
            <ChapterDivider number="06" label="What this project demonstrates" />
            <ol className="flex list-none flex-col gap-4 p-0 lg:gap-5">
              {vestaDemonstrates.map((item, index) => (
                <li key={item.title}>
                  <Surface className="flex flex-col gap-2">
                    <p className="font-mono text-tag text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4>{item.title}</h4>
                    <p className="text-ink-muted">{item.body}</p>
                  </Surface>
                </li>
              ))}
            </ol>
            <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
              {vestaClosing}
            </p>
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
