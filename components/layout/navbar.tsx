"use client"

import * as React from "react"
import { startTransition } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon, MenuIcon, PhoneIcon, XIcon, ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { headerPolicyLinks, mainNav, serviceLinks, siteConfig } from "@/lib/site-nav"
import { services } from "@/lib/services-data"
import { BrandLogo } from "@/components/layout/brand-logo"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileSlideIn, setMobileSlideIn] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [policyOpen, setPolicyOpen] = React.useState(false)
  const mobilePanelRef = React.useRef<HTMLDivElement>(null)
  const mobileClosingUserRef = React.useRef(false)

  const closeMobile = React.useCallback(() => {
    mobileClosingUserRef.current = true
    setMobileSlideIn((slideIn) => {
      if (!slideIn) queueMicrotask(() => setMobileOpen(false))
      return false
    })
  }, [])

  const openMobile = React.useCallback(() => {
    mobileClosingUserRef.current = false
    setMobileOpen(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileSlideIn(true))
    })
  }, [])

  const toggleMobile = React.useCallback(() => {
    if (mobileOpen) closeMobile()
    else openMobile()
  }, [mobileOpen, closeMobile, openMobile])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    startTransition(() => {
      setMobileSlideIn(false)
      setMobileOpen(false)
    })
  }, [pathname])

  React.useEffect(() => {
    if (!mobileOpen) return
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile()
    }
    document.addEventListener("keydown", onKey)
    return () => {
      html.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen, closeMobile])

  React.useEffect(() => {
    if (!mobileOpen || mobileSlideIn || !mobileClosingUserRef.current) return
    const id = window.setTimeout(() => {
      mobileClosingUserRef.current = false
      setMobileOpen(false)
    }, 400)
    return () => window.clearTimeout(id)
  }, [mobileOpen, mobileSlideIn])

  React.useEffect(() => {
    if (!mobileOpen) return
    const panel = mobilePanelRef.current
    if (!panel) return
    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== panel || e.propertyName !== "transform") return
      setMobileSlideIn((current) => {
        if (!current) {
          mobileClosingUserRef.current = false
          queueMicrotask(() => setMobileOpen(false))
        }
        return current
      })
    }
    panel.addEventListener("transitionend", onTransitionEnd)
    return () => panel.removeEventListener("transitionend", onTransitionEnd)
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const servicesActive = pathname.startsWith("/services")
  const policyActive = headerPolicyLinks.some((link) => pathname.startsWith(link.href))

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-ink/10 bg-surface-elevated/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-surface"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <BrandLogo variant="light" size="lg" />

        <div className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition",
                      servicesActive ? "bg-muted text-ink" : "text-ink/65 hover:bg-muted/80 hover:text-ink"
                    )}
                  >
                    {item.label}
                    <ChevronDownIcon className="size-3.5" aria-hidden />
                  </Link>
                  {servicesOpen ? (
                    <div className="absolute left-0 top-full z-50 w-72 pt-2">
                      <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface-elevated p-2 shadow-lg">
                        {services.map((svc) => (
                          <Link
                            key={svc.id}
                            href={`/services#${svc.id}`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-muted"
                          >
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
                              <svc.icon className="size-4" aria-hidden />
                            </span>
                            <span className="text-sm font-semibold text-ink">{svc.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            }

            if (item.label === "Policy") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setPolicyOpen(true)}
                  onMouseLeave={() => setPolicyOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition",
                      policyActive ? "bg-muted text-ink" : "text-ink/65 hover:bg-muted/80 hover:text-ink"
                    )}
                  >
                    {item.label}
                    <ChevronDownIcon className="size-3.5" aria-hidden />
                  </Link>
                  {policyOpen ? (
                    <div className="absolute left-0 top-full z-50 w-52 pt-2">
                      <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface-elevated p-2 shadow-lg">
                        {headerPolicyLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink transition hover:bg-muted"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition",
                  isActive(item.href) ? "bg-muted text-ink" : "text-ink/65 hover:bg-muted/80 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink-light sm:inline-flex"
          >
            Book consultation
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen && mobileSlideIn}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen && mobileSlideIn ? "Close menu" : "Open menu"}
            onClick={toggleMobile}
            className="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:bg-muted lg:hidden"
          >
            {mobileOpen && mobileSlideIn ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {typeof document !== "undefined" && mobileOpen
        ? createPortal(
            <div className="lg:hidden" role="presentation">
              <button
                type="button"
                aria-label="Close menu"
                className={cn(
                  "fixed inset-0 z-[600] bg-ink/40 transition-opacity duration-300",
                  mobileSlideIn ? "opacity-100" : "opacity-0"
                )}
                onClick={closeMobile}
              />
              <div
                ref={mobilePanelRef}
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                className={cn(
                  "fixed inset-y-0 right-0 z-[610] flex h-dvh w-full max-w-sm flex-col bg-surface-elevated shadow-2xl transition-transform duration-300",
                  mobileSlideIn ? "translate-x-0" : "translate-x-full"
                )}
              >
                <div className="flex h-14 items-center justify-between border-b border-ink/10 px-4">
                  <BrandLogo variant="light" size="sm" />
                  <button type="button" className="rounded-full p-2 hover:bg-muted" onClick={closeMobile} aria-label="Close menu">
                    <XIcon className="size-6" />
                  </button>
                </div>
                <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-8">
                  <ul className="mt-3 space-y-1">
                    {mainNav.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium",
                            link.label === "Policy"
                              ? policyActive
                                ? "bg-muted text-ink"
                                : "text-ink/75"
                              : isActive(link.href)
                                ? "bg-muted text-ink"
                                : "text-ink/75"
                          )}
                        >
                          {link.label}
                          <ArrowRightIcon className="size-4 text-ink/25" aria-hidden />
                        </Link>
                        {link.href === "/services" ? (
                          <ul className="mb-2 ml-2 space-y-1 border-l border-ink/10 pl-3">
                            {serviceLinks.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  onClick={closeMobile}
                                  className="block py-1.5 text-sm text-muted-foreground hover:text-signal"
                                >
                                  {s.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {link.label === "Policy" ? (
                          <ul className="mb-2 ml-2 space-y-1 border-l border-ink/10 pl-3">
                            {headerPolicyLinks.map((p) => (
                              <li key={p.href}>
                                <Link
                                  href={p.href}
                                  onClick={closeMobile}
                                  className="block py-1.5 text-sm text-muted-foreground hover:text-signal"
                                >
                                  {p.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-3 pt-8">
                    <Link
                      href="/contact"
                      onClick={closeMobile}
                      className="flex h-11 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
                    >
                      Book consultation
                    </Link>
                    <Link
                      href={siteConfig.phoneTel}
                      onClick={closeMobile}
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-ink/10 text-sm font-medium text-ink"
                    >
                      <PhoneIcon className="size-4 text-signal" aria-hidden />
                      {siteConfig.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  )
}
