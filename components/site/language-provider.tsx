"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { i18n, languages, type Content, type Lang } from "@/lib/i18n"

const STORAGE_KEY = "foryou-lang"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "zh",
  setLang: () => {},
  t: i18n.zh,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh")

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "zh" || saved === "hant" || saved === "en") {
      setLangState(saved)
    }
  }, [])

  useEffect(() => {
    const htmlLang =
      languages.find((l) => l.code === lang)?.htmlLang ?? "zh-CN"
    document.documentElement.lang = htmlLang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: i18n[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
