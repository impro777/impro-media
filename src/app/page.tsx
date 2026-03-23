import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <About />
        <Philosophy />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
