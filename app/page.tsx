import type { Metadata } from "next"
import { Suspense } from "react"
import { Hero } from "@/components/home/hero"
import { siteConfig } from "@/lib/site-nav"
import { homeHero } from "@/lib/home-content"

export const metadata: Metadata = {
  title: homeHero.headline,
  description: siteConfig.description,
  keywords: [
    "PrimeGrowth",
    "virtual bookkeeping",
    "payroll service",
    "tax preparation",
    "small business accounting",
    "monthly bookkeeping close",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
    type: "website",
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  alternates: {
    canonical: "/",
  },
}

async function DeferredHomeServices() {
  const { HomeServices } = await import("@/components/home/services-section")
  return <HomeServices />
}

async function DeferredAboutSnapshot() {
  const { AboutSnapshot } = await import("@/components/home/about-snapshot")
  return <AboutSnapshot />
}

async function DeferredIndustriesPreview() {
  const { IndustriesPreview } = await import("@/components/home/industries-preview")
  return <IndustriesPreview />
}

async function DeferredProcessSection() {
  const { ProcessSection } = await import("@/components/home/process-section")
  return <ProcessSection />
}

async function DeferredProofSection() {
  const { ProofSection } = await import("@/components/home/proof-section")
  return <ProofSection />
}

async function DeferredCtaBanner() {
  const { CtaBanner } = await import("@/components/home/cta-banner")
  return <CtaBanner />
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <DeferredHomeServices />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredAboutSnapshot />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredIndustriesPreview />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredProcessSection />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredProofSection />
      </Suspense>
      <Suspense fallback={null}>
        <DeferredCtaBanner />
      </Suspense>
    </>
  )
}
