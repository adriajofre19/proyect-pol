import { Scale } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/ley.png" width={50} height={50} alt="Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Arenas Mora & Asociados</span>
            </div>
            <p className="text-gray-400">
              Asesoramiento legal profesional y personalizado para proteger sus derechos Laborales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Politica de cookies
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="text-gray-400 hover:text-white transition-colors">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">
                  Politica de privacidad
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Derecho Laboral</li>
              <li className="text-gray-400">Derecho de la Seguridad Social</li>
              <li className="text-gray-400">Derecho de Extranjería</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Carrer de París, 45-47</li>
              <li>08029 Eixample, Barcelona</li>
              <li>+34 933 220 553</li>
              <li>polarenas@icab.cat</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arenas Mora & Asociados. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}