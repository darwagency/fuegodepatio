import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 text-sm font-bold tracking-[-0.01em] rounded-full font-display transition-all duration-200 ease-in-out cursor-pointer active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-brand-orange text-brand-dark hover:bg-brand-orange/90 active:bg-brand-orange/95 focus:ring-4 focus:ring-brand-orange/30 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-brand-dark text-brand-beige hover:bg-brand-dark/90 active:bg-brand-dark/95 focus:ring-4 focus:ring-brand-dark/30 disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 active:bg-brand-orange/15 focus:ring-4 focus:ring-brand-orange/20 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
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
