import type { Metadata } from "next"

import { PolicyHeader } from "@/components/policies/policy-header"
import { PrivacyPolicyContent } from "@/components/policies/privacy-policy-content"

export const metadata: Metadata = {
  title: "Privacy Policy | How PrimeGrowth handles information",
  description:
    "Privacy practices for PrimeGrowth—how we collect, use, and protect visitor and client information related to bookkeeping and accounting services.",
  keywords: ["privacy policy", "data protection", "PrimeGrowth privacy"],
  openGraph: {
    title: "Privacy Policy — PrimeGrowth",
    description: "How PrimeGrowth handles personal and business information.",
    url: "/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How PrimeGrowth handles personal and business information when you use our website and request bookkeeping, payroll, or accounting services."
        lastUpdated="August 24, 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <PrivacyPolicyContent />
    </>
  )
}
