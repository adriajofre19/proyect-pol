'use client';

import { Scale, Briefcase, FileText, Users, Home, Coins } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Despidos, sanciones ,reclamaciones salariales y conflictos laborales.',
    },
    {
      icon: Scale,
      title: 'Derecho de la Seguridad Social',
      description: 'Pensiones de incapacidad, jubilaciones, prestaciones contributivas y no contributivas...',
    },
    {
      icon: Coins,
      title: 'Derecho de Extranjería',
      description: 'Asilo, tramiotación de visados, permisos de residencia, arraigo...',
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