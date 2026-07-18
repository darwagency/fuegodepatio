"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#gastronomia", label: "Gastronomía" },
    { href: "#cordero", label: "Cordero al Palo" },
    { href: "#produccion", label: "Producción" },
    { href: "#adicionales", label: "Servicios" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 text-brand-beige shadow-md backdrop-blur-md py-3"
          : "bg-brand-dark text-brand-beige py-4 border-b border-brand-beige/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#"
          className="font-display font-black text-xl tracking-wider text-brand-orange uppercase flex items-center gap-2"
          aria-label="Fuego de Patio — Inicio"
        >
          <span className="relative h-8 w-8 shrink-0 overflow-hidden" aria-hidden="true">
            <Image
              src="/logo-fuego.png"
              alt=""
              width={1254}
              height={1254}
              preload
              className="absolute -left-10 -top-6 h-28 w-28 max-w-none"
            />
          </span>
          <span>Fuego de Patio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-brand-beige/80 hover:text-brand-orange transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button href="#cotizar" variant="primary" className="ml-4 min-h-[40px] py-1.5 px-4 text-xs">
            Cotizar mi evento
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-brand-beige hover:text-brand-orange hover:bg-brand-beige/5 transition-colors focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[57px] bg-brand-dark border-b border-brand-beige/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[350px] opacity-100 py-4 px-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4 text-center" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold tracking-wide text-brand-beige hover:text-brand-orange py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#cotizar"
            variant="primary"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2"
          >
            Cotizar mi evento
          </Button>
        </nav>
      </div>
    </header>
  );
}
