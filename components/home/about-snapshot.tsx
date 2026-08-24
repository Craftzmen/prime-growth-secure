import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { homeMission } from "@/lib/home-content"
import { UNSPLASH } from "@/lib/remote-images"

export function AboutSnapshot() {
  return (
    <SectionWrapper background="surface" className="relative">
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <ScrollReveal direction="up" className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 md:aspect-[3/4]">
            <Image
              src={`${UNSPLASH.aboutWorkspace}&w=900`}
              alt="Finance team reviewing monthly reports together"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={55}
              loading="lazy"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-7">
          <p className="section-label">About PrimeGrowth</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">{homeMission.title}</h2>
          {homeMission.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {p}
            </p>
          ))}
          <ul className="mt-6 space-y-3">
            {homeMission.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink/85 md:text-base">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/why-choose-us"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-signal"
          >
            Why teams choose us
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
