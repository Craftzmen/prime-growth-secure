import { RouteHero } from "@/components/layout/route-hero"
import { pageHero } from "@/lib/page-content"
import { UNSPLASH } from "@/lib/remote-images"

export function WhyChooseHeader() {
  const hero = pageHero.whyChooseUs
  return (
    <RouteHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Why choose us" },
      ]}
      eyebrow={hero.eyebrow}
      title={
        <>
          {hero.titleLead}{" "}
          <span className="text-signal">{hero.titleHighlight}</span>
        </>
      }
      description={hero.description}
      image={UNSPLASH.teamCollaboration}
      imageAlt="Finance team meeting in a modern office"
    />
  )
}
