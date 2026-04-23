"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[var(--obsidian)] py-32 md:py-40">
      <Container>
        <div className="mb-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow code="NV–03">Services</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
              What we <span className="italic text-[var(--ember)]">build.</span>
            </h2>
          </div>
          <p className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.6] text-[var(--linen)] md:col-span-5 md:col-start-8 md:self-end">
            Six core disciplines. Each one led by someone who has been doing it for a decade or
            more. All of it coordinated under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease, delay: (i % 3) * 0.1 }}
            >
              <Link
                href={`/services/${s.slug}`}
                data-cursor="view"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]"
              >
                <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
                  <Image
                    src={s.hero}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--linen)]">
                    <span>{s.code}</span>
                    <ArrowUpRight className="size-4 translate-x-0 -translate-y-0 opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="font-display text-[clamp(1.7rem,2.4vw,2.3rem)] leading-[1.02] tracking-tight text-[var(--bone)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
                      {s.name}
                    </h3>
                    <p className="mt-3 max-w-sm text-[0.92rem] leading-[1.5] text-[var(--linen)]">
                      {s.description}
                    </p>
                    <div className="relative mt-5 h-px w-full overflow-hidden bg-[var(--bone)]/10">
                      <span className="absolute inset-y-0 left-0 block w-full origin-left scale-x-0 bg-[var(--ember)] transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
