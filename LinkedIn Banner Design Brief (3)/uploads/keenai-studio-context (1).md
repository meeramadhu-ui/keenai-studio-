# Keenai Studio — Design Context Doc

Purpose: background for Claude design on what this tool is and its visual system, so it can help with layout/visual work.

## 1. What it is

Web app ("Keenai Studio") for generating branded social/marketing graphics — Instagram posts, Stories, LinkedIn cards, print-size docs. User picks canvas size → background/layout → types content → exports PNG.

Brand: **Keenai**. Reference moodboard (attached separately) shows the target aesthetic: dark, moody photography (cityscapes, portraits, architecture) with a warm orange gradient/vignette overlay, minimal white text, small "Keenai" wordmark bottom-left, occasional source/attribution line bottom-right.

## 2. Canvas sizes

| Name | px |
|---|---|
| Instagram (square) | 1080 × 1080 |
| Stories | 1080 × 1920 |
| LinkedIn | 1200 × 627 |
| A4 | 794 × 1123 |
| A3 | 1123 × 1587 |
| Letter | 816 × 1056 |
| A5 | 559 × 794 |

## 3. Color palette

Brand accent: **`#EA4F05`** (ember orange) — used for eyebrow/badge text, CTA text, accent lines, always.

Dark-theme text/neutrals: `#ffffff`, `#f5f0eb`, `#ede8e0`, `#d4cfc8`, `#b8b0a8`, `#1a1a1a`, `#000000`, `#041828` (deep navy-black).

Light-theme text/neutrals: `#111111`, `#1a0d05`, `rgba(26,13,5,0.78)` (body copy).

Warm accent range (for swatch picker / highlight text): `#ffd4b8`, `#ffb07a`, `#ff8040`, `#ff7a30`, `#c83d04`.

Named background styles currently in the library: *Deep Black, Dark Navy, Warm White, Arctic, Marble, Orange Flame, White Corner* (solid/gradient/procedural-pattern types) plus photo-texture backgrounds named *Crumpled Silk, Velvet Drape, Wavy Satin, Folded Material, Particle Flow, Deep Velvet* (real photography, dark, orange-toned).

Every color pairing is contrast-checked against WCAG AA automatically (background vs each text role) — anything picked should keep working with that guardrail rather than fight it.

## 4. Typography

Font: **Inter** (400 regular / 700 bold / 800 for headline).

Roles, in visual hierarchy order:
1. **Eyebrow / badge** — small, uppercase, wide letter-spacing (0.18em), accent orange
2. **Headline** — largest, bold/800, tight letter-spacing (-0.025em)
3. **Body** — regular weight, paragraph or bullet list
4. **CTA** — small pill/button style, accent color

Two size scales exist: a "Simple" single-message layout (bigger headline, ~96px at 1080 canvas) and "Dense/HD" templates (more compact, ~52px headline) meant for longer copy — badge + headline + body + footer all fit in a fixed grid with 96px outer padding.

## 5. Layout structure

Footer zone (bottom of every layout): small "Keenai" wordmark logo (left or center depending on layout) + optional source/attribution text (right-aligned, small, muted).

Layout positions available: top-left, top-right, center, bottom-left (content block anchor within the canvas).

Content modes: single headline+body ("Simple"), multi-paragraph, or bulleted list — same visual rules apply regardless of mode.

Photo-backed layouts specifically need a gradient/scrim between photo and text for legibility (currently a top-to-bottom dark gradient, ~15%→88% opacity) — this is the main visual lever if photo layouts look off.

## 6. What I want from Claude design

(Fill in — e.g. new layout compositions, refining the photo+scrim treatment, alternate type scales, etc. This part is yours, not inferred from the code.)
