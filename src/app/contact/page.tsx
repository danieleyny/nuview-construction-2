import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with NuView Constructions. Call, email, or request a consultation.",
};

export default function ContactPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container>
          <Eyebrow code="NV–C">Contact</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] tracking-tightest text-[var(--bone)]">
            Let's <span className="italic text-[var(--ember)]">talk.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-[var(--linen)]">
            Tell us about your project. We'll be in touch within two business days to schedule a
            free on-site consultation.
          </p>
        </Container>
      </header>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <Eyebrow>Direct</Eyebrow>
              <div className="mt-8 space-y-1 font-mono text-[0.85rem]">
                <div className="text-[var(--ash)] uppercase tracking-[0.18em] text-[0.7rem]">Call</div>
                <a href={site.phoneHref} className="block font-display text-[1.8rem] leading-tight text-[var(--bone)] hover:text-[var(--ember)]" data-cursor="link">
                  {site.phone}
                </a>
              </div>
              <div className="mt-8 space-y-1">
                <div className="font-mono text-[var(--ash)] uppercase tracking-[0.18em] text-[0.7rem]">Email</div>
                <a href={site.emailHref} className="block font-display text-[1.25rem] leading-tight text-[var(--bone)] hover:text-[var(--ember)] break-all" data-cursor="link">
                  {site.email}
                </a>
              </div>

              <div className="mt-12 grid gap-8">
                {site.addresses.map((a) => (
                  <div key={a.zip} className="border-t border-[var(--bone)]/10 pt-5">
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--ember)]">
                      {a.label}
                    </div>
                    <div className="mt-3 text-[var(--bone)]">{a.street}</div>
                    <div className="text-[var(--ash)]">{a.city}, {a.state} {a.zip}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-[var(--bone)]/10 pt-5">
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--ember)]">Hours</div>
                <ul className="mt-3 space-y-1 text-[0.95rem]">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span className="font-mono text-[var(--linen)]">{h.day}</span>
                      <span className="text-[var(--ash)]">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
