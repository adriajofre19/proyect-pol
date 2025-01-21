import Image from 'next/image';

export function ServicesHero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          alt="Servicios legales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-[500px] flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-6">
            Servicios Legales Especializados
          </h1>
          <p className="text-xl text-gray-100">
            Ofrecemos asesoramiento legal integral con un enfoque personalizado para cada cliente.
            Nuestro compromiso es encontrar las mejores soluciones para sus necesidades legales.
          </p>
        </div>
      </div>
    </section>
  );
}