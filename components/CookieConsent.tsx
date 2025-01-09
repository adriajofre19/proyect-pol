'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex-1">
                        <p className="text-sm text-gray-600">
                            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
                            Al continuar navegando, aceptas nuestra{' '}
                            <Link href="/cookies" className="text-yellow-600 hover:text-yellow-700 underline">
                                política de cookies
                            </Link>.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={acceptCookies}
                            className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors text-sm font-medium"
                        >
                            Aceptar cookies
                        </button>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="p-1 text-gray-400 hover:text-gray-500"
                            aria-label="Cerrar"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}