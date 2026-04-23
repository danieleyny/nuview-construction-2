"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85";

const words = ["Built", "with", "precision.", "Finished", "with", "craft."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden isolate bg-bg"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
          <Image
            src={HERO_IMAGE}
            alt="Architectural construction detail"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent" />
      </div>

      {/* Vertical scan lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 120px)",
          }}
        />
      </div>

      {/* Top meta bar */}
      <motion.div
        style={{ opacity }}
        className="absolute top-20 md:top-28 inset-x-0 z-10 px-6 lg:px-10 flex items-center justify-between text-[10px] md:text-xs font-mono uppercase tracking-[0.22em] text-fg-dim"
      >
        <span>Est. 2015 · Philadelphia, PA</span>
        <span className="hidden md:inline">39.9526° N / 75.1652° W</span>
        <span>Lic. GC · Philly + NJ</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 lg:px-10 max-w-[1600px] mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3"
        >
          <span className="w-10 h-px bg-accent" />
          {"// "} Premier general contractor
        </motion.span>

        <h1 className="font-display text-[14vw] md:text-[11vw] lg:text-[10.5rem] leading-[0.9] tracking-tight max-w-[20ch]">
          {words.map((w, i) => (
            <span key={i} className="reveal-mask mr-[0.2em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + i * 0.08,
                }}
                className={`inline-block ${
                  w === "precision." || w === "craft."
                    ? "italic text-accent"
                    : ""
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="max-w-md text-base md:text-lg text-fg-dim leading-relaxed text-pretty"
          >
            Residential renovations, commercial build-outs and ground-up
            developments — delivered by a team that lives, builds and breathes
            Philadelphia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Start a project
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
            <a href="#work" className="btn-ghost">
              View work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-fg-dim"
      >
        <ArrowDown size={14} className="animate-bounce" />
        Scroll
      </motion.div>
    </section>
  );
}
