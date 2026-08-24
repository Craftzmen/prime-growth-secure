import type { Metadata } from "next"

import { PricingFaq } from "@/components/pricing/pricing-faq"
import { PricingHeader } from "@/components/pricing/pricing-header"
import { PricingTiers } from "@/components/pricing/pricing-tiers"

export const metadata: Metadata = {
  title: "Pricing | Bookkeeping & Accounting Plans",
  description:
    "Explore PrimeGrowth pricing for bookkeeping, payroll, and accounting support. Starter, Growth, and CFO+ plans available.",
  openGraph: {
    title: "Pricing — PrimeGrowth",
    url: "/pricing",
    type: "website",
  },
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <PricingTiers />
      <PricingFaq />
    </>
  )
}
