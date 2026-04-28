import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { JsonLdLocalBusiness } from "@/components/layout/JsonLd";
import { Toaster } from "@/components/ui/toaster";
import { SITE_URL, SITE_NAME } from "@/constants/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Abogado en Barcelona | Especialistas en Derecho Laboral",
  description:
    "Buscas un abogado en Barcelona? Ofrecemos asesoramiento jurídico personalizado en derecho laboral. ¡Primera consulta gratuita!",
  keywords: [
    "abogado",
    "abogado barcelona",
    "abogado laboralista",
    "abogado laboral",
    "abogado despidos",
    "abogado divorcios",
    "abogado separaciones",
    "abogado penal",
    "abogado penalista",
    "despacho abogado",
    "consulta jurídica",
    "asesoría laboral",
    "ley de la segunda oportunidad",
    "cancelar deudas",
    "asesoramiento jurídico",
    "barcelona",
    "derecho de familia",
  ],
  authors: [{ name: "Pol Arenas Mora" }],
  openGraph: {
    title: "Abogado en Barcelona | Arenas Mora & Asociados",
    description:
      "Buscas un abogado en Barcelona? Ofrecemos asesoramiento jurídico personalizado en derecho laboral. ¡Primera consulta gratuita!",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_ES",
    images: [
      {
        url: "/images/logo.avif",
        width: 1200,
        height: 630,
        alt: "Arenas Mora & Asociados — Abogados en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado en Barcelona | Arenas Mora & Asociados",
    description:
      "Buscas un abogado en Barcelona? Ofrecemos asesoramiento jurídico personalizado en derecho laboral. ¡Primera consulta gratuita!",
    images: ["/images/logo.avif"],
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={openSans.variable}>
      <head>
        <JsonLdLocalBusiness />
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
        <Toaster />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
