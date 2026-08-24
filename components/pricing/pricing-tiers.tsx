import Link from "next/link"
import { CheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { pricingTiers } from "@/lib/pricing-data"
import { cn } from "@/lib/utils"

export function PricingTiers() {
  return (
    <SectionWrapper background="white" className="relative">
      <ScrollReveal>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          Pricing shown is indicative. Your final quote depends on transaction volume, payroll headcount, and services
          required—we confirm everything after a free consultation.
        </p>
      </ScrollReveal>

      <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
        {pricingTiers.map((tier, i) => (
          <ScrollReveal key={tier.id} delay={i * 80} direction="up">
            <article
              className={cn(
                "flex h-full flex-col rounded-2xl border p-6 md:p-7",
                tier.highlighted
                  ? "border-ink bg-ink text-white shadow-[0_20px_40px_-12px_rgba(15,40,32,0.2)]"
                  : "border-ink/10 bg-surface"
              )}
            >
              <h3 className="text-xl font-bold tracking-tight">{tier.name}</h3>
              <p
                className={cn(
                  "mt-2 text-3xl font-bold tracking-tight",
                  tier.highlighted ? "text-signal-light" : "text-signal"
                )}
              >
                {tier.priceLabel}
              </p>
              <p
                className={cn(
                  "mt-4 text-sm leading-relaxed",
                  tier.highlighted ? "text-white/70" : "text-muted-foreground"
                )}
              >
                {tier.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <CheckIcon
                      className={cn("mt-0.5 size-4 shrink-0", tier.highlighted ? "text-signal-light" : "text-signal")}
                      aria-hidden
                    />
                    <span className={tier.highlighted ? "text-white/85" : "text-ink/80"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  "mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition",
                  tier.highlighted
                    ? "bg-signal text-white hover:bg-signal-light"
                    : "bg-ink text-white hover:bg-ink-light"
                )}
              >
                {tier.cta}
              </Link>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
