import { BookOpen, Shield, Users, Clock } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Experiencia Comprobada',
      description: 'Años de experiencia exitosa defendiendo los derechos de nuestros clientes.',
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Cada caso recibe atención individual y estrategias adaptadas a sus necesidades específicas.',
    },
    {
      icon: BookOpen,
      title: 'Especialización',
      description: 'Conocimiento profundo en diversas áreas del derecho para mejor servirle.',
    },
    {
      icon: Clock,
      title: 'Disponibilidad',
      description: 'Respuesta rápida y seguimiento constante de su caso.',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}