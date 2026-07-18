import React from "react";

interface ImagePlaceholderProps {
  description: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-video", "aspect-[4/3]", "aspect-[16/10]"
}

export default function ImagePlaceholder({
  description,
  className = "",
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder relative w-full ${aspectRatio} flex flex-col items-center justify-center p-4 bg-brand-beige border border-dashed border-brand-orange/55 rounded-[1.25rem] overflow-hidden text-center group hover:border-brand-orange transition-colors duration-300 ${className}`}
      aria-label={`Espacio reservado para imagen: ${description}`}
    >
      <div className="flex flex-col items-center max-w-md gap-2 pointer-events-none">
        <svg
          className="w-8 h-8 text-brand-orange/60 group-hover:text-brand-orange transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-[10px] uppercase tracking-wider font-bold text-brand-orange/80">
          PLACEHOLDER DE IMAGEN
        </span>
        <p className="text-xs text-brand-dark/65 font-medium px-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
