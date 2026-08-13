import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  target,
  rel,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 text-sm font-semibold tracking-wide rounded-full font-sans transition-all duration-200 ease-in-out cursor-pointer active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-brand-gold text-brand-charcoal hover:brightness-105 active:brightness-95 focus:ring-4 focus:ring-brand-gold/30 disabled:opacity-50 disabled:cursor-not-allowed shadow-md",
    secondary:
      "bg-brand-charcoal text-brand-cream hover:bg-brand-charcoal/90 active:bg-brand-charcoal/95 focus:ring-4 focus:ring-brand-charcoal/30 disabled:opacity-50 disabled:cursor-not-allowed shadow-md",
    outline:
      "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 active:bg-brand-gold/15 focus:ring-4 focus:ring-brand-gold/20 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
