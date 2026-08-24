import { RouteHero } from "@/components/layout/route-hero"
import { pageHero } from "@/lib/page-content"
import { UNSPLASH } from "@/lib/remote-images"

export function IndustriesHeader() {
  const hero = pageHero.industries
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]}
      eyebrow={hero.eyebrow}
      title={
        <>
          {hero.titleLead}{" "}
          <span className="text-signal">{hero.titleHighlight}</span>
        </>
      }
      description={hero.description}
      image={UNSPLASH.industriesWork}
      imageAlt="Small business team collaborating in an office"
    />
  )
}
