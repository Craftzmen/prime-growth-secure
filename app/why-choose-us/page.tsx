import type { Metadata } from "next"

import { WhyChooseCta } from "@/components/why-choose-us/why-choose-cta"
import { WhyChooseDifferentiators } from "@/components/why-choose-us/why-choose-differentiators"
import { WhyChooseHeader } from "@/components/why-choose-us/why-choose-header"
import { WhyChooseStats } from "@/components/why-choose-us/why-choose-stats"

export const metadata: Metadata = {
  title: "Why choose us | PrimeGrowth Bookkeeping",
  description:
    "Why teams choose PrimeGrowth: modern tools with human review, experienced operators, and finance support that scales with your business.",
  openGraph: {
    title: "Why Choose Us — PrimeGrowth",
    url: "/why-choose-us",
    type: "website",
  },
  alternates: {
    canonical: "/why-choose-us",
  },
}

export default function WhyChooseUsPage() {
  return (
    <>
      <WhyChooseHeader />
      <WhyChooseDifferentiators />
      <WhyChooseStats />
      <WhyChooseCta />
    </>
  )
}
