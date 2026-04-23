import type { Metadata } from "next";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Referral Program",
  description: "Send a friend to NuView — we'll thank you both.",
};

export default function ReferralPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–REF">Referral program</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            Send a <span className="italic text-[var(--ember)]">friend.</span> We'll thank you both.
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            The best projects come from the same place: a neighbor who said "call NuView." If
            that's been you, here's how we say thanks.
          </p>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container size="md">
          <div className="rounded-[var(--radius-lg)] border border-[var(--bone)]/10 bg-[var(--charcoal)] p-10">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ember)]">How it works</div>
            <ol className="mt-8 space-y-8">
              {[
                ["01", "You send them our way.", "An intro email, a text, or just our phone number — however you'd do it."],
                ["02", "They book a project with us.", "Residential, commercial, any scope."],
                ["03", "We thank you.", "A referral credit or gift card, your choice. Details at consultation."],
              ].map(([num, t, d]) => (
                <li key={num} className="grid grid-cols-[auto_1fr] items-start gap-6">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ash)]">{num}</div>
                  <div>
                    <h3 className="font-display text-[1.4rem] leading-tight text-[var(--bone)]">{t}</h3>
                    <p className="mt-2 text-[0.98rem] leading-[1.6] text-[var(--linen)]">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <Button href="/contact" variant="primary">Send a referral</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
