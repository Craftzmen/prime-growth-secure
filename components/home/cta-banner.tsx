import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"
import { ContactAppointmentLink } from "@/components/layout/contact-appointment-link"

export function CtaBanner() {
  return (
    <section className="bg-ink py-12 text-white md:py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
        <ScrollReveal>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Start with a 30-minute consultation.
          </h2>
          <p className="mt-2 text-sm text-white/65">
            <Link href={siteConfig.emailMailto} className="hover:text-signal-light">
              {siteConfig.email}
            </Link>
            <span className="mx-2 text-white/30">·</span>
            <Link href={siteConfig.phoneTel} className="hover:text-signal-light">
              {siteConfig.phone}
            </Link>
          </p>
        </ScrollReveal>
        <ContactAppointmentLink className="inline-flex h-11 shrink-0 items-center rounded-full bg-signal px-6 text-sm font-semibold text-white hover:bg-signal-light" />
      </div>
    </section>
  )
}
