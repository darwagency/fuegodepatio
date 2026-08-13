"use client";

import { useState } from "react";
import Image from "next/image";
import { galeriaTrabajo, mediaSrc } from "@/data/media";

type Category = "fuego-cordero" | "cocina-piqueos" | "buffet-cocteleria" | "matrimonios-eventos";

const categories: { key: Category; label: string }[] = [
  { key: "fuego-cordero", label: "Fuego y cordero" },
  { key: "cocina-piqueos", label: "Cocina y piqueos" },
  { key: "buffet-cocteleria", label: "Buffet y coctelería" },
  { key: "matrimonios-eventos", label: "Matrimonios y eventos" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("fuego-cordero");
  const items = galeriaTrabajo.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="section-pad bg-brand-cream border-t border-brand-charcoal/10">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Galería</p>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-charcoal sm:text-3xl">
              Galería de eventos
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-brand-charcoal/75">
            Desliza para ver cada colección.
          </p>
        </div>

        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" aria-label="Colecciones de la galería">
          {categories.map((category) => {
            const isActive = activeCategory === category.key;

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                aria-pressed={isActive}
                className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-brand-charcoal text-brand-gold"
                    : "bg-brand-charcoal/5 text-brand-charcoal hover:bg-brand-charcoal/10"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-5">
          {items.map((item) => (
            <figure
              key={item.src}
              className="relative aspect-[4/3] w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/5 md:w-auto"
            >
              <Image
                src={mediaSrc(item.src)}
                alt={item.alt}
                fill
                sizes="(max-width: 767px) 78vw, (max-width: 1023px) 33vw, 20vw"
                className="object-cover"
              />
              {item.title && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/85 to-transparent px-3 pb-3 pt-8 text-xs font-semibold text-brand-cream">
                  {item.title}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
