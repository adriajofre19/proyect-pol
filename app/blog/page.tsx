'use client';

import { useState } from 'react';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogCategories } from '@/components/blog/BlogCategories';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-gray-50">
            <BlogHero />
            <BlogCategories
                onCategorySelect={setSelectedCategory}
                activeCategory={selectedCategory}
            />
            <BlogGrid selectedCategory={selectedCategory} />
        </main>
    );
}