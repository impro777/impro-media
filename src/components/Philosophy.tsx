import { PHILOSOPHY } from "@/lib/constants";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FadeIn } from "./ui/FadeIn";

export function Philosophy() {
  return (
    <section className="bg-bg-base py-[var(--section-py)]">
      <Container>
        <SectionHeading label="How I Work" title="From Goals to Growth" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY.map((item, i) => (
            <FadeIn key={item.num} delay={i * 100} className="h-full">
              <div className="h-full rounded-[var(--radius)] border border-card-border bg-bg-card p-8 transition-all duration-300 hover:border-card-border-hover hover:bg-bg-card-hover">
                <p className="mb-4 text-[13px] font-bold tracking-[0.05em] text-teal/40">
                  {item.num}
                </p>
                <h3 className="mb-1.5 text-lg font-bold text-text-bright">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-text-main">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
