export const siteConfig = {
  name: "PrimeGrowth",
  tagline: "Virtual bookkeeping for growing teams.",
  /** Short label under the footer logo (matches common bookkeeping footer pattern). */
  footerEyebrow: "Virtual Bookkeeping",
  description:
    "PrimeGrowth runs your monthly books, payroll, and reporting—so you always know where the business stands before you make the next decision.",
  footerDescription:
    "Our professional bookkeeping services keep your financial records organized, up to date, and ready for taxes or lenders. We deliver clear reporting so you understand cash flow and profitability—and manage the books so you can run the business with confidence.",
  phone: "808 746 7913",
  phoneTel: "tel:+18087467913",
  email: "info@primegrowth.tech",
  emailMailto: "mailto:info@primegrowth.tech",
  addressLines: ["824 E 9TH ST, APT. 6C", "BROOKLYN, NY, 11230, USA"],
  hours: "Mon–Fri",
} as const

export type NavItem = { href: string; label: string }

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/why-choose-us", label: "Why choose us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Policy" },
]

export const headerPolicyLinks: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
]

export const policyNav: NavItem[] = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/website-disclaimer", label: "Website Disclaimer" },
]

/** Quick links column in the footer (Services listed separately). */
export const footerQuickLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
]

export const serviceLinks: NavItem[] = [
  { href: "/services#bookkeeping", label: "Bookkeeping" },
  { href: "/services#payroll", label: "Payroll Service" },
  { href: "/services#tax-preparation", label: "Tax Preparation" },
  { href: "/services#accounting", label: "Accounting Service" },
  { href: "/services#cfo", label: "CFO Services" },
]
