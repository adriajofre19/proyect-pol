export function AboutHero() {
    return (
        <section className="relative bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            Experiencia y Compromiso en Derecho
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Con más de 15 años de experiencia, nuestro despacho se ha convertido en un referente
                            en el sector legal. Nos especializamos en diversas áreas del derecho, ofreciendo
                            soluciones personalizadas y efectivas para nuestros clientes.
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-yellow-600">15+</h3>
                                <p className="text-gray-600">Años de experiencia</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-yellow-600">500+</h3>
                                <p className="text-gray-600">Casos exitosos</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-yellow-600">98%</h3>
                                <p className="text-gray-600">Clientes satisfechos</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                            alt="Despacho de abogados"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}