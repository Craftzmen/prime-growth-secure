import { BriefcaseIcon, RocketIcon, UserIcon, type LucideIcon } from "lucide-react"

export type IndustryItem = {
  id: string
  title: string
  previewDesc: string
  description: string
  bullets: string[]
  icon: LucideIcon
}

export const industries: IndustryItem[] = [
  {
    id: "startups",
    title: "Startups",
    previewDesc: "Cap tables, burn tracking, and investor-ready reporting from seed to Series A.",
    description:
      "From first revenue to your next round, we keep books tight enough for diligence and reporting clear enough for board meetings. Cap table support, burn tracking, and scalable close processes grow with you.",
    bullets: [
      "Investor-ready financials and board materials",
      "Cap table and SAFE tracking support",
      "Scalable bookkeeping as headcount grows",
    ],
    icon: RocketIcon,
  },
  {
    id: "small-business",
    title: "Small business",
    previewDesc: "Monthly books and payroll for owners who would rather run the company than reconcile the bank.",
    description:
      "You built the business to serve customers—not to chase receipts and filing deadlines. We run monthly books, payroll, and tax-ready records so you always know where margins stand.",
    bullets: [
      "Monthly books and tax-ready records",
      "Payroll and vendor payment tracking",
      "Plain-language reports, not jargon",
    ],
    icon: BriefcaseIcon,
  },
  {
    id: "freelancers",
    title: "Freelancers",
    previewDesc: "Project-level income tracking and quarterly tax prep for independent operators.",
    description:
      "Independent work means irregular income and quarterly tax obligations. We track project-level revenue and expenses, keep records organized, and help filing season feel like a handoff—not a scramble.",
    bullets: [
      "Income and expense tracking by project",
      "Quarterly estimated tax planning",
      "Simple reports for your accountant",
    ],
    icon: UserIcon,
  },
]
