# Sagnik Dey — Portfolio Design System
**Codename: BOLD EDITORIAL**

Source of truth:
- Desktop Figma: `variation-1-bold-editorial` (`18:11`)
- Mobile Figma: `mobile-bold-editorial` (`28:4`)
- Live content reference: https://sagnikdey.com/

---

## 0. The Idea

A dark, type-led portfolio that reads like a bold editorial spread — not a soft gradient landing page. Oversized condensed display type, a single orange signal color, hairline borders, and a portrait hero that owns half the viewport on desktop.

The signature move is the **hero split**: left panel carries identity and bio; right panel is a full-bleed portrait crop. On mobile the portrait slots between the headline and the bio so hierarchy stays clear without fighting for width.

Everything else stays disciplined: three type families, one accent, zero decorative glow, cards only where they hold interactive work or quotes.

---

## 1. Token System

All UI color comes from these CSS custom properties. Section components must not hardcode hex values.

```css
:root {
  --bg:             #080808; /* page canvas */
  --surface:        #111111; /* cards, footer bar */
  --surface-raised: #1A1A1A; /* tags / raised chips */
  --border:         #2A2A2A; /* hairlines, card borders */
  --ink:            #F5F0EB; /* primary text / display */
  --ink-muted:      #A09E9A; /* body, meta, secondary */
  --accent:         #FF4500; /* eyebrow, CTAs, names, underline */
  --linkedin:       #0A66C2; /* LinkedIn nav CTA only */

  /* shadcn aliases — map primitives to the editorial system */
  --background:           var(--bg);
  --foreground:           var(--ink);
  --card:                 var(--surface);
  --card-foreground:      var(--ink);
  --primary:              var(--accent);
  --primary-foreground:   #FFFFFF;
  --muted:                var(--surface-raised);
  --muted-foreground:     var(--ink-muted);
  --border:               #2A2A2A;
  --ring:                 var(--accent);
  --radius:               0.5rem; /* 8px — default (Tailwind rounded-lg). Override only when specified. */
}
```

**No light theme in this pass.** The Figma source is dark-only; do not invent a light mode without a new design frame.

---

## 2. Type System

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display | [Big Shoulders](https://fonts.google.com/specimen/Big+Shoulders) (opsz 72 ≈ old Display) | 800–900 (ExtraBold / Black) | Hero + section titles only; uppercase |
| Body | Geist | 400 | Lede + running copy |
| Mono | Geist Mono | 400–700 | Tags, nav link, CTAs, bylines, footer |

### Type scale

Named utilities in `globals.css` / `skills.MD`. **Never** use `text-[Npx]` in components.

| Token | Utility | Desktop | Mobile | Usage |
|---|---|---|---|---|
| `display-hero` | `text-display-hero` / `lg:text-display-hero-lg` | 84px / 1.12 | 56px / 1.05 | Hero headline |
| `display-section` | `text-display-section` / `lg:text-display-section-lg` | 64px / 0.9 | 44px / 1 | Section titles |
| `display-card` | `text-display-card` / `lg:text-display-card-lg` | 36px / 1 | 28px / 1 | Project titles |
| `eyebrow` | `text-eyebrow` / `lg:text-eyebrow-lg` | 24px mono | 14px mono | Hero eyebrow |
| `lede` | `text-lede` / `lg:text-lede-lg` | 24px / 1.55 | 18px / 1.5 | Opening paragraphs |
| `body` | `text-body` / `lg:text-body-lg` | 20px / 1.6 | 15px / 1.55 | Running copy |
| `quote` | `text-quote` / `lg:text-quote-lg` | 15px / 1.6 | 14px / 1.6 | Testimonials |
| `tag` | `text-tag` | 11px mono | 11px mono | Tags, labels |
| `link` | `text-link` | 13px mono bold | 13px mono bold | Text CTAs |
| `meta` | `text-meta` | 12px mono | 11–12px mono | Footer, captions |

Display titles are **uppercase**. Tracking stays tight (default / slight negative via font). Do not use Inter / Roboto / system UI as display.

---

## 3. Layout & Spacing

| Token | Desktop | Mobile |
|---|---|---|
| Canvas | 1440 reference | 390 reference |
| Gutter | 80px | 24px |
| Content width | ~1280px | fluid |
| Section Y padding | 120px | 56px |
| Card gap | 24px | 20px |
| Testimonial gap | 32px | 16px |

**Breakpoints:** mobile-first. Use `lg:` (1024px) for the hero split and two-column grids.

**Hero:**
- Desktop: ~53/47 text/image split (`lg:grid-cols-[minmax(0,768fr)_minmax(0,672fr)]` or flex 768/672 at 1440).
- Mobile: stack — eyebrow + headline → portrait → bio → links.

**About:**
- Desktop: title column (~400) + body column (~800), gap 80.
- Mobile: title + underline, then stacked paragraphs.

---

## 4. Component Inventory

### Atoms
- `Tag` — mono chip, `--surface-raised` + `--border`, `rounded-lg`
- `TextLink` — mono uppercase with ↗ prefix; ink or accent
- `ArrowButton` — circular accent CTA, 56px desktop / 44px mobile
- `SectionHeading` — display type; optional 4px accent underline (about me)

### Molecules
- `ProjectCard` — tags + title + arrow; `variant="rich"` adds number, description, role, timeline (portfolio listing)
- `TestimonialCard` — quote + accent name + muted role

### Organisms
- `PortfolioListing` — `/portfolio` intro + rich project grid
- `SiteNav` — fixed floating liquid-glass capsule (transparent + blur, no black fill): logo · Home · Portfolio · Resume · LinkedIn CTA. Mobile (`<md`): logo + menu toggle → dropdown panel with the same links.
- `Hero` — split / stacked identity block
- `SelectedWork` — 2×2 grid / stacked cards
- `About` — two-column bio
- `Testimonials` — 2-col / stacked quotes
- `SiteFooter` — copyright + back to top

### Primitives (shadcn)
Use `Button`, `Card`, `Separator`, `Badge` as base where helpful — restyle via tokens, do not invent parallel primitives.

---

## 5. Motion (React Bits)

Intentional motion only — presence and hierarchy, not noise.

| Placement | Component | Behavior |
|---|---|---|
| Hero display line | `BlurText` (TS-TW) | Word/character blur-in on load |
| Section headings | `FadeContent` (TS-TW) | Fade + slight rise on scroll into view |
| Hero text panel | ~~SideRays~~ | moved to body |
| Body (fixed full-viewport) | `SideRays` (TS-CSS, ogl) | Soft ray wash from top-left behind all content |

**SideRays defaults for this site:** `rayColor1=#FF4500` (accent), `rayColor2=#6197d3`, `origin=top-left`. Mount via `SiteBackground` on `<body>` with `next/dynamic({ ssr: false })`.

**SiteNav:** `fixed` floating liquid-glass capsule — transparent fill + `backdrop-blur` only (no solid black background).

Rules:
- Respect `prefers-reduced-motion: reduce` — skip animation / unmount WebGL effects, show final state.
- Client components only for Bits wrappers; keep page shell as Server Component where possible.
- One atmospheric background max (SideRays on body only) — do not restack it inside sections.

---

## 6. Accessibility

- Body contrast: `--ink-muted` on `--bg` must remain ≥ 4.5:1; accent text used for short labels only.
- Focus: visible `:focus-visible` ring using `--accent` / `--ring`.
- Touch targets: ArrowButton ≥ 44×44 on mobile.
- Semantic landmarks: `header`, `main`, `section` with headings, `footer`.
- Images: portrait requires meaningful `alt`.
- Keyboard: all links/buttons operable; skip decorative separators.

---

## 7. Content & Routes

Homepage sections (in order): Nav → Hero → Selected Work → About → Testimonials → Footer.

**Portfolio listing:** `/portfolio` — page intro (eyebrow + display title + lede) and rich project grid (description, role, timeline). Nav “Portfolio” points here.

**Case studies:** `/work/mdm` is a full Bold Editorial case study (problem → architecture → onboarding → AI collaboration → status). Other `/work/[slug]` routes remain stubs until written.

External links: LinkedIn + Resume from `src/data/portfolio.ts`.

**Brand extras (nav only):** `--linkedin: #0A66C2` for the LinkedIn CTA — not used as a general accent.

---

## 8. Do / Don't

**Do**
- Consume tokens (`bg-bg`, `text-ink`, `border-border`, `text-accent`, etc.)
- Use named type utilities (`text-body`, `text-tag`, `text-display-hero`, …) — see `skills.MD`
- Use `rounded-lg` (8px / `--radius`) on all bordered surfaces by default
- Match Figma content and hierarchy before inventing layout flourishes

**Don't**
- Purple gradients, cream paper themes, or glow stacks
- Cards in the hero
- Raw hex in section components
- Arbitrary type sizes (`text-[11px]`, `text-[15px]`, …) — add a token instead
- Light-mode toggle without a Figma source
- Square (`rounded-none`) or ad-hoc radii unless a design explicitly asks for them

**Radius exceptions (only when specified):** circular CTAs (`ArrowButton` / project arrow) stay `rounded-full`.
