import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { testimonials } from "@/lib/testimonials-data"

export function TestimonialsSection() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
      <ScrollReveal>
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-signal">Testimonials</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
            What our customers say
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <ScrollReveal key={item.name} delay={i * 60} direction="up">
            <blockquote className="flex h-full flex-col border border-ink/10 bg-card px-6 py-7">
              <p className="flex-1 text-sm leading-relaxed text-ink md:text-base">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-4 border-t border-ink/8 pt-5">
                <span className="flex size-10 items-center justify-center bg-signal text-xs font-bold text-white">
                  {item.initials}
                </span>
                <div>
                  <cite className="not-italic text-sm font-bold text-ink">{item.name}</cite>
                  <p className="text-xs text-muted-foreground">{item.company}</p>
                </div>
              </footer>
            </blockquote>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
