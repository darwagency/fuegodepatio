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
  /* Mirror Button component styling exactly */
  const baseStyles =
    "inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 text-sm font-bold tracking-[-0.01em] rounded-full font-display transition-all duration-200 ease-in-out cursor-pointer active:scale-[0.98]";

  const variantStyles: Record<string, string> = {
    primary:
      "bg-brand-orange text-brand-dark hover:bg-brand-orange/90 active:bg-brand-orange/95 focus:ring-4 focus:ring-brand-orange/30",
    secondary:
      "bg-brand-dark text-brand-beige hover:bg-brand-dark/90 active:bg-brand-dark/95 focus:ring-4 focus:ring-brand-dark/30",
    outline:
      "bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange/10 active:bg-brand-orange/15 focus:ring-4 focus:ring-brand-orange/20",
  };

  const handleClick = () => {
    /* Dispatch preselection event for CotizarForm to pick up */
    if (preselect) {
      window.dispatchEvent(
        new CustomEvent("cotizar-preselect", { detail: preselect })
      );
    }

    /* Smooth-scroll to the quotation form */
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
