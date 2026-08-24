import {
  BookOpenIcon,
  CalculatorIcon,
  FileSpreadsheetIcon,
  LandmarkIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"

export type ServiceItem = {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  bullets: [string, string, string]
  engagement: string
  icon: LucideIcon
}

export const services: ServiceItem[] = [
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    shortDesc:
      "Daily transactions, reconciliations, and a clean monthly close—delivered on a predictable schedule.",
    longDesc:
      "We record transactions, reconcile accounts, and close each month on schedule. You get organized records and reports that reflect what is actually happening in the business—not a backlog waiting to be cleaned up.",
    bullets: [
      "Monthly transaction categorization and reconciliation",
      "Chart of accounts tailored to your business",
      "Clear financial reports you can act on",
    ],
    engagement: "Monthly ongoing support",
    icon: BookOpenIcon,
  },
  {
    id: "payroll",
    title: "Payroll service",
    shortDesc:
      "Pay runs processed on time with withholdings tracked and filings handled before deadlines hit.",
    longDesc:
      "Employee and contractor payments, tax withholdings, and filing support—handled on schedule so you are not chasing deadlines or fixing errors after the fact.",
    bullets: [
      "Payroll processing and direct deposit coordination",
      "Tax withholding and quarterly filing support",
      "Employee and contractor payment tracking",
    ],
    engagement: "Per pay cycle or monthly",
    icon: UsersIcon,
  },
  {
    id: "tax-preparation",
    title: "Tax preparation",
    shortDesc:
      "Organized records and prepared returns so filing season is a handoff, not a scramble.",
    longDesc:
      "We organize your financial data, identify deductions, and prepare returns with care. Whether you are a sole proprietor or a growing company, filing season becomes a structured handoff—not a last-minute panic.",
    bullets: [
      "Organized records for filing season",
      "Business and personal return preparation support",
      "Planning conversations before deadlines",
    ],
    engagement: "Seasonal + year-round prep",
    icon: FileSpreadsheetIcon,
  },
  {
    id: "accounting",
    title: "Accounting service",
    shortDesc:
      "P&L, balance sheet, and trend reports that show what changed—not just what happened.",
    longDesc:
      "Beyond basic bookkeeping, we deliver financial statements, variance analysis, and reporting that helps you understand performance—revenue trends, expense shifts, and margins over time.",
    bullets: [
      "Financial statements and management reports",
      "Expense and revenue trend analysis",
      "Support for lenders, investors, and advisors",
    ],
    engagement: "Monthly or quarterly",
    icon: CalculatorIcon,
  },
  {
    id: "cfo",
    title: "CFO services",
    shortDesc:
      "Forecasting, budgets, and board-ready materials when you outgrow monthly reporting alone.",
    longDesc:
      "When monthly reporting is not enough, we help with cash flow planning, budgeting, KPI tracking, and board-ready materials—ideal for companies navigating fundraising or expansion.",
    bullets: [
      "Cash flow forecasting and budget planning",
      "Investor-ready financial materials",
      "Ongoing strategic financial guidance",
    ],
    engagement: "Custom advisory retainer",
    icon: LandmarkIcon,
  },
]

export function getService(id: string): ServiceItem {
  const service = services.find((s) => s.id === id)
  if (!service) throw new Error(`Unknown service: ${id}`)
  return service
}

export const homeServices = services.slice(0, 4)
