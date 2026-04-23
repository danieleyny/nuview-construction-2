import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/primitives/Container";

export function CtaBand() {
  return (
    <section className="relative bg-[var(--obsidian)] py-32 md:py-48">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(200,115,43,0.28), transparent 55%)",
        }}
      />
      <Container>
        <div className="relative">
          <h2 className="font-display text-[clamp(2.8rem,10vw,10rem)] leading-[0.88] tracking-tightest text-[var(--bone)]">
            Let's build<br />
            <span className="italic text-[var(--ember)]">something that lasts.</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <Link
              href="/contact"
              data-cursor="link"
              className="group inline-flex items-center gap-3 rounded-[var(--radius-md)] bg-[var(--ember)] px-8 py-5 font-sans text-[0.95rem] font-medium text-[var(--obsidian)] transition-colors hover:bg-[var(--ember-hot)]"
            >
              Start a project
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={site.phoneHref}
              data-cursor="link"
              className="font-mono text-[clamp(1.2rem,2vw,1.6rem)] uppercase tracking-[0.1em] text-[var(--bone)] hover:text-[var(--ember)]"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
