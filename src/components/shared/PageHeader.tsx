import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { RevealText } from "@/components/primitives/RevealText";

type Props = {
  eyebrow: string;
  code?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export function PageHeader({ eyebrow, code, title, intro }: Props) {
  return (
    <header className="relative pt-40 md:pt-48 lg:pt-56">
      <Container>
        <Eyebrow code={code}>{eyebrow}</Eyebrow>
        <h1 className="mt-8 font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tightest text-[var(--bone)]">
          <RevealText as="span" splitWords>{typeof title === "string" ? title : ""}</RevealText>
          {typeof title !== "string" && title}
        </h1>
        {intro && (
          <div className="mt-10 max-w-2xl text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            {intro}
          </div>
        )}
      </Container>
    </header>
  );
}
