import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import CotizarCTA from "@/components/CotizarCTA";
import CotizarForm from "@/components/CotizarForm";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import Gallery from "@/components/Gallery";
import ImageCarousel from "@/components/ImageCarousel";
import VideoStories from "@/components/VideoStories";
import {
  corderoMedia,
  heroMedia,
  mediaSrc,
  produccionMedia,
  propuestasMedia,
  serviciosAdicionalesMedia,
  videoReel,
} from "@/data/media";

const menus = [
  {
    title: "Cordero al palo",
    description: "Cocción lenta con fuego vivo y leña nativa, preparada en el lugar del evento.",
    image: corderoMedia.principal,
    href: "/cordero-al-palo",
    action: "Conocer el cordero al palo",
  },
  {
    title: "Parrillas y piqueos",
    description: "Carnes, empanadas y acompañamientos para compartir alrededor de la parrilla.",
    image: propuestasMedia.piqueo[1],
  },
  {
    title: "Buffet y cóctel",
    description: "Formatos de recepción, buffet y barra coordinados según tu celebración.",
    image: propuestasMedia.coctel[0],
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-lg bg-brand-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Saltar al contenido principal
      </a>

      <Header />

      <main id="main-content" className="flex-1 pt-[64px] md:pt-[72px]">
        <section className="hero-section relative overflow-hidden bg-brand-charcoal text-brand-cream">
          <div className="hero-grid mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="hero-copy">
              <h1 className="font-display font-extrabold tracking-[-0.035em] text-brand-cream">
                Banquetería a <span className="text-brand-gold">fuego vivo</span> para matrimonios, empresas y celebraciones
              </h1>
              <p className="hero-lead max-w-2xl font-sans text-brand-cream/85">
                Parrillas, cordero al palo y producción completa de eventos en la Región del Biobío y alrededores.
              </p>
              <div className="hero-actions flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button href="#cotizar" variant="primary" className="w-full btn-hover-shine sm:w-auto">
                  Cotizar mi evento
                </Button>
                <Button href="#gastronomia" variant="outline" className="w-full border-brand-cream/35 text-brand-cream hover:bg-brand-cream/10 sm:w-auto">
                  Conocer los menús
                </Button>
              </div>
            </div>

            <div className="hero-media relative aspect-[5/4] w-full overflow-hidden rounded-[1.25rem] shadow-2xl lg:aspect-[4/5]">
              <Image
                src={mediaSrc(heroMedia.lcpImage.src)}
                alt={heroMedia.lcpImage.alt}
                fill
                preload
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <p className="hero-support max-w-xl text-sm leading-relaxed text-brand-cream/70 sm:text-base">
              Llegamos al lugar con lo necesario y coordinamos cada servicio para que disfrutes el evento.
            </p>
          </div>

          <div className="trust-strip border-t border-brand-cream/10">
            <div className="mx-auto grid max-w-7xl grid-cols-3 px-4 sm:px-6 lg:px-8">
              {["Más de 500 eventos realizados", "Más de 8 años de experiencia", "Propuestas personalizadas"].map((item) => (
                <div key={item} className="trust-item font-sans">
                  <span className="trust-dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cordero-destacado" className="border-b border-brand-charcoal/10 bg-brand-cream py-5 sm:py-7">
          <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:grid-cols-[0.78fr_1.22fr] sm:px-6 lg:px-8">
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl sm:aspect-[4/3]">
              <Image
                src={mediaSrc(corderoMedia.portada.src)}
                alt={corderoMedia.portada.alt}
                fill
                sizes="(max-width: 639px) 100vw, 36vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Servicio destacado</p>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-charcoal sm:text-3xl">Conoce el cordero al palo</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-brand-charcoal/80">
                El ritual más representativo de Fuego de Patio: cocción lenta, fuego vivo y servicio en tu celebración.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/cordero-al-palo" variant="secondary" className="w-full sm:w-auto">
                  Ver experiencia de cordero
                </Button>
                <CotizarCTA preselect={{ servicio: "cordero" }} variant="outline" className="w-full border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5 sm:w-auto">
                  Cotizar cordero al palo
                </CotizarCTA>
              </div>
            </div>
          </div>
        </section>

        <VideoStories videos={videoReel} />

        <section id="gastronomia" className="section-pad border-b border-brand-charcoal/10 bg-brand-cream">
          <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Gastronomía</p>
              <h2 className="section-title font-display font-extrabold text-brand-charcoal">Cocina preparada en tu evento</h2>
              <p className="text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
                Elige un formato principal y armamos la propuesta según tus invitados, lugar y estilo de celebración.
              </p>
            </div>

            <Carousel ariaLabel="Formatos gastronómicos" gridColsClassName="md:grid-cols-3">
              {menus.map((menu) => (
                <article key={menu.title} className="overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={mediaSrc(menu.image.src)} alt={menu.image.alt} fill sizes="(max-width: 767px) 85vw, 33vw" className="object-cover" />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="font-display text-xl font-bold text-brand-charcoal">{menu.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-charcoal/75">{menu.description}</p>
                    {menu.href && menu.action ? (
                      <Button href={menu.href} variant="outline" className="border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5">
                        {menu.action}
                      </Button>
                    ) : (
                      <CotizarCTA preselect={{ servicio: menu.title === "Parrillas y piqueos" ? "piqueo" : "coctel" }} variant="outline" className="border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5">
                        Cotizar este formato
                      </CotizarCTA>
                    )}
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </section>

        <section id="produccion" className="section-pad bg-brand-charcoal text-brand-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Producción integral</p>
              <h2 className="section-title font-display font-extrabold">Un solo equipo para tu evento</h2>
              <p className="text-sm leading-relaxed text-brand-cream/80 sm:text-base">
                Si lo necesitas, sumamos producción, mobiliario y ambientación a la banquetería para coordinar todo en una sola propuesta.
              </p>
              <CotizarCTA preselect={{ servicio: "produccion" }} variant="primary" className="w-full sm:w-auto">
                Cotizar producción integral
              </CotizarCTA>
            </div>
            <ImageCarousel
              images={produccionMedia.carrusel}
              ariaLabel="Montajes y producción de eventos"
              aspectRatio="aspect-[4/3]"
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="overflow-hidden rounded-2xl border border-brand-cream/15 shadow-2xl"
            />
          </div>
        </section>

        <section id="adicionales" className="section-pad border-b border-brand-charcoal/10 bg-brand-cream">
          <div className="mx-auto max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Servicios adicionales</p>
              <h2 className="section-title font-display font-extrabold text-brand-charcoal">Arma el evento que necesitas</h2>
              <p className="text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
                Cada servicio se puede agregar directamente a tu cotización.
              </p>
            </div>

            <Carousel ariaLabel="Servicios adicionales" gridColsClassName="md:grid-cols-3">
              {serviciosAdicionalesMedia.map((service) => (
                <article key={service.key} className="overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white shadow-sm">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.src.startsWith("/media/") ? mediaSrc(service.src) : service.src}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 767px) 85vw, 33vw"
                      className="object-cover"
                      style={"objectPosition" in service && service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="font-display text-xl font-bold text-brand-charcoal">{service.title}</h3>
                    <p className="min-h-12 text-sm leading-relaxed text-brand-charcoal/75">{service.desc}</p>
                    <CotizarCTA preselect={{ servicio: service.key }} variant="outline" className="w-full border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5">
                      Agregar a mi cotización
                    </CotizarCTA>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </section>

        <Gallery />

        <section id="cotizar" className="section-pad bg-brand-cream">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Cotización</p>
              <h2 className="section-title font-display font-extrabold text-brand-charcoal">Cuéntanos tu evento</h2>
              <p className="text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
                Con fecha, tipo de evento y número aproximado de invitados podemos preparar una propuesta a medida.
              </p>
            </div>
            <CotizarForm />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButtons />
    </>
  );
}
