import type { Metadata } from "next"

import { ServicesBooking } from "@/components/services/services-booking"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesHeader } from "@/components/services/services-header"
import { ServicesUrgentCta } from "@/components/services/services-urgent-cta"

export const metadata: Metadata = {
  title: "Services | Bookkeeping, Payroll, Tax & CFO Support",
  description:
    "PrimeGrowth services: bookkeeping, payroll, tax preparation, accounting reports, and CFO guidance—delivered on a predictable monthly rhythm.",
  keywords: [
    "bookkeeping service",
    "payroll service",
    "tax preparation",
    "accounting service",
    "CFO services",
    "PrimeGrowth",
  ],
  openGraph: {
    title: "Services — PrimeGrowth",
    description: "Professional bookkeeping and accounting services for startups and small businesses.",
    url: "/services",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesGrid />
      <ServicesBooking />
      <ServicesUrgentCta />
    </>
  )
}
