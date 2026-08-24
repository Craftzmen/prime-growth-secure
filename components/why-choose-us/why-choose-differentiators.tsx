import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { differentiators } from "@/lib/why-choose-us-data"

export function WhyChooseDifferentiators() {
  return (
    <SectionWrapper background="white" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl">
          <p className="section-label">Our approach</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            What sets PrimeGrowth apart
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-2">
        {differentiators.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 60} direction="up">
            <article className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-surface p-6 md:p-7">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <item.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-ink md:text-xl">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
