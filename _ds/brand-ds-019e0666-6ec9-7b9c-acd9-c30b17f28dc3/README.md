# Keenai Design System

> **From complexity to clarity.** — A wealth-tech platform for NRI &amp; diaspora investors. Sage-Architect archetype: intuitive technology + deep human expertise.

This is a working design system: tokens, fonts, brand assets, sample components and a click-thru UI kit, all wired so a design agent can build on-brand interfaces and assets for Keenai.

## Sources used

- `Keenai_Master_Brand_Context_v2.md` — the canonical brand directive (also in project root for reference).
- `uploads/Property 1=*.{svg,png,jpg}` — official wordmarks (Black, White, Auric Ember).
- `uploads/Inter-4.1.zip` — **NOT received** (file did not arrive in uploads). Inter is currently loaded via Google Fonts CDN as a substitute. Please re-upload so it can run offline.
- *(Retired — May 2026.)* Instrument Serif files were removed from `fonts/` when the brand collapsed to Inter only.

## Index

| Path | Purpose |
| --- | --- |
| `colors_and_type.css` | All tokens — colors, type scales, spacing, radii, font features. Drop into any artifact. |
| `fonts/` | *(Empty until `Inter-4.1.zip` arrives.)* Inter is loaded from the Google Fonts CDN in the meantime. |
| `assets/` | Wordmark + monogram in five official tones (SVG + PNG), plus `header-gradient.png` (the sanctioned burgundy → ember → peach hero gradient — see §11 of the brand context). |
| `preview/` | Standalone HTML cards rendering tokens + components for the Design System tab. |
| `ui_kits/keenai-web/` | Click-thru recreation of Marketing, Sign-in, and Portfolio Dashboard. |
| `Keenai_Master_Brand_Context_v2.md` | Original brand directive — non-negotiable rules. |
| `SKILL.md` | Cross-compatible skill descriptor (works as a Claude Code skill). |

## Brand at a glance

- **Archetype:** Sage-Architect — *Clarity, by design.*
- **Audience:** NRI / diaspora investors. Globally mobile, financially sophisticated, benchmarked against premium lifestyle apps — not banks.
- **Pillars:** Utility · Advisory · Experience · Aggregation · Decision Empowerment.

---

## Content Fundamentals

**Voice.** Assured, insightful, empathetic, structured. The product whispers; it never shouts. HNIs seek certainty, not excitement — every piece of copy should *reduce the temperature of a decision*, not raise it.

**Person.** Mostly second person ("your portfolio", "your advisor"). First person plural ("we") for institutional voice in advisory notes and disclosures. Avoid "I" — Keenai is a partnership, not a personality.

**Tone rules.**
- Never noisy. Never aggressive. No exclamation marks outside transactional confirmations.
- No hype words: *crush, blast, supercharge, unlock the power of, game-changing*.
- No casual filler: *just, really, very, super, totally*.
- Use "calm verbs": *calibrate, structure, allocate, reconcile, advise, review*.

**Casing.**
- Display headlines: sentence case (`From complexity to clarity.`). Always end with a period — these are statements, not questions.
- Sub-headers (Inter): sentence case.
- CTAs / micro-UI labels: ALL CAPS with `+0.04em` tracking (`OPEN ACCOUNT`, `LAST RECONCILED`).
- Status pips, eyebrows, table headers: ALL CAPS, `+0.08em` tracking, 11–12px.

**Numbers.**
- Always tabular (`font-feature-settings: "ss02", "tnum", "lnum"`).
- Currency prefix only — `$1,248,510` (no trailing currency code unless context demands).
- Deltas use ▲ / ▼ glyphs colored Auric Ember for gain, muted for hold/decline (we never go red — performance is contextual, advisor-mediated).
- Time stamps include both date and timezone: `14 May 2026, 09:42 GMT`.

**Vibe.** Editorial, considered, quiet. Picture a well-set Financial Times feature page, not a fintech promo. Warmth comes from copy cadence and the careful use of Auric Ember on a single word — never from a font switch.

**Partnership attribution.** Keenai operates **in partnership with Lighthouse Canton**. Always write the full name in body copy ("In partnership with Lighthouse Canton"). `LCPL` is permitted *only* as a parenthetical legal-entity reference once the full name has already appeared — e.g. `Lighthouse Canton Pte. Ltd. ("LCPL")` inside a long-form disclosure. Never use `LCPL` as the shorthand brand handle in customer-facing copy.

**Emoji.** **Never.** Not in product, not in marketing, not in support. The brand is post-emoji.

**Social URLs.** The canonical social-URL register:

| Channel | URL |
| --- | --- |
| LinkedIn | `https://www.linkedin.com/company/keenaiglobal/` |
| X | _(TBA)_ |

Do not render placeholder icons for channels that aren't live — omit them.

**Sample copy snippets.**

| Where | Copy |
| --- | --- |
| Marketing hero | From complexity to clarity. |
| Hero subhead | Institutional-grade portfolios, structured products, and private credit — calibrated to your mandate, advised by a partner who knows your context. |
| Pull quote | "Wealth is not built by reacting to noise. It is built by deciding with clarity, again and again." |
| Empty state | No mandates yet. Your advisor will draft a proposal after your onboarding call. |
| Error | Reference code not recognised. Verify with your advisor. |
| Disclosure | Investments are subject to market risk. |

---

## Visual Foundations

**Colors.** Two surfaces only: Deep Navy (`#011526`) for premium digital, Warm White (`#FFFBF9`) for reports / print / lighter web. Auric Ember (`#EA4F05`) is the only chromatic accent — used at 4–8% of any composition's coverage; *never* as a large background fill outside an app-icon container.

**Type.**
- **Inter only.** Single-family system as of May 2026 — Instrument Serif has been retired from the display tier.
- Hierarchy comes from size, weight and tracking: display (weight 500, tight negative tracking, 80–120px hero), sub-headers (500/600 at 18–24px), body (400 at 16px), data (tabular features).
- The `--font-display` CSS variable still exists for compatibility, but now resolves to the same Inter stack as `--font-ui`. No italic-for-empathy treatment — italics in sans don't carry warmth and should be avoided as an emotive cue.

**Spacing.** Strict 8pt grid (4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128). Padding is generous but not airy — a Keenai card breathes from line-height and tracking, not from oversized margin.

**Backgrounds.** Solid colour first. When ornament is needed, it is *atmospheric* — soft radial glows of Auric Ember + Burgundy on Navy, never patterns or repeating textures in production UI. Print/marketing may layer subtle photographic texture (grain, paper) but never gradients with multiple chromas.

**Imagery.** Lifestyle / aspirational photography rendered warm — slight warmth in the highlights, deep shadow tone. Never cool blue; never desaturated b&w. Subjects are people in considered environments (rooftops at dusk, libraries, modernist interiors). Always full-bleed or hard-edged crops; no rounded corners.

**Animation.** Restrained. Easing should feel cinematic — `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; 240–360ms for interface transitions, 480–600ms for hero/scroll-tied moments. Numbers count up using a snap-to-final easing. **No bounce. No spring overshoot. No parallax.** When in doubt, use a simple opacity fade (160ms) and a 4–8px translate.

**Hover.** Buttons darken to Deep Crimson `#B72A06`. Text links acquire a 1px underline in Auric Ember. Cards lift via a hairline shadow — never scale or rotate.

**Press.** Buttons drop to opacity 0.9 for 80ms, then snap. No shrink transform.

**Borders.** 1px solid. On light: `rgba(0,0,0,0.10)` default, `rgba(0,0,0,0.20)` strong. On dark: `rgba(255,255,255,0.10)` default, `rgba(255,255,255,0.20)` strong. **Never** use a coloured left-accent border as the only visual treatment for a card.

**Shadows.** Used sparingly. Default is flat. A "modal" elevation uses `0 12px 32px -16px rgba(1,21,38,0.18)` only. Never an inner shadow.

**Capsules vs gradients.** When text must sit on imagery, prefer a solid Deep Navy card with the image alongside. If a protection layer is unavoidable, use a single linear gradient from `rgba(1,21,38,0.85)` to transparent — never a multi-stop blur capsule.

**Transparency &amp; blur.** Used only on overlays / sheet headers (e.g. `rgba(1,21,38,0.85)` + 12px backdrop blur). Never on cards in flow.

**Corner radii.** `0px` everywhere. The only exception is the iOS/Android app-icon container.

**Cards.** Solid background, hairline border, no rounding, no shadow by default. Optional Auric Ember 2px bottom-rule for KPI cards — used to mark a primary tile within a row of equal-weight tiles.

**Layout.** Structured grids only. 12-col responsive web; clearly defined content zones; no asymmetric / freeform layouts. Section padding uses `96 / 128 px` vertical at desktop.

**Density.** Rich without being busy. We layer photography, data, and type — but each composition has *one* primary focus, supported by exactly one or two secondary elements.

---

## Iconography

Keenai's iconography is **single-stroke, 1.5px weight, square-cap line icons**, rendered on a 24×24 grid. The visual cousins are Lucide / Tabler / Feather.

- **In this kit:** a small inline set lives in `ui_kits/keenai-web/Primitives.jsx` as `K.Icon` (chevrons, arrow, search, bell, user, lock, globe, shield, plus, trend-up, calendar, download, dot, x, menu).
- **Icon font / sprite:** none provided — the working set is hand-defined SVG paths matching the Lucide stroke language.
- **CDN fallback:** for any icon not in the kit, link Lucide directly (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`). Stroke-width: keep at 1.5; do not switch to Lucide's default 2.0.
- **Strokes / fills:** stroke-only by default. Filled glyphs only for status pips (small dots) and the diamond accent on the wordmark.
- **Color:** icons inherit `currentColor`. Active icons use Auric Ember; inactive use 55% foreground.
- **Emoji:** **never used.** Anywhere.
- **Unicode glyphs:** sparingly, only as numeric typography signals — `▲ ▼` for deltas, `·` (middle dot) as a separator, `—` (em dash) for ranges.

If you need richer assets (illustrations, market-class symbols, chart glyphs), substitute from Lucide and **flag the substitution** for review.

---

## How to consume

```html
<link rel="stylesheet" href="/colors_and_type.css">
<!-- Then use the .k-* utility classes, or pull from CSS vars -->
<h1 class="k-h1">From complexity to <em>clarity.</em></h1>
<button class="k-cta" style="background:var(--accent);color:#fff;padding:16px 24px;">Open account</button>
```

## Components

`ui_kits/keenai-web/` ships hand-built React primitives and page-level components (not sourced from a Figma kit — pre-existing, intentional additions to fill out a working click-thru): `Wordmark`, `Button`, `Label`, `Data`, `Tag`, `Card`, `Divider`, `Icon`, `NavBar`, `Hero`, `Pillars`, `Footer`, `DashboardSidebar`, `PortfolioOverview`, `Dashboard`. Each is its own `<Name>.jsx` + `<Name>.d.ts` ES module; import from `window.KeenaiDesignSystem_*` or copy directly for a consuming project.

---

## Caveats

- Inter font files were not received; loading from Google Fonts CDN as a temporary substitute.
- `assets/keenai-wordmark-orange.png` was re-cropped (May 2026) to its glyph bounds + 4% breathing margin — new dimensions are **440 × 138** (true ratio **3.19:1**, was effectively 2.59:1 due to whitespace). Anywhere this PNG is used with a hard-coded width/height pair, update to the new ratio. The `-black.png` and `-white.png` variants still carry the same whitespace and should be re-cropped on the next pass for consistency. The SVG variants are unaffected.
- Charts in the dashboard are hand-rendered illustrative SVG. Wire to a real charting layer for production.
- No Figma file was provided; UI kit is built from the brand directive and standard wealth-tech surfaces — please review for fidelity to your live product.
- Iconography is a hand-defined set in the Lucide stroke language; if Keenai has its own icon set or sprite, swap it in and update `K.Icon`.
