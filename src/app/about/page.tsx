import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { RevealText } from "@/components/primitives/RevealText";
import { Button } from "@/components/primitives/Button";
import { Stats } from "@/components/home/Stats";

export const metadata: Metadata = {
  title: "About",
  description:
    "NuView Constructions — a Philadelphia general contractor delivering residential and commercial work since 2015.",
};

const team = [
  { name: "Founder / Principal", role: "General Contractor", bio: "Oversees every project. Walks every site weekly." },
  { name: "Project Director", role: "Operations", bio: "Schedules, permits, trade sequencing, client updates." },
  { name: "Lead Carpenter", role: "Field", bio: "Fifteen years on Philly rowhomes. Does not miss a shim." },
  { name: "Design Lead", role: "Interiors", bio: "Specifies materials, finishes, and fixtures across every scope." },
];

export default function AboutPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–A">About</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,9.5rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            We build <span className="italic text-[var(--ember)]">what lasts.</span>
          </h1>
        </Container>
      </header>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow code="01">Mission</Eyebrow>
            </div>
            <div className="space-y-6 md:col-span-8">
              <RevealText as="p" className="font-display text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.25] text-[var(--bone)]">
                We build spaces that earn their place in your life — kitchens, baths, full
                renovations, commercial fit-outs, custom work. Nothing generic. Nothing rushed.
              </RevealText>
              <RevealText as="p" className="text-[1.05rem] leading-[1.65] text-[var(--linen)]">
                Since 2015, NuView has been a Philadelphia general contractor delivering
                residential renovations and commercial builds across the city. We take on work
                where craftsmanship, communication, and schedule matter as much as the finish
                itself — which, in our experience, is always.
              </RevealText>
              <RevealText as="p" className="text-[1.05rem] leading-[1.65] text-[var(--linen)]">
                Our model is simple: small team, long tenure, in-house project management, and
                trade partners we've worked with for years. One point of contact, one plan,
                one set of expectations.
              </RevealText>
            </div>
          </div>
        </Container>
      </section>

      <Stats />

      <section className="py-24 md:py-32">
        <Container>
          <Eyebrow code="02">Team</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
            Who builds it.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="border-t border-[var(--bone)]/10 pt-5">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="size-24 text-[var(--bone)]/10">
                      <circle cx="50" cy="38" r="18" fill="currentColor" />
                      <path d="M20 90c0-15 13-26 30-26s30 11 30 26" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ember)]">{t.role}</div>
                <div className="mt-2 font-display text-[1.2rem] leading-tight text-[var(--bone)]">{t.name}</div>
                <p className="mt-2 text-[0.92rem] leading-[1.5] text-[var(--linen)]">{t.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--charcoal)] py-24 md:py-32">
        <Container>
          <Eyebrow code="03">Offices</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
            Two offices. <span className="italic text-[var(--ember)]">Both Center City.</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {site.addresses.map((a) => (
              <div key={a.zip} className="rounded-[var(--radius-lg)] border border-[var(--bone)]/10 p-8">
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--ember)]">{a.label}</div>
                <div className="mt-3 font-display text-[1.5rem] text-[var(--bone)]">{a.street}</div>
                <div className="text-[var(--ash)]">{a.city}, {a.state} {a.zip}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact" variant="primary">Start a project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
