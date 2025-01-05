'use client';

import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogCategories } from '@/components/blog/BlogCategories';
import { BlogNewsletter } from '@/components/blog/BlogNewsletter';

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <BlogHero />
            <BlogCategories />
            <BlogGrid />
            <BlogNewsletter />
        </main>
    );
}