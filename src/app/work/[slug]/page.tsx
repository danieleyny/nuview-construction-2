import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProject, nextProject, projects } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { RevealImage } from "@/components/primitives/RevealImage";
import { RevealText } from "@/components/primitives/RevealText";
import { BeforeAfter } from "@/components/work/BeforeAfter";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.brief[0],
    openGraph: { title: p.name, description: p.brief[0], images: [p.hero] },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = nextProject(slug);

  return (
    <>
      {/* Hero */}
      <header className="relative">
        <div className="relative h-[85svh] min-h-[600px] w-full overflow-hidden">
          <Image src={p.hero} alt={p.name} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/20 to-transparent" />
        </div>
        <Container className="relative -mt-40 md:-mt-56">
          <Eyebrow code={p.type.toUpperCase().slice(0, 3)}>{p.neighborhood}</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            {p.name}
          </h1>
        </Container>
      </header>

      {/* Meta */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 gap-6 border-y border-[var(--bone)]/10 py-6 md:grid-cols-4">
            <MetaCell label="Type" value={p.type} />
            <MetaCell label="Size" value={p.sqft} />
            <MetaCell label="Duration" value={p.duration} />
            <MetaCell label="Completed" value={p.completed} />
          </div>
        </Container>
      </section>

      {/* Brief */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow code="01">The Brief</Eyebrow>
            </div>
            <div className="space-y-6 md:col-span-8">
              {p.brief.map((para, i) => (
                <RevealText key={i} as="p" className="text-[clamp(1.1rem,1.5vw,1.5rem)] leading-[1.5] text-[var(--bone)]">
                  {para}
                </RevealText>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Before / After */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10">
            <Eyebrow code="02">Before → After</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
              Drag to compare.
            </h2>
          </div>
          <BeforeAfter before={p.gallery[0]?.src || p.hero} after={p.hero} alt={p.name} />
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow code="03">The Build</Eyebrow>
          <div className="mt-10 grid gap-6 md:grid-cols-12">
            {p.gallery.map((g, i) => (
              <RevealImage
                key={i}
                src={g.src}
                alt={g.alt}
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, 70vw"
                wrapperClassName={`aspect-[${g.wide ? "16/10" : "4/5"}] ${g.wide ? "md:col-span-12" : "md:col-span-6"}`}
                rounded
              />
            ))}
          </div>
          {p.pullQuote && (
            <blockquote className="mx-auto my-20 max-w-4xl">
              <p className="font-display text-[clamp(1.8rem,3.5vw,3.2rem)] italic leading-[1.2] text-[var(--bone)]">
                <span className="text-[var(--ember)]">"</span>
                {p.pullQuote.quote}
                <span className="text-[var(--ember)]">"</span>
              </p>
              <footer className="mt-6 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                — {p.pullQuote.author}
              </footer>
            </blockquote>
          )}
        </Container>
      </section>

      {/* Materials */}
      <section className="bg-[var(--charcoal)] py-24 md:py-32">
        <Container>
          <Eyebrow code="04">Materials &amp; Finishes</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
            What it's made of.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {p.materials.map((m) => (
              <div key={m.name} className="border-t border-[var(--bone)]/10 pt-5">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ember)]">
                  {m.name}
                </div>
                <div className="mt-2 font-display text-[1.25rem] leading-[1.3] text-[var(--bone)]">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Next */}
      <section className="py-24 md:py-32">
        <Container>
          <Link
            href={`/work/${next.slug}`}
            data-cursor="view"
            className="group relative block overflow-hidden rounded-[var(--radius-lg)]"
          >
            <div className="relative aspect-[21/9] w-full">
              <Image src={next.thumb} alt={next.name} fill sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/90 via-[var(--obsidian)]/40 to-transparent" />
              <div className="absolute inset-0 flex items-end p-8 md:p-16">
                <div>
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ember)]">
                    Next project
                  </div>
                  <h3 className="mt-3 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
                    {next.name}
                  </h3>
                </div>
                <ArrowUpRight className="ml-auto size-10 text-[var(--ember)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ash)]">{label}</div>
      <div className="mt-2 font-display text-[1.4rem] text-[var(--bone)]">{value}</div>
    </div>
  );
}
