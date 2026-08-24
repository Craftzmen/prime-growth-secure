export type PricingTier = {
  id: string
  name: string
  priceLabel: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    priceLabel: "From $299/mo",
    description: "Core bookkeeping for solo operators and early-stage businesses getting organized.",
    features: [
      "Monthly transaction categorization",
      "Bank and credit card reconciliation",
      "Standard financial reports",
      "Email support on business days",
    ],
    cta: "Get started",
  },
  {
    id: "growth",
    name: "Growth",
    priceLabel: "From $599/mo",
    description: "Full monthly books and reporting for teams that need consistent clarity.",
    features: [
      "Everything in Starter",
      "Payroll processing support",
      "Accounts payable and receivable tracking",
      "Monthly review call with your bookkeeper",
      "Tax-ready year-end package",
    ],
    highlighted: true,
    cta: "Book free consultation",
  },
  {
    id: "cfo",
    name: "CFO+",
    priceLabel: "Custom quote",
    description: "Strategic financial leadership for companies scaling revenue, raising capital, or expanding operations.",
    features: [
      "Everything in Growth",
      "Cash flow forecasting and budgeting",
      "Investor and board-ready reporting",
      "Dedicated financial advisor",
      "Custom KPI dashboards",
    ],
    cta: "Talk with us",
  },
]

export const pricingFaqs = [
  {
    question: "Are these prices final?",
    answer:
      "Pricing shown is indicative. Your final quote depends on transaction volume, payroll headcount, and the services you need. We confirm everything after a free consultation.",
  },
  {
    question: "What is included in onboarding?",
    answer:
      "We review your current books, connect your accounts, clean up historical records if needed, and set up a reporting cadence that fits your business.",
  },
  {
    question: "Can I change plans as my business grows?",
    answer:
      "Yes. PrimeGrowth scales with you—from freelancer books to full CFO support. We adjust your plan as your needs evolve.",
  },
  {
    question: "Do you require a long-term contract?",
    answer:
      "Most clients stay on monthly terms. We discuss commitment options during your consultation based on the scope of work.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "After your initial meeting and information sharing, most clients are onboarded within one to two weeks depending on complexity.",
  },
] as const
