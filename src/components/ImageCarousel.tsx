"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  aspectRatio?: string; // e.g., "aspect-video", "aspect-[4/3]"
  className?: string;
}

export default function ImageCarousel({
  images,
  aspectRatio = "aspect-video",
  className = "",
}: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / clientWidth);
        setActiveIndex(index);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const next = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    scrollTo(nextIndex);
  };

  const prev = () => {
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    scrollTo(prevIndex);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={`relative group overflow-hidden rounded-[1.25rem] shadow-lg border border-brand-dark/10 bg-brand-dark ${className}`}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full ${aspectRatio}`}
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-full h-full shrink-0 snap-start snap-always relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Only if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Ver imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-dark/60 text-brand-beige border border-brand-beige/10 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-brand-orange hover:text-brand-dark cursor-pointer z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Ver imagen siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-dark/60 text-brand-beige border border-brand-beige/10 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-brand-orange hover:text-brand-dark cursor-pointer z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollTo(idx)}
                aria-label={`Ir a la imagen ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "bg-brand-orange w-4"
                    : "bg-brand-beige/50 hover:bg-brand-beige"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
