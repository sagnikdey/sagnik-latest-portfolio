import type { CaseStudyMeta, CaseStudyStat } from "@/data/case-studies/mdm";
import type { CaseStudySection } from "@/components/case-studies/sectioned-case-study";

export const salesAnalyticsCaseStudyMeta: CaseStudyMeta = {
  slug: "sales-analytics",
  eyebrow: "Case study · Data product · Dashboard design",
  title: "Sales Analytics",
  lede:
    "A sales analytics dashboard for a regional leader running 10 convenience stores — not just charts, but an alert inbox and action tracker that turn what the data shows into what the team does next.",
  role: "Product Designer & Design-Engineer",
  status: "v1 — shipped",
  stack: "Next.js 16 · React 19 · SagUI · Tailwind v4 · Claude",
  timeline: "2026",
  repoUrl: "",
  tags: ["DASHBOARD", "DATA VISUALIZATION", "B2B", "DESIGN SYSTEM", "AI-ASSISTED BUILD"],
};

export const salesAnalyticsLinks = [
  { label: "Live demo", href: "https://sales-analytics-delta-one.vercel.app/" },
  { label: "SagUI design system", href: "/work/sagui" },
];

export const salesAnalyticsPullStats: CaseStudyStat[] = [
  { value: "10", caption: "Stores compared against targets and each other" },
  { value: "2 yrs", caption: "Of daily sales, seeded so every number is repeatable" },
  { value: "6", caption: "Alert types, each with a recommended action" },
  { value: "0", caption: "Custom UI components — built entirely on SagUI" },
];

export const salesAnalyticsOverview = [
  "A regional sales leader responsible for ten convenience stores needs to answer the same questions every morning: what's selling, what isn't, which stores are slipping, and what's about to run out.",
  "Sales Analytics answers those questions and then closes the loop. It surfaces the highest and lowest sellers, compares stores, raises inventory and sales alerts, and tracks the actions taken on them — built on the same master data as my MDM platform and entirely on the SagUI design system.",
];

export const salesAnalyticsSections: CaseStudySection[] = [
  {
    id: "problem",
    label: "The problem",
    intro:
      "Most retail dashboards stop at reporting. They show a red number and leave the manager to work out why, decide what to do, and remember to follow up — in a spreadsheet, an email thread, or not at all.",
    quote:
      "A dashboard earns its place when it shortens the distance between noticing a problem and fixing it.",
  },
  {
    id: "user",
    label: "Designing for the regional lead",
    intro:
      "The primary user is a regional sales leader who scans broadly, then drills into one store or one SKU. Every page follows that rhythm: summary first, comparison second, detail on demand.",
    cards: [
      {
        title: "What changed since yesterday?",
        body: "The dashboard leads with KPI cards and period-over-period deltas, filterable by 7, 30, 90 or 365 days and by store.",
      },
      {
        title: "Where do I look first?",
        body: "Alerts are ranked by severity — critical, warning, info — so the inbox is a to-do list, not a log.",
      },
      {
        title: "What should I do about it?",
        body: "Every alert carries a recommended action the lead can accept, adjust, or assign in a couple of clicks.",
      },
    ],
    shots: [
      {
        src: "/images/sales-analytics/dashboard.png",
        alt: "Sales overview dashboard: store and date-range filters, KPI cards for revenue, units sold, gross margin and 30 open alerts, and a revenue trend comparing this period with the previous one",
        caption: "Summary first — KPIs with period-over-period deltas, then the trend behind them.",
        width: 1440,
        height: 1000,
      },
    ],
  },
  {
    id: "ia",
    label: "Information architecture",
    intro: "Six sections, each answering one question, with drill-down detail pages for individual stores and products.",
    cards: [
      { title: "Dashboard", body: "Headline KPIs, trends, and the most urgent alerts at a glance." },
      { title: "Products", body: "Best and worst sellers, biggest movers, and a category treemap. Per-SKU detail." },
      { title: "Stores", body: "Targets, ranking, and per-store detail with its own trends and alerts." },
      { title: "Inventory", body: "Stock status across stores — out, low, healthy, over — with days of cover." },
      { title: "Alerts", body: "An inbox with status (open → acknowledged → actioned → resolved) and suggested actions." },
      { title: "Actions", body: "A tracker for reorders, transfers, markdowns, notifications and tasks — owner, due date, status." },
    ],
    shots: [
      {
        src: "/images/sales-analytics/products.png",
        alt: "Products page with Highest selling, Lowest selling, Biggest movers and Category map tabs over a table of products with revenue, units, change, margin, cover and an Act button",
        caption: "Products — best and worst sellers, with an action on every row.",
        width: 1440,
        height: 1000,
      },
      {
        src: "/images/sales-analytics/stores.png",
        alt: "Store comparison: ten progress-to-target gauges, with Lubbock Tech Park in red at 64% while the others sit between 70% and 75%",
        caption: "Stores — the declining store stands out against target at a glance.",
        width: 1440,
        height: 1000,
      },
    ],
  },
  {
    id: "alerts",
    label: "From alert to action",
    intro:
      "The core design work was the alert model. Each alert type maps to a likely response, so the system can pre-fill the action and the lead only has to confirm.",
    cards: [
      { title: "Stockout → Transfer, then reorder", body: "Critical. If another store has surplus, suggests transferring units from it first; otherwise a vendor reorder." },
      { title: "Low stock → Reorder", body: "Warning, escalating to critical under three days of cover. Pre-fills the quantity to refill to shelf maximum." },
      { title: "Overstock → Markdown", body: "Info. Suggests a 20% markdown for two weeks, or a transfer to a store that's short." },
      { title: "Slow mover → Promotion", body: "Warning. Suggests a 15% promotion and a shelf-placement review with the vendor." },
      { title: "Surge → Chain-wide order", body: "Info. Suggests an order covering two weeks of the new demand so a hot product doesn't sell out." },
      { title: "Store decline → Notify", body: "Warning. Asks the store manager for a recovery plan this week." },
    ],
    shots: [
      {
        src: "/images/sales-analytics/alerts.png",
        alt: "Alert inbox with Needs attention, Action taken and Resolved tabs, severity and type filters, and a table of critical stockout and low-stock alerts each with a Review button",
        caption: "The alert inbox — sorted by severity, filterable by type, one click to review.",
        width: 1440,
        height: 1000,
      },
    ],
  },
  {
    id: "data",
    label: "Data with a story",
    intro:
      "Real sales data wasn't available, so I wrote a seeded generator that builds two years of daily sales and a stock snapshot from the MDM master data — 10 stores, 25 products, 16 categories, 10 vendors. The same seed always gives the same numbers, so design reviews and tests see identical results.",
    list: [
      "An energy drink surging chain-wide — and out of stock at two stores",
      "A spinach salad in sharp decline — and overstocked",
      "A tech-park store steadily losing traffic over the last quarter",
      "An airport store that is consistently the busiest",
    ],
    note: "Planting these scenarios meant every screen had a real problem to surface, which made it possible to judge whether the design actually led the user to it.",
    shots: [
      {
        src: "/images/sales-analytics/inventory.png",
        alt: "Stock health page: KPI cards for 2 out of stock, 14 below reorder point, 12 overstocked and 216 healthy, above a table where the energy drink is out of stock at two stores with Reorder buttons",
        caption: "Inventory — the planted stockouts and overstock show up exactly where expected.",
        width: 1440,
        height: 1000,
      },
    ],
  },
  {
    id: "system",
    label: "Built entirely on SagUI",
    intro:
      "The whole interface is composed from SagUI — AppShell, MetricCard, SortableDataTable, line, bar, donut, slope, waffle, treemap and activity-heatmap charts, Dialog, Toast, and the form controls. The app contains layout code, not custom components.",
    cards: [
      {
        title: "Tokens only",
        body: "No hex values or Tailwind palette classes in app code, so light and dark themes work everywhere by default.",
      },
      {
        title: "A skill as guardrail",
        body: "A project skill gave Claude the rules — SagUI component first, documented props only, accessible labels on every chart.",
      },
      {
        title: "Feedback into the system",
        body: "Building a real product exposed gaps in SagUI — packaging, dark-theme chart styles, an inset AppShell — fixed upstream.",
      },
    ],
    linkHref: "/work/sagui",
    linkLabel: "Read the SagUI case study →",
  },
  {
    id: "next",
    label: "What's next",
    list: [
      "Connect to live POS and inventory feeds in place of generated data",
      "Role-based views for store managers alongside the regional lead",
      "Alert thresholds the lead can tune per store and category",
      "Measure time from alert to resolved action as the product's success metric",
    ],
  },
];
