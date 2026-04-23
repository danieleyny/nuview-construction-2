"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export function FeaturedWork() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const distance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, pinRef);
    })();

    return () => ctx?.revert?.();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--charcoal)]" aria-label="Featured work">
      <div className="pt-32 md:pt-40">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow code="NV–04">Featured work</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
                Recent <span className="italic text-[var(--ember)]">projects.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--linen)] hover:text-[var(--ember)]"
              data-cursor="link"
            >
              View all 6 case studies →
            </Link>
          </div>
        </Container>
      </div>

      <div ref={pinRef}>
        <div ref={trackRef} className="hidden pb-24 lg:flex lg:w-max lg:gap-8 lg:pl-24 lg:pt-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              data-cursor="view"
              className="group relative block w-[min(68vw,880px)] shrink-0 pr-8 last:pr-24"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]">
                <Image
                  src={p.thumb}
                  alt={p.name}
                  fill
                  sizes="70vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
                    {p.name}
                  </h3>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                <Chip>{p.sqft}</Chip>
                <Chip>{p.duration}</Chip>
                <Chip>{p.neighborhood}</Chip>
                <span className="ml-auto flex items-center gap-2 text-[var(--bone)]">
                  Case study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="scrollbar-none flex gap-4 overflow-x-auto px-6 pb-16 pt-8 lg:hidden">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="shrink-0 snap-start"
              style={{ width: "85vw" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]">
                <Image
                  src={p.thumb}
                  alt={p.name}
                  fill
                  sizes="85vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/75 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl tracking-tightest text-[var(--bone)]">
                    {p.name}
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                <Chip>{p.sqft}</Chip>
                <Chip>{p.duration}</Chip>
                <Chip>{p.neighborhood}</Chip>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--bone)]/15 px-3 py-1">
      {children}
    </span>
  );
}
