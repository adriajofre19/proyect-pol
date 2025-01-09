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
            <p className="text-md text-gray-600 mb-6">

              Cuento con varios años de experiencia en el campo legal, y en mi desempeño
              profesional rige el compromiso en ofrecer asesoramiento jurídico de calidad,
              basado en la excelencia y el rigor profesional.

            </p>
            <p className="text-md text-gray-600 mb-6">
              Mi enfoque se centra en analizar cada caso de manera pormenorizado, diseñando
              estrategias personalizadas y orientadas en obtener los mejores resultados para
              mis clientes. Con una visión moderna y estratégica, trabajo codo a codo con mis
              clientes para entender sus necesidades y brindarles la mejor solución legal posible.
            </p>
            <p className="text-md text-gray-600 mb-6">
              Mi compromiso es firme: brindarte el apoyo legal que requieres con un enfoque práctico,
              efectivo y altamente cualificado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}