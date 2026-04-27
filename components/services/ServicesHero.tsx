import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 h-[400px]">
        <Image
          width={2000}
          height={500}
          src="/images/sections/legal-office-hero.jpg"
          alt="Servicios legales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-[400px] flex items-center">
        <div className="text-center mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-6">
            Servicios Legales Especializados
          </h1>
          <p className="text-xl text-gray-100">
            Ofrecemos asesoramiento legal integral con un enfoque personalizado
            para cada cliente. Nuestro compromiso es encontrar las mejores
            soluciones para sus necesidades legales.
          </p>
        </div>
      </div>
    </section>
  );
}
