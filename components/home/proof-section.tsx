import Link from "next/link"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { homeDifferentiators } from "@/lib/why-choose-us-data"
import { featuredTestimonial } from "@/lib/testimonials-data"

export function ProofSection() {
  return (
    <SectionWrapper background="surface" className="relative">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <ScrollReveal>
            <p className="section-label">Why PrimeGrowth</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Finance support that feels in-house
            </h2>
          </ScrollReveal>
          <div className="mt-8 space-y-4">
            {homeDifferentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60} direction="up">
                <article className="rounded-xl border border-ink/10 bg-surface-elevated p-5 md:p-6">
                  <div className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-6">
            <Link href="/why-choose-us" className="text-sm font-semibold text-ink hover:text-signal">
              Read more about our approach →
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" className="lg:col-span-5">
          <blockquote className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-ink p-7 text-white md:p-8">
            <p className="text-lg leading-relaxed md:text-xl">&ldquo;{featuredTestimonial.quote}&rdquo;</p>
            <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-signal text-sm font-bold text-white">
                {featuredTestimonial.initials}
              </span>
              <div>
                <cite className="not-italic text-sm font-semibold">{featuredTestimonial.name}</cite>
                <p className="text-sm text-white/60">{featuredTestimonial.company}</p>
              </div>
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
