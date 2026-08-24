import Link from "next/link"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactAppointmentLink } from "@/components/layout/contact-appointment-link"
import { siteConfig } from "@/lib/site-nav"

type PageCtaStripProps = {
  title: string
  subtitle?: string
  showPhone?: boolean
  secondaryHref?: string
  secondaryLabel?: string
}

export function PageCtaStrip({
  title,
  subtitle,
  showPhone = false,
  secondaryHref,
  secondaryLabel,
}: PageCtaStripProps) {
  return (
    <section className="bg-ink py-12 text-white md:py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
        <ScrollReveal>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-lg text-sm text-white/65 md:text-base">{subtitle}</p> : null}
          {showPhone ? (
            <Link
              href={siteConfig.phoneTel}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-signal-light hover:text-white"
            >
              <PhoneIcon className="size-4" aria-hidden />
              {siteConfig.phone}
            </Link>
          ) : null}
        </ScrollReveal>
        <ScrollReveal className="flex flex-wrap items-center gap-3">
          <ContactAppointmentLink className="inline-flex h-11 shrink-0 items-center rounded-full bg-signal px-6 text-sm font-semibold text-white hover:bg-signal-light" />
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {secondaryLabel}
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          ) : null}
        </ScrollReveal>
      </div>
    </section>
  )
}
