"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden pt-24">
      {/* backdrop */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={reduce ? undefined : { y }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(200,115,43,0.22), transparent 55%), radial-gradient(ellipse at 75% 85%, rgba(138,78,28,0.28), transparent 50%), linear-gradient(180deg, #0A0A0B 0%, #141416 100%)",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F3EFE7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease }}
          style={{
            background:
              "radial-gradient(1200px 800px at 50% 120%, rgba(200,115,43,0.25), transparent 60%)",
          }}
        />
      </motion.div>

      <motion.div className="relative w-full pb-20 md:pb-32" style={reduce ? undefined : { opacity }}>
        <Container>
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <Eyebrow code="NV–01">Philadelphia · Est. 2015</Eyebrow>
          </motion.div>

          <h1 className="mt-8 font-display text-[clamp(3rem,10vw,11rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
            <LineReveal delay={0.2}>Philadelphia's most</LineReveal>
            <LineReveal delay={0.45}>
              <span className="italic text-[var(--ember)]">trusted</span> builders.
            </LineReveal>
          </h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.1 }}
            className="mt-10 max-w-2xl text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.55] text-[var(--linen)]"
          >
            A general contractor delivering residential renovations and commercial builds across
            Philadelphia with uncompromising craftsmanship, clear communication, and schedules that
            hold.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.3 }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" variant="primary" size="lg">
              Start a project
            </Button>
            <Button href="/work" variant="secondary" size="lg" icon={false}>
              See our work
            </Button>
            <div className="ml-2 flex items-center gap-3 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--ash)]">
              <span className="h-px w-10 bg-[var(--ash)]/40" />
              <a href={site.phoneHref} className="hover:text-[var(--ember)]" data-cursor="link">
                {site.phone}
              </a>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ash)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span>Scroll</span>
          <motion.span
            className="block h-8 w-px bg-[var(--ash)]"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function LineReveal({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block will-change-transform"
        initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
