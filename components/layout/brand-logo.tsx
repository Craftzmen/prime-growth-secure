import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"

type BrandLogoProps = {
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  markOnly?: boolean
}

/** Lockup height drives both icon and text — keeps vertical alignment exact. */
const sizeMap = {
  sm: { height: "h-7", gap: "gap-2", word: "text-[0.9375rem]" },
  md: { height: "h-8 md:h-9", gap: "gap-2.5", word: "text-[1rem] md:text-[1.0625rem]" },
  lg: { height: "h-10 md:h-11", gap: "gap-3", word: "text-[1.1875rem] md:text-[1.3125rem]" },
  xl: { height: "h-12 md:h-14", gap: "gap-3.5", word: "text-[1.375rem] md:text-[1.5rem]" },
} as const

/**
 * Symmetric stacked layers — centered pyramid, no spine, no offset bars.
 */
function LogoIcon({ onDarkBg }: { onDarkBg: boolean }) {
  const signal = onDarkBg ? "hsl(168 62% 52%)" : "hsl(168 68% 38%)"
  const white = onDarkBg ? "rgba(255,255,255,0.88)" : "#FAFBF9"
  const whiteMid = onDarkBg ? "rgba(255,255,255,0.5)" : "rgba(250,251,249,0.55)"
  const whiteLow = onDarkBg ? "rgba(255,255,255,0.28)" : "rgba(250,251,249,0.3)"

  const frameFill = onDarkBg ? "rgba(255,255,255,0.08)" : "hsl(158 38% 9%)"
  const frameStroke = onDarkBg ? "rgba(255,255,255,0.12)" : "transparent"

  const barH = 2.75
  const barGap = 2
  const widths = [10, 12, 14, 16]
  const fills = [signal, white, whiteMid, whiteLow]
  const stackH = widths.length * barH + (widths.length - 1) * barGap
  const y0 = (32 - stackH) / 2

  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full" aria-hidden>
      <rect width="32" height="32" rx="8" fill={frameFill} stroke={frameStroke} strokeWidth="1" />

      {widths.map((w, i) => {
        const y = y0 + i * (barH + barGap)
        const x = (32 - w) / 2
        return <rect key={w} x={x} y={y} width={w} height={barH} rx={barH / 2} fill={fills[i]} />
      })}
    </svg>
  )
}

/**
 * PrimeGrowth — height-matched icon + wordmark lockup.
 */
export function BrandLogo({
  variant = "light",
  size = "md",
  className,
  markOnly = false,
}: BrandLogoProps) {
  const s = sizeMap[size]
  const onDarkBg = variant === "dark"

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        s.height,
        markOnly ? "aspect-square" : s.gap,
        className
      )}
    >
      <span className="aspect-square h-full shrink-0">
        <LogoIcon onDarkBg={onDarkBg} />
      </span>

      {!markOnly ? (
        <span
          className={cn(
            "flex h-full items-center font-bold leading-none tracking-[-0.03em]",
            s.word
          )}
        >
          <span className={onDarkBg ? "text-white" : "text-ink"}>Prime</span>
          <span className={onDarkBg ? "text-signal-light" : "text-signal"}>Growth</span>
        </span>
      ) : null}
    </Link>
  )
}
