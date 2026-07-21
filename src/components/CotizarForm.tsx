"use client";

import React, { useState, useEffect, useCallback } from "react";
import Button from "./Button";

type GastronomiaKeys = "buffet" | "piqueo" | "coctel" | "barra" | "cordero";
type AdicionalesKeys =
  | "produccion"
  | "carpas"
  | "generadores"
  | "iluminacion"
  | "estufas"
  | "animacion"
  | "mobiliario";

interface FormState {
  fecha: string;
  comuna: string;
  tipoEvento: string;
  invitados: string;
  gastronomia: Record<GastronomiaKeys, boolean>;
  adicionales: Record<AdicionalesKeys, boolean>;
}

const GASTRONOMIA_LABELS: Record<GastronomiaKeys, string> = {
  buffet: "Buffet del Asador",
  piqueo: "Piqueo Parrilla",
  coctel: "Cóctel Extendido",
  barra: "Servicio de Barra",
  cordero: "Cordero al palo",
};

const ADICIONALES_LABELS: Record<AdicionalesKeys, string> = {
  produccion: "Producción Integral",
  carpas: "Carpas",
  generadores: "Generadores",
  iluminacion: "Iluminación",
  estufas: "Estufas",
  animacion: "Animación",
  mobiliario: "Mobiliario",
};

const initialState: FormState = {
  fecha: "",
  comuna: "",
  tipoEvento: "",
  invitados: "",
  gastronomia: {
    buffet: false,
    piqueo: false,
    coctel: false,
    barra: false,
    cordero: false,
  },
  adicionales: {
    produccion: false,
    carpas: false,
    generadores: false,
    iluminacion: false,
    estufas: false,
    animacion: false,
    mobiliario: false,
  },
};

interface CotizarFormProps {
  defaultServicio?: GastronomiaKeys;
}

export default function CotizarForm({ defaultServicio }: CotizarFormProps = {}) {
  const [formData, setFormData] = useState<FormState>(() => {
    if (defaultServicio && defaultServicio in initialState.gastronomia) {
      return {
        ...initialState,
        gastronomia: {
          ...initialState.gastronomia,
          [defaultServicio]: true,
        },
      };
    }
    return initialState;
  });
  const [highlighted, setHighlighted] = useState<string | null>(null);

  /* ── Preselection listener ───────────────────────────────── */
  const handlePreselect = useCallback((e: Event) => {
    const detail = (e as CustomEvent).detail as {
      servicio?: string;
      tipo?: string;
    };

    if (detail.servicio) {
      const key = detail.servicio;
      if (key in initialState.gastronomia) {
        setFormData((prev) => ({
          ...prev,
          gastronomia: {
            ...prev.gastronomia,
            [key]: true,
          },
        }));
        setHighlighted(key);
      } else if (key in initialState.adicionales) {
        setFormData((prev) => ({
          ...prev,
          adicionales: {
            ...prev.adicionales,
            [key]: true,
          },
        }));
        setHighlighted(key);
      }
    }

    if (detail.tipo) {
      setFormData((prev) => ({ ...prev, tipoEvento: detail.tipo! }));
      setHighlighted("tipoEvento");
    }

    /* Clear highlight after animation */
    setTimeout(() => setHighlighted(null), 1800);
  }, []);

  useEffect(() => {
    window.addEventListener("cotizar-preselect", handlePreselect);
    return () =>
      window.removeEventListener("cotizar-preselect", handlePreselect);
  }, [handlePreselect]);

  /* ── Handlers ────────────────────────────────────────────── */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGastronomiaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      gastronomia: { ...prev.gastronomia, [name]: checked },
    }));
  };

  const handleAdicionalesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      adicionales: { ...prev.adicionales, [name]: checked },
    }));
  };

  /* ── Submit → WhatsApp ───────────────────────────────────── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const gastroList = (
      Object.keys(formData.gastronomia) as GastronomiaKeys[]
    )
      .filter((k) => formData.gastronomia[k])
      .map((k) => GASTRONOMIA_LABELS[k]);

    const adicList = (
      Object.keys(formData.adicionales) as AdicionalesKeys[]
    )
      .filter((k) => formData.adicionales[k])
      .map((k) => ADICIONALES_LABELS[k]);

    const lines = [
      `Hola Fuego de Patio, me gustaría solicitar una cotización:`,
      `- Tipo de evento: ${formData.tipoEvento || "No especificado"}`,
      `- Fecha: ${formData.fecha || "No especificada"}`,
      `- Comuna: ${formData.comuna || "No especificada"}`,
      `- Cantidad estimada de invitados: ${formData.invitados || "No especificada"}`,
      `- Propuesta gastronómica: ${gastroList.length > 0 ? gastroList.join(", ") : "No especificada"}`,
    ];

    if (adicList.length > 0) {
      lines.push(`- Servicios adicionales: ${adicList.join(", ")}`);
    }

    const message = lines.join("\n");
    const whatsappUrl = `https://wa.me/56965252532?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  /* ── Checkbox styling helper ─────────────────────────────── */
  const checkboxClasses = (key: string) =>
    `flex items-center gap-3 cursor-pointer select-none group py-2.5 px-3.5 rounded-xl border transition-all duration-300 ${
      highlighted === key
        ? "bg-brand-orange/15 border-brand-orange ring-2 ring-brand-orange/40"
        : "bg-brand-beige/5 border-transparent hover:border-brand-orange/30"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="quote-form bg-brand-dark text-brand-beige p-6 sm:p-8 lg:p-10 rounded-[1.75rem] shadow-xl w-full max-w-3xl mx-auto space-y-8 border border-brand-beige/10"
    >
      {/* ── Datos del evento ──────────────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange text-brand-dark text-[10px] font-bold">
            1
          </span>
          Datos del evento
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Tipo de Evento */}
          <div
            className={`flex flex-col gap-1.5 transition-all duration-300 ${
              highlighted === "tipoEvento" ? "ring-2 ring-brand-orange/40 rounded-lg" : ""
            }`}
          >
            <label
              htmlFor="tipoEvento"
              className="text-[10px] font-bold uppercase tracking-wider text-brand-beige/60"
            >
              Tipo de Evento
            </label>
            <select
              id="tipoEvento"
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleInputChange}
              required
              className="w-full min-h-[44px] px-3.5 py-2 bg-brand-beige/5 border border-brand-beige/20 rounded-lg text-brand-beige focus:border-brand-orange focus:outline-none transition-colors"
            >
              <option value="" disabled className="bg-brand-dark">
                Selecciona un tipo
              </option>
              <option value="Matrimonio" className="bg-brand-dark">
                Matrimonio
              </option>
              <option value="Evento de Empresa" className="bg-brand-dark">
                Evento de Empresa
              </option>
              <option value="Celebración Particular" className="bg-brand-dark">
                Celebración Particular
              </option>
              <option value="Otro" className="bg-brand-dark">
                Otro
              </option>
            </select>
          </div>

          {/* Fecha */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fecha"
              className="text-[10px] font-bold uppercase tracking-wider text-brand-beige/60"
            >
              Fecha del Evento
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              required
              className="w-full min-h-[44px] px-3.5 py-2 bg-brand-beige/5 border border-brand-beige/20 rounded-lg text-brand-beige focus:border-brand-orange focus:outline-none transition-colors"
            />
          </div>

          {/* Comuna */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="comuna"
              className="text-[10px] font-bold uppercase tracking-wider text-brand-beige/60"
            >
              Comuna
            </label>
            <input
              type="text"
              id="comuna"
              name="comuna"
              value={formData.comuna}
              onChange={handleInputChange}
              required
              placeholder="Ej: Concepción, Los Ángeles, Chillán"
              className="w-full min-h-[44px] px-3.5 py-2 bg-brand-beige/5 border border-brand-beige/20 rounded-lg text-brand-beige placeholder-brand-beige/40 focus:border-brand-orange focus:outline-none transition-colors"
            />
          </div>

          {/* Invitados */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="invitados"
              className="text-[10px] font-bold uppercase tracking-wider text-brand-beige/60"
            >
              Cantidad Estimada de Invitados
            </label>
            <input
              type="number"
              id="invitados"
              name="invitados"
              value={formData.invitados}
              onChange={handleInputChange}
              required
              min="1"
              placeholder="Ej: 100"
              className="w-full min-h-[44px] px-3.5 py-2 bg-brand-beige/5 border border-brand-beige/20 rounded-lg text-brand-beige placeholder-brand-beige/40 focus:border-brand-orange focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* ── Propuesta gastronómica ────────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange text-brand-dark text-[10px] font-bold">
            2
          </span>
          Propuesta gastronómica
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(Object.keys(GASTRONOMIA_LABELS) as GastronomiaKeys[]).map(
            (key) => (
              <label key={key} className={checkboxClasses(key)}>
                <input
                  type="checkbox"
                  name={key}
                  checked={formData.gastronomia[key]}
                  onChange={handleGastronomiaChange}
                  className="w-4.5 h-4.5 accent-brand-orange rounded border-brand-beige/20 cursor-pointer"
                />
                <span className="text-sm font-medium">
                  {GASTRONOMIA_LABELS[key]}
                </span>
              </label>
            )
          )}
        </div>
      </div>

      {/* ── Servicios adicionales ─────────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange text-brand-dark text-[10px] font-bold">
            3
          </span>
          Servicios adicionales
        </h3>

        <p className="text-[11px] text-brand-beige/50 -mt-1">
          Puedes sumar equipamiento y producción a tu propuesta.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {(Object.keys(ADICIONALES_LABELS) as AdicionalesKeys[]).map(
            (key) => (
              <label key={key} className={checkboxClasses(key)}>
                <input
                  type="checkbox"
                  name={key}
                  checked={formData.adicionales[key]}
                  onChange={handleAdicionalesChange}
                  className="w-4.5 h-4.5 accent-brand-orange rounded border-brand-beige/20 cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-medium">
                  {ADICIONALES_LABELS[key]}
                </span>
              </label>
            )
          )}
        </div>
      </div>

      {/* ── Buttons ──────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button type="submit" variant="primary" className="flex-1 w-full">
          Cotizar mi evento
        </Button>
        <Button
          type="button"
          variant="outline"
          href="https://wa.me/56965252532?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20los%20servicios%20de%20Fuego%20de%20Patio."
          className="flex-1 w-full border-brand-beige text-brand-beige hover:bg-brand-beige/10 active:bg-brand-beige/15 focus:ring-brand-beige/20"
        >
          Hablar por WhatsApp
        </Button>
      </div>
    </form>
  );
}
