'use client';

import { Scale } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative text-white opacity-80 transition-opacity duration-1000 ease-in-out bg-black opacity" style={{ opacity: 1, backgroundImage: 'url(/slider.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full bg-black/75 mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">

          <Image src='/ley.png' alt="Logo" className="h-16 w-auto mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Arenas Mora & Asociados
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