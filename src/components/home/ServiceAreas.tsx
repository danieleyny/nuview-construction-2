"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { neighborhoods } from "@/content/neighborhoods";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServiceAreas() {
  const [hover, setHover] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[var(--obsidian)] py-32 md:py-40">
      <Container>
        <div className="mb-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow code="NV–07">Service areas</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
              Across <span className="italic text-[var(--ember)]">Philadelphia.</span>
            </h2>
          </div>
          <p className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.6] text-[var(--linen)] md:col-span-5 md:col-start-8 md:self-end">
            Every neighborhood has its own rules, permits, and building stock. We know them.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--bone)]/10 md:grid-cols-3 lg:grid-cols-4">
          {neighborhoods.map((n, i) => (
            <motion.div
              key={n.slug}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: (i % 6) * 0.04 }}
              onMouseEnter={() => setHover(n.slug)}
              onMouseLeave={() => setHover(null)}
            >
              <Link
                href={`/service-areas/${n.slug}`}
                data-cursor="link"
                className="group relative flex aspect-[5/3] flex-col justify-between overflow-hidden bg-[var(--charcoal)] p-5 transition-colors hover:bg-[var(--graphite)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[var(--ember)]/10 blur-2xl" />
                </div>
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-display text-[clamp(1.2rem,1.6vw,1.5rem)] leading-tight text-[var(--bone)] transition-colors group-hover:text-[var(--ember)]">
                    {n.name}
                  </div>
                  <div className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                    View →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between text-[0.82rem] text-[var(--ash)]">
          <span className="font-mono uppercase tracking-[0.18em]">
            {hover ? neighborhoods.find((n) => n.slug === hover)?.intro : "Hover a neighborhood"}
          </span>
          <Link href="/service-areas" className="font-mono text-[var(--bone)] hover:text-[var(--ember)]" data-cursor="link">
            See all {neighborhoods.length} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
