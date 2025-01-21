'use client';

import { useState } from 'react';
import { formatDate } from '@/lib/utils';
import { ArticleModal } from './ArticleModal';
import articlesData from '@/data/articles.json';
import { Article } from '@/types/blog';
import Image from 'next/image';

export function BlogGrid({ selectedCategory }: { selectedCategory: string | null }) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = selectedCategory
    ? articlesData.articles.filter(article => article.category === selectedCategory)
    : articlesData.articles;

  if (selectedCategory && filteredArticles.length === 0) {
    return (
      <section className="py-16 bg-[#FFFBF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No hay artículos disponibles en la categoría {selectedCategory}.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <Image
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
                    <span className="text-yellow-600 hover:text-yellow-700 font-medium">
                      Leer más →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </>
  );
}