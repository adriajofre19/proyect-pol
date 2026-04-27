"use client";

import {
  Scale,
  Building2,
  Users,
  Briefcase,
  Home,
  FileText,
  Globe,
} from "lucide-react";

export function BlogCategories({
  onCategorySelect,
  activeCategory,
}: {
  onCategorySelect: (category: string | null) => void;
  activeCategory: string | null;
}) {
  const categoryIcons = {
    Civil: Scale,
    Mercantil: Building2,
    Familia: Users,
    Laboral: Briefcase,
    Inmobiliario: Home,
    Penal: FileText,
    Extranjería: Globe,
  };
  const categories = Object.entries(categoryIcons).map(([name, icon]) => ({
    name,
    icon,
  }));

  return (
    <section className="relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-end gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() =>
                onCategorySelect(
                  activeCategory === category.name ? null : category.name,
                )
              }
              className={`w-fit flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all ${
                activeCategory === category.name ? "ring-2 ring-yellow-600" : ""
              }`}
            >
              <category.icon
                className={`h-3.5 w-3.5 shrink-0 ${
                  activeCategory === category.name
                    ? "text-yellow-600"
                    : "text-gray-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  activeCategory === category.name
                    ? "text-yellow-600"
                    : "text-gray-900"
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
