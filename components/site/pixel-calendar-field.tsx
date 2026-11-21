"use client"

import { useEffect, useRef, useState } from "react"

// Sized to cover the hero banner card (max 820px wide) at native cell scale;
// the card crops this grid from its center, so narrower cards stay dense.
const COLS = 37
const ROWS = 21 // 3 × 7-day calendar rows
const CELL = 18
const GAP = 5
const STEP = CELL + GAP
const RADIUS = 4.5
const WIDTH = COLS * STEP - GAP
const HEIGHT = ROWS * STEP - GAP

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

function buildCalendarPaths(): { paths: string[]; lit: { x: number; y: number }[] } {
  const rng = createRng(0x464f5255)
  const paths: string[][] = [[], [], [], [], [], []]
  const lit: { x: number; y: number }[] = []

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

    for (let col = 0; col < COLS; col++) {
      const patchNoise = valueNoise(col * 0.34, row * 0.38, 17)
      const microNoise = valueNoise(col * 0.75, row * 0.75, 53)
      const jitter = rng()

      // Dense field: every week column is active, modulated by organic patches
      const score = weekWeights[band][col] * (0.5 + 0.7 * patchNoise) * 0.8

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
      // Visible cells can twinkle; skip the almost-invisible level-0/1 dust
      if (level >= 2) lit.push({ x, y })
    }
  }

  return { paths: paths.map((chunks) => chunks.join("")), lit }
}

const CALENDAR = buildCalendarPaths()
const LEVEL_PATHS = CALENDAR.paths
const TWINKLE_CELLS = CALENDAR.lit

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

const TWINKLE_COUNT = 14

function pickCell(cells: { x: number; y: number }[], avoid: Set<string>) {
  const available = cells.filter((c) => !avoid.has(`${c.x},${c.y}`))
  const pool = available.length > 0 ? available : cells
  return pool[Math.floor(Math.random() * pool.length)]
}

function PixelTwinkles({ cells }: { cells: { x: number; y: number }[] }) {
  const [spots, setSpots] = useState<{ id: number; x: number; y: number; duration: number; delay: number }[]>([])
  const active = useRef<Set<string>>(new Set())
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced.current || cells.length === 0) return

    const used = new Set<string>()
    const next = Array.from({ length: TWINKLE_COUNT }, (_, id) => {
      const cell = pickCell(cells, used)
      used.add(`${cell.x},${cell.y}`)
      return {
        id,
        x: cell.x,
        y: cell.y,
        duration: 0.85 + Math.random() * 0.7,
        delay: id * 0.12,
      }
    })
    active.current = used
    // Stagger the first wave so they don't flash in unison
    const timer = window.setTimeout(() => setSpots(next), 80)
    return () => window.clearTimeout(timer)
  }, [cells])

  function relight(id: number) {
    if (reduced.current) return
    setSpots((prev) => {
      const current = prev.find((s) => s.id === id)
      if (current) active.current.delete(`${current.x},${current.y}`)
      const cell = pickCell(cells, active.current)
      active.current.add(`${cell.x},${cell.y}`)
      return prev.map((s) =>
        s.id === id
          ? { id, x: cell.x, y: cell.y, duration: 0.85 + Math.random() * 0.7, delay: 0.08 + Math.random() * 0.18 }
          : s
      )
    })
  }

  if (spots.length === 0) return null

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      fill="none"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {spots.map((s) => (
        <rect
          key={`${s.id}-${s.x}-${s.y}`}
          className="pixel-twinkle"
          x={s.x}
          y={s.y}
          width={CELL}
          height={CELL}
          rx={RADIUS}
          fill="rgba(251, 201, 214, 0.95)"
          style={{
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
          onAnimationEnd={() => relight(s.id)}
        />
      ))}
    </svg>
  )
}

// Fills its positioned, overflow-hidden parent (the hero banner card) edge to edge
export function PixelCalendarField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        fill="none"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
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
      <PixelTwinkles cells={TWINKLE_CELLS} />
    </div>
  )
}
