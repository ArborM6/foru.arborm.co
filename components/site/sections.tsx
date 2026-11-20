"use client"

import { motion } from "framer-motion"
import {
  BellRing,
  Crown,
  HeartHandshake,
  MessageCircleHeart,
  Sparkles,
  Sprout,
  type LucideIcon,
} from "lucide-react"
import type { ReactNode } from "react"
import { useLanguage } from "./language-provider"
import { FloatingHearts } from "./floating-hearts"

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead?: string | string[]
}) {
  const leads = !lead ? [] : Array.isArray(lead) ? lead : [lead]

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mx-auto text-center"
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.3em] text-rose">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`${eyebrow ? "mt-4 " : ""}text-3xl md:text-4xl font-bold tracking-tight text-balance`}
      >
        {title}
      </h2>
      {leads.map((para, i) => (
        <p
          key={i}
          className={`${i === 0 ? "mt-5" : "mt-4"} text-base md:text-lg leading-relaxed text-foreground-muted`}
        >
          {para}
        </p>
      ))}
    </motion.div>
  )
}

export function WorldSection() {
  const { t } = useLanguage()
  const icons: LucideIcon[] = [Crown, Sparkles, Sprout]

  return (
    <section id="world" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.world.eyebrow}
          title={t.world.title}
          lead={t.world.lead}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {t.world.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-[rgba(247,140,166,0.35)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(247,140,166,0.12)] text-rose transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export function CompanionshipSection() {
  const { t } = useLanguage()
  const icons: LucideIcon[] = [
    MessageCircleHeart,
    BellRing,
    HeartHandshake,
    Sparkles,
  ]

  return (
    <section
      id="companionship"
      className="relative overflow-hidden py-24 md:py-32 bg-background-secondary/60"
    >
      <FloatingHearts variant="companionship" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.companionship.eyebrow}
          title={t.companionship.title}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2"
        >
          {t.companionship.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(247,140,166,0.3)] bg-[rgba(247,140,166,0.08)] text-rose">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export function SubscribeSection() {
  const { t } = useLanguage()

  return (
    <section id="subscribe" className="relative overflow-hidden py-24 md:py-32">
      <FloatingHearts variant="subscribe" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.subscribe.eyebrow}
          title={t.subscribe.title}
        />
      </div>
    </section>
  )
}

export function SectionShell({ children }: { children: ReactNode }) {
  return <>{children}</>
}
