"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "./Button";

type GastronomiaKey = "buffet" | "piqueo" | "coctel" | "barra" | "cordero";
type AdicionalKey =
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
  gastronomia: Record<GastronomiaKey, boolean>;
  adicionales: Record<AdicionalKey, boolean>;
}

const gastronomiaLabels: Record<GastronomiaKey, string> = {
  buffet: "Buffet del Asador",
  piqueo: "Piqueo Parrilla",
  coctel: "Cóctel Extendido",
  barra: "Servicio de Barra",
  cordero: "Cordero al palo",
};

const adicionalLabels: Record<AdicionalKey, string> = {
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
  defaultServicio?: GastronomiaKey;
}

export default function CotizarForm({ defaultServicio }: CotizarFormProps) {
  const [formData, setFormData] = useState<FormState>(() => {
    if (!defaultServicio) return initialState;

    return {
      ...initialState,
      gastronomia: { ...initialState.gastronomia, [defaultServicio]: true },
    };
  });

  const handlePreselect = useCallback((event: Event) => {
    const detail = (event as CustomEvent<{ servicio?: string; tipo?: string }>).detail;

    setFormData((current) => {
      if (detail.servicio && detail.servicio in current.gastronomia) {
        return {
          ...current,
          gastronomia: {
            ...current.gastronomia,
            [detail.servicio]: true,
          },
        };
      }

      if (detail.servicio && detail.servicio in current.adicionales) {
        return {
          ...current,
          adicionales: {
            ...current.adicionales,
            [detail.servicio]: true,
          },
        };
      }

      if (detail.tipo) {
        return { ...current, tipoEvento: detail.tipo };
      }

      return current;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("cotizar-preselect", handlePreselect);
    return () => window.removeEventListener("cotizar-preselect", handlePreselect);
  }, [handlePreselect]);

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const updateCheckbox = (group: "gastronomia" | "adicionales", key: GastronomiaKey | AdicionalKey, checked: boolean) => {
    setFormData((current) => ({
      ...current,
      [group]: { ...current[group], [key]: checked },
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const gastronomia = (Object.keys(formData.gastronomia) as GastronomiaKey[])
      .filter((key) => formData.gastronomia[key])
      .map((key) => gastronomiaLabels[key]);
    const adicionales = (Object.keys(formData.adicionales) as AdicionalKey[])
      .filter((key) => formData.adicionales[key])
      .map((key) => adicionalLabels[key]);

    const message = [
      "Hola Fuego de Patio, me gustaría solicitar una cotización:",
      `- Tipo de evento: ${formData.tipoEvento}`,
      `- Fecha: ${formData.fecha}`,
      `- Comuna: ${formData.comuna}`,
      `- Cantidad estimada de invitados: ${formData.invitados}`,
      ...(gastronomia.length ? [`- Propuesta gastronómica: ${gastronomia.join(", ")}`] : []),
      ...(adicionales.length ? [`- Servicios adicionales: ${adicionales.join(", ")}`] : []),
    ].join("\n");

    window.open(`https://wa.me/56965252532?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const controlClass = "min-h-11 w-full rounded-xl border border-brand-cream/20 bg-brand-cream/5 px-3.5 py-2 text-brand-cream outline-none transition-colors focus:border-brand-gold";

  return (
    <form
      onSubmit={handleSubmit}
      className="quote-form mx-auto w-full max-w-3xl space-y-6 rounded-[1.75rem] border border-brand-cream/10 bg-brand-charcoal p-6 text-brand-cream shadow-xl sm:p-8"
    >
      <fieldset className="space-y-4">
        <legend className="text-xs font-bold uppercase tracking-widest text-brand-gold">Datos del evento</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="space-y-1.5 text-xs font-semibold text-brand-cream/75">
            Tipo de evento
            <select id="tipoEvento" name="tipoEvento" value={formData.tipoEvento} onChange={updateField} required className={controlClass}>
              <option value="" disabled className="bg-brand-charcoal">Selecciona un tipo</option>
              <option value="Matrimonio" className="bg-brand-charcoal">Matrimonio</option>
              <option value="Evento de Empresa" className="bg-brand-charcoal">Evento de Empresa</option>
              <option value="Celebración Particular" className="bg-brand-charcoal">Celebración Particular</option>
              <option value="Otro" className="bg-brand-charcoal">Otro</option>
            </select>
          </label>
          <label className="space-y-1.5 text-xs font-semibold text-brand-cream/75">
            Fecha del evento
            <input id="fecha" name="fecha" type="date" value={formData.fecha} onChange={updateField} required className={controlClass} />
          </label>
          <label className="space-y-1.5 text-xs font-semibold text-brand-cream/75">
            Comuna
            <input id="comuna" name="comuna" type="text" value={formData.comuna} onChange={updateField} placeholder="Ej: Concepción" required className={controlClass} />
          </label>
          <label className="space-y-1.5 text-xs font-semibold text-brand-cream/75">
            Cantidad estimada de invitados
            <input id="invitados" name="invitados" type="number" value={formData.invitados} onChange={updateField} min="1" placeholder="Ej: 100" required className={controlClass} />
          </label>
        </div>
      </fieldset>

      <details className="rounded-2xl border border-brand-cream/10 bg-brand-cream/5 p-4 open:bg-brand-cream/[0.07]">
        <summary className="cursor-pointer list-none text-sm font-semibold text-brand-cream marker:hidden">
          Agregar servicios a la cotización <span className="ml-2 text-xs font-medium text-brand-cream/55">Opcional</span>
        </summary>
        <div className="mt-5 space-y-6 border-t border-brand-cream/10 pt-5">
          <fieldset className="space-y-3">
            <legend className="text-xs font-bold uppercase tracking-widest text-brand-gold">Propuesta gastronómica</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(gastronomiaLabels) as GastronomiaKey[]).map((key) => (
                <label key={key} className="flex min-h-11 items-center gap-3 rounded-xl border border-brand-cream/10 px-3 text-sm hover:border-brand-gold/50">
                  <input type="checkbox" checked={formData.gastronomia[key]} onChange={(event) => updateCheckbox("gastronomia", key, event.target.checked)} className="size-4 accent-brand-gold" />
                  {gastronomiaLabels[key]}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="space-y-3">
            <legend className="text-xs font-bold uppercase tracking-widest text-brand-gold">Servicios adicionales</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(adicionalLabels) as AdicionalKey[]).map((key) => (
                <label key={key} className="flex min-h-11 items-center gap-3 rounded-xl border border-brand-cream/10 px-3 text-sm hover:border-brand-gold/50">
                  <input type="checkbox" checked={formData.adicionales[key]} onChange={(event) => updateCheckbox("adicionales", key, event.target.checked)} className="size-4 accent-brand-gold" />
                  {adicionalLabels[key]}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </details>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="primary" className="flex-1">Cotizar mi evento</Button>
        <Button type="button" variant="outline" href="https://wa.me/56965252532" target="_blank" rel="noopener noreferrer" className="flex-1 border-brand-cream text-brand-cream hover:bg-brand-cream/10">
          Hablar por WhatsApp
        </Button>
      </div>
    </form>
  );
}
