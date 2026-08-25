import Link from "next/link"
import { MailIcon, PhoneIcon } from "lucide-react"
import {
  footerQuickLinks,
  policyNav,
  serviceLinks,
  siteConfig,
} from "@/lib/site-nav"
import { footerCta } from "@/lib/home-content"
import { BrandLogo } from "@/components/layout/brand-logo"
import { ContactAppointmentLink } from "@/components/layout/contact-appointment-link"
import { PaymentMethods } from "@/components/layout/payment-methods"

export function SiteFooter() {
  const primaryPolicies = policyNav.filter((p) => p.href !== "/website-disclaimer")
  const disclaimer = policyNav.find((p) => p.href === "/website-disclaimer")

  return (
    <footer className="border-t border-ink/10">
      <div className="bg-surface">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8 md:py-12">
          <h2 className="max-w-md text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {footerCta.headline}
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ContactAppointmentLink className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:bg-ink-light" />
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex h-11 items-center justify-center text-sm font-medium text-ink/70 hover:text-signal"
            >
              {siteConfig.phone}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-ink text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-12 md:gap-8 md:px-8 md:py-16">
          <div className="space-y-5 md:col-span-4">
            <div className="space-y-2">
              <BrandLogo variant="dark" size="xl" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                {siteConfig.footerEyebrow}
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">{siteConfig.footerDescription}</p>
            <PaymentMethods className="pt-1" />
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 text-sm font-semibold text-white">Our Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-sm font-semibold text-white">Quick Link</p>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-sm font-semibold text-white">Contact</p>
            <ul className="space-y-3.5 text-sm text-white/55">
              <li className="leading-relaxed">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li>
                <Link
                  href={siteConfig.emailMailto}
                  className="inline-flex items-center gap-2.5 transition hover:text-white"
                >
                  <MailIcon className="size-4 shrink-0 text-signal-light" aria-hidden />
                  {siteConfig.email}
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center gap-2.5 transition hover:text-white"
                >
                  <PhoneIcon className="size-4 shrink-0 text-signal-light" aria-hidden />
                  {siteConfig.phone}
                </Link>
              </li>
              <li className="text-white/40">{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-5 md:flex-row md:items-start md:justify-between md:px-8">
            <p className="text-xs text-white/40">
              &copy; All copyright {new Date().getFullYear()} by {siteConfig.name}
            </p>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
                {primaryPolicies.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-white/45 transition hover:text-signal-light"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {disclaimer ? (
                <Link
                  href={disclaimer.href}
                  className="text-xs text-white/45 transition hover:text-signal-light"
                >
                  {disclaimer.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
