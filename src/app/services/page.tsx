import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six core disciplines: residential construction, kitchens, bathrooms, commercial, complete remodeling, and outdoor spaces.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–S">Services</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,11rem)] leading-[0.88] tracking-tightest text-[var(--bone)]">
            What we <span className="italic text-[var(--ember)]">build.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            Six disciplines. One general contractor. Every scope coordinated under one roof —
            design, permits, trades, schedule, close-out.
          </p>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container>
          <div className="space-y-0 divide-y divide-[var(--bone)]/10 border-y border-[var(--bone)]/10">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                data-cursor="view"
                className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-center md:gap-10"
              >
                <div className="md:col-span-1 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ember)]">
                  {s.code}
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)] transition-colors group-hover:text-[var(--ember)]">
                    {s.name}
                  </h2>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[0.95rem] leading-[1.55] text-[var(--linen)]">{s.description}</p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] md:col-span-3">
                  <Image
                    src={s.hero}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 flex items-end justify-end p-4">
                    <ArrowUpRight className="size-6 text-[var(--bone)] opacity-0 transition-all group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
