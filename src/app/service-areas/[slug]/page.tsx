import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getNeighborhood, neighborhoods } from "@/content/neighborhoods";
import { projects } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { QuoteForm } from "@/components/forms/QuoteForm";

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) return {};
  return {
    title: `General Contractor in ${n.name}`,
    description: n.intro,
    openGraph: { title: `General Contractor in ${n.name}`, description: n.intro, images: [n.image] },
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) notFound();

  const related = projects.filter((p) => p.neighborhood.toLowerCase().includes(n.name.toLowerCase().split(" ")[0])).slice(0, 4);

  return (
    <>
      <header className="relative">
        <div className="relative h-[70svh] min-h-[520px] w-full overflow-hidden">
          <Image src={n.image} alt={n.name} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/40 to-[var(--obsidian)]/50" />
        </div>
        <Container className="relative -mt-40 md:-mt-56">
          <Eyebrow>Service area · Philadelphia</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            General Contractor in<br />
            <span className="italic text-[var(--ember)]">{n.name}.</span>
          </h1>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow code="01">Local</Eyebrow>
            </div>
            <div className="space-y-6 md:col-span-8">
              <p className="font-display text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.25] italic text-[var(--ember)]">
                {n.intro}
              </p>
              {n.paragraphs.map((p, i) => (
                <p key={i} className="text-[1.05rem] leading-[1.65] text-[var(--bone)]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--charcoal)] py-24 md:py-32">
          <Container>
            <Eyebrow code="02">Recent work</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
              Projects in {n.name}.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} data-cursor="view" className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]">
                    <Image src={p.thumb} alt={p.name} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  </div>
                  <div className="mt-4 font-display text-[1.15rem] text-[var(--bone)] group-hover:text-[var(--ember)]">
                    {p.name}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-24 md:py-32">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow code="03">Start a project</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
                Building in {n.name}?
              </h2>
              <p className="mt-4 text-[1rem] leading-[1.6] text-[var(--linen)]">
                Tell us about the project. We know the neighborhood.
              </p>
            </div>
            <div className="md:col-span-7">
              <QuoteForm serviceName={`General contracting · ${n.name}`} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
