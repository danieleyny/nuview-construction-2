"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const LINE = "We don't build fast. We build right — then we build fast.";
const WORDS = LINE.split(" ");

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const accent = word.toLowerCase().includes("right");
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.22em] ${accent ? "italic text-accent" : ""}`}
    >
      {word}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"],
  });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-48 px-6 lg:px-10 max-w-[1600px] mx-auto"
    >
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono mb-10">
        <span className="w-10 h-px bg-accent" />
        {"// "} Manifesto
      </div>

      <h2 className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.1] text-balance max-w-6xl">
        {WORDS.map((w, i) => {
          const start = i / WORDS.length;
          const end = start + 1 / WORDS.length;
          return (
            <Word
              key={i}
              word={w}
              progress={scrollYProgress}
              start={start}
              end={end}
            />
          );
        })}
      </h2>

      <div className="mt-14 md:mt-20 flex flex-col md:flex-row gap-6 md:gap-16 items-start">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-fg-dim font-mono">
          <span className="w-8 h-px bg-fg-dim" />
          NV · 01
        </div>
        <p className="max-w-xl text-fg-dim leading-relaxed text-pretty">
          Every milestone on our schedule is earned by the work that came
          before it. That&apos;s why our projects hit their delivery dates —
          and why they last long after we hand over the keys.
        </p>
      </div>
    </section>
  );
}
