import Link from "next/link"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

const sections = [
  {
    id: "general",
    title: "General information",
    paragraphs: [
      "The information on this website is provided for general informational purposes only. PrimeGrowth makes reasonable efforts to keep content accurate and up to date, but we do not guarantee completeness or suitability for any particular purpose.",
      "Nothing on this site constitutes professional tax, legal, or investment advice. Consult a licensed CPA, attorney, or qualified advisor before making financial or legal decisions.",
    ],
  },
  {
    id: "services",
    title: "Services disclaimer",
    paragraphs: [
      "PrimeGrowth provides bookkeeping, payroll, accounting, and related financial support services. We are not a law firm and do not provide legal representation. Tax preparation support is administrative in nature; specific tax advice should come from a licensed tax professional where required.",
      "Service descriptions on this website are summaries. Scope, deliverables, and pricing are confirmed in writing after consultation.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party links",
    paragraphs: [
      "This website may link to third-party sites or tools. PrimeGrowth does not control and is not responsible for the content, privacy practices, or availability of external sites. Use of third-party services is at your own risk.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, PrimeGrowth shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
      "You agree to use this site at your own discretion and risk.",
    ],
  },
]

export function WebsiteDisclaimerContent() {
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
            </section>
          </ScrollReveal>
        ))}
        <ScrollReveal direction="up">
          <section id="contact" className="scroll-mt-28 py-8 md:py-10">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">Contact</h2>
            <p>
              Questions about this disclaimer may be sent to{" "}
              <Link href={siteConfig.emailMailto} className="font-medium text-signal hover:underline">
                {siteConfig.email}
              </Link>{" "}
              or{" "}
              <Link href={siteConfig.phoneTel} className="font-medium text-signal hover:underline">
                {siteConfig.phone}
              </Link>
              .
            </p>
          </section>
        </ScrollReveal>
      </article>
    </SectionWrapper>
  )
}
