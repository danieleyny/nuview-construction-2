"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => setMenu(false), [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 120 && y > last) setHidden(true);
      else setHidden(false);
      last = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden && !menu ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors",
          scrolled || menu ? "bg-[var(--obsidian)]/85 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className={cn("hairline-b", !scrolled && !menu && "border-transparent")}>
          <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-24">
            <Link href="/" className="flex items-center gap-2.5" data-cursor="link" aria-label="NuView home">
              <Logomark />
              <span className="hidden font-display text-[1.05rem] tracking-tight text-[var(--bone)] sm:block">
                NuView
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  data-cursor="link"
                  className={cn(
                    "group relative font-sans text-[0.88rem] text-[var(--linen)] transition-colors hover:text-[var(--bone)]",
                    pathname.startsWith(n.href) && "text-[var(--bone)]"
                  )}
                >
                  {n.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-[var(--ember)] transition-all duration-300 ease-out",
                      pathname.startsWith(n.href) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                data-cursor="link"
                className="hidden h-9 items-center rounded-[var(--radius-md)] bg-[var(--ember)] px-4 text-[0.82rem] font-medium text-[var(--obsidian)] transition-colors hover:bg-[var(--ember-hot)] md:inline-flex"
              >
                Start a project
              </Link>
              <button
                onClick={() => setMenu((m) => !m)}
                className="flex size-10 items-center justify-center rounded-[var(--radius-md)] text-[var(--bone)] md:hidden"
                aria-label={menu ? "Close menu" : "Open menu"}
                data-cursor="link"
              >
                {menu ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--obsidian)] pt-16 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pt-8">
              {nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={n.href}
                    className="block py-3 font-display text-4xl tracking-tightest text-[var(--bone)]"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--ash)]">
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={site.emailHref}>{site.email}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logomark() {
  return (
    <svg viewBox="0 0 40 40" className="size-7" aria-hidden>
      <rect x="2" y="2" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.3" fill="none" className="text-[var(--bone)]/60" />
      <path
        d="M10 30V12L22 24V12M30 12V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        className="text-[var(--ember)]"
      />
    </svg>
  );
}
