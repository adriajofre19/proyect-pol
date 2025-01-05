export function ServicesPricing() {
  const plans = [
    {
      name: 'Consulta Inicial',
      price: 'Gratuita',
      description: 'Primera evaluación de su caso',
      features: [
        'Evaluación inicial del caso',
        'Análisis de viabilidad',
        'Orientación legal básica',
        'Presupuesto personalizado'
      ]
    },
    {
      name: 'Asesoramiento Básico',
      price: 'Desde 100€/h',
      description: 'Para casos puntuales',
      features: [
        'Consultas legales',
        'Revisión de documentos',
        'Asesoramiento telefónico',
        'Respuesta en 24-48h'
      ]
    },
    {
      name: 'Representación Completa',
      price: 'Personalizado',
      description: 'Para casos complejos',
      features: [
        'Representación legal completa',
        'Gestión integral del caso',
        'Comunicación prioritaria',
        'Seguimiento continuo'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarifas Transparentes</h2>
          <p className="text-lg text-gray-600">
            Opciones adaptadas a sus necesidades
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
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