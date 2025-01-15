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
      title: 'Derecho Mercantil',
      description: 'Asesoramiento integral para empresas, contratos comerciales, fusiones y adquisiciones.',
      features: [
        'Constitución de sociedades',
        'Contratos mercantiles',
        'Fusiones y adquisiciones',
        'Asesoría empresarial'
      ]
    },
    {
      icon: Scale,
      title: 'Derecho Civil',
      description: 'Resolución de conflictos civiles, contratos, reclamaciones y derecho de propiedad.',
      features: [
        'Contratos civiles',
        'Responsabilidad civil',
        'Derecho de propiedad',
        'Reclamaciones'
      ]
    },
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Asesoramiento en relaciones laborales, contratos y conflictos laborales.',
      features: [
        'Contratos laborales',
        'Despidos',
        'Negociación colectiva',
        'Seguridad social'
      ]
    },
    {
      icon: Home,
      title: 'Derecho Inmobiliario',
      description: 'Gestión de transacciones inmobiliarias y resolución de conflictos.',
      features: [
        'Compraventa',
        'Arrendamientos',
        'Hipotecas',
        'Urbanismo'
      ]
    },
    {
      icon: Users,
      title: 'Derecho de Familia',
      description: 'Asesoramiento en divorcios, custodia y derecho matrimonial.',
      features: [
        'Divorcios',
        'Custodia',
        'Pensiones',
        'Herencias'
      ]
    },
    {
      icon: FileText,
      title: 'Derecho Administrativo',
      description: 'Representación ante administraciones públicas y recursos administrativos.',
      features: [
        'Recursos administrativos',
        'Licencias',
        'Sanciones',
        'Contratación pública'
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