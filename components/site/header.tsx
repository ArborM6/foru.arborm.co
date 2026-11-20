"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { languages } from "@/lib/i18n"
import { useLanguage } from "./language-provider"

export function Header() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(21,14,18,0.82)] border-[rgba(250,243,241,0.08)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
          <Image
            src="/images/icon-512.png"
            alt="For You"
            width={30}
            height={30}
            className="w-[30px] h-[30px] rounded-[8px] shadow-[0_4px_14px_rgba(247,140,166,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-[15px] font-semibold tracking-wide">
            {t.brandName}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center rounded-full border border-border bg-[rgba(250,243,241,0.04)] p-0.5"
            role="group"
            aria-label="Language"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                  lang === l.code
                    ? "bg-rose text-[#2a1219] font-semibold"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
