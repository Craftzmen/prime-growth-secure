import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use information" },
  { id: "sharing", label: "Sharing" },
  { id: "retention", label: "Retention" },
  { id: "rights", label: "Your rights" },
  { id: "contact", label: "Contact" },
]

export function PrivacyPolicyContent() {
  return (
    <SectionWrapper background="white" className="relative" padding="lg">
      <ScrollReveal>
        <div className="mb-10 rounded-xl border border-ink/10 bg-surface p-5 md:p-6">
          <p className="section-label">On this page</p>
          <nav aria-label="Privacy policy table of contents" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="text-sm font-medium text-muted-foreground transition hover:text-signal"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </ScrollReveal>

      <article className="mx-auto max-w-3xl space-y-0 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-surface-elevated px-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:text-base">
        <section id="introduction" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Introduction</h2>
          <p>
            {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) provides virtual bookkeeping, payroll, accounting, and
            related financial support services. This Privacy Policy explains how we collect, use, and protect information
            when you visit our website or engage our services.
          </p>
        </section>

        <section id="information-we-collect" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Information we collect</h2>
          <p>We may collect:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Name, email, phone, and business address</li>
            <li>Business details you share (company name, industry, employee count)</li>
            <li>Financial records and documents you provide for bookkeeping or tax preparation</li>
            <li>Messages sent through forms, email, or consultation calls</li>
            <li>Technical data such as IP address, browser type, and pages viewed</li>
          </ul>
        </section>

        <section id="how-we-use" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">How we use information</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Deliver bookkeeping, payroll, tax preparation, and accounting services</li>
            <li>Respond to inquiries and schedule consultations</li>
            <li>Process payments and send service updates</li>
            <li>Improve website performance and security</li>
            <li>Meet legal and regulatory obligations</li>
          </ul>
        </section>

        <section id="sharing" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with service providers (hosting, email, payment
            processors, accounting software platforms) who assist in delivering our services, and with authorities when
            required by law.
          </p>
        </section>

        <section id="retention" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Retention</h2>
          <p>
            We retain information for as long as needed to provide services, meet legal obligations, resolve disputes,
            and enforce agreements. Financial records may be kept longer where required for tax or regulatory purposes.
          </p>
        </section>

        <section id="rights" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict use of your personal
            information. Contact us to exercise these rights.
          </p>
        </section>

        <section id="contact" className="scroll-mt-28 py-8 md:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Contact</h2>
          <p className="mb-4">Questions about this policy? Reach us at:</p>
          <ul className="space-y-3 text-ink">
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 text-signal" aria-hidden />
              <Link href={siteConfig.emailMailto} className="font-medium hover:text-signal">
                {siteConfig.email}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="size-4 text-signal" aria-hidden />
              <Link href={siteConfig.phoneTel} className="font-medium hover:text-signal">
                {siteConfig.phone}
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 size-4 text-signal" aria-hidden />
              <span>
                {siteConfig.addressLines[0]}
                <br />
                {siteConfig.addressLines[1]}
              </span>
            </li>
          </ul>
        </section>
      </article>
    </SectionWrapper>
  )
}
