import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto, Lato, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/ui/footer';
import { CookieConsent } from '@/components/CookieConsent';

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
  title: 'Abogado Autónomo | Asesoramiento Legal Profesional',
  description: 'Servicios legales personalizados con años de experiencia. Consulta gratuita disponible.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}