"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function ClosingSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative mx-auto overflow-hidden rounded-3xl border border-[rgba(247,140,166,0.25)] shadow-[0_30px_80px_-30px_rgba(224,112,143,0.45)]">
            <Image
              src="/images/BANNER.jpg"
              alt="FORYOU"
              width={1024}
              height={512}
              className="h-auto w-full object-cover"
            />
          </div>
          <h2 className="mt-12 text-3xl md:text-4xl font-bold tracking-tight">
            {t.closing.title}
          </h2>
          <p className="mt-6 text-sm tracking-[0.2em] text-foreground-muted">
            {t.closing.sub}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
