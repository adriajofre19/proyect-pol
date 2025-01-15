'use client';

import { Scale, Building2, Users, Briefcase, Home, FileText } from 'lucide-react';
import articlesData from '@/data/articles.json';

export function BlogCategories({ onCategorySelect, activeCategory }: {
  onCategorySelect: (category: string | null) => void;
  activeCategory: string | null;
}) {
  const categoryIcons = {
    'Civil': Scale,
    'Mercantil': Building2,
    'Familia': Users,
    'Laboral': Briefcase,
    'Inmobiliario': Home,
    'Penal': FileText,
  };

  // Calculate category counts from articles
  const categoryCounts = articlesData.articles.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Create categories array with counts
  const categories = Object.entries(categoryIcons).map(([name, icon]) => ({
    name,
    icon,
    count: categoryCounts[name] || 0
  }));

  return (
    <section className="py-12 bg-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategorySelect(activeCategory === category.name ? null : category.name)}
              className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all ${activeCategory === category.name ? 'ring-2 ring-yellow-600' : ''
                }`}
            >
              <category.icon className={`h-6 w-6 ${activeCategory === category.name ? 'text-yellow-600' : 'text-gray-600'
                } mb-2`} />
              <span className={`font-medium ${activeCategory === category.name ? 'text-yellow-600' : 'text-gray-900'
                }`}>
                {category.name}
              </span>
              <span className="text-sm text-gray-500">{category.count} artículos</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}