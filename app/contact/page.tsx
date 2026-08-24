import type { Metadata } from "next"

import { ContactCards } from "@/components/contact/contact-cards"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactHeader } from "@/components/contact/contact-header"

export const metadata: Metadata = {
  title: "Contact | Book a Free Consultation",
  description:
    "Contact PrimeGrowth for bookkeeping, payroll, tax preparation, and accounting support. A specialist will follow up on business days.",
  keywords: ["contact PrimeGrowth", "bookkeeping consultation", "accounting inquiry", "virtual bookkeeper"],
  openGraph: {
    title: "Contact — PrimeGrowth",
    description: "Get started with PrimeGrowth. Share your business needs and a specialist will follow up.",
    url: "/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactCards />
      <ContactForm />
    </>
  )
}
