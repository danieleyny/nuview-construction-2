"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const PROMISES = [
  {
    n: "01",
    title: "Innovative Design",
    body:
      "Modern, creative solutions to every project. Style where it serves function, restraint where it doesn't.",
  },
  {
    n: "02",
    title: "Efficient Management",
    body:
      "Dedicated PMs, milestone tracking and weekly reporting keep schedules honest and decisions fast.",
  },
  {
    n: "03",
    title: "Competitive Pricing",
    body:
      "Top-tier craftsmanship at transparent, line-item prices — no surprises, no change-order theater.",
  },
  {
    n: "04",
    title: "Satisfaction Guaranteed",
    body:
      "We don't leave until you're 100% happy. And even then, we stay accountable with a written warranty.",
  },
  {
    n: "05",
    title: "Exceptional Craftsmanship",
    body:
      "A senior crew of tradespeople who measure twice, think three moves ahead and take pride in the detail you don't see.",
  },
  {
    n: "06",
    title: "Local Expertise",
    body:
      "Philadelphia permits, historic row-home quirks, seasonal weatherization — we've done it, and we've done it right.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-40 px-6 lg:px-10 max-w-[1600px] mx-auto">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-start">
        <div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono mb-8">
            <span className="w-10 h-px bg-accent" />
            {"// "} The studio
          </div>

          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance mb-10">
            More than a building team.
            <br />
            <em className="text-accent">A Philadelphia partner.</em>
          </h2>

          <div className="space-y-6 text-fg-dim max-w-xl text-pretty leading-relaxed">
            <p>
              Nu-View Construction is a general contractor rooted in the heart
              of Philadelphia. We deliver residential renovations and
              commercial constructions with a focus on quality, transparency
              and timeliness — every single time.
            </p>
            <p>
              We are deeply familiar with the city&apos;s building codes,
              neighborhood character and seasonal demands. From historic row
              homes to modern retail fit-outs, we know how to navigate the
              permit process, address winterization, and design in ways that
              blend seamlessly with Philadelphia&apos;s architecture.
            </p>
            <p className="text-fg">
              Our reputation for reliability and craftsmanship keeps us at the
              top of local property owners&apos; lists.
            </p>
          </div>
        </div>

        {/* Image column with parallax + rotating stamp */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-line">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
                alt="Construction craftsman at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
          </div>

          {/* Rotating seal */}
          <motion.div
            style={{ rotate }}
            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-44 md:h-44 rounded-full bg-accent text-bg grid place-items-center"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path
                  id="circle"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontSize="14"
                fontFamily="var(--font-jetbrains), monospace"
                letterSpacing="3"
              >
                <textPath href="#circle">
                  NU-VIEW · CONSTRUCTION · PHILADELPHIA · EST 2015 ·
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Promises grid */}
      <div className="mt-24 md:mt-40">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end mb-14">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono">
            <span className="w-10 h-px bg-accent" />
            {"// "} What we promise
          </div>
          <p className="text-fg-dim text-pretty max-w-2xl">
            Six commitments we make on every job — residential or commercial,
            $30k bathroom or $3M ground-up build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-line">
          {PROMISES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="bg-bg p-8 md:p-10 group hover:bg-bg-elev transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-accent">{p.n}</span>
                <span className="w-8 h-8 rounded-full border border-line-bright group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all duration-500 grid place-items-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="font-display text-3xl mb-3">{p.title}</h3>
              <p className="text-sm text-fg-dim leading-relaxed text-pretty">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
