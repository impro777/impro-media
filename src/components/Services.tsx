import { SERVICES } from "@/lib/constants";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FadeIn } from "./ui/FadeIn";
import { GoogleG } from "./icons/GoogleG";
import { BingB } from "./icons/BingB";

const CUSTOM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Google Ads": GoogleG,
  "Microsoft Ads": BingB,
};

export function Services() {
  return (
    <section id="services" className="bg-bg-section-a py-[var(--section-py)]">
      <Container>
        <SectionHeading label="Services" title="What I Do" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const CustomIcon = CUSTOM_ICONS[service.title];
            const LucideIcon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 80}>
                <div className="group h-full rounded-[var(--radius)] border border-card-border bg-bg-card p-8 transition-all duration-300 hover:-translate-y-[3px] hover:border-card-border-hover hover:bg-bg-card-hover hover:shadow-[var(--shadow-card-hover)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] border border-card-border bg-teal-subtle">
                    {CustomIcon ? (
                      <CustomIcon className="h-6 w-6 text-teal" />
                    ) : (
                      <LucideIcon className="h-6 w-6 text-teal" />
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-text-bright">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-text-main">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
