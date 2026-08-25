import Link from "next/link"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  {
    id: "agreement",
    title: "Agreement",
    paragraphs: [
      `By accessing the ${siteConfig.name} website or engaging our bookkeeping, payroll, tax preparation, accounting, or CFO support services, you agree to these Terms & Conditions and any written service agreement we provide.`,
      "If you do not agree, please do not use this website or request our services.",
    ],
  },
  {
    id: "services",
    title: "Services",
    paragraphs: [
      "Service descriptions on this website are summaries. Scope, deliverables, timelines, and fees are confirmed in writing after consultation.",
      `${siteConfig.name} provides bookkeeping and accounting support. We are not a law firm and do not provide legal representation. Tax preparation support is administrative in nature; licensed tax professionals should be consulted where required.`,
    ],
  },
  {
    id: "accounts-access",
    title: "Accounts and access",
    paragraphs: [
      "You are responsible for providing accurate information and for maintaining the confidentiality of credentials you share for accounting software, banks, and related tools.",
      "You authorize us to access systems and records needed to deliver agreed services, subject to confidentiality obligations.",
    ],
  },
  {
    id: "fees",
    title: "Fees and payment",
    paragraphs: [
      "Fees are outlined in your service agreement or quote. Monthly plans are typically billed in advance. Late or failed payments may pause ongoing work until resolved.",
      "Refunds and cancellations are governed by our Refund Policy and your written agreement.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      `Website content, branding, and materials are owned by ${siteConfig.name} or our licensors. You may not copy, redistribute, or commercially exploit site content without prior written permission.`,
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      `To the fullest extent permitted by law, ${siteConfig.name} is not liable for indirect, incidental, or consequential damages arising from use of this website or reliance on its content.`,
      "Service liability is limited as set out in your service agreement.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. The “last updated” date on this page reflects the current version. Continued use of the site after changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [],
  },
]

export function TermsContent() {
  return (
    <SectionWrapper background="white" className="relative" padding="lg">
      <article className="mx-auto max-w-3xl space-y-0 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-surface-elevated px-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:text-base">
        {sections.map((section, i) => (
          <ScrollReveal key={section.id} delay={i * 40} direction="up">
            <section id={section.id} className="scroll-mt-28 py-8 md:py-10">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-4 first:mt-0">
                  {paragraph}
                </p>
              ))}
              {section.id === "contact" ? (
                <p className="mt-4">
                  Email{" "}
                  <Link href={siteConfig.emailMailto} className="font-medium text-signal hover:underline">
                    {siteConfig.email}
                  </Link>{" "}
                  or call{" "}
                  <Link href={siteConfig.phoneTel} className="font-medium text-signal hover:underline">
                    {siteConfig.phone}
                  </Link>
                  .
                </p>
              ) : null}
            </section>
          </ScrollReveal>
        ))}
      </article>
    </SectionWrapper>
  )
}
