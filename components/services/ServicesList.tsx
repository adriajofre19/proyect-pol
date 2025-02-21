import {
  Building2,
  Scale,
  Briefcase,
  Home,
  Users,
  FileText
} from 'lucide-react';

export function ServicesList() {
  const services = [
    {
      icon: Building2,
      title: 'Derecho de la Seguridad Social',
      description: 'Reclamaciones de prestaciones cubiertas por la Seguridad Social.',
      features: [
        'Pensiones de incapacidad',
        'Jubilaciones',
        'Prestaciones contributivas y no contributivas',
        'Reclamaciones contra la Seguridad Social'
      ]
    },
    {
      icon: Home,
      title: 'Derecho Laboral',
      description: 'Reclamaciones por despido, acoso laboral y demás conflictos derivados del trabajo.',
      features: [
        'Reclamaciones por despido',
        'Impugnación de sanciones',
        'Reclamaciones salariales',
        'Conflictos laborales'
      ]
    },
    {
      icon: FileText,
      title: 'Derecho de Extranjería',
      description: 'Asilo, tramitación de visados, permisos de residencia y arraigo.',
      features: [
        'Asilo',
        'Tramitación de visados',
        'Permisos de residencia',
        'Arraigo'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Áreas de Práctica</h2>
          <p className="text-lg text-gray-600">
            Experiencia legal en las áreas más demandadas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}