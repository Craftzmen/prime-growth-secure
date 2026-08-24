import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { services } from "@/lib/services-data"
import { cn } from "@/lib/utils"

export function ServicesGrid() {
  return (
    <SectionWrapper id="services-list" background="white" className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="section-label">Our services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Pick what you need—or combine services into one plan.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Each service is designed to run on a recurring rhythm, not as one-off tasks.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((svc, i) => {
          const featured = svc.id === "bookkeeping"
          return (
            <ScrollReveal key={svc.id} delay={i * 50} direction="up">
              <article
                id={svc.id}
                className={cn(
                  "scroll-mt-28 flex h-full flex-col rounded-2xl border p-6 md:p-7",
                  featured
                    ? "border-ink bg-ink text-white"
                    : "border-ink/10 bg-surface hover:border-signal/25 hover:shadow-sm"
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-xl",
                      featured ? "bg-white/10 text-signal-light" : "bg-signal/10 text-signal"
                    )}
                  >
                    <svc.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{svc.title}</h3>
                    <p
                      className={cn(
                        "mt-1 text-xs font-medium",
                        featured ? "text-signal-light" : "text-signal"
                      )}
                    >
                      {svc.engagement}
                    </p>
                  </div>
                </div>

                <p
                  className={cn(
                    "mt-4 flex-1 text-sm leading-relaxed md:text-base",
                    featured ? "text-white/75" : "text-muted-foreground"
                  )}
                >
                  {svc.longDesc}
                </p>

                <ul className="mt-5 space-y-2">
                  {svc.bullets.map((inc) => (
                    <li
                      key={inc}
                      className={cn(
                        "flex items-start gap-2 text-sm",
                        featured ? "text-white/85" : "text-ink/80"
                      )}
                    >
                      <CheckIcon
                        className={cn("mt-0.5 size-4 shrink-0", featured ? "text-signal-light" : "text-signal")}
                        aria-hidden
                      />
                      {inc}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?topic=${svc.id}`}
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 text-sm font-semibold transition",
                    featured ? "text-signal-light hover:text-white" : "text-ink hover:text-signal"
                  )}
                >
                  Schedule a consultation
                  <ArrowRightIcon className="size-4" aria-hidden />
                </Link>
              </article>
            </ScrollReveal>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
