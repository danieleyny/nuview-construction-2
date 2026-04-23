"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export function BeforeAfter({ before, after, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const clip = useTransform(x, (v) => `inset(0 ${100 - v}% 0 0)`);
  const [dragging, setDragging] = useState(false);

  function onMove(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
    x.set(pct);
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-[var(--radius-md)] bg-[var(--graphite)]"
      onPointerDown={(e) => {
        setDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
        onMove(e.clientX);
      }}
      onPointerMove={(e) => dragging && onMove(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      data-cursor="link"
    >
      <Image src={after} alt={`${alt} — after`} fill sizes="100vw" className="object-cover" />
      <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath: clip }}>
        <Image src={before} alt={`${alt} — before`} fill sizes="100vw" className="object-cover" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-[var(--ember)]"
        style={{ left: useTransform(x, (v) => `calc(${v}% - 1px)`) }}
      >
        <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[var(--ember)] bg-[var(--obsidian)]">
          <div className="flex items-center text-[var(--ember)]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L1 7L5 12M9 2L13 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute left-4 top-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--bone)] mix-blend-difference">
        Before
      </div>
      <div className="pointer-events-none absolute right-4 top-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--bone)] mix-blend-difference">
        After
      </div>
    </div>
  );
}
