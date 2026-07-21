import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CotizarForm from "@/components/CotizarForm";
import CotizarCTA from "@/components/CotizarCTA";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Cordero al Palo en Biobío — Banquetería a Fuego Vivo | Fuego de Patio",
  description:
    "Servicio estrella de cordero al palo asado en el lugar de tu evento con fuego vivo y leña nativa. Cobertura en Concepción, Los Ángeles y toda la Región del Biobío.",
};

export default function CorderoAlPaloPage() {
  return (
    <>
      <ScrollRevealObserver />

      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-orange text-brand-dark px-4 py-2.5 rounded-lg font-display font-bold uppercase tracking-wider text-xs z-[100] transition-all"
      >
        Saltar al contenido principal
      </a>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="flex-1 pt-[64px] md:pt-[72px]">
        {/* HERO CORDERO AL PALO */}
        <section className="hero-section relative bg-brand-dark text-brand-beige overflow-hidden py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6" data-reveal="fade-up">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em] leading-[1.05] text-brand-beige">
                Cordero al palo preparado en el lugar del evento
              </h1>

              <p className="text-base sm:text-lg text-brand-beige/90 leading-relaxed max-w-2xl">
                Asado lento con leña nativa, a la vista de todos. Un momento que los invitados recuerdan tanto como la celebración misma.
              </p>

              <p className="text-sm sm:text-base text-brand-beige/75 leading-relaxed max-w-2xl">
                Llevamos todo lo necesario y nos encargamos del montaje, la cocción y el servicio. Parcelas, jardines, empresas o centros de eventos en el Biobío y alrededores.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button href="#cotizar" variant="primary" className="btn-hover-shine text-center">
                  Cotizar cordero al palo
                </Button>
                <Button
                  href="https://wa.me/56965252532"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="border-brand-beige/35 text-brand-beige hover:bg-brand-beige/10 active:bg-brand-beige/15 text-center"
                >
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-5 w-full" data-reveal="zoom-in" data-reveal-delay="200">
              <ImageCarousel
                images={[
                  { src: "/images/cordero_dos_corderos.png", alt: "Dos corderos al palo en cocción lenta a la leña nativa" },
                  { src: "/images/cordero_3_corderos.png", alt: "Tres corderos al palo al aire libre" },
                  { src: "/images/cordero_un_cordero.png", alt: "Un cordero al palo frente al fuego vivo" },
                  { src: "/images/cordero_2_corderos_angulo1.png", alt: "Corderos al palo listos para el servicio" },
                  { src: "/images/cordero_2_corderos_angulo2.png", alt: "Detalle de los corderos al palo frente al fuego" }
                ]}
                aspectRatio="aspect-[4/5]"
                className="shadow-2xl border border-brand-beige/15 rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        </section>

        {/* CÓMO PREPARAMOS EL CORDERO */}
        <section className="section-pad bg-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4" data-reveal="fade-up">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Nuestro proceso
              </span>
              <h2 className="section-title font-display font-extrabold text-brand-dark">
                Cómo preparamos el cordero al palo
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Step 1 */}
              <div
                className="bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/10 space-y-4 flex flex-col justify-between"
                data-reveal="fade-up"
                data-reveal-delay="100"
              >
                <div className="space-y-3">
                  <span className="w-10 h-10 rounded-full bg-brand-orange text-brand-dark flex items-center justify-center font-display font-bold text-lg">
                    1
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Cocción lenta con fuego vivo
                  </h3>
                  <p className="text-sm text-brand-dark/80 leading-relaxed">
                    Usamos leña nativa y mantenemos la temperatura controlada durante todo el proceso.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/10 space-y-4 flex flex-col justify-between"
                data-reveal="fade-up"
                data-reveal-delay="200"
              >
                <div className="space-y-3">
                  <span className="w-10 h-10 rounded-full bg-brand-orange text-brand-dark flex items-center justify-center font-display font-bold text-lg">
                    2
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Preparación a la vista
                  </h3>
                  <p className="text-sm text-brand-dark/80 leading-relaxed">
                    El asado es parte del espectáculo: los invitados observan y disfrutan el proceso.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/10 space-y-4 flex flex-col justify-between"
                data-reveal="fade-up"
                data-reveal-delay="300"
              >
                <div className="space-y-3">
                  <span className="w-10 h-10 rounded-full bg-brand-orange text-brand-dark flex items-center justify-center font-display font-bold text-lg">
                    3
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Instalación y servicio
                  </h3>
                  <p className="text-sm text-brand-dark/80 leading-relaxed">
                    Montamos el equipo, cocinamos, servimos y retiramos. Tú no coordinas nada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA DE CORDEROS Y PARRILLAS EN ACCIÓN */}
        <section className="section-pad bg-brand-dark text-brand-beige border-t border-brand-beige/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-beige tracking-tight">
                Nuestros asados en acción
              </h2>
              <p className="text-sm sm:text-base text-brand-beige/80">
                Imágenes reales de corderos al palo y parrillas durante matrimonios, eventos de empresa y celebraciones familiares.
              </p>
            </div>

            {/* Featured Photo Grid — solo parrilla y servicio (las fotos de cordero están en el hero) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="fade-up" data-reveal-delay="150">
              {[
                { src: "/images/parrilla_jaula.png", alt: "Parrilla tipo jaula con carnes a fuego lento", title: "Técnicas tradicionales de asado" },
                { src: "/images/parrilla_llena_carne.png", alt: "Parrilla llena de cortes de carne asándose a la leña", title: "Cortes seleccionados a la parrilla" },
                { src: "/images/dueno_cortando_carne.png", alt: "Chef cortando carne asada recién salida del fuego", title: "Corte y servicio directo al plato" },
                { src: "/images/parrillero_armando_plato.png", alt: "Preparación minuciosa de platos para invitados", title: "Presentación cuidada para comensales" },
                { src: "/images/dueno_mirando_parrilla.png", alt: "Chef vigilando la cocción del asado", title: "Control constante de la cocción" },
                { src: "/images/parrilla_tenazas_carne.png", alt: "Tenazas sujetando carne en la parrilla", title: "Detalle del asado a la leña" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-brand-dark/40 border border-brand-beige/10 aspect-[4/3] shadow-lg hover:border-brand-orange/60 transition-all duration-300"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                    <p className="text-xs font-bold text-brand-orange uppercase tracking-wider">Fuego de Patio</p>
                    <p className="text-sm font-semibold text-brand-beige">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS SOBRE CORDERO */}
        <section className="section-pad bg-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Lo que dicen quienes probaron nuestro cordero
              </h2>
            </div>

            <Carousel ariaLabel="Testimonios de cordero al palo" gridColsClassName="md:grid-cols-2">
              {/* Testimonio 1 */}
              <div
                className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full"
                data-reveal="fade-up"
                data-reveal-delay="100"
              >
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-base text-brand-orange border-b border-brand-beige/10 pb-2">
                    Matrimonio en Granja Matilde
                  </h3>
                  <p className="text-sm font-light italic leading-relaxed text-brand-beige/90">
                    “Tuvimos nuestro matrimonio en la Granja Matilde y contratamos a Fuego de Patio para toda la gastronomía. El cordero al palo fue impresionante; mis suegros, que son del campo, me dijeron que era el mejor que habían probado. El equipo llegó puntual y montó todo sin que nosotros tuviéramos que preocuparnos de nada.”
                  </p>
                </div>
                <div className="text-xs text-brand-beige/70">
                  <strong className="block text-brand-orange text-sm font-semibold mb-0.5">Camila y Rodrigo</strong>
                  <span>Matrimonio · Granja Matilde · 145 personas</span>
                </div>
              </div>

              {/* Testimonio 2 */}
              <div
                className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full"
                data-reveal="fade-up"
                data-reveal-delay="200"
              >
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-base text-brand-orange border-b border-brand-beige/10 pb-2">
                    Celebración familiar en Los Ángeles
                  </h3>
                  <p className="text-sm font-light italic leading-relaxed text-brand-beige/90">
                    “Celebramos el aniversario de mi mamá en nuestra parcela en Los Ángeles. La parrilla a leña nativa, el mesón campestre y el trato del equipo estuvieron perfectos. Ya los tenemos considerados para el matrimonio de mi hermana.”
                  </p>
                </div>
                <div className="text-xs text-brand-beige/70">
                  <strong className="block text-brand-orange text-sm font-semibold mb-0.5">Valentina S.</strong>
                  <span>Celebración familiar · Parcela en Los Ángeles · 55 personas</span>
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* COTIZACIÓN FORM CORDERO */}
        <section id="cotizar" className="section-pad quote-section bg-brand-dark/5 border-t border-brand-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Cotiza tu cordero al palo con Fuego de Patio
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                Indícanos fecha, comuna y cantidad estimada de invitados para enviarte una propuesta detallada.
              </p>
            </div>

            <div data-reveal="zoom-in" data-reveal-delay="150">
              <CotizarForm defaultServicio="cordero" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActionButtons />
    </>
  );
}
