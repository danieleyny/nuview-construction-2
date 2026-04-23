"use client";

import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

type Stat = {
  value: number;
  display: string;
  label: string;
  prefix?: string;
  suffix?: string;
};

const stats: Stat[] = [
  { value: 300, display: "300", label: "Projects completed", suffix: "+" },
  { value: 102, display: "102", label: "Five-star reviews" },
  { value: 2, display: "2", label: "Months — avg full reno", prefix: "<" },
  { value: 10, display: "10", label: "Years in Philadelphia", suffix: " yrs" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--obsidian)] py-32 md:py-48">
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(200,115,43,0.15), transparent 60%)",
        }}
        aria-hidden
      />
      <Container>
        <div className="mb-20 flex items-end justify-between">
          <div>
            <Eyebrow code="NV–02">By the numbers</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tightest text-[var(--bone)]">
              A decade building across Philadelphia. The numbers that matter.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-24 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatBlock key={s.label} stat={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatBlock({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) mv.set(stat.value);
  }, [inView, mv, stat.value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (textRef.current) {
        const rounded = stat.value < 10 ? v.toFixed(0) : Math.round(v).toString();
        textRef.current.textContent = reduce ? stat.display : rounded;
      }
    });
  }, [spring, stat.value, stat.display, reduce]);

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative"
    >
      <div className="hairline-t pt-6">
        <div className="flex items-baseline font-display text-[clamp(4rem,9vw,8rem)] leading-none tracking-tightest text-[var(--bone)]">
          {stat.prefix && <span className="text-[var(--ember)]">{stat.prefix}</span>}
          <span ref={textRef}>{reduce ? stat.display : "0"}</span>
          {stat.suffix && <span className="text-[var(--ember)]">{stat.suffix}</span>}
        </div>
        <div className="mt-4 max-w-[14rem] font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--ash)]">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}
