function HeartOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden
    >
      <path d="M12 20.5C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 3.9-4 7.2-9 11.2Z" />
    </svg>
  )
}

const PLACEMENTS = {
  entries: [
    "animate-float-soft absolute left-[8%] top-[18%] hidden h-8 w-8 text-rose/25 md:block",
    "animate-float-soft-slower absolute right-[7%] top-[28%] hidden h-12 w-12 text-rose/20 md:block",
    "animate-float-soft absolute right-[18%] bottom-[10%] hidden h-6 w-6 text-rose-soft/25 md:block",
  ],
  companionship: [
    "animate-float-soft-slower absolute left-[6%] bottom-[16%] hidden h-10 w-10 text-rose/20 md:block",
    "animate-float-soft absolute right-[10%] top-[20%] hidden h-8 w-8 text-rose/25 md:block",
    "animate-float-soft absolute left-[22%] top-[12%] hidden h-6 w-6 text-rose-soft/20 md:block",
  ],
  subscribe: [
    "animate-float-soft absolute left-[12%] top-[28%] hidden h-9 w-9 text-rose/25 md:block",
    "animate-float-soft-slower absolute right-[14%] top-[22%] hidden h-12 w-12 text-rose/20 md:block",
    "animate-float-soft absolute right-[24%] bottom-[18%] hidden h-6 w-6 text-rose-soft/25 md:block",
    "animate-float-soft-slower absolute left-[28%] bottom-[22%] hidden h-7 w-7 text-rose/15 md:block",
  ],
  footer: [
    "animate-float-soft absolute left-[10%] top-[18%] hidden h-7 w-7 text-rose/20 md:block",
    "animate-float-soft-slower absolute right-[12%] top-[28%] hidden h-9 w-9 text-rose/15 md:block",
  ],
} as const

export function FloatingHearts({
  variant,
}: {
  variant: keyof typeof PLACEMENTS
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PLACEMENTS[variant].map((className) => (
        <HeartOutline key={className} className={className} />
      ))}
    </div>
  )
}
