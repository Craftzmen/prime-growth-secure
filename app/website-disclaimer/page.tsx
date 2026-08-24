import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { WebsiteDisclaimerContent } from "@/components/policies/website-disclaimer-content"

export const metadata: Metadata = {
  title: "Website Disclaimer",
  description: "PrimeGrowth website disclaimer — general information, services, third-party links, and liability.",
  openGraph: {
    title: "Website Disclaimer — PrimeGrowth",
    url: "/website-disclaimer",
    type: "website",
  },
  alternates: {
    canonical: "/website-disclaimer",
  },
}

export default function WebsiteDisclaimerPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Legal"
        title="Website Disclaimer"
        description="Please read this disclaimer before using the PrimeGrowth website or relying on its content."
        lastUpdated="August 24, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Website Disclaimer" },
        ]}
      />
      <WebsiteDisclaimerContent />
    </>
  )
}
