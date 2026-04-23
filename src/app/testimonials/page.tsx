import type { Metadata } from "next";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What Philadelphia clients say about NuView Constructions.",
};

export default function TestimonialsPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–R">Reviews</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tightest text-[var(--bone)]">
            <span className="italic text-[var(--ember)]">Five stars.</span><br />
            One hundred and two times.
          </h1>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container size="md">
          <div className="divide-y divide-[var(--bone)]/10 border-y border-[var(--bone)]/10">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="py-12">
                <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ember)]">
                  <span>★ ★ ★ ★ ★</span>
                  <span className="h-px w-6 bg-[var(--ember)]/40" />
                  <span>{t.date}</span>
                </div>
                <p className="mt-6 font-display text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.25] text-[var(--bone)]">
                  "{t.quote}"
                </p>
                <footer className="mt-5 font-mono text-[0.82rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                  — {t.author} · {t.context}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
