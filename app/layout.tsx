import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto, Lato, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/ui/footer';
import { CookieConsent } from '@/components/CookieConsent';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Arenas Mora & Asociados | Inicio',
  description:
    'Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes.',
  keywords: [
    'abogado',
    'abogado barcelona',
    'abogado laboralista',
    'abogado laboral',
    'abogado despidos',
    'abogado divorcios',
    'abogado separaciones',
    'abogado penal',
    'abogado penalista',
    'despacho abogado',
    'consulta jurídica',
    'asesoría laboral',
    'ley de la segunda oportunidad',
    'cancelar deudas',
    'asesoramiento jurídico',
    'barcelona',
    'derecho de familia',
  ],
  authors: [{ name: 'Pol Arenas Mora' }],
  icons: {
    icon: '/logo.avif',
  },
  openGraph: {
    title: 'Arenas Mora & Asociados | Inicio',
    description:
      'Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes.',
    url: 'https://arenasmorapol.com',
    images: ['/logo.avif'],
  },
  twitter: {
    card: 'summary',
    title: 'Arenas Mora & Asociados | Inicio',
    description:
      'Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes.',
    images: ['/logo.avif'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={openSans.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
