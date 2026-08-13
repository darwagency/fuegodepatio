# PLAN DE ÚLTIMOS AJUSTES — DÓNDE INYECTAR EL MATERIAL GRÁFICO

## Objetivo

Integrar de forma selectiva y coherente el material real de **Fuego de Patio** en la landing actual, reemplazando los recursos de referencia ya presentes en `public/images`. La web debe usar fotografías, videos, logotipos, tipografías y colores oficiales sin perjudicar rendimiento, legibilidad, accesibilidad ni conversión.

Este plan se apoya en:

- `CATALOGO_ANALISIS_MATERIAL_GRAFICO.md` para identificar los 72 activos disponibles.
- `copy-landing-fuego-de-patio.md` como única fuente de copy comercial y estructura de encabezados.
- La estructura actual de `src/app/page.tsx`, `src/app/cordero-al-palo/page.tsx`, `src/components` y `src/app/globals.css`.

## Regla principal para el agente

No basta con copiar todos los archivos a `public`: cada activo debe tener un destino editorial concreto. El agente debe usar los mejores recursos visibles para cada bloque, crear una galería progresiva para el resto y descartar duplicados técnicos. No debe publicar muestras de color, el archivo `.ai`, duplicados de logos ni archivos fuente pesados que no aporten al visitante.

La experiencia debe sentirse como una marca de banquetería campestre-premium: fuego, comida preparada a la vista, personas reales, montajes cuidados y ambiente cálido. Evitar una página visualmente saturada, con imágenes repetidas o carruseles innecesarios.

## 1. Inventario, normalización y preparación de assets

### 1.1 Crear una biblioteca pública ordenada

Crear dentro de `public` una estructura estable, con nombres SEO en minúsculas, sin tildes, espacios ni paréntesis:

```text
public/
  brand/
    logo-principal.png
    logo-oscuro.png
    logo-claro.png
    isotipo-fogata.png
    night-zone-regular.otf
    night-zone-italic.ttf
  media/
    hero/
    cordero/
    gastronomia/
    buffet/
    piqueos/
    cocteleria/
    produccion/
    eventos/
    galeria/
    video/
```

Conservar intacta la carpeta original `FUEGO DE PATIO - TODO EL MATERIAL GRAFICO`; funciona como fuente maestra y no se debe renombrar ni modificar.

### 1.2 Imágenes: conversión y tamaños

- Copiar solamente las imágenes que tendrán uso público a la nueva biblioteca.
- Convertir las fotos JPG/PNG fotográficas a **WebP** o **AVIF** y producir variantes responsivas. Mantener PNG únicamente para logos con transparencia e iconos.
- Para cada foto usada en una sección, generar al menos una variante de aproximadamente 640 px, 1280 px y 1920 px de ancho, manteniendo proporción y encuadre.
- No agrandar imágenes pequeñas (640 px o inferiores) como fondo de pantalla completa. Destinarlas a tarjetas, miniaturas o diapositivas secundarias.
- Mantener una relación de aspecto estable por componente para evitar saltos de diseño (CLS). Aplicar `object-fit: cover` y ajustar `object-position` según el sujeto principal.
- No usar la misma imagen en dos lugares prominentes. Una repetición solo se admite dentro de una galería secundaria si el encuadre cuenta otra parte de la historia.

### 1.3 Videos: versiones web seguras

Los seis MP4 son 4K y pesan entre aproximadamente 69 y 160 MB, por lo que **no deben enlazarse ni descargarse en su calidad original desde la landing**.

- Crear versiones web comprimidas en MP4/H.264, con un ancho máximo de 1920 px, audio eliminado para autoplay y duración recortada a 6–12 segundos cuando corresponda.
- Generar una imagen `poster` WebP para cada video. El poster debe ser útil por sí mismo si el video no carga.
- Usar `preload="none"`, `muted`, `playsInline` y `loop` solo en videos decorativos. Nunca iniciar video automáticamente si el usuario tiene `prefers-reduced-motion: reduce`.
- El primer contenido visual del Hero debe seguir siendo una imagen optimizada; el video solo puede realzarlo después de cargar o cuando exista conexión suficiente. No convertir el video en el LCP.
- No mostrar más de un video en reproducción simultánea.

### 1.4 Material que no debe exponerse directamente

- No publicar `logo.ai`, muestras `amarillo.jpg`, `cafe.jpg` ni `colores.jpg`.
- No cargar copias duplicadas de logos: elegir una única copia canónica de cada variante.
- Usar el isotipo para favicon/app icons a partir de un PNG optimizado; no usar una foto como icono.
- Las fotos fuente de alta resolución se conservan fuera de `public` o se usan únicamente para generar derivados optimizados.

## 2. Sistema visual oficial

### 2.1 Paleta a implementar

Revisar `src/app/globals.css` y los tokens de Tailwind existentes para alinear la interfaz a la marca. Los colores oficiales deben quedar centralizados como variables o tokens semánticos:

| Token propuesto | Valor | Uso |
| --- | --- | --- |
| `--brand-gold` | `#DEAA4F` | CTA principal, acentos, etiquetas y foco destacado. |
| `--brand-charcoal` | `#2D2017` | Fondo oscuro, textos principales y overlays. |
| `--brand-ochre` | `#BE9B5B` | Superficies secundarias, bordes suaves y detalles. |
| `--brand-cream` | neutro claro derivado | Fondos cálidos y áreas de lectura. |
| `--brand-white` | `#FFFFFF` | Texto sobre fondo oscuro y contraste. |

Criterios:

- Los CTA deben conservar contraste AA; si el dorado con texto blanco no alcanza contraste, usar texto carbón.
- Evitar negros puros y grises fríos como colores dominantes. Los neutros deben acompañar el café carbón y el ocre.
- Usar overlays carbón semitransparentes sobre fotos cuando haya texto. No aplicar filtros que cambien artificialmente el color de la comida.
- Las galerías deben alternar fondos claros y oscuros de forma intencional; no aplicar el dorado como fondo dominante de secciones extensas.

### 2.2 Tipografías oficiales

- Instalar `Night Zone.otf` y `Night Zone Italic.ttf` desde la carpeta de marca dentro de `public/brand` o mediante una fuente local de Next.js.
- Declarar la fuente con `next/font/local` en `src/app/layout.tsx`, incluyendo peso/estilo correcto, `display: swap` y una variable CSS reutilizable.
- Aplicar Night Zone solo a logotipo textual si hiciera falta, H1, H2, H3, citas y acentos editoriales cortos. No usarla para párrafos extensos, formularios ni navegación pequeña.
- Mantener una sans-serif legible ya disponible en el proyecto para cuerpo, controles y formularios. Evitar cargar una tipografía externa adicional si la fuente de lectura actual cumple el rol.
- Verificar que los caracteres españoles (á, é, í, ó, ú, ñ) se vean correctamente en títulos y que no aparezcan caracteres mal codificados.

## 3. Matriz de inyección por página y sección

### 3.1 Landing: `src/app/page.tsx`

| Bloque actual | Material prioritario | Material de apoyo | Implementación y criterio de aceptación |
| --- | --- | --- | --- |
| Header | `fuego de patio original.png` en superficies claras; `fuego de patio fondo oscuro.png` si el header queda oscuro | `ícono.png` para favicon | El logo se ve nítido, mantiene proporción, no incluye texto alternativo redundante junto al nombre y cambia de variante solo cuando el contraste lo exige. |
| Hero | `cordero principal.jpg` como imagen LCP; alternativa editorial `galeria(4).jpg` (maestro asador) | Poster de `20260214_183755.mp4` y video optimizado como mejora opcional | H1 y CTA deben conservar legibilidad sobre la foto. Priorizar `next/image`, `priority`, `sizes` correctos y una sola imagen de alta prioridad. El video no debe bloquear la carga. |
| Cordero al palo | `cordero(1).jpg` como imagen principal de sección | `cordero.jpg`, `cordero(2).jpg`, `cordero(3).jpg`, `cordero(4).jpg`, `cordero(5).jpg` | Reemplazar el visual único y crear una galería o carrusel manual de máximo 4–5 vistas. Debe verse el fuego, el cordero y el montaje real, sin duplicar el Hero. |
| "Cocinamos frente a tus invitados" | `galeria(4).jpg` (maestro asador) como visual principal | `galeria(6).jpg`, `galeria(2).jpg`, `piqueo parrilla(7).jpg` | Usar fotos de equipo y cocina en vivo, no fotografías de mesas vacías. Carrusel táctil/teclado sin autoplay. |
| Buffet del Asador | `buffet.jpg` como primer visual | `buffet(1).jpg`, `buffet(2).jpg`, `buffet(3).jpg`, `piqueo parrilla(4).jpg`, `piqueo parrilla(5).jpg` | El carrusel muestra comida, montaje y vajilla. La primera diapositiva debe ser clara a tamaño tarjeta; cargar el resto diferido. |
| Piqueo Parrilla | `piqueo parrilla(8).jpg` como primera imagen | `piqueo parrilla(1).jpg`, `(2).jpg`, `(3).jpg`, `(6).jpg`, `(9).jpg`, `piqueo parrilla{.jpg` | Seleccionar 3–4 fotos con producto y servicio. Antes de copiar el archivo con llave, renombrarlo a un nombre válido. No dejar su nombre original público. |
| Cóctel Extendido | `coctel.jpg` como imagen principal | `coctel(1).jpg` a `coctel(5).jpg`, `IMG-20240225-WA0000.jpg`, `IMG-20240225-WA0001.jpg` | Mostrar bebidas y bocados sin reutilizar las fotos del buffet. Reservar verticales para galería mobile o modal; no forzarlas en tarjetas horizontales. |
| Servicio de Barra | `coctel(2).jpg` o `coctel.jpg` según el encuadre | Poster y versión web de `20260711_193111.mp4` | Incorporar una toma nocturna de barra para separar visualmente este servicio del cóctel. El video debe activarse solo en interacción o visibilidad y respetar reducción de movimiento. |
| Producción integral | `mobiliario.jpg` como imagen de composición ancha | `galeria.jpg`, `galeria(1).jpg`, `galeria.png`, `IMG-20240224-WA0068.jpg` | Crear un bloque editorial con foto amplia más 2–3 detalles. Debe comunicar montaje completo: mesas, decoración, iluminación y ambiente. |
| Servicios adicionales | Usar una imagen específica por servicio de `public/images` solo si no existe equivalente profesional | `mobiliario(1).jpg`, `galeria.png`, `buffet(3).jpg` | Mantener las seis tarjetas existentes con imágenes pertinentes. Si las fotos actuales ilustrativas son mejores para carpas/generadores/estufas, conservarlas hasta contar con material real equivalente; no inventar correspondencias. |
| Tipos de evento | Matrimonios: `galeria(3).jpg` o `galeria.jpg`; Empresas: `empresas.jpg`; Celebraciones: `piqueo parrilla.jpg` | `galeria(5).jpg` para galas/cenas nocturnas | Cada tarjeta debe tener una foto real y claramente asociada al tipo de evento. No usar fotos de personas reconocibles como fondo de texto de bajo contraste. |
| Testimonios | `piqueo parrilla(1).jpg` o `piqueo parrilla.jpg` en un bloque visual secundario | Ninguno si resta claridad a las citas | Mantener las citas como contenido principal; la imagen es decorativa y no debe parecer una foto atribuida a un testimonio concreto si no hay confirmación. |
| CTA final y footer | `fuego de patio blanco.png` o `fuego de patio fondo oscuro.png` en fondo carbón | `ícono.png` como detalle decorativo | La marca debe cerrar la página con alto contraste y no repetir un Hero fotográfico adicional. |

### 3.2 Página secundaria: `src/app/cordero-al-palo/page.tsx`

- Usar `cordero.jpg` o `cordero(1).jpg` como portada, el que no haya quedado como imagen LCP en la landing.
- Construir una secuencia visual de preparación: `cordero(5).jpg` (fuego/montaje), `cordero(2).jpg` (detalle del producto), `cordero(3).jpg` y `cordero(4).jpg` (proceso), finalizando con `cordero principal.jpg` o `cordero(1).jpg` si no se duplicó en el primer pliegue.
- Integrar `20260103_151951.mp4` o `20260501_122203.mp4` como demostración opcional dentro de la sección de proceso, nunca como video de fondo.
- La ruta debe mantener su contenido y CTA actuales. No crear afirmaciones comerciales nuevas ni cambiar los textos aprobados.

### 3.3 Galería de trabajo (para absorber el material sin saturar la landing)

Crear una única sección "Galería" hacia el final de la landing, antes del CTA final, o un modal accesible abierto desde "Ver galería". No crear una página secundaria salvo que la navegación existente ya lo justifique.

Orden editorial recomendado:

1. Fuego y cordero: recursos `cordero*` no usados antes.
2. Cocina y piqueos: recursos `piqueo parrilla*` no usados antes.
3. Buffet y coctelería: recursos `buffet*`, `coctel*` e `IMG-*` no usados antes.
4. Matrimonios, eventos y ambientación: `galeria*`, `mobiliario*`, `empresas.jpg` e `IMG-20240224-WA0068.jpg` no usados antes.

Criterios:

- Incluir todas las fotos únicas con calidad suficiente mediante carga diferida y miniaturas. Las versiones duplicadas de logo no cuentan como contenido de galería.
- Usar una cuadrícula responsive o lightbox accesible; no una lista infinita de tarjetas.
- Cada miniatura necesita texto alternativo descriptivo y cada imagen ampliada debe conservar un nombre/leyenda útil. No exponer nombres de archivo crudos.
- El modal debe cerrarse con Escape, tener foco contenido y permitir recorrer imágenes con teclado. Si esto añade complejidad no necesaria, preferir cuadrícula sin modal.

## 4. Integración técnica en Next.js

Antes de editar código, revisar la documentación de la versión instalada en `node_modules/next/dist/docs/` sobre `next/image`, `next/font/local`, metadata y convenciones del App Router, según exige `AGENTS.md`.

- Mantener `next/image` para fotografías. Definir `sizes` realistas y `alt` contextual para cada recurso informativo; usar `alt=""` únicamente para adornos.
- Centralizar las rutas, textos alternativos y focal points en una estructura de datos (por ejemplo, `src/data/media.ts`) para que las galerías y carruseles no dupliquen información.
- Actualizar solamente componentes necesarios. Preservar el comportamiento accesible de `ImageCarousel`, `Carousel`, navegación, formulario y botones.
- Si se usa `<video>`, incluir fallback poster y no introducir librerías de reproducción pesadas.
- Actualizar los metadatos, favicon y `apple-touch-icon` con el isotipo o logo oficial optimizado, sin usar el PNG gigante directamente.
- Confirmar `lang="es-CL"`, título y descripción existentes. La imagen Open Graph puede utilizar una foto real optimizada solo si su composición tiene espacio suficiente para el recorte social; si no, dejar pendiente sin inventar un diseño.

## 5. Secuencia de implementación obligatoria

1. Leer este plan, el catálogo y el copy aprobado antes de modificar archivos.
2. Auditar qué recursos actuales de `public/images` ya son copias o referencias y decidir cuáles se reemplazan, conservan temporalmente o eliminan solo con autorización explícita.
3. Preparar la biblioteca `public/brand` y `public/media`; convertir y optimizar derivados sin tocar los originales.
4. Incorporar tokens de color y fuentes oficiales.
5. Reemplazar primero header, Hero y sección de cordero; comprobar contraste, recorte responsive y LCP.
6. Reemplazar los carruseles gastronómicos y de producción con la matriz anterior.
7. Implementar la galería progresiva para los activos fotográficos restantes.
8. Incorporar videos optimizados solo después de que la versión con imágenes sea rápida y estable.
9. Revisar visualmente toda la landing y `/cordero-al-palo` en 360, 390, 768, 1024 y 1440 px.
10. Ejecutar `npm run lint` y `npm run build`; corregir cualquier problema antes de dar por terminado el trabajo.

## 6. Criterios de aceptación

### Identidad y diseño

- [ ] La paleta visible corresponde a `#DEAA4F`, `#2D2017`, `#BE9B5B` y neutros cálidos derivados.
- [ ] Night Zone está instalada de forma local, se usa con moderación y no afecta la lectura del cuerpo.
- [ ] Los logos se usan en la variante correcta para cada fondo y no se ven estirados, borrosos ni con fondo no deseado.
- [ ] Ninguna sección luce como banco de imágenes o collage sin jerarquía.

### Material gráfico

- [ ] Hero, cordero, gastronomía, buffet, piqueo, cóctel/barra, producción y tipos de evento usan material real pertinente.
- [ ] Las fotografías únicas restantes están disponibles en una galería progresiva o tienen una razón documentada para no publicarse.
- [ ] No se publican archivos de marca internos, muestras de color, fuentes descargables no necesarias ni duplicados técnicos.
- [ ] Las imágenes no repiten el mismo encuadre destacado en más de una sección.
- [ ] Los videos 4K originales no se sirven a visitantes; solo versiones web comprimidas con poster.

### Accesibilidad, rendimiento y calidad

- [ ] Todo texto sobre imagen tiene contraste suficiente o una capa de overlay adecuada.
- [ ] Todos los carruseles, galerías y controles de video son navegables con teclado y respetan `prefers-reduced-motion`.
- [ ] Existe un solo H1 y el copy comercial se conserva literalmente según el archivo aprobado.
- [ ] La primera imagen visible usa `priority`; las demás usan carga diferida.
- [ ] No hay desplazamiento horizontal, errores de consola, errores de TypeScript ni advertencias de hidratación.
- [ ] `npm run lint` y `npm run build` finalizan correctamente.
- [ ] La revisión visual confirma que fotos, textos, CTAs, logotipo y formularios se ven correctamente en los cinco anchos definidos.

## 7. Decisiones que deben quedar explícitas en la entrega

El informe final del agente debe indicar:

1. Qué archivos fuente se utilizaron y cuál es la ruta pública final de cada derivado.
2. Qué imágenes actuales se conservaron de forma temporal por no tener un reemplazo real equivalente (por ejemplo, carpas, generadores o estufas).
3. Qué fotos se excluyeron por ser duplicadas, técnicas, demasiado pequeñas o no adecuadas para web.
4. Tamaño/formato final de cada video web y en qué sección se utiliza.
5. Resultado de lint, build y revisión responsive.

No declarar terminado el trabajo si se copiaron archivos sin optimización, se rompió el diseño existente, se alteró copy aprobado o no se verificó la web en navegador.
