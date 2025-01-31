import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-r from-[#f4ece0] to-[#e8e0d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen y Título */}
          <div className="relative -top-10 flex flex-col items-center text-center">
            <div className="relative">
              <Image
                src="/polarenas.png"
                alt="Abogado profesional"
                width={180}
                height={180}
                className=" rounded-full border-4 border-gray-200 shadow-xl transform hover:scale-105 transition duration-300"
              />

            </div>
            <h1 className="text-2xl font-extrabold text-gray-800 mt-6">Pol Arenas Mora</h1>
            <p className="text-gray-600">Abogado colegiado <br /> nº 48.421 ICAB</p>
          </div>

          {/* Descripción */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              Sobre Mí
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              Cuento con varios años de experiencia en el campo del Derecho Laboral y de la Seguridad Social; en mi desempeño profesional
              rige el compromiso en ofrecer asesoramiento jurídico de calidad, basado en la excelencia
              y el rigor profesional.
            </p>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              Mi enfoque se centra en analizar cada caso de manera pormenorizada, diseñando estrategias
              personalizadas y orientadas en obtener los mejores resultados para mis clientes. Con una
              visión moderna y estratégica, trabajo codo a codo con mis clientes para entender sus
              necesidades y brindarles la mejor solución legal posible.
            </p>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              Mi compromiso es firme: proporcionarle el apoyo legal que requiere con un enfoque práctico,
              efectivo y altamente cualificado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
