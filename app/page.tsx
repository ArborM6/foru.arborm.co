import { LanguageProvider } from "@/components/site/language-provider"
import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import {
  CompanionshipSection,
  SubscribeSection,
  WorldSection,
} from "@/components/site/sections"
import { EntriesSection } from "@/components/site/entries"
import { Footer } from "@/components/site/footer"
import { parseLang } from "@/lib/i18n"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] }>
}) {
  const { lang } = await searchParams
  const initialLang = parseLang(Array.isArray(lang) ? lang[0] : lang) ?? undefined

  return (
    <LanguageProvider initialLang={initialLang}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <WorldSection />
          <EntriesSection />
          <CompanionshipSection />
          <SubscribeSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
