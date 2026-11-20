"use client"

const COLS = 72
const ROWS = 35 // 5 × 7-day calendar rows
const CELL = 18
const GAP = 5
const STEP = CELL + GAP
const RADIUS = 4.5
const WIDTH = COLS * STEP - GAP
const HEIGHT = ROWS * STEP - GAP

interface Island {
  cx: number
  cy: number
  rx: number
  ry: number
  strength: number
}

// Deterministic Mulberry32 PRNG (seed: "FORU")
function createRng(seed: number) {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function hash2d(x: number, y: number, seed: number): number {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(seed, 1442695041)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

// Smooth bilinear value noise for organic stitched-world patches
function valueNoise(x: number, y: number, seed: number): number {
  const x0 = Math.floor(x)
  const y0 = Math.floor(y)
  const fx = x - x0
  const fy = y - y0
  const ux = fx * fx * (3 - 2 * fx)
  const uy = fy * fy * (3 - 2 * fy)

  const a = hash2d(x0, y0, seed)
  const b = hash2d(x0 + 1, y0, seed)
  const c = hash2d(x0, y0 + 1, seed)
  const d = hash2d(x0 + 1, y0 + 1, seed)

  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy
}

function roundedRectSubpath(x: number, y: number, size: number, r: number): string {
  const straight = size - 2 * r
  return `M${x + r} ${y}h${straight}a${r} ${r} 0 0 1 ${r} ${r}v${straight}a${r} ${r} 0 0 1 -${r} ${r}h-${straight}a${r} ${r} 0 0 1 -${r} -${r}v-${straight}a${r} ${r} 0 0 1 ${r} -${r}z`
}

// Curated-plus-seeded archipelago of calendar clusters framing the hero banner & type
const ISLANDS: Island[] = [
  // Left flank clusters
  { cx: 10, cy: 5, rx: 4.8, ry: 3.4, strength: 1.05 },
  { cx: 15, cy: 11, rx: 4.2, ry: 4.0, strength: 0.95 },
  { cx: 9, cy: 17, rx: 4.5, ry: 3.2, strength: 0.9 },
  { cx: 16, cy: 23, rx: 5.0, ry: 3.6, strength: 0.85 },
  { cx: 12, cy: 29, rx: 4.2, ry: 2.8, strength: 0.65 },
  // Upper-center / crown clusters (visible above banner on desktop & mobile)
  { cx: 25, cy: 3.5, rx: 5.2, ry: 2.8, strength: 0.95 },
  { cx: 36, cy: 2.5, rx: 5.6, ry: 2.9, strength: 0.9 },
  { cx: 47, cy: 4.0, rx: 5.0, ry: 2.8, strength: 1.0 },
  // Right flank clusters
  { cx: 61, cy: 6, rx: 5.0, ry: 3.6, strength: 1.05 },
  { cx: 56, cy: 13, rx: 4.4, ry: 4.2, strength: 0.95 },
  { cx: 63, cy: 19, rx: 4.6, ry: 3.4, strength: 0.9 },
  { cx: 57, cy: 25, rx: 5.0, ry: 3.5, strength: 0.82 },
  { cx: 62, cy: 30, rx: 4.0, ry: 2.6, strength: 0.6 },
  // Center-field & lower-shoulder islands (keeps mobile & center rich without overpowering copy)
  { cx: 24, cy: 15, rx: 4.2, ry: 3.5, strength: 0.72 },
  { cx: 48, cy: 16, rx: 4.2, ry: 3.5, strength: 0.75 },
  { cx: 31, cy: 22, rx: 4.6, ry: 3.2, strength: 0.62 },
  { cx: 41, cy: 21, rx: 4.4, ry: 3.2, strength: 0.62 },
  { cx: 26, cy: 28, rx: 4.8, ry: 2.9, strength: 0.58 },
  { cx: 46, cy: 28, rx: 4.8, ry: 2.9, strength: 0.58 },
]

function buildCalendarPaths(): string[] {
  const rng = createRng(0x464f5255)
  const paths: string[][] = [[], [], [], [], [], []]

  // Week-column activity weights per 7-row calendar band (creates vertical calendar streaks)
  const numBands = Math.ceil(ROWS / 7)
  const weekWeights: number[][] = Array.from({ length: numBands }, () =>
    Array.from({ length: COLS }, () => {
      const r = rng()
      if (r < 0.14) return 0.35 // quiet week
      if (r > 0.84) return 1.38 // active burst week
      return 0.72 + r * 0.55
    })
  )

  for (let row = 0; row < ROWS; row++) {
    const band = Math.floor(row / 7)
    // Gentle taper near bottom rows so clusters finish organically before mask fade
    const bottomTaper = row > 28 ? Math.max(0.28, 1 - (row - 28) * 0.11) : 1

    for (let col = 0; col < COLS; col++) {
      let islandSum = 0
      for (let i = 0; i < ISLANDS.length; i++) {
        const isl = ISLANDS[i]
        const dx = (col - isl.cx) / isl.rx
        const dy = (row - isl.cy) / isl.ry
        const d2 = dx * dx + dy * dy
        if (d2 < 4.5) {
          islandSum += isl.strength * Math.exp(-d2 * 1.15)
        }
      }

      const patchNoise = valueNoise(col * 0.34, row * 0.38, 17)
      const microNoise = valueNoise(col * 0.75, row * 0.75, 53)
      const jitter = rng()

      const score =
        Math.min(1.25, islandSum) *
        weekWeights[band][col] *
        (0.58 + 0.62 * patchNoise) *
        bottomTaper

      let level = 0

      if (score < 0.16) {
        // Sparse lone days in quiet regions
        level = jitter > 0.965 ? 1 : 0
      } else {
        // Inside an active cluster, keep realistic empty-day gaps like a real calendar
        const emptyThreshold = Math.max(0.14, 0.36 - score * 0.18)
        if (jitter < emptyThreshold) {
          level = 0
        } else {
          const intensity = score * 0.72 + microNoise * 0.22 + jitter * 0.28
          if (intensity > 1.14) level = 5
          else if (intensity > 0.88) level = 4
          else if (intensity > 0.64) level = 3
          else if (intensity > 0.42) level = 2
          else level = 1
        }
      }

      const x = col * STEP
      const y = row * STEP
      paths[level].push(roundedRectSubpath(x, y, CELL, RADIUS))
    }
  }

  return paths.map((chunks) => chunks.join(""))
}

const LEVEL_PATHS = buildCalendarPaths()

// 6 rose/pink intensity steps tuned for dark plum (#150e12) canvas
const LEVEL_STYLES = [
  {
    fill: "rgba(251, 201, 214, 0.028)",
    stroke: "rgba(251, 201, 214, 0.055)",
    strokeWidth: 0.75,
  },
  { fill: "rgba(224, 112, 143, 0.14)" },
  { fill: "rgba(224, 112, 143, 0.27)" },
  { fill: "rgba(247, 140, 166, 0.42)" },
  { fill: "rgba(247, 140, 166, 0.6)" },
  { fill: "rgba(251, 182, 202, 0.78)" },
]

export function PixelCalendarField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      style={{
        maskImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 6%, rgba(0,0,0,0.95) 16%, rgba(0,0,0,0.88) 56%, rgba(0,0,0,0.32) 82%, rgba(0,0,0,0) 98%)",
        WebkitMaskImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 6%, rgba(0,0,0,0.95) 16%, rgba(0,0,0,0.88) 56%, rgba(0,0,0,0.32) 82%, rgba(0,0,0,0) 98%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 14%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 86%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 14%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 86%, rgba(0,0,0,0) 100%)",
        }}
      >
        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          fill="none"
          className="absolute top-0 left-1/2 -translate-x-1/2 opacity-60"
        >
          {LEVEL_PATHS.map((d, level) =>
            d ? (
              <path
                key={level}
                d={d}
                fill={LEVEL_STYLES[level].fill}
                stroke={LEVEL_STYLES[level].stroke}
                strokeWidth={LEVEL_STYLES[level].strokeWidth}
              />
            ) : null
          )}
        </svg>
        <svg
          width={WIDTH}
          height={HEIGHT}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          fill="none"
          className="absolute top-0 left-1/2 -translate-x-1/2"
        >
          {/* Two squares that slowly wander and pulse — cheap CSS only */}
          <rect
            className="pixel-wanderer pixel-wanderer-a"
            x={11 * STEP}
            y={9 * STEP}
            width={CELL}
            height={CELL}
            rx={RADIUS}
            fill="rgba(251, 182, 202, 0.92)"
          />
          <rect
            className="pixel-wanderer pixel-wanderer-b"
            x={57 * STEP}
            y={14 * STEP}
            width={CELL}
            height={CELL}
            rx={RADIUS}
            fill="rgba(247, 140, 166, 0.88)"
          />
        </svg>
      </div>
    </div>
  )
}
