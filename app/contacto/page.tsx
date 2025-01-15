'use client';

import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactMap } from '@/components/contact/ContactMap';
import { ContactHero } from '@/components/contact/ContactHero';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4]">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <ContactForm />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>


    </main>
  );
}