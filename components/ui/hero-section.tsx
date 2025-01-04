'use client';

import { Scale } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <Scale className="h-16 w-16 mx-auto mb-6 text-yellow-500" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pol Arenas Mora
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Defendiendo sus derechos con experiencia, dedicación y profesionalidad
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
          >
            Primera Consulta Gratuita
          </Link>
        </div>
      </div>
    </div>
  );
}