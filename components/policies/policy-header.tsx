import { RouteHero, type RouteHeroBreadcrumb } from "@/components/layout/route-hero"

type PolicyHeaderProps = {
  title: string
  eyebrow: string
  description: string
  lastUpdated: string
  breadcrumbs: RouteHeroBreadcrumb[]
}

export function PolicyHeader({ title, eyebrow, description, lastUpdated, breadcrumbs }: PolicyHeaderProps) {
  return (
    <RouteHero
      breadcrumbs={breadcrumbs}
      eyebrow={eyebrow}
      title={title}
      description={description}
      variant="center"
      below={
        <p className="text-sm text-muted-foreground">Last updated · {lastUpdated}</p>
      }
    />
  )
}
