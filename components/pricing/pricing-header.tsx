import { RouteHero } from "@/components/layout/route-hero"
import { pageHero } from "@/lib/page-content"
import { UNSPLASH } from "@/lib/remote-images"

export function PricingHeader() {
  const hero = pageHero.pricing
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pricing" },
      ]}
      eyebrow={hero.eyebrow}
      title={
        <>
          {hero.titleLead}{" "}
          <span className="text-signal">{hero.titleHighlight}</span>
        </>
      }
      description={hero.description}
      image={UNSPLASH.pricingPlanning}
      imageAlt="Business financial planning charts on screen"
    />
  )
}
