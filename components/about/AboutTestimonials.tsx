'use client';

export function AboutTestimonials() {

    const testimonials = [
        {
            text: "El mejor servicio legal que he recibido. Su atención personalizada y profesionalidad son excepcionales.",
            author: "Emma Cantón",
            date: "11 de Noviembre de 2023",
            role: "Cliente Particular",
        },
        {
            text: "Resolvieron mi caso con gran eficiencia y siempre me mantuvieron informado del proceso.",
            author: "Joan Quesada",
            date: "20 de Junio de 2024",
            role: "Cliente Particular",
        },
        {
            text: "Mi abogado de referencia para todo tipo de asuntos relativos al derecho laboral.",
            author: "Rafael Grau",
            date: "9 de Enero de 2025",
            role: "Empresario",
        },
    ];

    return (
        <section className="py-20 bg-[#FFFBF4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
                    <p className="text-lg text-gray-600">
                        La satisfacción de nuestros clientes es nuestro mejor aval
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
                            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                            <div>
                                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                <p className="text-yellow-600">{testimonial.role}</p>
                                <p className="text-gray-600 mt-4">{testimonial.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}