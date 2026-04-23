import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { neighborhoods } from "@/content/neighborhoods";
import { Container } from "@/components/primitives/Container";
import { Marquee } from "@/components/primitives/Marquee";

export function Footer() {
  return (
    <footer className="hairline-t relative w-full bg-[var(--charcoal)] pt-24 text-[var(--linen)]">
      <Marquee speed={45} className="hairline-b py-6">
        <MarqueeRow />
        <MarqueeRow />
      </Marquee>

      <Container className="pb-16 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tightest text-[var(--bone)]">
              Let's build<br />
              <span className="italic text-[var(--ember)]">something that lasts.</span>
            </div>
            <div className="mt-10 flex flex-col gap-1 font-mono text-sm text-[var(--ash)]">
              <a href={site.phoneHref} className="text-lg text-[var(--bone)] hover:text-[var(--ember)]" data-cursor="link">
                {site.phone}
              </a>
              <a href={site.emailHref} className="hover:text-[var(--ember)]" data-cursor="link">
                {site.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <FooterLabel>Services</FooterLabel>
            <ul className="space-y-1.5 text-[0.9rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-[var(--ember)]" data-cursor="link">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <FooterLabel>Company</FooterLabel>
            <ul className="space-y-1.5 text-[0.9rem]">
              <li><Link href="/work" className="hover:text-[var(--ember)]" data-cursor="link">Work</Link></li>
              <li><Link href="/about" className="hover:text-[var(--ember)]" data-cursor="link">About</Link></li>
              <li><Link href="/approach" className="hover:text-[var(--ember)]" data-cursor="link">Approach</Link></li>
              <li><Link href="/testimonials" className="hover:text-[var(--ember)]" data-cursor="link">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--ember)]" data-cursor="link">FAQ</Link></li>
              <li><Link href="/financing" className="hover:text-[var(--ember)]" data-cursor="link">Financing</Link></li>
              <li><Link href="/referral" className="hover:text-[var(--ember)]" data-cursor="link">Referrals</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <FooterLabel>Offices</FooterLabel>
            <div className="space-y-4 text-[0.9rem]">
              {site.addresses.map((a) => (
                <div key={a.zip}>
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ember)]">{a.label}</div>
                  <div className="mt-1 text-[var(--linen)]">{a.street}</div>
                  <div className="text-[var(--ash)]">
                    {a.city}, {a.state} {a.zip}
                  </div>
                </div>
              ))}
              <div>
                <FooterLabel>Hours</FooterLabel>
                <ul className="text-[0.82rem] text-[var(--ash)]">
                  {site.hours.map((h) => (
                    <li key={h.day}>
                      <span className="font-mono text-[var(--linen)]">{h.day}</span> · {h.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--bone)]/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-[0.78rem]">
            <div className="flex items-center gap-4 font-mono uppercase tracking-[0.18em] text-[var(--ash)]">
              <LiveTicker />
            </div>
            <div className="flex items-center gap-6 text-[var(--ash)]">
              <a href={site.social.instagram} className="hover:text-[var(--ember)]" target="_blank" rel="noreferrer noopener" data-cursor="link">Instagram</a>
              <a href={site.social.facebook} className="hover:text-[var(--ember)]" target="_blank" rel="noreferrer noopener" data-cursor="link">Facebook</a>
              <a href={site.social.google} className="hover:text-[var(--ember)]" target="_blank" rel="noreferrer noopener" data-cursor="link">Google</a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ash)]">
            <div>© {new Date().getFullYear()} NuView Constructions. Philadelphia, PA.</div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-[var(--ember)]">Privacy</Link>
              <Link href="/referral" className="hover:text-[var(--ember)]">Referrals</Link>
              <Link href="/service-areas" className="hover:text-[var(--ember)]">
                {neighborhoods.length}+ neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ash)]">
      {children}
    </div>
  );
}

function LiveTicker() {
  return (
    <>
      <span className="size-1.5 animate-pulse rounded-full bg-[var(--ember)]" />
      <span>On-site: {site.live.onsite}</span>
      <span className="text-[var(--bone)]/20">·</span>
      <span>This week: {site.live.weekStarts} new starts</span>
      <span className="text-[var(--bone)]/20">·</span>
      <span>Next availability: {site.live.nextAvailability}</span>
    </>
  );
}

function MarqueeRow() {
  const items = ["EST. 2015", "102+ REVIEWS", "5.0 ★", "RESIDENTIAL", "COMMERCIAL", "PHILADELPHIA"];
  return (
    <div className="flex items-center gap-12 px-6 font-display text-[2.2rem] tracking-tight text-[var(--bone)]">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-12">
          <span>{t}</span>
          <span className="size-1.5 rounded-full bg-[var(--ember)]" />
        </span>
      ))}
    </div>
  );
}
