import { HeroSection } from '@/components/ui/hero-section';
import { FeaturesSection } from '@/components/ui/features-section';
import { ServicesSection } from '@/components/ui/services-section';
import { AboutSection } from '@/components/ui/about-section';
import { LocationSection } from '@/components/ui/location-section';
import { CTASection } from '@/components/ui/cta-section';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arenas Mora & Asociados | Inicio</title>
        <meta name="description" content="Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes." />
        <meta name="keywords" content="abogado,abogado barcelona,abogado laboralista,abogado laboral,abogado despidos,abogado divorcios, abogado separaciones,
        abogado penal, abogado penalista, despacho abogado, consulta jurídica, asesoría laboral, ley de la segunda oportunidad, cancelar deudas, asesoramiento jurídico,
        barcelona, derecho de familia," />
        <meta name="author" content="pol arenas mora" />
        <meta property="og:title" content="Arenas Mora & Asociados | Inicio" />
        <meta property="og:description" content="Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes." />
        <meta property="og:url" content="https://arenasmorapol.com" />
        <meta property="og:image" content="https://arenasmorapol.com/logo.png" />
        <meta name="twitter:card" content="https://arenasmorapol.com/logo.png" />
        <meta name="twitter:title" content="Arenas Mora & Asociados | Inicio" />
        <meta name="twitter:description" content="Despacho de abogados multidisciplinar que ofrece soluciones jurídicas en el ámbito del Derecho, con un óptimo grado de satisfacción de sus clientes." />
        <meta name="twitter:image" content="https://arenasmorapol.com/logo.png" />
        <link rel="canonical" href="https://arenasmorapol.com" />
      </Head>
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <AboutSection />
        <LocationSection />
        <CTASection />
      </main>
    </>
  );
}