'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'INICIO' },
    { href: '/nosotros', label: 'NOSOTROS' },
    { href: '/servicios', label: 'SERVICIOS' },
    { href: '/blog', label: 'BLOG' },
  ];

  const pathname = usePathname();

  return (
    <nav className="bg-[#f4ece0] shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-36 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" width={50} height={50} alt="Logo" className="h-36 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-yellow-400 px-3 py-2 transition-colors 
                  ${pathname === link.href ? 'text-yellow-500' : 'text-black'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex'>
            <Link href={'/contacto'} className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
              CONTACTA CON NOSOTROS
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link href={'/contacto'}
                className="text-gray-700 bg-yellow-500 text-center rounded-lg hover:text-gray-900 px-3 py-2 text-base font-medium tracking-wider"
                onClick={() => setIsMenuOpen(false)}>
                CONTACTA CON NOSOTROS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}