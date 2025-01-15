export function CTASection() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Necesita asesoramiento legal?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contacte ahora para una consulta inicial gratuita y descubra cómo podemos ayudarle con su caso.
        </p>
        <div className="space-x-4">
          <a
            href="tel:+34657188297"
            className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
          >
            Llamar Ahora
          </a>
          <a
            href="mailto:polarenas@icab.cat"
            className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </div>
  );
}