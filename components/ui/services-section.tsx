'use client';

import {
  Briefcase,
  Scale,
  Globe,
  HandCoins,
  Users,
  FileText,
} from 'lucide-react';

export function ServicesSection() {
  
  
  const services = [
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Despidos, sanciones, reclamaciones salariales y conflictos laborales.',
    },
    {
      icon: Scale,
      title: 'Derecho de la Seguridad Social',
      description: 'Pensiones de incapacidad, jubilaciones, prestaciones contributivas y no contributivas...',
    },
    {
      icon: Globe,
      title: 'Derecho de Extranjería',
      description: 'Asilo, tramitación de visados, permisos de residencia, arraigo...',
    },
    {
      icon: HandCoins,
      title: 'Reclamaciones de cantidad',
      description: 'Recuperamos lo que le corresponde. Asesoramos y representamos a personas y empresas en procedimientos de reclamación de deudas impagadas, tanto extrajudicial como judicialmente.',
    },
    {
      icon: Users,
      title: 'Derecho de Familia',
      description: 'Defendemos lo que más importa. Acompañamos a nuestros clientes en procesos familiares con sensibilidad, firmeza y un enfoque jurídico claro y realista.',
    },
    {
      icon: FileText,
      title: 'Derecho Civil General',
      description: 'Su tranquilidad jurídica, asegurada. Te asesoramos en cualquier situación que afecte a tu vida personal o patrimonial, con soluciones claras y estrategias eficaces.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Ofrecemos asesoramiento legal integral en diversas áreas del derecho
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
            >
              <service.icon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}