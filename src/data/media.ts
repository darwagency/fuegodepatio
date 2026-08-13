export interface MediaItem {
  src: string;
  alt: string;
  title?: string;
  category?: 'fuego-cordero' | 'cocina-piqueos' | 'buffet-cocteleria' | 'matrimonios-eventos';
  aspectRatio?: string;
}

const mediaRevision = "orientation-20260812";

export function mediaSrc(src: string) {
  return `${src}${src.includes("?") ? "&" : "?"}v=${mediaRevision}`;
}

export const brandAssets = {
  logoPrincipal: "/brand/logo-principal.png",
  logoOscuro: "/brand/logo-oscuro.png",
  logoClaro: "/brand/logo-claro.png",
  isotipo: "/brand/isotipo-fogata.png",
};

export const heroMedia = {
  lcpImage: {
    src: "/media/hero/asador-parrilla-principal.webp",
    alt: "Asador de Fuego de Patio preparando carnes a la parrilla con fuego vivo",
  },
  poster: "/media/video/poster-hero.webp",
  secondaryImage: {
    src: "/media/hero/maestro-asador.webp",
    alt: "Maestro asador de Fuego de Patio vigilando los cortes en la parrilla",
  },
};

export const corderoMedia = {
  principal: {
    src: "/media/cordero/cordero-1.webp",
    alt: "Cordero al palo dorado a fuego vivo con leña nativa en evento campestre",
  },
  portada: {
    src: "/media/cordero/cordero-portada.webp",
    alt: "Montaje completo de cordero al palo asado al aire libre",
  },
  galeria: [
    { src: "/media/cordero/cordero-1.webp", alt: "Cordero al palo en cocción lenta con leña nativa" },
    { src: "/media/cordero/cordero-2.webp", alt: "Detalle del cordero al palo dorado y crocante" },
    { src: "/media/cordero/cordero-portada.webp", alt: "Preparación de cordero al palo al aire libre" },
    { src: "/media/cordero/cordero-5.webp", alt: "Fuego vivo e instalación de asado campestre" },
    { src: "/media/cordero/cordero-3.webp", alt: "Control de temperatura y brasas en el cordero" },
    { src: "/media/cordero/cordero-4.webp", alt: "Punto de cocción perfecto del cordero al palo" },
  ],
};

export const gastronomiaMedia = {
  principal: {
    src: "/media/gastronomia/maestro-asador-principal.webp",
    alt: "Maestro asador de Fuego de Patio preparando carnes a la vista de los invitados",
  },
  carrusel: [
    { src: "/media/gastronomia/maestro-asador-principal.webp", alt: "Maestro asador de Fuego de Patio cocinando a la vista" },
    { src: "/media/gastronomia/galeria-6.webp", alt: "Servicio de asados directo de la parrilla a los invitados" },
    { src: "/media/gastronomia/parrilla-equipo.webp", alt: "Parrilla profesional con cortes de carne seleccionados" },
    { src: "/media/gastronomia/galeria-2.webp", alt: "Equipo parrillero en plena faena durante la celebración" },
  ],
};

export const propuestasMedia = {
  buffet: [
    { src: "/media/buffet/buffet-principal.webp", alt: "Mesa de buffet del asador con cortes y acompañamientos" },
    { src: "/media/buffet/buffet-1.webp", alt: "Buffet gourmet con ensaladas frescas y platos calientes" },
    { src: "/media/buffet/buffet-3.webp", alt: "Presentación elegante de buffet campestre para matrimonios" },
    { src: "/media/buffet/piqueo-parrilla-4.webp", alt: "Cortes de carne a la parrilla listos para el buffet" },
    { src: "/media/buffet/buffet-2.webp", alt: "Vajilla y montaje ordenado de estación de comida" },
  ],
  piqueo: [
    { src: "/media/piqueos/piqueo-parrilla-8.webp", alt: "Tabla de carnes asadas y piqueos para compartir" },
    { src: "/media/piqueos/piqueo-parrilla-1.webp", alt: "Mesón campestre con empanadas, cortes y salsas" },
    { src: "/media/piqueos/piqueo-parrilla-6.webp", alt: "Parrilla cargada con empanadas y cortes jugosos" },
    { src: "/media/piqueos/piqueo-parrilla-2.webp", alt: "Piqueo parrillero servido en tablas rústicas de madera" },
    { src: "/media/piqueos/piqueo-parrilla-9.webp", alt: "Selección de carnes y embutidos artesanales a las brasas" },
    { src: "/media/piqueos/piqueo-parrilla-3.webp", alt: "Variedad de bocados parrilleros recién preparados" },
  ],
  coctel: [
    { src: "/media/cocteleria/coctel-principal.webp", alt: "Estación de cóctel con bocados finos y bebidas" },
    { src: "/media/cocteleria/coctel-1.webp", alt: "Canapés y bocados servidos para recepción de invitados" },
    { src: "/media/cocteleria/coctel-2-barra.webp", alt: "Barra de bebidas y cócteles preparados al momento" },
    { src: "/media/cocteleria/coctel-4.webp", alt: "Detalle de bocados gourmet para evento corporativo" },
    { src: "/media/cocteleria/coctel-5.webp", alt: "Postres y bocados dulces en formato cóctel" },
  ],
  barra: [
    { src: "/media/cocteleria/coctel-2-barra.webp", alt: "Servicio de barra nocturna con tragos de autor, vinos y cervezas" },
    { src: "/media/cocteleria/coctel-principal.webp", alt: "Estación de bar y bebidas coordinadas para el evento" },
  ],
};

export const produccionMedia = {
  principal: {
    src: "/media/produccion/mobiliario-principal.webp",
    alt: "Montaje integral de mesas de madera rústica y ambientación campestre para eventos",
  },
  carrusel: [
    { src: "/media/produccion/mobiliario-principal.webp", alt: "Comedor campestre con mesas largas de madera e iluminación tenue" },
    { src: "/media/produccion/galeria-montaje.webp", alt: "Montaje exterior de carpa con mesas decoradas para matrimonio" },
    { src: "/media/produccion/ambientacion-tarde.webp", alt: "Atmósfera cálida al atardecer con mobiliario y guirnaldas" },
    { src: "/media/produccion/galeria-1.webp", alt: "Salón campestre iluminado y acondicionado para la celebración" },
  ],
};

export const serviciosAdicionalesMedia = [
  {
    title: "Carpas",
    desc: "Protección para exteriores con montaje y desmontaje incluido.",
    src: "/images/servicio_carpas.png", // Conservada temporalmente
    alt: "Toldo y carpa grande montada para evento en el exterior",
  },
  {
    title: "Generadores",
    desc: "Respaldo eléctrico para eventos en lugares sin conexión o con suministro limitado.",
    src: "/images/servicio_generador.png", // Conservada temporalmente
    alt: "Generador eléctrico para respaldo de energía durante el evento",
  },
  {
    title: "Iluminación",
    desc: "Guirnaldas, focos ambientales y luces dirigidas para definir la atmósfera.",
    src: "/media/eventos/gala-nocturna.webp", // Foto real Fuego de Patio
    alt: "Iluminación nocturna con guirnaldas y luces cálidas para eventos",
  },
  {
    title: "Estufas",
    desc: "Calefacción exterior para eventos en otoño e invierno.",
    src: "/images/servicio_estufas.png", // Conservada temporalmente
    alt: "Estufa de pie para calefacción exterior en eventos",
  },
  {
    title: "Animación",
    desc: "DJ, maestro de ceremonias y conducción para matrimonios y eventos corporativos.",
    src: "/images/servicio_animacion.png", // Conservada temporalmente
    alt: "Animador de bodas animando a los invitados en la pista de baile",
  },
  {
    title: "Mobiliario",
    desc: "Sillas, mesas rectangulares, redondas, tablones rústicos y mesas altas.",
    src: "/media/produccion/mobiliario-principal.webp", // Foto real Fuego de Patio
    alt: "Mesas rústicas de madera y sillas de banquetería instaladas para el banquete",
  },
];

export const tiposEventoMedia = {
  matrimonios: {
    src: "/media/eventos/matrimonio-campo.webp",
    alt: "Matrimonio campestre al aire libre con banquetería y asado a fuego vivo",
  },
  empresas: {
    src: "/media/eventos/empresas-evento.webp",
    alt: "Evento corporativo de empresa con servicio de asados y mesón compartido",
  },
  celebraciones: {
    src: "/media/piqueos/piqueo-parrilla-principal.webp",
    alt: "Celebración familiar en parcela con mesón parrillero y cordero al palo",
  },
};

export const galeriaTrabajo: MediaItem[] = [
  // Fuego y cordero
  {
    src: "/media/cordero/cordero-principal.webp",
    alt: "Cordero al palo tradicional asándose con leña nativa a fuego vivo",
    title: "Cordero al palo tradicional",
    category: "fuego-cordero",
  },
  {
    src: "/media/cordero/cordero-2.webp",
    alt: "Detalle de corte y dorado perfecto del cordero al palo",
    title: "Cocción lenta y dorado a la leña",
    category: "fuego-cordero",
  },
  {
    src: "/media/cordero/cordero-5.webp",
    alt: "Fuego vivo y troncos de leña nativa en la cocción del cordero",
    title: "Fuego vivo con leña nativa",
    category: "fuego-cordero",
  },
  {
    src: "/media/galeria/maestro-asador-fuego.webp",
    alt: "Maestro asador atendiendo las brasas y vigilando la cocción",
    title: "Maestro asador en acción",
    category: "fuego-cordero",
  },
  {
    src: "/media/galeria/servicio-parrilla-directo.webp",
    alt: "Servicio parrillero directo de la plancha al plato del invitado",
    title: "Servicio directo al plato",
    category: "fuego-cordero",
  },

  // Cocina y piqueos
  {
    src: "/media/piqueos/piqueo-parrilla-8.webp",
    alt: "Tabla de carnes seleccionadas y acompañamientos de piqueo",
    title: "Tabla de carnes a la tabla",
    category: "cocina-piqueos",
  },
  {
    src: "/media/piqueos/piqueo-parrilla-1.webp",
    alt: "Mesón campestre con empanadas caseras y carnes a la parrilla",
    title: "Mesón campestre para compartir",
    category: "cocina-piqueos",
  },
  {
    src: "/media/piqueos/piqueo-parrilla-6.webp",
    alt: "Parrilla cargada con empanaditas y cortes asados",
    title: "Parrilla y empanadas criollas",
    category: "cocina-piqueos",
  },
  {
    src: "/media/piqueos/piqueo-parrilla-variado.webp",
    alt: "Cortes de carne jugosos listos para servir en mesón",
    title: "Cortes jugosos a la leña",
    category: "cocina-piqueos",
  },
  {
    src: "/media/galeria/tabla-asado-rustico.webp",
    alt: "Presentación rústica de carnes con chimichurri y pebre",
    title: "Piqueo parrillero rústico",
    category: "cocina-piqueos",
  },

  // Buffet y coctelería
  {
    src: "/media/buffet/buffet-1.webp",
    alt: "Estación de buffet gourmet con ensaladas frescas y guarniciones",
    title: "Buffet gourmet completo",
    category: "buffet-cocteleria",
  },
  {
    src: "/media/cocteleria/coctel-principal.webp",
    alt: "Mesa de recepción con cócteles y bocados para eventos",
    title: "Recepción de cóctel",
    category: "buffet-cocteleria",
  },
  {
    src: "/media/cocteleria/coctel-2-barra.webp",
    alt: "Barra de bebidas con coctelería y vinos seleccionados",
    title: "Servicio de barra y tragos",
    category: "buffet-cocteleria",
  },
  {
    src: "/media/buffet/buffet-3.webp",
    alt: "Montaje de vajilla y estación gastronómica para matrimonios",
    title: "Montaje de buffet campestre",
    category: "buffet-cocteleria",
  },
  {
    src: "/media/cocteleria/coctel-4.webp",
    alt: "Bocados finos para degustación de pie",
    title: "Bocados gourmet de cóctel",
    category: "buffet-cocteleria",
  },

  // Matrimonios y eventos
  {
    src: "/media/eventos/matrimonio-campo.webp",
    alt: "Ceremonia y banquete de matrimonio al aire libre en parcela",
    title: "Matrimonios campestres",
    category: "matrimonios-eventos",
  },
  {
    src: "/media/produccion/mobiliario-principal.webp",
    alt: "Comedor rústico con mesas de madera natural y decoración",
    title: "Mobiliario y decoración campestre",
    category: "matrimonios-eventos",
  },
  {
    src: "/media/produccion/ambientacion-tarde.webp",
    alt: "Atardecer en centro de eventos con guirnaldas y mobiliario",
    title: "Ambientación al atardecer",
    category: "matrimonios-eventos",
  },
  {
    src: "/media/eventos/gala-nocturna.webp",
    alt: "Iluminación cálida y fiesta nocturna para celebraciones",
    title: "Iluminación y ambiente nocturno",
    category: "matrimonios-eventos",
  },
  {
    src: "/media/eventos/empresas-evento.webp",
    alt: "Evento empresarial con comida al aire libre para trabajadores",
    title: "Eventos corporativos y empresas",
    category: "matrimonios-eventos",
  },
];
