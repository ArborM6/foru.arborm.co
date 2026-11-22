"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MessagesSquare, Newspaper, User } from "lucide-react"
import type { ReactNode } from "react"
import type { Lang } from "@/lib/i18n"
import { useLanguage } from "./language-provider"
import { FloatingHearts } from "./floating-hearts"

const ENTRY_DEMOS = [
  { name: "chat", icon: MessagesSquare },
  { name: "feed", icon: Newspaper },
  { name: "mine", icon: User },
] as const
const SCREENSHOT_DIRECTORIES: Record<Lang, string> = {
  zh: "/images/screenshots",
  hant: "/images/screenshots/hant",
  en: "/images/screenshots/en",
}

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[270px] rounded-[42px] bg-gradient-to-b from-[#43303a] via-[#241a20] to-[#43303a] p-[9px] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.7)]">
      <div className="relative aspect-[1206/2622] w-full overflow-hidden rounded-[34px] bg-[#181016]">
        {children}
      </div>
    </div>
  )
}

function EntryScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <PhoneFrame>
      <Image
        src={src}
        alt={alt}
        width={1206}
        height={2622}
        sizes="(max-width: 768px) 270px, 270px"
        className="block h-full w-full"
      />
    </PhoneFrame>
  )
}

export function EntriesSection() {
  const { lang, t } = useLanguage()
  const screenshotDirectory = SCREENSHOT_DIRECTORIES[lang]

  return (
    <section
      id="entries"
      className="relative overflow-hidden py-24 md:py-32 bg-background-secondary/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #f78ca6, rgba(247,140,166,0))",
        }}
      />
      <FloatingHearts variant="entries" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={false}
          whileInView={{ opacity: [0.85, 1], y: [18, 0] }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          {t.entries.eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.3em] text-rose">
              {t.entries.eyebrow}
            </p>
          ) : null}
          <h2
            className={`${t.entries.eyebrow ? "mt-4 " : ""}text-3xl md:text-4xl font-bold tracking-tight`}
          >
            {t.entries.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground-muted">
            {t.entries.lead}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
          {ENTRY_DEMOS.map(({ name, icon: Icon }, i) => {
            const item = t.entries.items[i]
            return (
              <motion.div
                key={name}
                initial={false}
                whileInView={{ opacity: [0.85, 1], y: [18, 0] }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <EntryScreenshot
                  src={`${screenshotDirectory}/${name}.png`}
                  alt={item.tag}
                />
                <div className="mt-8 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(247,140,166,0.12)] text-rose">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.25em] text-rose">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
