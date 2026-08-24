import { PageCtaStrip } from "@/components/layout/page-cta-strip"
import { pageCta } from "@/lib/page-content"

export function WhyChooseCta() {
  const cta = pageCta.whyChooseUs
  return (
    <PageCtaStrip
      title={cta.title}
      subtitle={cta.subtitle}
      secondaryHref={cta.secondaryHref}
      secondaryLabel={cta.secondaryLabel}
    />
  )
}
