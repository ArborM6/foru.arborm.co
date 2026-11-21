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
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl lg:max-w-[820px]"
        >
          {/* Banner card: dense pixel-calendar field behind the official wordmark (cut out of BANNER.jpg) */}
          <div className="relative aspect-[3171/1736] overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-[#1c1218] shadow-[0_18px_48px_-24px_rgba(0,0,0,0.7)]">
            <PixelCalendarField />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/BANNER-logo.png"
                alt="FOR YOU"
                width={2916}
                height={582}
                priority
                sizes="(max-width: 768px) calc((100vw - 48px) * 0.64), 525px"
                className="block h-auto w-[64%] select-none [filter:drop-shadow(0_0_2px_rgba(21,14,18,0.55))_drop-shadow(0_0_16px_rgba(247,140,166,0.45))]"
              />
            </div>
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

          <p className="mt-6 md:mt-7 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-foreground-muted">
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
