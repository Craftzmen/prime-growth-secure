"use client"

import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type ScrollRevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode
  direction?: "up" | "left" | "right" | "fade" | "scale"
  delay?: number
  threshold?: number
}

const directionClass: Record<NonNullable<ScrollRevealProps["direction"]>, string> = {
  up: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
  fade: "translate-y-0",
  scale: "scale-[0.97]",
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out will-change-transform",
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : cn("opacity-0", directionClass[direction]),
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </div>
  )
}
