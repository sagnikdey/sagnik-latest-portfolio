import type {
  CaseStudyMeta,
  CaseStudyShot,
  CaseStudyStat,
} from "@/data/case-studies/mdm";
import type { CaseStudyNavItem } from "@/components/case-study-section-nav";

export const quickstopCaseStudyMeta: CaseStudyMeta = {
  slug: "quickstop-ios",
  eyebrow: "Case study · AI-assisted design & development · iOS",
  title: "QuickStop",
  lede:
    "A convenience-store app built around one premise: give customers their time back. An end-to-end, AI-assisted workflow — research, information architecture, Figma screens, and a native SwiftUI port — designed for certainty at the point of need.",
  role: "Product Designer + iOS Developer",
  status: "v1 — in progress",
  stack: "Claude · Figma + Figma MCP · SwiftUI / UIKit · Cursor · ConvexMobile · Stripe",
  timeline: "2025 – 2026",
  repoUrl: "",
  tags: ["iOS", "END-TO-END UX", "AI ASSISTANT", "DESIGN SYSTEM", "SWIFTUI"],
};

export const quickstopNavItems: CaseStudyNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "01 The problem" },
  { id: "research", label: "02 Research" },
  { id: "ia", label: "03 Architecture" },
  { id: "taxonomy", label: "04 Shop taxonomy" },
  { id: "design-system", label: "05 Design system" },
  { id: "screens", label: "06 Screens" },
  { id: "ios", label: "07 iOS build" },
  { id: "ai", label: "08 AI workflow" },
  { id: "next", label: "Open questions" },
];

export const quickstopPullStats: CaseStudyStat[] = [
  { value: "5", caption: "Personas, each with a different definition of “fast”" },
  { value: "5", caption: "Tabs in the final nav — Scan & Go promoted" },
  { value: "10", caption: "Shop categories, two of them age-gated" },
  { value: "70+", caption: "Light/Dark color tokens extracted from Figma" },
];

export const quickstopOverview = [
  "QuickStop is a convenience store app built around a single premise: give customers their time back. Convenience stores fail at the one thing in their name — lines, out-of-stock items, awkward checkout — so the app targets five distinct user mindsets, each with a different definition of “fast.”",
  "This case study documents an end-to-end AI-assisted workflow: research and strategy, information architecture, interaction design in Figma, and a full port to native iOS in Swift.",
];

export const quickstopProblem =
  "Current convenience store apps, where they exist at all, are glorified loyalty cards. They don't solve the core friction: uncertainty. Is the item in stock? How long is the line? Will my mobile order be ready, or sitting open on a shelf anyone can grab?";

export const quickstopProblemInsight =
  "The opportunity was to build for certainty — and let speed follow naturally from that.";

export const quickstopResearchIntro =
  "Using Claude, five personas were developed from a bottom-up analysis of real convenience store use patterns — not broad demographics, but specific jobs to be done at different times of day. Each came with pain points, needs, and a priority weighting across Speed, Freshness, Reliability, and Discovery, which became the decision criteria for the rest of the project.";

export const quickstopPersonas = [
  {
    name: "Marcus Hale, 32 · Sales Rep",
    archetype: "The Commuter",
    need: "Order-ahead and a 90-second in-and-out.",
  },
  {
    name: "Priya Ramanathan, 28 · ER Nurse",
    archetype: "The Night Shifter",
    need: "Curbside pickup and fresh-food transparency at 3am.",
  },
  {
    name: "Danny Reyes, 41 · Contractor",
    archetype: "The Bulk Buyer",
    need: "Group orders, business receipts, crew presets.",
  },
  {
    name: "Zoe Kapoor, 19 · Student",
    archetype: "The Impulse Local",
    need: "Scan-and-go, discovery, three taps max.",
  },
  {
    name: "Sarah Mitchell, 38 · Parent / WFH",
    archetype: "The Emergency Errand",
    need: "Sub-15-minute delivery and verified real-time stock.",
  },
];

export const quickstopResearchInsight =
  "Across all five, the unifying need is certainty — that the item is in stock, that the line won't kill them, that the trip will take exactly as long as expected.";

export const quickstopIaIntro =
  "The IA was worked out iteratively with Claude — proposing structures, stress-testing them against each persona's flow, and revising. The starting point was five tabs: Home, Shop, Orders, Store, You.";

export const quickstopIaDecisions = [
  {
    title: "Scan & Go becomes a top-level tab",
    body: "It was nested inside Shop as a mode. I promoted it because it's a mode of being in the store, not a browsing mode; it has a fundamentally different input model (camera-first vs. browse/search); and Zoe's “three taps or abandon” constraint is much easier to hit from the tab bar.",
  },
  {
    title: "Store folds into Home's smart header",
    body: "To keep the nav at five tabs, live inventory, hours, and locations moved into Home rather than a tab of their own. That pulls the certainty layer closer to the first screen every user sees.",
  },
  {
    title: "Group ordering deferred to v2",
    body: "Crew/group ordering, business accounts, and itemized tax receipts were scoped out to keep v1 shippable.",
  },
];

export const quickstopNavTable = [
  { tab: "Home", purpose: "Smart entry — reorder, quick actions, store status", persona: "Marcus, Sarah" },
  { tab: "Shop", purpose: "Browse catalog, Order Ahead + Delivery modes", persona: "Zoe, Priya" },
  { tab: "Scan", purpose: "Camera-first in-store checkout", persona: "Zoe, Marcus" },
  { tab: "Orders", purpose: "Active + historical, all pickup/delivery methods", persona: "All" },
  { tab: "You", purpose: "Profile, payment, loyalty", persona: "All" },
];

export const quickstopTaxonomyIntro =
  "Shop was the most structurally complex section: ten top-level categories, each with subcategories and special filters, plus two age-gated categories that need a separate verification model.";

export const quickstopCategories = [
  "Hot Food & Pizza",
  "Coffee & Hot Drinks",
  "Cold Drinks",
  "Snacks & Candy",
  "Fresh Food",
  "Ice Cream & Frozen",
  "Beer, Wine & Spirits (age-gated)",
  "Tobacco & Vaping (age-gated)",
  "Grocery & Household",
  "Health & Beauty",
];

export const quickstopAgeGate = {
  title: "Age-gated model: trust and confirm",
  body: "Date of birth is stored once at account level, with a one-time-per-session cart acknowledgement and a manual visual ID check at handoff by the driver or associate. No in-app ID scanning in v1 — it's deferred to v2 as a drop-in addition to the same flow.",
};

export const quickstopCrossCutting = [
  { title: "The Usual", body: "History-driven reorder strip, built for Marcus." },
  { title: "New This Week", body: "Discovery strip for Zoe — excludes age-gated items." },
  { title: "Need It Now", body: "Emergency shortcut preset for Sarah." },
  { title: "Running Low?", body: "Cadence-based reorder prompts." },
];

export const quickstopDesignSystemIntro =
  "Before designing screens, I established the color system. The palette was extracted from Figma's Apple Design System file through Figma MCP and exported as a production-ready Swift file, which removed the manual copy-paste step entirely.";

export const quickstopBrandColors = [
  { name: "brandPrimary", label: "Teal", hex: "#30C5FF" },
  { name: "brandAccent1", label: "Forest", hex: "#5C946E" },
  { name: "brandAccent12", label: "Sage", hex: "#80C2AF" },
  { name: "brandAccent13", label: "Sky", hex: "#A0DDE6" },
];

export const quickstopDesignSystemNote =
  "The output, DSColors.swift, is a SwiftUI + UIKit extension covering brand colors, system and grouped backgrounds, labels, fills, separators, and overlays — 70+ tokens, all with Light and Dark values.";

export const quickstopScreensIntro =
  "Screens were built in Figma from the Apple Design System library with QuickStop tokens applied. Through Figma MCP, Claude wrote and executed plugin code directly in the file — creating frames, placing components, setting fills, wiring auto-layout — instead of me building each screen by hand.";

export const quickstopScreens = [
  {
    title: "Shop Landing",
    body: "Search bar, Order Ahead / Delivery mode selector, “The Usual” card, and a 10-category grid with age-gated lock badges.",
  },
  {
    title: "Cold Drinks category",
    body: "Subcategory chips, a featured banner, and a sectioned product grid with stock indicators.",
  },
  {
    title: "Product Detail",
    body: "Product image, nutrition facts grid (calories, sugar, caffeine, serving), and a “frequently bought together” strip.",
  },
  {
    title: "Onboarding, six screens",
    body: "Value prop, location permission, category preferences, sign-in, first-order preset, then success with a habit prompt.",
  },
];

export const quickstopOnboardingShot: CaseStudyShot = {
  src: "/images/quickstop/onboarding-flow.png",
  alt: "The six-screen QuickStop onboarding flow in Figma: a '4 minutes — your order, ready, guaranteed' value prop, a store-finder map, a category preference grid, sign-in options, a pre-built first order, and an order-placed confirmation with a QR code and a 'make this your usual' prompt",
  caption:
    "Onboarding in six screens — the flow ends on a certain pickup time and a prompt to turn the first order into a habit.",
};

export const quickstopYouShot: CaseStudyShot = {
  src: "/images/quickstop/you-tab.png",
  alt: "The You tab: a profile card with points, day streak, and tier; grouped lists for My QuickStop, Payment & Rewards, and Settings; and the five-item tab bar at the bottom",
  caption:
    "The You tab — grouped lists on a #F2F2F7 background, 14pt cards, continuous corners.",
};

export const quickstopDesignLanguage =
  "SF Pro throughout, QuickStop teal for primary actions, iOS system greens, oranges, and reds for stock status, #F2F2F7 grouped backgrounds, and a 14pt card radius with continuous corners.";

export const quickstopIosIntro =
  "The designs were ported to native SwiftUI and UIKit, with DSColors.swift as the bridge between design and code. The project separates concerns strictly: an atomic hierarchy for UI components, and a feature-based structure for product areas.";

export const quickstopProjectTree = `Quickpitstop/
└── Sources/
    ├── App/            # Entry points
    ├── Components/     # Atomic design system
    │   ├── Atoms/        DSButton, DSBadge, DSTextField…
    │   ├── Molecules/    ProductCard, StockBadge, CartItemRow…
    │   ├── Navigation/   DSTabBar, DSToolbar
    │   └── Organisms/    ProductGrid, CartSummary…
    ├── DesignSystem/
    │   └── Tokens/       DSColors, DSTypography, DSSpacing,
    │                     DSRadius, DSShadow
    ├── Features/       # Home, Cart, Orders, Search, Account, Auth
    ├── ViewModels/
    └── PreviewMocks`;

export const quickstopIosPoints = [
  {
    title: "Tokens only, no magic numbers",
    body: "Views use Color.brandPrimary, Color.backgroundSecondary, and the DSSpacing / DSRadius constants. No hardcoded hex values appear in feature or component code, and Light/Dark is handled entirely at the token level.",
  },
  {
    title: "Figma hierarchy mirrored in code",
    body: "A molecule in Figma maps to a molecule in Swift. The asset catalog follows the Figma variable groups (Brand/Primary, Backgrounds/Secondary, Labels/Primary), so handoff is mechanical rather than interpretive.",
  },
  {
    title: "Real-time backend for the core promise",
    body: "ConvexMobile syncs live inventory, order status, and stock levels — directly serving the promise of certainty. Stripe handles payment in checkout.",
  },
  {
    title: "Feature folders with preview fixtures",
    body: "Each product area owns its views and shares state through the ViewModels layer. PreviewMocks supply fixture data so SwiftUI previews work with no live backend.",
  },
];

export const quickstopCursorNote =
  "The Swift implementation was built in Cursor with the project structure and DSColors.swift as persistent context. It scaffolded each atom and molecule from a description of its Figma equivalent, resolved the right token for each use, generated preview mocks alongside components, and propagated token renames across every component file in one pass.";

export const quickstopAiFaster = [
  "Persona generation and synthesis: hours down to under an hour",
  "IA iteration: propose, critique, and revise in one session",
  "Shop taxonomy: category naming, subcategory logic, age-gating edge cases",
  "DSColors.swift: extracted from Figma rather than transcribed",
  "Figma screen construction: plugin code written and executed via MCP",
];

export const quickstopAiHuman = [
  "Deciding which structural option was right (Scan & Go promotion, Store into Home)",
  "Visual taste: checking designs looked right, not just structurally correct",
  "Scoping what goes in v1 versus v2",
  "Swift architecture decisions during the native port",
];

export const quickstopAiConclusion =
  "The workflow didn't remove design judgment — it removed the time between having a judgment and seeing it rendered.";

export const quickstopOpenQuestions = [
  "First-time DOB prompt: onboarding (less friction later) or just-in-time (only when needed)?",
  "Under-21 accounts: hide age-gated categories entirely, or show a locked state?",
  "Scan & Go geofencing: require in-store location to activate the scanner, or always available?",
  "Home personalization: how aggressive on day one with no behavior history?",
];

export const quickstopNext = [
  "Age-gated checkpoint sheet (the ID-required modal at cart level)",
  "Orders tab: active order tracking and pickup-method screens",
  "Scan & Go flow: scanner UI, cart drawer, exit and pay",
  "v2 scoping: crew/group ordering, business accounts, in-app ID verification",
];
