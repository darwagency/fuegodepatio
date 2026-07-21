"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#gastronomia", label: "Gastronomía" },
    { href: "/cordero-al-palo", label: "Cordero al Palo 🔥" },
    { href: "/#produccion", label: "Producción" },
    { href: "/#adicionales", label: "Servicios" },
    { href: "/#testimonios", label: "Testimonios" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 text-brand-beige shadow-md backdrop-blur-md py-3"
          : "bg-brand-dark text-brand-beige py-4 border-b border-brand-beige/5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-150 ease-out opacity-85"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="/"
          className="flex items-center py-1 group"
          aria-label="Fuego de Patio — Inicio"
        >
          <Image
            src="/logo-fuego.png"
            alt="Fuego de Patio"
            width={1024}
            height={973}
            priority
            style={{ height: "2.75rem", width: "auto" }}
            className="object-contain transition-transform duration-200 group-hover:scale-105"
          />
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
