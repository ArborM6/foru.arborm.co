"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "./language-provider"
import { PixelCalendarField } from "./pixel-calendar-field"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-20 sm:pt-28 md:pt-32 md:pb-28"
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

      {/* Deterministic pixel-calendar field */}
      <PixelCalendarField />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl lg:max-w-[820px]"
        >
          <div className="overflow-hidden rounded-[28px] sm:rounded-[32px] md:rounded-[36px] ring-1 ring-[rgba(251,201,214,0.22)] shadow-[0_0_52px_-6px_rgba(247,140,166,0.32),0_0_105px_-14px_rgba(224,112,143,0.28),0_26px_72px_-16px_rgba(224,112,143,0.44)]">
            <Image
              src="/images/BANNER.jpg"
              alt="FOR YOU"
              width={3171}
              height={1736}
              priority
              sizes="(max-width: 768px) calc(100vw - 48px), 820px"
              className="block h-auto w-full select-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          <h1 className="mt-10 md:mt-12 text-5xl md:text-7xl font-bold tracking-tight">
            {t.hero.title}
          </h1>
          <p className="mt-3 text-sm md:text-base font-medium tracking-[0.35em] text-rose">
            {t.hero.subtitle}
          </p>

          <p className="mt-6 md:mt-7 text-xl md:text-2xl text-foreground/90 font-medium">
            {t.hero.tagline}
          </p>
          <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-foreground-muted">
            {t.hero.lead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
          className="mt-9 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center justify-center rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-[#2a1219] opacity-60 cursor-not-allowed shadow-[0_10px_30px_-8px_rgba(247,140,166,0.6)]"
          >
            {t.hero.ctaSoon}
          </button>
          <a
            href="#world"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground/85 hover:border-rose/50 hover:text-foreground transition-colors"
          >
            {t.hero.ctaMore}
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
