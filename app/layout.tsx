import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto, Lato, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/ui/footer';
import { CookieConsent } from '@/components/CookieConsent';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Abogado en Barcelona | Especialistas en Derecho Laboral',
  description:
    'Buscas un abogado en Barcelona? Ofrecemos asesoramiento jurídico personalizado en derecho laboral. ¡Primera consulta gratuita!',
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
  openGraph: {
    images: '/logo.png',
  },
  twitter: {
    card: 'summary',
    title: 'Arenas Mora & Asociados | Inicio',
    description:
      'Buscas un abogado en Barcelona? Ofrecemos asesoramiento jurídico personalizado en derecho laboral. ¡Primera consulta gratuita!',
  },
  metadataBase: new URL('https://arenasmorapol.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={openSans.variable}>
      <head>
        {/* Google Tag */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11563609495`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11563609495');
            `,
          }}
        />
      </head>
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
