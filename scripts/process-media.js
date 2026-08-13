/* eslint-disable */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = process.cwd();
const masterDir = path.join(rootDir, 'FUEGO DE PATIO - TODO EL MATERIAL GRAFICO', 'FUEGO DE PATIO');
const brandSourceDir = path.join(masterDir, 'FUEGO DE PATIO - BRAND');

// 1. Create directory structure
const dirsToCreate = [
  'public/brand',
  'public/media/hero',
  'public/media/cordero',
  'public/media/gastronomia',
  'public/media/buffet',
  'public/media/piqueos',
  'public/media/cocteleria',
  'public/media/produccion',
  'public/media/eventos',
  'public/media/galeria',
  'public/media/video',
];

for (const d of dirsToCreate) {
  const fullPath = path.join(rootDir, d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log('Created dir:', d);
  }
}

// 2. Copy Fonts & Brand Logos
const fontRegularSrc = path.join(brandSourceDir, 'tipografia', 'Night Zone.otf');
const fontItalicSrc = path.join(brandSourceDir, 'tipografia', 'Night Zone Italic.ttf');
fs.copyFileSync(fontRegularSrc, path.join(rootDir, 'public/brand/night-zone-regular.otf'));
fs.copyFileSync(fontItalicSrc, path.join(rootDir, 'public/brand/night-zone-italic.ttf'));
console.log('Copied fonts successfully.');

const pngBrandDir = path.join(brandSourceDir, 'png');
fs.copyFileSync(path.join(pngBrandDir, 'ícono.png'), path.join(rootDir, 'public/brand/isotipo-fogata.png'));

async function processBrandLogo(sourceName, destinationName) {
  await sharp(path.join(pngBrandDir, sourceName))
    .trim()
    .png()
    .toFile(path.join(rootDir, 'public/brand', destinationName));
}

async function processImage(srcFile, destRelativePath, maxWidth = 1920, quality = 85) {
  const destPath = path.join(rootDir, destRelativePath);
  const info = await sharp(srcFile)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destPath);
  console.log('Processed:', destRelativePath, info.width + 'x' + info.height, (info.size/1024).toFixed(1) + ' KB');
  return info;
}

async function run() {
  await Promise.all([
    processBrandLogo('fuego de patio original.png', 'logo-principal.png'),
    processBrandLogo('fuego de patio fondo oscuro.png', 'logo-oscuro.png'),
    processBrandLogo('fuego de patio blanco.png', 'logo-claro.png'),
  ]);
  console.log('Processed brand logos.');

  // Hero
  await processImage(path.join(masterDir, 'hero-asador-adjunto.jpg'), 'public/media/hero/asador-parrilla-principal.webp', 1080, 84);
  await processImage(path.join(masterDir, 'cordero principal.jpg'), 'public/media/hero/cordero-principal.webp', 1920, 88);
  await processImage(path.join(masterDir, 'galeria(4).jpg'), 'public/media/hero/maestro-asador.webp', 1920, 88);

  // Cordero
  await processImage(path.join(masterDir, 'cordero(1).jpg'), 'public/media/cordero/cordero-1.webp', 1600, 85);
  await processImage(path.join(masterDir, 'cordero.jpg'), 'public/media/cordero/cordero-portada.webp', 1600, 85);
  await processImage(path.join(masterDir, 'cordero(2).jpg'), 'public/media/cordero/cordero-2.webp', 1600, 85);
  await processImage(path.join(masterDir, 'cordero(3).jpg'), 'public/media/cordero/cordero-3.webp', 800, 85);
  await processImage(path.join(masterDir, 'cordero(4).jpg'), 'public/media/cordero/cordero-4.webp', 800, 85);
  await processImage(path.join(masterDir, 'cordero(5).jpg'), 'public/media/cordero/cordero-5.webp', 960, 85);
  await processImage(path.join(masterDir, 'cordero principal.jpg'), 'public/media/cordero/cordero-principal.webp', 1600, 85);
  await processImage(path.join(masterDir, 'cordero(1).png'), 'public/media/cordero/cordero-corte.webp', 708, 85);

  // Gastronomia
  await processImage(path.join(masterDir, 'galeria(4).jpg'), 'public/media/gastronomia/maestro-asador-principal.webp', 1600, 85);
  await processImage(path.join(masterDir, 'galeria(6).jpg'), 'public/media/gastronomia/galeria-6.webp', 1600, 85);
  await processImage(path.join(masterDir, 'galeria(2).jpg'), 'public/media/gastronomia/galeria-2.webp', 800, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(7).jpg'), 'public/media/gastronomia/parrilla-equipo.webp', 1600, 85);

  // Buffet
  await processImage(path.join(masterDir, 'buffet.jpg'), 'public/media/buffet/buffet-principal.webp', 800, 85);
  await processImage(path.join(masterDir, 'buffet(1).jpg'), 'public/media/buffet/buffet-1.webp', 1200, 85);
  await processImage(path.join(masterDir, 'buffet(2).jpg'), 'public/media/buffet/buffet-2.webp', 800, 85);
  await processImage(path.join(masterDir, 'buffet(3).jpg'), 'public/media/buffet/buffet-3.webp', 1080, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(4).jpg'), 'public/media/buffet/piqueo-parrilla-4.webp', 1400, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(5).jpg'), 'public/media/buffet/piqueo-parrilla-5.webp', 1400, 85);

  // Piqueos
  await processImage(path.join(masterDir, 'piqueo parrilla(8).jpg'), 'public/media/piqueos/piqueo-parrilla-8.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(1).jpg'), 'public/media/piqueos/piqueo-parrilla-1.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(2).jpg'), 'public/media/piqueos/piqueo-parrilla-2.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(3).jpg'), 'public/media/piqueos/piqueo-parrilla-3.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(6).jpg'), 'public/media/piqueos/piqueo-parrilla-6.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(9).jpg'), 'public/media/piqueos/piqueo-parrilla-9.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla.jpg'), 'public/media/piqueos/piqueo-parrilla-principal.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla{.jpg'), 'public/media/piqueos/piqueo-parrilla-variado.webp', 1600, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(10).jpg'), 'public/media/piqueos/piqueo-parrilla-10.webp', 800, 85);

  // Cocteleria
  await processImage(path.join(masterDir, 'coctel.jpg'), 'public/media/cocteleria/coctel-principal.webp', 1600, 85);
  await processImage(path.join(masterDir, 'coctel(1).jpg'), 'public/media/cocteleria/coctel-1.webp', 1600, 85);
  await processImage(path.join(masterDir, 'coctel(2).jpg'), 'public/media/cocteleria/coctel-2-barra.webp', 1600, 85);
  await processImage(path.join(masterDir, 'coctel(3).jpg'), 'public/media/cocteleria/coctel-3.webp', 640, 85);
  await processImage(path.join(masterDir, 'coctel(4).jpg'), 'public/media/cocteleria/coctel-4.webp', 960, 85);
  await processImage(path.join(masterDir, 'coctel(5).jpg'), 'public/media/cocteleria/coctel-5.webp', 960, 85);
  await processImage(path.join(masterDir, 'IMG-20240225-WA0000.jpg'), 'public/media/cocteleria/coctel-wa-0.webp', 720, 85);
  await processImage(path.join(masterDir, 'IMG-20240225-WA0001.jpg'), 'public/media/cocteleria/coctel-wa-1.webp', 720, 85);

  // Produccion
  await processImage(path.join(masterDir, 'mobiliario.jpg'), 'public/media/produccion/mobiliario-principal.webp', 1600, 85);
  await processImage(path.join(masterDir, 'mobiliario(1).jpg'), 'public/media/produccion/mobiliario-1.webp', 800, 85);
  await processImage(path.join(masterDir, 'galeria.jpg'), 'public/media/produccion/galeria-montaje.webp', 1600, 85);
  await processImage(path.join(masterDir, 'galeria(1).jpg'), 'public/media/produccion/galeria-1.webp', 1600, 85);
  await processImage(path.join(masterDir, 'galeria.png'), 'public/media/produccion/galeria-detalle.webp', 800, 85);
  await processImage(path.join(masterDir, 'IMG-20240224-WA0068.jpg'), 'public/media/produccion/ambientacion-tarde.webp', 1280, 85);

  // Eventos
  await processImage(path.join(masterDir, 'galeria(3).jpg'), 'public/media/eventos/matrimonio-campo.webp', 1600, 85);
  await processImage(path.join(masterDir, 'empresas.jpg'), 'public/media/eventos/empresas-evento.webp', 800, 85);
  await processImage(path.join(masterDir, 'galeria(5).jpg'), 'public/media/eventos/gala-nocturna.webp', 1600, 85);
  await processImage(path.join(masterDir, 'principal.jpg'), 'public/media/eventos/evento-principal.webp', 1080, 85);

  // Additional Galeria Unique Photos
  await processImage(path.join(masterDir, 'galeria(4).jpg'), 'public/media/galeria/maestro-asador-fuego.webp', 1400, 85);
  await processImage(path.join(masterDir, 'galeria(6).jpg'), 'public/media/galeria/servicio-parrilla-directo.webp', 1400, 85);
  await processImage(path.join(masterDir, 'galeria(3).jpg'), 'public/media/galeria/montaje-matrimonio-campo.webp', 1400, 85);
  await processImage(path.join(masterDir, 'galeria(5).jpg'), 'public/media/galeria/ambiente-nocturno-velas.webp', 1400, 85);
  await processImage(path.join(masterDir, 'cordero(2).jpg'), 'public/media/galeria/detalle-cordero-dorado.webp', 1400, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(6).jpg'), 'public/media/galeria/piqueo-parrilla-completo.webp', 1400, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(7).jpg'), 'public/media/galeria/cortes-carne-servidos.webp', 1400, 85);
  await processImage(path.join(masterDir, 'piqueo parrilla(9).jpg'), 'public/media/galeria/tabla-asado-rustico.webp', 1400, 85);
  await processImage(path.join(masterDir, 'coctel(2).jpg'), 'public/media/galeria/estacion-bebidas-cocteleria.webp', 1400, 85);
  await processImage(path.join(masterDir, 'mobiliario.jpg'), 'public/media/galeria/montaje-mesas-madera.webp', 1400, 85);
  await processImage(path.join(masterDir, 'IMG-20240224-WA0068.jpg'), 'public/media/galeria/decoracion-campestre-atardecer.webp', 1280, 85);
  await processImage(path.join(masterDir, 'buffet(1).jpg'), 'public/media/galeria/buffet-ensaladas-acompanamientos.webp', 1200, 85);

  // Favicon & Icons
  await sharp(path.join(pngBrandDir, 'ícono.png')).resize(192, 192).png().toFile(path.join(rootDir, 'public/icon.png'));
  await sharp(path.join(pngBrandDir, 'ícono.png')).resize(180, 180).png().toFile(path.join(rootDir, 'public/apple-touch-icon.png'));
  console.log('Updated icon.png and apple-touch-icon.png');
}

run().catch(console.error);
