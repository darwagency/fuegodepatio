"use client";

import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode;
  ariaLabel: string;
  gridColsClassName: string; // e.g., "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4"
}

export default function Carousel({ children, ariaLabel, gridColsClassName }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowPrev(scrollLeft > 10);
      setShowNext(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full" aria-label={ariaLabel} role="region">
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className={`flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-4 px-4 scroll-smooth md:mx-0 md:px-0 md:pb-0 md:grid ${gridColsClassName} md:gap-6 md:overflow-visible`}
        onScroll={checkScroll}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          const typedChild = child as React.ReactElement<{ className?: string }>;
          return React.cloneElement(typedChild, {
            className: `${typedChild.props.className || ""} snap-start shrink-0 w-[85%] sm:w-[65%] md:w-full md:shrink-0 mr-4 md:mr-0`,
          });
        })}
      </div>

      {/* Navigation Buttons - Mobile/Tablet only (hidden on desktop) */}
      <div className="flex md:hidden items-center justify-end gap-2 mt-4 px-4">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!showPrev}
          aria-label="Ver elementos anteriores"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-dark/20 text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-dark/5 active:bg-brand-dark/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!showNext}
          aria-label="Ver más elementos"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-dark/20 text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-dark/5 active:bg-brand-dark/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
