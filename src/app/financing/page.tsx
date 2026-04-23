import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Financing",
  description: "Home improvement financing options through NuView's lending partners.",
};

const options = [
  { title: "Home equity lines of credit", detail: "Partner banks can often close in 3–4 weeks.", tag: "HELOC" },
  { title: "Home improvement loans", detail: "Unsecured, 5–15 year terms through lending partners.", tag: "UNSECURED" },
  { title: "0% promotional financing", detail: "Select scopes and qualified applicants, via partner lender.", tag: "0% APR" },
];

export default function FinancingPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–FIN">Financing</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            Build <span className="italic text-[var(--ember)]">now.</span> Pay over time.
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            We work with multiple lenders to help homeowners finance renovations without dipping
            into cash reserves. Ask at consultation — we'll introduce the right partner.
          </p>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {options.map((o) => (
              <div key={o.title} className="rounded-[var(--radius-md)] border border-[var(--bone)]/10 bg-[var(--charcoal)] p-8">
                <div className="inline-flex items-center rounded-full border border-[var(--ember)]/40 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ember)]">
                  {o.tag}
                </div>
                <h3 className="mt-6 font-display text-[1.5rem] leading-tight text-[var(--bone)]">{o.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-[1.55] text-[var(--linen)]">{o.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-[var(--radius-lg)] border border-[var(--bone)]/10 p-10">
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-[var(--bone)]">
              Let's talk numbers.
            </h2>
            <p className="mt-4 max-w-xl text-[1rem] leading-[1.6] text-[var(--linen)]">
              Start with a free consultation. We'll scope the project, quote it, and walk through
              financing options that fit.
            </p>
            <div className="mt-6"><Button href="/contact" variant="primary">Schedule consultation</Button></div>
          </div>
        </Container>
      </section>
    </>
  );
}
