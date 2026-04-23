import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import Manifesto from "@/components/Manifesto";
import Process from "@/components/Process";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Metrics />
      <Work />
      <Services />
      <Manifesto />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
