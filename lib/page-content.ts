import { MessageSquareIcon, RocketIcon, UserCheckIcon, type LucideIcon } from "lucide-react"

export type PageHeroContent = {
  eyebrow: string
  titleLead: string
  titleHighlight?: string
  description: string
}

export const pageHero = {
  services: {
    eyebrow: "Services",
    titleLead: "Everything your books need,",
    titleHighlight: "handled each month.",
    description:
      "Bookkeeping, payroll, tax prep, reporting, and CFO guidance—delivered by a consistent team that learns how your business actually runs.",
  },
  industries: {
    eyebrow: "Industries",
    titleLead: "Finance support shaped by",
    titleHighlight: "how you operate.",
    description:
      "Startups, small businesses, and freelancers each need different rhythms. We adapt reporting, payroll, and close cadence to match yours.",
  },
  pricing: {
    eyebrow: "Pricing",
    titleLead: "Plans that grow",
    titleHighlight: "with your business.",
    description:
      "Indicative monthly packages for bookkeeping and accounting. Your final quote depends on volume and scope—we confirm everything on a free consultation.",
  },
  whyChooseUs: {
    eyebrow: "Why choose us",
    titleLead: "Books you can read,",
    titleHighlight: "from people who stay.",
    description:
      "PrimeGrowth pairs modern accounting tools with experienced operators—so you get accurate closes, plain-language reports, and a team that remembers your business.",
  },
  contact: {
    eyebrow: "Contact",
    titleLead: "Tell us where you are today.",
    titleHighlight: "We'll map the next step.",
    description:
      "Share a few details about your business and what you need help with. A PrimeGrowth specialist will follow up on business days with a tailored recommendation.",
  },
} as const satisfies Record<string, PageHeroContent>

export type ContactStage = {
  title: string
  desc: string
  icon: LucideIcon
}

export const contactStages: ContactStage[] = [
  {
    title: "Send your request",
    desc: "Name, email, phone, and a short note—bookkeeping, payroll, tax prep, or CFO support.",
    icon: MessageSquareIcon,
  },
  {
    title: "Specialist follow-up",
    desc: "We clarify your setup, tools, and timeline, then recommend the right service mix.",
    icon: UserCheckIcon,
  },
  {
    title: "Onboarding begins",
    desc: "Account access, baseline review, and your first monthly close on a predictable schedule.",
    icon: RocketIcon,
  },
]

export const pageCta = {
  services: {
    title: "Questions about scope or pricing?",
    subtitle: "Call us during business hours—we'll walk through what you need.",
    showPhone: true,
  },
  whyChooseUs: {
    title: "Ready to see if we're a fit?",
    subtitle: "Book a consultation or review plans—no pressure, just clarity.",
    showPhone: false,
    secondaryHref: "/pricing",
    secondaryLabel: "View pricing",
  },
} as const
