"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { brandAssets } from "@/data/media";

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
    { href: "/#gastronomia", label: "Gastronomía" },
    { href: "/cordero-al-palo", label: "Cordero al palo" },
    { href: "/#produccion", label: "Producción" },
    { href: "/#adicionales", label: "Servicios" },
    { href: "/#cotizar", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-charcoal/95 text-brand-cream shadow-md backdrop-blur-md py-3"
          : "bg-brand-charcoal text-brand-cream py-4 border-b border-brand-cream/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2 py-1"
          aria-label="Fuego de Patio — Inicio"
        >
          <Image
            src={brandAssets.isotipo}
            alt=""
            width={512}
            height={512}
            className="size-10 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-wide text-brand-cream transition-colors group-hover:text-brand-gold sm:text-xl">Fuego de Patio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-brand-cream/80 hover:text-brand-gold transition-colors duration-200"
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
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-brand-cream hover:text-brand-gold hover:bg-brand-cream/5 transition-colors focus:outline-none"
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
        className={`lg:hidden fixed inset-x-0 top-[72px] bg-brand-charcoal border-b border-brand-cream/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 py-4 px-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4 text-center" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold tracking-wide text-brand-cream hover:text-brand-gold py-1 transition-colors"
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
