import { RouteHero } from "@/components/layout/route-hero"
import { pageHero } from "@/lib/page-content"
import { UNSPLASH } from "@/lib/remote-images"

export function ServicesHeader() {
  const hero = pageHero.services
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
      eyebrow={hero.eyebrow}
      title={
        <>
          {hero.titleLead}{" "}
          <span className="text-signal">{hero.titleHighlight}</span>
        </>
      }
      description={hero.description}
      image={UNSPLASH.servicesDesk}
      imageAlt="Financial dashboard and analytics on a laptop"
    />
  )
}
