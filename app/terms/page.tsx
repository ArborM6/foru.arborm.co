import type { Metadata } from "next"
import { parseLang } from "@/lib/i18n"
import { legalDocuments } from "@/lib/legal"
import { LegalPage } from "@/components/site/legal-page"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
  const params = await searchParams
  const lang = parseLang(params.lang) ?? "zh"
  const doc = legalDocuments.terms[lang]
  const suffix = lang === "en" ? "For You" : lang === "hant" ? "為你 For You" : "为你 For You"

  return {
    title: `${doc.title} · ${suffix}`,
  }
}

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const params = await searchParams
  const initialLang = parseLang(params.lang) ?? undefined

  return <LegalPage doc="terms" initialLang={initialLang} />
}
