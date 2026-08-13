import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const nightZone = localFont({
  src: [
    {
      path: "../../public/brand/night-zone-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/brand/night-zone-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-night-zone",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuego de Patio | Banquetería a fuego vivo para matrimonios, empresas y celebraciones",
  description: "Parrillas, cordero al palo y producción completa de eventos en la Región del Biobío y alrededores. Propuestas personalizadas y cocina a la vista.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/isotipo-fogata.png", sizes: "any", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Fuego de Patio | Banquetería a fuego vivo para matrimonios, empresas y celebraciones",
    description: "Parrillas, cordero al palo y producción completa de eventos en la Región del Biobío y alrededores. Propuestas personalizadas y cocina a la vista.",
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
      className={`${nightZone.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-cream text-brand-charcoal">
        {children}
      </body>
    </html>
  );
}
