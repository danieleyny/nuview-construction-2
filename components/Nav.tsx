"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/New_York",
        hour12: false,
      });
      setTime(fmt.format(now));
    };
    update();
    const i = setInterval(update, 1000 * 30);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-bg/70 border-b border-line/60"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-3 group">
            <span className="relative w-8 h-8 grid place-items-center">
              <span className="absolute inset-0 rounded-full border border-accent/60 group-hover:rotate-180 transition-transform duration-700" />
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            </span>
            <span className="font-display text-xl tracking-tight">
              Nu-View<span className="text-accent">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-xs uppercase tracking-[0.18em] text-fg-dim hover:text-fg transition-colors relative group"
              >
                <span className="font-mono text-[10px] text-accent/60 mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
                <span className="absolute left-4 right-4 bottom-1 h-px bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-fg-dim font-mono">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              PHL · {time}
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex btn-ghost !py-2 !px-4 !text-[10px]"
            >
              Start a project
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 grid place-items-center border border-line rounded-full"
              aria-label="Menu"
            >
              <span className="flex flex-col gap-1">
                <span className="w-4 h-px bg-fg" />
                <span className="w-4 h-px bg-fg" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-bg md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-line">
              <span className="font-display text-xl">
                Nu-View<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-widest"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                  className="flex items-baseline gap-4 py-4 border-b border-line/60"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-5xl">{l.label}</span>
                </motion.a>
              ))}
            </nav>
            <div className="px-6 py-8 text-xs text-fg-dim font-mono">
              (267) 203-4880 · info@nuviewconstructions.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
