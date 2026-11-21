"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "./language-provider"
import { PixelCalendarField } from "./pixel-calendar-field"

/** Native SVG height from pixel-calendar-field grid (35 rows × 23px step − gap). */
const ARTWORK_HEIGHT_PX = 800

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 md:pb-28"
    >
      {/* Subtle, even rose gradient ground */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(247, 140, 166, 0.1) 0%, rgba(224, 112, 143, 0.055) 40%, rgba(224, 112, 143, 0.015) 75%, rgba(21, 14, 18, 0) 100%)",
        }}
      />

      {/* Wordmark + pixel art share a fixed-height visual region so masks stay tied to the 800px SVG. */}
      <div
        className="relative box-border w-full"
        style={{ height: ARTWORK_HEIGHT_PX }}
      >
        <PixelCalendarField />

        <div className="relative z-10 mx-auto flex h-full max-w-4xl items-start justify-center px-6 pt-24 text-center sm:pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto w-full max-w-3xl lg:max-w-[820px]"
          >
            <Image
              src="/images/BANNER-logo.png"
              alt="FOR YOU"
              width={3171}
              height={1736}
              priority
              sizes="(max-width: 768px) calc(100vw - 48px), 820px"
              className="block h-auto w-full select-none [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.65))_drop-shadow(0_0_6px_rgba(251,201,214,0.8))_drop-shadow(0_0_16px_rgba(247,140,166,0.62))_drop-shadow(0_0_32px_rgba(247,140,166,0.42))_drop-shadow(0_0_56px_rgba(224,112,143,0.26))]"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pt-10 text-center md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          <h1 className="sr-only">{t.hero.title}</h1>
          <p className="text-sm font-medium tracking-[0.35em] text-rose md:text-base">
            {t.hero.subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted md:mt-7 md:text-lg">
            {t.hero.lead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10"
        >
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-[#2a1219] opacity-60 shadow-[0_10px_30px_-8px_rgba(247,140,166,0.6)]"
          >
            {t.hero.ctaSoon}
          </button>
          <a
            href="#world"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground/85 transition-colors hover:border-rose/50 hover:text-foreground"
          >
            {t.hero.ctaMore}
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}