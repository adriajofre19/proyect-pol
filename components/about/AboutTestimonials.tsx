export function AboutTestimonials() {
    const testimonials = [
        {
            text: "El mejor servicio legal que he recibido. Su atención personalizada y profesionalismo son excepcionales.",
            author: "María Sánchez",
            role: "Empresaria",
        },
        {
            text: "Resolvieron mi caso con gran eficiencia y siempre me mantuvieron informado del proceso.",
            author: "Juan Pérez",
            role: "Cliente Particular",
        },
        {
            text: "Su experiencia en derecho mercantil fue clave para el éxito de nuestra empresa.",
            author: "Pedro Martínez",
            role: "Director General",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
                    <p className="text-lg text-gray-600">
                        La satisfacción de nuestros clientes es nuestro mejor aval
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                            <div>
                                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                <p className="text-yellow-600">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}