import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MdmCaseStudy } from "@/components/case-studies/mdm-case-study";
import { QuickstopCaseStudy } from "@/components/case-studies/quickstop-case-study";
import { SectionedCaseStudy } from "@/components/case-studies/sectioned-case-study";
import { VestaCaseStudy } from "@/components/case-studies/vesta-case-study";
import { Tag } from "@/components/tag";
import {
  salesAnalyticsCaseStudyMeta,
  salesAnalyticsLinks,
  salesAnalyticsOverview,
  salesAnalyticsPullStats,
  salesAnalyticsSections,
} from "@/data/case-studies/sales-analytics";
import {
  saguiCaseStudyMeta,
  saguiCredits,
  saguiLinks,
  saguiOverview,
  saguiPullStats,
  saguiSections,
} from "@/data/case-studies/sagui";
import { getProject, projects, siteLinks } from "@/data/portfolio";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study" };
  return {
    title: `${project.title} — Sagnik Dey`,
    description: project.description,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  if (slug === "mdm") {
    return <MdmCaseStudy />;
  }

  if (slug === "vesta") {
    return <VestaCaseStudy />;
  }

  if (slug === "quickstop-ios") {
    return <QuickstopCaseStudy />;
  }

  if (slug === "sagui") {
    return (
      <SectionedCaseStudy
        meta={saguiCaseStudyMeta}
        stats={saguiPullStats}
        overview={saguiOverview}
        sections={saguiSections}
        links={saguiLinks}
        credits={saguiCredits}
      />
    );
  }

  if (slug === "sales-analytics") {
    return (
      <SectionedCaseStudy
        meta={salesAnalyticsCaseStudyMeta}
        stats={salesAnalyticsPullStats}
        overview={salesAnalyticsOverview}
        sections={salesAnalyticsSections}
        links={salesAnalyticsLinks}
      />
    );
  }

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center gap-6 px-6 py-20 lg:px-20">
      <p className="font-mono text-sm text-accent uppercase">Case study</p>
      <h1 className="font-display text-5xl font-black uppercase text-ink lg:text-6xl">
        {project.title}
      </h1>
      <p className="text-lede text-ink-muted lg:text-body-lg">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-muted uppercase">
        <span>
          <span className="text-accent">Role</span> {project.role}
        </span>
        <span>
          <span className="text-accent">Timeline</span> {project.timeline}
        </span>
      </div>
      <p className="text-body text-ink-muted">
        Full case study narrative is coming next. Listing and routing are live.
      </p>
      <Link
        href={siteLinks.portfolioHref}
        className="font-mono text-sm font-bold text-ink uppercase transition-colors hover:text-accent"
      >
        ← Back to portfolio
      </Link>
    </section>
  );
}
