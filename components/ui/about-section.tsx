export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80"
              alt="Abogado profesional"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Mí
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Con más de 15 años de experiencia en el campo legal, me he dedicado a
              proporcionar asesoramiento jurídico de calidad a mis clientes. Mi
              compromiso es ofrecer soluciones efectivas y personalizadas para cada
              caso.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Licenciado en Derecho por la Universidad de [Universidad]
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Máster en Derecho Mercantil y Empresarial
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Miembro del Ilustre Colegio de Abogados
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}