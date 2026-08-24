export type Testimonial = {
  quote: string
  name: string
  company: string
  initials: string
}

export const featuredTestimonial: Testimonial = {
  quote:
    "We went from guessing at margins to reviewing a P&L we actually trust. PrimeGrowth closed our first month in under a week and kept the same person on our account.",
  name: "Elena Vasquez",
  company: "Northline Studio",
  initials: "EV",
}

export const testimonials: Testimonial[] = [
  featuredTestimonial,
  {
    quote:
      "Payroll used to eat a full day every two weeks. Now it just shows up done, and our quarterly filings haven't been late since we switched.",
    name: "Marcus Chen",
    company: "Harbor & Co. Retail",
    initials: "MC",
  },
  {
    quote:
      "I'm a solo consultant—I needed someone who wouldn't over-engineer it. They set up simple project tracking and tax-ready reports without the enterprise fluff.",
    name: "Priya Nair",
    company: "Independent brand strategy",
    initials: "PN",
  },
  {
    quote:
      "Our lender asked for updated financials on short notice. PrimeGrowth had statements ready the next morning. That alone paid for the engagement.",
    name: "Tom Bradley",
    company: "Keystone Logistics",
    initials: "TB",
  },
  {
    quote:
      "They flagged a duplicate vendor charge we'd missed for months. Small catch, real money—and they explained it in plain language.",
    name: "Aisha Okonkwo",
    company: "Brightfield Health",
    initials: "AO",
  },
  {
    quote:
      "We added a second location and doubled headcount. They scaled the chart of accounts and payroll without us re-onboarding from scratch.",
    name: "James Whitfield",
    company: "Urban Plate Group",
    initials: "JW",
  },
]
