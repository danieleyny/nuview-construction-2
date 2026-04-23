"use client";

const WORDS = [
  "Residential",
  "Commercial",
  "Kitchens",
  "Bathrooms",
  "Additions",
  "Interiors",
  "Renovation",
  "Ground-Up",
  "Historic",
  "Row-Homes",
  "Build-Outs",
  "Decks",
];

export default function Marquee() {
  return (
    <section className="relative border-y border-line py-6 md:py-8 overflow-hidden bg-bg-elev/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...WORDS, ...WORDS, ...WORDS].map((w, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 px-5 font-display text-4xl md:text-6xl leading-none"
          >
            <span className={i % 2 === 1 ? "italic text-accent" : ""}>{w}</span>
            <span className="text-accent/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
