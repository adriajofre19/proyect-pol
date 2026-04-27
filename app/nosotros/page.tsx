import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { JsonLdPerson } from "@/components/layout/JsonLd";
import { SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Pol Arenas Mora — Abogado en Barcelona",
  description:
    "Conoce a Pol Arenas Mora, abogado colegiado nº 48.421 ICAB. Compromiso, experiencia y asesoramiento jurídico personalizado en Barcelona.",
  alternates: { canonical: `${SITE_URL}/nosotros` },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <JsonLdPerson />
      <AboutHero />
      <AboutValues />
      <AboutTestimonials />
    </main>
  );
}
