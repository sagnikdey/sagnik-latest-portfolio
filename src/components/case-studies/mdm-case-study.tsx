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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { siteLinks } from "@/data/portfolio";
import {
  mdmAiIntro,
  mdmAiModes,
  mdmApplicationsQueueShot,
  mdmApps,
  mdmArchitectureIntro,
  mdmArchitectureShot,
  mdmBulkUploadNote,
  mdmCaseStudyMeta,
  mdmClosing,
  mdmDeferred,
  mdmDesignSystemIntro,
  mdmDesignSystemPoints,
  mdmGapsFound,
  mdmHumanLine,
  mdmInProgress,
  mdmJourneyImage,
  mdmJourneyInsights,
  mdmJourneyIntro,
  mdmJourneySpecNote,
  mdmLamplight,
  mdmLiveAppsIntro,
  mdmMvpFlow,
  mdmNavItems,
  mdmNeedsInfoNote,
  mdmOnboardingIntro,
  mdmOnboardingInviteShot,
  mdmOnboardingReviewShot,
  mdmOnboardingStep1Shot,
  mdmOnboardingSteps,
  mdmPointOfView,
  mdmPrinciples,
  mdmProblemIntro,
  mdmProductPaths,
  mdmProductPathsShot,
  mdmPullStats,
  mdmSequencingNotes,
  mdmShipped,
  mdmSplitReasons,
  mdmStackDecisions,
  mdmStagingIntro,
  mdmStagingRows,
  mdmStagingShot,
  mdmStatusStates,
  mdmTldr,
  mdmValidationPoints,
  mdmValidationShot,
  mdmWhyBuilt,
} from "@/data/case-studies/mdm";

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
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-surface">
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1500}
        className="h-auto w-full"
        sizes="(max-width: 1023px) 100vw, 70vw"
      />
      <figcaption className="border-t border-border px-4 py-3 font-mono text-meta text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export function MdmCaseStudy() {
  const meta = mdmCaseStudyMeta;

  return (
    <CaseStudyLayout showBackLink={false}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] xl:gap-16">
        <CaseStudySectionNav
          items={mdmNavItems}
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
            <div className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
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
            <Link
              href={meta.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit font-mono text-link font-bold text-ink uppercase transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              ↗ View repository
            </Link>
          </header>

          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {mdmPullStats.map((stat) => (
              <PullStat key={stat.caption} value={stat.value} caption={stat.caption} />
            ))}
          </section>

          <section id="tldr" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-4 lg:gap-5">
            <h3>TL;DR</h3>
            {mdmTldr.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="max-w-3xl text-body text-ink-muted lg:text-body-lg"
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section id="problem" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-6 lg:gap-8">
            <ChapterDivider number="01" label="Problem statement" />
        <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
          {mdmProblemIntro}
        </p>

        <div>
          <h3>What I found being done </h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {mdmGapsFound.map((gap, index) => (
              <Surface key={gap.title}>
                <p className="mb-2 font-mono text-tag text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4>{gap.title}</h4>
                <p className="text-ink-muted">{gap.body}</p>
              </Surface>
            ))}
          </div>
        </div>
        <Separator className="bg-border" />

        <div>
          <h3>What it should look like instead</h3>
          <p className="text-ink-muted">{mdmPointOfView}</p>
        </div>

        <div>
          <h3>MVP process flow</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {mdmMvpFlow.map((item) => (
              <Surface key={item.step} className="flex flex-col gap-2">
                <span className="font-mono text-tag text-accent">{item.step}</span>
                <h4>{item.title}</h4>
                <span className="text-body text-ink-muted">{item.detail}</span>
              </Surface>
            ))}
          </div>
        </div>

        <Surface>
          <h4>
            Why I built this MVP
          </h4>
          <ul className="flex flex-col gap-3">
            {mdmWhyBuilt.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-3 text-body text-ink-muted">
                <span className="text-accent" aria-hidden>
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Surface>
      </section>

      <section id="architecture" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-6 lg:gap-8">
        <ChapterDivider number="02" label="System architecture" />
        <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
          {mdmArchitectureIntro}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {mdmApps.map((item) => (
            <Surface key={item.app} className="flex flex-col gap-2">
              <span className="font-mono text-tag text-accent uppercase">{item.role}</span>
              <span className="font-mono text-body text-ink">{item.app}</span>
              <span className="font-mono text-meta text-ink-muted">{item.note}</span>
            </Surface>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {mdmSplitReasons.map((reason) => (
            <Surface key={reason.title}>
              <h4>{reason.title}</h4>
              <p className="text-ink-muted">{reason.body}</p>
            </Surface>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h3>What this looks like, live</h3>
          <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
            {mdmLiveAppsIntro}
          </p>
          <CaseStudyFigure
            src={mdmArchitectureShot.src}
            alt={mdmArchitectureShot.alt}
            caption={mdmArchitectureShot.caption}
          />
        </div>

        <Surface>
          <h4>
            Staging-and-approval backbone
          </h4>
          <p className="mb-6 text-body text-ink-muted lg:text-body-lg">
            {mdmStagingIntro}
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="font-mono text-tag text-ink-muted uppercase">
                    Vendor action
                  </TableHead>
                  <TableHead className="font-mono text-tag text-ink-muted uppercase">
                    Staging
                  </TableHead>
                  <TableHead className="font-mono text-tag text-ink-muted uppercase">
                    On approval
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mdmStagingRows.map((row) => (
                  <TableRow
                    key={row.action}
                    className="border-border hover:bg-transparent"
                  >
                    <TableCell className="text-body text-ink">{row.action}</TableCell>
                    <TableCell className="font-mono text-meta text-ink-muted">
                      {row.staging}
                    </TableCell>
                    <TableCell className="text-body text-ink-muted">
                      {row.result}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-6">
            <CaseStudyFigure
              src={mdmStagingShot.src}
              alt={mdmStagingShot.alt}
              caption={mdmStagingShot.caption}
            />
          </div>
        </Surface>

        <div className="overflow-x-auto rounded-lg border border-border bg-surface">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="font-mono text-tag text-ink-muted uppercase">
                  Decision
                </TableHead>
                <TableHead className="font-mono text-tag text-ink-muted uppercase">
                  Choice
                </TableHead>
                <TableHead className="font-mono text-tag text-ink-muted uppercase">
                  Why
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mdmStackDecisions.map((row) => (
                <TableRow
                  key={row.decision}
                  className="border-border hover:bg-transparent"
                >
                  <TableCell className="font-mono text-meta text-accent uppercase">
                    {row.decision}
                  </TableCell>
                  <TableCell className="text-body text-ink">{row.choice}</TableCell>
                  <TableCell className="text-body text-ink-muted">{row.why}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section id="design-system" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-6 lg:gap-8">
        <ChapterDivider number="03" label="Design system approach" />
        <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
          {mdmDesignSystemIntro}
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {mdmDesignSystemPoints.map((point) => (
            <Surface key={point.title}>
              <h4>{point.title}</h4>
              <p className="text-body text-ink-muted">{point.body}</p>
            </Surface>
          ))}
        </div>

        <div>
          <h3>{mdmLamplight.title}</h3>
          <p className="mb-5 max-w-3xl text-body text-ink-muted lg:text-body-lg">
            {mdmLamplight.intro}
          </p>
          <CaseStudyFigure
            src={mdmLamplight.image.src}
            alt={mdmLamplight.image.alt}
            caption={mdmLamplight.image.caption}
          />
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {mdmLamplight.points.map((point) => (
              <Surface key={point.title}>
                <h4>{point.title}</h4>
                <p className="text-body text-ink-muted">{point.body}</p>
              </Surface>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-body text-ink-muted">{mdmLamplight.closing}</p>
          <Link
            href={mdmLamplight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit font-mono text-link font-bold text-accent uppercase transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            ↗ Open Lamplight UI Kit
          </Link>
        </div>
      </section>

      <section id="onboarding" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-6 lg:gap-8">
        <ChapterDivider number="04" label="Vendor onboarding" />
        <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
          {mdmOnboardingIntro}
        </p>

        <div>
          <h3>Seven principles</h3>
          <ol className="flex flex-col gap-5">
            {mdmPrinciples.map((principle, index) => (
              <li key={principle.title} className="flex gap-3">
                <span className="font-mono text-tag text-accent pt-3" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="pb-0">
                    {principle.title}
                  </h4>
                  <p className="text-body text-ink-muted">{principle.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3>
            The flow
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {mdmOnboardingSteps.map((item) => (
              <Surface key={item.step} className="flex flex-col gap-2 p-4 lg:p-4">
                <span className="font-mono text-tag text-accent">{item.step}</span>
                <h4>{item.title}</h4>
                <p className="text-body text-ink-muted">{item.detail}</p>
              </Surface>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            <CaseStudyFigure
              src={mdmOnboardingInviteShot.src}
              alt={mdmOnboardingInviteShot.alt}
              caption={mdmOnboardingInviteShot.caption}
            />
            <CaseStudyFigure
              src={mdmOnboardingStep1Shot.src}
              alt={mdmOnboardingStep1Shot.alt}
              caption={mdmOnboardingStep1Shot.caption}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {mdmSequencingNotes.map((note) => (
            <Surface key={note.title}>
              <h3>
            {note.title}
              </h3>
              <p className="text-ink-muted">{note.body}</p>
            </Surface>
          ))}
        </div>
        <CaseStudyFigure
          src={mdmOnboardingReviewShot.src}
          alt={mdmOnboardingReviewShot.alt}
          caption={mdmOnboardingReviewShot.caption}
        />

        <div>
          <h4>
            Status state machine
          </h4>
          <div className="flex flex-wrap gap-2">
            {mdmStatusStates.map((state) => (
              <div
                key={state.id}
                className="rounded-lg border border-border bg-surface px-3 py-2"
              >
                <p className="font-mono text-tag text-accent uppercase">{state.label}</p>
                <p className="mt-1 font-mono text-meta text-ink-muted">{state.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-body text-ink-muted">{mdmNeedsInfoNote}</p>
          <div className="mt-5">
            <CaseStudyFigure
              src={mdmApplicationsQueueShot.src}
              alt={mdmApplicationsQueueShot.alt}
              caption={mdmApplicationsQueueShot.caption}
            />
          </div>
        </div>

        <div>
          <h4>
            Product onboarding once live
          </h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {mdmProductPaths.map((path) => (
              <Surface key={path.title}>
                <h4>
            {path.title}
                </h4>
                <p className="mt-3 text-body text-ink-muted">{path.body}</p>
              </Surface>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-body text-ink-muted">{mdmBulkUploadNote}</p>
          <div className="mt-5">
            <CaseStudyFigure
              src={mdmProductPathsShot.src}
              alt={mdmProductPathsShot.alt}
              caption={mdmProductPathsShot.caption}
            />
          </div>
        </div>

        <div>
          <h3>Journey maps: vendor and admin, side by side</h3>
          <p className="mb-6 max-w-3xl text-body text-ink-muted lg:text-body-lg">
            {mdmJourneyIntro}
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src={mdmJourneyImage.src}
              alt={mdmJourneyImage.alt}
              width={3520}
              height={2813}
              className="h-auto w-full"
              sizes="(max-width: 1023px) 100vw, 70vw"
            />
            <figcaption className="border-t border-border px-4 py-3 font-mono text-meta text-ink-muted">
              Vendor and admin journeys mapped stage by stage — emotion, actions, and pain
              points on both sides of the same trust boundary.
            </figcaption>
          </figure>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {mdmJourneyInsights.map((insight) => (
              <Surface key={insight.title}>
                <h4>{insight.title}</h4>
                <p className="text-body text-ink-muted">{insight.body}</p>
              </Surface>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-body text-ink-muted">{mdmJourneySpecNote}</p>
        </div>
      </section>

      <section id="validation" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-6 lg:gap-8">
        <ChapterDivider number="05" label="Domain-aware validation" />
        <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">
          Validation rules aren&apos;t uniform — they&apos;re conditional on category.
          Encoding that correctly is as much a UX decision as a technical one.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {mdmValidationPoints.map((point) => (
            <Surface key={point.title}>
              <h4>
            {point.title}
              </h4>
              <p className="mt-3 text-body text-ink-muted">{point.body}</p>
            </Surface>
          ))}
        </div>
        <CaseStudyFigure
          src={mdmValidationShot.src}
          alt={mdmValidationShot.alt}
          caption={mdmValidationShot.caption}
        />
      </section>

      <section id="ai" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-6 lg:gap-8">
        <ChapterDivider number="06" label="How AI fit into the work" />
        <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">{mdmAiIntro}</p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {mdmAiModes.map((mode) => (
            <Surface key={mode.title}>
              <h4>
            {mode.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {mode.items.map((item) => (
                  <li key={item.slice(0, 48)} className="flex gap-3 text-body text-ink-muted">
                    <span className="text-accent" aria-hidden>
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          ))}
        </div>
        <Surface>
          <h4>
            Where the line stayed human
          </h4>
          <p className="text-body text-ink-muted lg:text-body-lg">{mdmHumanLine}</p>
        </Surface>
      </section>

      <section id="current-state" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-6 lg:gap-8">
        <ChapterDivider number="07" label="Current state" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          <div>
            <p className="mb-4 font-mono text-tag text-ink-muted uppercase">Done</p>
            <ul className="flex flex-col gap-3">
              {mdmShipped.map((item) => (
                <li key={item} className="flex gap-2 text-body text-ink">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-tag text-ink-muted uppercase">In progress</p>
            <ul className="flex flex-col gap-3">
              {mdmInProgress.map((item) => (
                <li key={item} className="flex gap-2 text-body text-ink-muted">
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-tag text-ink-muted uppercase">Deferred</p>
            <ul className="flex flex-col gap-3">
              {mdmDeferred.map((item) => (
                <li key={item} className="flex gap-2 text-body text-ink-muted">
                  <span aria-hidden>✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Separator className="bg-border" />

      <footer id="why" className="scroll-mt-48 lg:scroll-mt-28 flex flex-col gap-4">
        <h3>Why this project</h3>
        <p className="max-w-3xl text-body text-ink-muted lg:text-body-lg">{mdmClosing}</p>
        <Link
          href={meta.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-mono text-link font-bold text-accent uppercase transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          ↗ github.com/sagnikdey/mdm
        </Link>
      </footer>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
