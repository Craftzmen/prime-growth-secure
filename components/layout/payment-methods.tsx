import { cn } from "@/lib/utils"

const methods = [
  { name: "Mastercard", src: "/payments/mastercard.svg" },
  { name: "Visa", src: "/payments/visa.svg" },
  { name: "American Express", src: "/payments/amex.svg" },
  { name: "Discover", src: "/payments/discover.svg" },
] as const

/**
 * Official payment logos on white badges for visibility on dark footer.
 * Source: aaronfagan/svg-credit-card-payment-icons (logo set, MIT).
 */
export function PaymentMethods({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)} aria-label="Accepted payment methods">
      {methods.map((method) => (
        <li key={method.name}>
          <span
            title={method.name}
            className="inline-flex h-11 w-[5rem] items-center justify-center rounded-md bg-white px-1 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG brand marks */}
            <img
              src={method.src}
              alt={method.name}
              width={72}
              height={46}
              className="h-8 w-auto max-w-[4.5rem] object-contain"
              loading="lazy"
              decoding="async"
            />
          </span>
        </li>
      ))}
    </ul>
  )
}
