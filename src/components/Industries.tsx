import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FadeIn } from "./ui/FadeIn";

const CLIENT_LOGOS = [
  { name: "Planet42", src: "/images/clients/planet42.png", width: 110, imgW: 256, imgH: 44 },
  { name: "CreditPrime", src: "/images/clients/creditprime.png", width: 130, imgW: 260, imgH: 65 },
  { name: "Moneza", src: "/images/clients/moneza.png", width: 100, imgW: 260, imgH: 86 },
  { name: "Ezaem", src: "/images/clients/ezaem.png", width: 100, imgW: 260, imgH: 46 },
  { name: "NetCredit", src: "/images/clients/netcredit.png", width: 110, imgW: 260, imgH: 42 },
  { name: "Zing", src: "/images/clients/zing.png", width: 80, imgW: 260, imgH: 121 },
  { name: "TWINO", src: "/images/clients/twino.png", width: 90, imgW: 260, imgH: 56 },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="bg-bg-section-a py-[var(--section-py)]"
    >
      <Container>
        <SectionHeading
          label="FinTech Expertise"
          title="Built for the Complexity of Financial Services"
          subtitle="Online lending, credit products, neobanks, and investment platforms demand more than lead volume. I build acquisition strategies around lead quality, risk metrics, and compliance - with attribution models that match how your business actually works."
        />

        <FadeIn>
          <div className="mt-12">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.08em] text-text-dim">
              Brands I&apos;ve worked with
            </p>
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {CLIENT_LOGOS.map((client) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={client.name}
                  src={client.src}
                  alt={client.name}
                  width={client.imgW}
                  height={client.imgH}
                  style={{ maxWidth: client.width }}
                  className="h-auto justify-self-center brightness-0 invert opacity-50 transition-opacity hover:opacity-80"
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
