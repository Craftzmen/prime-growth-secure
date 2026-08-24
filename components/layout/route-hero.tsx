import Link from "next/link"
import Image from "next/image"
import { ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type RouteHeroBreadcrumb = { label: string; href?: string }

type RouteHeroProps = {
  breadcrumbs: RouteHeroBreadcrumb[]
  eyebrow: string
  title: ReactNode
  description?: string
  variant?: "split" | "center"
  aside?: ReactNode
  below?: ReactNode
  image?: string
  imageAlt?: string
  className?: string
}

export function RouteHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  variant = "split",
  aside,
  below,
  image,
  imageAlt = "",
  className,
}: RouteHeroProps) {
  const isCenter = variant === "center"

  return (
    <section className={cn("relative overflow-hidden bg-surface", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-signal/[0.06] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-ink/[0.03] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8">
        <nav
          aria-label="Breadcrumb"
          className={cn(
            "mb-8 inline-flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground",
            isCenter && "justify-center"
          )}
        >
          {breadcrumbs.map((c, i) => (
            <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 ? <ChevronRightIcon className="size-3.5 text-ink/25" aria-hidden /> : null}
              {c.href ? (
                <Link href={c.href} className="transition hover:text-ink">
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-ink">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {isCenter ? (
          <div className="hero-enter mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-signal/25 bg-signal/8 px-3.5 py-1 text-sm font-semibold text-signal">
              {eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            ) : null}
            {below ? <div className="mt-6">{below}</div> : null}
          </div>
        ) : (
          <div className="hero-enter grid items-center gap-10 md:grid-cols-12 md:gap-10 lg:gap-12">
            <div className={cn("md:col-span-7", image || aside ? "" : "md:col-span-12")}>
              <span className="inline-flex items-center rounded-full border border-signal/25 bg-signal/8 px-3.5 py-1 text-sm font-semibold text-signal">
                {eyebrow}
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.85rem]">
                {title}
              </h1>
              {description ? (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {description}
                </p>
              ) : null}
              {below ? <div className="mt-6">{below}</div> : null}
            </div>

            {image ? (
              <div className="md:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 shadow-[0_20px_40px_-12px_rgba(15,40,32,0.1)] sm:aspect-[5/4]">
                  <Image
                    src={`${image}&w=900`}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 420px"
                    quality={60}
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}

            {aside ? <div className="md:col-span-5">{aside}</div> : null}
          </div>
        )}
      </div>
    </section>
  )
}
