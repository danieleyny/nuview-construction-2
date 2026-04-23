import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { getService, services } from "@/content/services";
import { projects } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { QuoteForm } from "@/components/forms/QuoteForm";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.description,
    openGraph: { title: s.name, description: s.description, images: [s.hero] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = projects
    .filter((p) => {
      const map: Record<string, string[]> = {
        "residential-construction": ["Residential", "Additions"],
        "kitchen-remodeling": ["Kitchen"],
        "bathroom-remodeling": ["Bathroom"],
        "commercial-construction": ["Commercial"],
        "complete-remodeling": ["Residential"],
        "outdoor-spaces": ["Outdoor"],
      };
      return (map[s.slug] || []).includes(p.type);
    })
    .slice(0, 4);

  return (
    <>
      <ServiceJsonLd slug={slug} />

      <header className="relative">
        <div className="relative h-[75svh] min-h-[560px] w-full overflow-hidden">
          <Image src={s.hero} alt={s.name} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/40 to-[var(--obsidian)]/60" />
        </div>
        <Container className="relative -mt-48 md:-mt-64">
          <Eyebrow code={s.code}>Service</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,11rem)] leading-[0.88] tracking-tightest text-[var(--bone)]">
            {s.name}
          </h1>
          <p className="mt-8 max-w-2xl font-display text-[clamp(1.4rem,2vw,2rem)] italic leading-[1.2] text-[var(--ember)]">
            {s.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.6] text-[var(--linen)]">
            {s.description}
          </p>
        </Container>
      </header>

      {/* Inclusions */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow code="01">What's included</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1] tracking-tightest text-[var(--bone)]">
                Scope we deliver.
              </h2>
            </div>
            <ul className="grid gap-4 md:col-span-8 md:grid-cols-2">
              {s.inclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-3 border-b border-[var(--bone)]/10 pb-4">
                  <Check className="mt-1 size-4 shrink-0 text-[var(--ember)]" aria-hidden />
                  <span className="text-[1.05rem] text-[var(--bone)]">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-[var(--charcoal)] py-24 md:py-32">
        <Container>
          <Eyebrow code="02">Process</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
            How we run it.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {s.process.map((p, i) => (
              <div key={p.step} className="border-t border-[var(--bone)]/15 pt-5">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ember)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 font-display text-[1.5rem] leading-[1.1] text-[var(--bone)]">
                  {p.step}
                </div>
                <p className="mt-3 text-[0.92rem] leading-[1.5] text-[var(--linen)]">{p.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="py-24 md:py-32">
          <Container>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <Eyebrow code="03">Related work</Eyebrow>
                <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
                  Selected projects.
                </h2>
              </div>
              <Link href="/work" className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--linen)] hover:text-[var(--ember)]" data-cursor="link">
                All work →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} data-cursor="view" className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]">
                    <Image src={p.thumb} alt={p.name} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  </div>
                  <div className="mt-4">
                    <div className="font-display text-[1.2rem] leading-tight text-[var(--bone)] group-hover:text-[var(--ember)]">
                      {p.name}
                    </div>
                    <div className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                      {p.neighborhood}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-[var(--charcoal)] py-24 md:py-32">
        <Container size="md">
          <Eyebrow code="04">FAQs</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
            Questions we hear.
          </h2>
          <div className="mt-12 divide-y divide-[var(--bone)]/10 border-y border-[var(--bone)]/10">
            {s.faqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <h3 className="font-display text-[clamp(1.15rem,1.5vw,1.5rem)] leading-snug text-[var(--bone)]">
                    {f.q}
                  </h3>
                  <span className="mt-1 size-6 shrink-0 text-[var(--ember)] transition-transform group-open:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-[1.6] text-[var(--linen)]">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Inline quote */}
      <section className="py-24 md:py-32">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow code="05">Start a project</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
                Ready when you are.
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.6] text-[var(--linen)]">
                Tell us a little about the project. We'll reach out to schedule a free on-site
                consultation within two business days.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary">Longer message? Use our full form</Button>
              </div>
            </div>
            <div className="md:col-span-7">
              <QuoteForm serviceName={s.name} endpoint="/api/quote" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
