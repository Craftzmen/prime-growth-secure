import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { industries } from "@/lib/industries-data"

export function IndustriesPreview() {
  return (
    <SectionWrapper background="white" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl">
          <p className="section-label">Industries</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Built for how you actually work
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-3">
        {industries.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 70} direction="up">
            <article className="h-full rounded-xl border border-ink/10 border-l-4 border-l-signal bg-surface p-5 md:p-6">
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.previewDesc}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-8">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-signal"
        >
          Explore all industries
          <ArrowRightIcon className="size-4" aria-hidden />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
