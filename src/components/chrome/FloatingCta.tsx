"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = window.scrollY / Math.max(h, 1);
      setShow(pct > 0.4);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/contact"
            data-cursor="link"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--ember)] px-5 py-3 font-sans text-[0.85rem] font-medium text-[var(--obsidian)] shadow-[0_8px_32px_-8px_rgba(200,115,43,0.5)] transition-colors hover:bg-[var(--ember-hot)]"
          >
            Schedule consultation
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
