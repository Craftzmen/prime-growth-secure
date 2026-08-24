import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { processSteps } from "@/lib/process-data"

export function ProcessSection() {
  return (
    <SectionWrapper id="process" background="surface" className="relative">
      <ScrollReveal>
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-label">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              From first call to monthly close
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ink hover:text-signal"
          >
            Start onboarding
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-4 top-8 hidden h-[calc(100%-4rem)] w-px bg-ink/10 md:left-[calc(12.5%-0.5px)] md:block lg:left-[calc(12%-0.5px)]"
        />
        <div className="grid gap-8 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80} direction="up">
              <article className="relative md:pt-2">
                <span className="relative z-10 inline-flex size-8 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
