"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { services } from "@/lib/services-data"
import { siteConfig } from "@/lib/site-nav"
import { cn } from "@/lib/utils"

const fieldClassName =
  "h-11 rounded-xl border border-ink/12 bg-white px-4 text-sm shadow-none transition focus-visible:border-signal focus-visible:ring-2 focus-visible:ring-signal/15"

const textareaClassName =
  "min-h-[140px] rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm shadow-none transition focus-visible:border-signal focus-visible:ring-2 focus-visible:ring-signal/15"

export function ContactMessageForm() {
  const searchParams = useSearchParams()
  const topicFromUrl = searchParams.get("topic")
  const [status, setStatus] = useState<"idle" | "sent">("idle")
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  useEffect(() => {
    if (topicFromUrl && services.some((s) => s.id === topicFromUrl)) {
      setSelectedTopics([topicFromUrl])
    }
  }, [topicFromUrl])

  function toggleTopic(id: string) {
    setSelectedTopics((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const number = String(data.get("number") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    if (!name || !email || !message) return

    const topicLabels = selectedTopics
      .map((id) => services.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(", ")

    const subject = encodeURIComponent(
      `[${siteConfig.name}] Consultation request${topicLabels ? ` — ${topicLabels}` : ""}`
    )
    const body = encodeURIComponent(
      `${message}${topicLabels ? `\n\nServices interested in: ${topicLabels}` : ""}\n\n— ${name}\n${email}${number ? `\n${number}` : ""}`
    )
    window.location.href = `${siteConfig.emailMailto}?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-sm font-semibold text-ink">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm font-semibold text-ink">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="number" className="text-sm font-semibold text-ink">
          Phone
        </Label>
        <Input
          id="number"
          name="number"
          type="tel"
          autoComplete="tel"
          placeholder={siteConfig.phone}
          className={cn(fieldClassName, "sm:max-w-xs")}
        />
      </div>

      <div className="grid gap-3">
        <Label className="text-sm font-semibold text-ink">What do you need help with?</Label>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => {
            const active = selectedTopics.includes(service.id)
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleTopic(service.id)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition",
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-ink/12 bg-white text-ink/80 hover:border-ink/25 hover:text-ink"
                )}
              >
                {service.title}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message" className="text-sm font-semibold text-ink">
          Tell us about your business *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Industry, team size, current tools (QuickBooks, Gusto, etc.), and what a good month-end looks like for you."
          className={textareaClassName}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-ink/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          className="h-11 rounded-full bg-ink px-7 text-sm font-semibold text-white hover:bg-ink-light"
        >
          Send message
          <ArrowRightIcon className="size-4" aria-hidden />
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-xs sm:text-right">
          Opens your mail app with this message prefilled—we reply on business days.
        </p>
      </div>

      {status === "sent" ? (
        <div className="rounded-xl border border-signal/20 bg-signal/8 px-4 py-3 text-sm text-ink">
          Thanks—our team will follow up shortly. If your mail app did not open, email us at{" "}
          <a className="font-semibold text-signal hover:underline" href={siteConfig.emailMailto}>
            {siteConfig.email}
          </a>
          .
        </div>
      ) : null}
    </form>
  )
}
