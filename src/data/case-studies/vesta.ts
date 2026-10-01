import type {
  CaseStudyMeta,
  CaseStudyShot,
  CaseStudyStat,
} from "@/data/case-studies/mdm";
import type { CaseStudyNavItem } from "@/components/case-study-section-nav";

export const vestaCaseStudyMeta: CaseStudyMeta = {
  slug: "vesta",
  eyebrow: "Case study · Design Thinking · iOS",
  title: "Vesta",
  lede:
    "A pantry intelligence app designed and built solo — voice input, barcode scanning, and receipt parsing so inventory stays accurate without manual data entry. Structured through Empathize → Test, including the pivots that didn't survive contact with reality.",
  role: "Product Designer & Solo Builder (research, strategy, IA, visual design, technical direction)",
  status:
    "In active development — TestFlight beta in progress, App Store submission planned",
  stack: "iOS · Swift / SwiftUI · SwiftData · hosted + on-device AI parsers",
  timeline: "July 2026 – ongoing",
  repoUrl: "",
  tags: ["iOS", "DESIGN THINKING", "VOICE UX", "SOLO BUILD", "PANTRY"],
};

export const vestaNavItems: CaseStudyNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "empathize", label: "01 Empathize" },
  { id: "define", label: "02 Define" },
  { id: "ideate", label: "03 Ideate" },
  { id: "prototype", label: "04 Prototype" },
  { id: "test", label: "05 Test" },
  { id: "demonstrates", label: "What it shows" },
];

export const vestaPullStats: CaseStudyStat[] = [
  { value: "3", caption: "Major pivots — each a return to Empathize or Define" },
  { value: "4", caption: "Competitor apps torn down for real-use friction" },
  { value: "5", caption: "Design Thinking stages walked end to end" },
  { value: "1", caption: "Person · iOS-only · no backend for the first build" },
];

export const vestaOverview = [
  "Vesta is a home inventory and pantry management app that tracks what's actually in your kitchen using voice input, barcode scanning, and receipt parsing — instead of manual data entry. Say \"used two cups of flour\" and inventory updates instantly. Photograph a receipt and a whole grocery run gets logged. Run low on something and it lands on the shopping list automatically.",
  "I ran this as a solo build, but deliberately structured it through the design thinking process rather than jumping straight to screens. That discipline is what surfaced three major pivots — each one a return to Empathize or Define after new evidence, not a restart from scratch. This case study walks through the project stage by stage, including the parts that didn't survive contact with reality.",
];

export const vestaEmpathizeGoal =
  "Understand who this is for and where existing solutions actually break.";

export const vestaEmpathizeIntro =
  "I'm the primary user — this started as a personal problem, not a market brief — but I treated that as a starting hypothesis to interrogate, not a shortcut past research. The empathize phase was built around two tracks:";

export const vestaEmpathizeTracks = [
  {
    title: "Competitive teardown",
    body: "A full week of hands-on use with four existing pantry apps (KitchenPal, Cooklist, Your Food, Pantry Check) — documenting exactly where each one breaks down in real use. Not feature comparison: friction-point observation. Where does logging get skipped? Where does the inventory silently drift from reality?",
  },
  {
    title: "Structured interview plan",
    body: "A 10-interview research protocol targeting the questions that matter: how people currently track what's at home (usually a mental model, or nothing), when they discover they've run out (almost always mid-cook or at the store), and — for anyone who'd tried a pantry app before — what specifically broke the habit.",
  },
];

export const vestaEmpathizeTakeaway =
  "The research plan was built to validate or kill one hypothesis before any engineering happened — if logging feels like a chore, accuracy decays and the app gets abandoned, no matter how good the tracking model underneath it is. Every existing competitor fails at the same point: the data-entry step, not the data-storage step. That reframing shaped everything downstream — the product isn't a database with a nice UI, it's a friction-removal problem.";

export const vestaDefineGoal =
  "Turn the empathize-phase findings into a sharp, human-centered problem statement.";

export const vestaPointOfView =
  "A person cooking regularly needs to know what's actually in their kitchen without spending effort keeping that record accurate — because the moment tracking becomes a chore, it gets abandoned within days and the inventory silently rots out of sync with reality.";

export const vestaDefineInsight =
  "That statement did real work — it ruled things out as much as it pointed things in. \"Just build a good inventory list app\" was never on the table: dozens of apps already do that competently, and they still fail at retention. The core need isn't storage or organization, it's near-zero-friction logging.";

export const vestaDesignPrinciple =
  "If logging usage is as fast as saying it out loud — no unlocking, no searching, no typing a quantity — accuracy holds.";

export const vestaPrincipleNote =
  "Voice input isn't a novelty feature bolted onto an inventory app. It's the mechanism that makes the whole product viable. Everything else (barcode scan, receipt photo, health scoring) exists to solve the cold-start problem — getting the pantry populated in the first place — while voice solves the ongoing accuracy problem.";

export const vestaIdeateGoal =
  "Explore the solution space widely before committing to scope.";

export const vestaIdeateIntro =
  "The ideation phase produced a genuinely ambitious concept: a multi-household, cross-platform consumer product. I pushed the idea as far as it could go before applying any constraint, because scoping down from an over-built idea is a more honest process than scoping up from a timid one.";

export const vestaIdeateOutputs = [
  {
    title: "Four-phase roadmap",
    body: "Core inventory → recipe matching with one-tap Instacart ordering → full household categories (personal care, pharmacy, EWG safety scoring) behind a premium tier → predictive auto-reorder and household budget intelligence.",
  },
  {
    title: "Information architecture",
    body: "Five tabs organized around the four distinct ways an item enters or leaves inventory — barcode, voice, receipt/shelf photo, and manual — rather than around arbitrary screens.",
  },
  {
    title: "Visual identity",
    body: "Warm, kitchen-native — deliberately not clinical like a health app and not cartoonish like food delivery. Off-white palette; terracotta / sage / amber tied to health-score states; serif display only for screen titles; monospace for quantities so numbers align down a list.",
  },
  {
    title: "Signature interaction",
    body: "An item card with a colored left border mapped to a computed health score, so a household's health composition is scannable at a glance without opening a single item.",
  },
];

export const vestaHomeExplorationIntro =
  "Before converging on a direction, I pushed three genuinely different visual personalities for the same Home screen — same data, three different theories of what the app should feel like.";

export const vestaHomeExplorationShot: CaseStudyShot = {
  src: "/images/vesta/home-screen-explorations.png",
  alt: "Three divergent Home screen explorations side by side: a dark moody 'Stocked Pantry' direction with photography, a playful green 'Pantry Pop!' direction with an avatar mascot and emoji alert, and a serif 'Provisions Ledger' direction styled like a formal record book",
  caption:
    "Three fully-built directions for the same screen, not a mood board — each one specific enough to actually learn something from.",
};

export const vestaHomeExplorationNotes = [
  {
    title: "\"Stocked Pantry\" — dark, moody, photography-heavy",
    body: "Looked expensive, read as a developer tool or a wine-cellar app, not a kitchen. Too cold for something meant to live next to a stove.",
  },
  {
    title: "\"Pantry Pop!\" — bright, mascot-driven, emoji alerts",
    body: "This one quietly broke my own design principle: I'd explicitly ruled out \"playful like a food-delivery app\" back in Define, and here I was reinventing it from a different angle. A principle only works if new ideas actually get checked against it — this is the check catching something.",
  },
  {
    title: "\"Provisions Ledger\" — serif type, formal rows, small caps",
    body: "Elegant, but it read as a spreadsheet wearing a nice font — the opposite of \"unhurried kitchen drawer.\"",
  },
];

export const vestaHomeConvergedShot: CaseStudyShot = {
  src: "/images/vesta/home-screen-converged.png",
  alt: "The converged Home screen: warm off-white background, a search bar, a category carousel, an expiring-items banner, and Pantry and Fridge sections listing items with quantities",
  caption:
    "Where it converged — warm and legible without being clinical, closer to \"a well-organized kitchen drawer\" than any of the three explorations got on their own.",
};

export const vestaHomeConvergedNote =
  "The signature pattern that survived from here on: a colored indicator per item tied to its computed health score, so the whole pantry's composition is scannable without opening anything.";

export const vestaKilledIdea = {
  title: "Idea I generated and deliberately killed",
  body: "A seven-screen guided onboarding tour (welcome → location setup → seeding-method choice → camera capture → review → voice demo → ready). Good UX thinking for a stranger downloading cold — completely wrong for the actual current user: one person who already knows what the app does. Kept on file for a future public-launch scenario rather than building it now. Knowing which good ideas to not build yet is as much a design decision as generating them.",
};

export const vestaPrototypeGoal =
  "Make the idea tangible enough to pressure-test — and here, \"prototype\" meant more than wireframes; it meant building working scoped versions and finding out which assumptions held.";

export const vestaPrototypeIntro =
  "I treated the full-platform concept from Ideate as a paper prototype for feasibility, not a build target, and it failed the test fast: a backend to run and pay for indefinitely, multi-user auth solving a problem I didn't have, and four separate API integrations before validating whether the core loop worked for even one person. So I prototyped down, in two rounds:";

export const vestaOnboardingShot: CaseStudyShot = {
  src: "/images/vesta/onboarding-welcome.png",
  alt: "The Welcome screen: an illustration of a stocked kitchen shelf, the headline 'Never wonder what's in your pantry again,' and a primary CTA button",
  caption: "First screen, low stakes — the entry point into the trust-building pattern below.",
};

export const vestaPrototypeRounds = [
  {
    title: "Round 1 — solo, fully on-device",
    body: "Rewrote the product spec for one person, iOS-only, no backend, SwiftData instead of Postgres, on-device speech recognition and on-device AI parsing instead of cloud calls. This was the version I started building against.",
  },
  {
    title: "Round 2 — the AI engine swap",
    body: "Two weeks in, reality intervened: Apple's on-device Foundation Models framework was beta, hardware-locked to the newest chips, and — by my own risk assessment — measurably weaker on the compound, ambiguous sentences that voice logging depends on. Shipping the product's one differentiating feature on its least-proven engine was the wrong bet. The AI layer got rebuilt behind a swappable protocol interface (UsageIntentParser, ReceiptParser), with a hosted model as the default and the on-device path preserved but demoted.",
  },
];

export const vestaProtocolInsight =
  "That protocol layer is the single most important prototyping decision in the project. It meant every subsequent reversal — cloud to on-device, on-device back to cloud — touches one interface, not the whole app. In a solo build with no team to absorb the cost of a wrong bet, a prototype that's cheap to unwind is worth more than a prototype that's polished.";

export const vestaTrustPattern =
  "I also prototyped the trust mechanism that makes AI-assisted logging usable at all: every model-driven action — barcode match, voice parse, receipt scan — surfaces a confirmation screen before anything commits to the data model. Low-confidence results get flagged amber with inline edit, never a silent guess. This one pattern repeats across four different entry points because it's the actual answer to \"how do you trust an app that's writing to your inventory based on a transcription.\"";

export const vestaTrustShot: CaseStudyShot = {
  src: "/images/vesta/receipt-review-confirm.png",
  alt: "The 'Here's what we found' review screen: a checklist of items parsed from a receipt photo, each with a checkbox, icon, name, brand, and quantity. One low-confidence item, Chickpeas, is flagged amber with a 'Check this' tag and an inline edit affordance",
  caption:
    "The pattern doing its actual work: four of five items parsed cleanly; the fifth is flagged amber rather than silently guessed.",
};

export const vestaHealthScoreShot: CaseStudyShot = {
  src: "/images/vesta/scan-confirm-health-score.png",
  alt: "The scan confirmation screen for 'Organic Flour': location, quantity, and expiry fields, plus a Vesta Health Score bar at 72/100 with Nutri-Score B and NOVA 1 badges",
  caption: "Same confirm-before-commit pattern applied to a barcode scan, with the deterministic health score.",
};

export const vestaTestGoal =
  "Put the thing in front of reality and let the results change the design.";

export const vestaTestIntro =
  "Testing here has run in two forms so far, with a third planned before public launch.";

export const vestaTestForms = [
  {
    title: "Assumption-testing against my own risk log",
    body: "Rather than waiting for a beta cohort to discover the on-device AI weakness, I wrote the accuracy bar down before building against it: on-device parsing gets promoted to default only if it lands within five points of the hosted model on a 50-transcript test set, and manual-correction rate stays under 10% in two weeks of real daily use. A test with a pre-registered pass/fail line — deliberately so a future \"should we switch engines?\" conversation is a measurement, not a re-litigation.",
  },
  {
    title: "Security and platform constraints",
    body: "Flagged and gated before it became a shipped mistake: an API key embedded in a client binary can be extracted, so a serverless proxy is a hard requirement before any public release — not optional hardening. Also tested against Apple's actual review requirements: permission-prompt copy, privacy disclosures, and data-use declarations for camera, microphone, speech, and third-party AI processing.",
  },
  {
    title: "What's currently in test",
    body: "TestFlight distribution on iOS 17+, with the hosted parser live behind the proxy. Household-level testing (multiple real kitchens, different grocery-store receipt formats, different ambient kitchen noise for voice) is written up as a companion testing guide — treating \"does this work in someone else's kitchen\" as distinct from \"does this work in mine,\" since a solo builder's own kitchen is a sample size of one.",
  },
];

export const vestaStillToTest =
  "Still to test before App Store submission: real barcode/receipt accuracy across households with different grocery brands and receipt formats, and whether the on-device parser clears the pre-registered accuracy bar.";

export const vestaDemonstrates = [
  {
    title: "A real Empathize → Define cycle",
    body: "Not a skipped step — the problem statement (friction kills accuracy, not storage quality) is what ruled out \"just build a nicer list app\" and pointed at voice as the core mechanism.",
  },
  {
    title: "Ideation disciplined by scope",
    body: "Not abandoned by it — the ambitious platform concept wasn't wasted; its visual system and IA held, while its infrastructure got cut for a solo build.",
  },
  {
    title: "Prototypes cheap enough to be wrong twice",
    body: "The protocol-based AI architecture meant two full engine reversals cost an interface change, not a rewrite.",
  },
  {
    title: "Pre-registered tests",
    body: "Not retrospective justification — the on-device promotion bar and the API-key security gate were both written down before the code that would be judged against them.",
  },
  {
    title: "Ownership of the whole loop",
    body: "Research framing, problem definition, IA, visual system, and technical architecture were one continuous set of decisions, made and lived with, with no team to hand the hard tradeoffs to.",
  },
];

export const vestaClosing =
  "This case study covers the design and product-strategy work behind Vesta as of October 2026. The product is under active development; screens shown are from the in-progress Figma file and reflect the current build, not a final shipped state.";
