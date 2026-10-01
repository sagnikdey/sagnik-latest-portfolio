export type CaseStudyMeta = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  role: string;
  status: string;
  stack: string;
  timeline: string;
  repoUrl: string;
  tags: string[];
};

export type CaseStudyPrinciple = {
  title: string;
  body: string;
};

export type CaseStudyStat = {
  value: string;
  caption: string;
};

export type CaseStudyGap = {
  title: string;
  body: string;
};

export type CaseStudyMvpStep = {
  step: string;
  title: string;
  detail: string;
};

export type CaseStudySplitReason = {
  title: string;
  body: string;
};

export type CaseStudyStagingRow = {
  action: string;
  staging: string;
  result: string;
};

export type CaseStudyStackDecision = {
  decision: string;
  choice: string;
  why: string;
};

export type CaseStudyProductPath = {
  title: string;
  body: string;
};

export type CaseStudyValidationPoint = {
  title: string;
  body: string;
};

export type CaseStudyAiMode = {
  title: string;
  items: string[];
};

export const mdmCaseStudyMeta: CaseStudyMeta = {
  slug: "mdm",
  eyebrow: "Case study · Enterprise B2B",
  title: "MDM — Master Data Management",
  lede:
    "A Master Data Management platform for convenience-store operators — the system underneath a company like 7-Eleven that governs a single source of truth for stores, vendors, products, and inventory. Designed and built solo end to end, with Claude as an architecture partner throughout.",
  role: "Product Designer & Design-Engineer (solo)",
  status:
    "In progress — admin console, invite flow, and vendor portal live against shared Postgres; build continuing",
  stack:
    "Next.js (App Router) · TypeScript · PostgreSQL · Drizzle ORM · shadcn/ui · Turborepo · Vercel",
  timeline: "2025–2026",
  repoUrl: "https://github.com/sagnikdey/mdm",
  tags: [
    "MASTER DATA",
    "B2B PLATFORM",
    "VENDOR ONBOARDING",
    "DESIGN SYSTEM",
    "AI-ASSISTED BUILD",
  ],
};

export const mdmPullStats: CaseStudyStat[] = [
  { value: "5", caption: "Structural gaps spotted in a live enterprise MDM" },
  { value: "4", caption: "Turborepo apps · three product surfaces + design system docs" },
  { value: "8", caption: "Vendor onboarding steps · progressive disclosure" },
  { value: "0", caption: "Direct vendor writes to master tables" },
];

export const mdmTldr = [
  "MDM is a Master Data Management platform for convenience-store operators — the kind of system that sits underneath a company like 7-Eleven and governs a single source of truth for stores, vendors, products, and inventory. Designed and built solo end to end: domain modeling, information architecture, UX flows, database schema, and application code.",
  "What makes this project worth a case study isn't just the product — it's the process. Claude was a genuine design and engineering partner: pressure-testing architecture, co-writing UX specs before code existed, and translating those specs into a working Next.js/Postgres implementation.",
];

export const mdmProblemIntro =
  "This project didn't start as a hypothetical. It started with an observation from an enterprise Master Data Management system I worked on earlier in my career — a real, in-production system for a large convenience-store operation — where the same structural gap kept showing up between how the system worked and how vendor and product data at that scale should be governed.";

export const mdmGapsFound: CaseStudyGap[] = [
  {
    title: "Admin-only product setup",
    body: "Products were created and maintained entirely by MDM admins. Vendors had no way to enter or update their own product data — every SKU and attribute went through an internal admin by hand.",
  },
  {
    title: "Manual vendor–product linking",
    body: "Admins linked products to vendors after the fact. The relationship was bookkeeping, not a step in the vendor's own workflow.",
  },
  {
    title: "No onboarding or categorization",
    body: "Vendors weren't classified by what they supplied, so compliance, category fields, and permissions couldn't be conditioned on vendor type. Everyone was handled the same — or ad hoc.",
  },
  {
    title: "No approval gate",
    body: "Data moved straight into production tables with no staging, no review, and no accept / reject / needs-more-info path for vendors or products.",
  },
  {
    title: "Polish over process",
    body: "Design attention skewed toward visual polish while the broken piece — workflow and data governance — went largely unaddressed. Good-looking, structurally thin.",
  },
];

export const mdmPointOfView =
  "None of those five gaps are cosmetic — they're process gaps, and they compound. No onboarding means no categorization; no categorization means no conditional compliance; no approval gate means bad data has a straight path into production. I formed a point of view — vendors onboard and categorize themselves, every vendor- and product-facing change passes through explicit approval, and design investment goes into the process that makes that trustworthy, not just the pixels on top. Subject matter experts who'd worked the operational side of vendor and product management validated that shape before I committed to building it.";

export const mdmMvpFlow: CaseStudyMvpStep[] = [
  {
    step: "01",
    title: "Admin invites vendors",
    detail:
      "Replace ad hoc, admin-created vendor records with deliberate, invited self-service relationships.",
  },
  {
    step: "02",
    title: "Admin approvals",
    detail:
      "Introduce the review gate the original system never had — for both new vendors and new products.",
  },
  {
    step: "03",
    title: "Vendor self-service",
    detail:
      "Vendors categorize themselves at onboarding and maintain their own catalog going forward.",
  },
  {
    step: "04",
    title: "Design system as infrastructure",
    detail:
      "Visual consistency produced once and reused — so design effort goes to process and workflow, not screen-by-screen polish.",
  },
];

export const mdmWhyBuilt = [
  "Showcase end-to-end ownership — spot a structural gap in a live enterprise system, validate the fix with people who'd feel it, and carry it through architecture, UX, and a working build, solo.",
  "Prove out a design system that absorbs visual-consistency work systematically, so design effort goes where it belongs: process and workflow.",
];

export const mdmArchitectureIntro =
  "Before any screen design happened, the domain had to be modeled correctly. Architecture was treated as a design problem: every structural decision has direct UX consequences downstream. The result is a Turborepo monorepo with three purpose-built product apps — internal MDM admin, vendor onboarding wizard, and ongoing-use vendor portal — sharing one PostgreSQL source of truth, plus a fourth apps/design-system docs site that documents packages/ui without talking to Postgres.";

export const mdmApps = [
  { app: "apps/web", role: "MDM / admin", note: "packages/db + packages/ui · shared PostgreSQL" },
  { app: "apps/onboarding", role: "Invite wizard", note: "packages/db + packages/ui · shared PostgreSQL" },
  { app: "apps/vendor-portal", role: "Approved vendor", note: "packages/db + packages/ui · shared PostgreSQL" },
  {
    app: "apps/design-system",
    role: "Lamplight UI Kit",
    note: "Documents packages/ui · no Postgres · public docs site",
  },
];

export const mdmSplitReasons: CaseStudySplitReason[] = [
  {
    title: "Different threat models",
    body: "The vendor portal faces the open internet; the internal MDM console doesn't need to. Splitting deploys means a vendor-facing vulnerability can't touch admin tooling.",
  },
  {
    title: "Separated auth surfaces",
    body: "Staff use one auth system; vendors use a separate, scoped session model. Neither app's middleware has to branch on which kind of user is present.",
  },
  {
    title: "Independent scaling",
    body: "If hundreds of vendors hit catalog sync at once, that traffic shouldn't queue behind internal admin usage.",
  },
];

export type CaseStudyShot = {
  src: string;
  alt: string;
  caption: string;
};

/** §2 hero shot — the shared database, visible from the internal console */
export const mdmArchitectureShot: CaseStudyShot = {
  src: "/images/mdm/mdm_productspage.png",
  alt: "Admin Products catalog — a searchable, filterable table of SKUs with category, vendor, wholesale price, and status across 28 products",
  caption:
    "apps/web/admin/products — the shared database, visible from the internal console: every vendor's catalog, in one place.",
};

/** §2 staging backbone — the actual Approve/Reject UI the table below abstracts */
export const mdmStagingShot: CaseStudyShot = {
  src: "/images/mdm/mdm_vendor_application_review.png",
  alt: "Application review screen for 'Horrible Snacks' — submitted company details and a compliance document, with Approve, Needs Info, and Reject actions",
  caption:
    "The staging table above, as a UI: nothing here writes to the live vendors table until Approve is clicked.",
};

/** §4 onboarding — step zero and step one, live */
export const mdmOnboardingInviteShot: CaseStudyShot = {
  src: "/images/mdm/vendor-invite.png",
  alt: "Vendor invitations screen — a form to send a scoped, single-use 14-day invite link, with a table of recent invitations and their redemption status",
  caption: "Step zero, before the flow even starts: an admin sends a scoped, single-use invite.",
};

export const mdmOnboardingStep1Shot: CaseStudyShot = {
  src: "/images/mdm/vendor_onboarding.png",
  alt: "Vendor onboarding wizard, Step 1 of 8 — Company: legal company name, DBA name, tax ID, and primary category fields, with a progress rail listing all eight steps",
  caption: "Step 1 of 8, live — company profile, exactly as sequenced above.",
};

/** §4 onboarding — step 8, paired with the sequencing notes */
export const mdmOnboardingReviewShot: CaseStudyShot = {
  src: "/images/mdm/vendor_onboarding_review.png",
  alt: "Vendor onboarding wizard, Step 7 of 8 — Review: a read-only summary of company, contact, location, categories, and document count before submission",
  caption:
    "Step 8 — the vendor's own review before submitting. Confirm-before-commit on their side, mirrored again on the admin side.",
};

/** §4 onboarding — the status state machine, live */
export const mdmApplicationsQueueShot: CaseStudyShot = {
  src: "/images/mdm/mdm_vendor_applications.png",
  alt: "Vendor applications queue — 15 applications filterable by status (Submitted, Under Review, Needs Info, Approved, Rejected), listing company, email, and current status",
  caption: "The status state machine above, live — submitted, approved, and draft all visible in one queue.",
};

/** §4 onboarding — the three product paths, as actual tabs */
export const mdmProductPathsShot: CaseStudyShot = {
  src: "/images/mdm/mdm_vendor_add_products.png",
  alt: "Vendor portal's Add products screen — bulk upload via Excel/CSV, barcode, or manual entry, scoped to the vendor's approved categories",
  caption: "The three paths above, as actual tabs: bulk upload, barcode, and manual — gated to approved categories.",
};

/** §5 validation — category-conditional permissions, implemented */
export const mdmValidationShot: CaseStudyShot = {
  src: "/images/mdm/mdm_vendor_details.png",
  alt: "Vendor detail page for Cold Beverage Distributor — contact and payment terms, a vendor-portal login link, allowed product categories, store relationships, and a products table",
  caption:
    "Category-conditional permissions, implemented: a vendor's allowed categories are literal checkboxes on their record, gating what they can submit.",
};

export const mdmLiveAppsIntro =
  "What this looks like, live — all three product apps are deployed and running against the shared database:";

export const mdmStagingIntro =
  "The single most important design decision: nothing a vendor submits touches master data directly. Every vendor-initiated change lands in a staging table with a status field. An admin acts on it. Only then does promotion write into live vendors or products tables. Orders are the deliberate exception — reversible and fast enough to write into an order state machine instead of staging.";

export const mdmStagingRows: CaseStudyStagingRow[] = [
  {
    action: "Edits profile",
    staging: "vendor_edit_requests",
    result: "Updates vendors table",
  },
  {
    action: "Submits new product",
    staging: "product_submissions + line items",
    result: "Inserts products, assigns MDM SKU",
  },
  {
    action: "Edits existing product",
    staging: "product_edit_requests",
    result: "Updates products table",
  },
];

export const mdmStackDecisions: CaseStudyStackDecision[] = [
  {
    decision: "ORM",
    choice: "Drizzle for CRUD, raw SQL for analytics",
    why: "Cross-table inventory and vendor-performance queries needed hand-tunable SQL that Prisma's abstraction fought against.",
  },
  {
    decision: "Vendor auth",
    choice: "Magic-link only, no passwords",
    why: "Removes credential-management UX and support burden for v1; sessions stay scoped, signed, httpOnly, and separate from staff auth.",
  },
  {
    decision: "UI",
    choice: "shadcn/ui + curated Beautiful UI",
    why: "Professional baseline without hand-rolling a design system before the product proved its shape.",
  },
  {
    decision: "Deploy",
    choice: "Vercel · three projects",
    why: "Matches the three-app split — each surface scales and deploys independently.",
  },
  {
    decision: "Sensitive data",
    choice: "Tokenization, never raw storage",
    why: "Invite tokens stored as SHA-256 hashes; banking via provider tokenization, storing only a token and last four digits.",
  },
];

export const mdmDesignSystemPoints = [
  {
    title: "Consistency without upfront DS overhead",
    body: "shadcn primitives cover the bulk of an admin console and multi-step wizard — accessible and well-tested by default.",
  },
  {
    title: "Shared packages, not shared apps",
    body: "packages/ui holds the common component layer all three product apps consume — consistency enforced structurally, not by convention.",
  },
  {
    title: "Design at the composition level",
    body: "The UX work isn't inventing button styles — it's which fields appear on which step, how validation reads inline vs on submit, and how a bulk-upload preview communicates mixed valid/invalid rows.",
  },
];

export const mdmDesignSystemIntro =
  "Rather than invent a bespoke component library before the product needed one, the foundation is shadcn/ui, extended with a curated Beautiful UI set mapped to specific screens — not imported wholesale.";

export type CaseStudyLamplight = {
  title: string;
  url: string;
  intro: string;
  image: CaseStudyShot;
  points: { title: string; body: string }[];
  closing: string;
};

export const mdmLamplight: CaseStudyLamplight = {
  title: "Lamplight UI Kit",
  url: "https://design-system-three-brown.vercel.app/",
  intro:
    "The shared-packages claim isn't just structural intention — it's backed by a live docs site. apps/design-system is a fourth Turborepo app, deployed on Vercel as the Lamplight UI Kit, documenting packages/ui (@workspace/ui) directly from source.",
  image: {
    src: "/images/mdm/design-system.png",
    alt: "Lamplight Design System homepage — 13 styled React components including Buttons, Input, and Badge, each with a live interactive demo and a View history link",
    caption:
      "The Lamplight UI Kit, live — every primitive documented with a working demo, not a static screenshot pretending to be one.",
  },
  points: [
    {
      title: "13 documented primitives",
      body: "Button, Input, Badge, Checkbox, Accordion, Dialog, Dropdown, Breadcrumb, Spinner, Select, Tooltip, Tabs, and Toast — each with a live interactive demo plus a View history link to the component file on GitHub, so docs can't quietly drift from code.",
    },
    {
      title: "Three foundation pages",
      body: "Colors, Typography, and Radius & Shadows document the semantic tokens — with full light/dark theme pairs — that every product app draws from.",
    },
    {
      title: "Same stack it documents",
      body: "Radix UI, Tailwind v4, class-variance-authority, and next-themes — the design-system app is itself proof the primitives compose cleanly, not a static style guide describing them.",
    },
    {
      title: "Structurally can't go stale",
      body: "Adding a component is a two-step code act — drop a demo into components/demos/ and register it in lib/docs-registry.ts — and navigation plus the per-component page update automatically.",
    },
  ],
  closing:
    "The result is a design system a reviewer (or hiring manager) can click through and inspect — not a paragraph asserting that consistency was handled.",
};

export const mdmOnboardingIntro =
  "Vendor onboarding is the most fully specified part of the product — a form problem and a trust problem at once: asking a business for sensitive information before they've received value back.";

export const mdmPrinciples: CaseStudyPrinciple[] = [
  {
    title: "Progressive disclosure",
    body: "Never one 40-field form — break it into steps small enough that each screen feels manageable.",
  },
  {
    title: "Ask only what's needed, when it's needed",
    body: "Banking details come after interest is established, not on step one.",
  },
  {
    title: "Save and resume",
    body: "Every step autosaves a draft; vendors abandon and return constantly, and losing progress is the fastest way to lose a relationship before it starts.",
  },
  {
    title: "Validate inline, early",
    body: "Catch a malformed EIN or email the moment a field loses focus, not at final submit.",
  },
  {
    title: "Be transparent about what happens next",
    body: "A visible progress stepper and honest review-timeline expectations reduce support inquiries and anxiety.",
  },
  {
    title: "Smart defaults and autofill",
    body: "Remit-to same as HQ checkboxes, address autocomplete, copy-forward wherever the data already exists.",
  },
  {
    title: "Two-sided by design",
    body: "The vendor-facing wizard is only half the product; the admin review queue needed equal design attention.",
  },
];

export const mdmOnboardingSteps = [
  { step: "01", title: "Company Profile", detail: "Legal name, DBA, EIN, type, web" },
  { step: "02", title: "Contacts", detail: "Primary, AP, sales rep" },
  { step: "03", title: "Addresses", detail: "HQ, remit-to, ship-from" },
  { step: "04", title: "Product Categories", detail: "What they supply — drives compliance" },
  { step: "05", title: "Commercial Terms", detail: "Payment terms, MOQ, lead time" },
  { step: "06", title: "Compliance Docs", detail: "W-9, COI, license, food certs" },
  { step: "07", title: "Banking / Payment", detail: "ACH via secure provider" },
  { step: "08", title: "Review & Submit", detail: "Final confirmation" },
];

export const mdmSequencingNotes = [
  {
    title: "Company profile first",
    body: "Lowest-friction, highest-identity data — and immediate dedupe against existing vendors before master data is polluted.",
  },
  {
    title: "Categories mid-flow",
    body: "That selection drives every downstream conditional requirement. Food vendors get food-safety docs; beverage-only vendors don't. Category-aware compliance is what separates this from a generic form.",
  },
  {
    title: "Compliance and banking last",
    body: "Highest-friction, most-sensitive steps sit after six steps of investment — vendors are more likely to push through than if banking were asked on screen two.",
  },
];

export const mdmStatusStates = [
  { id: "draft", label: "Draft", note: "Autosaved progress" },
  { id: "submitted", label: "Submitted", note: "Awaiting assignment" },
  { id: "under_review", label: "Under review", note: "Admin acting" },
  { id: "needs_info", label: "Needs info", note: "Targeted field edits" },
  { id: "approved", label: "Approved", note: "Promoted to vendors" },
  { id: "rejected", label: "Rejected", note: "Terminal" },
];

export const mdmNeedsInfoNote =
  "needs_info is a deliberate UX decision: reviewers can request changes to specific fields, and the vendor gets a targeted, resumable edit — not a full resubmit. That single state prevents rejection-and-restart friction a binary approve/reject model would create.";

export const mdmProductPaths: CaseStudyProductPath[] = [
  {
    title: "Bulk Excel upload",
    body: "For initial catalog loading or large additions. Templates are personalized per vendor — an Allowed Values sheet reflects that vendor's approved categories.",
  },
  {
    title: "Barcode scan",
    body: "For the one-new-item case — roughly 10× faster than manual entry, with a server-side fallback chain across barcode databases.",
  },
  {
    title: "Manual entry",
    body: "Fallback when there's no barcode match or fields automated paths can't populate.",
  },
];

export const mdmBulkUploadNote =
  "Bulk-upload UX accepts unknown columns with a soft skip notice, silently skips empty trailing rows, and lets vendors fix validation errors inline in a preview table — push-back against a \"just re-upload\" default that punishes a single typo with a full cycle.";

export const mdmJourneyIntro =
  "Everything above reads as a single flow, but it's really two: a vendor moving through onboarding into ongoing self-service, and an MDM admin who reviews, approves, and protects master data at every one of those same moments. Mapping both side by side — rather than just the vendor path — is what actually surfaces the design insight behind the whole product: self-service and data integrity were designed together, stage by stage, not bolted on afterward.";

export const mdmJourneyImage = {
  src: "/images/user-journey-map.png",
  alt: "MDM User Journey Map — vendor and admin journeys mapped stage by stage, with an emotion curve, key actions, and pain points for each",
} as const;

export const mdmJourneyInsights = [
  {
    title: "The emotional low point isn't symmetric",
    body: "The vendor's steepest dip is Awaiting Review — anxious, in limbo, no visibility. The admin's low point is one stage earlier, at Review Application — scrutinizing a queue against limited time. That mismatch is why a visible progress stepper (vendor) and batched, category-conditional queues (admin) were designed as a pair.",
  },
  {
    title: "needs_info sits at the hinge",
    body: "It's the design response to the vendor's worst stage and the admin's Decide stage in the same beat — converting a hard reject or soft approve into a resumable, targeted fix on one side and a non-binary decision on the other.",
  },
  {
    title: "Trust changes shape at Approved",
    body: "The vendor's arc turns from cautious/anxious to relieved right where the admin's turns from scrutinizing to vigilant and strategic — the relationship shifts from prove you're legitimate to run your business here, and the product's job shifts from gatekeeping to enabling.",
  },
];

export const mdmJourneySpecNote =
  "The full stage-by-stage detail — thinking, emotion, pain point, and design response for every stage of both journeys — lives in MDM-User-Journeys.md, one of the standalone specification documents referenced in the AI collaboration section.";

export const mdmValidationPoints: CaseStudyValidationPoint[] = [
  {
    title: "Category-driven compliance",
    body: "Required onboarding documents are computed server-side from selected product categories — food vendors see food-safety docs; general merchandise vendors don't see fields that don't apply.",
  },
  {
    title: "Category-conditional product fields",
    body: "Pack hierarchy, physical attributes, and regulatory fields vary by category so manual and bulk paths never present irrelevant fields.",
  },
  {
    title: "Constraints, not suggestions",
    body: "Vendors can only submit products in categories selected at onboarding — surfaced proactively in the UI, not discovered after a rejected submission.",
  },
];

export const mdmAiIntro =
  "Claude was used throughout in two distinct modes, roughly equal in weight — and the how matters as much as the what.";

export const mdmAiModes: CaseStudyAiMode[] = [
  {
    title: "Design & product thinking partner",
    items: [
      "Scoping calls — magic-link-only auth, deferring product images, single-seat vendor accounts for v1, with second-order consequences surfaced before cutting.",
      "Domain modeling — the staging/approval pattern arrived through iterative conversation about what master data integrity requires structurally.",
      "UX sequencing — onboarding order and product-entry path order stress-tested by asking Claude to argue for alternatives before locking instinct in.",
    ],
  },
  {
    title: "Engineering accelerant",
    items: [
      "Spec-to-schema — Drizzle tables, enums, and relations drafted from agreed UX flows so the DB model and user steps stayed in lockstep.",
      "Repo-grounded work — recommendations based on the actual GitHub structure, not a hypothetical codebase.",
      "Discrete, versioned outputs — standalone markdown specs (vendor portal, product onboarding, database guide, MDM-User-Journeys.md) the implementation phase could build against, with precise scoped edits instead of full rewrites.",
    ],
  },
];

export const mdmHumanLine =
  "Every architectural call, scoping tradeoff, and UX sequencing decision was mine. Claude generated options, argued the counter-case, and produced clean, implementation-ready output once a direction was set. Product judgment — what trustworthy master data requires, what a vendor will tolerate, which corners are safe for v1 — stayed human throughout.";

export const mdmShipped = [
  "Full data model and staging/approval architecture, finalized",
  "Vendor onboarding flow fully specified end-to-end, including admin review",
  "Vendor portal architecture and product onboarding module fully specified",
  "apps/web admin console live — dashboard, invite flow, review surfaces against shared Postgres",
  "apps/vendor-portal live — approved-vendor dashboard scoped to vendor data",
  "Lamplight UI Kit (apps/design-system) live — 13 primitives + foundation tokens documented from source",
];

export const mdmInProgress = [
  "Building out apps/onboarding and apps/vendor-portal against the finalized specs",
  "Wiring the Drizzle schema and staging pipeline into working CRUD flows",
];

export const mdmDeferred = [
  "Product images (Vercel Blob planned once catalog flows are stable)",
  "Multi-seat vendor accounts",
  "Vendor self-service category expansion",
  "AI copilot / agent-native UI components — scoped out rather than bolted on prematurely",
];

export const mdmClosing =
  "I took this on to demonstrate a specific kind of design capability: owning a B2B product from ambiguous problem through data modeling, UX architecture, and into implementation — the same end-to-end ownership I brought to the 7-UI Design System and data-heavy platforms at 7-Eleven's Global Solutions Center, but built solo, using AI collaboration deliberately and transparently rather than treating it as a detail to gloss over.";

export const mdmNavItems = [
  { id: "tldr", label: "TL;DR" },
  { id: "problem", label: "01 · Problem" },
  { id: "architecture", label: "02 · Architecture" },
  { id: "design-system", label: "03 · Design system" },
  { id: "onboarding", label: "04 · Onboarding" },
  { id: "validation", label: "05 · Validation" },
  { id: "ai", label: "06 · AI collaboration" },
  { id: "current-state", label: "07 · Current state" },
  { id: "why", label: "Why this project" },
] as const;
