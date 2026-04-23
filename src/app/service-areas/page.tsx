import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { neighborhoods } from "@/content/neighborhoods";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "NuView builds across Philadelphia and the surrounding region — Rittenhouse, Fitler, Society Hill, Bella Vista, Wash West, Logan, Hawthorne, Callowhill, Avenue of the Arts, Chinatown, Ardmore, Cherry Hill.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–N">Service areas</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tightest text-[var(--bone)]">
            Across <span className="italic text-[var(--ember)]">Philadelphia.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            We know the permits, the building stock, and the landlords. Click a neighborhood for
            local details and recent work.
          </p>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((n, i) => (
              <Link
                key={n.slug}
                href={`/service-areas/${n.slug}`}
                data-cursor="view"
                className="group relative block overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={n.image}
                    alt={n.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--ember)]">
                    {String(i + 1).padStart(2, "0")} · Philadelphia
                  </div>
                  <div className="mt-2 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-[var(--bone)]">
                    {n.name}
                  </div>
                  <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--linen)]">
                    General contractor in {n.name} →
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
