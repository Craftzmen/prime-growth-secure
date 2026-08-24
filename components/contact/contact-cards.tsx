import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { contactStages } from "@/lib/page-content"

export function ContactCards() {
  return (
    <SectionWrapper id="next-steps" background="white" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl">
          <p className="section-label">What happens next</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            From form to working relationship
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-3">
        {contactStages.map((stage, i) => (
          <ScrollReveal key={stage.title} delay={i * 70} direction="up">
            <article className="h-full rounded-2xl border border-ink/10 bg-surface p-5 md:p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <stage.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.desc}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
