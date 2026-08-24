import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: "default" | "muted" | "surface" | "ink" | "signal" | "white"
  padding?: "default" | "sm" | "lg" | "none"
}

const bgMap = {
  default: "",
  muted: "bg-muted/50",
  surface: "bg-surface",
  ink: "bg-ink text-white",
  signal: "bg-signal text-white",
  white: "bg-white dark:bg-card",
}

const paddingMap = {
  default: "py-14 md:py-20",
  sm: "py-10 md:py-14",
  lg: "py-20 md:py-28",
  none: "",
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  background = "default",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(bgMap[background], paddingMap[padding], className)}
    >
      <div className={cn("mx-auto max-w-[1200px] px-5 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
