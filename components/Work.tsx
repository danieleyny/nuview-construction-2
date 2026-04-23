"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  title: string;
  location: string;
  tag: string;
  year: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "Spruce Street Townhouse",
    location: "Center City, PA",
    tag: "Full Gut Renovation",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Chestnut Commercial",
    location: "Rittenhouse, PA",
    tag: "Retail Build-Out",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Fishtown Row",
    location: "Fishtown, PA",
    tag: "Row-Home + Addition",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Roof Deck No. 18",
    location: "Northern Liberties, PA",
    tag: "Outdoor · Rooftop",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Gallery Loft",
    location: "Old City, PA",
    tag: "Kitchen + Interior",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Haddonfield Residence",
    location: "Haddonfield, NJ",
    tag: "Addition + Full Remodel",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
  },
];

export default function Work() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((PROJECTS.length - 1) / PROJECTS.length) * 100}%`]
  );

  return (
    <section id="work" ref={wrapRef} className="relative" style={{ height: `${PROJECTS.length * 80}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="pt-24 md:pt-28 px-6 lg:px-10 max-w-[1600px] mx-auto w-full flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono mb-4">
              <span className="w-10 h-px bg-accent" />
              {"// "} Selected work
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-2xl">
              Built across <em className="text-accent">Philadelphia</em> + NJ.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-fg-dim font-mono">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Scroll to navigate
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-14 overflow-hidden">
          <motion.div style={{ x }} className="flex h-full">
            {PROJECTS.map((p, i) => (
              <div
                key={p.title}
                className="relative w-screen h-full flex-shrink-0 flex items-center justify-center px-6 md:px-20"
              >
                <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 80vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-fg-dim">
                    {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                  </div>
                  <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    {p.year}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                        {p.tag}
                      </div>
                      <h3 className="font-display text-3xl md:text-5xl leading-none">
                        {p.title}
                      </h3>
                      <div className="text-xs md:text-sm text-fg-dim mt-2">{p.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
