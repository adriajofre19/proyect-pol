export function ContactHero() {
  return (
    <div className="relative h-[400px] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Despacho de abogados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contacto</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Estamos aquí para ayudarle. Contacte para una consulta gratuita y descubra cómo podemos defender sus derechos.
          </p>
        </div>
      </div>
    </div>
  );
}