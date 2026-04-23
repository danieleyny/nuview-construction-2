"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    body:
      "We sit with you, walk the space, and establish the scope, ambition and real-world constraints of the project.",
    meta: "Day 01 – 03",
  },
  {
    n: "02",
    title: "Design",
    body:
      "Architectural drawings, material selections and visual references — built collaboratively until every detail is resolved.",
    meta: "Week 01 – 04",
  },
  {
    n: "03",
    title: "Proposal",
    body:
      "A single transparent document: timeline, phases, materials, and investment. No moving targets.",
    meta: "Week 04 – 05",
  },
  {
    n: "04",
    title: "Build",
    body:
      "A dedicated project manager, daily updates, and a crew that treats your home or business like their own.",
    meta: "Delivery",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative py-24 md:py-40 px-6 lg:px-10 max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end mb-16 md:mb-24">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono">
          <span className="w-10 h-px bg-accent" />
          {"// "} The process
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl text-balance">
          A process that <em className="text-accent">respects your time</em>,
          budget and vision.
        </h2>
      </div>

      <div className="relative grid md:grid-cols-4 gap-6 md:gap-8">
        {/* Progress line */}
        <div className="hidden md:block absolute top-20 left-0 right-0 h-px bg-line">
          <motion.div
            style={{ width: lineProgress }}
            className="h-full bg-accent origin-left"
          />
        </div>

        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative pt-14"
          >
            <div className="absolute top-[72px] md:top-[76px] left-0 w-3 h-3 rounded-full bg-accent ring-8 ring-bg" />
            <div className="absolute top-0 left-0 font-mono text-[10px] uppercase tracking-[0.25em] text-fg-dim">
              {s.meta}
            </div>
            <div className="flex items-baseline gap-3 mt-3">
              <span className="font-mono text-xs text-accent">{s.n}</span>
              <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
            </div>
            <p className="mt-4 text-sm md:text-[15px] text-fg-dim leading-relaxed max-w-xs text-pretty">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
