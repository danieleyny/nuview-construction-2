import { Hero } from "@/components/home/Hero";
import { HomeMarquee } from "@/components/home/Marquee";
import { Stats } from "@/components/home/Stats";
import { Services } from "@/components/home/Services";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { CtaBand } from "@/components/home/CtaBand";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <HomeMarquee />
      <Stats />
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <CtaBand />
    </>
  );
}
