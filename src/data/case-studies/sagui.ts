import type { CaseStudyMeta, CaseStudyStat } from "@/data/case-studies/mdm";
import type { CaseStudySection } from "@/components/case-studies/sectioned-case-study";

export const saguiCaseStudyMeta: CaseStudyMeta = {
  slug: "sagui",
  eyebrow: "Case study · Design system · React component library",
  title: "SagUI",
  lede:
    "A design system designed in Paper and shipped in React — one token set shared by the canvas and the code, 69 motion-ready components, Storybook, a docs site, and an MCP server so AI tools build with the system instead of around it.",
  role: "Design Systems Lead & Design-Engineer",
  status: "v0.1 — in active development",
  stack: "Paper · React · Radix · CVA · Motion · Tailwind v4 · Storybook 10 · Next.js · Changesets",
  timeline: "2026",
  repoUrl: "https://github.com/sagnikdey/sagui",
  tags: ["DESIGN SYSTEM", "DESIGN TOKENS", "DESIGN-TO-CODE", "MOTION", "ACCESSIBILITY", "AI-READY"],
};

export const saguiLinks = [
  { label: "Live docs site", href: "https://sagui-docs.vercel.app/" },
  { label: "Storybook", href: "https://sagnikdey.github.io/sagui/" },
  { label: "Paper design file", href: "https://app.paper.design/file/01M4KQXQQ2FAX0HCCQ94XBA216/p-1-0" },
  { label: "GitHub", href: "https://github.com/sagnikdey/sagui" },
];

export const saguiPullStats: CaseStudyStat[] = [
  { value: "69", caption: "Components across inputs, overlays, data and charts" },
  { value: "10", caption: "Paper pages — foundations to data display, in light and dark" },
  { value: "2", caption: "Themes — every component checked for a11y in both" },
  { value: "1", caption: "MCP endpoint so AI agents look up real props" },
];

export const saguiOverview = [
  "SagUI starts on the canvas. The system is designed in a Paper file — foundations, components and patterns across ten pages — and that file reads from the same tokens the code uses: every colour is an OKLCH value with a light and a dark pair, and type, spacing, radius and shadow are named exactly as they are in CSS.",
  "The code side is a single npm-workspaces monorepo: @sagui/tokens for semantic colour, type, radius, elevation and motion; @sagui/ui for the React components; a Storybook deployed to GitHub Pages; and a Next.js docs site on Vercel.",
  "Its defining idea is that motion is part of the system, not decoration added per screen. Springs, durations and easing are tokens, every component ships with its motion already tuned, and all of it respects prefers-reduced-motion.",
];

export const saguiSections: CaseStudySection[] = [
  {
    id: "problem",
    label: "The problem",
    intro:
      "Most component libraries stop at static states. Teams then hand-roll transitions screen by screen, timings drift, dark mode breaks where someone hard-coded a colour, and AI coding tools — now writing a large share of UI — invent props that don't exist.",
    quote:
      "The goal: a system where the right choice is the easy one — for designers, developers, and the agents working alongside them.",
    shots: [
      {
        src: "/images/sagui/docs-home.png",
        alt: "The SagUI docs homepage: '69 components · open source' and the headline 'Interfaces that move with intent.' with Explore components and Give SagUI to your AI buttons",
        caption: "The docs site — install from npm, or point an AI tool at the docs and let it build.",
        width: 1440,
        height: 1000,
      },
    ],
  },
  {
    id: "design",
    label: "Designed in Paper",
    intro:
      "Paper renders real HTML and CSS, so the design file isn't a picture of the system — it's built from the system's own variables. A component on the canvas and the same component in React resolve to the same --color-*, --radius-* and --spacing-* tokens, which removes the usual translation step between design and build.",
    cards: [
      {
        title: "One token set, two surfaces",
        body: "The ~130 tokens in Paper — colour, type scale, weights, tracking, leading, spacing, radius, breakpoints, containers — mirror @sagui/tokens name for name.",
      },
      {
        title: "Organised like the library",
        body: "Ten pages map to component families: Foundations, Buttons, Inputs, Selection controls, Navigation, Messages, Cards, Data display and Icons, plus a cover.",
      },
      {
        title: "Light and dark side by side",
        body: "Every colour role has a paired -dark token, and the foundations page lays both themes out together so contrast is checked by eye before code.",
      },
      {
        title: "One icon language",
        body: "Icons were standardised on Tabler outline at a consistent stroke, swapped in across the file so the canvas matches what ships in React.",
      },
    ],
    quote:
      "If the design file and the code disagree, one of them is a bug — so they share a vocabulary from the first token.",
    shots: [
      {
        src: "/images/sagui/paper-banner.png",
        alt: "The SagUI cover board in Paper",
        caption: "The cover of the SagUI Paper file — ten pages, one token set.",
        width: 2880,
        height: 1800,
      },
    ],
  },
  {
    id: "foundations",
    label: "Foundations & tokens",
    intro:
      "Foundations were laid out first in Paper — Color, Color · Dark, Typography, Radius, Spacing and Shadows artboards — then codified in @sagui/tokens. Components never reference raw values; they reference roles, so a theme swap or a rebrand is a token change in both places.",
    cards: [
      {
        title: "Semantic colour in OKLCH",
        body: "Role-based colours (background, surface, muted, border-strong, primary, success, warning, destructive, four chart hues) defined in OKLCH for perceptually even steps, with dark mode toggled by a data-theme attribute on <html>.",
      },
      {
        title: "Type scale with roles",
        body: "Inter and JetBrains Mono on a 12–128px scale, with tracking and leading tokens, exposed as type-* role utilities so headings and labels stay consistent.",
      },
      {
        title: "Radius & elevation roles",
        body: "A 4–28px radius scale aliased into roles (control, container, overlay, pill), a 2px-based spacing scale, and five elevation levels with theme-aware shadows.",
      },
      {
        title: "Motion as tokens",
        body: "Spring and ease presets plus duration tokens (instant → considered). Components pick a role, not a millisecond value.",
      },
    ],
    shots: [
      {
        src: "/images/sagui/paper-color.png",
        alt: "Paper Color foundations board: semantic colour roles as OKLCH swatches in the light theme",
        caption: "Color foundations in Paper — semantic roles, light theme.",
        width: 2880,
        height: 2040,
      },
      {
        src: "/images/sagui/paper-color-dark.png",
        alt: "Paper Color · Dark board: the same semantic colour roles with their dark-theme values",
        caption: "The same roles in dark — every token has a paired -dark value.",
        width: 2880,
        height: 2040,
      },
      {
        src: "/images/sagui/storybook.png",
        alt: "Storybook's Colors foundation page showing semantic colour tokens such as --color-background, --color-primary and --color-destructive, with Foundations, Components and Charts in the sidebar",
        caption: "Foundations in Storybook — components only reference semantic tokens.",
        width: 1440,
        height: 900,
      },
    ],
  },
  {
    id: "components",
    label: "Component library",
    intro:
      "Each family was drawn in Paper first — variants, sizes and states on one page — then built on Radix primitives for behaviour and accessibility, CVA for variants, Motion for animation, and Tailwind v4 for styling. Designing in families meant each set shares patterns before a line of code.",
    cards: [
      {
        title: "Buttons",
        body: "Button, ActionButton, SplitButton, ButtonGroup, CopyButton and ConfirmMorph — labels morph, loading keeps focus.",
      },
      {
        title: "Inputs & selection",
        body: "Input, PasswordStrength, MoneyInput, PhoneInput, TagInput, Combobox, MultiSelect, MorphSelect, RadioCards, SegmentedControl.",
      },
      {
        title: "Messages & overlays",
        body: "Alert, Toast, Dialog, Drawer, BottomSheet, Popover, and a Tooltip that crossfades text and resizes on a spring.",
      },
      {
        title: "Data & charts",
        body: "MetricCard, SortableDataTable, Timeline, and 12 charts — line, bar, donut, gauge, streamgraph, waffle, slope, heatmap, ridgeline, treemap.",
      },
      {
        title: "App shell",
        body: "An original AppShell: sidebar that folds to an icon rail (⌘/Ctrl + B), becomes a drawer under 1024px, plus an inset variant.",
      },
      {
        title: "Text & motion effects",
        body: "TextReveal, InViewTitle, TextMorph and TextShimmer for considered, reduced-motion-safe emphasis.",
      },
    ],
    shots: [
      {
        src: "/images/sagui/paper-buttons.png",
        alt: "Paper Buttons page showing button variants, sizes and states",
        caption: "The Buttons page in Paper — variants, sizes and states drawn before they were built.",
        width: 2880,
        height: 1712,
      },
    ],
  },
  {
    id: "quality",
    label: "Quality bar",
    intro:
      "Every component passes the same checklist before it ships. The checklist is the definition of done, not an aspiration.",
    list: [
      "CVA variants and sizes, with focus, disabled and loading states",
      "Reduced-motion behaviour defined, not left to chance",
      "Stories for default, variants, sizes and states",
      "Passes the Storybook a11y addon in both light and dark themes",
      "A changeset describing the change for versioned releases",
    ],
  },
  {
    id: "docs",
    label: "Docs that can't drift",
    intro:
      "Component pages are written in Markdown with live demos marked inline. Each demo is defined once in a source file between region markers, and the docs' Code tab renders that same source — so the example a reader copies is exactly the one running on the page.",
    cards: [
      {
        title: "Single source for demo and code",
        body: "Demos live in <slug>.demos.tsx; Markdown references them by name. No pasted snippets to fall out of date.",
      },
      {
        title: "Versioned releases",
        body: "Changesets drive a Release workflow that opens a version PR and publishes to npm. CI builds Storybook to GitHub Pages.",
      },
    ],
    shots: [
      {
        src: "/images/sagui/docs-button.png",
        alt: "The Button docs page: a live Preview and Code tab showing Continue, Save draft, Cancel, Skip and Delete buttons, followed by When to use and When not to use guidance",
        caption: "Every component page opens on a live demo; the Code tab renders the same source.",
        width: 1440,
        height: 1000,
      },
    ],
  },
  {
    id: "ai",
    label: "Built for AI-assisted teams",
    intro:
      "A design system is only useful if it's what actually gets used. With so much UI now written with AI, SagUI exposes itself to agents directly.",
    cards: [
      {
        title: "Hosted MCP server",
        body: "The docs site serves an MCP endpoint, so tools like Claude look up real components and documented props instead of guessing.",
      },
      {
        title: "Storybook MCP",
        body: "Stories are queryable by agents too, giving them variants and states to reference while building.",
      },
      {
        title: "Project skill",
        body: "A sagui-sales-analytics skill encodes the rules — SagUI component first, documented props only, tokens only, both themes, accessible by default.",
      },
    ],
    quote:
      "The system's guardrails travel with the code — whether a person or an agent is writing it.",
  },
  {
    id: "proof",
    label: "Proven in a real product",
    intro:
      "SagUI was validated by building a full Sales Analytics dashboard entirely on it, installed as a packaged dependency outside the monorepo. That surfaced real gaps — bundling motion tokens for external apps, dark-theme rules dropped by the browser — which were fixed back in the system.",
    linkHref: "/work/sales-analytics",
    linkLabel: "Read the Sales Analytics case study →",
    shots: [
      {
        src: "/images/sales-analytics/dashboard.png",
        alt: "The Sales Analytics dashboard built on SagUI: KPI cards for revenue, units, margin and open alerts above a revenue trend chart",
        caption: "Sales Analytics — AppShell, MetricCard and LineChart straight from SagUI.",
        width: 1440,
        height: 1000,
      },
    ],
  },
];

export const saguiCredits =
  "The button, input and several data components are ports of the free, open-source components from Arc (uiarc.dev), rebuilt on SagUI's Tailwind and token layer.";
