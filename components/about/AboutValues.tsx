import { Shield, Scale, Heart, Users } from 'lucide-react';

export function AboutValues() {
    const values = [
        {
            icon: Shield,
            title: 'Integridad',
            description: 'Actuamos con honestidad y ética en cada caso que manejamos.',
        },
        {
            icon: Scale,
            title: 'Justicia',
            description: 'Luchamos por los derechos de nuestros clientes con determinación.',
        },
        {
            icon: Heart,
            title: 'Compromiso',
            description: 'Dedicamos toda nuestra atención a cada caso de manera personalizada.',
        },
        {
            icon: Users,
            title: 'Cercanía',
            description: 'Mantenemos una comunicación clara y constante con nuestros clientes.',
        },
    ];

    return (
        <section className="py-20 bg-[#f4ece0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
                    <p className="text-lg text-gray-600">
                        Los principios que guían nuestro trabajo diario
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <value.icon className="h-12 w-12 text-yellow-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}