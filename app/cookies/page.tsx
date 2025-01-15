export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-[#FFFBF4] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Cookies</h1>

                    <section className="mb-8">
                        <p className="text-gray-600 text-lg mb-4">
                            En <span className="font-bold">ARENAS MORA Abogados</span> respetamos tu privacidad y nos comprometemos a
                            ofrecerte una experiencia en línea segura y personalizada. Esta <span className="font-bold"> Política de Cookies </span> tiene
                            como objetivo informarte sobre qué son las cookies, cómo las utilizamos en nuestro sitio
                            web y cómo puedes gestionarlas.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Qué son las cookies?</h2>
                        <p className="text-gray-600 text-lg mb-4">
                            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                            (ordenador, tablet, móvil) cuando visitas un sitio web. Estos archivos permiten que el sitio
                            web recuerde tus acciones y preferencias durante un período de tiempo, como el idioma,
                            el tamaño de la letra y otras configuraciones de visualización.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tipos de cookies que utilizamos</h2>
                        <p className="text-gray-600 text-lg mb-4">En nuestro sitio web utilizamos diferentes tipos de cookies con distintas finalidades:</p>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">1. Cookies necesarias</h3>
                                <p className="text-gray-600 text-lg">
                                    Son esenciales para el funcionamiento de nuestro sitio web y permiten la
                                    navegación en el mismo. Estas cookies no recopilan información personal y no
                                    pueden desactivarse en nuestros sistemas.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">2. Cookies de rendimiento</h3>
                                <p className="text-gray-600 text-lg">
                                    Estas cookies nos permiten analizar cómo los usuarios interactúan con nuestro sitio
                                    web, recopilar información sobre las páginas visitadas, los enlaces clicados y
                                    posibles errores.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">3. Cookies funcionales</h3>
                                <p className="text-gray-600 text-lg">
                                    Estas cookies permiten que el sitio web recuerde opciones que has seleccionado
                                    (como el idioma o la región), para proporcionarte una experiencia más
                                    personalizada.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">4. Cookies de publicidad y análisis</h3>
                                <p className="text-gray-600 text-lg">
                                    Utilizamos cookies para mostrar anuncios relevantes según tus intereses y para
                                    realizar un seguimiento del rendimiento de las campañas publicitarias.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 text-lg mb-4">¿Cómo gestionar las cookies?</h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            Puedes configurar tu navegador para aceptar o rechazar cookies, o bien eliminar las cookies ya
                            almacenadas. Ten en cuenta que si decides desactivar algunas cookies, algunas
                            funcionalidades del sitio web pueden verse afectadas.
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-900 text-lg mb-2">Configuración en navegadores principales:</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Google Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios</li>
                                <li>Mozilla Firefox: Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
                                <li>Safari: Preferencias &gt; Privacidad</li>
                                <li>Microsoft Edge: Configuración &gt; Cookies y permisos de sitio</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cambios en esta política</h2>
                        <p className="text-gray-600 text-lg">
                            Nos reservamos el derecho de modificar esta Política de Cookies en cualquier
                            momento. Cualquier cambio será publicado en esta página, indicando la fecha de la última
                            actualización.
                        </p>
                    </section>

                    <section>
                        <p className="text-sm text-gray-500 text-lg">
                            Última actualización: enero de 2025
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}