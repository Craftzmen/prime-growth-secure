import { CpuIcon, HeartHandshakeIcon, LayersIcon, type LucideIcon } from "lucide-react"

export type Differentiator = {
  title: string
  description: string
  icon: LucideIcon
}

/** Three pillars shown on the homepage proof section. */
export const homeDifferentiators: Differentiator[] = [
  {
    title: "Modern tools, human review",
    description:
      "Cloud accounting and automated reconciliations speed up the work—but every close is reviewed by a real bookkeeper who knows your account.",
    icon: CpuIcon,
  },
  {
    title: "Operators who've seen your stage",
    description:
      "From first revenue to multi-location payroll, our team has supported businesses at the inflection points where books usually break.",
    icon: HeartHandshakeIcon,
  },
  {
    title: "Room to grow with you",
    description:
      "Start with monthly bookkeeping and add payroll, tax prep, or CFO support when the business outpaces what one person can track.",
    icon: LayersIcon,
  },
]

export const differentiators: Differentiator[] = [
  ...homeDifferentiators,
  {
    title: "A team that stays put",
    description:
      "Your books get a consistent point of contact—not a rotating queue. We learn your vendors, rhythms, and the questions you ask every month.",
    icon: HeartHandshakeIcon,
  },
]

export const stats = [
  { value: "500+", label: "Clients served" },
  { value: "10+", label: "Years combined experience" },
  { value: "3", label: "Core industries supported" },
] as const
