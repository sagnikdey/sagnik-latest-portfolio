# Portfolio coding skills

Conventions for this repo. Prefer these over ad-hoc styling. Visual tokens also live in `design.MD` and `src/app/globals.css`.

---

## Typography — no arbitrary pixel sizes

**Do not** use inline hardcoded Tailwind sizes like:

- `text-[11px]`
- `text-[15px]`
- `text-[13px]`
- `text-[44px]` / `leading-[1.55]` style one-offs for type

**Do** use the named type-scale utilities from `@theme` in `globals.css`:

| Utility | Size | Use |
|---|---|---|
| `text-tag` | 11px | Tags, mono labels, table heads, step markers |
| `text-meta` | 12px | Footer / secondary mono meta (`lg:` step-up from tag) |
| `text-link` | 13px | Mono CTAs / text links (uppercase) |
| `text-quote` / `text-quote-lg` | 14 → 15px | Testimonials |
| `text-body` / `text-body-lg` | 15 → 20px | Running copy, card descriptions |
| `text-lede` / `text-lede-lg` | 18 → 24px | Opening paragraphs |
| `text-eyebrow` / `text-eyebrow-lg` | 14 → 24px | Hero eyebrow |
| `text-display-card` / `text-display-card-lg` | 28 → 36px | Project titles |
| `text-display-section` / `text-display-section-lg` | 44 → 64px | Section titles |
| `text-display-hero` / `text-display-hero-lg` | 56 → 84px | Hero headline |

Example:

```tsx
// ❌
<p className="text-[15px] leading-[1.55] text-ink-muted lg:text-xl">…</p>

// ✅
<p className="text-body text-ink-muted lg:text-body-lg">…</p>
```

If a size is missing from the scale, **add a token** in `globals.css` (+ document in `design.MD` / this file) — do not invent another `text-[Npx]`.

Same rule for leading: prefer the line-height baked into the type token (or a named leading token) over `leading-[1.55]`.

### Base heading elements

`globals.css` maps semantic headings to the display scale by default:

| Element | Maps to |
|---|---|
| `h1` | `text-display-hero` / `lg:text-display-hero-lg` |
| `h2` | `text-display-section` / `lg:text-display-section-lg` |
| `h3` | `text-display-card` / `lg:text-display-card-lg` |
| `h4` | `text-lede` / `lg:text-lede-lg` |

All use the display scale from `globals.css`. Prefer bare `<h2>` / `<h3>` / `<h4>` — do not restate type utilities on those elements. Override only when a heading truly needs a different role (e.g. `sr-only`).

---

## Radius

Default bordered surfaces: `rounded-lg` (8px / `--radius`). Circular arrow CTAs may stay `rounded-full` when specified.

---

## Color

Use semantic tokens (`bg-bg`, `text-ink`, `text-ink-muted`, `text-accent`, `border-border`, …). No raw hex in section components.
