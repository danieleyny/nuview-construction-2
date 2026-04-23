"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type Metric = {
  value: number;
  suffix?: string;
  label: string;
  sub: string;
};

const METRICS: Metric[] = [
  { value: 10, suffix: "+", label: "Years Building", sub: "Philadelphia-rooted since 2015" },
  { value: 320, suffix: "+", label: "Projects Delivered", sub: "Residential · Commercial" },
  { value: 98, suffix: "%", label: "On-Time Delivery", sub: "Tracked across every phase" },
  { value: 100, suffix: "%", label: "Satisfaction", sub: "Backed by project warranty" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="relative py-24 md:py-36 px-6 lg:px-10 max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end mb-16 md:mb-24">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono">
          <span className="w-10 h-px bg-accent" />
          {"// "} By the numbers
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl text-balance">
          A decade of <em className="text-accent">work you can stand in</em>,
          measured honestly.
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-line">
        {METRICS.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`py-10 md:py-14 px-4 md:px-8 ${
              i !== 0 ? "lg:border-l" : ""
            } ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 1 ? "border-l" : ""} ${
              i === 3 ? "border-l" : ""
            } border-line`}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-muted mb-6">
              0{i + 1}
            </div>
            <div className="font-display text-6xl md:text-8xl leading-none mb-4">
              <Counter value={m.value} suffix={m.suffix} />
            </div>
            <div className="text-sm md:text-base font-medium mt-4">{m.label}</div>
            <div className="text-xs text-fg-dim mt-1">{m.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
