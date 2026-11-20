"use client"

import { motion } from "framer-motion"
import {
  Heart,
  History,
  MessageCircle,
  MessagesSquare,
  Newspaper,
  Send,
  type LucideIcon,
} from "lucide-react"
import type { ReactNode } from "react"
import { useLanguage } from "./language-provider"
import { FloatingHearts } from "./floating-hearts"

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[270px] rounded-[42px] bg-gradient-to-b from-[#43303a] via-[#241a20] to-[#43303a] p-[9px] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.7)]">
      <div className="relative h-[540px] overflow-hidden rounded-[34px] bg-[#181016]">
        <div className="absolute left-1/2 top-2.5 z-10 h-[20px] w-[84px] -translate-x-1/2 rounded-full bg-black/85" />
        {children}
      </div>
    </div>
  )
}

function Avatar({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white/95"
      style={{ background: gradient }}
    >
      {label}
    </div>
  )
}

function ChatMock() {
  const { t } = useLanguage()
  const chat = t.mock.chat

  return (
    <PhoneFrame>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3 border-b border-white/5 px-4 pb-3 pt-11">
          <Avatar
            label={chat.name.slice(0, 1)}
            gradient="linear-gradient(135deg,#f78ca6,#e0708f)"
          />
          <div>
            <p className="text-[13px] font-semibold text-foreground">
              {chat.name}
            </p>
            <p className="text-[10px] text-rose-soft">{chat.typing}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-4 py-4">
          {chat.messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed ${
                m.from === "me"
                  ? "self-end rounded-br-md bg-rose text-[#2a1219]"
                  : "self-start rounded-bl-md bg-white/8 text-foreground/90"
              }`}
            >
              {m.text}
            </div>
          ))}
          <div className="flex items-center gap-1 self-start rounded-2xl rounded-bl-md bg-white/8 px-3.5 py-3">
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-foreground/70" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-foreground/70" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-foreground/70" />
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-white/5 px-4 py-3">
          <div className="flex-1 rounded-full bg-white/6 px-4 py-2 text-[11px] text-foreground-muted">
            {chat.inputPlaceholder}
          </div>
          <Send className="h-4 w-4 text-rose" />
        </div>
      </div>
    </PhoneFrame>
  )
}

function FeedMock() {
  const { t } = useLanguage()
  const feed = t.mock.feed

  return (
    <PhoneFrame>
      <div className="flex h-full flex-col gap-3 overflow-hidden px-4 pb-4 pt-12">
        <div className="rounded-2xl border border-white/6 bg-white/4 p-4">
          <div className="flex items-center gap-2.5">
            <Avatar
              label={feed.author.slice(0, 1)}
              gradient="linear-gradient(135deg,#fbc9d6,#f78ca6)"
            />
            <div>
              <p className="text-[12px] font-semibold text-foreground">
                {feed.author}
              </p>
              <p className="text-[10px] text-foreground-muted">{feed.time}</p>
            </div>
          </div>
          <p className="mt-3 text-[12px] leading-relaxed text-foreground/90">
            {feed.text}
          </p>
          <div
            className="mt-3 h-28 rounded-xl"
            style={{
              background:
                "linear-gradient(160deg,#f78ca6 0%,#e0708f 45%,#7c4a63 100%)",
            }}
          />
          <div className="mt-3 flex items-center gap-5 text-[11px] text-foreground-muted">
            <span className="flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 fill-rose text-rose" />
              {feed.likes}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" />
              {feed.comments}
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/6 bg-white/4 p-3.5">
          <div className="flex items-center gap-2">
            <Avatar
              label={feed.commentName.slice(0, 1)}
              gradient="linear-gradient(135deg,#f78ca6,#b85c82)"
            />
            <p className="text-[11px] text-foreground/85">
              <span className="font-semibold text-rose-soft">
                {feed.commentName}
              </span>{" "}
              {feed.commentText}
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-white/6 bg-white/4 p-3.5">
          <p className="flex items-center gap-1.5 text-[10.5px] text-foreground-muted">
            <Heart className="h-3 w-3 fill-rose text-rose" />
            {feed.likedBy}
          </p>
        </div>
      </div>
    </PhoneFrame>
  )
}

function HistoryMock() {
  const { t } = useLanguage()
  const history = t.mock.history

  return (
    <PhoneFrame>
      <div className="flex h-full flex-col overflow-hidden px-4 pb-4 pt-12">
        <p className="px-1 text-[14px] font-semibold text-foreground">
          {history.title}
        </p>
        <div className="mt-3 flex flex-col gap-2.5">
          {history.items.map((item) => (
            <div
              key={item.date}
              className="rounded-2xl border border-white/6 bg-white/4 p-4"
            >
              <p className="text-[10px] font-medium tracking-wide text-rose">
                {item.date}
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-foreground/90">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

export function EntriesSection() {
  const { t } = useLanguage()
  const mocks: ReactNode[] = [<ChatMock key="c" />, <FeedMock key="f" />, <HistoryMock key="h" />]
  const icons: LucideIcon[] = [MessagesSquare, Newspaper, History]

  return (
    <section
      id="entries"
      className="relative overflow-hidden py-24 md:py-32 bg-background-secondary/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #f78ca6, rgba(247,140,166,0))",
        }}
      />
      <FloatingHearts variant="entries" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          {t.entries.eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.3em] text-rose">
              {t.entries.eyebrow}
            </p>
          ) : null}
          <h2
            className={`${t.entries.eyebrow ? "mt-4 " : ""}text-3xl md:text-4xl font-bold tracking-tight`}
          >
            {t.entries.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground-muted">
            {t.entries.lead}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
          {t.entries.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                {mocks[i]}
                <div className="mt-8 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(247,140,166,0.12)] text-rose">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.25em] text-rose">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center text-xs text-foreground-muted/70"
        >
          {t.entries.disclaimer}
        </motion.p>
      </div>
    </section>
  )
}
