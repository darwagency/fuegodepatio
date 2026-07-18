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

export default function Home() {
  return (
    <>
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
            <div className="hero-copy">
              <h1 className="font-display font-extrabold tracking-[-0.045em] leading-[0.98] text-brand-beige">
                Banquetería a <span className="text-brand-orange">fuego vivo</span> para matrimonios, empresas y celebraciones
              </h1>
              <p className="hero-lead text-brand-beige/85 max-w-2xl">
                Parrillas a la llama, cordero al palo y producción integral de eventos en la Región del Biobío y alrededores.
              </p>

              <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button href="#cotizar" variant="primary">
                  Cotizar mi evento
                </Button>
                <Button href="#gastronomia" variant="outline" className="border-brand-beige/35 text-brand-beige hover:bg-brand-beige/10 active:bg-brand-beige/15">
                  Conocer los menús
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hero-media w-full relative aspect-[5/4] lg:aspect-[4/5] rounded-[1.25rem] overflow-hidden shadow-2xl hero-placeholder">
              <Image
                src="/images/hero_dueno_parrilla.png"
                alt="Parrilla a fuego vivo durante un evento de Fuego de Patio, con el equipo de parrilleros cocinando carne"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <p className="hero-support text-sm sm:text-base text-brand-beige/70 leading-relaxed max-w-xl">
              Nos trasladamos hasta el lugar y coordinamos los servicios contratados para que no tengas que organizar cada proveedor por separado.
            </p>
          </div>

          {/* Metrics */}
          <div className="trust-strip border-t border-brand-beige/10">
            <div className="max-w-7xl mx-auto grid grid-cols-3 px-4 sm:px-6 lg:px-8">
              {[
                "Más de 500 eventos realizados",
                "Más de 8 años de experiencia",
                "Propuestas personalizadas",
              ].map((item) => (
                <div key={item} className="trust-item">
                  <span className="trust-dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRODUCTION & REASONS SECTION */}
        <section id="gastronomia" className="section-pad bg-brand-beige">
          <div className="editorial-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="editorial-heading space-y-6">
              <h2 className="section-title font-display font-extrabold text-brand-dark">
                Gastronomía a fuego vivo adaptada a tu evento
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
            <div className="editorial-body space-y-6">
              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                En Fuego de Patio cocinamos frente a tus invitados con fuego vivo y leña nativa. La preparación forma parte del evento y se complementa con un servicio organizado y una presentación cuidada.
              </p>
              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                Adaptamos la propuesta al lugar, al número de asistentes y al tipo de celebración. Puedes contratar solo la banquetería o sumar producción, mobiliario, iluminación, barra y animación.
              </p>
            </div>

            <div className="reasons-panel space-y-6">
              <h3 className="font-display font-bold text-lg text-brand-dark">
                Razones para elegir Fuego de Patio
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Cocina a la vista
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    la preparación con fuego vivo y leña nativa sucede frente a los invitados.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Llegamos donde nos necesites
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    trabajamos en parcelas, domicilios, empresas y centros de eventos del Biobío y sus alrededores.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Propuestas adaptables
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    ajustamos el menú, el servicio y el montaje a las características de tu evento.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Servicios centralizados
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    puedes sumar equipamiento y producción para coordinar menos proveedores.
                  </p>
                </li>
              </ul>
              
              <div className="pt-4">
                <Button href="#cotizar" variant="secondary">
                  Quiero recibir una propuesta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PROPUESTAS GASTRONÓMICAS */}
        <section className="section-pad proposals-section bg-brand-dark/5 border-t border-brand-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Propuestas gastronómicas
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/85">
                Te ayudamos a elegir un formato según el tipo de evento, el espacio disponible y la cantidad de invitados.
              </p>
            </div>

            <Carousel
              ariaLabel="Nuestras propuestas gastronómicas"
              gridColsClassName="md:grid-cols-2 lg:grid-cols-4"
            >
              {/* Buffet del Asador */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5">
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
                    Una propuesta abundante y variada, con distintos cortes de carne preparados a la parrilla y a la llama de leña nativa. Incluye alternativas de acompañamientos calientes, ensaladas, postres y barra según la configuración elegida.
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
                  className="w-full text-center"
                >
                  Cotizar Buffet del Asador
                </CotizarCTA>
              </div>

              {/* Piqueo Parrilla */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5">
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
                  className="w-full text-center"
                >
                  Cotizar Piqueo Parrilla
                </CotizarCTA>
              </div>

              {/* Cóctel Extendido */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5">
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
                    Una selección de bocados para eventos de pie, con un servicio ágil y una presentación cuidada. Su formato facilita la circulación y la conversación entre los invitados.
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
                  className="w-full text-center"
                >
                  Cotizar Cóctel Extendido
                </CotizarCTA>
              </div>

              {/* Servicio de Barra */}
              <div className="menu-card bg-brand-beige border border-brand-dark/10 overflow-hidden p-5 flex flex-col justify-between h-full gap-5">
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
                    Una barra adaptable al estilo y duración de tu evento, disponible como servicio independiente o como complemento de cualquiera de nuestros menús. Puede incluir vinos, cervezas y cócteles personalizados.
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                      Recomendado para
                    </h4>
                    <p className="text-xs text-brand-dark/70">
                      Matrimonios, fiestas de empresa, aniversarios y eventos que necesitan una solución de bebidas coordinada.
                    </p>
                  </div>
                </div>
                <CotizarCTA
                  preselect={{ servicio: "barra" }}
                  variant="primary"
                  className="w-full text-center"
                >
                  Agregar barra a mi cotización
                </CotizarCTA>
              </div>
            </Carousel>
          </div>
        </section>

        {/* CORDERO AL PALO */}
        <section id="cordero" className="section-pad feature-section bg-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="feature-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Info */}
              <div className="feature-copy space-y-6">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                  Cordero al palo preparado en el lugar del evento
                </h2>
                <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                  El cordero al palo se cocina lentamente con fuego vivo y leña nativa. La preparación se realiza a la vista y puede convertirse en uno de los momentos centrales del evento.
                </p>
                <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                  Nuestro equipo llega con los implementos necesarios y se encarga de la instalación, la preparación y el servicio. Trabajamos en parcelas, jardines, empresas, domicilios y centros de eventos de la Región del Biobío y alrededores.
                </p>
                
                <div className="pt-2">
                  <CotizarCTA preselect={{ servicio: "cordero" }} variant="primary">
                    Cotizar cordero al palo
                  </CotizarCTA>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="feature-media">
                <ImageCarousel
                  images={[
                    { src: "/images/cordero_un_cordero.png", alt: "Un cordero al palo asándose lentamente a la leña" },
                    { src: "/images/cordero_dos_corderos.png", alt: "Dos corderos al palo cocinándose con fuego vivo" },
                    { src: "/images/cordero_3_corderos.png", alt: "Tres corderos al palo en proceso de asado al aire libre" },
                    { src: "/images/cordero_2_corderos_angulo1.png", alt: "Dos corderos al palo desde otro ángulo de cocción" },
                    { src: "/images/cordero_2_corderos_angulo2.png", alt: "Vista detallada de los corderos al palo frente al fuego nativo" }
                  ]}
                  aspectRatio="aspect-[16/10]"
                  className="shadow-lg animate-fade-in"
                />
              </div>
            </div>

            {/* Preparation Details */}
            <div className="preparation-block pt-8 border-t border-brand-dark/10">
              <h3 className="font-display font-bold text-lg text-brand-dark mb-6">
                Cómo preparamos el cordero al palo
              </h3>
              <div className="mobile-card-row grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="process-card bg-brand-dark/5 p-5 border border-brand-dark/10 space-y-2">
                  <h4 className="font-display font-semibold text-brand-orange text-sm uppercase tracking-wider">
                    Cocción lenta con fuego vivo
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Trabajamos durante horas con leña nativa y controlamos el fuego durante todo el proceso de cocción.
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
                    Instalación y servicio
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-dark/80">
                    Nos ocupamos de la instalación, la preparación y el servicio contratado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCCIÓN INTEGRAL */}
        <section id="produccion" className="section-pad production-section bg-brand-dark text-brand-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-beige tracking-tight">
                  Producción integral para matrimonios y eventos grandes
                </h2>
                <p className="text-sm sm:text-base text-brand-beige/85 leading-relaxed">
                  Si estás organizando un matrimonio o un evento de mayor escala, podemos coordinar una producción integral. Centralizamos distintos servicios para reducir la cantidad de proveedores que debes gestionar.
                </p>

                <div className="space-y-4">
                  <h3 className="font-display font-bold text-sm text-brand-orange uppercase tracking-wider">
                    Servicios que puedes incorporar
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-beige/70">
                    La propuesta puede incorporar:
                  </p>
                  
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
                    Definimos los servicios según el lugar, el número de invitados y el formato de la celebración.
                  </p>
                </div>

                <div className="pt-4">
                  <CotizarCTA preselect={{ servicio: "produccion" }} variant="primary">
                    Armar mi evento ideal
                  </CotizarCTA>
                </div>
              </div>

              {/* Right Column Images */}
              <div className="lg:col-span-5 w-full">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-end">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                  Servicios adicionales
                </h2>
                <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                  Puedes incorporar estos servicios a tu propuesta gastronómica o producción integral, según las condiciones del lugar y las necesidades de tu evento.
                </p>
              </div>
              <div className="lg:col-span-5 relative aspect-[16/6] rounded-[1.25rem] overflow-hidden">
                <Image
                  src="/images/servicio_iluminacion.png"
                  alt="Iluminación ambiental decorativa montada para un evento nocturno"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>

            <Carousel
              ariaLabel="Nuestros servicios adicionales"
              gridColsClassName="md:grid-cols-3"
            >
              {[
                { title: "Carpas", desc: "Estructuras de distintos tamaños para proteger espacios exteriores del sol o la lluvia. Incluyen montaje y desmontaje.", img: "/images/servicio_carpas.png", alt: "Toldo y carpa grande montada para evento en el exterior" },
                { title: "Generadores", desc: "Equipos de distintas capacidades para respaldar la energía necesaria durante el evento.", img: "/images/servicio_generador.png", alt: "Generador eléctrico para respaldo de energía durante el evento" },
                { title: "Iluminación", desc: "Guirnaldas, iluminación ambiental, luces para sectores específicos y soluciones para crear la atmósfera adecuada.", img: "/images/servicio_iluminacion.png", alt: "Iluminación de guirnaldas y focos para eventos" },
                { title: "Estufas", desc: "Equipos de calefacción para mejorar la comodidad de los invitados en celebraciones de otoño e invierno.", img: "/images/servicio_estufas.png", alt: "Estufa de pie para calefacción exterior en eventos" },
                { title: "Animación", desc: "Coordinación de DJ, maestro de ceremonias y animadores para matrimonios, celebraciones y eventos corporativos.", img: "/images/servicio_animacion.png", alt: "Animador de bodas animando a los invitados en la pista de baile" },
                { title: "Mobiliario", desc: "Sillas, mesas redondas o rectangulares, tablones rústicos y mesas altas para configurar el espacio según el formato del evento.", img: "/images/servicio_mobiliario.png", alt: "Mesas de madera y sillas tipo X instaladas para el banquete" }
              ].map((serv, idx) => (
                <div key={idx} className="service-card bg-brand-dark/5 overflow-hidden border border-brand-dark/10 flex flex-col justify-between h-full group hover:border-brand-orange/50 transition-colors duration-300">
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

            <div className="flex justify-center pt-2">
              <Button href="#cotizar" variant="secondary">
                Incluir servicios en mi cotización
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICIOS SEGÚN EL TIPO DE EVENTO */}
        <section className="section-pad event-section bg-brand-dark/5 border-t border-b border-brand-dark/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Servicios según el tipo de evento
              </h2>
            </div>

            <Carousel ariaLabel="Servicios según el tipo de evento" gridColsClassName="md:grid-cols-3">
              {/* Matrimonios */}
              <div className="event-card bg-brand-beige p-6 border border-brand-dark/10 flex flex-col justify-between gap-6 h-full">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Matrimonios
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                    Banquetería a fuego vivo y producción integral adaptadas al lugar, el número de invitados y el formato del matrimonio.
                  </p>
                </div>
                <CotizarCTA
                  preselect={{ tipo: "Matrimonio" }}
                  variant="primary"
                  className="w-full text-center"
                >
                  Cotizar mi matrimonio
                </CotizarCTA>
              </div>

              {/* Eventos de empresa */}
              <div className="event-card bg-brand-beige p-6 border border-brand-dark/10 flex flex-col justify-between gap-6 h-full">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Eventos de empresa
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                    Banquetería y producción para aniversarios, encuentros de equipo, cenas y otras celebraciones corporativas. Ajustamos el formato a las necesidades de la empresa y sus asistentes.
                  </p>
                </div>
                <CotizarCTA
                  preselect={{ tipo: "Evento de Empresa" }}
                  variant="primary"
                  className="w-full text-center"
                >
                  Cotizar un evento de empresa
                </CotizarCTA>
              </div>

              {/* Celebraciones particulares */}
              <div className="event-card bg-brand-beige p-6 border border-brand-dark/10 flex flex-col justify-between gap-6 h-full">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Celebraciones particulares
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                    Cumpleaños, aniversarios y reuniones familiares con una propuesta que llega hasta tu parcela, domicilio o centro de eventos y se adapta a la forma en que quieres celebrar.
                  </p>
                </div>
                <CotizarCTA
                  preselect={{ tipo: "Celebración Particular" }}
                  variant="primary"
                  className="w-full text-center"
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
            <div className="max-w-3xl">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Testimonios de clientes
              </h2>
            </div>

            <Carousel
              ariaLabel="Opiniones de nuestros clientes"
              gridColsClassName="md:grid-cols-3"
            >
              {/* Testimonio 1 */}
              <div className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full">
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
              <div className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full">
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
              <div className="bg-brand-dark text-brand-beige p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 border border-brand-beige/5 h-full">
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
            <div className="max-w-3xl">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Cómo solicitar una cotización
              </h2>
            </div>

            <div className="steps-row grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="step-card flex gap-4">
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
              <div className="step-card flex gap-4">
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
              <div className="step-card flex gap-4">
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
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                Cotiza tu evento con Fuego de Patio
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
                Envíanos los datos principales de tu evento para preparar una propuesta según el lugar, la cantidad de invitados y los servicios que necesitas.
              </p>
              <p className="text-xs text-brand-dark/70 italic">
                Datos útiles para iniciar la cotización: fecha, comuna, tipo de evento, cantidad estimada de invitados y servicios de interés.
              </p>
            </div>

            <CotizarForm />
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
