import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 h-[400px]">
        <Image
          src="/images/sections/blog-hero.jpg"
          alt="Blog legal"
          className="w-full h-full object-cover"
          width={2000}
          height={400}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-[400px] flex items-center">
        <div className="text-center mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-6">Blog Legal</h1>
          <p className="text-xl text-gray-100">
            Artículos, noticias y actualizaciones sobre el mundo legal. Mantente
            informado sobre las últimas novedades jurídicas.
          </p>
        </div>
      </div>
    </section>
  );
}
