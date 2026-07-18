import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <footer
      id="contacto"
      className="bg-brand-dark text-brand-beige border-t border-brand-beige/10 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="relative h-36 w-40 overflow-hidden">
            <Image
              src="/logo-fuego.png"
              alt="Fuego de Patio"
              width={1254}
              height={1254}
              className="absolute -left-[58px] -top-[60px] h-[270px] w-[270px] max-w-none"
            />
          </div>
          <p className="text-sm text-brand-beige/70 leading-relaxed max-w-sm">
            Banquetería a fuego vivo y producción integral de eventos. Cocina a la vista con leña nativa en la Región del Biobío y alrededores.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-brand-orange font-display font-bold text-xs uppercase tracking-wider">
            Contacto
          </h2>
          <ul className="space-y-3 text-sm text-brand-beige/80">
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand-orange shrink-0"
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
                <span className="font-semibold block text-xs text-brand-beige/50">Teléfono y WhatsApp</span>
                <a href="tel:+56965252532" className="hover:text-brand-orange transition-colors">
                  +56 9 6525 2532
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand-orange shrink-0"
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
                <span className="font-semibold block text-xs text-brand-beige/50">Correo</span>
                <a href="mailto:fuego.de.patio@gmail.com" className="hover:text-brand-orange transition-colors">
                  fuego.de.patio@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand-orange shrink-0"
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
                <span className="font-semibold block text-xs text-brand-beige/50">Instagram</span>
                <a
                  href="https://instagram.com/fuego.de.patio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  @fuego.de.patio
                </a>
              </div>
            </li>
            <li className="pt-2 flex items-start gap-3">
              <div className="shrink-0 bg-white p-2 rounded-xl border border-brand-beige/10">
                <Image
                  src="/images/qr_instagram.png"
                  alt="Código QR de Instagram de Fuego de Patio"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
              <div className="self-center">
                <span className="font-semibold block text-xs text-brand-beige/50">Síguenos</span>
                <p className="text-[10px] text-brand-beige/70 leading-relaxed">
                  Escanea para ver fotos y videos en tiempo real de nuestros eventos.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Coverage */}
        <div className="space-y-4">
          <h2 className="text-brand-orange font-display font-bold text-xs uppercase tracking-wider">
            Cobertura
          </h2>
          <p className="text-sm text-brand-beige/80 leading-relaxed">
            Región del Biobío y alrededores, Chile
          </p>
          <div className="text-xs text-brand-beige/50 pt-6 border-t border-brand-beige/5 mt-4">
            &copy; {new Date().getFullYear()} Fuego de Patio. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>

      {/* Agency credit bar */}
      <div className="w-full bg-brand-dark border-t border-brand-beige/10 py-3 px-4 text-center">
        <p className="text-xs text-brand-beige/60">
          Sitio web desarrollado por{" "}
          <a
            href="https://darw.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-beige/80 hover:text-brand-orange transition-colors"
          >
            Agencia Darw
          </a>
        </p>
      </div>
    </>  
  );
}
