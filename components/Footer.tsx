"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SOCIAL = [
  { label: "Instagram", handle: "@nuview_construction_pa_", href: "https://instagram.com/nuview_construction_pa_" },
  { label: "TikTok", handle: "@nuviewconstructions", href: "https://tiktok.com/@nuviewconstructions" },
  { label: "YouTube", handle: "@NuviewConstructionsPhl", href: "https://youtube.com/@NuviewConstructionsPhl" },
  { label: "Facebook", handle: "Nu-View Construction", href: "https://facebook.com" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <footer className="relative bg-bg overflow-hidden">
      {/* Massive display word */}
      <div ref={ref} className="px-6 lg:px-10 pt-16 md:pt-28 pb-8 max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim">
            // Philadelphia · PA
          </div>
          <a
            href="#top"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim hover:text-accent transition-colors"
          >
            ↑ Back to top
          </a>
        </div>

        <motion.h3
          initial={{ y: 80, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[22vw] md:text-[18vw] leading-[0.82] tracking-tighter"
        >
          Nu-View<span className="text-accent">.</span>
        </motion.h3>
      </div>

      <div className="hairline" />

      {/* Bottom info */}
      <div className="px-6 lg:px-10 py-12 max-w-[1600px] mx-auto grid md:grid-cols-4 gap-10">
        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Contact
          </div>
          <a href="tel:+12672034880" className="block hover:text-accent transition-colors">(267) 203-4880</a>
          <a
            href="mailto:info@nuviewconstructions.com"
            className="block hover:text-accent transition-colors text-sm"
          >
            info@nuviewconstructions.com
          </a>
        </div>

        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Offices
          </div>
          <div className="text-sm text-fg-dim">1401 Spruce St, PHL 19102</div>
          <div className="text-sm text-fg-dim">2006 Chestnut St, PHL 19103</div>
        </div>

        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Follow
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-fg-dim hover:text-accent transition-colors"
              >
                {s.label} — {s.handle}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Licensing
          </div>
          <div className="text-sm text-fg-dim">Licensed GC — Philadelphia + New Jersey</div>
          <div className="text-sm text-fg-dim">Fully insured · Bonded</div>
        </div>
      </div>

      <div className="hairline" />

      <div className="px-6 lg:px-10 py-6 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-fg-muted">
        <span>© {new Date().getFullYear()} Nu-View Construction LLC</span>
        <span>Designed + built in Philadelphia</span>
      </div>
    </footer>
  );
}
