import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { industries } from "@/lib/industries-data"

export function IndustriesGrid() {
  return (
    <SectionWrapper background="white" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl">
          <p className="section-label">Who we serve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Tailored support for how you work
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {industries.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 60} direction="up">
            <article className="grid items-start gap-6 rounded-2xl border border-ink/10 border-l-4 border-l-signal bg-surface p-6 md:grid-cols-12 md:gap-8 md:p-8">
              <div className="md:col-span-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.previewDesc}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{item.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-ink/85 md:text-base">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-10">
        <Link
          href="/contact"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-ink-light"
        >
          Discuss your industry
          <ArrowRightIcon className="size-4" aria-hidden />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
