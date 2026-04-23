import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="relative pt-40 md:pt-48">
        <Container size="md">
          <Eyebrow code="NV–LEG">Privacy</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tightest text-[var(--bone)]">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--ash)]">
            Last updated — {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
          </p>
        </Container>
      </header>

      <section className="py-20 md:py-24">
        <Container size="md">
          <div className="space-y-8 text-[1rem] leading-[1.7] text-[var(--linen)]">
            <p>
              {site.name} ("we," "us") respects your privacy. This policy explains what information we collect on this
              website, how we use it, and your choices.
            </p>

            <Section title="What we collect">
              <ul className="list-disc pl-6">
                <li>Information you submit through contact forms (name, email, phone, project details).</li>
                <li>Basic analytics: pages viewed, device type, referring URL.</li>
              </ul>
            </Section>
            <Section title="How we use it">
              <p>To respond to inquiries, schedule consultations, improve the website, and follow up on projects.</p>
            </Section>
            <Section title="Sharing">
              <p>We don't sell your information. We only share with tools we use to operate the site (email delivery, hosting) under their own privacy terms.</p>
            </Section>
            <Section title="Your choices">
              <p>Email us at <a href={site.emailHref} className="text-[var(--ember)] hover:underline">{site.email}</a> to access, correct, or delete information we hold about you.</p>
            </Section>
            <Section title="Contact">
              <p>{site.name} · {site.addresses[0].full} · {site.phone}</p>
            </Section>
          </div>
        </Container>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-[1.5rem] leading-tight text-[var(--bone)]">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
