import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { JsonLdFAQ } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Servicios Jurídicos en Barcelona | Arenas Mora & Asociados",
  description:
    "Derecho laboral, seguridad social, extranjería, familia y civil. Abogados especializados en Barcelona. ¡Primera consulta gratuita!",
  alternates: { canonical: "https://arenasmorapol.com/servicios" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <JsonLdFAQ />
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesFAQ />
    </main>
  );
}
