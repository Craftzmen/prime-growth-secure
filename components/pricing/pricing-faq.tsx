import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { pricingFaqs } from "@/lib/pricing-data"

export function PricingFaq() {
  return (
    <SectionWrapper background="surface" className="relative">
      <ScrollReveal>
        <div className="mb-8 max-w-xl">
          <p className="section-label">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Common pricing questions</h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-2">
        {pricingFaqs.map((faq, i) => (
          <ScrollReveal key={faq.question} delay={i * 50} direction="up">
            <article className="h-full rounded-xl border border-ink/10 bg-surface-elevated p-5 md:p-6">
              <h3 className="text-base font-bold tracking-tight text-ink md:text-lg">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{faq.answer}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
