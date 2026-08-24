import Link from "next/link"
import { Suspense } from "react"
import { CheckIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactMessageForm } from "@/components/forms/contact-message-form"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { siteConfig } from "@/lib/site-nav"

const tips = [
  "Industry and team size",
  "Tools you use today (QuickBooks, Xero, Gusto)",
  "Whether you need bookkeeping, payroll, or tax prep",
] as const

function ContactFormPanel() {
  return (
    <div
      id="contact-form"
      className="scroll-mt-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-[0_20px_48px_-16px_rgba(15,40,32,0.1)] md:p-9"
    >
      <div className="mb-8 border-b border-ink/8 pb-6">
        <p className="section-label">Get started</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">Tell us about your business.</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A specialist will review your note and follow up within one business day.
        </p>
      </div>

      <ContactMessageForm />

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        PrimeGrowth provides bookkeeping and accounting support, not legal or tax advice. Consult a licensed CPA or
        attorney for specific guidance.
      </p>
    </div>
  )
}

function ContactFormFallback() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-7 md:p-9">
      <div className="h-8 w-48 animate-pulse rounded-lg bg-muted" />
      <div className="mt-6 space-y-4">
        <div className="h-11 animate-pulse rounded-xl bg-muted" />
        <div className="h-11 animate-pulse rounded-xl bg-muted" />
        <div className="h-32 animate-pulse rounded-xl bg-muted" />
      </div>
    </div>
  )
}

export function ContactForm() {
  return (
    <SectionWrapper background="surface" className="relative">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <ScrollReveal className="lg:col-span-4">
          <p className="section-label">Reach us directly</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Prefer to talk first? We&apos;re here Mon–Fri.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Call or email anytime during business hours—or send the form and we&apos;ll come back to you with a tailored
            recommendation.
          </p>

          <div className="mt-7 space-y-3">
            <Link
              href={siteConfig.phoneTel}
              className="flex items-start gap-4 rounded-xl border border-ink/10 bg-surface-elevated p-4 transition hover:border-signal/30 hover:shadow-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <PhoneIcon className="size-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Phone</p>
                <p className="mt-0.5 font-bold text-ink">{siteConfig.phone}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{siteConfig.hours}</p>
              </div>
            </Link>

            <Link
              href={siteConfig.emailMailto}
              className="flex items-start gap-4 rounded-xl border border-ink/10 bg-surface-elevated p-4 transition hover:border-signal/30 hover:shadow-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <MailIcon className="size-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Email</p>
                <p className="mt-0.5 font-bold text-ink">{siteConfig.email}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Specialist follow-up on business days</p>
              </div>
            </Link>

            <div className="flex items-start gap-4 rounded-xl border border-ink/10 bg-surface-elevated p-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <MapPinIcon className="size-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Office</p>
                <p className="mt-0.5 text-sm font-bold text-ink">{siteConfig.addressLines[0]}</p>
                <p className="text-sm text-ink">{siteConfig.addressLines[1]}</p>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-ink/10 bg-ink p-5 text-white md:p-6">
            <p className="text-sm font-semibold">Helpful to include</p>
            <ul className="mt-3 space-y-2">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-white/75">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-signal-light" aria-hidden />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <SendIcon className="size-3.5 text-signal" aria-hidden />
            Form submissions open your mail client with a prefilled message.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" className="lg:col-span-8">
          <Suspense fallback={<ContactFormFallback />}>
            <ContactFormPanel />
          </Suspense>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
