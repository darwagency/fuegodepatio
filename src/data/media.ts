export type GalleryCategory =
  | "fuego-cordero"
  | "cocina-piqueos"
  | "buffet-cocteleria"
  | "matrimonios-eventos";

export interface MediaItem {
  src: string;
  alt: string;
  title?: string;
  category?: GalleryCategory;
  aspectRatio?: string;
}

export interface VideoItem {
  src: string;
  poster: string;
  title: string;
  description: string;
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

export const videoReel: VideoItem[] = [
  {
    src: "/media/video/cordero-fuego-vivo.mp4",
    poster: "/media/video/cordero-fuego-vivo.jpg",
    title: "Cordero a la cruz",
    description: "Cordero al palo cocinado a fuego vivo.",
  },
  {
    src: "/media/video/fuego-atardecer.mp4",
    poster: "/media/video/fuego-atardecer.jpg",
    title: "Fuego al atardecer",
    description: "El montaje cobra vida antes de recibir a los invitados.",
  },
  {
    src: "/media/video/fogones-noche.mp4",
    poster: "/media/video/fogones-noche.jpg",
    title: "Fogones de noche",
    description: "Una celebración iluminada por fuego y guirnaldas.",
  },
  {
    src: "/media/video/asador-accion.mp4",
    poster: "/media/video/asador-accion.jpg",
    title: "Asador en acción",
    description: "Cortes servidos directo desde la parrilla.",
  },
  {
    src: "/media/video/parrilla-detalle.mp4",
    poster: "/media/video/parrilla-detalle.jpg",
    title: "Detalle de parrilla",
    description: "El fuego y los cortes en su punto.",
  },
  {
    src: "/media/video/barra-nocturna.mp4",
    poster: "/media/video/barra-nocturna.jpg",
    title: "Barra nocturna",
    description: "La barra acompaña el momento de celebración.",
  },
];

export const corderoMedia = {
  principal: {
    src: "/media/cordero/cordero-1.webp",
    alt: "Cordero al palo dorado a fuego vivo con leña nativa en un evento campestre",
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
    { src: "/media/cordero/cordero-4.webp", alt: "Punto de cocción del cordero al palo" },
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
    key: "carpas",
    title: "Carpas",
    desc: "Protección para exteriores con montaje y desmontaje incluido.",
    src: "/images/servicio_carpas.png",
    alt: "Toldo y carpa grande montada para evento en el exterior",
  },
  {
    key: "generadores",
    title: "Generadores",
    desc: "Respaldo eléctrico para eventos en lugares sin conexión o con suministro limitado.",
    src: "/images/servicio_generador.png",
    alt: "Generador eléctrico para respaldo de energía durante el evento",
  },
  {
    key: "iluminacion",
    title: "Iluminación",
    desc: "Guirnaldas, focos ambientales y luces dirigidas para definir la atmósfera.",
    src: "/media/eventos/gala-nocturna.webp",
    alt: "Iluminación nocturna con guirnaldas y luces cálidas para eventos",
  },
  {
    key: "estufas",
    title: "Estufas",
    desc: "Calefacción exterior para eventos en otoño e invierno.",
    src: "/media/servicios/estufas-evento.webp",
    alt: "Estufa exterior encendida durante una celebración nocturna",
    objectPosition: "50% 28%",
  },
  {
    key: "animacion",
    title: "Animación",
    desc: "DJ, maestro de ceremonias y conducción para matrimonios y eventos corporativos.",
    src: "/images/servicio_animacion.png",
    alt: "Animador de bodas animando a los invitados en la pista de baile",
  },
  {
    key: "mobiliario",
    title: "Mobiliario",
    desc: "Sillas, mesas, tablones rústicos y mesas altas.",
    src: "/media/produccion/mobiliario-principal.webp",
    alt: "Mesas rústicas de madera y sillas de banquetería instaladas para el banquete",
  },
] as const;

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
  { src: "/media/cordero/cordero-principal.webp", alt: "Cordero al palo asándose a fuego vivo", title: "Cordero al palo", category: "fuego-cordero" },
  { src: "/media/cordero/cordero-1.webp", alt: "Cordero dorado frente a las brasas", title: "Cocción a la leña", category: "fuego-cordero" },
  { src: "/media/cordero/cordero-2.webp", alt: "Detalle del dorado del cordero", title: "Dorado y crocante", category: "fuego-cordero" },
  { src: "/media/cordero/cordero-3.webp", alt: "Asador controlando las brasas del cordero", title: "Control del fuego", category: "fuego-cordero" },
  { src: "/media/cordero/cordero-4.webp", alt: "Cordero al palo en su punto", title: "En su punto", category: "fuego-cordero" },
  { src: "/media/cordero/cordero-5.webp", alt: "Fuego y troncos de leña nativa", title: "Fuego vivo", category: "fuego-cordero" },
  { src: "/media/cordero/cordero-portada.webp", alt: "Cordero al palo preparado al aire libre", title: "Servicio al aire libre", category: "fuego-cordero" },
  { src: "/media/cordero/cordero-corte.webp", alt: "Corte de cordero servido", title: "Corte y servicio", category: "fuego-cordero" },
  { src: "/media/hero/maestro-asador.webp", alt: "Maestro asador junto a la parrilla", title: "Maestro asador", category: "fuego-cordero" },
  { src: "/media/hero/cordero-principal.webp", alt: "Cordero y fuego en evento de Fuego de Patio", title: "El fuego al centro", category: "fuego-cordero" },

  { src: "/media/gastronomia/maestro-asador-principal.webp", alt: "Asador preparando carnes frente a los invitados", title: "Cocina en vivo", category: "cocina-piqueos" },
  { src: "/media/gastronomia/galeria-6.webp", alt: "Servicio directo desde la parrilla", title: "Directo al plato", category: "cocina-piqueos" },
  { src: "/media/gastronomia/parrilla-equipo.webp", alt: "Parrilla profesional con cortes", title: "Parrilla profesional", category: "cocina-piqueos" },
  { src: "/media/gastronomia/galeria-2.webp", alt: "Equipo de parrilleros trabajando", title: "Equipo de cocina", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-principal.webp", alt: "Piqueos servidos en mesón campestre", title: "Piqueo de la casa", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-variado.webp", alt: "Carnes y acompañamientos a la parrilla", title: "Variedad a la parrilla", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-1.webp", alt: "Mesón con empanadas y carnes", title: "Mesón para compartir", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-2.webp", alt: "Piqueo servido en tablas de madera", title: "Tablas rústicas", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-3.webp", alt: "Bocados parrilleros recién preparados", title: "Bocados calientes", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-6.webp", alt: "Parrilla con empanadas y cortes", title: "Parrilla y empanadas", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-8.webp", alt: "Tabla de carnes para compartir", title: "Tabla de carnes", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-9.webp", alt: "Carnes y embutidos a las brasas", title: "Selección a las brasas", category: "cocina-piqueos" },
  { src: "/media/piqueos/piqueo-parrilla-10.webp", alt: "Piqueos parrilleros listos para servir", title: "Piqueos al fuego", category: "cocina-piqueos" },

  { src: "/media/buffet/buffet-principal.webp", alt: "Buffet con cortes y acompañamientos", title: "Buffet del asador", category: "buffet-cocteleria" },
  { src: "/media/buffet/buffet-1.webp", alt: "Buffet con ensaladas y guarniciones", title: "Buffet completo", category: "buffet-cocteleria" },
  { src: "/media/buffet/buffet-2.webp", alt: "Vajilla y estación de comida", title: "Montaje de buffet", category: "buffet-cocteleria" },
  { src: "/media/buffet/buffet-3.webp", alt: "Buffet para matrimonio campestre", title: "Buffet de celebración", category: "buffet-cocteleria" },
  { src: "/media/buffet/piqueo-parrilla-4.webp", alt: "Cortes de carne listos para el buffet", title: "Cortes a la parrilla", category: "buffet-cocteleria" },
  { src: "/media/buffet/piqueo-parrilla-5.webp", alt: "Preparación parrillera para buffet", title: "Estación de fuego", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-principal.webp", alt: "Estación de cóctel con bebidas", title: "Recepción de cóctel", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-1.webp", alt: "Canapés para recepción", title: "Bocados de bienvenida", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-2-barra.webp", alt: "Barra de bebidas para evento", title: "Barra y tragos", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-3.webp", alt: "Detalle de coctelería", title: "Coctelería", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-4.webp", alt: "Bocados gourmet de cóctel", title: "Bocados gourmet", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-5.webp", alt: "Bocados dulces de cóctel", title: "Dulces y postres", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-wa-0.webp", alt: "Preparación de cóctel para invitados", title: "Preparación de barra", category: "buffet-cocteleria" },
  { src: "/media/cocteleria/coctel-wa-1.webp", alt: "Servicio de cóctel de Fuego de Patio", title: "Servicio de cóctel", category: "buffet-cocteleria" },

  { src: "/media/produccion/mobiliario-principal.webp", alt: "Mobiliario rústico en montaje de evento", title: "Mobiliario y mesas", category: "matrimonios-eventos" },
  { src: "/media/produccion/mobiliario-1.webp", alt: "Detalle de mobiliario para banquete", title: "Detalles de montaje", category: "matrimonios-eventos" },
  { src: "/media/produccion/galeria-montaje.webp", alt: "Carpa montada para matrimonio", title: "Carpas y producción", category: "matrimonios-eventos" },
  { src: "/media/produccion/galeria-detalle.webp", alt: "Detalle de decoración de evento", title: "Decoración", category: "matrimonios-eventos" },
  { src: "/media/produccion/galeria-1.webp", alt: "Salón preparado para celebración", title: "Espacio preparado", category: "matrimonios-eventos" },
  { src: "/media/produccion/ambientacion-tarde.webp", alt: "Ambientación de tarde con guirnaldas", title: "Atmósfera al atardecer", category: "matrimonios-eventos" },
  { src: "/media/eventos/matrimonio-campo.webp", alt: "Matrimonio campestre al aire libre", title: "Matrimonio campestre", category: "matrimonios-eventos" },
  { src: "/media/eventos/empresas-evento.webp", alt: "Evento de empresa con banquetería", title: "Eventos de empresa", category: "matrimonios-eventos" },
  { src: "/media/eventos/evento-principal.webp", alt: "Celebración atendida por Fuego de Patio", title: "Celebraciones", category: "matrimonios-eventos" },
  { src: "/media/eventos/gala-nocturna.webp", alt: "Evento nocturno iluminado", title: "Noche de celebración", category: "matrimonios-eventos" },
];
