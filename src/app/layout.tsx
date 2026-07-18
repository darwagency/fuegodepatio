import type { Metadata } from "next";
import { Kameron } from "next/font/google";
import "./globals.css";

const kameron = Kameron({
  variable: "--font-kameron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuego de Patio | Banquetería a fuego vivo para matrimonios, empresas y celebraciones",
  description: "Parrillas a la llama, cordero al palo y producción integral de eventos en la Región del Biobío y alrededores. Propuestas personalizadas y cocina a la vista.",
  openGraph: {
    title: "Fuego de Patio | Banquetería a fuego vivo para matrimonios, empresas y celebraciones",
    description: "Parrillas a la llama, cordero al palo y producción integral de eventos en la Región del Biobío y alrededores. Propuestas personalizadas y cocina a la vista.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${kameron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
