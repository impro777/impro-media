import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  arrow = false,
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-all duration-250 cursor-pointer";

  const variants = {
    primary:
      "bg-teal text-bg-base hover:bg-teal-hover hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(139,216,189,0.25)]",
    ghost:
      "bg-transparent text-text-main border border-card-border hover:border-card-border-hover hover:text-text-bright",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-9 py-4 text-[17px]",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow && <ArrowRight className="h-5 w-5 shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
      {arrow && <ArrowRight className="h-5 w-5 shrink-0" />}
    </button>
  );
}
