import Image from "next/image";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-bg-hero to-bg-base pt-[156px] pb-[100px]">
      {/* Subtle teal radial glow */}
      <div className="pointer-events-none absolute -top-[30%] -right-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(139,216,189,0.06)_0%,transparent_60%)]" />

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Text */}
          <div>
            <h1 className="mb-5 text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text-bright">
              Performance Marketing
              <br />
              for FinTech
            </h1>
            <p className="mb-9 max-w-[520px] text-[clamp(16px,1.8vw,20px)] leading-[1.7] text-text-main">
              Solo specialist with 15+ years of hands-on experience. Fewer
              clients, deeper focus, better results.
            </p>
            <Button href="#contact" size="lg" arrow>
              Book a Free Strategy Call
            </Button>
          </div>

          {/* Photo — clean, no badge overlay */}
          <div className="flex justify-center">
            <Image
              src="/images/founder.png"
              alt="Aleksandrs Jelesins - IM Pro founder"
              width={300}
              height={300}
              className="h-[300px] w-[300px] rounded-full border-2 border-teal/20 object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
