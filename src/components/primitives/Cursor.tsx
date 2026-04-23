"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const sx = useSpring(x, { damping: 30, stiffness: 500, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 500, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const closest = target.closest("[data-cursor]") as HTMLElement | null;
      if (closest) {
        const v = closest.dataset.cursor as "link" | "view" | undefined;
        setVariant(v ?? "default");
      } else {
        setVariant("default");
      }
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y, reduce]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: variant === "view" ? 4 : variant === "link" ? 2 : 1,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="size-3 rounded-full bg-[var(--bone)]" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{
          x,
          y,
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--bone)]/25"
          animate={{
            width: variant === "view" ? 96 : 36,
            height: variant === "view" ? 96 : 36,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {variant === "view" && (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--bone)]">
                View
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
