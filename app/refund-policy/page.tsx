import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"

export const metadata: Metadata = {
  title: "Refund Policy | PrimeGrowth service terms",
  description:
    "Refund and cancellation terms for PrimeGrowth bookkeeping, payroll, and accounting services.",
  keywords: ["refund policy", "cancellation", "PrimeGrowth refunds"],
  openGraph: {
    title: "Refund Policy — PrimeGrowth",
    url: "/refund-policy",
    type: "website",
  },
  alternates: {
    canonical: "/refund-policy",
  },
}

export default function RefundPolicyPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Refunds"
        title="Refund Policy"
        description="How deposits, cancellations, and refunds work for PrimeGrowth bookkeeping and accounting engagements."
        lastUpdated="August 24, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Refund Policy" },
        ]}
      />
      <RefundPolicyContent />
    </>
  )
}
