import { formatDate } from '@/lib/utils';

export function BlogGrid() {
  const articles = [
    {
      title: 'Novedades en la Ley de Arrendamientos Urbanos',
      excerpt: 'Análisis de las últimas modificaciones legislativas en materia de alquiler...',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Inmobiliario',
      date: '2024-03-15',
      readTime: '5 min'
    },
    {
      title: 'Guía para Autónomos: Novedades Fiscales 2024',
      excerpt: 'Todo lo que necesitas saber sobre las nuevas obligaciones fiscales...',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Mercantil',
      date: '2024-03-10',
      readTime: '7 min'
    },
    {
      title: 'Reforma Laboral: Impacto en los Contratos',
      excerpt: 'Análisis detallado de los cambios en la contratación laboral...',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Laboral',
      date: '2024-03-05',
      readTime: '6 min'
    },
    {
      title: 'Custodia Compartida: Criterios Actuales',
      excerpt: 'Los tribunales establecen nuevos criterios para la custodia compartida...',
      image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Familia',
      date: '2024-03-01',
      readTime: '8 min'
    },
    {
      title: 'Protección de Datos en Pequeñas Empresas',
      excerpt: 'Guía práctica para cumplir con la normativa de protección de datos...',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Mercantil',
      date: '2024-02-28',
      readTime: '5 min'
    },
    {
      title: 'Reclamaciones por Accidentes de Tráfico',
      excerpt: 'Procedimiento y plazos para reclamar indemnizaciones por accidentes...',
      image: 'https://images.unsplash.com/photo-1562411052-c3ac57d83aa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      category: 'Civil',
      date: '2024-02-25',
      readTime: '6 min'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-yellow-600">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(new Date(article.date))}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {article.readTime} de lectura
                  </span>
                  <button className="text-yellow-600 hover:text-yellow-700 font-medium">
                    Leer más →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}