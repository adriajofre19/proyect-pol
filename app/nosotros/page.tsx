'use client';

import { AboutHero } from '@/components/about/AboutHero';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutTestimonials } from '@/components/about/AboutTestimonials';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <AboutHero />
            <AboutValues />
            <AboutTestimonials />
        </main>
    );
}