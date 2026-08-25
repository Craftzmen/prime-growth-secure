import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { TermsContent } from "@/components/policies/terms-content"

export const metadata: Metadata = {
  title: "Terms & Conditions | PrimeGrowth",
  description:
    "Terms & Conditions for using the PrimeGrowth website and engaging bookkeeping, payroll, tax preparation, and accounting services.",
  openGraph: {
    title: "Terms & Conditions — PrimeGrowth",
    description: "Terms governing use of the PrimeGrowth website and services.",
    url: "/terms-and-conditions",
    type: "website",
  },
  alternates: {
    canonical: "/terms-and-conditions",
  },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The rules that govern use of the PrimeGrowth website and engagement of our bookkeeping and accounting services."
        lastUpdated="August 25, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <TermsContent />
    </>
  )
}
