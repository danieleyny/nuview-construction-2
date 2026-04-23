import type { Metadata } from "next";
import { faqs } from "@/content/faqs";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to the questions we hear most from Philadelphia homeowners and commercial clients.",
};

export default function FaqPage() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–F">FAQ</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            Questions.<br /><span className="italic text-[var(--ember)]">Answered.</span>
          </h1>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container size="md">
          <div className="divide-y divide-[var(--bone)]/10 border-y border-[var(--bone)]/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <h3 className="font-display text-[clamp(1.2rem,1.8vw,1.6rem)] leading-snug text-[var(--bone)]">
                    {f.q}
                  </h3>
                  <span className="mt-1 size-6 shrink-0 text-[var(--ember)] transition-transform group-open:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[1rem] leading-[1.65] text-[var(--linen)]">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-16 rounded-[var(--radius-lg)] border border-[var(--bone)]/10 p-10">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--ember)]">Didn't see yours?</div>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,2.5vw,2.2rem)] leading-tight text-[var(--bone)]">
              Send us a note. We'll answer.
            </h2>
            <div className="mt-6"><Button href="/contact" variant="primary">Contact us</Button></div>
          </div>
        </Container>
      </section>
    </>
  );
}
