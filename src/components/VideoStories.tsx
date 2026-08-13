"use client";

import { useEffect, useRef, useState } from "react";
import type { VideoItem } from "@/data/media";

interface VideoStoriesProps {
  videos: VideoItem[];
}

export default function VideoStories({ videos }: VideoStoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index !== activeIndex || prefersReducedMotion) {
        video.pause();
        return;
      }

      video.muted = !soundOn;
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    });
  }, [activeIndex, soundOn, prefersReducedMotion]);

  const activateVideo = (index: number) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const togglePlayback = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (index !== activeIndex) {
      activateVideo(index);
      return;
    }

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    const nextSoundState = !soundOn;
    video.muted = !nextSoundState;
    setSoundOn(nextSoundState);
    if (video.paused) video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  const move = (direction: -1 | 1) => {
    const nextIndex = (activeIndex + direction + videos.length) % videos.length;
    activateVideo(nextIndex);
  };

  return (
    <section id="reel" className="overflow-hidden border-b border-brand-cream/10 bg-brand-charcoal py-10 text-brand-cream sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Fuego en movimiento</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Mira cómo se vive el evento</h2>
            <p className="text-sm leading-relaxed text-brand-cream/75 sm:text-base">
              Videos reales de montajes, parrilla y celebraciones de Fuego de Patio.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Ver video anterior"
              className="flex size-11 items-center justify-center rounded-full border border-brand-cream/25 text-brand-cream transition-colors hover:bg-brand-cream/10"
            >
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Ver video siguiente"
              className="flex size-11 items-center justify-center rounded-full border border-brand-cream/25 text-brand-cream transition-colors hover:bg-brand-cream/10"
            >
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="no-scrollbar -mx-4 mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          {videos.map((video, index) => {
            const isActive = activeIndex === index;
            const isCurrentPlaying = isActive && isPlaying;

            return (
              <article
                key={video.src}
                ref={(element) => { cardRefs.current[index] = element; }}
                className={`w-[min(76vw,18rem)] shrink-0 snap-center transition-opacity duration-300 sm:w-[18rem] ${
                  isActive ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <div className={`relative aspect-[9/16] overflow-hidden rounded-[2.25rem] border-[7px] bg-black shadow-2xl ${
                  isActive ? "border-brand-gold" : "border-brand-cream/75"
                }`}>
                  <video
                    ref={(element) => { videoRefs.current[index] = element; }}
                    src={video.src}
                    poster={video.poster}
                    muted={isActive ? !soundOn : true}
                    loop
                    playsInline
                    preload={index === 0 ? "metadata" : "none"}
                    onPlay={() => { if (activeIndex === index) setIsPlaying(true); }}
                    onPause={() => { if (activeIndex === index) setIsPlaying(false); }}
                    className="size-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-4 pb-4 pt-16">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Video {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">{video.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => togglePlayback(index)}
                    aria-label={`${isCurrentPlaying ? "Pausar" : "Reproducir"} ${video.title}`}
                    className="absolute left-3 top-3 flex size-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
                  >
                    {isCurrentPlaying ? (
                      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h3v14H7zm7 0h3v14h-3z" /></svg>
                    ) : (
                      <svg className="ml-0.5 size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                    )}
                  </button>
                  {isActive ? (
                    <button
                      type="button"
                      onClick={toggleSound}
                      aria-label={soundOn ? "Silenciar video" : "Activar sonido del video"}
                      className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
                    >
                      {soundOn ? (
                        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5 6 9H3v6h3l5 4V5Zm4.5 4.5a4.5 4.5 0 0 1 0 5m2.5-7.5a8 8 0 0 1 0 10" /></svg>
                      ) : (
                        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5 6 9H3v6h3l5 4V5Zm5.7 5.7 3.3 3.3m0-3.3-3.3 3.3" /></svg>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => activateVideo(index)}
                      aria-label={`Seleccionar ${video.title}`}
                      className="absolute right-3 top-3 flex min-h-11 items-center rounded-full bg-black/55 px-3 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-black/75"
                    >
                      Ver
                    </button>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-cream/75">{video.description}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-brand-cream/55" aria-live="polite">
          {prefersReducedMotion ? "La reproducción automática está desactivada por tus preferencias de movimiento." : "Los videos se reproducen sin sonido; puedes activarlo en el video seleccionado."}
        </p>
      </div>
    </section>
  );
}
