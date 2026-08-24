import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { differentiators } from "@/lib/why-choose-us-data"

export function DifferentiatorsSection() {
  return (
    <SectionWrapper className="relative">
      <ScrollReveal>
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-signal">Why we&apos;re different</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Built for businesses that need clarity—not complexity
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {differentiators.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 60} direction="up">
            <article className="flex gap-4 border border-ink/10 bg-card p-6 md:p-7">
              <span className="flex size-10 shrink-0 items-center justify-center bg-signal/10 text-signal">
                <CheckIcon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-10">
        <Link
          href="/why-choose-us"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:text-signal"
        >
          Learn more about PrimeGrowth
          <ArrowRightIcon className="size-4" aria-hidden />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
