"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "@/content/process";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-[var(--obsidian)] py-32 md:py-40">
      <Container>
        <div className="mb-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow code="NV–05">Our approach</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
              Four steps. <span className="italic text-[var(--ember)]">No surprises.</span>
            </h2>
          </div>
          <p className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.6] text-[var(--linen)] md:col-span-5 md:col-start-8 md:self-end">
            From the first site walk to the final punch-list, every stage is specified,
            scheduled, and communicated. You always know what's next.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Spine */}
          <div className="absolute left-[calc(1rem-1px)] top-0 hidden h-full w-px bg-[var(--bone)]/10 md:left-[calc(2.5rem-1px)] md:block" aria-hidden>
            <motion.div
              className="block w-full origin-top bg-[var(--ember)]"
              style={reduce ? { height: "100%" } : { height: lineHeight }}
            />
          </div>

          <ol className="space-y-16 md:space-y-24">
            {process.map((step, i) => (
              <motion.li
                key={step.number}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease, delay: 0.05 * i }}
                className="relative grid gap-6 md:grid-cols-12 md:gap-12 md:pl-16"
              >
                <div className="absolute left-0 top-2 hidden size-8 rounded-full border border-[var(--ember)] bg-[var(--obsidian)] md:block">
                  <div className="absolute inset-1.5 rounded-full bg-[var(--ember)]" />
                </div>

                <div className="md:col-span-3">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--ember)]">
                    Step {step.number}
                  </div>
                  <div className="mt-2 font-display text-[clamp(4rem,9vw,8rem)] leading-none tracking-tightest text-[var(--bone)]/10">
                    {step.number}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <h3 className="font-display text-[clamp(2rem,3.2vw,3rem)] leading-[1] tracking-tightest text-[var(--bone)]">
                    {step.name}
                  </h3>
                  <p className="mt-3 font-display text-[clamp(1.1rem,1.5vw,1.4rem)] italic leading-[1.35] text-[var(--ember)]">
                    {step.summary}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[0.95rem] leading-[1.65] text-[var(--linen)]">
                    {step.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
