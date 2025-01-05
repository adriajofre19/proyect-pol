export function BlogHero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          alt="Blog legal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-[400px] flex items-center">
        <div className="text-center mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-6">Blog Legal</h1>
          <p className="text-xl text-gray-100">
            Artículos, noticias y actualizaciones sobre el mundo legal.
            Mantente informado sobre las últimas novedades jurídicas.
          </p>
        </div>
      </div>
    </section>
  );
}