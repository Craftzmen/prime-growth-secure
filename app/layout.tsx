import type { Metadata } from "next"
import localFont from "next/font/local"
import { Suspense } from "react"

import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"

const jakarta = localFont({
  src: [
    {
      path: "./fonts/plus-jakarta-sans-latin-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "./fonts/plus-jakarta-sans-latin-ext-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://primegrowth.com"),
  title: {
    default: `${siteConfig.name} | Virtual Bookkeeping & Accounting`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  keywords: [
    "PrimeGrowth",
    "virtual bookkeeping",
    "small business accounting",
    "payroll service",
    "tax preparation",
    "CFO services",
  ],
}

async function DeferredFooter() {
  const { SiteFooter } = await import("@/components/layout/site-footer")
  return <SiteFooter />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("antialiased", jakarta.variable, "font-sans")}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Suspense fallback={<footer className="min-h-40 bg-ink" aria-hidden />}>
          <DeferredFooter />
        </Suspense>
      </body>
    </html>
  )
}
