"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 7000;

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const data = testimonials.slice(0, 5);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % data.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused, data.length]);

  const current = data[i];

  return (
    <section
      className="relative bg-[var(--charcoal)] py-32 md:py-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <Eyebrow code="NV–06">What clients say</Eyebrow>
        <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
          102 <span className="italic text-[var(--ember)]">five-star</span> reviews.
        </h2>

        <div className="relative mt-16 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease }}
              className="max-w-4xl"
            >
              <span className="font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.15] tracking-tight text-[var(--bone)]">
                <span className="text-[var(--ember)]">"</span>
                {current.quote}
                <span className="text-[var(--ember)]">"</span>
              </span>
              <footer className="mt-8 font-mono text-[0.82rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                <div className="text-[var(--bone)]">— {current.author}</div>
                <div className="mt-1">{current.context}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              {data.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  data-cursor="link"
                  className="group relative flex h-4 w-8 items-center justify-center"
                >
                  <span
                    className={`block h-px w-full transition-colors ${
                      idx === i ? "bg-[var(--ember)]" : "bg-[var(--bone)]/20 group-hover:bg-[var(--bone)]/40"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                {String(i + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setI((n) => (n - 1 + data.length) % data.length)}
                aria-label="Previous"
                data-cursor="link"
                className="flex size-11 items-center justify-center rounded-full border border-[var(--bone)]/15 text-[var(--bone)] transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)]"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => setI((n) => (n + 1) % data.length)}
                aria-label="Next"
                data-cursor="link"
                className="flex size-11 items-center justify-center rounded-full border border-[var(--bone)]/15 text-[var(--bone)] transition-colors hover:border-[var(--ember)] hover:text-[var(--ember)]"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
