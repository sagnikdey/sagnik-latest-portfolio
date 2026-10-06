import type { CaseStudyMeta, CaseStudyStat } from "@/data/case-studies/mdm";
import type { CaseStudySection } from "@/components/case-studies/sectioned-case-study";

export const saguiCaseStudyMeta: CaseStudyMeta = {
  slug: "sagui",
  eyebrow: "Case study · Design system · React component library",
  title: "SagUI",
  lede:
    "A React design system with motion built in — tokens, 60+ components, Storybook, a docs site, and an MCP server so AI tools build with the system instead of around it.",
  role: "Design Systems Lead & Design-Engineer",
  status: "v0.1 — in active development",
  stack: "React · Radix · CVA · Motion · Tailwind v4 · Storybook 10 · Next.js · Changesets",
  timeline: "2026",
  repoUrl: "https://github.com/sagnikdey/sagui",
  tags: ["DESIGN SYSTEM", "DESIGN TOKENS", "MOTION", "ACCESSIBILITY", "AI-READY"],
};

export const saguiLinks = [
  { label: "Docs", href: "https://sagui-docs.vercel.app" },
  { label: "Storybook", href: "https://sagnikdey.github.io/sagui/" },
  { label: "GitHub", href: "https://github.com/sagnikdey/sagui" },
];

export const saguiPullStats: CaseStudyStat[] = [
  { value: "69", caption: "Components across inputs, overlays, data and charts" },
  { value: "12", caption: "Chart types driven by a four-colour token palette" },
  { value: "2", caption: "Themes — every component checked for a11y in both" },
  { value: "1", caption: "MCP endpoint so AI agents look up real props" },
];

export const saguiOverview = [
  "SagUI is a design system I built as a single npm-workspaces monorepo: @sagui/tokens for semantic colour, type, radius, elevation and motion; @sagui/ui for the React components; a Storybook deployed to GitHub Pages; and a Next.js docs site on Vercel.",
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
    id: "foundations",
    label: "Foundations & tokens",
    intro:
      "Everything starts in @sagui/tokens. Components never reference raw values; they reference roles, so a theme swap or a rebrand is a token change.",
    cards: [
      {
        title: "Semantic colour, light + dark",
        body: "Role-based colours (surface, ink, border-strong, success, warning, danger) with dark mode toggled by a single data-theme attribute on <html>.",
      },
      {
        title: "Type scale with roles",
        body: "An explicit type scale with tracking on the large steps, exposed as type-* role utilities so headings and labels stay consistent.",
      },
      {
        title: "Radius & elevation roles",
        body: "Radius roles (control, container, overlay, pill) and five elevation levels, with theme-aware shadows that get denser in dark mode.",
      },
      {
        title: "Motion as tokens",
        body: "Spring and ease presets plus duration tokens (instant → considered). Components pick a role, not a millisecond value.",
      },
    ],
    shots: [
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
      "Components are built on Radix primitives for behaviour and accessibility, CVA for variants, Motion for animation, and Tailwind v4 for styling. They were shipped in families so each set shares patterns.",
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
