import React from "react";
import Image from "next/image";
import { brandAssets } from "@/data/media";

export default function Footer() {
  const darwWhatsAppUrl =
    "https://wa.me/56926341222?text=Hola%20Darw%2C%20vengo%20desde%20la%20web%20de%20Fuego%20de%20Patio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20mi%20proyecto.";

  return (
    <>
      <footer
        id="contacto"
        className="bg-brand-charcoal text-brand-cream border-t border-brand-cream/10 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <div>
            <Image
              src={brandAssets.logoClaro}
              alt="Fuego de Patio"
              width={3544}
              height={1878}
              style={{ height: "4.5rem", width: "auto" }}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-brand-cream/70 leading-relaxed max-w-sm">
            Banquetería a fuego vivo y producción de eventos en la Región del Biobío y alrededores.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-brand-gold font-display font-bold text-xs uppercase tracking-wider">
            Contacto
          </h2>
          <ul className="space-y-3 text-sm text-brand-cream/80">
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand-gold shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <span className="font-semibold block text-xs text-brand-cream/50">Teléfono y WhatsApp</span>
                <a href="tel:+56965252532" className="hover:text-brand-gold transition-colors">
                  +56 9 6525 2532
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand-gold shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <span className="font-semibold block text-xs text-brand-cream/50">Correo</span>
                <a href="mailto:fuego.de.patio@gmail.com" className="hover:text-brand-gold transition-colors">
                  fuego.de.patio@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand-gold shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <div>
                <span className="font-semibold block text-xs text-brand-cream/50">Instagram</span>
                <a
                  href="https://instagram.com/fuego.de.patio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  @fuego.de.patio
                </a>
              </div>
            </li>
            <li className="hidden pt-2 md:flex items-start gap-3">
              <div className="shrink-0 bg-white p-2 rounded-xl border border-brand-cream/10">
                <Image
                  src="/images/qr_instagram.png"
                  alt="Código QR de Instagram de Fuego de Patio"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <div className="self-center">
                <span className="font-semibold block text-xs text-brand-cream/50">Síguenos</span>
                <p className="text-[10px] text-brand-cream/70 leading-relaxed">
                  Escanea para ver fotos y videos en tiempo real de nuestros eventos.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Coverage */}
        <div className="space-y-4">
          <h2 className="text-brand-gold font-display font-bold text-xs uppercase tracking-wider">
            Cobertura
          </h2>
          <p className="text-sm text-brand-cream/80 leading-relaxed">
            Región del Biobío y alrededores, Chile
          </p>
          <div className="text-xs text-brand-cream/50 pt-6 border-t border-brand-cream/5 mt-4">
            &copy; {new Date().getFullYear()} Fuego de Patio. Todos los derechos reservados.
          </div>
        </div>
        </div>
      </footer>

      <aside className="border-t border-brand-charcoal/10 bg-brand-cream px-4 py-6 sm:px-6 lg:px-8" aria-label="Desarrollo web">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Desarrollo web</p>
            <p className="mt-1 font-display text-xl font-bold text-brand-charcoal">
              Esta web fue desarrollada por Agencia Darw.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="https://darw.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-charcoal px-5 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-charcoal/90 focus:outline-none focus:ring-4 focus:ring-brand-gold/30"
            >
              Visitar web de la agencia
            </a>
            <a
              href={darwWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-brand-gold px-5 text-sm font-semibold text-brand-charcoal transition-colors hover:bg-brand-gold/15 focus:outline-none focus:ring-4 focus:ring-brand-gold/30"
            >
              Contacto directo al WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
