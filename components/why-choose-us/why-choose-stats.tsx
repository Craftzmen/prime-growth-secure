import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { stats } from "@/lib/why-choose-us-data"

export function WhyChooseStats() {
  return (
    <SectionWrapper background="surface" className="relative">
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
        <ScrollReveal className="lg:col-span-5">
          <p className="section-label">At a glance</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Support for every stage of growth
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From first consultation to ongoing monthly books—we work with startups, small businesses, and freelancers
            across bookkeeping, payroll, and accounting.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-ink/10 bg-surface-elevated p-5 text-center md:p-6"
              >
                <div className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{m.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
