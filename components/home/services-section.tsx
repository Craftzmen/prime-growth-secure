import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { homeServices } from "@/lib/services-data"
import { cn } from "@/lib/utils"

export function HomeServices() {
  return (
    <SectionWrapper id="services" background="white" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="section-label">Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            What we handle each month
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Core finance operations for teams that need reliable closes—not a menu of one-off tasks.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {homeServices.map((item, i) => {
          const featured = item.id === "bookkeeping"
          return (
            <ScrollReveal key={item.id} delay={i * 60} direction="up">
              <Link
                href={`/services#${item.id}`}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border p-6 transition md:p-7",
                  featured
                    ? "border-ink bg-ink text-white hover:bg-ink-light"
                    : "border-ink/10 bg-surface hover:border-signal/30 hover:shadow-sm"
                )}
              >
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-xl",
                    featured ? "bg-white/10 text-signal-light" : "bg-signal/10 text-signal"
                  )}
                >
                  <item.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{item.title}</h3>
                <p
                  className={cn(
                    "mt-2 flex-1 text-sm leading-relaxed",
                    featured ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {item.shortDesc}
                </p>
                <span
                  className={cn(
                    "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold",
                    featured ? "text-signal-light" : "text-ink group-hover:text-signal"
                  )}
                >
                  Learn more
                  <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </ScrollReveal>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
