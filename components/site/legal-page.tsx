"use client"

import Image from "next/image"
import Link from "next/link"
import { languages, type Lang } from "@/lib/i18n"
import { legalDocuments, type LegalDocKey } from "@/lib/legal"
import { LanguageProvider, useLanguage } from "./language-provider"

function LegalPageContent({ doc }: { doc: LegalDocKey }) {
  const { lang, setLang, t } = useLanguage()
  const documentData = legalDocuments[doc][lang]
  const otherDoc: LegalDocKey = doc === "terms" ? "privacy" : "terms"
  const otherLabel = otherDoc === "terms" ? t.footer.terms : t.footer.privacy

  return (
    <div className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top,rgba(247,140,166,0.12),transparent_55%)]">
      <header className="sticky top-0 z-50 border-b border-border bg-[rgba(21,14,18,0.86)] backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href={`/?lang=${lang}`}
            className="flex items-center gap-2.5 shrink-0 group"
          >
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
          </Link>

          <div
            className="flex items-center rounded-full border border-border bg-[rgba(250,243,241,0.04)] p-0.5"
            role="group"
            aria-label="Language"
          >
            {languages.map((l) => (
              <Link
                key={l.code}
                href={`/${doc}?lang=${l.code}`}
                replace
                onClick={() => setLang(l.code)}
                aria-current={lang === l.code ? "page" : undefined}
                className={`px-2.5 py-1 text-xs rounded-full transition-colors ${
                  lang === l.code
                    ? "bg-rose text-[#2a1219] font-semibold"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/?lang=${lang}`}
            className="inline-flex items-center gap-2 text-rose hover:text-rose-soft text-sm mb-10 transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>{t.footer.backToHome}</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
            {documentData.title}
          </h1>
          <p className="text-foreground-muted text-sm mb-10 sm:mb-12">
            {documentData.lastUpdated}
          </p>

          <div className="space-y-9 sm:space-y-10">
            {documentData.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-[15px] sm:text-base leading-relaxed text-foreground/75">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col items-center gap-3 text-xs text-foreground-muted">
              <div className="flex items-center gap-5 text-sm">
                <Link
                  href={`/${otherDoc}?lang=${lang}`}
                  className="hover:text-rose transition-colors"
                >
                  {otherLabel}
                </Link>
                <span aria-hidden="true" className="text-border">
                  ·
                </span>
                <Link
                  href={`/?lang=${lang}`}
                  className="hover:text-rose transition-colors"
                >
                  {t.footer.backToHome}
                </Link>
              </div>
              <p className="text-center">
                {lang === "en" ? t.footer.copyrightEn : t.footer.copyrightZh}
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

export function LegalPage({
  doc,
  initialLang,
}: {
  doc: LegalDocKey
  initialLang?: Lang
}) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <LegalPageContent doc={doc} />
    </LanguageProvider>
  )
}
