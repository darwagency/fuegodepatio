# Instrucciones para desarrollar la landing page de Fuego de Patio

## 1. Objetivo

Desarrolla una landing page moderna, rápida y orientada a la conversión para Fuego de Patio, una empresa de banquetería y producción de eventos de la Región del Biobío.

El resultado debe transmitir calidad, orden y confianza. La página debe facilitar que una persona entienda el servicio, encuentre una propuesta adecuada y solicite una cotización, especialmente desde un teléfono móvil.

No conviertas la landing en una página extensa de bloques apilados. Todo el contenido indicado debe estar disponible, pero debes organizarlo con recursos como carruseles manuales, tarjetas horizontales, agrupaciones visuales y revelado progresivo cuando corresponda.

## 2. Fuente de contenido obligatoria

Usa exclusivamente como fuente de contenido público el archivo:

`copy-landing-fuego-de-patio.md`

### Reglas estrictas sobre el copy

1. Respeta los textos de `copy-landing-fuego-de-patio.md` al pie de la letra.
2. No reescribas, resumas, corrijas, amplíes ni reemplaces ninguna frase.
3. No inventes eslóganes, beneficios, estadísticas, testimonios, preguntas frecuentes ni llamados a la acción.
4. No elimines contenido público para acortar visualmente la página. Optimiza su presentación mediante composición, carruseles y agrupación.
5. Las etiquetas `[H1]`, `[H2]`, `[H3]` y `[H4]` son instrucciones editoriales. No deben mostrarse en la web.
6. Implementa cada título con el elemento HTML que indica su etiqueta: `h1`, `h2`, `h3` o `h4`.
7. Debe existir un solo `h1` en toda la página.
8. Mantén el orden y la jerarquía de los encabezados. No saltes niveles.
9. Los textos `CTA principal`, `CTA secundario`, `CTA alternativo` y `CTA` son indicaciones de función. No muestres esas etiquetas; muestra únicamente el texto que aparece después de ellas dentro del botón o enlace correspondiente.
10. La indicación `Respaldo breve` tampoco debe mostrarse como texto. Presenta solamente sus tres datos.
11. No publiques el bloque `Notas editoriales internas` ni ninguno de sus contenidos. Es material de trabajo.
12. La nota inicial `Uso del documento` tampoco forma parte de la landing.
13. Los atributos técnicos de accesibilidad, como `aria-label`, pueden redactarse cuando sean necesarios, pero no deben introducir nuevo copy comercial visible.

Antes de programar, clasifica internamente el contenido del Markdown en:

- Texto público visible.
- Etiquetas de implementación que deben retirarse.
- Notas editoriales que no deben publicarse.

## 3. Stack técnico obligatorio

Usa las versiones estables más recientes disponibles al momento de comenzar. No uses versiones `canary`, `preview`, `beta`, `alpha`, `rc` ni `insiders`.

Versiones estables verificadas el 15 de julio de 2026:

- Next.js `16.2.10`.
- Tailwind CSS `4.3.2`.
- App Router.
- React compatible con la versión estable de Next.js elegida.
- TypeScript con modo estricto.
- ESLint.
- npm como gestor de paquetes, salvo que el repositorio ya esté configurado de manera consistente con otro gestor.

Si el trabajo comienza en una fecha posterior, consulta los canales oficiales `latest` y utiliza una versión estable igual o superior. Registra en el informe final las versiones efectivamente instaladas.

### Inicialización

Primero inspecciona el directorio. Si ya existe una aplicación Next.js, no vuelvas a crearla. Si solo existen los archivos Markdown de contenido, consérvalos y crea el proyecto en el mismo repositorio sin sobrescribirlos.

Comando de referencia para las versiones verificadas:

```bash
npx create-next-app@16.2.10 . --yes --force --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm
```

Confirma posteriormente que `package.json` use Next.js `16.2.10` y Tailwind CSS `4.3.2`, o versiones estables posteriores si la implementación se realiza en otra fecha.

### Arquitectura técnica

- Usa Server Components por defecto.
- Limita `'use client'` a carruseles, navegación móvil u otras interacciones que realmente lo requieran.
- No conviertas toda la página en un Client Component.
- Usa componentes pequeños y reutilizables para encabezado, botones, contenedores, tarjetas, carruseles, placeholders y secciones.
- Evita dependencias innecesarias. Si una interacción puede resolverse de forma accesible con CSS y una pequeña cantidad de React, no instales una librería pesada.
- No agregues un CMS, una base de datos ni autenticación.
- No implementes una API o un backend para el formulario sin que se solicite expresamente.
- La landing debe poder generarse principalmente como contenido estático.

## 4. Dirección visual

La web debe sentirse contemporánea, cuidada y profesional. Evita que parezca una plantilla genérica de restaurante, una web recargada o una interfaz administrativa.

### Paleta obligatoria

- Naranjo principal: `#E8621A`.
- Beige de fondo: `#FAF3E0`.
- Rojo oscuro, casi negro: `#0D0700`.

Define estos colores como variables o tokens globales y úsalos de forma consistente.

Distribución recomendada:

- `#FAF3E0` como fondo principal y superficie clara.
- `#0D0700` para texto principal, encabezado, pie de página y secciones oscuras.
- `#E8621A` para llamadas a la acción, estados activos, detalles gráficos y acentos puntuales.
- En botones naranjos, usa texto `#0D0700` si ofrece mejor contraste.
- Sobre fondos oscuros, usa `#FAF3E0` para el texto.
- No uses el naranjo como color de párrafos largos ni como fondo de grandes extensiones.
- No agregues otros colores dominantes. Solo se permiten variaciones de opacidad o tonos neutros derivados para bordes y estados.

### Tipografía

- Usa `next/font` para evitar saltos de diseño y solicitudes externas innecesarias.
- Usa un máximo de dos familias tipográficas.
- Puedes combinar una tipografía de títulos con personalidad sobria y una sans serif muy legible para cuerpo e interfaz.
- Prioriza legibilidad, caracteres en español y buen rendimiento por encima del efecto decorativo.
- No uses tipografías que imiten escritura manual, madera, western o fuego.

### Estilo de interfaz

- Usa espacios amplios, ritmo vertical controlado y una retícula consistente.
- Utiliza bordes, radios y sombras con moderación.
- Evita degradados excesivos, efectos de brillo, texturas artificiales de fuego y animaciones decorativas constantes.
- No satures la interfaz con íconos.
- Queda prohibido saturar la web con emojis. No agregues emojis al contenido ni los uses como sustitutos de iconos.
- Si necesitas iconos funcionales, utiliza una colección coherente de SVG livianos y accesibles.
- Las animaciones deben ser breves, sutiles y respetar `prefers-reduced-motion`.

## 5. Enfoque mobile first

Diseña primero para un ancho aproximado de 360 a 390 píxeles y luego amplía progresivamente para tablet y escritorio.

### Requisitos móviles

- El mensaje principal, la ubicación, el servicio y el CTA deben entenderse en la primera pantalla o con un desplazamiento mínimo.
- Usa botones con una altura táctil mínima de 44 píxeles.
- Evita textos demasiado pequeños, columnas estrechas y bloques de párrafos excesivamente anchos.
- El menú móvil debe ser compacto, accesible y fácil de cerrar.
- Considera una barra inferior o CTA flotante discreto para cotizar, siempre que no cubra contenido ni compita con otros controles.
- Evita apilar verticalmente todas las tarjetas de menús, servicios y testimonios.
- En móvil, usa carruseles manuales con desplazamiento horizontal y `scroll-snap` para los grupos repetitivos.
- Muestra parte de la siguiente tarjeta cuando ayude a comunicar que existe contenido desplazable.
- No uses reproducción automática en carruseles.
- Permite gestos táctiles, teclado y controles visibles cuando sean necesarios.
- No escondas información esencial únicamente detrás de `hover`.
- En escritorio, convierte los carruseles en retículas cuando haya espacio suficiente y mejore la lectura.

### Cómo evitar una landing interminable

- Menús gastronómicos: carrusel manual en móvil y retícula de hasta cuatro columnas en escritorio.
- Servicios adicionales: carrusel compacto en móvil y retícula de tres columnas en escritorio.
- Tipos de evento: carrusel o grupo de tarjetas horizontales en móvil; tres columnas en escritorio.
- Testimonios: carrusel manual, sin reproducción automática. Muestra un testimonio por vez en móvil y hasta tres en escritorio.
- Métricas del hero: fila compacta, sin convertir cada cifra en una tarjeta grande.
- Proceso de cotización: tres pasos breves y visualmente conectados.
- Usa cambios de fondo y composición para separar secciones sin añadir texto decorativo.
- No ocultes el contenido público del Markdown de forma permanente. Todo debe poder encontrarse y leerse con controles accesibles.

## 6. Arquitectura visual recomendada

Respeta el orden editorial de `copy-landing-fuego-de-patio.md`. La siguiente lista define una posible presentación visual, no autoriza cambios en los textos ni en la jerarquía de títulos.

1. Encabezado compacto con identidad de Fuego de Patio, navegación por anclas y CTA de cotización.
2. Hero con H1, párrafos, CTA principal, CTA secundario, placeholder de imagen y métricas de respaldo.
3. Introducción y razones para elegir Fuego de Patio.
4. Propuestas gastronómicas en carrusel móvil y retícula de escritorio.
5. Sección destacada de cordero al palo con composición de imagen y texto.
6. Producción integral con lista clara de servicios.
7. Servicios adicionales en carrusel móvil y retícula de escritorio.
8. Servicios según el tipo de evento.
9. Testimonios en carrusel manual.
10. Proceso de cotización en tres pasos.
11. CTA final.
12. Contacto y pie de página.

La navegación debe usar enlaces de ancla hacia bloques relevantes. No agregues páginas secundarias ficticias.

## 7. Imágenes y placeholders obligatorios

No hay fotografías disponibles. No descargues imágenes genéricas de internet, no uses servicios de imágenes aleatorias y no inventes fotografías con IA.

En cada lugar donde debería existir una imagen, crea un placeholder visual intencional que respete la composición final. El placeholder debe incluir dentro un texto descriptivo breve que indique qué fotografía debe incorporarse.

Los textos de los placeholders son instrucciones temporales de producción y no se consideran copy comercial. Identifícalos claramente con el prefijo `PLACEHOLDER DE IMAGEN`.

Incluye, como mínimo, placeholders para:

- `PLACEHOLDER DE IMAGEN — Hero: parrilla a fuego vivo durante un evento real, con el equipo trabajando y los invitados al fondo.`
- `PLACEHOLDER DE IMAGEN — Buffet del Asador: distintos cortes servidos junto a acompañamientos y presentación completa.`
- `PLACEHOLDER DE IMAGEN — Piqueo Parrilla: mesón campestre con preparaciones para compartir.`
- `PLACEHOLDER DE IMAGEN — Cóctel Extendido: bocados servidos en un evento de pie con presentación cuidada.`
- `PLACEHOLDER DE IMAGEN — Servicio de Barra: barra montada durante un matrimonio o evento corporativo.`
- `PLACEHOLDER DE IMAGEN — Cordero al palo: preparación completa frente al fuego en el lugar del evento.`
- `PLACEHOLDER DE IMAGEN — Producción integral: vista amplia de un matrimonio montado con mesas, iluminación y zona gastronómica.`
- `PLACEHOLDER DE IMAGEN — Servicios adicionales: montaje real de carpa, iluminación o mobiliario.`

### Diseño de los placeholders

- Usa un bloque con relación de aspecto definida para evitar cambios de diseño futuros.
- Diferencia el placeholder del contenido final mediante borde discontinuo y una etiqueta discreta.
- Usa la paleta de la marca; no incorpores colores ajenos.
- El texto debe ser legible, pero no debe competir visualmente con el copy real.
- Centraliza los datos de cada placeholder para que luego puedan reemplazarse fácilmente por componentes `Image` de Next.js.
- Cuando se incorporen imágenes reales, usa `next/image`, dimensiones explícitas, `sizes`, formatos optimizados y textos alternativos descriptivos.
- La futura imagen principal debe configurarse con prioridad solo si efectivamente es el elemento LCP.

## 8. Conversión y enlaces

- Todos los CTA equivalentes a cotizar deben llevar a un punto de contacto funcional.
- Usa el número publicado en el Markdown para crear el enlace de WhatsApp: `https://wa.me/56965252532`.
- El enlace de correo debe usar `mailto:fuego.de.patio@gmail.com`.
- El teléfono debe usar `tel:+56965252532`.
- No inventes perfiles, URLs, horarios, precios ni condiciones comerciales.
- Si el usuario debe elegir un menú o servicio, el CTA puede abrir WhatsApp con un mensaje prellenado que use únicamente el nombre exacto de ese menú o servicio y una frase funcional mínima. No agregues nuevas promesas comerciales.
- No construyas un formulario que simule enviar información si no existe un destino real.
- Los botones deben tener estados de foco, hover, active y disabled claramente distinguibles.

## 9. Semántica y accesibilidad

- Usa regiones semánticas: `header`, `nav`, `main`, `section` y `footer`.
- Asocia cada `section` con su encabezado mediante `aria-labelledby` cuando resulte útil.
- Conserva estrictamente la jerarquía H1–H4 definida en el Markdown.
- No utilices encabezados solo para aumentar el tamaño visual de un texto.
- Incluye un enlace para saltar al contenido principal.
- Todo control debe funcionar con teclado.
- Los carruseles deben tener nombre accesible, estado comprensible y controles con etiquetas claras.
- Mantén el orden de lectura lógico incluso cuando la composición visual cambie en escritorio.
- Proporciona foco visible con contraste suficiente.
- Respeta `prefers-reduced-motion`.
- Busca cumplir WCAG 2.2 AA en contraste, navegación por teclado, tamaño de objetivos y semántica.

## 10. Rendimiento y optimización

- Prioriza una buena experiencia en redes móviles.
- Evita JavaScript innecesario y dependencias pesadas.
- No cargues librerías completas para resolver un carrusel sencillo.
- Usa Server Components y HTML estático para todo lo que no requiera interacción.
- Reserva espacio para imágenes y elementos interactivos para evitar CLS.
- Optimiza fuentes con `next/font`.
- Usa carga diferida para imágenes futuras que estén fuera de la primera pantalla.
- No uses video de fondo.
- Evita listeners globales y efectos que se ejecuten continuamente durante el desplazamiento.
- Verifica que no existan errores de consola, hydration mismatches ni advertencias de React.
- El objetivo mínimo es obtener resultados altos en Lighthouse móvil para Performance, Accessibility, Best Practices y SEO, sin sacrificar contenido o accesibilidad para mejorar artificialmente la puntuación.

## 11. SEO básico

- Configura `lang="es-CL"`.
- Usa Metadata API de Next.js.
- Construye el título y la descripción a partir del copy aprobado, sin inventar nuevas afirmaciones.
- Incluye canonical si se conoce el dominio real; no inventes uno.
- Mantén un solo H1 y el orden de encabezados definido.
- Añade metadatos Open Graph solo con datos confirmados.
- Deja un placeholder técnico para la futura imagen Open Graph si no existe una imagen real.
- No agregues datos estructurados con información no validada.

## 12. Calidad del código

- Usa nombres de componentes y variables claros.
- Evita un único componente monolítico para toda la landing.
- Mantén el contenido aprobado en una estructura de datos central cuando esto facilite reutilizarlo sin duplicar ni alterar frases.
- No uses `dangerouslySetInnerHTML` para renderizar el copy.
- No agregues comentarios innecesarios ni código muerto.
- No dejes errores TypeScript o ESLint.
- No desactives reglas para ocultar problemas.
- Mantén las clases de Tailwind legibles y extrae componentes cuando exista repetición real.
- Usa los tokens de color de la marca en lugar de repetir valores hexadecimales de manera desordenada.

## 13. Verificación obligatoria antes de finalizar

Ejecuta y corrige, como mínimo:

```bash
npm run lint
npm run build
```

Después, inicia el servidor local y revisa la landing en un navegador real.

Comprueba al menos estos anchos:

- 360 px.
- 390 px.
- 768 px.
- 1024 px.
- 1440 px.

### Lista de aceptación

- [ ] Next.js y Tailwind CSS usan las versiones estables más recientes, sin canales experimentales.
- [ ] La aplicación usa App Router y TypeScript estricto.
- [ ] Existe un único H1.
- [ ] Todos los H2, H3 y H4 respetan el archivo de copy.
- [ ] Las etiquetas `[H1]`, `[H2]`, `[H3]` y `[H4]` no aparecen en pantalla.
- [ ] Las notas editoriales internas no aparecen en la landing.
- [ ] Todo el copy comercial visible coincide literalmente con `copy-landing-fuego-de-patio.md`; los únicos textos temporales añadidos son los placeholders descriptivos solicitados.
- [ ] No se añadieron textos comerciales, afirmaciones ni estadísticas nuevas.
- [ ] No se añadieron emojis.
- [ ] La paleta se limita a los colores definidos y sus neutros derivados.
- [ ] Todos los espacios destinados a fotografías tienen placeholders descriptivos.
- [ ] Los grupos repetitivos no producen una sucesión innecesariamente larga de tarjetas en móvil.
- [ ] Los carruseles no tienen reproducción automática y funcionan con tacto y teclado.
- [ ] Los CTA de WhatsApp, teléfono y correo funcionan.
- [ ] No existe un formulario falso o sin destino.
- [ ] La página funciona correctamente desde 360 px hasta 1440 px.
- [ ] No hay desplazamiento horizontal accidental.
- [ ] No hay errores de consola, TypeScript, ESLint o compilación.
- [ ] `npm run lint` finaliza correctamente.
- [ ] `npm run build` finaliza correctamente.
- [ ] Se realizó una revisión visual en navegador.

## 14. Entrega esperada

Entrega la landing completamente implementada y lista para revisión local. En el informe final incluye únicamente:

- Resumen breve de lo implementado.
- Versiones efectivamente utilizadas.
- Resultado de lint y build.
- Rutas principales de los archivos creados.
- Decisiones de interacción usadas para reducir la longitud percibida en móvil.
- Lista concreta de elementos pendientes que requieren fotografías o información del cliente.

No declares el trabajo terminado si la landing no compila o si no fue revisada visualmente.

## 15. Referencias técnicas oficiales

- Next.js: <https://nextjs.org/docs>
- Next.js App Router: <https://nextjs.org/docs/app>
- Next.js 16.2: <https://nextjs.org/blog/next-16-2>
- Tailwind CSS: <https://tailwindcss.com/docs>
- Tailwind CSS 4.3: <https://tailwindcss.com/blog/tailwindcss-v4-3>
