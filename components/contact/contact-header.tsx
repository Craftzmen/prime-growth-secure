import { RouteHero } from "@/components/layout/route-hero"
import { pageHero } from "@/lib/page-content"
import { UNSPLASH } from "@/lib/remote-images"

export function ContactHeader() {
  const hero = pageHero.contact
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
      eyebrow={hero.eyebrow}
      title={
        <>
          {hero.titleLead}{" "}
          <span className="text-signal">{hero.titleHighlight}</span>
        </>
      }
      description={hero.description}
      image={UNSPLASH.contactSupport}
      imageAlt="Customer support representative ready to help"
    />
  )
}
