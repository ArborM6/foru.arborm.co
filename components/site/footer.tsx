"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { useLanguage } from "./language-provider"
import { FloatingHearts } from "./floating-hearts"

export function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background-secondary/70">
      <FloatingHearts variant="footer" />
      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Image
              src="/images/foryou-wordmark.png"
              alt="FORYOU"
              width={150}
              height={34}
              className="h-8 w-auto"
            />
          </div>

          <div className="text-sm leading-loose text-foreground-muted">
            <p>
              <span className="text-foreground/80">{t.footer.companyZh}</span>
            </p>
            <p>{t.footer.companyEn}</p>
            <p className="mt-2">
              <a
                href="mailto:hello@arborm.com"
                className="inline-flex items-center gap-1.5 hover:text-rose transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                hello@arborm.com
              </a>
            </p>
            <p>
              <a
                href="https://www.arborm.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose transition-colors"
              >
                www.arborm.co
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium tracking-[0.18em] uppercase text-foreground/45">
              {t.footer.legalLabel}
            </h4>
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

        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center gap-3 text-xs text-foreground-muted">
          <p>{t.footer.copyrightZh}</p>
          <p>{t.footer.copyrightEn}</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
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
    </footer>
  )
}
