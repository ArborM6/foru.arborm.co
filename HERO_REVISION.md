# Hero Visual Revision

Visual-only update to the landing hero (`#top`). All marketing copy, tri-lingual i18n, sticky navigation (including its square app icon), later sections, footer, and the no-product-deep-link rule remain unchanged.

## Files changed

- `components/site/hero.tsx`
  - Replaced the square `/images/icon-512.png` hero icon and its `blur-2xl` halo with the official `/images/BANNER.jpg` (`3171×1736`) rendered as a centered wide rounded card (`max-w-3xl lg:max-w-[820px]`, `rounded-[28px] sm:rounded-[32px] md:rounded-[36px]`) with a soft, symmetrical pink layered shadow and hairline rose ring.
  - Deleted the status badge pill (`Sparkles` + `t.hero.badge`, 「正在精心打磨中 · 2027」) and removed the unused `Sparkles` import.
  - Removed the three large `blur-3xl` radial glow blobs and the floating `HeartOutline` shapes.
  - Added a faint, even top-to-bottom linear rose gradient background wash fading cleanly to transparent before the next section.
  - Mounted `<PixelCalendarField />` behind the hero card and typography.
- `components/site/pixel-calendar-field.tsx` *(new)*
  - Lightweight, pure-SVG deterministic pixel-calendar background field.

## How the pixel-calendar field works

- **Grid geometry:** 72 week-columns × 35 rows (5 stacked 7-day calendar rows) of `18×18px` rounded squares (`rx = 4.5px`) with a uniform `5px` gap, centered horizontally at crisp CSS pixel scale (`1651×800px` viewBox).
- **Deterministic clustered islands:** Generated once at module load with a fixed Mulberry32 seed (`0x464f5255`)—no `Math.random()`, zero SSR/client hydration drift. Each cell combines:
  1. An archipelago of Gaussian "world islands" distributed around the hero flanks, crown, and center shoulders.
  2. Per-band week-column activity weights (creating vertical calendar bursts and quiet weeks).
  3. Smooth 2D value noise plus per-cell jitter with realistic empty-day gaps inside active clusters.
- **Palette & masking:** Six rose/pink intensity levels (`#e0708f`, `#f78ca6`, `#fbb6ca`, plus a faintly stroked dark-plum empty tile on `#150e12`). All squares of each level are batched into a single `<path>` (6 SVG path nodes total). Nested vertical and horizontal CSS `mask-image` gradients softly fade the field at the top, left/right edges, and bottom so it stays subordinate to the banner and typography and never collides with the following section.

## Verification

- `pnpm build` succeeds cleanly (Next.js 16.4.6 + TypeScript).
- Verified built HTML and headless Chrome screenshots (desktop `1440×1120` and mobile `390×920`): `BANNER.jpg` leads the hero with an even glow, the status badge and `blur-3xl` orbs are gone from the hero, and the rose pixel-calendar ground frames the banner cleanly with clear type legibility.
