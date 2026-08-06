# Handoff: Keenai Studio — Graphic Generator

## Overview
Keenai Studio is an in-house tool for marketing to generate on-brand social/marketing graphics (Instagram, Stories, LinkedIn banner, and print sizes A4/A3/Letter/A5) without touching a design tool. Users pick a canvas size, a background treatment, a content layout, then edit copy (eyebrow, headline w/ one accent word, body, CTA) in a form; a live canvas preview renders the result and can export to PNG.

## About the Design Files
The files in this bundle are a **working HTML/React prototype** (single-file "Design Component" using an internal templating runtime, plain JS classes, and inline styles — not a production React app). They are a **functional reference**, not code to paste into a codebase as-is. The task is to **recreate this tool's UI, layout logic, and interactions in the target codebase's stack** (React/Vue/etc., whichever the team already uses), reusing its existing component library, design-token system, and state-management conventions rather than the ad hoc patterns used here.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and the sizing/layout algorithms below are final and should be recreated precisely, including the auto-fit behavior described under "Layout Engine."

## Screens / Views
Single screen, two-pane layout:
- **Left sidebar** (~340px, cream background `#F7F1EC`-ish, scrollable): Canvas Size chips, Background swatches (solid/gradient/photo-texture), Layout picker, Content form (Eyebrow, Headline, Accent word, Body + mode toggle Paragraph/Bullets, CTA + style toggle Outline/Fill, "Draft with AI" button), Logo position.
- **Right stage**: top toolbar with a size/zoom readout pill (left) and an "EXPORT PNG" pill button (right, Auric Ember fill, fully rounded), then the live canvas preview centered below, scaled to fit the viewport.

## Canvas Sizes (px)
| Key | Label | W | H |
|---|---|---|---|
| ig | Instagram | 1080 | 1080 |
| story | Stories | 1080 | 1920 |
| li | LinkedIn | 1200 | 627 |
| a4 | A4 | 794 | 1123 |
| a3 | A3 | 1123 | 1587 |
| letter | Letter | 816 | 1056 |
| a5 | A5 | 559 | 794 |

A global `unit = canvasWidth / 1080` scales all type/spacing proportionally to canvas size.

## Backgrounds
Solid/gradient (`bgDefs`): Ember Glow (radial ember glow on Deep Navy `#011526`), Dark Navy (`linear-gradient(155deg,#041828,#020d14)`), Deep Black (`radial-gradient(ellipse at 30% 40%,#120808,#000)`), Deep Velvet (photo, scrim `linear-gradient(180deg, rgba(1,21,38,.15) 0%, rgba(1,21,38,.35) 45%, rgba(1,21,38,.9) 100%)`), Orange Flame (`radial-gradient(ellipse at 70% 70%,#c8401a,#0d0000)`), White Radial (`radial-gradient(ellipse at 20% 30%,#ffffff,#EA4F05)`, light), Warm White (`#FFFBF9`, light), Marble (`#ede8e0`, light), Arctic (`#eef2f5`, light).
Photo textures (`texDefs`, all dark, cover-fit JPGs at `assets/textures/`): Crumpled Silk, Velvet Drape, Wavy Satin, Folded Material, Particle Flow, Deep Velvet.
A "Generate" action produces a random Ember/Burgundy radial glow on Deep Navy as a one-off custom background.
Each background carries a `dark` flag driving foreground/eyebrow/body color and logo filter (white logo on dark, inverted/black on light).

## Content Layouts
1. **Text only ("classic")** — no image; content anchored to one of the corners/center (`anchor`: tl/tr/bl/br/center) with a pinned footer (logo + source line) at the canvas edges.
2. **Top / bottom split ("topBottom")** — text zone on top, image fills the remaining band at the bottom.
3. **Giant picture, bottom words ("giantPicture")** — image band on top, text zone below it.
4. **Picture behind everything ("pictureBehind")** — full-bleed image background with a top-to-bottom scrim (`linear-gradient(180deg, rgba(1,21,38,.35) 0%, rgba(1,21,38,.55) 50%, rgba(1,21,38,.82) 100%)`), text centered on top in white/ember.
5. **LinkedIn split** ("li" size + any picture layout except classic) — special-cased: fixed-width image panel pinned to the right edge, text + footer in the remaining left panel.

Images use a drag-and-drop placeholder component (persists the dropped image by a stable id per layout/slot) with cover/contain fit.

## Layout Engine (critical — recreate exactly)
This is the part most likely to regress if reimplemented naively; the prototype went through many bugfixes to get here.

**Principle: text is never allowed to overflow or clip; the image is what shrinks to make room.**

- **Wrap-aware height estimation**: line counts from raw `\n`-splits are not enough (a single long unbroken paragraph still wraps to several visual lines). Estimate wrapped line count from `text.length / charsPerLine`, where `charsPerLine ≈ availableWidth / (fontSize * 0.56)`.
- **Content-type-aware estimation**: body content auto-detects three shapes from the raw text (per line):
  - **Stat grid**: lines that start with a number/currency/%/ranking token (regex `^\s*(#?[+-]?(?:[$₹€£]\s?)?\d[\d,]*\.?\d*\s?(?:%|x|bn|mn|K|M|B)?\+?)\s*(?:[:\-–—]\s*)?(.+)$`) render as a CSS grid of large-numeral KPI cards (2–3 cols depending on count) with a hairline top rule.
  - **Row list**: ≥2 lines matching `title: description` render as a bulleted list with hairline dividers, bold title + muted description (each description itself wrap-estimated for height).
  - **Plain paragraph/bullets**: fallback: paragraphs (with inline numeric-token highlighting in Ember) or dash-bullets.
- **Real DOM measurement over pure estimation**: the estimate above is only used for the *first* paint. After mount/update, a `ref` on the text+footer block measures `scrollHeight` via `componentDidUpdate`; if it differs from the estimate by >2px, state updates with the measured height and the layout re-renders using the real number (converges in 1 render, no loop — guarded by a content-signature key so it doesn't re-fire once stable).
- **Image sizing from that height** (topBottom/giantPicture): `picFrac = clamp(floor, cap, (canvasHeight - estimatedOrMeasuredTextHeight - buffer) / canvasHeight)`. Floor 0.14 (image never fully disappears), cap 0.78 for square/social canvases but **0.5 for document-ratio canvases** (height/width ≥ 1.2, i.e. A4/A3/Letter/A5) so print-style formats default to giving content more room.
- **LinkedIn split sizing**: same idea but along both axes — image panel *width* fraction (`liPicFrac`, floor 0.22, cap 0.52) shrinks as content grows; **and** because the panel's *height* is fixed (627px is short), a second correction shrinks the LinkedIn panel's own type scale (`liShrink`) to guarantee everything (headline, body, stat/row list, footer) fits without clipping. This shrink is computed and applied to the shared `hSize`/`eSize`/`bSize` **before** the stat-grid/row-list body nodes are built — applying it only to headline/eyebrow/body afterward (a bug hit during iteration) leaves the row-list unshrunk and inverts the type hierarchy. The shrink factor is then also corrected via the same measure-after-render technique described above (parent `clientHeight` minus padding vs. child `scrollHeight`), floor 0.22.
- **Vertical centering, not top-anchoring**: the text+footer block is vertically centered within its zone (`justifyContent:'center'`) rather than anchored to the top with fixed padding — anchoring left top/bottom gaps uneven whenever the estimate had slack; centering guarantees equal gaps regardless of estimate error.
- **Footer gap is a fixed constant, not proportional**: the gap between the last line of content and the footer (logo + source line) is a fixed pixel value (`~32 * unit`, added as `marginTop` on the footer row) that does **not** stretch with `justify-content: space-between` — an earlier version used space-between and the gap grew/shrank unpredictably with content length.
- **Type scales down before hard limits**: headline/eyebrow/body sizes shrink slightly (~5%) whenever any picture layout is active, and more aggressively as raw line-count grows (`overflowShrink`), so the "shrink the image" and "shrink the type" mechanisms cooperate rather than only one bearing the load.

## Design Tokens
- **Colors**: Deep Navy `#011526` (dark surface), Warm White `#FFFBF9` (light surface), Auric Ember `#EA4F05` (sole accent — accent word in headline, numeric tokens in body, stat values, CTA fill/outline). Foreground on dark = white/near-white; on light = near-black. Muted/footer text: `rgba(255,255,255,.55–.7)` on dark, `rgba(26,13,5,.55–.7)` on light.
- **Typography**: Inter only. Headline weight 700, `letter-spacing:-0.03em`, `line-height:1.02`. Eyebrow: weight 600, uppercase, `letter-spacing:0.18em`, small (~18–24px at 1080 canvas width). Body: weight 400, `line-height:1.45`. All numerals use tabular figures.
- **Corners**: `0px` everywhere (no rounded corners on cards/images), **except** the CTA button and the Export PNG button, which are fully rounded (pill).
- **Spacing**: outer canvas padding `P = canvasWidth * 0.075`; vertical inset `vpad` grows on tall canvases. All spacing values are multiples of the `unit` scale, not fixed px.

## Assets
- `assets/keenai-wordmark-white.svg` — logo, shown bottom-left (or bottom-center) of every canvas, ~4.5% of average canvas dimension in height. Filter: none on dark backgrounds, `invert(1)` on light.
- `assets/textures/*.jpg` — six photographic background textures (see Backgrounds section).
- Drag-and-drop image placeholder component for the picture-layout slots (persists per-slot by id).

## Interactions & Behavior
- All form fields are controlled inputs bound to component state; canvas re-renders live on every keystroke.
- "Draft with AI" calls an LLM to generate eyebrow/headline/body copy from a topic prompt.
- Export PNG rasterizes the canvas DOM node to a PNG download.
- Canvas size / layout / background selections are single-select chip groups; CTA style is a 2-way outline/fill toggle; body mode is a 2-way paragraph/bullets toggle.

## Files
- `KeenaiStudio-1B.dc.html` — the full prototype (markup + logic class + styles, single file).
- `assets/` — logo and photo textures referenced above.
