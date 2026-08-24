import Link from "next/link"
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { siteConfig } from "@/lib/site-nav"

const cells = [
  {
    icon: PhoneIcon,
    label: "Phone",
    primary: siteConfig.phone,
    secondary: siteConfig.hours,
    href: siteConfig.phoneTel,
  },
  {
    icon: MailIcon,
    label: "Email",
    primary: siteConfig.email,
    secondary: "Specialist follow-up on business days",
    href: siteConfig.emailMailto,
  },
  {
    icon: MapPinIcon,
    label: "Office",
    primary: siteConfig.addressLines[0],
    secondary: siteConfig.addressLines[1],
  },
] as const

export function ContactSidebar() {
  return (
    <ScrollReveal direction="up" className="mt-8 md:mt-10">
      <div className="grid gap-4 sm:grid-cols-3">
        {cells.map((cell) => {
          const body = (
            <>
              <span className="flex size-10 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <cell.icon className="size-4" aria-hidden />
              </span>
              <p className="mt-3 text-xs font-semibold text-muted-foreground">{cell.label}</p>
              <p className="mt-1 text-sm font-bold tracking-tight text-ink md:text-base">{cell.primary}</p>
              {"secondary" in cell && cell.secondary ? (
                <p className="mt-1 text-xs text-muted-foreground">{cell.secondary}</p>
              ) : null}
            </>
          )

          const className =
            "block rounded-xl border border-ink/10 bg-surface p-5 transition hover:border-signal/30 hover:shadow-sm"

          return "href" in cell && cell.href ? (
            <Link key={cell.label} href={cell.href} className={className}>
              {body}
            </Link>
          ) : (
            <div key={cell.label} className={className}>
              {body}
            </div>
          )
        })}
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        Our team is available Monday through Friday to answer questions and help you take the next step.
      </p>
    </ScrollReveal>
  )
}
