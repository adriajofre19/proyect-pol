import { Handshake, HandHeart, Users, Sparkles } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Compromiso con la Excelencia',
      description: 'Trabajamos con dedicación para defender sus derechos y ofrecerle soluciones legales efectivas.',
    },
    {
      icon: Users,
      title: 'Enfoque Innovador en el Derecho',
      description: 'Abordamos cada caso con un enfoque moderno y adaptado a las necesidades de nuestros clientes.',
    },
    {
      icon: HandHeart,
      title: 'Dedicación a Cada Caso',
      description: 'Un abogado comprometido con entender sus necesidades, brindando un óptimo asesoramiento legal.',
    },
    {
      icon: Handshake,
      title: 'Su Confianza, Nuestro Compromiso',
      description: 'Nos esforzamos por construir relaciones basadas en la confianza y el trato personalizado.',
    },
  ];

  return (
    <div className="py-24 bg-[#f4ece0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
              <h1 className="text-xl font-semibold mb-2">{feature.title}</h1>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}