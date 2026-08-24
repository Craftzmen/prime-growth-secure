import Link from "next/link"
import { mainNav, policyNav, serviceLinks, siteConfig } from "@/lib/site-nav"
import { footerCta } from "@/lib/home-content"
import { BrandLogo } from "@/components/layout/brand-logo"
import { ContactAppointmentLink } from "@/components/layout/contact-appointment-link"

export function SiteFooter() {
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
          <div className="space-y-4 md:col-span-4">
            <BrandLogo variant="dark" size="lg" />
            <p className="max-w-sm text-sm leading-relaxed text-white/55">{siteConfig.description}</p>
            <p className="max-w-sm text-xs leading-relaxed text-white/40">
              PrimeGrowth provides bookkeeping and accounting support, not legal or tax advice. Consult a licensed CPA
              or attorney for specific guidance.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 text-sm font-semibold text-white/90">Services</p>
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
            <p className="mb-4 text-sm font-semibold text-white/90">Quick links</p>
            <ul className="space-y-2.5">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-sm font-semibold text-white/90">Contact</p>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li>
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li>
                <Link href={siteConfig.emailMailto} className="transition hover:text-white">
                  {siteConfig.email}
                </Link>
              </li>
              <li>
                <Link href={siteConfig.phoneTel} className="transition hover:text-white">
                  {siteConfig.phone}
                </Link>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-5 py-5 md:flex-row md:px-8">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {policyNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/45 transition hover:text-signal-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
