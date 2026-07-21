import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import CotizarForm from "@/components/CotizarForm";
import CotizarCTA from "@/components/CotizarCTA";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

export default function Home() {
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
        {/* HERO SECTION */}
        <section className="hero-section relative bg-brand-dark text-brand-beige overflow-hidden">
          <div className="hero-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Content */}
            <div className="hero-copy" data-reveal="fade-up">
              <h1 className="font-display font-extrabold tracking-[-0.045em] leading-[0.98] text-brand-beige">
                Banquetería a <span className="text-brand-orange">fuego vivo</span> para matrimonios, empresas y celebraciones
              </h1>
              <p className="hero-lead text-brand-beige/85 max-w-2xl">
                Parrillas, cordero al palo y producción completa de eventos en la Región del Biobío y alrededores.
              </p>

              <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button href="#cotizar" variant="primary" className="btn-hover-shine">
                  Cotizar mi evento
                </Button>
                <Button href="#gastronomia" variant="outline" className="border-brand-beige/35 text-brand-beige hover:bg-brand-beige/10 active:bg-brand-beige/15">
                  Conocer los menús
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hero-media w-full relative aspect-[5/4] lg:aspect-[4/5] rounded-[1.25rem] overflow-hidden shadow-2xl hero-placeholder" data-reveal="zoom-in" data-reveal-delay="200">
              <Image
                src="/images/hero_dueno_parrilla.png"
                alt="Parrilla a fuego vivo durante un evento de Fuego de Patio, con el equipo de parrilleros cocinando carne"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <p className="hero-support text-sm sm:text-base text-brand-beige/70 leading-relaxed max-w-xl" data-reveal="fade-up" data-reveal-delay="300">
              Llegamos al lugar con todo lo necesario y coordinamos cada servicio para que tú solo te preocupes de disfrutar.
            </p>
          </div>

          {/* Metrics */}
          <div className="trust-strip border-t border-brand-beige/10">
            <div className="max-w-7xl mx-auto grid grid-cols-3 px-4 sm:px-6 lg:px-8">
              {[
                "Más de 500 eventos realizados",
                "Más de 8 años de experiencia",
                "Propuestas personalizadas",
              ].map((item, idx) => (
                <div key={item} className="trust-item" data-reveal="fade-up" data-reveal-delay={`${(idx + 1) * 100}`}>
                  <span className="trust-dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORDERO AL PALO SECTION */}
        <section id="cordero" className="section-pad feature-section bg-brand-beige border-b border-brand-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="feature-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Info */}
              <div className="feature-copy space-y-6" data-reveal="slide-right">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                  Cordero al palo preparado en el lugar del evento
                </h2>
                <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                  Cocción lenta con fuego vivo y leña nativa, a la vista de tus invitados. Nuestro equipo se encarga de todo: instalación, preparación y servicio en el lugar que elijas.
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <CotizarCTA preselect={{ servicio: "cordero" }} variant="primary" className="btn-hover-shine">
                    Cotizar cordero al palo
                  </CotizarCTA>
                  <Button href="/cordero-al-palo" variant="outline" className="border-brand-dark/30 text-brand-dark hover:bg-brand-dark/5">
                    Más sobre el cordero al palo →
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="feature-media w-full" data-reveal="slide-left" data-reveal-delay="150">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl border border-brand-dark/10">
                  <Image
                    src="/images/cordero_dos_corderos.png"
                    alt="Dos corderos al palo cocinándose con fuego vivo y leña nativa"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Preparation Details */}
            <div className="preparation-block pt-8 border-t border-brand-dark/10" data-reveal="fade-up" data-reveal-delay="200">
              <h3 className="font-display font-bold text-lg text-brand-dark mb-6">
                Cómo preparamos el cordero al palo
              </h3>
              <div className="mobile-card-row grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="process-card bg-brand-dark/5 p-5 border border-brand-dark/10 space-y-2">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Cocción lenta con fuego vivo
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Horas de cocción con leña nativa y control constante de la temperatura.
                  </p>
                </div>
                <div className="process-card bg-brand-dark/5 p-5 border border-brand-dark/10 space-y-2">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Preparación a la vista
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Los invitados pueden observar el proceso mientras participan de la celebración.
                  </p>
                </div>
                <div className="process-card bg-brand-dark/5 p-5 border border-brand-dark/10 space-y-2">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Instalación y servicio completo
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Montamos, cocinamos, servimos y retiramos. Tú no necesitas coordinar nada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION & REASONS SECTION */}
        <section id="gastronomia" className="section-pad bg-brand-beige">
          <div className="editorial-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="editorial-heading space-y-6" data-reveal="fade-up">
              <h2 className="section-title font-display font-extrabold text-brand-dark">
                Cocinamos frente a tus invitados
              </h2>
              <ImageCarousel
                images={[
                  { src: "/images/dueno_con_parrilla.png", alt: "Dueño de Fuego de Patio sonriendo junto a la parrilla" },
                  { src: "/images/dueno_cortando_carne.png", alt: "Parrillero cortando carne asada para los comensales" },
                  { src: "/images/dueno_mirando_parrilla.png", alt: "Chef vigilando la cocción de carnes y empanadas a la leña" },
                  { src: "/images/dueno_sirviendo_anticuchos.png", alt: "Parrillero sirviendo anticuchos recién preparados" },
                  { src: "/images/parrillero_armando_plato.png", alt: "Preparación minuciosa de platos de carne asada para los invitados" },
                  { src: "/images/parrilla_tenazas_carne.png", alt: "Primer plano de carne en la parrilla sostenida con tenazas" }
                ]}
                aspectRatio="aspect-[4/3] lg:aspect-[4/3]"
                className="w-full"
              />
            </div>
            <div className="editorial-body space-y-6" data-reveal="fade-up" data-reveal-delay="150">
              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                La parrilla a la vista es parte del evento. Puedes contratar solo la banquetería o sumar producción, mobiliario, iluminación, barra y animación.
              </p>
            </div>

            <div className="reasons-panel space-y-6" data-reveal="zoom-in" data-reveal-delay="200">
              <h3 className="font-display font-bold text-lg text-brand-dark">
                Razones para elegir Fuego de Patio
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Cocina a la vista
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Tus invitados ven y huelen la preparación mientras disfrutan del evento.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Llegamos donde nos necesites
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Parcelas, domicilios, empresas o centros de eventos en todo el Biobío.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Propuestas a medida
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Menú, formato y montaje ajustados al espacio, cantidad de personas y estilo de tu evento.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Un solo proveedor
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Sumá equipamiento, barra y producción sin sumar proveedores adicionales.
                  </p>
                </li>
              </ul>
              
              <div className="pt-4">
                <Button href="#cotizar" variant="secondary" className="btn-hover-shine">
                  Quiero recibir una propuesta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PROPUESTAS GASTRONÓMICAS */}
        <section className="section-pad proposals-section bg-brand-dark/5 border-t border-brand-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Propuestas gastronómicas
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/85">
                Cuatro formatos distintos para que elijas el que mejor calce con tu celebración.
              </p>
            </div>

            <Carousel
              ariaLabel="Nuestras propuestas gastronómicas"
              gridColsClassName="md:grid-cols-2 lg:grid-cols-4"
            >
              {/* Buffet del Asador */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5" data-reveal="fade-up" data-reveal-delay="100">
                <div className="space-y-4">
                  <ImageCarousel
                    images={[
                      { src: "/images/buffet_mesa_bonita.png", alt: "Mesa ordenada y bonita de banquetería" },
                      { src: "/images/buffet_mesa_banqueteria.png", alt: "Mesa de banquetería con variedad de preparaciones" },
                      { src: "/images/buffet_mesa_ordenada_banqueteria.png", alt: "Mesa ordenada con productos de banquetería de Fuego de Patio" },
                      { src: "/images/buffet_mesa_ordenada.png", alt: "Mesa con vajilla y decoración de evento" }
                    ]}
                    aspectRatio="aspect-[4/3]"
                  />
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Buffet del Asador
                  </h3>
                  <p className="text-xs text-brand-dark/80 leading-relaxed">
                    Distintos cortes a la parrilla con acompañamientos calientes, ensaladas, postres y barra. El formato más completo.
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                      Recomendado para
                    </h4>
                    <p className="text-xs text-brand-dark/70">
                      Matrimonios, celebraciones familiares y eventos en los que la comida es uno de los momentos centrales.
                    </p>
                  </div>
                </div>
                <CotizarCTA
                  preselect={{ servicio: "buffet" }}
                  variant="primary"
                  className="w-full text-center btn-hover-shine"
                >
                  Cotizar Buffet del Asador
                </CotizarCTA>
              </div>

              {/* Piqueo Parrilla */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5" data-reveal="fade-up" data-reveal-delay="200">
                <div className="space-y-4">
                  <ImageCarousel
                    images={[
                      { src: "/images/piqueo_empanadas_mesas.png", alt: "Mesa de empanadas, masas y canapés de piqueo" },
                      { src: "/images/parrilla_llena_carne.png", alt: "Parrilla llena de cortes de carne asándose a la leña" },
                      { src: "/images/parrilla_jaula.png", alt: "Parrilla tipo jaula con carnes a fuego lento" }
                    ]}
                    aspectRatio="aspect-[4/3]"
                  />
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Piqueo Parrilla
                  </h3>
                  <p className="text-xs text-brand-dark/80 leading-relaxed">
                    Carnes y preparaciones para compartir, servidas en un formato informal. El mesón campestre permite que los invitados se sirvan y disfruten a su ritmo.
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                      Recomendado para
                    </h4>
                    <p className="text-xs text-brand-dark/70">
                      Cumpleaños, aniversarios, reuniones familiares y celebraciones relajadas.
                    </p>
                  </div>
                </div>
                <CotizarCTA
                  preselect={{ servicio: "piqueo" }}
                  variant="primary"
                  className="w-full text-center btn-hover-shine"
                >
                  Cotizar Piqueo Parrilla
                </CotizarCTA>
              </div>

              {/* Cóctel Extendido */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5" data-reveal="fade-up" data-reveal-delay="300">
                <div className="space-y-4">
                  <ImageCarousel
                    images={[
                      { src: "/images/coctel_canape_mesa.png", alt: "Mesa de canapés y bocados finos organizados" },
                      { src: "/images/buffet_mesa_canape.png", alt: "Productos de cóctel ordenados sobre mesa de banquetería" },
                      { src: "/images/coctel_postres_primer_plano.png", alt: "Primer plano de variedad de postres ordenados en un evento" }
                    ]}
                    aspectRatio="aspect-[4/3]"
                  />
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Cóctel Extendido
                  </h3>
                  <p className="text-xs text-brand-dark/80 leading-relaxed">
                    Bocados servidos de pie con servicio ágil. Ideal cuando los invitados circulan y conversan.
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                      Recomendado para
                    </h4>
                    <p className="text-xs text-brand-dark/70">
                      Eventos corporativos, inauguraciones, recepciones y celebraciones con mayor circulación de invitados.
                    </p>
                  </div>
                </div>
                <CotizarCTA
                  preselect={{ servicio: "coctel" }}
                  variant="primary"
                  className="w-full text-center btn-hover-shine"
                >
                  Cotizar Cóctel Extendido
                </CotizarCTA>
              </div>

              {/* Servicio de Barra */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5" data-reveal="fade-up" data-reveal-delay="400">
                <div className="space-y-4">
                  <ImageCarousel
                    images={[
                      { src: "/images/barra_cubeta_bebidas.png", alt: "Cubeta con hielo y cervezas, vinos y tragos de autor" },
                      { src: "/images/barra_vaso_vino.png", alt: "Vaso de vino tinto servido durante un evento" }
                    ]}
                    aspectRatio="aspect-[4/3]"
                  />
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Servicio de Barra
                  </h3>
                  <p className="text-xs text-brand-dark/80 leading-relaxed">
                    Vinos, cervezas y cócteles. Funciona sola o como complemento de cualquier menú.
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                      Recomendado para
                    </h4>
                    <p className="text-xs text-brand-dark/70">
                      Cualquier evento que necesite una solución de bebidas coordinada.
                    </p>
                  </div>
                </div>
                <CotizarCTA
                  preselect={{ servicio: "barra" }}
                  variant="primary"
                  className="w-full text-center btn-hover-shine"
                >
                  Agregar barra a mi cotización
                </CotizarCTA>
              </div>
            </Carousel>
          </div>
        </section>

        {/* PRODUCCIÓN INTEGRAL */}
        <section id="produccion" className="section-pad production-section bg-brand-dark text-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6" data-reveal="slide-right">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-beige tracking-tight">
                  Producción integral para matrimonios y eventos grandes
                </h2>
                <p className="text-sm sm:text-base text-brand-beige/85 leading-relaxed">
                  Centralizamos gastronomía, equipamiento y logística en un solo equipo. Menos proveedores, menos coordinación de tu parte.
                </p>

                <div className="space-y-4">
                  <h3 className="font-display font-bold text-sm text-brand-orange uppercase tracking-wider">
                    Incluye según lo que necesites
                  </h3>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-brand-beige/85" role="list">
                    {[
                      "Parrilla y cordero al palo",
                      "Mesas y sillas",
                      "Decoración campestre",
                      "Iluminación ambiental y de fiesta",
                      "Guirnaldas perimetrales",
                      "Barra completa",
                      "Animación y coordinación",
                      "Servicios técnicos adicionales"
                    ].map((serv, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{serv}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xs text-brand-beige/70 pt-2 italic">
                    Armamos la propuesta según el lugar, la cantidad de invitados y el estilo de tu evento.
                  </p>
                </div>

                <div className="pt-4">
                  <CotizarCTA preselect={{ servicio: "produccion" }} variant="primary" className="btn-hover-shine">
                    Armar mi evento ideal
                  </CotizarCTA>
                </div>
              </div>

              {/* Right Column Images */}
              <div className="lg:col-span-5 w-full" data-reveal="slide-left" data-reveal-delay="150">
                <ImageCarousel
                  images={[
                    { src: "/images/produccion_mesas_sillas.png", alt: "Salón o carpa de evento decorada con mesas y sillas de madera" },
                    { src: "/images/produccion_gente_compartiendo.png", alt: "Invitados compartiendo alrededor de una mesa de banquetería de Fuego de Patio" }
                  ]}
                  aspectRatio="aspect-[4/3]"
                  className="shadow-2xl border-brand-orange/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS ADICIONALES */}
        <section id="adicionales" className="section-pad bg-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Servicios adicionales
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                Complementos que puedes sumar a cualquier propuesta gastronómica o de producción.
              </p>
            </div>

            <Carousel
              ariaLabel="Nuestros servicios adicionales"
              gridColsClassName="md:grid-cols-3"
            >
              {[
                { title: "Carpas", desc: "Protección para exteriores con montaje y desmontaje incluido.", img: "/images/servicio_carpas.png", alt: "Toldo y carpa grande montada para evento en el exterior" },
                { title: "Generadores", desc: "Respaldo eléctrico para eventos en lugares sin conexión o con suministro limitado.", img: "/images/servicio_generador.png", alt: "Generador eléctrico para respaldo de energía durante el evento" },
                { title: "Iluminación", desc: "Guirnaldas, focos ambientales y luces dirigidas para definir la atmósfera.", img: "/images/servicio_iluminacion.png", alt: "Iluminación de guirnaldas y focos para eventos" },
                { title: "Estufas", desc: "Calefacción exterior para eventos en otoño e invierno.", img: "/images/servicio_estufas.png", alt: "Estufa de pie para calefacción exterior en eventos" },
                { title: "Animación", desc: "DJ, maestro de ceremonias y conducción para matrimonios y eventos corporativos.", img: "/images/servicio_animacion.png", alt: "Animador de bodas animando a los invitados en la pista de baile" },
                { title: "Mobiliario", desc: "Sillas, mesas rectangulares, redondas, tablones rústicos y mesas altas.", img: "/images/servicio_mobiliario.png", alt: "Mesas de madera y sillas tipo X instaladas para el banquete" }
              ].map((serv, idx) => (
                <div key={idx} className="service-card bg-brand-dark/5 overflow-hidden border border-brand-dark/10 flex flex-col justify-between h-full group hover:border-brand-orange/50 transition-colors duration-300" data-reveal="fade-up" data-reveal-delay={`${(idx % 3 + 1) * 100}`}>
                  <div className="relative aspect-[16/10] w-full bg-brand-dark overflow-hidden">
                    <Image
                      src={serv.img}
                      alt={serv.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-base text-brand-dark border-b border-brand-dark/10 pb-2">
                        {serv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                        {serv.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>

            <div className="flex justify-center pt-2" data-reveal="fade-up">
              <Button href="#cotizar" variant="secondary" className="btn-hover-shine">
                Incluir servicios en mi cotización
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICIOS SEGÚN EL TIPO DE EVENTO */}
        <section className="section-pad event-section bg-brand-dark/5 border-t border-b border-brand-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Servicios según el tipo de evento
              </h2>
            </div>

            <Carousel ariaLabel="Servicios según el tipo de evento" gridColsClassName="md:grid-cols-3">
              {/* Matrimonios */}
              <div className="event-card bg-brand-beige p-6 border border-brand-dark/10 flex flex-col justify-between gap-6 h-full" data-reveal="fade-up" data-reveal-delay="100">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Matrimonios
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                    Gastronomía, producción y logística coordinados para que disfrutes tu día sin preocupaciones.
                  </p>
                </div>
                <CotizarCTA
                  preselect={{ tipo: "Matrimonio" }}
                  variant="primary"
                  className="w-full text-center btn-hover-shine"
                >
                  Cotizar mi matrimonio
                </CotizarCTA>
              </div>

              {/* Eventos de empresa */}
              <div className="event-card bg-brand-beige p-6 border border-brand-dark/10 flex flex-col justify-between gap-6 h-full" data-reveal="fade-up" data-reveal-delay="200">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Eventos de empresa
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                    Aniversarios, encuentros de equipo y cenas corporativas con formato ajustado a la empresa.
                  </p>
                </div>
                <CotizarCTA
                  preselect={{ tipo: "Evento de Empresa" }}
                  variant="primary"
                  className="w-full text-center btn-hover-shine"
                >
                  Cotizar un evento de empresa
                </CotizarCTA>
              </div>

              {/* Celebraciones particulares */}
              <div className="event-card bg-brand-beige p-6 border border-brand-dark/10 flex flex-col justify-between gap-6 h-full" data-reveal="fade-up" data-reveal-delay="300">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Celebraciones particulares
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                    Cumpleaños, aniversarios y reuniones familiares. Llegamos a tu parcela, domicilio o centro de eventos.
                  </p>
                </div>
                <CotizarCTA
                  preselect={{ tipo: "Celebración Particular" }}
                  variant="primary"
                  className="w-full text-center btn-hover-shine"
                >
                  Cotizar mi celebración
                </CotizarCTA>
              </div>
            </Carousel>
          </div>
        </section>

        {/* TESTIMONIOS DE CLIENTES */}
        <section id="testimonios" className="section-pad testimonials-section bg-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Lo que dicen nuestros clientes
              </h2>
            </div>

            <Carousel
              ariaLabel="Opiniones de nuestros clientes"
              gridColsClassName="md:grid-cols-3"
            >
              {/* Testimonio 1 */}
              <div className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full" data-reveal="fade-up" data-reveal-delay="100">
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
              <div className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full" data-reveal="fade-up" data-reveal-delay="200">
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

              {/* Testimonio 3 */}
              <div className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full" data-reveal="fade-up" data-reveal-delay="300">
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-base text-brand-orange border-b border-brand-beige/10 pb-2">
                    Evento corporativo de Empresa Otey
                  </h3>
                  <p className="text-sm font-light italic leading-relaxed text-brand-beige/90">
                    “En Empresa Otey llevamos dos años consecutivos celebrando el Día del Trabajador con Fuego de Patio. La calidad de la carne, la organización del equipo y el trato con nuestros trabajadores son siempre impecables. Ya son parte de nuestra celebración anual.”
                  </p>
                </div>
                <div className="text-xs text-brand-beige/70">
                  <strong className="block text-brand-orange text-sm font-semibold mb-0.5">Mery Saavedra</strong>
                  <span>Encargada de Logística y RR. HH. · Empresa Otey</span>
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* CÓMO SOLICITAR UNA COTIZACIÓN */}
        <section className="section-pad quote-process bg-brand-dark/5 border-t border-brand-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Cómo solicitar una cotización
              </h2>
            </div>

            <div className="steps-row grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="step-card flex gap-4" data-reveal="fade-up" data-reveal-delay="100">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-brand-dark font-display font-bold text-lg">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-brand-dark">
                    Cuéntanos qué estás planificando
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/85 leading-relaxed">
                    Indica la fecha, la comuna, el tipo de celebración y una cantidad aproximada de invitados.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-card flex gap-4" data-reveal="fade-up" data-reveal-delay="200">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-brand-dark font-display font-bold text-lg">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-brand-dark">
                    Preparamos una propuesta
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/85 leading-relaxed">
                    Definimos el menú, el formato de servicio y los adicionales que mejor se ajusten a tus necesidades.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-card flex gap-4" data-reveal="fade-up" data-reveal-delay="300">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-brand-dark font-display font-bold text-lg">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-brand-dark">
                    Coordinamos los servicios contratados
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/85 leading-relaxed">
                    Nuestro equipo organiza el montaje y la operación de los servicios incluidos en la propuesta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COTIZACIÓN FORM SECTION */}
        <section id="cotizar" className="section-pad quote-section bg-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4" data-reveal="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Cotiza tu evento con Fuego de Patio
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                Completa el formulario con los datos de tu evento y te enviaremos una propuesta a medida.
              </p>
            </div>

            <div data-reveal="zoom-in" data-reveal-delay="150">
              <CotizarForm />
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
