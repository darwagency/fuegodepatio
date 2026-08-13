import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import CotizarForm from "@/components/CotizarForm";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { mediaSrc } from "@/data/media";

export const metadata: Metadata = {
  title: "Cordero al Palo | Fuego de Patio",
  description: "Cordero al palo preparado en el lugar del evento con fuego vivo y leña nativa.",
};

const processSteps = [
  {
    number: "1",
    title: "Cocción lenta con fuego vivo",
    copy: "Horas de cocción con leña nativa y control constante de la temperatura.",
    src: "/media/cordero/cordero-5.webp",
    alt: "Fuego vivo y leña nativa durante la cocción del cordero",
  },
  {
    number: "2",
    title: "Preparación a la vista",
    copy: "Los invitados pueden observar el proceso mientras participan de la celebración.",
    src: "/media/cordero/cordero-2.webp",
    alt: "Detalle de cordero al palo preparado a fuego vivo",
  },
  {
    number: "3",
    title: "Instalación y servicio completo",
    copy: "Montamos, cocinamos, servimos y retiramos. Tú no necesitas coordinar nada.",
    src: "/media/gastronomia/galeria-6.webp",
    alt: "Servicio de asados durante un evento de Fuego de Patio",
  },
];

export default function CorderoAlPaloPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-[100] rounded-lg bg-brand-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal"
      >
        Saltar al contenido principal
      </a>
      <Header />

      <main id="main-content" className="flex-1 pt-[64px] md:pt-[72px]">
        <section className="hero-section relative overflow-hidden bg-brand-charcoal py-12 text-brand-cream lg:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="w-full max-w-[22.5rem] space-y-6 lg:max-w-2xl">
              <h1 className="font-display text-3xl font-extrabold leading-[1.02] tracking-[-0.035em] text-brand-cream sm:text-4xl lg:text-[clamp(3rem,4.5vw,4.75rem)]">
                Cordero al palo preparado en el lugar del evento
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-brand-cream/85 sm:text-lg">
                Cocción lenta con fuego vivo y leña nativa, a la vista de tus invitados. Nuestro equipo se encarga de todo: instalación, preparación y servicio en el lugar que elijas.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="#cotizar" variant="primary">Cotizar cordero al palo</Button>
                <Button href="https://wa.me/56965252532" target="_blank" rel="noopener noreferrer" variant="outline" className="border-brand-cream/35 text-brand-cream hover:bg-brand-cream/10">
                  Hablar por WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full max-w-[22.5rem] overflow-hidden rounded-2xl border border-brand-cream/15 shadow-2xl sm:aspect-[5/4] lg:max-w-none lg:aspect-[4/5]">
              <Image
                src={mediaSrc("/media/cordero/cordero-portada.webp")}
                alt="Cordero al palo preparado al aire libre por Fuego de Patio"
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-pad bg-brand-cream">
          <div className="mx-auto max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="section-title font-display font-extrabold text-brand-charcoal">Cómo preparamos el cordero al palo</h2>
            </div>
            <Carousel ariaLabel="Proceso de preparación del cordero al palo" gridColsClassName="md:grid-cols-3">
              {processSteps.map((step) => (
                <article key={step.number} className="flex h-full flex-col gap-4 rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/5 p-5">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image src={mediaSrc(step.src)} alt={step.alt} fill sizes="(max-width: 767px) 85vw, 33vw" className="object-cover" />
                  </div>
                  <div className="space-y-2">
                    <span className="flex size-9 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-charcoal">{step.number}</span>
                    <h3 className="font-display text-lg font-bold text-brand-charcoal">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-charcoal/80">{step.copy}</p>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="section-pad border-y border-brand-cream/10 bg-brand-charcoal">
          <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold text-brand-cream sm:text-3xl">Cordero al palo en acción</h2>
            <Carousel ariaLabel="Galería de cordero al palo" gridColsClassName="md:grid-cols-2 lg:grid-cols-4">
              {[
                { src: "/media/cordero/cordero-1.webp", alt: "Cordero al palo en cocción lenta" },
                { src: "/media/cordero/cordero-principal.webp", alt: "Cordero al palo con fuego vivo" },
                { src: "/media/cordero/cordero-3.webp", alt: "Preparación de cordero al palo" },
                { src: "/media/cordero/cordero-4.webp", alt: "Cordero al palo listo para servir" },
              ].map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-cream/15">
                  <Image src={mediaSrc(image.src)} alt={image.alt} fill sizes="(max-width: 767px) 85vw, (max-width: 1023px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section id="cotizar" className="section-pad bg-brand-cream">
          <div className="mx-auto max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-extrabold text-brand-charcoal sm:text-3xl">Cotiza tu evento con Fuego de Patio</h2>
            </div>
            <CotizarForm defaultServicio="cordero" />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButtons />
    </>
  );
}
