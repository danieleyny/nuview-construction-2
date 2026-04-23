import { Marquee } from "@/components/primitives/Marquee";

export function HomeMarquee() {
  const items = ["EST. 2015", "102+ REVIEWS", "5.0 ★", "RESIDENTIAL", "COMMERCIAL", "PHILADELPHIA"];
  return (
    <div className="hairline-y relative overflow-hidden border-y border-[var(--bone)]/10 bg-[var(--charcoal)] py-6">
      <Marquee speed={35}>
        <Row items={items} />
        <Row items={items} />
      </Marquee>
    </div>
  );
}

function Row({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-12 px-6 font-display text-[clamp(2rem,4vw,3.2rem)] tracking-tight text-[var(--bone)]">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-12">
          <span>{t}</span>
          <span className="size-1.5 rounded-full bg-[var(--ember)]" />
        </span>
      ))}
    </div>
  );
}
