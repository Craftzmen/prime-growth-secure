import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CheckIcon, ClockIcon, MapPinIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"
import { heroStats, homeHero } from "@/lib/home-content"
import { UNSPLASH } from "@/lib/remote-images"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 size-[28rem] rounded-full bg-signal/[0.07] blur-3xl md:size-[36rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-ink/[0.04] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-12 md:gap-10 md:px-8 md:pb-24 md:pt-20 lg:gap-14 lg:py-24 lg:pb-28">
        <div className="hero-enter md:col-span-6 lg:col-span-7">
          <span className="inline-flex items-center rounded-full border border-signal/25 bg-signal/8 px-3.5 py-1 text-sm font-semibold text-signal">
            {homeHero.eyebrow}
          </span>
          <h1 className="mt-5 text-[2.125rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            {homeHero.headlineLead}{" "}
            <span className="text-signal">{homeHero.headlineHighlight}</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[1.0625rem] md:leading-7">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-ink-light"
            >
              {homeHero.primaryCta}
              <ArrowRightIcon className="ml-2 size-4" aria-hidden />
            </Link>
            <Link
              href={homeHero.secondaryHref}
              className="inline-flex h-11 items-center rounded-full border border-ink/12 bg-white/80 px-6 text-sm font-semibold text-ink backdrop-blur-sm transition hover:border-ink/25 hover:bg-white"
            >
              {homeHero.secondaryCta}
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="size-3.5 text-signal" aria-hidden />
              Mon–Fri support
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-3.5 text-signal" aria-hidden />
              Brooklyn, NY
            </span>
          </div>
        </div>

        <div className="hero-enter md:col-span-6 lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md md:max-w-none md:pl-4 lg:pl-8">
            <div className="relative aspect-[5/6] overflow-hidden rounded-2xl border border-ink/10 shadow-[0_24px_48px_-12px_rgba(15,40,32,0.12)] sm:aspect-[4/5]">
              <Image
                src={`${UNSPLASH.heroCommerce}&w=800`}
                alt="Bookkeeper reviewing monthly financial reports on a laptop"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                quality={60}
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Month-one deliverables
                </p>
                <p className="mt-1 text-lg font-bold leading-snug text-white">
                  Closed books, clean payroll, and reports you can act on.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 left-0 right-0 mx-4 rounded-xl border border-ink/8 bg-white/95 p-4 shadow-[0_16px_40px_-8px_rgba(15,40,32,0.14)] backdrop-blur-sm md:-bottom-6 md:-left-6 md:mx-0 md:max-w-[calc(100%-1.5rem)] md:p-5">
              <ul className="divide-y divide-ink/8">
                {heroStats.map((stat) => (
                  <li key={stat.label} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-signal/12 text-signal">
                      <CheckIcon className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-snug text-ink md:text-[0.9375rem]">
                      {stat.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
