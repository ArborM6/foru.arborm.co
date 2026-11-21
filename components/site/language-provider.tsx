"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { i18n, languages, parseLang, type Content, type Lang } from "@/lib/i18n"

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

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode
  initialLang?: Lang
}) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? "zh")

  useEffect(() => {
    if (initialLang) {
      setLangState(initialLang)
      window.localStorage.setItem(STORAGE_KEY, initialLang)
    }
  }, [initialLang])

  useEffect(() => {
    const queryLang = parseLang(
      new URLSearchParams(window.location.search).get("lang")
    )
    if (queryLang) {
      setLangState(queryLang)
      window.localStorage.setItem(STORAGE_KEY, queryLang)
      return
    }
    const saved = parseLang(window.localStorage.getItem(STORAGE_KEY))
    if (saved) {
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
    const url = new URL(window.location.href)
    url.searchParams.set("lang", next)
    window.history.replaceState(
      null,
      "",
      `${url.pathname}${url.search}${url.hash}`
    )
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
