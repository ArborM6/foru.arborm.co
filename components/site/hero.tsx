"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { useLanguage } from "./language-provider"

function HeartOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden
    >
      <path d="M12 20.5C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 3.9-4 7.2-9 11.2Z" />
    </svg>
  )
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* Ambient rose glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #f78ca6, rgba(247,140,166,0))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-64 -left-40 h-[380px] w-[380px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #e0708f, rgba(224,112,143,0))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-80 -right-40 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #fbc9d6, rgba(251,201,214,0))",
        }}
      />

      {/* Floating heart outlines */}
      <HeartOutline className="animate-float-soft absolute left-[12%] top-[22%] hidden h-8 w-8 text-rose/25 md:block" />
      <HeartOutline className="animate-float-soft-slower absolute right-[14%] top-[30%] hidden h-12 w-12 text-rose/20 md:block" />
      <HeartOutline className="animate-float-soft absolute right-[22%] bottom-[14%] hidden h-6 w-6 text-rose-soft/25 md:block" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-4 rounded-[36px] opacity-40 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #f78ca6, #e0708f 60%, #fbc9d6)",
              }}
            />
            <Image
              src="/images/icon-512.png"
              alt="For You app icon"
              width={112}
              height={112}
              priority
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-[26px] shadow-[0_18px_50px_-10px_rgba(224,112,143,0.55)]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(247,140,166,0.35)] bg-[rgba(247,140,166,0.08)] px-4 py-1.5 text-xs md:text-sm text-rose-soft">
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            {t.hero.title}
          </h1>
          <p className="mt-3 text-sm md:text-base font-medium tracking-[0.35em] text-rose">
            {t.hero.subtitle}
          </p>

          <p className="mt-7 text-xl md:text-2xl text-foreground/90 font-medium">
            {t.hero.tagline}
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-foreground-muted">
            {t.hero.lead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
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
