'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, ChevronDown, Lock, BarChart, Settings, Target } from 'lucide-react';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        } else {
            setHasInteracted(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        setHasInteracted(true);
    };

    const handleClose = () => {
        setIsVisible(false);
        setHasInteracted(true);
    };

    const cookieTypes = [
        {
            id: "necesarias",
            icon: Lock,
            title: "Cookies necesarias",
            description: "Son esenciales para el funcionamiento del sitio web y no pueden desactivarse.",
            details: [
                "Mantienen tu sesión activa",
                "Guardan tus preferencias básicas",
                "Aseguran el funcionamiento del sitio"
            ],
            required: true
        },
        {
            id: "rendimiento",
            icon: BarChart,
            title: "Cookies de rendimiento",
            description: "Nos ayudan a analizar el uso del sitio web y mejorar su funcionamiento.",
            details: [
                "Análisis de uso del sitio",
                "Detección de errores",
                "Mejora de la experiencia"
            ],
            required: false
        },
        {
            id: "funcionales",
            icon: Settings,
            title: "Cookies funcionales",
            description: "Permiten recordar tus preferencias para una mejor experiencia.",
            details: [
                "Recordar preferencias de idioma",
                "Personalización de contenido",
                "Ajustes de visualización"
            ],
            required: false
        },
        {
            id: "publicidad",
            icon: Target,
            title: "Cookies de publicidad",
            description: "Se utilizan para mostrar anuncios relevantes y analizar las campañas.",
            details: [
                "Publicidad personalizada",
                "Medición de campañas",
                "Análisis de comportamiento"
            ],
            required: false
        }
    ];

    return (
        <>
            {/* Cookie Banner */}
            {isVisible && (
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
                                    onClick={handleClose}
                                    className="p-1 text-gray-400 hover:text-gray-500"
                                    aria-label="Cerrar"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Cookie Button */}
            {hasInteracted && (
                <button
                    onClick={() => setShowModal(true)}
                    className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
                    aria-label="Configuración de cookies"
                >
                    <Cookie className="h-6 w-6 text-yellow-600" />
                </button>
            )}

            {/* Cookie Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Configuración de Cookies</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <p className="text-gray-600 mb-6">
                                Utilizamos diferentes tipos de cookies para optimizar tu experiencia en nuestro sitio web.
                                A continuación, puedes obtener más información sobre cada tipo de cookie.
                            </p>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {cookieTypes.map((cookie) => (
                                    <AccordionItem
                                        key={cookie.id}
                                        value={cookie.id}
                                        className="rounded-lg px-4"
                                    >
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <cookie.icon className="h-5 w-5 text-yellow-600" />
                                                <div className="text-left">
                                                    <h3 className="font-semibold text-gray-900">{cookie.title}</h3>
                                                    <p className="text-sm text-gray-600">{cookie.description}</p>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="pt-2 pb-4">
                                                <ul className="space-y-2">
                                                    {cookie.details.map((detail, index) => (
                                                        <li key={index} className="flex items-center gap-2 text-gray-600">
                                                            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                                {cookie.required && (
                                                    <p className="mt-3 text-sm text-gray-500 italic">
                                                        * Estas cookies son necesarias y no pueden desactivarse
                                                    </p>
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            <div className="mt-6 pt-4 border-t">
                                <Link
                                    href="/cookies"
                                    className="text-yellow-600 hover:text-yellow-700 text-sm"
                                >
                                    Ver política de cookies completa
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}