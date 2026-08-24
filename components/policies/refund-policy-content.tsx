import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

const refundEligible = [
  "Duplicate charges or billing errors confirmed by our team",
  "Monthly service fees paid but not yet started, when cancelled within five business days of payment",
  "Cases where we are unable to begin work as agreed for reasons solely within our control",
]

const nonRefundable = [
  "Setup or onboarding fees after work has begun",
  "Completed bookkeeping periods, payroll runs, or tax preparation already delivered",
  "Third-party software, filing, or processing fees paid on your behalf",
  "Fees clearly marked non-refundable in your service agreement",
]

export function RefundPolicyContent() {
  return (
    <SectionWrapper background="white" className="relative" padding="lg">
      <article className="mx-auto max-w-3xl space-y-0 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-surface-elevated px-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:text-base">
        <section id="introduction" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Introduction</h2>
          <p>
            This Refund Policy explains how deposits, cancellations, and refunds work when you purchase services from{" "}
            {siteConfig.name}. By engaging our bookkeeping or accounting services, you agree to this policy together
            with any written service agreement we provide.
          </p>
        </section>

        <section id="scope" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Scope of services</h2>
          <p>
            This policy covers bookkeeping, payroll processing, tax preparation support, accounting reports, CFO
            advisory services, and related financial support offered through our website or by direct arrangement.
          </p>
        </section>

        <section id="payments" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Payments</h2>
          <p>
            Monthly plans are billed in advance. One-time setup fees may apply at onboarding. Payment terms, including
            deposits and billing cycles, are confirmed in your service agreement before work begins.
          </p>
        </section>

        <section id="cancellations" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Cancellations</h2>
          <p>
            You may cancel monthly services with written notice as specified in your agreement. If work has not started
            for a billing period, eligible fees may be refunded. If work has begun, charges apply for completed portions
            of the service.
          </p>
        </section>

        <section id="refunds" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Refund eligibility</h2>
          <p>Refunds may be issued when:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {refundEligible.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="non-refundable" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Non-refundable items</h2>
          <ul className="list-disc space-y-2 pl-5">
            {nonRefundable.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="process" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">How to request a refund</h2>
          <p>
            Email {siteConfig.email} with your name, business name, invoice or payment reference, and reason for the
            request. We review requests within ten business days and respond with our decision and next steps.
          </p>
        </section>

        <section id="contact" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Contact</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-signal" />
              <Link href={siteConfig.emailMailto} className="font-medium text-ink hover:text-signal">
                {siteConfig.email}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-signal" />
              <Link href={siteConfig.phoneTel} className="font-medium text-ink hover:text-signal">
                {siteConfig.phone}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-signal" />
              <span>
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </section>
      </article>
    </SectionWrapper>
  )
}
