import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ServicesHashFocus } from "@/components/services/ServicesHashFocus";
import { JsonLdFAQ } from "@/components/layout/JsonLd";
import { SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Servicios Jurídicos en Barcelona | Arenas Mora & Asociados",
  description:
    "Derecho laboral, seguridad social, extranjería, familia y civil. Abogados especializados en Barcelona. ¡Primera consulta gratuita!",
  alternates: { canonical: `${SITE_URL}/servicios` },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <JsonLdFAQ />
      <ServicesHashFocus />
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesFAQ />
    </main>
  );
}
