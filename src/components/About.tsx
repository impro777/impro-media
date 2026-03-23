import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FadeIn } from "./ui/FadeIn";

export function About() {
  return (
    <section id="about" className="bg-bg-section-b py-[var(--section-py)]">
      <Container>
        <SectionHeading label="About" title="How I Work" />

        <div className="mt-12 max-w-3xl space-y-6">
          <FadeIn>
            <p className="text-xl font-semibold leading-[1.8] text-text-bright">
              I deliberately limit my client roster so every account gets
              senior-level attention.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-[17px] leading-[1.8] text-text-main">
              With 15+ years managing millions in ad spend across fintech, I
              bring deep vertical expertise to every campaign. My approach is
              data-backed: I build systems and automation that compound results
              over time.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-[17px] leading-[1.8] text-text-main">
              I use AI extensively - for uncovering optimization patterns humans
              miss, classifying and segmenting keywords at scale, and generating
              ad copy in any language. My proprietary workflows let me manage
              global campaigns without language barriers. Your business data
              stays private - AI is trained on strategy and market knowledge, not
              your account information.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-[17px] leading-[1.8] text-text-main">
              You work directly with me. No account managers, no juniors, no
              handoffs. When you call, I pick up. When something breaks, I fix
              it.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
