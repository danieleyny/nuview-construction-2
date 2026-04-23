"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Service = {
  n: string;
  title: string;
  blurb: string;
  points: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Residential Construction",
    blurb:
      "New builds, additions and structural work across Philadelphia row-homes, townhouses and historic properties.",
    points: ["Home additions", "Structural framing", "Roofing · siding · windows", "Interior finish work"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "02",
    title: "Kitchen Remodeling",
    blurb:
      "Layout rethinks, cabinetry, stone, lighting — kitchens that live as well as they look.",
    points: ["Layout redesign", "Custom cabinetry", "Countertop & backsplash", "Appliance integration"],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "03",
    title: "Bathroom Remodeling",
    blurb:
      "Spa-grade finishes, precision plumbing and millimeter-true tile work.",
    points: ["Custom vanities", "Shower & tub", "Tile + stone work", "Plumbing upgrades"],
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "04",
    title: "Commercial Construction",
    blurb:
      "Office, retail and hospitality build-outs delivered on tight timelines with code-first rigor.",
    points: ["Office build-outs", "Retail fit-outs", "Code compliance", "ADA improvements"],
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "05",
    title: "Interior Design",
    blurb:
      "In-house design translates intent into material, volume and light — before a hammer is raised.",
    points: ["Concept & mood", "Material palettes", "Lighting plans", "Furnishing direction"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "06",
    title: "Outdoor & Decks",
    blurb:
      "Rooftop decks, rear yards, pavilions — functional outdoor space built for Philly weather.",
    points: ["Deck construction", "Roof decks", "Hardscape", "Outdoor lighting"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Services() {
  const [active, setActive] = useState<number>(0);

  return (
    <section id="services" className="relative py-24 md:py-40 px-6 lg:px-10 max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end mb-16 md:mb-24">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono">
          <span className="w-10 h-px bg-accent" />
          {"// "} Capabilities
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-2xl text-balance">
            Every trade, <em className="text-accent">under one roof.</em>
          </h2>
          <p className="max-w-md text-fg-dim text-pretty">
            Design, permits, demolition, framing, finishes — coordinated by a
            single team that is accountable from first drawing to final punch
            list.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
        {/* List */}
        <div className="border-t border-line">
          {SERVICES.map((s, i) => (
            <motion.button
              key={s.n}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group w-full flex items-start gap-6 py-6 md:py-8 border-b border-line text-left transition-colors hover:bg-bg-elev/40"
            >
              <span className="font-mono text-xs text-fg-muted w-8 flex-shrink-0 pt-1">
                {s.n}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3
                    className={`font-display text-3xl md:text-5xl leading-none transition-colors ${
                      active === i ? "text-accent" : "group-hover:text-accent"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.4}
                    className={`transition-transform ${
                      active === i
                        ? "-translate-y-1 translate-x-1 text-accent"
                        : "text-fg-muted group-hover:-translate-y-1 group-hover:translate-x-1"
                    }`}
                  />
                </div>
                <p className="text-sm text-fg-dim max-w-xl">{s.blurb}</p>
                <motion.ul
                  initial={false}
                  animate={{
                    height: active === i ? "auto" : 0,
                    opacity: active === i ? 1 : 0,
                    marginTop: active === i ? 12 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden flex flex-wrap gap-x-6 gap-y-1 text-xs text-fg-dim font-mono uppercase tracking-[0.14em]"
                >
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full" /> {p}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Image preview (sticky) */}
        <div className="lg:sticky lg:top-28 order-first lg:order-last">
          <div className="relative aspect-[4/5] md:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-line">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.n}
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.05,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                  Capability · {SERVICES[active].n}
                </div>
                <div className="font-display text-2xl md:text-3xl">
                  {SERVICES[active].title}
                </div>
              </div>
              <div className="font-mono text-[10px] text-fg-dim">
                {String(active + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
