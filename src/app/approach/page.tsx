import type { Metadata } from "next";
import { Process } from "@/components/home/Process";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Consultation, design, schedule, build. Four stages that make a NuView project feel like one conversation.",
};

export default function ApproachPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–AP">Approach</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            The <span className="italic text-[var(--ember)]">work</span> behind the work.
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            Every NuView project runs through the same four stages. Each one is specified,
            sequenced, and communicated. No stage ends with a shrug.
          </p>
        </Container>
      </header>

      <Process />

      <section className="bg-[var(--charcoal)] py-24 md:py-32">
        <Container>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
            Ready to start?
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">Book a consultation</Button>
            <Button href="/work" variant="secondary" icon={false}>See our work</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
