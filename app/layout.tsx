import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { JsonLdLocalBusiness } from "@/components/JsonLd";

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
    url: "https://arenasmorapol.com",
    siteName: "Arenas Mora & Asociados",
    locale: "es_ES",
    images: [
      {
        url: "/logo.avif",
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
    images: ["/logo.avif"],
  },
  metadataBase: new URL("https://arenasmorapol.com"),
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
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
