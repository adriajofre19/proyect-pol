import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contacto | Arenas Mora & Asociados — Abogados en Barcelona",
  description:
    "Contáctanos para una primera consulta gratuita. Despacho en Carrer de París 45-47, Eixample, Barcelona. Tel. +34 933 220 553.",
  alternates: { canonical: "https://arenasmorapol.com/contacto" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4]">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <ContactForm />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </main>
  );
}
