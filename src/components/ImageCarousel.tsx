"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { mediaSrc } from "@/data/media";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  ariaLabel?: string;
  aspectRatio?: string;
  className?: string;
  sizes?: string;
}

export default function ImageCarousel({
  images,
  ariaLabel = "Galería de imágenes",
  aspectRatio = "aspect-video",
  className = "",
  sizes = "(max-width: 767px) 100vw, 50vw",
}: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    const carousel = scrollRef.current;

    if (!carousel || carousel.clientWidth === 0) return;

    setActiveIndex(Math.round(carousel.scrollLeft / carousel.clientWidth));
  };

  const goTo = (index: number) => {
    const carousel = scrollRef.current;

    if (!carousel) return;

    carousel.scrollTo({
      left: index * carousel.clientWidth,
      behavior: "smooth",
    });
  };

  const previous = () => goTo((activeIndex - 1 + images.length) % images.length);
  const next = () => goTo((activeIndex + 1) % images.length);

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carrusel"
      className={`relative group overflow-hidden rounded-[1.25rem] border border-brand-charcoal/10 bg-brand-charcoal shadow-lg ${className}`}
    >
      <div
        ref={scrollRef}
        className={`flex w-full snap-x snap-mandatory overflow-x-auto no-scrollbar ${aspectRatio}`}
        onScroll={updateActiveIndex}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            className="relative h-full w-full shrink-0 snap-start snap-always"
            aria-hidden={activeIndex !== index}
          >
            <Image
            src={mediaSrc(image.src)}
              alt={image.alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label="Ver imagen anterior"
            className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-cream/20 bg-brand-charcoal/75 text-brand-cream opacity-100 transition-colors hover:bg-brand-gold hover:text-brand-charcoal md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100"
          >
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m15 19-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Ver imagen siguiente"
            className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-cream/20 bg-brand-charcoal/75 text-brand-cream opacity-100 transition-colors hover:bg-brand-gold hover:text-brand-charcoal md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100"
          >
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m9 5 7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center rounded-full bg-brand-charcoal/60 px-1">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a la imagen ${index + 1} de ${images.length}`}
                aria-current={activeIndex === index}
                className="flex size-8 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    activeIndex === index ? "w-4 bg-brand-gold" : "w-1.5 bg-brand-cream/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
