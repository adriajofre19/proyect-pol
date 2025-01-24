import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto, Lato, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/ui/footer';
import { CookieConsent } from '@/components/CookieConsent';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({
  subsets: ['latin'], // Incluye el subconjunto 'latin' para el soporte básico.
  weight: ['400', '700'], // Agrega los pesos deseados (400 para regular, 700 para bold).
  variable: '--font-roboto', // Define una variable CSS opcional para usar más adelante.
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Arenas Mora & Asociados | Inicio',
  description: 'Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <meta name="description" content="Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes." />
      <link rel="icon" href="/logo.avif" />
      <meta name="keywords" content="abogado,abogado barcelona,abogado laboralista,abogado laboral,abogado despidos,abogado divorcios, abogado separaciones,
        abogado penal, abogado penalista, despacho abogado, consulta jurídica, asesoría laboral, ley de la segunda oportunidad, cancelar deudas, asesoramiento jurídico,
        barcelona, derecho de familia," />
      <meta name="author" content="Pol Arenas Mora" />
      <meta property="og:title" content="Arenas Mora & Asociados | Inicio" />
      <meta property="og:description" content="Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes." />
      <meta property="og:url" content="https://arenasmorapol.com" />
      <meta property="og:image" content="/logo.avif" />
      <meta name="twitter:card" content="/logo.avif" />
      <meta name="twitter:title" content="Arenas Mora & Asociados | Inicio" />
      <meta name="twitter:description" content="Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes." />
      <meta name="twitter:image" content="/logo.avif" />
      <link rel="canonical" href="https://arenasmorapol.com" />

      <body className={openSans.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}