"use client";

import React from "react";

interface CotizarCTAProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  preselect?: {
    servicio?: string;
    tipo?: string;
  };
}

export default function CotizarCTA({
  children,
  variant = "primary",
  className = "",
  preselect,
}: CotizarCTAProps) {
  const baseStyles =
    "inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 text-sm font-semibold tracking-wide rounded-full font-sans transition-all duration-200 ease-in-out cursor-pointer active:scale-[0.98]";

  const variantStyles: Record<string, string> = {
    primary:
      "bg-brand-gold text-brand-charcoal hover:brightness-105 active:brightness-95 focus:ring-4 focus:ring-brand-gold/30 shadow-md",
    secondary:
      "bg-brand-charcoal text-brand-cream hover:bg-brand-charcoal/90 active:bg-brand-charcoal/95 focus:ring-4 focus:ring-brand-charcoal/30 shadow-md",
    outline:
      "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 active:bg-brand-gold/15 focus:ring-4 focus:ring-brand-gold/20",
  };

  const handleClick = () => {
    if (preselect) {
      window.dispatchEvent(
        new CustomEvent("cotizar-preselect", { detail: preselect })
      );
    }

    const target = document.getElementById("cotizar");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
