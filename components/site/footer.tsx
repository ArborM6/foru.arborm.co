"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { useLanguage } from "./language-provider"
import { FloatingHearts } from "./floating-hearts"

const sectionHeading =
  "mb-3 text-xs font-medium tracking-[0.18em] uppercase text-foreground/45"

export function Footer() {
  const { lang, t } = useLanguage()
  const tagline = t.footer.tagline || t.world.title

  return (
    <footer className="border-t border-border">
      <div className="relative overflow-hidden bg-background-secondary/70">
        <FloatingHearts variant="footer" />
        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14 lg:gap-20">
            <div>
              <a
                href="#top"
                className="inline-flex items-center gap-2.5 group shrink-0"
              >
                <Image
                  src="/images/icon-512.png"
                  alt={t.brandName}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-[7px] shadow-[0_4px_14px_rgba(247,140,166,0.3)] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-[15px] font-semibold tracking-wide">
                  {t.brandName}
                </span>
              </a>
              {tagline ? (
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
                  {tagline}
                </p>
              ) : null}
            </div>

            <div>
              <h4 className={sectionHeading}>{t.footer.contactLabel}</h4>
              <div className="space-y-2.5 text-sm leading-relaxed text-foreground-muted">
                <p>
                  <a
                    href="mailto:hello@arborm.com"
                    className="inline-flex items-center gap-1.5 hover:text-rose transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    hello@arborm.com
                  </a>
                </p>
                <p className="text-foreground/80">{t.footer.companyZh}</p>
              </div>
            </div>

            <div>
              <h4 className={sectionHeading}>{t.footer.legalLabel}</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-foreground-muted">
                <li>
                  <Link
                    href={`/terms?lang=${lang}`}
                    className="hover:text-rose transition-colors"
                  >
                    {t.footer.terms}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/privacy?lang=${lang}`}
                    className="hover:text-rose transition-colors"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[rgba(250,243,241,0.06)] bg-[#120c10]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col items-start gap-2.5 text-left text-xs text-foreground-muted/80">
            <p>{lang === "en" ? t.footer.copyrightEn : t.footer.copyrightZh}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose transition-colors"
              >
                皖ICP备2026007885号
              </a>
              <a
                href="https://beian.mps.gov.cn/#/query/webSearch?code=34011102003969"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-rose transition-colors"
              >
                <Image
                  src="/images/gongan.png"
                  alt=""
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5"
                />
                皖公网安备34011102003969号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
