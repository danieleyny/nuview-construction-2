import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { FloatingCta } from "@/components/chrome/FloatingCta";
import { Cursor } from "@/components/primitives/Cursor";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import { PageTransition } from "@/components/chrome/PageTransition";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
  axes: ["opsz", "SOFT"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="grain min-h-screen bg-[var(--obsidian)] antialiased">
        <SmoothScroll />
        <Cursor />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-[var(--ember)] focus:px-4 focus:py-2 focus:text-[var(--obsidian)]"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
