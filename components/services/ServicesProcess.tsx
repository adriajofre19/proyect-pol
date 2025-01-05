export function ServicesProcess() {
  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Evaluación detallada de su caso y necesidades específicas.'
    },
    {
      number: '02',
      title: 'Estrategia Legal',
      description: 'Desarrollo de una estrategia personalizada para su situación.'
    },
    {
      number: '03',
      title: 'Representación',
      description: 'Gestión profesional de su caso con dedicación completa.'
    },
    {
      number: '04',
      title: 'Resolución',
      description: 'Búsqueda de la mejor solución para sus intereses personales.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-gray-600">
            Un enfoque estructurado para garantizar los mejores resultados
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <span className="text-4xl font-bold text-yellow-600 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}