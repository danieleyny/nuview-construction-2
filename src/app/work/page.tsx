"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { cn } from "@/lib/cn";

const filters = ["All", "Residential", "Kitchen", "Bathroom", "Commercial", "Outdoor", "Additions"] as const;

export default function WorkPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–W">Work</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(4rem,14vw,14rem)] leading-[0.88] tracking-tightest text-[var(--bone)]">
            Work.
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            Six recent projects. Each selected for what it shows about how we work — not just
            what it shows about the room.
          </p>
        </Container>
      </header>

      <section className="pt-20 pb-32">
        <Container>
          <div className="mb-12 flex flex-wrap gap-2 border-b border-[var(--bone)]/10 pb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                data-cursor="link"
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] transition-colors",
                  active === f
                    ? "border-[var(--ember)] bg-[var(--ember)]/10 text-[var(--ember)]"
                    : "border-[var(--bone)]/15 text-[var(--ash)] hover:border-[var(--bone)]/40 hover:text-[var(--bone)]"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
                className={cn(i % 5 === 0 && "lg:col-span-2 lg:row-span-1")}
              >
                <Link href={`/work/${p.slug}`} data-cursor="view" className="group block">
                  <div className={cn(
                    "relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]",
                    i % 5 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                  )}>
                    <Image
                      src={p.thumb}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <CornerMarks />
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-[clamp(1.4rem,1.8vw,1.75rem)] leading-tight tracking-tightest text-[var(--bone)] transition-colors group-hover:text-[var(--ember)]">
                        {p.name}
                      </h3>
                      <div className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ash)]">
                        {p.type} · {p.neighborhood} · {p.completed}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function CornerMarks() {
  return (
    <>
      {["tl", "tr", "bl", "br"].map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={cn(
            "absolute size-4 border-[var(--ember)] opacity-0 transition-all duration-500 ease-out group-hover:opacity-100",
            pos === "tl" && "left-4 top-4 border-l border-t",
            pos === "tr" && "right-4 top-4 border-r border-t",
            pos === "bl" && "left-4 bottom-4 border-l border-b",
            pos === "br" && "right-4 bottom-4 border-r border-b"
          )}
        />
      ))}
    </>
  );
}
