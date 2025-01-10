'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Lock, BarChart, Settings, Target } from 'lucide-react';
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
    const [preferences, setPreferences] = useState({
        necesarias: true, // Siempre true
        rendimiento: false,
        funcionales: false,
        publicidad: false
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        } else {
            setHasInteracted(true);
            try {
                const savedPreferences = JSON.parse(consent);
                setPreferences(savedPreferences);
            } catch (e) {
                // Si hay error en el parsing, usar los valores por defecto
            }
        }
    }, []);

    const acceptAllCookies = () => {
        const allAccepted = {
            necesarias: true,
            rendimiento: true,
            funcionales: true,
            publicidad: true
        };
        localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
        setPreferences(allAccepted);
        setIsVisible(false);

        setHasInteracted(true);
    };

    const rejectAllCookies = () => {
        const allRejected = {
            necesarias: true, // Siempre true
            rendimiento: false,
            funcionales: false,
            publicidad: false
        };
        localStorage.setItem('cookieConsent', JSON.stringify(allRejected));
        setPreferences(allRejected);
        setIsVisible(false);

        setHasInteracted(true);
    };

    const savePreferences = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(preferences));
        setIsVisible(false);
        setShowModal(false);
        setHasInteracted(true);
    };

    const handleToggle = (cookieType: keyof typeof preferences) => {
        if (cookieType === 'necesarias') return; // No permitir cambiar las necesarias
        setPreferences(prev => ({
            ...prev,
            [cookieType]: !prev[cookieType]
        }));
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
            description: "Nos ayudan a analizar cómo los usuarios interactúan con nuestro sitio web.",
            details: [
                "Análisis de uso del sitio",
                "Detección de errores",
                "Mejora de la experiencia del usuario",
                "Estadísticas de navegación"
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
                "Ajustes de visualización",
                "Configuraciones guardadas"
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
                "Análisis de comportamiento",
                "Preferencias publicitarias"
            ],
            required: false
        }
    ];

    return (
        <>
            {/* Cookie Banner */}
            {isVisible && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                    <div className="max-w-7xl mx-auto p-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex-1">
                                <p className="text-sm text-gray-600">
                                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
                                    Puedes personalizar tus preferencias o aceptar todas las cookies.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                                >
                                    Personalizar
                                </button>
                                <button
                                    onClick={rejectAllCookies}
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                                >
                                    Rechazar todas
                                </button>
                                <button
                                    onClick={acceptAllCookies}
                                    className="w-full sm:w-auto px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors text-sm font-medium"
                                >
                                    Aceptar todas
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
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-4 sm:p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Configuración de Cookies</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="prose prose-yellow max-w-none mb-6">
                                <p className="text-sm sm:text-base text-gray-600">
                                    En <strong>ARENAS MORA Abogados</strong> respetamos tu privacidad. Personaliza tus preferencias
                                    de cookies según tus necesidades.
                                </p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {cookieTypes.map((cookie) => (
                                    <AccordionItem
                                        key={cookie.id}
                                        value={cookie.id}
                                        className="border rounded-lg px-4"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-4">
                                            <div className="flex items-center gap-3 flex-1">
                                                <cookie.icon className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                                                <div className="text-left flex-1">
                                                    <h3 className="font-semibold text-gray-900">{cookie.title}</h3>
                                                    <p className="text-sm text-gray-600">{cookie.description}</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleToggle(cookie.id as keyof typeof preferences);
                                                        }}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${preferences[cookie.id as keyof typeof preferences]
                                                            ? 'bg-yellow-600'
                                                            : 'bg-gray-200'
                                                            } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                                        disabled={cookie.required}
                                                    >
                                                        <span
                                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences[cookie.id as keyof typeof preferences] ? 'translate-x-6' : 'translate-x-1'
                                                                }`}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="pt-2 pb-4 space-y-4">
                                                <ul className="space-y-2">
                                                    {cookie.details.map((detail, index) => (
                                                        <li key={index} className="flex items-center gap-2 text-gray-600">
                                                            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full flex-shrink-0" />
                                                            <span className="text-sm">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {cookie.required && (
                                                    <p className="text-sm text-gray-500 italic">
                                                        * Estas cookies son necesarias y no pueden desactivarse
                                                    </p>
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row justify-end items-center gap-4">
                                <button
                                    onClick={rejectAllCookies}
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                                >
                                    Rechazar todas
                                </button>
                                <button
                                    onClick={acceptAllCookies}
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                                >
                                    Aceptar todas
                                </button>
                                <button
                                    onClick={savePreferences}
                                    className="w-full sm:w-auto px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors text-sm font-medium"
                                >
                                    Guardar preferencias
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}