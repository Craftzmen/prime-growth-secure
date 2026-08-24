import type { Metadata } from "next"

import { IndustriesGrid } from "@/components/industries/industries-grid"
import { IndustriesHeader } from "@/components/industries/industries-header"

export const metadata: Metadata = {
  title: "Industries | Startups, Small Business & Freelancers",
  description:
    "PrimeGrowth supports startups, small businesses, and freelancers with tailored bookkeeping, payroll, and accounting services.",
  openGraph: {
    title: "Industries — PrimeGrowth",
    url: "/industries",
    type: "website",
  },
  alternates: {
    canonical: "/industries",
  },
}

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHeader />
      <IndustriesGrid />
    </>
  )
}
