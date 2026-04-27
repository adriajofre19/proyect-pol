"use client";

import { useState } from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { Article } from "@/types/blog";

export function BlogPageClient({ articles }: { articles: Article[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      <BlogHero />
      <BlogCategories
        articles={articles}
        onCategorySelect={setSelectedCategory}
        activeCategory={selectedCategory}
      />
      <BlogGrid articles={articles} selectedCategory={selectedCategory} />
    </main>
  );
}
