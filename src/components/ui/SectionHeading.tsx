export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-teal">
          {label}
        </p>
      )}
      <h2 className="text-[clamp(28px,3.5vw,36px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text-bright">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-[520px] text-lg leading-[1.7] text-text-main">
          {subtitle}
        </p>
      )}
    </div>
  );
}
