import { Scale, Building2, Users, Briefcase, Home, FileText } from 'lucide-react';

export function BlogCategories() {
  const categories = [
    { name: 'Civil', icon: Scale, count: 12 },
    { name: 'Mercantil', icon: Building2, count: 8 },
    { name: 'Familia', icon: Users, count: 10 },
    { name: 'Laboral', icon: Briefcase, count: 15 },
    { name: 'Inmobiliario', icon: Home, count: 7 },
    { name: 'Administrativo', icon: FileText, count: 6 },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <category.icon className="h-6 w-6 text-yellow-600 mb-2" />
              <span className="font-medium text-gray-900">{category.name}</span>
              <span className="text-sm text-gray-500">{category.count} artículos</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}