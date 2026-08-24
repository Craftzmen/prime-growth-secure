import { PageCtaStrip } from "@/components/layout/page-cta-strip"
import { pageCta } from "@/lib/page-content"

export function ServicesUrgentCta() {
  const cta = pageCta.services
  return <PageCtaStrip title={cta.title} subtitle={cta.subtitle} showPhone={cta.showPhone} />
}
