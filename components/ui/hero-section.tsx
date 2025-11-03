'use client';

import { Scale } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative text-white opacity-80 transition-opacity duration-1000 ease-in-out bg-black opacity" style={{ opacity: 1, backgroundImage: 'url(/slider.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full bg-black/75 mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <Image src='/ley.png' width={50} height={50} alt="Logo" className="h-16 w-auto mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Arenas Mora & Asociados
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Defendiendo sus Derechos con experiencia, dedicación y profesionalidad
          </p>
          <div className="flex flex-col items-center space-y-8">
            <Link
              href="/contacto"
              className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              CONTACTA CON NOSOTROS
            </Link>

            <div className="w-48 h-0.5 bg-[#D4B98C]"></div>

            <Link
              href="https://wa.me/34654746366"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-all duration-300"
            >
              <span className="text-xl mb-2 text-[#D4B98C] group-hover:text-white transition-colors">
                También puedes contactarnos por WhatsApp
              </span>
              <Image
                src="/whatssap.webp"
                alt="WhatsApp"
                width={48}
                height={48}
                className="mt-2 filter-none brightness-0 sepia hue-rotate-[5deg] saturate-[.75] group-hover:brightness-0 group-hover:invert group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}