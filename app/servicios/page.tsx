'use client';

import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import { ServicesProcess } from '@/components/services/ServicesProcess';
import { ServicesPricing } from '@/components/services/ServicesPricing';
import { ServicesFAQ } from '@/components/services/ServicesFAQ';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <ServicesHero />
            <ServicesList />
            <ServicesProcess />
            <ServicesPricing />
            <ServicesFAQ />
        </main>
    );
}