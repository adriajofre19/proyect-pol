export function ServicesFAQ() {
  const faqs = [
    {
      question: '¿Cuál es el proceso para iniciar mi caso?',
      answer: 'El proceso comienza con una consulta inicial gratuita donde evaluamos su caso y determinamos la mejor estrategia legal a seguir.'
    },
    {
      question: '¿Cuánto tiempo puede llevar resolver mi caso?',
      answer: 'Los tiempos varían según la complejidad del caso. Durante la consulta inicial, podremos darle una estimación más precisa.'
    },
    {
      question: '¿Qué documentación necesito preparar?',
      answer: 'La documentación requerida dependerá del tipo de caso. Le proporcionaremos una lista detallada durante la primera consulta.'
    },
    {
      question: '¿Ofrecen facilidades de pago?',
      answer: 'Sí, ofrecemos diferentes opciones de pago y planes personalizados según las necesidades de cada cliente.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600">
            Respuestas a las dudas más comunes
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}