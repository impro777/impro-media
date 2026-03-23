import { Container } from "./ui/Container";
import { FadeIn } from "./ui/FadeIn";

const metrics = [
  { value: "15+ Years", label: "Hands-on experience since 2010" },
  { value: "7+ Brands", label: "FinTech clients across the globe" },
  { value: "8+ Countries", label: "Europe, LATAM, Africa" },
  { value: "€30M+", label: "Ad spend invested successfully" },
];

export function Metrics() {
  return (
    <section className="bg-bg-base py-14">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeIn key={m.value} delay={i * 100}>
              <div className="flex h-full flex-col justify-center rounded-[var(--radius)] border border-card-border bg-bg-card px-6 py-7 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.04em] text-teal">
                  {m.value}
                </p>
                <p className="mt-0.5 text-sm text-text-dim">{m.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
