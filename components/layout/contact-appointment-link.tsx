"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const FORM_ID = "contact-form"
const CONTACT_HREF = `/contact#${FORM_ID}`

type ContactAppointmentLinkProps = {
  className?: string
  children?: React.ReactNode
}

/**
 * Goes to the contact form. On /contact, smooth-scrolls to the form instead of a no-op navigate.
 */
export function ContactAppointmentLink({ className, children }: ContactAppointmentLinkProps) {
  const pathname = usePathname()
  const onContact = pathname === "/contact"

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!onContact) return
    e.preventDefault()
    const el = document.getElementById(FORM_ID)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", `#${FORM_ID}`)
    }
  }

  return (
    <Link href={CONTACT_HREF} onClick={handleClick} className={cn(className)}>
      {children ?? (
        <>
          Book free consultation
          <ArrowRightIcon className="size-4" />
        </>
      )}
    </Link>
  )
}
