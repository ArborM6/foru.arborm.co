"use client"

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

export default function Home() {
  return (
    <LanguageProvider>
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
